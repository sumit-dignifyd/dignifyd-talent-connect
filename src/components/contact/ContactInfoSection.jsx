import { ContactCard } from "../common/ContactCards";
import { LocationEdit, Mail, Phone } from "lucide-react";

const cardInfo = [
  {
    icon: Mail,
    title: "Chat to me",
    description: "hello@dignifyd.tech",
  },
  {
    icon: LocationEdit,
    title: "Visit my office",
    description: "Ground floor, Upper, C64, C Block, Sector 2,",
  },
  {
    icon: Phone,
    title: "Call me!",
    description: "+996 7852 XXXX XXX",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="w-full bg-black py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cardInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <ContactCard
              key={index}
              icon={<Icon size={30} className="text-purple-500" />}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
}
