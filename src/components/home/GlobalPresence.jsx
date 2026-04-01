import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import presence from "../../assets/images/home/globalPresence/presence-frame.png";

export default function GlobalPresence() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={"Global Presence"}
          title={"Scaling Businesses Across Continents"}
        />

        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:p-6">
          <div className="relative h-[300px] w-full md:h-[500px]">
            <Image
              src={presence}
              alt="global presence"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
