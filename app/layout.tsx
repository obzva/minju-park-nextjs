import type { Metadata, Viewport } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Minju Park",
    default: "Minju Park",
  },
  description:
    "PhD-track CS student at UBC researching HCI and AI-powered systems that enhance learner agency",
  keywords: [
    "Minju Park",
    "Human Computer Interaction",
    "HCI",
    "Educational Technology",
    "AI in Education",
    "Learner Agency",
  ],
  authors: [{ name: "Minju Park", url: "https://www.minju-park.com" }],
  creator: "Minju Park",
  alternates: {
    canonical: "https://www.minju-park.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.minju-park.com",
    title: "Minju Park",
    description:
      "PhD-track CS student at UBC researching HCI and AI-powered systems that enhance learner agency",
    siteName: "Minju Park",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minju Park",
    description:
      "PhD-track CS student at UBC researching HCI and AI-powered systems that enhance learner agency",
    creator: "@minjupark0821",
  },
};

export const viewport: Viewport = {
  themeColor: "white",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoCondensed.className} antialiased`}>
      <body className="w-screen flex justify-center">
        <div className="w-full max-w-160 lg:max-w-5xl min-h-screen flex flex-col items-center px-4">
          <Header />
          <div className="flex-1 w-full mt-8 mb-16 sm:my-0">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
