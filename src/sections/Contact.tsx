import { useState, FormEvent } from "react";

export default function Contact() {
    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Wysyłanie...");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xvzlpgnl", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("Wiadomość została wysłana pomyślnie!");
                form.reset();
            } else {
                setStatus("Wystąpił błąd. Spróbuj ponownie później.");
            }
        } catch (error) {
            setStatus("Wystąpił błąd sieci. Sprawdź połączenie internetowe.");
        }
    };

    const isSending = status === "Wysyłanie...";

    return (
        <div className="flex justify-center pb-60">
            <form onSubmit={handleSubmit} className="w-2/3">
                <span className="mr-auto text-2xl font-semibold">Kontakt:</span>

                <div className="grid grid-cols-2 gap-4 w-full mt-4">
                    <input
                        type="text"
                        name="Imię"
                        required
                        placeholder="Podaj imię..."
                        className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 transition"
                    />
                    <input
                        type="email"
                        name="Email"
                        required
                        placeholder="Podaj email..."
                        className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 transition"
                    />
                </div>

                <textarea
                    name="Wiadomość"
                    required
                    placeholder="Podaj treść wiadomości..."
                    className="mt-4 w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 resize-none transition min-h-[150px]"
                />

                <button
                    type="submit"
                    disabled={isSending}
                    className="mt-4 w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white rounded-lg p-2 outline-none hover:cursor-pointer transition disabled:cursor-not-allowed"
                >
                    {isSending ? "Wysyłanie..." : "Wyślij"}
                </button>

                {status && !isSending && (
                    <p className={`mt-4 text-center font-medium ${status.includes("błąd") ? "text-red-500" : "text-green-600"}`}>
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
}