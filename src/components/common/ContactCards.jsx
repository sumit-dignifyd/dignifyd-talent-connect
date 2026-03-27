import Link from "next/link";

export function ContactCard({ icon, title, description, href }) {
  return (
    <>
      <Link href={href} target="_blank">
        <div className="w-full rounded-[14px] border border-white/10 bg-[#0b0b0b] p-6 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] md:p-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
            {icon}
          </div>

          <h3 className="mb-2 text-xl font-medium text-white md:text-2xl">
            {title}
          </h3>

          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </Link>
    </>
  );
}
