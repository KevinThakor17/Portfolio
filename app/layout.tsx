import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Thakor — Software Engineer & GCP Certified Cloud Specialist",
  description:
    "Portfolio of Kevin Thakor, Software Engineer specializing in scalable web architectures, headless CMS, Python, FastAPI, and GCP Cloud Data Engineering.",
  keywords: [
    "Kevin Thakor",
    "Software Engineer",
    "GCP Certified",
    "Associate Cloud Engineer",
    "Python",
    "FastAPI",
    "BigQuery",
    "Docker",
    "n8n",
    "Headless CMS",
    "Next.js",
    "Drupal",
    "React",
    "JavaScript",
    "WordPress",
  ],
  authors: [{ name: "Kevin Thakor" }],
  openGraph: {
    title: "Kevin Thakor — Software Engineer & GCP Certified Cloud Specialist",
    description:
      "Software Engineer specializing in scalable web architectures, decoupled enterprise CMS, and modern cloud data solutions on Google Cloud.",
    url: "https://kevinthakor.dev",
    siteName: "Kevin Thakor Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#070b12] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
