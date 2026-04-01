"use client";

import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { Upload } from "lucide-react";

export default function ApplyJobForm() {
  const [fileName, setFileName] = useState("No file chosen");
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-6xl text-center">
        <SectionHeader badge={"Apply Now"} title={"Apply For This Job"} />

        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 text-left backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 blur-2xl" />

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <label className="text-sm text-gray-400">Your Name*</label>
                <input
                  type="text"
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Mobile Number*</label>
                <input
                  type="text"
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-sm text-gray-400">Email Address*</label>
                <input
                  type="email"
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Job Title*</label>
                <input
                  type="text"
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <label className="text-sm text-gray-400">Additional Messages</label>
            <textarea
              rows={3}
              className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-purple-500"
            />
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 rounded-xl border border-white/20 px-4 py-2">
                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files.length > 0) {
                      setFileName(e.target.files[0].name);
                    }
                  }}
                />

                <label
                  htmlFor="fileUpload"
                  className="ml-[-5px] flex cursor-pointer items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm text-white transition hover:bg-purple-600"
                >
                  <Upload size={14} /> Upload
                </label>

                <span className="max-w-[150px] truncate text-sm text-gray-400">
                  {fileName}
                </span>
              </div>

              <p className="text-xs text-gray-400">
                *Upload your resume in pdf, jpg, png, or doc format.
              </p>
            </div>

            <button className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] cursor-pointer">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
