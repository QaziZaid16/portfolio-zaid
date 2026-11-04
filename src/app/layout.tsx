import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { LanguageProvider } from "@/i18n/context";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Ayush | A Passionate Software Engineer",
    template: "%s | Portfolio",
  },
  description:
    "A passionate developer building digital experiences that inspire. Explore my projects, skills, and professional journey.",
  keywords: [
    "developer",
    "portfolio",
    "web development",
    "full stack",
    "react",
    "nextjs",
  ],
  authors: [{ name: "Ayush Kumar Tiwari" }],
  creator: "Ayush Kumar Tiwari",
  metadataBase: new URL("https://itsayuu.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsayuu.vercel.app",
    title: "Ayush | A Passionate Software Engineer",
    description:
      "A passionate developer building digital experiences that inspire.",
    siteName: "Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.en.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: [
      {
        url: "/Zaid_light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Zaid_dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <TooltipProvider delayDuration={0}>
              <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                <FlickeringGrid
                  className="h-full w-full"
                  squareSize={2}
                  gridGap={2}
                  style={{
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black, transparent)",
                  }}
                />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
                {children}
              </div>
              <Navbar />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
