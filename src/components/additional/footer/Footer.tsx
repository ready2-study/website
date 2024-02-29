import Link from "next/link";
import LanguagesFooter from "./LanguagesFooter";

export default function Footer() {
  return (
    <div className="bg-black flex items-center justify-center font-bold">
      <div className=" lg:w-boxTablet xl:w-box">
        <div className="flex items-center lg:items-start justify-center lg:justify-start text-3xl lg:text-2xl pt-[28px]">
          Ready2<div className="text-additional">.Study</div>
        </div>
        <div className="hidden lg:flex text-lg flex-row py-5">
          <div className="flex flex-col  pr-[200px]">
            <h1 className="text-additional text-xl py-2">Navigation</h1>
            <Link
              className="py-2 font-medium text-sm hover:text-secondary-dark"
              href="/"
            >
              Questions
            </Link>
            <Link
              className="py-2 font-medium text-sm hover:text-secondary-dark"
              href="/"
            >
              Tutors
            </Link>
            <Link
              className="py-2 font-medium text-sm hover:text-secondary-dark"
              href="/"
            >
              About
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="text-additional text-xl py-2">Legal</h1>
            <Link
              className="py-2 font-medium text-sm hover:text-secondary-dark"
              href="/"
            >
              Terms
            </Link>
            <Link
              className="py-2 font-medium text-sm hover:text-secondary-dark"
              href="/"
            >
              Privacy Policy
            </Link>
            <Link
              className="py-2 font-medium text-sm hover:text-secondary-dark"
              href="/"
            >
              Cookies Statement
            </Link>
          </div>
        </div>
        <div className="pt-5 pb-10 flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="text-center p-5 lg:p-0 lg:text-left font-light text-sm leading-4 text-secondary-dark">
            Ready2.study is not affiliated to or endorsed by any school, college
            or university
            <br />
            <br />
            Copyright © 2024
          </div>
          <div className="p-5 lg:p-0">
            <LanguagesFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
