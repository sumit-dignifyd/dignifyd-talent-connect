import { Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JobCard({ title, description, type, location }) {
  return (
    <div className="group relative w-full max-w-xl rounded-[28px] border border-white/10 bg-gradient-to-br from-[#140a24] to-[#0b0615] p-8 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_60px_rgba(168,85,247,0.25)] md:p-10">
      <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <div className="relative z-10">
        <h3 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
          {title}
        </h3>

        <p className="mb-8 text-sm leading-relaxed text-gray-400 md:text-base">
          {description}
        </p>

        <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{type}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>

        <Link
          href="/careers/1"
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 px-6 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white"
        >
          Apply Now
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
