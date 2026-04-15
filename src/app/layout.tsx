import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
