import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SymptomAnalysis from '../SymptomAnalysis/SymptomAnalysis';
import MentalWellness from '../MentalWellness/MentalWellness';
import ConsultDoctor from '../ConsultDoctor/ConsultDoctor';
import hero from '../../img/hero.png';
import { SignedIn, UserButton } from '@clerk/clerk-react';

function Home({ updateActive }) {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  useEffect(() => {
    switch (selectedComponent) {
      case 'SymptomAnalysis':
        updateActive(2);
        break;
      case 'MentalWellness':
        updateActive(3);
        break;
      case 'ConsultDoctor':
        updateActive(4);
        break;
      default:
        updateActive(1);
    }
  }, [selectedComponent, updateActive]);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'SymptomAnalysis':
        return <SymptomAnalysis />;
      case 'MentalWellness':
        return <MentalWellness />;
      case 'ConsultDoctor':
        return <ConsultDoctor />;
      default:
        return null;
    }
  };

  return (
    <HomeStyled>
      <UserButtonWrapper>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </UserButtonWrapper>

      {!selectedComponent ? (
        <>
          <HeroSection>
            <div className="hero">
              <div className="text-content">
                <h3>Heal Smart:</h3>
                <h1>Take Charge of Your Health, Mind & Body</h1>
                <p>
                  Feeling under the weather and not sure what's wrong? Don't worry, HealSmart is here to be your friendly health detective!
                </p>
              </div>
              <div className="image-content">
                <img src={hero} alt="Hero" />
              </div>
            </div>
          </HeroSection>

          <CardContainer>
            <Card onClick={() => handleComponentClick('SymptomAnalysis')}>
              <h2>Symptom Analysis</h2>
              <p>Analyze your symptoms and get assistance powered by AI.</p>
            </Card>
            <Card onClick={() => handleComponentClick('MentalWellness')}>
              <h2>Mind-Bot</h2>
              <p>Your AI Companion for Mental Wellness and guidance.</p>
            </Card>
            <Card onClick={() => handleComponentClick('ConsultDoctor')}>
              <h2>Consult Doctor</h2>
              <p>Explore specialists and book appointments hassle-free.</p>
            </Card>
          </CardContainer>
        </>
      ) : (
        renderSelectedComponent()
      )}
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f8f9fa, #e0c3fc);
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 40px;

  .hero {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    max-width: 1200px;
  }

  .text-content {
    flex: 1;
    min-width: 280px;
  }

  .text-content h3 {
    font-size: 2rem;
    color: #6a11cb;
    margin-bottom: 0.5rem;
  }

  .text-content h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #4b0082;
    margin-bottom: 1rem;
  }

  .text-content p {
    font-size: 1.1rem;
    color: #333;
    max-width: 500px;
    margin: 0 auto;
  }

  .image-content {
    flex: 1;
    min-width: 280px;
    display: flex;
    justify-content: center;
  }

  .image-content img {
    width: 300px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    .text-content h1 {
      font-size: 2rem;
    }

    .text-content p {
      font-size: 1rem;
    }

    .image-content img {
      width: 250px;
    }
  }
`;

const CardContainer = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 20px;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
    color: #fff;
  }

  h2 {
    margin-bottom: 1rem;
    color: #6a11cb;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  &:hover h2, &:hover p {
    color: #fff;
  }
`;

const UserButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export default Home;
