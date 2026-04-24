import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function About() {
    return (
        <>
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <div className="flex flex-col text-center">
                    <span className="text-3xl font-extrabold pb-2">Cześć!, Jestem Andrzej</span>
                    <span className="text-xl font-semibold pb-0.5">Uczeń, programista.</span>
                    <span className="text-md">
                        Mam 17 lat i wolne chwile spędzam na kodowaniu.<br />
                        Eksperymentuję z frontendem, uczę się nowych technologii<br />
                        i zmieniam pomysły w działające projekty.<br />
                    </span>
                    <div className="flex items-center justify-center space-x-2 pt-3">
                        <a href="https://www.linkedin.com/in/andrzej-bajcarczyk-468941404/" target="_blank"><FaLinkedin size={30} /></a>
                        <a href="https://github.com/Andrz3jj" target="_blank"><FaGithubSquare size={30} /></a>
                        <a href="mailto:[andrzej1332@onet.pl]"><IoIosMail size={30} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}