import warnings
warnings.filterwarnings("ignore")

import streamlit as st
import numpy as np
import cv2
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.resnet50 import preprocess_input
import json

# ---- Page Config (favicon + title) ----
st.set_page_config(
    page_title="ত্বকের রোগ সনাক্তকরণ",   # Browser tab title
    page_icon="🩺",               # Use "favicon.png" (place in same folder) OR emoji like "🩺"
    layout="centered"
)

# ---- Custom CSS (white background + black text) ----
st.markdown(
    """
    <style>
    .stApp {
        background-color: white;
    }
    html, body, [class*="css"] {
        color: black !important;
    }
    h1, h2, h3, h4, h5, h6, p {
        color: black !important;
    }
    .stFileUploader label, .stButton button {
        color: black !important;
    }
    </style>
    """,
    unsafe_allow_html=True
)

# ---- Load Model ----
model = load_model("my_model.h5")

# ---- Load Label Map ----
with open("label_map.json", "r", encoding="utf-8") as f:
    label_map = json.load(f)
reverse_label_map = {v: k for k, v in label_map.items()}

# ---- শিরোনাম ----
st.markdown(
    "<h1 style='color: black;'>ত্বকের রোগ সনাক্তকরণ অ্যাপ</h1>",
    unsafe_allow_html=True
)
st.markdown(
    "<p style='color: black;'>আপনার ছবি আপলোড করুন, আমরা রোগের নাম ও নির্ভরতার মাত্রা বলব।</p>",
    unsafe_allow_html=True
)

# ---- ছবি আপলোডার ----
uploaded_file = st.file_uploader("ছবি নির্বাচন করুন (jpg/png)", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    # ছবি পড়া ও দেখানো
    file_bytes = np.asarray(bytearray(uploaded_file.read()), dtype=np.uint8)
    img = cv2.imdecode(file_bytes, 1)  # OpenCV এ ছবি BGR ফরম্যাটে থাকে
    # Show image
    st.image(cv2.cvtColor(img, cv2.COLOR_BGR2RGB), use_container_width=True)

    # Custom black caption
    st.markdown(
        "<p style='color: black; text-align: center;'>আপলোডকৃত ছবি</p>",
        unsafe_allow_html=True
    )


    # ছবি প্রিপ্রসেসিং
    resized_img = cv2.resize(img, (224, 224))
    input_img = np.expand_dims(resized_img, axis=0)
    input_img = preprocess_input(input_img)

    # রোগ শনাক্তকরণ
    predictions = model.predict(input_img)
    predicted_index = np.argmax(predictions)
    confidence = float(np.max(predictions))
    predicted_class = reverse_label_map[predicted_index]

    # ---- ফলাফল দেখানো ----
    st.markdown(
        f"<h3 style='color: black;'>সম্ভাব্য রোগ: {predicted_class}</h3>",
        unsafe_allow_html=True
    )
    st.markdown(
        f"<h3 style='color: black;'>বিশ্বাসযোগ্যতার মাত্রা: {confidence:.2%}</h3>",
        unsafe_allow_html=True
    )            
