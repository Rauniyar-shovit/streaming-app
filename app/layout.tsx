import { EmailContextProvider } from "@/context/EmailConext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/context/Provider";
import { MovieModalContextProvider } from "@/context/MovieModalContext";
import { MyListContextProvider } from "@/context/MyListContext";
import { MyProfileContextProvider } from "@/context/ProfileContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Clone of Netflix",
  other: {
    "google-site-verification": "UIp8v_x2YTMz3xk9iuISK_SxmEYESWomBQwdsp-6cew",
  },
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
          <MyProfileContextProvider>
            <MyListContextProvider>
              <MovieModalContextProvider>
                <body className={`${inter.className} `}>{children}</body>
              </MovieModalContextProvider>
            </MyListContextProvider>
          </MyProfileContextProvider>
        </EmailContextProvider>
      </Provider>
    </html>
  );
}
