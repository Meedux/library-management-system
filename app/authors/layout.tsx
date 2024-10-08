import type { Metadata } from "next";
import "./../globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Authors",
  description: "Generated by create next app",
};

export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}
