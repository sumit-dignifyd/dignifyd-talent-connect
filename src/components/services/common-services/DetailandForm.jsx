"use client";

import Link from "next/link";

export default function DetailandForm({ data }) {
  return (
    <section className="w-full bg-black py-10">
      <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-2">
        <div className="mt-10">
          <h2 className="mb-6 text-3xl font-semibold text-white">{data?.highlightTitle1}</h2>

          <p className="mb-10 text-sm leading-relaxed text-gray-400">{data?.highlightDes1}</p>

          <h3 className="mb-6 text-2xl font-semibold text-white">{data?.highlightTitle2}</h3>

          <p className="text-sm leading-relaxed text-gray-400">{data?.highlightDes2}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 shadow-[0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-xl">
          <h3 className="mb-3 text-3xl font-semibold text-white">Say, Hello !</h3>

          <p className="mb-6 text-sm text-gray-400">
            Tell us a bit about yourself, then schedule time with one of our experts who will show you exactly how you can power up your results.
            <br />
            <span className="mt-4 block text-gray-500">
              <Link href="#" className="text-white transition duration-200 hover:underline">
                Click here to see if you're a good fit.
              </Link>
            </span>
          </p>

          <form className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <div>
              <label className="text-xs text-gray-400">First Name*</label>
              <input type="text" placeholder="John Appleseed" className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-sm text-white placeholder-gray-500 transition focus:border-purple-500 focus:outline-none" />
            </div>

            <div>
              <label className="text-xs text-gray-400">Email ID*</label>
              <input type="email" placeholder="John Appleseed@gmail.com" className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-sm text-white placeholder-gray-500 transition focus:border-purple-500 focus:outline-none" />
            </div>

            <div>
              <label className="text-xs text-gray-400">Choose Types of Service*</label>
              <select className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-sm text-gray-400 transition focus:border-purple-500 focus:outline-none">
                <option>Global Recruitment</option>
                <option>RPO Solutions</option>
                <option>Employer Branding</option>
                <option>HR Consulting</option>
                <option>Onboarding Support</option>
              </select>
            </div>

            <div className="flex items-start gap-2 text-xs text-gray-400">
              <input type="checkbox" className="mt-1 accent-purple-500" />
              <p>I agree to Fundamenta using my contact information for marketing purposes.</p>
            </div>

            <button type="submit" className="mt-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
