import SectionHeader from "@/components/common/SectionHeader";
import styles from "./Testimonials.module.scss";
import Image from "next/image";

import avatar from "../../assets/images/home/testimonials/avatar.jpg";

const data = [
  {
    name: "JohnD",
    username: "@JohnD456",
    text: "This AI app seamlessly blends innovation with user-friendly design. From image generation to data analysis.",
  },
  {
    name: "CindyCandy",
    username: "@Candy6688",
    text: "This app is a testament to the potential of AI. The image generation is mind-blowing.",
  },
  {
    name: "Leodo17",
    username: "@leodo17",
    text: "The integration capabilities are unparalleled. It fits perfectly into our workflow.",
  },
  {
    name: "JohnD",
    username: "@JohnD456",
    text: "This AI app seamlessly blends innovation with user-friendly design. From image generation to data analysis.",
  },
  {
    name: "CindyCandy",
    username: "@Candy6688",
    text: "This app is a testament to the potential of AI. The image generation is mind-blowing.",
  },
  {
    name: "Leodo17",
    username: "@leodo17",
    text: "The integration capabilities are unparalleled. It fits perfectly into our workflow.",
  },
  {
    name: "JohnD",
    username: "@JohnD456",
    text: "This AI app seamlessly blends innovation with user-friendly design. From image generation to data analysis.",
  },
  {
    name: "CindyCandy",
    username: "@Candy6688",
    text: "This app is a testament to the potential of AI. The image generation is mind-blowing.",
  },
  {
    name: "Leodo17",
    username: "@leodo17",
    text: "The integration capabilities are unparalleled. It fits perfectly into our workflow.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={"Testimonials"}
          title={"Client Experiences: Success Narratives And Reviews"}
        />
        <div className={`mt-16 ${styles.wrapper}`}>
          <div className={styles.fadeLeft} />
          <div className={styles.fadeRight} />

          <div className={`${styles.row} ${styles.scrollRight}`}>
            {[...data, ...data].map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>

          <div className={`${styles.row} ${styles.scrollLeft} mt-6`}>
            {[...data, ...data].map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ name, username, text }) {
  return (
    <div className="max-w-[320px] min-w-[300px] rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-900/30 to-black/40 p-5 backdrop-blur-xl">
      <div className="mb-3 flex items-center gap-3">
        <div className="relative h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={avatar}
            alt="avatar"
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-gray-400">{username}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-300">{text}</p>
    </div>
  );
}
