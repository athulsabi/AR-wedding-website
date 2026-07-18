import "./globals.css";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import type { Metadata } from "next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Athul ❤️ Reshma | Wedding Invitation",
  description: "You're warmly invited to celebrate the wedding of Athul & Reshma on August 21, 2026.",
  keywords: [
    "Wedding",
    "Athul",
    "Reshma",
    "Wedding Invitation",
  ],
  authors: [{ name: "Athul" }],

  openGraph: {
    title: "Athul ❤️ Reshma | Wedding Invitation",
    description:
      "Join us in celebrating our wedding on August 21, 2026.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/couple1.png",
        width: 1200,
        height: 630,
        alt: "Athul and Reshma Wedding Invitation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Athul ❤️ Reshma",
    description:
      "You're invited to our wedding celebration.",
    images: ["/images/couple1.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fdf4f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}