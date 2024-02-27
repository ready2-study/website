import Hero from "@/components/pages/main/Hero";
import Tutors from "@/components/pages/main/Tutors";
import Universities from "@/components/pages/main/Universities";
import Info from "@/components/pages/main/info/Info";

export default function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Universities />
      <Tutors />
    </div>
  );
}
