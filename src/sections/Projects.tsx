import ExoSearchScreen from '../assets/ExoSearchScreen.png';
import HswScreen from '../assets/HswScreen.png';

export default function Projects() {
    return (
        <>
            <div className="flex flex-col items-center pb-50 gap-6">

                <div className="w-2/3">
                    <span className="text-2xl font-semibold">Moje projekty:</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3 text-center">
                    <div className="border shadow-md shadow-gray-100 p-7 border-gray-200 rounded-lg flex flex-col gap-4 justify-center items-center">
                        <img src={ExoSearchScreen} alt="ExoSearchScreen" className="w-120 rounded-lg" />
                        <a href='https://github.com/Andrz3jj/ExoSearch.git'><span className="text-2xl font-semibold hover:underline">ExoSearch</span></a>
                        <span className="text-md text-gray-700">Aplikacji webowa do nauki do egzo planetach</span>
                    </div>
                    <div className="border shadow-md shadow-gray-100 p-7 border-gray-200 rounded-lg flex flex-col gap-4 justify-center items-center">
                        <img src={HswScreen} alt="HswScreen" className="w-120 rounded-lg" />
                        <a href='https://github.com/kadzbe/stalowy-szlak.git'><span className="text-2xl font-semibold hover:underline">Stalowy szlak</span></a>
                        <span className="text-md text-gray-700">Gra edukacja o historii firmy HSW</span>
                    </div>
                </div>

            </div>
        </>
    )
}