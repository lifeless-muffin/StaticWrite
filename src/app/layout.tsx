import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Static Blog with Strapi CMS | StaticWrite",
  description: "A static blog platform using Next.js and Strapi CMS, featuring on-demand revalidation for up-to-date content. Experience speed and SEO benefits with StaticWrite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="rootlayout__wrap w-full">
          <div className="rootlayout__nav py-10 w-full">
            <Navbar />
          </div>
          <div className="rootlayout__main mx-auto max-w-screen-sm pt-2 px-[2rem] md:px-0 md:pt-4 lg:pt-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}