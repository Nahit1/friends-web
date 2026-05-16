import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";

const signika = Signika({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-signika",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Friends Pet Production | Your Friend's Best Friend",
  description: "Friends Pet Production - Evcil hayvan maması ve bakım ürünleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={signika.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
