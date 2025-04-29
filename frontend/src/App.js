// App.js
import React from "react";
import { Routes, Route} from "react-router-dom"; // ✅ Added Navigate for catch-all
import Homes from "./Components/Home/Home";
import SymptomAnalysis from "./Components/SymptomAnalysis/SymptomAnalysis";
import MentalWellness from "./Components/MentalWellness/MentalWellness";
import ConsultDoctor from "./Components/ConsultDoctor/ConsultDoctor";

import Home from './_components/Home';
import SignIn from './_components/SignIn';
import SignUp from './_components/SignUp';
import "./index.css";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
  }
`;

const AppStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
`;

function App() {
  const [active, setActive] = React.useState(1);

  const updateActive = (activeState) => {
    setActive(activeState);
  };

  return (
    <>
      <GlobalStyle />
      <AppStyled>
       
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/Home" element={<Homes updateActive={updateActive} />} />
            <Route path="/SymptomAnalysis" element={<SymptomAnalysis />} /> {/* ✅ exact path */}
             <Route path="/MentalWellness" element={<MentalWellness />} />
             <Route path="/ConsultDoctor" element={<ConsultDoctor />} />
            </Routes>
      </AppStyled>
    </>
  );
}

export default App;
