import Image from "next/image";
import styles from "./LogoSlider.module.scss";
import wipro from "../../assets/images/home/logos/wipro.png";

const logos = [
  wipro,
  wipro,
  wipro,
  wipro,
  wipro,
  wipro,
  wipro,
  wipro,
  wipro,
  wipro,
];

const LogoSlider = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />

        <div className={styles.marquee}>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <div className="relative flex h-12 w-24 items-center justify-center rounded-xl border border-black/10 p-3 shadow-sm transition-all duration-300 hover:scale-105 md:h-16 md:w-32">
                <Image
                  src={logo}
                  alt={`${logo} company logo`}
                  fill
                  sizes="(max-width:768px) 96px, 128px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoSlider;
