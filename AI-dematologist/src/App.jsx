import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import PhotoGuideCard from "./component/PhotoGuideCard";
import PhotoUploadPage from "./component/PhotoUploadPage";
import FAQ from "./component/FAQ";
import Question1 from "./FAQ Answer/First";
import Question2 from "./FAQ Answer/Second";
import Question3 from "./FAQ Answer/Third";
import Question4 from "./FAQ Answer/Fourth";
import Question5 from "./FAQ Answer/Fifth";
import Question6 from "./FAQ Answer/Sixth";
import Question7 from "./FAQ Answer/Seventh";
import Question8 from "./FAQ Answer/Eighth";
import DiseaseDictionary from "./component/DiseaseDictionary";
import MelanomaDetails from "./Disease details/AOne";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<PhotoGuideCard />} />
        <Route path="/upload" element={<PhotoUploadPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq/question-1" element={< Question1/>} />
        <Route path="/faq/question-2" element={< Question2/>} />
        <Route path="/faq/question-3" element={< Question3/>} />
        <Route path="/faq/question-4" element={< Question4/>} />
        <Route path="/faq/question-5" element={< Question5/>} />
        <Route path="/faq/question-6" element={< Question6/>} />
        <Route path="/faq/question-7" element={< Question7/>} />
        <Route path="/faq/question-8" element={< Question8/>} />
        <Route path="/disease-list" element={< DiseaseDictionary/>} />
        <Route path="/disease/a-1" element={<MelanomaDetails/>} />
        
      </Routes>
    </Router>
  );
}

export default App;