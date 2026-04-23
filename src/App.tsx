import Navbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import './App.css';

function App() {
    return (
        <>
            <div>
                <Navbar />
                <About />
                <Projects />
            </div>
        </>
    )
}

export default App