import React from "react";
import Layout from "../component/Layout";
import CheckYourSkin from "../component/CheckYourSkin";

import AIDermatologist from "../component/AIDermatologist";
import AIDermatologistSection from "../component/AIDermatologistSection";
import AIDermatologistReview from "../component/AIDermatologistReview";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <Layout>
      <AIDermatologist/>
      <AIDermatologistSection/>
      <AIDermatologistReview/>
      <Footer/>
   
    </Layout>
  );
};

export default Home;
