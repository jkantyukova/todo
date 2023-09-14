import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="wrapper">
        <div className="content">{children}</div>
      </div>
    </>
  );
}
