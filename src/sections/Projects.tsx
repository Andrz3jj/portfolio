import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
    return (
        <>
            <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
                <Tabs defaultValue="account" className="w-full md:w-2/4 ml-6 mr-6 md:ml-0 md:mr-0">
                    <TabsList className="flex w-full mx-auto mb-2 overflow-x-auto">
                        <TabsTrigger value="work" className="text-lg">Praca</TabsTrigger>
                        <TabsTrigger value="education" className="text-lg">Edukacja</TabsTrigger>
                        <TabsTrigger value="competitions" className="text-lg">Konkursy</TabsTrigger>
                    </TabsList>
                    <TabsContent value="work" className="border-2 p-4 border-gray-200 rounded-lg">praca</TabsContent>
                    <TabsContent value="education" className="border-2 p-4 border-gray-200 rounded-lg">Edukacja</TabsContent>
                    <TabsContent value="competitions" className="border-2 p-4 border-gray-200 rounded-lg">Konkursy</TabsContent>
                </Tabs>
            </div>
        </>
    )
}