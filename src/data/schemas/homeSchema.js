const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Dignifyd Talent Connect",
  url: "https://dignifydtalentconnect.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://dignifydtalentconnect.com/{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dignifyd Talent Connect",
  alternateName: "Recruitment Platform",
  url: "https://dignifydtalentconnect.com/",
  logo: "https://dignifydtalentconnect.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-877-735-0397",
    contactType: "technical support",
    contactOption: "TollFree",
    areaServed: "US",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/dignifydsolutions",
    "https://www.instagram.com/dignifyd/",
    "https://dignifydtalentconnect.com/",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Global Recruitment",
      item: "https://dignifydtalentconnect.com/services/global-recruitment/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "RPO Solutions",
      item: "https://dignifydtalentconnect.com/services/rpo-solutions/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "HR Consulting",
      item: "https://dignifydtalentconnect.com/services/hr-consulting/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Onboarding Support",
      item: "https://dignifydtalentconnect.com/services/onboarding-support/",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Employer Branding",
      item: "https://dignifydtalentconnect.com/services/employer-branding/",
    },
  ],
};

export const homeSchema = [websiteSchema, organizationSchema, breadcrumbSchema];
