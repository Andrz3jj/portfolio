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
                <About />
                <Experience />
                <Projects />
                <Footer />
            </div>
        </>
    )
}

export default App