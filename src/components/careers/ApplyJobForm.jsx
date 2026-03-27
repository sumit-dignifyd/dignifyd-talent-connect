"use client"

import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { Upload } from "lucide-react";

export default function ApplyJobForm() {
  const [fileName, setFileName] = useState("No file chosen");
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto text-center">
        <SectionHeader badge={"Apply Now"} title={"Apply For This Job"} />

        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl p-8 md:p-12 text-left">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 blur-2xl rounded-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <label className="text-gray-400 text-sm">Your Name*</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 focus:border-purple-500 outline-none py-2 text-white mt-2"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm">Mobile Number*</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 focus:border-purple-500 outline-none py-2 text-white mt-2"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-gray-400 text-sm">Email Address*</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 focus:border-purple-500 outline-none py-2 text-white mt-2"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm">Job Title*</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 focus:border-purple-500 outline-none py-2 text-white mt-2"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <label className="text-gray-400 text-sm">
              Additional Messages*
            </label>
            <textarea
              rows={3}
              className="w-full bg-transparent border-b border-white/20 focus:border-purple-500 outline-none py-2 text-white mt-2 resize-none"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10">
            <div className="flex items-center gap-4 border border-white/20 rounded-xl px-4 py-2">
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
                className="cursor-pointer flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition"
              >
                <Upload size={14}/> Upload
              </label>

              <span className="text-gray-400 text-sm truncate max-w-[150px]">
                {fileName}
              </span>
            </div>

            <button
              className="
              px-10 py-3 rounded-lg
              bg-gradient-to-r from-purple-500 to-pink-500
              text-white text-sm font-medium
              shadow-[0_0_20px_rgba(168,85,247,0.4)]
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]
            "
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
