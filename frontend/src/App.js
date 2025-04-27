// App.js
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import MentalWellness from "./Components/MentalWellness/MentalWellness";
import SymptomAnalysis from "./Components/SymptomAnalysis/SymptomAnalysis";
import ConsultDoctor from "./Components/ConsultDoctor/ConsultDoctor";
import "./index.css";

// Reset default browser margins and paddings
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
  const [active, setActive] = useState(1);

  const updateActive = (activeState) => {
    setActive(activeState);
  };

  const displayData = () => {
    switch (active) {
      case 1:
        return <Home updateActive={updateActive} />;
      case 2:
        return <SymptomAnalysis updateActive={updateActive} />;
      case 3:
        return <MentalWellness updateActive={updateActive} />;
      case 4:
        return <ConsultDoctor updateActive={updateActive} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          {displayData()}
        </MainLayout>
      </AppStyled>
    </>
  );
}

export default App;
