"use client";

import Image from "next/image";

import ticketGif from "../../assets/images/contactUs/global-presence.gif";
import SectionHeader from "../common/SectionHeader";
import { Ourpresence } from "@/data/presence";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function OurPresence() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPlace = Ourpresence[currentIndex];

  const handlePlace = (action) => {
    if (action === "next" && currentIndex < Ourpresence.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (action === "prev" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeader
          badge={"Our Expertise Spans Over 35+ Countries"}
          title={"Global Presence & Service Reach"}
          description={
            "Operating in regions across the UK, Europe, USA, Canada, SEA, and APAC, we deliver localized hiring with global best practices."
          }
        />

        <div className="grid items-center gap-5 md:grid-cols-3">
          <div className="hidden justify-center md:flex">
            <div className="relative h-[260px] w-[260px]">
              <Image
                src={ticketGif}
                alt="ticket"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                unoptimized
              />

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-2xl"></div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-l-[24px] rounded-r-none border border-white/10 bg-[#0b0615] p-8 text-left backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)]"></div>

            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {currentPlace?.name}
              </h3>

              <p className="mb-6 text-sm text-gray-400">
                Step into a world of opportunity, culture, and innovation in the
                beautiful {currentPlace?.name}.
              </p>

              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-[2px] bg-purple-500"></span>
                  <span>
                    {currentPlace?.location}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-[2px] bg-purple-500"></span>
                  <span>{currentPlace?.contact}</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-[2px] bg-purple-500"></span>
                  <span>
                    Experience the {currentPlace?.shortForm} Lifestyle
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[260px] w-full overflow-hidden rounded-r-[24px] rounded-l-none md:h-[289px]">
            <Image
              src={currentPlace?.image}
              alt="presence"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="mt-10 flex justify-end gap-4">
          <button
            onClick={() => handlePlace("prev")}
            disabled={currentIndex === 0}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition ${currentIndex === 0 ? "cursor-not-allowed border border-white/20 text-white/40" : "border border-white/40 text-white hover:scale-110 hover:bg-white/10 active:scale-95"} `}
          >
            <ArrowLeft size={16} />
          </button>

          <button
            onClick={() => handlePlace("next")}
            disabled={currentIndex === Ourpresence.length - 1}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition ${currentIndex === Ourpresence.length - 1 ? "cursor-not-allowed border border-white/20 text-white/40" : "border border-white/40 text-white hover:scale-110 hover:bg-white/10 active:scale-95"} `}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
