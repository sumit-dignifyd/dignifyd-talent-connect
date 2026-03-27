"use client";
import Image from "next/image";
import { Check } from "lucide-react";

export default function FeaturesAndList({ features, featuredImages }) {
  return (
    <section className="w-full bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="flex gap-6 mb-10 flex-wrap md:flex-nowrap">
            <div className="relative w-[260px] h-[150px] rounded-2xl overflow-hidden">
              <Image
                src={featuredImages[0]}
                alt="meeting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="relative w-[260px] h-[150px] rounded-2xl overflow-hidden">
              <Image
                src={featuredImages[1]}
                alt="discussion"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="min-w-[28px] h-[28px] rounded-full border border-purple-500 flex items-center justify-center">
                  <Check size={16} className="text-purple-400" />
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
