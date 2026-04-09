import { tabs } from "@/data/navigation";
import styles from "../common-services/ServicesTabs.module.scss";

const ServicesTabs = ({ activeService, handleFunc, isDetail = true }) => {
  return (
    <>
      <div className="mb-10 flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-3 md:flex-nowrap">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() =>
                isDetail ? handleFunc(`/services/${tab.slug}`) : handleFunc(i)
              }
              className={`${styles.serviceTabs__btn} ${activeService?.slug === tab.slug ? styles["serviceTabs__btn--active"] : styles["serviceTabs__btn--inactive"]}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesTabs;
