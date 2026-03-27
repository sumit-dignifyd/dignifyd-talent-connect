import SectionHeader from "../common/SectionHeader";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <SectionHeader
          title={"Let’s Connect"}
          description={
            "No delays, no vague replies — we respond within 24 hours to schedule your personalized discovery call."
          }
        />
        <div className={`rounded-3xl p-8 ${styles.formCard}`}>
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-xs text-gray-300">Name*</label>
              <input
                type="text"
                placeholder="Your name"
                className={styles.input}
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-300">Email*</label>
              <input
                type="email"
                placeholder="Your Email"
                className={styles.input}
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-300">
                Mobile Number*
              </label>
              <input
                type="text"
                placeholder="Your Number"
                className={styles.input}
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-300">
                Choose Types of Services
              </label>

              <div className={styles.selectWrapper}>
                <select className={styles.select}>
                  <option>Global Recruitment</option>
                  <option>RPO Solutions</option>
                  <option>Employer Branding</option>
                  <option>HR Consulting</option>
                  <option>Onboarding Support</option>
                </select>

                <span className={styles.arrow}></span>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-300">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className={`${styles.input} ${styles.textarea}`}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full rounded-full py-3 text-sm font-medium text-white ${styles.button} cursor-pointer`}
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
