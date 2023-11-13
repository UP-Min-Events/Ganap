// Components
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import BackButton from "@/components/(buttons)/BackButton"

export default function Edit({ searchParams 
} : { 
  searchParams: {
    info: string;
    name: string;
    studentNumber: string;
    yearLevel: string;
    degreeProgram: string;
    organizations: string;
}}) {

  const title = 
    searchParams.info === "name" ? "Name" :
    searchParams.info === "studentNumber" ? "Student Number" :
    searchParams.info === "yearLevel" ? "Year Level" :
    searchParams.info === "degreeProgram" ? "Degree Program" :
    searchParams.info === "organizations" ? "Organizations" : "";
  
  
  return (
    <main className="min-h-screen flex flex-col items-center">
      <header className="px-6 w-full flex justify-center relative bg-red-500 text-white py-4 overflow-hidden">
        <BackButton />
        <h1 className="text-[1.75rem] font-semibold text-center">Edit Account Info</h1>
      </header>
      <section className="w-full md:w-[50%] lg:w-[40%] flex flex-col items-center p-6">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <span className="text-left w-[90%]">
          <h3 className="text-sm font-semibold">{title}</h3>
          <Input type="text" value={searchParams[searchParams.info as keyof typeof searchParams]}/>
        </span>
        <Button className="mt-12 bg-red-500 hover:bg-red-600">Update {title}</Button>
      </section>
    </main>
  )
}