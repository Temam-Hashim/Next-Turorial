import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/context/theme.provider";

const inter = Inter({ subsets: ["latin"] });




export const metadata: Metadata = {
  title: "Next rendering",
  description: "Next rendering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <script src="../path/to/flowbite/dist/flowbite.min.js" />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
