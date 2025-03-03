import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider"
import localFont from "next/font/local";
import "./globals.css";

const dmSans = localFont({
  src: [{ path: "./fonts/DMSans-Regular.woff2", weight: "400" }],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Automate Your Work With Fuzzie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
