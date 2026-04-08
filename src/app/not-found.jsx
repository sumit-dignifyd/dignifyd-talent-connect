import Image from "next/image";
import Link from "next/link";
import notFoundImg from "../assets/images/not-found/404-image.webp";

export default function NotFound() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden text-white">
      <div className="relative z-10 flex flex-col items-center text-center">
        <Image
          src={notFoundImg}
          alt="404 Error"
          className="w-[420px] md:w-[520px]"
          priority
        />

        <h2 className="mt-6 max-w-xl text-2xl font-medium md:text-3xl">
          Error 404: This Page Needs <br /> an HR Intervention
        </h2>

        <Link
          href="/"
          className="mt-6 flex items-center gap-2 rounded-full bg-purple-500 px-6 py-3 text-sm font-medium transition hover:bg-purple-600"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
