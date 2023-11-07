// Components
import DownloadableFormCard from "./DownloadableFormCard";

export default function FormFeed() {
  return (
    <section className="container grid gap-4 grid-cols-2 place-items-center lg:max-w-[50%] mt-4">
      <DownloadableFormCard />
      <DownloadableFormCard />
      <DownloadableFormCard />
      <DownloadableFormCard />
    </section>
  )
}