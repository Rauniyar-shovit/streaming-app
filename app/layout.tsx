import { EmailContextProvider } from "@/context/EmailConext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/context/Provider";
import { MovieModalContextProvider } from "@/context/MovieModalContext";
import { MyListContextProvider } from "@/context/MyListContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Clone of Netflix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <EmailContextProvider>
          <MyListContextProvider>
            <MovieModalContextProvider>
              <body className={`${inter.className} `}>{children}</body>
            </MovieModalContextProvider>
          </MyListContextProvider>
        </EmailContextProvider>
      </Provider>
    </html>
  );
}
