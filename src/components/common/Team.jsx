import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function Team({ badge, title, description, team }) {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeader badge={badge} title={title} description={description} />

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">  
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative h-[260px] w-full overflow-hidden rounded-[20px] border border-white/10 bg-white/5 md:h-[320px]"
            >
              <Image
                src={member?.img}
                alt={member?.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>

              <div className="absolute bottom-0 left-0 w-full translate-y-full p-4 text-left transition duration-500 group-hover:translate-y-0">
                <h3 className="text-white text-lg font-semibold">
                  {member?.name}
                </h3>
                {/* <p className="text-sm text-gray-300"></p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
