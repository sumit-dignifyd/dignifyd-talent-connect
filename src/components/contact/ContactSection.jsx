import Image from "next/image";
import contactImg from "../../assets/images/contactUs/contact-us.jpg";
import SectionHeader from "../common/SectionHeader";

export default function ContactSection() {
  return (
    <section className="w-full bg-black py-24">
      <SectionHeader badge={"Driven By Innovation"} title={"Let’s Build Something Great Together"} />
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[20px] border border-white/10 bg-[#0b0615] p-6 md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="h-full w-full">
              <div className="relative h-[380px] w-full overflow-hidden rounded-[16px] md:h-[420px]">
                <Image src={contactImg} alt="team" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>

            <div>
              <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs text-gray-400">Full Name</label>
                  <input type="text" placeholder="Name" className="w-full rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500/40" />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-gray-400">Mobile Number</label>
                  <input type="text" placeholder="Phone number" className="w-full rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500/40" />
                </div>
              </div>

              <div className="mb-5">
                <label className="mb-1 block text-xs text-gray-400">Email Address</label>
                <input type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500/40" />
              </div>

              <div className="mb-6">
                <label className="mb-1 block text-xs text-gray-400">Messages</label>
                <textarea rows={5} placeholder="Type your messages" className="w-full resize-none rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500/40" />
              </div>

              <button className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2.5 text-sm text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
