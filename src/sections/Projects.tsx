import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
    return (
        <>
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <Tabs defaultValue="account" className="w-2/4">
                    <TabsList className="flex w-max mx-auto mb-2">
                        <TabsTrigger value="work" className="text-lg">Praca</TabsTrigger>
                        <TabsTrigger value="education" className="text-lg">Edukacja</TabsTrigger>
                        <TabsTrigger value="competitions" className="text-lg">Konkursy</TabsTrigger>
                    </TabsList>
                    <TabsContent value="work" className="border-2 p-4 border-gray-200 rounded-lg">praca</TabsContent>
                    <TabsContent value="education" className="border-2 p-4 border-gray-200 rounded-lg">Edukacja</TabsContent>
                    <TabsContent value="competitions" className="border-2 p-4 border-gray-200 rounded-lg">Konkursy</TabsContent>
                </Tabs>
            </div >
        </>
    )
}