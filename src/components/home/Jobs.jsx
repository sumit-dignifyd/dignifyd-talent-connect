import SectionHeader from "@/components/common/SectionHeader";
import { Building2, MapPinHouse } from "lucide-react";
import Link from "next/link";
import uiUX from "../../assets/images/home/jobs/UI-UX.jpg";
import developer_img from "../../assets/images/home/jobs/frontEnd-Developer.jpg";
import graphic_designer from "../../assets/images/home/jobs/graphic-designer.jpg";
import Image from "next/image";

const jobs = [
  {
    title: "UI/UX Designer",
    company: "Dignifyd Digital",
    location: "Delhi / Remote",
    img: uiUX,
  },
  {
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Bangalore / Remote",
    img: developer_img,
  },
  {
    title: "Graphic Designer",
    company: "Creative Studio Co.",
    location: "Delhi / Onsite",
    img: graphic_designer,
  },
];

export default function Jobs() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeader badge={"Dream Big, Achieve Bigger"} title={"Discover Roles That Match Your Ambition"} />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {jobs.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>

        <div className="mt-14">
          <Link href={{ pathname: "/careers", hash: "jobs" }} className="cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.4)]">
            View All Jobs →
          </Link>
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }) {
  return (
    <div className="group relative rounded-3xl border border-purple-500/20 bg-gradient-to-b from-[#140a25] to-[#0b0615] p-6 shadow-[0_0_40px_rgba(168,85,247,0.08)] transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]">
      <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-2">
        <div className="relative h-40 w-full overflow-hidden">
          <Image src={job.img} alt={job.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
        </div>
      </div>

      <h3 className="mb-2 flex text-lg font-semibold text-white">{job.title}</h3>

      <p className="flex items-center gap-2 text-sm text-gray-400">
        <Building2 size={16} className="text-purple-400" /> {job.company}
      </p>

      <p className="mt-1 flex items-center gap-2 text-sm text-gray-400">
        <MapPinHouse size={16} className="text-purple-400" /> {job.location}
      </p>

      <div className="mt-6 flex justify-end">
        <Link href={"/careers/1"} className="cursor-pointer text-sm text-purple-400 transition hover:text-purple-300">
          Apply Now →
        </Link>
      </div>
    </div>
  );
}
