"use client";

import Link from "next/link";
import SectionHeader from "../common/SectionHeader";

export default function FAQForm() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-5xl xl:max-w-6xl">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0b0615] to-[#05030a] p-10 shadow-[0_0_60px_rgba(168,85,247,0.08)] backdrop-blur-xl md:p-14">
          <SectionHeader
            title={"Say, Hello !"}
            description={
              "Tell us a bit about yourself, then schedule time with one of our experts who will show you exactly how you can power up your results!"
            }
            center={false}
          />

          <Link
            href="#"
            className="mb-10 cursor-pointer text-sm text-gray-400 underline"
          >
            Click here to see if you're a good fit
          </Link>

          <form className="space-y-8">
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                First Name*
              </label>
              <input
                type="text"
                placeholder="John Appleseed"
                className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder-gray-500 transition outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email ID*
              </label>
              <input
                type="email"
                placeholder="John Appleseed@gmail.com"
                className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder-gray-500 transition outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Choose Types of Service*
              </label>
              <input
                type="text"
                placeholder="Types of Service"
                className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder-gray-500 transition outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-purple-500" />
              <p className="text-xs leading-relaxed text-gray-400">
                I agree to Fundamenta using my contact information for marketing
                purposes.
              </p>
            </div>

            <button
              type="submit"
              className="mt-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
