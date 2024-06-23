import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

// setting up the font
const inter = Inter({ subsets: ["latin"] });

// metadata for the site
export const metadata: Metadata = {
  title: "Felicia Haggard Portfolio",
  description: "Generated by Next + Sanity + Tailwind CSS",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // get all pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="{inter} bg-blue-dark max-w-3xl mx-auto py-10">
        {/* creating header for all pages */}
        <header className="flex items-center justify-between">
          {/* header logo that takes you to home page */}
          <Link href="/" className="bg-gradient-to-b from-red-900 via-red-400 to-rose bg-clip-text text-transparent font-bold text-lg">Felicia</Link>

          {/* mapping over the pages */}
          <div className="flex items-center gap-5">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="text-white hover:underline hover:underline-offset-8 hover:text-rose">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        
        <main className="py-20">{children}</main>
        
      </body>
    </html>
  );
}
