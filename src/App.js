import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Databases from './components/Databases';
import Footer from './components/Footer';
import Education from "./components/Education"
import { Container } from '@mui/material';
import Aos from "aos"
import { useEffect } from 'react';
import "aos/dist/aos.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useRef } from 'react';

const useStyles = makeStyles({
  customBtnWidth1: {
    height: "100px",
    width: "100px"
  },
  customBtnWidth2: {
    height: "75px",
    width: "75px"
  },
})

function App() {
  const theme1 = useTheme();
  const matches = useMediaQuery(theme1.breakpoints.up('md'));
  const matchesSmall = useMediaQuery(theme1.breakpoints.up('sm'))
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    })
  }, [])
  const theme = createTheme({
    typography: {
      h2: {
        fontSize: matches ? "4em" : "3em"
      },
      h4: {
        fontSize: matches ? "2.05em" : "1.25em"
      }
    },
  })

  const skillsRef = useRef();
  const educationRef = useRef();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="100%" sx={{ padding: "0" }}>
        <Navbar skillsRef={skillsRef} educationRef={educationRef} />
        <Intro />
        <Skills useStyles={useStyles} matches={matchesSmall} fRef={skillsRef} />
        <Databases useStyles={useStyles} matches={matchesSmall} />
        <Education matches={matches} fRef={educationRef} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
