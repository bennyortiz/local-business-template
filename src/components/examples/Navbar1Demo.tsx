'use client';

import { Book, Sunset, Trees, Zap } from "lucide-react";
import { Navbar1 } from "@/components/ui/Navbar1";
import businessConfig from "@/config/business-config";

const demoData = {
  logo: {
    url: "/",
    src: businessConfig.logoUrl || "/file.svg",
    alt: businessConfig.companyName,
    title: businessConfig.companyName,
  },
  menu: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services",
      url: "/services",
      items: [
        {
          title: "Services Overview",
          description: "Browse our comprehensive service catalog",
          icon: <Book className="size-5 shrink-0" />,
          url: "/services",
        },
        {
          title: "Service Areas",
          description: "Find out where we provide our quality services",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/service-areas",
        },
        {
          title: "Testimonials",
          description: "What our clients say about our services",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/#testimonials",
        },
        {
          title: "Request a Quote",
          description: "Get in touch for a personalized service quote",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/contact",
        },
      ],
    },
    {
      title: "Company",
      url: "#",
      items: [
        {
          title: "About Us",
          description: "Learn about our mission, values, and team",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/about",
        },
        {
          title: "Contact",
          description: "Get in touch with our friendly customer service team",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/contact",
        },
        {
          title: "Service Areas",
          description: "Check if we serve your area",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/service-areas",
        },
        {
          title: "Legal",
          description: "Review our terms of service and privacy policy",
          icon: <Book className="size-5 shrink-0" />,
          url: "/legal/terms",
        },
      ],
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
  mobileExtraLinks: [
    { name: "Terms", url: "/legal/terms" },
    { name: "Privacy", url: "/legal/privacy" },
    { name: "Service Areas", url: "/service-areas" },
    { name: "Site Map", url: "#" },
  ],
  auth: {
    login: { text: "Client Login", url: "/login" },
    signup: { text: "Get a Quote", url: "/contact" },
  },
};

function Navbar1Demo() {
  return (
    <div className="space-y-8">
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold">Modern Navigation Component</h1>
        <p className="text-muted-foreground mt-2">
          An accessible, responsive navigation bar with dropdown menus and mobile drawer
        </p>
      </div>
      <Navbar1 {...demoData} />
      <div className="px-4 py-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Component Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Responsive design with desktop and mobile layouts</li>
          <li>Dropdown menus for nested navigation options</li>
          <li>Mobile slide-out drawer with accordion sections</li>
          <li>Fully customizable menu items, links and CTAs</li>
          <li>Accessible keyboard navigation and screen reader support</li>
          <li>Seamless integration with your business configuration</li>
        </ul>
      </div>
    </div>
  );
}

export { Navbar1Demo };
