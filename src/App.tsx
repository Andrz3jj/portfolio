import Navbar from './components/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import './App.css';

function App() {
    return (
        <>
            <div>
                <Navbar />

                <div id="about">
                    <About />
                </div>

                <div id="projects">
                    <Projects />
                </div>

                <div id="experience">
                    <Experience />
                </div>

                <div id="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default App