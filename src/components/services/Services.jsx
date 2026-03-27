"use client";
import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Slack,
  Unplug,
  UserPlus,
  Video,
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { tabs } from "@/data/navigation";
import Link from "next/link";
import ServicesTabs from "./common-services/ServicesTabs";

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [openStep, setOpenStep] = useState(1);

  const activeService = tabs.find((item) => item.Id === active) || tabs[0];

  const toggleStep = (step) => {
    setOpenStep(openStep === step ? null : step);
  };

  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-6xl text-center">
        <SectionHeader
          badge={"Transforming Workplaces"}
          title={"What Drives Us: Passion for People, Dedication to Results"}
        />
        <div className="mb-10 rounded-2xl border border-white/10 md:p-6">
          <ServicesTabs
            activeService={activeService}
            handleFunc={setActive}
            isDetail={false}
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 md:p-7 md:col-span-3">
              <div className="absolute inset-y-0 left-1/2 z-0 hidden w-px bg-gradient-to-b from-white/5 via-white/20 to-white/5 md:block" />

              <div className="relative z-10 space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div
                    onClick={() => toggleStep(1)}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <div className="flex flex-1 min-w-0 items-center gap-3 text-sm text-gray-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <UserPlus size={14} />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm text-gray-300">
                          User Sign Up
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg bg-white/5 px-3 py-1 text-xs text-gray-400">
                      Scan
                      <ChevronRight
                        size={14}
                        style={{
                          transform:
                            openStep === 1 ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                        className="transform-gpu"
                      />
                    </div>
                  </div>

                  {openStep === 1 && (
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm text-gray-400">
                        Workspace
                        <span className="text-purple-400">Storm</span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm text-gray-400">
                        Channel
                        <span>#Alerts</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div
                    onClick={() => toggleStep(2)}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <div className="flex flex-1 min-w-0 items-center gap-3 text-sm text-gray-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <Slack size={14} />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-[11px]  text-left text-purple-400">
                          Slack
                        </span>
                        <span className="text-sm text-gray-300">
                          Send an alert
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg bg-white/5 px-3 py-1 text-xs text-gray-400">
                      Trigger
                      <ChevronRight
                        size={14}
                        style={{
                          transform:
                            openStep === 2 ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                        className="transform-gpu"
                      />
                    </div>
                  </div>

                  {openStep === 2 && (
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between  rounded-xl bg-white/5 px-4 py-3 text-sm text-gray-400">
                        Workspace
                        <span className="text-purple-400">Storm</span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm text-gray-400">
                        Channel
                        <span>#Alerts</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex cursor-pointer items-center justify-between">
                    <div className="flex flex-1 min-w-0 items-center gap-3 text-sm text-gray-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <Video size={14} />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-[11px] text-left text-purple-400">
                          Zoom
                        </span>
                        <span className="text-sm text-gray-300 break-words">
                          Create a new meeting
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-xs text-gray-400">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
                      Action
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 text-left backdrop-blur-xl md:col-span-2">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                  <Unplug size={20} className="h-5 w-5 text-purple-500" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {activeService?.label}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {activeService?.brief}
                </p>
              </div>

              <div className="flex justify-start">
                <Link
                  href={activeService?.href}
                  className="group relative inline-flex items-center gap-1 text-sm text-purple-400"
                >
                  <span className="transition-all duration-300 group-hover:tracking-wide">
                    Learn More
                  </span>

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
