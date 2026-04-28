export default function Contact() {
    return (
        <>
            <div className="flex justify-center pb-60">
                <div className="w-2/3">
                    <span className="mr-auto text-2xl font-semibold">Kontakt:</span>
                    <div className="space-x-4">
                        <input
                            type="text"
                            placeholder="Podaj imię..."
                            className="border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-gray-300" />
                        <input
                            type="text"
                            placeholder="Podaj email..."
                            className="border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-gray-300" />
                    </div>
                    <textarea placeholder="Podaj treść wiadomości..."
                        className="border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-gray-300 resize-none" />
                </div>
            </div>
        </>
    )
}