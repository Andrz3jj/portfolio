import { MdNightlight } from "react-icons/md";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaSun } from "react-icons/fa";
import Navbar from './components/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(false);

    function toggleTheme() {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    }

    function toggleDropDown() {
        setIsOpen(!isOpen);
    }

    const dropDownVariants = {
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.2,
            },
        },
        closed: {
            opacity: 0,
            height: 0,
            overflow: 'hidden',
            transition: {
                duration: 0.2,
            },
        },
    }

    return (
        <>
            <div className="hidden sm:flex fixed top-0 z-50 w-full justify-between items-center bg-transparent backdrop-blur-lg sm:pl-20 sm:pr-20 md:pl-40 md:pr-40 lg:pl-80 lg:pr-80">
                <div className="space-x-10 text-lg p-5 text-center text-gray-500">
                    <a href="#about" className="hover:text-gray-900 transition cursor-pointer">o mnie</a>
                    <a href="#projects" className="hover:text-gray-900 transition cursor-pointer">projekty</a>
                    <a href="#contact" className="hover:text-gray-900 transition cursor-pointer">kontakt</a>
                </div>

                <div className="p-5 cursor-pointer" onClick={toggleTheme}>
                    {isDark ? <FaSun size={25} /> : <MdNightlight size={25} />}
                </div>
            </div>

            <div className="flex flex-col sm:hidden fixed top-0 z-50 w-full bg-white/10 backdrop-blur-lg">

                <div className="flex items-center justify-between p-5 w-full">
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={toggleDropDown}>
                        <CiMenuBurger size={30} />
                    </motion.div>


                    <MdNightlight size={25} className="cursor-pointer" />
                </div>

                <motion.div
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={dropDownVariants}
                    className="w-full flex flex-col items-center"
                >
                    <div className="w-full flex flex-col items-center gap-4 pb-5 pt-2">
                        <span className="text-gray-500 transition cursor-pointer">o mnie</span>
                        <span className="text-gray-500 transition cursor-pointer">projekty</span>
                        <span className="text-gray-500 transition cursor-pointer">kontakt</span>
                    </div>
                </motion.div>

            </div>

        </>
    )
}