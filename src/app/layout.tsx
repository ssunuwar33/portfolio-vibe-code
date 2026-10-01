import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Subash Sunuwar, AI engineer",
  description:
    "AI engineer in London building LLM integrations, workflow automation and computer-vision systems.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: "https://ssunuwar33.github.io",
    title: "Subash Sunuwar, AI engineer",
    description:
      "AI engineer in London building LLM integrations, workflow automation and computer-vision systems.",
  },
  twitter: {
    card: "summary",
    title: "Subash Sunuwar, AI engineer",
    description:
      "AI engineer in London building LLM integrations, workflow automation and computer-vision systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
