import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
    return (
        <>
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <Tabs defaultValue="account" className="w-[700px]">
                    <TabsList className="flex w-max mx-auto">
                        <TabsTrigger value="work">Praca</TabsTrigger>
                        <TabsTrigger value="education">Edukacja</TabsTrigger>
                        <TabsTrigger value="competitions">Konkursy</TabsTrigger>
                    </TabsList>
                    <TabsContent value="work" className="border p-2 border-gray-300 rounded">praca</TabsContent>
                    <TabsContent value="education" className="border p-2 border-gray-300 rounded">Edukacja</TabsContent>
                    <TabsContent value="competitions" className="border p-2 border-gray-300 rounded">Konkursy</TabsContent>
                </Tabs>
            </div >
        </>
    )
}