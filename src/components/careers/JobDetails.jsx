import SectionHeader from "../common/SectionHeader";

export default function JobDetails() {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeader
            badge={"PCI Infra Services"}
            title={"PCI Infra"}
            description={
              "PCI Infra is a leading provider of electrical products, specializing in high-quality Wires & Cables and Modular Switches. With a strong dealer and distributor network across multiple states, the company focuses on innovation, product reliability, and building long-term customer relationships in the electrical industry."
            }
            center={false}
          />

          <h3 className="text-2xl font-semibold text-white mb-6">
            Job Description
          </h3>

          <ul className="space-y-5">
            {[
              "Appoint, manage, and monitor dealers and distributors",
              "Drive channel & retail sales for Wires, Cables, Modular Switches & Accessories",
              "Achieve monthly and quarterly sales & revenue targets",
              "Conduct product promotions across assigned territories",
              "Perform competition mapping and market analysis",
              "Build strong relationships with dealers, distributors & retailers",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-purple-500">
                  <span className="text-purple-400 text-sm">✓</span>
                </div>

                <p className="text-gray-300">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 blur-2xl rounded-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Job Overview
            </h3>

            <p className="text-gray-400 mb-6">
              Overall, the goal is to enhance user satisfaction by making
              products intuitive, efficient, and enjoyable to interact with.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
                <span className="text-white font-medium">Experience:</span> 2–4
                Years
              </p>

              <p>
                <span className="text-white font-medium">No Of Openings:</span>{" "}
                22
              </p>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-white font-medium mb-2">MP Location*</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Balaghat, Indore, Itarsi, Gwalior, Ashok Nagar, Bhopal,
                  Shajapur, Dewas, Hoshangabad, Tikamgarh, Jhansi, Chhatarpur
                </p>
              </div>

              <div>
                <p className="text-white font-medium mb-2">U.P Location*</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Shahjahanpur, Gorakhpur, Deoria, Gonda, Basti, Bareilly,
                  Kannauj, Hamirpur, Bahraich, Mahoba
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
