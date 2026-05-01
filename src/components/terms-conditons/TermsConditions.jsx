export default function TermsConditions() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]"></div>

      <div className="relative mx-auto max-w-6xl md:px-10 lg:px-16">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_60px_rgba(168,85,247,0.15)] backdrop-blur-xl md:p-14">
          <div className="space-y-8 text-[15px] leading-relaxed text-gray-300 md:text-[16px]">
            <p>
              By accessing or using the Dignifyd Talent Connect website and
              services, you agree to these Terms & Conditions. All information,
              features, and services provided through our platform—including
              recruitment, staffing, and HR consulting—are offered on an
              as-available basis and may be modified or discontinued without
              notice.
            </p>

            <p>
              Users must provide accurate information, use the website for
              lawful purposes, and refrain from any actions that may disrupt its
              functionality. All content on this site, including text, images,
              and design elements, is the intellectual property of Dignifyd
              Talent Connect and cannot be copied or reproduced without
              permission.
            </p>

            <p>
              Any personal or business information shared with us will be
              handled according to our Privacy Policy.
            </p>

            <div className="border-t border-white/10 pt-6">
              <p>
                We are not responsible for third-party links or external content
                accessed through our site. Dignifyd Talent Connect is not liable
                for any damages resulting from the use or inability to use our
                services.
              </p>
            </div>

            <p>
              We reserve the right to refuse service and to update these Terms &
              Conditions at any time. Continued use of the platform indicates
              acceptance of any updates.
            </p>

            <div className="mt-10 rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6">
              <p className="text-gray-300">
                If you have any questions regarding these terms, contact us at
              </p>

              <a
                href="mailto:hello@dignifydtalentconnect.com"
                className="mt-2 inline-block font-medium text-purple-400 hover:text-purple-300"
              >
                hello@dignifydtalentconnect.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
