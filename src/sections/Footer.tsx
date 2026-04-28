import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export default function Footer() {
    return (
        <>
            <div className="flex justify-center text-gray-400 text-sm pb-2">
                <div className="w-2/3 flex">
                    <span>@ 2026</span>
                    <div className="flex ml-auto space-x-2">
                        <a href="https://www.linkedin.com/in/andrzej-bajcarczyk-468941404/" target="_blank"><FaLinkedin size={35} /></a>
                        <a href="https://github.com/Andrz3jj" target="_blank"><FaGithubSquare size={35} /></a>
                        <a href="mailto:andrzej1332@onet.pl"><RiMailFill size={35} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}