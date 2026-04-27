import { Experience } from "@/lib/schemas";

interface TimelineProps {
    experience: Experience[];
}

export default function Timeline({ experience }: TimelineProps) {
    return (
        <div className="mt-6 ml-2 md:ml-6">
            <div className="relative border-l-2 border-gray-200">

                {experience.map((item, index) => (
                    <div key={index} className="mb-10 relative pl-8 md:pl-12">

                        <div className="absolute -left-[25px] top-0 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            {item.logo ? (
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="w-8 h-8 object-contain"
                                />
                            ) : (
                                <span className="text-gray-500 font-bold text-lg">
                                    {item.name.charAt(0)}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-bold hover:underline mb-4 inline-block"
                            >
                                {item.name}
                            </a>

                            <div className="space-y-6">
                                {item.positions.map((position, posIndex) => (
                                    <div key={posIndex}>
                                        <h3 className="text-lg font-semibold">{position.title}</h3>
                                        <p className="text-sm text-gray-500 mb-2">
                                            {position.start} – {position.end || "Obecnie"}
                                        </p>

                                        {position.description && (
                                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                                                {position.description.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}