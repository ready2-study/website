import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[876px] w-box flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/Background.png"
            width={500}
            height={500}
            priority={true}
            alt="bg"
            className="pointer-events-none absolute top-0 left-0  w-full h-[1010px] -z-20"
          />
          <h1 className="font-bold text-7xl max-w-[900px] text-center inline-block">
            Study for your exams{" "}
            <p className="text-additional inline">directly</p> from the source
          </h1>

          <div className="text-center m-10 text-container">
            <p className="font-normal text-lg">
              We are the largest database of university exams questions.
            </p>
            <p className="font-normal text-lg">
              Find your college and start learning!
            </p>
          </div>

          <Input
            className="max-w-[900px] h-[60px] text-black"
            type="Search for university, question or subject that you are interested in..."
            placeholder="Search for university, question or subject that you are interested in..."
          />
        </div>
      </div>
    </div>
  );
}
