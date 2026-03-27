import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactSection from "@/components/contact/ContactSection";
import Newsletter from "@/components/contact/NewsLetter";
import OurPresence from "@/components/contact/OurPresence";

const ContactUs = () => {
  return (
    <>
      <ContactSection />
      <ContactInfoSection />
      <OurPresence />
      <Newsletter />
    </>
  );
};

export default ContactUs;
