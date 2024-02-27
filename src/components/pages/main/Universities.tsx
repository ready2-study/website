import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

// put the longest string on top
const universitiesArr: string[] = [
  "Massachusetts Institute of Technology",
  "University of Cambridge",
  "Harvard University",
  "University of Oxford",
  "Stanford University",
  "Imperial College London",
  "California Institute of Technology (Caltech)",
  "University of Chicago",
  "Princeton University",
  "Yale University",
  "Johns Hopkins University",
  "Columbia University",
  "University of Toronto",
  "Tsinghua University",
  "Peking University",
  "National University of Singapore (NUS)",
  "University of Tokyo",
];
const maxWidth = universitiesArr.length;

const University = ({ name }: { name: string }) => {
  return (
    <div
      className={`bg-black rounded rounded-4xl m-3 p-3 hover:scale-110 hover:text-secondary-dark transition duration-300 ease-in-out cursor-pointer`}
    >
      {name}
    </div>
  );
};

const UniversitiesBox = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[1000px] bg-black bg-opacity-70 rounded rounded-[50px]">
      <div>
        <h1 className="m-8 p-4 text-6xl border-b-4 border-additional flex justify-center items-center">
          Available Universities
        </h1>
      </div>
      <div className="flex w-[900px] flex-wrap items-center justify-center">
        {universitiesArr.map((uni: string) => (
          <University key={uni} name={uni} />
        ))}
      </div>
      <Link
        href="/questions"
        className={buttonVariants({ size: "lg", className: "w-[400px] m-10" })}
      >
        See More
      </Link>
    </div>
  );
};

export default function Universities() {
  return (
    <div className="bg-[url('../../public/Noise.svg')] flex items-center justify-center bg-primary font-bold text-secondary p-20 z-50">
      <UniversitiesBox />
    </div>
  );
}
