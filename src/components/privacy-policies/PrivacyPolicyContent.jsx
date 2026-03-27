"use client";
import { useState } from "react";

export default function PrivacyPolicyContent() {
  const sections = [
    {
      id: "who-we-are",
      title: "Who we are",
      content:
        "Our website address is https://dignitytalentconnect.com. This privacy policy explains how we collect, use, and safeguard your information when you interact with our platform.",
    },
    {
      id: "comments",
      title: "Comments",
      content:
        "When visitors leave comments on the site we collect the data shown in the comments form, along with the visitor’s IP address and browser user agent string to help spam detection.",
    },
    {
      id: "media",
      title: "Media",
      content:
        "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS). Visitors can download and extract location data from images on the website.",
    },
    {
      id: "cookies",
      title: "Cookies",
      content:
        "We use cookies to enhance your browsing experience and remember your preferences. Cookies allow us to improve performance, analyze usage patterns, and personalize your experience.",
    },
    {
      id: "embedded-content",
      title: "Embedded content from other websites",
      content:
        "Articles on this site may include embedded content such as videos, images, and articles. Embedded content behaves in the same way as if the visitor has visited the external website.",
    },
    {
      id: "data-sharing",
      title: "Who we share your data with",
      content:
        "We do not sell or trade your personal information. If you request a password reset, your IP address will be included in the reset email.",
    },
    {
      id: "data-retention",
      title: "How long we retain your data",
      content:
        "Comments and their metadata are retained indefinitely to allow us to recognize and approve follow-up comments automatically.",
    },
    {
      id: "user-rights",
      title: "What rights you have over your data",
      content:
        "You can request an exported file of the personal data we hold about you or request that we erase any personal data we hold.",
    },
    {
      id: "data-processing",
      title: "Where your data is sent",
      content:
        "Visitor comments may be checked through an automated spam detection service.",
    },
  ];

  const [active, setActive] = useState("who-we-are");

  return (
    <section className="relative bg-black py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <h3 className="mb-4 text-sm font-semibold text-gray-300">
              Privacy Contents
            </h3>

            <ul className="space-y-3">
              {sections.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActive(item.id)}
                    className={`block text-sm transition ${
                      active === item.id
                        ? "text-purple-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="space-y-16 lg:col-span-3">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 backdrop-blur-xl"
            >
              <h2 className="mb-4 text-2xl font-semibold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {section.title}
                </span>
              </h2>

              <p className="text-sm leading-relaxed text-gray-400">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
