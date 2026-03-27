export default function DisclaimerContent() {
  const paragraphs = [
    "The information provided on this website is for general informational purposes only. While we strive to ensure that the content is accurate, reliable, and up to date, Dignifyd Talent Connect makes no warranties or representations of any kind—express or implied—about the completeness, accuracy, or suitability of the information, services, or related graphics contained on the site.",

    "All content is provided 'as is,' and any reliance you place on such information is strictly at your own risk. We do not assume responsibility for any loss or damage resulting from the use of our website, including but not limited to technical issues, data inaccuracies, or third-party links.",

    "This website may contain links, resources, or embedded content directing you to external sites. These third-party websites operate independently, and we are not responsible for their content, policies, or actions. We encourage visitors to review the privacy policies and terms of use of any external sites they interact with.",

    "The services, insights, and guidance shared on this website do not constitute professional, legal, or financial advice. For any decisions requiring such expertise, we recommend consulting a qualified specialist.",

    "By using this website, you acknowledge and agree to this disclaimer. If you do not agree with any part of this page, please discontinue use of the site.",
  ];

  return (
    <section className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-4xl ">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 backdrop-blur-xl">
          <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
