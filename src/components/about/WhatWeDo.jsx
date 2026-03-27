import Image from "next/image";
import { ArrowRight } from "lucide-react";
import team from "../../assets/images/aboutUs/team.jpg";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] md:h-[500px]">
          <Image
            src={team}
            alt="team"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/20">
              <span className="text-xs text-purple-400">›</span>
            </div>
            <span className="text-sm text-gray-400">What We Do</span>
          </div>

          <h2 className="mb-6 text-3xl leading-tight font-semibold text-white md:text-4xl">
            Our platform simplifies the way people manage tasks, collaborate,
            and scale their operations — all in one place.
          </h2>

          <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-400">
            Whether you're a growing startup or a global enterprise, we provide
            the tools you need to streamline your workflow, automate what slows
            you down, and focus on what drives results. From real-time
            collaboration and intelligent automation to seamless integrations
            and enterprise-grade security, we’re here to make your day-to-day
            operations smoother.
          </p>

          <button className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
            Get Started
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
