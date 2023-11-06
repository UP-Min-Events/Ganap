// Components
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
  
  return (
    <main className="min-h-screen flex flex-col items-center">
      <header className="px-6 w-full flex justify-center relative bg-red-500 text-white py-4 overflow-hidden">
        <BackButton />
        <h1 className="text-[1.75rem] font-semibold text-center">Edit Account Info</h1>
      </header>
      <section className="flex flex-col items-center py-6">
        <h2 className="text-2xl font-bold">{searchParams.info}</h2>
      </section>
    </main>
  )
}