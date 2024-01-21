import './App.css';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { darkTheme } from './utils/themes';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectDetails } from './components/ProjectDetails';
import { useState } from 'react';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(144, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
  padding-bottom: 80px;

  @media (max-width: 500px) {
    padding-bottom: 60px;
  }
`

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null});

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar/>
        <Body>
          <HeroSection/>
          <Wrapper>
            <Skills/>
            <Experience/>
          </Wrapper>
          <Projects setOpenModal = {setOpenModal}/>
          <Wrapper>
            <Contact/>
          </Wrapper>
          <Footer/>
          { 
            openModal.state &&
            <ProjectDetails openModal = {openModal} setOpenModal = {setOpenModal}/>
          }
        </Body>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
