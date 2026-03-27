import Partners from "@/components/home/Partners";
import Banner from "@/components/home/Banner";
import Collaboration from "@/components/home/Collaboration";
import GlobalPresence from "@/components/home/GlobalPresence";
import Industry from "@/components/home/Industry";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Testimonials from "@/components/common/Testimonials";
import Contact from "@/components/home/Contact";
import FAQs from "@/components/common/FAQs";
import Jobs from "@/components/home/Jobs";
import banner_bg from "../assets/images/home/banner-img.png";
import { hrFAQs } from "@/data/faqs";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Banner
        banner_bg={banner_bg}
        badge={"Discover, Engage, Power"}
        leading_text={"Empowering Organizations With"}
        supporting_text={"Smarter Talent Solutions"}
        description={
          "Discover a hiring experience built for modern businesses. From recruitment to employee growth, we help you attract the right talent, nurture strong teams, and drive long-term success."
        }
        btn_text={"Hire a Talent"}
      />
      <Partners />
      <Stats />
      <GlobalPresence />
      <Industry />
      <Collaboration />
      <Services />
      <Testimonials />
      <Contact />
      <FAQs
        FAQs={hrFAQs}
        badge={"Your FAQ Hub"}
        title={"Explore Our HR Service FAQs"}
      />
      <Jobs />
    </main>
  );
}
