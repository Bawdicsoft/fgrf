import React from "react";

const Footer = () => {
  const data = [
    {
      title: "Product",
      list: [
        "Platform",
        "Overview",
        "Donation",
        "Forms",
        "Event",
        "Registration",
        "Text-to-Donate",
        "Bill-to-Carrier",
        "Peer-to-Peer Fundraising",
        "Auctions",
        "Data, Reports, & Statistics",
        "Integrations",
      ],
    },
    {
      title: "Solutions",
      list: ["Donor Experience", "Increase Event Revenue", " Donor Insights"],
    },
    {
      title: "Customer Experience",
      list: [
        "Support",
        "Live Feedback",
        "Testimonials + Case Studies",
        "Qgiv Conference",
      ],
    },
    {
      title: "Resources",
      list: [
        "Fundraising Webinars",
        "Fundraising Blog",
        "eBooks + Templates",
        "Campaigns We Love",
        "Brand Assets",
        "Giving Tuesday",
        "API Documentation",
      ],
    },
    {
      title: "Our Story",
      list: [
        "Life at Qgiv",
        "Our Team",
        "Awards",
        "Partners",
        "News & Media",
        "Careers",
      ],
    },
    {
      title: "Pricing",
      list: ["Who We Serve", "Qgiv vs Alternatives", "Contact Us"],
    },
  ];
  return (
    <footer className="bg-[#394146]">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto py-8 px-4 lg:gap-0 gap-4 ">
        {data.map((data, index) => (
          <div className="col-span-1" key={index}>
            <h1 className="text-white">{data.title}</h1>
            <ul className="flex flex-col gap-y-3 mt-3">
              {data.list.map((data, index) => (
                <li className="text-[#8e9091] text-sm" key={index}>
                  <a href="">{data}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
