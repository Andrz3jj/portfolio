import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export default function About() {
    return (
        <>
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <div className="flex flex-col text-center">
                    <span className="text-xl md:text-4xl font-extrabold pb-1 md:pb-2">Cześć!, Jestem Andrzej</span>
                    <span className="sm:text-md md:text-2xl font-semibold pb-0.5 md:pb-0.5">Uczeń, programista.</span>
                    <span className="text-sm md:text-lg ml-0.5 mr-0.5 md:ml-0 md:mr-0">
                        Mam 17 lat i wolne chwile spędzam na kodowaniu.<br />
                        Eksperymentuję z frontendem,<br />
                        uczę się nowych technologii<br />
                        i zmieniam pomysły w działające projekty.<br />
                    </span>
                    <div className="flex items-center justify-center space-x-2 pt-3">
                        <a href="https://www.linkedin.com/in/andrzej-bajcarczyk-468941404/" target="_blank"><FaLinkedin size={35} /></a>
                        <a href="https://github.com/Andrz3jj" target="_blank"><FaGithubSquare size={35} /></a>
                        <a href="mailto:andrzej1332@onet.pl"><RiMailFill size={35} /></a>
                    </div>
                </div>
            </div >
        </>
    )
}