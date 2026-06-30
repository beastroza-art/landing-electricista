import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { company } from "@/data/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: company.metadata.title,
  description: company.metadata.description,
  keywords: [
    "electricista",
    "electricista 24/7",
    "instalaciones electricas",
    "emergencias electricas",
    "certificaciones SEC",
    "electricista autorizado",
  ],
  authors: [{ name: company.name }],
  metadataBase: new URL("https://electricpro.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: company.metadata.title,
    description: company.metadata.description,
    url: "https://electricpro.cl",
    siteName: company.name,
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: company.metadata.title,
    description: company.metadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
