import "./globals.css"; // Your global styles
import { Metadata } from "next"; // Import Metadata type from 'next'
import Script from "next/script"; // Import Script for JSON-LD

// Import your manrope font
import { manrope } from "./fonts/manrope"; // Adjust path if different

// --- SEO Metadata Configuration ---
// This 'metadata' object will be used by Next.js to generate <head> tags
export const metadata: Metadata = {
  // Primary SEO: Title and Description - Emphasizing Upwork
  title: "Dian Tanjung | Expert Frontend Developer & Upwork Freelancer",
  description:
    "Hire Dian Tanjung, a top-rated Frontend Developer on Upwork. Specializing in React, Next.js, and Tailwind CSS for robust, scalable web applications. Available for freelance projects.",

  // Keywords - Targeted for Upwork clients
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
    "Dian Tanjung",
    "JavaScript",
    "Tailwind CSS",
    "Freelance Frontend Developer",
    "Hire React Developer",
    "Upwork Freelancer",
    "Upwork Frontend",
    "Remote Web Developer",
    "Full-stack Developer", // Add more specific skills if relevant
  ],

  // Author and Publisher Information
  authors: [{ name: "Dian Tanjung", url: "https://github.com/diantanjung" }],
  creator: "Dian Tanjung",
  publisher: "Dian Tanjung",

  // Canonical URL (important for preventing duplicate content issues)
  // IMPORTANT: Replace 'diantanjung.vercel.app' with your actual Vercel domain or custom domain when deployed!
  alternates: {
    canonical: "https://diantanjung.vercel.app",
  },

  // Open Graph (OG) Meta Tags for Social Media Sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Dian Tanjung | Expert Frontend Developer & Upwork Freelancer",
    description:
      "Hire Dian Tanjung, a top-rated Frontend Developer on Upwork. Specializing in React, Next.js, and Tailwind CSS for robust, scalable web applications.",
    url: "https://diantanjung.vercel.app", // IMPORTANT: Replace with your actual domain
    siteName: "Dian Tanjung Frontend Portfolio",
    images: [
      {
        url: "https://diantanjung.vercel.app/og-image.jpg", // IMPORTANT: Path to your Open Graph image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Dian Tanjung - Frontend Developer Portfolio & Upwork Freelancer",
      },
      // You can add more image sizes if needed
    ],
    locale: "en_US", // Or your specific locale, e.g., 'id_ID'
    type: "website", // For a portfolio, 'website' is usually appropriate
  },

  // Twitter Card Meta Tags for Twitter Sharing
  twitter: {
    card: "summary_large_image", // Options: 'summary', 'summary_large_image', 'app', 'player'
    title: "Dian Tanjung | Expert Frontend Developer & Upwork Freelancer",
    description:
      "Hire Dian Tanjung, a top-rated Frontend Developer on Upwork. Specializing in React, Next.js, and Tailwind CSS for robust, scalable web applications.",
    creator: "@diantanjungdev", // Your Twitter handle
    images: ["https://diantanjung.vercel.app/twitter-image.jpg"], // IMPORTANT: Path to your Twitter card image (1200x675px recommended)
  },

  // Viewport setting (already default in Next.js, but good to explicitly know)
  viewport: "width=device-width, initial-scale=1",

  // Other optional meta tags
  robots: "index, follow", // Tells search engines to index and follow links
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Define your JSON-LD Schema Markup
  // This helps search engines understand the content on your page more deeply.
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      // Using @graph for multiple entities on the page
      {
        "@type": "Person",
        "@id": "https://diantanjung.vercel.app/#person", // IMPORTANT: Unique identifier for yourself (using your domain)
        name: "Dian Tanjung",
        url: "https://diantanjung.vercel.app", // Your portfolio website
        sameAs: [
          // All your social/professional profiles are linked here
          "https://upwork.com/freelancers/dianmulyanatanjung", // Your Upwork Profile - TOP PRIORITY!
          "https://github.com/diantanjung",
          "https://www.linkedin.com/in/diantanjung/",
          "https://x.com/diantanjungdev", // Using x.com for Twitter
          "https://medium.com/@diantanjung",
          "https://www.instagram.com/diantanjungdev",
        ],
        jobTitle: "Frontend Developer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance", // Or your company name if you have one
        },
        description:
          "Experienced Frontend Developer specializing in building interactive and responsive web applications with React, Next.js, and Tailwind CSS. Available for freelance projects on Upwork.",
        alumniOf: "Your University/Bootcamp Name (Optional)", // Optional: e.g., "Universitas Indonesia"
        knowsLanguage: ["en", "id"], // English, Indonesian (adjust as needed)
      },
      {
        "@type": "WebSite",
        "@id": "https://diantanjung.vercel.app/#website", // Unique identifier for your website
        url: "https://diantanjung.vercel.app", // Your portfolio website
        name: "Dian Tanjung Frontend Portfolio",
        publisher: { "@id": "https://diantanjung.vercel.app/#person" }, // Link to the Person entity
        inLanguage: "en-US", // Or your specific language, e.g., "id-ID"
      },
      {
        "@type": "WebPage",
        "@id": "https://diantanjung.vercel.app/#webpage", // Unique identifier for this specific page (home page)
        url: "https://diantanjung.vercel.app", // Your portfolio website
        name: "Dian Tanjung - Frontend Developer Portfolio",
        isPartOf: { "@id": "https://diantanjung.vercel.app/#website" }, // Link to the Website entity
        about: { "@id": "https://diantanjung.vercel.app/#person" }, // Link to the Person entity
        description:
          "Hire Dian Tanjung, a top-rated Frontend Developer on Upwork. Specializing in React, Next.js, and Tailwind CSS for robust, scalable web applications.",
        inLanguage: "en-US", // Or your specific language, e.g., "id-ID"
      },
      // You could add "ProfessionalService" or "Service" schema here if you want to detail services
      // For instance:
      // {
      //   "@type": "Service",
      //   "name": "Frontend Web Development",
      //   "description": "Custom frontend development services using React, Next.js, and modern web technologies.",
      //   "provider": { "@id": "https://diantanjung.vercel.app/#person" },
      //   "serviceType": "Web Development",
      //   "url": "https://upwork.com/freelancers/dianmulyanatanjung" // Direct link to your Upwork service
      // }
    ],
  };

  return (
    // Apply the Manrope font variable to the html tag
    <html lang="en" className={`${manrope.variable}`}>
      <head>
        {/* JSON-LD Structured Data for Rich Snippets */}
        <Script
          id="json-ld-schema" // Unique ID for the script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
