import ServiceDetails from "@/components/services/ServiceDetails";

export const generateMetadata = async ({ params }) => {
  const { service } = await params;

  const formatted = service
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formatted} | Dignifyd Talent Connect`,
    description: `Learn more about our ${formatted} service and how it can help you hire smarter and find jobs faster with Dignifyd Talent Connect.`,
  };
};
const ServiceDetailsPage = () => {
  return (
    <>
      <ServiceDetails />
    </>
  );
};

export default ServiceDetailsPage;
