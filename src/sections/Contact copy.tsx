export default function Contact() {
    return (
        <>
            <div className="flex justify-center pb-60">
                <div className="w-2/3">
                    <span className="mr-auto text-2xl font-semibold">Kontakt:</span>
                    <div className="grid grid-cols-2 gap-4 w-full mt-4">
                        <input
                            type="text"
                            placeholder="Podaj imię..."
                            className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 transition" />
                        <input
                            type="text"
                            placeholder="Podaj email..."
                            className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 transition" />
                    </div>
                    <textarea placeholder="Podaj treść wiadomości..."
                        className="mt-4 w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 resize-none transition" />
                    <button className="mt-4 w-full bg-black hover:bg-gray-800 text-white rounded-lg p-2 outline-none hover:cursor-pointer transition">
                        Wyślij
                    </button>
                </div>
            </div>
        </>
    )
}