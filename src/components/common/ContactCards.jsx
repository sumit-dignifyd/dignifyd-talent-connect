export function ContactCard({ icon, title, description }) {
  return (
    <div
      className="
        w-full
        rounded-[14px]
        border border-white/10
        bg-[#0b0b0b]
        p-6 md:p-8
        transition-all duration-300
        hover:border-purple-500/30
        hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]
      "
    >
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
