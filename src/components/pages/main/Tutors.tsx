import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const TutorsContent = () => {
  return (
    <div className="bg-black bg-opacity-70 rounded-[50px] flex flex-col items-center justify-center p-10 m-10 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl m-3">Our tutors</h1>
        <Image src="underline.svg" width={500} height={50} alt="underline" />
      </div>
      <p className="text-xl max-w-72 m-5">
        Our platform allows you to find
        <span className="text-additional"> the best</span> fitting tutors for
        your needs.
        <br />
        <br />
        Search your subject and find the best fitting tutors possible!
      </p>
      <Link
        href="/tutors"
        className={buttonVariants({
          size: "lg",
          className: "max-w-[400px] m-5",
        })}
      >
        Find now
      </Link>
    </div>
  );
};

export default function Tutors() {
  return (
    <div className="font-bold bg-[url('../../public/Noise.svg')] bg-primary text-secondary flex flex-row items-center justify-evenly">
      <Image
        src="/TutorsBlob.png"
        width={800}
        height={800}
        alt="tutors"
        className="hidden xl:block"
      />
      <TutorsContent />
    </div>
  );
}
