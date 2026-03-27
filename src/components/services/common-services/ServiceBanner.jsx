"use client";
import Image from "next/image";

export default function ServiceBanner({ banner_img }) {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative rounded-[30px] p-[1px] bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-purple-500/30">
          <div className="relative rounded-[30px] bg-black/80 border border-white/10 backdrop-blur-2xl overflow-hidden">
            <div className="relative w-full h-[300px] md:h-[420px]">
              <Image
                src={banner_img}
                alt="world map"
                fill
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
