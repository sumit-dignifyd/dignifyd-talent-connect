import ServiceForm from "@/components/common/ServiceForm";

export default function DetailandForm({ data }) {
  return (
    <section className="w-full bg-black py-10">
      <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-2">
        <div className="mt-10">
          <h2 className="mb-6 text-3xl font-semibold text-white">
            {data?.highlightTitle1}
          </h2>

          <p className="mb-10 text-sm leading-relaxed text-gray-400">
            {data?.highlightDes1}
          </p>

          <h3 className="mb-6 text-2xl font-semibold text-white">
            {data?.highlightTitle2}
          </h3>

          <p className="text-sm leading-relaxed text-gray-400">
            {data?.highlightDes2}
          </p>
        </div>

        <ServiceForm />
      </div>
    </section>
  );
}
