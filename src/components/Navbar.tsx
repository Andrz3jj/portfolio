import { MdNightlight } from "react-icons/md";

export default function Navbar() {
    return (
        <>
            <div className="fixed top-0 z-50 w-full flex justify-between items-center bg-transparent backdrop-blur-lg pl-80 pr-80">
                <div className="space-x-10 text-lg p-5 text-center text-gray-500">
                    <span className="hover:text-gray-900 transition cursor-pointer">o mnie</span>
                    <span className="hover:text-gray-900 transition cursor-pointer">projekty</span>
                    <span className="hover:text-gray-900 transition cursor-pointer">kontakt</span>
                </div>
                <div className="p-5">
                    <MdNightlight size={25} />
                </div>
            </div>
        </>
    )
}