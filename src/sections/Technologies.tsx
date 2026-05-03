import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Technologies() {
    return (
        <>
            <div className="flex justify-center pb-60">
                <div className="w-2/3">
                    <span className="text-2xl font-semibold mr-auto">Technologie:</span>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="flex items-center gap-1 border-2 rounded-lg p-2 hover:cursor-pointer">
                            <FaReact size={30} />
                            <span>React</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="flex items-center gap-1 border-2 rounded-lg p-2 hover:cursor-pointer">
                            <RiTailwindCssFill size={30} />
                            <span>Tailwind CSS</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="flex items-center gap-1 border-2 rounded-lg p-2 hover:cursor-pointer">
                            <BiLogoPostgresql size={30} />
                            <span>PostgreSQL</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="flex items-center gap-1 border-2 rounded-lg p-2 hover:cursor-pointer">
                            <SiTypescript size={30} />
                            <span>Typescript</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="flex items-center gap-1 border-2 rounded-lg p-2 hover:cursor-pointer">
                            <FaJava size={30} />
                            <span>Java</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="flex items-center gap-1 border-2 rounded-lg p-2 hover:cursor-pointer">
                            <FaWordpress size={30} />
                            <span>Wordpress</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="flex items-center gap-1 border-2 rounded-lg p-2 hover:cursor-pointer">
                            <FaPhp size={30} />
                            <span>PHP</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="flex items-center gap-1 border-2 rounded-lg p-2 hover:cursor-pointer">
                            <FaGit size={30} />
                            <span>Git</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="flex items-center gap-1 border-2 rounded-lg p-2 hover:cursor-pointer">
                            <FaHtml5 size={30} />
                            <span>HTML</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="flex items-center gap-1 border-2 rounded-lg p-2 hover:cursor-pointer">
                            <FaCss3Alt size={30} />
                            <span>CSS</span>
                        </motion.div>
                    </div>
                </div>

            </div >
        </>
    )
}