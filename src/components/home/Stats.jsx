import SectionHeader from "@/components/common/SectionHeader";
import InteractiveDots from "../common/cursors/InteractiveDots";

export default function Stats() {
  const stats = [
    {
      value: "92%",
      title: "Client Satisfaction",
      desc: "Trusted for delivering consistent quality, reliable performance, and exceptional service excellence every time.",
    },
    {
      value: "95%",
      title: "Employee Retention",
      desc: "We foster supportive and growth-driven environments that keep talent engaged, motivated, and committed.",
    },
    {
      value: "4000+",
      title: "Global Placement",
      desc: "Professionals successfully placed across diverse industries, driving growth and long-term success for businesses worldwide.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      <InteractiveDots className="absolute inset-0 z-0" />
      <SectionHeader
        badge={"Empowering Global Access"}
        title={"Custom Workforce Solution That Accelareate Global Growth"}
      />
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 backdrop-blur-xl transition duration-300 hover:border-purple-500/30"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.08)]"></div>

            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                {item.value}
              </h2>

              <h3 className="mb-3 text-lg font-medium text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
