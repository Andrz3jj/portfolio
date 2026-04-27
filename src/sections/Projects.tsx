import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "@/components/Timeline";

import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import competitionsData from "@/data/competitions.json";

import { careerSchema, educationSchema, competitionsSchema } from "@/lib/schemas";

export default function Projects() {
    const career = careerSchema.parse(careerData).career;
    const education = educationSchema.parse(educationData).education;
    const competitions = competitionsSchema.parse(competitionsData).competitions;

    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
            <Tabs defaultValue="work" className="w-full md:w-2/4 ml-6 mr-6 md:ml-0 md:mr-0">
                <TabsList className="flex w-full mx-auto mb-2 overflow-x-auto">
                    <TabsTrigger value="work" className="text-lg">Praca</TabsTrigger>
                    <TabsTrigger value="education" className="text-lg">Edukacja</TabsTrigger>
                    <TabsTrigger value="competitions" className="text-lg">Konkursy</TabsTrigger>
                </TabsList>

                <TabsContent value="work" className="border shadow-md shadow-gray-100 p-4 border-gray-200 rounded-lg">
                    <Timeline experience={career} />
                </TabsContent>

                <TabsContent value="education" className="border shadow-md shadow-gray-100 p-4 border-gray-200 rounded-lg">
                    <Timeline experience={education} />
                </TabsContent>

                <TabsContent value="competitions" className="border shadow-md shadow-gray-100 p-4 border-gray-200 rounded-lg">
                    <Timeline experience={competitions} />
                </TabsContent>
            </Tabs>
        </div>
    );
}