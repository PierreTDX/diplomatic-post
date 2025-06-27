import "./../styles/globals.scss";
import localFont from "next/font/local";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Déclaration Fonts
const neulisAlt = localFont({
  src: [
    {
      path: "../public/fonts/NeulisAlt/NeulisAlt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeulisAlt/NeulisAlt-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/NeulisAlt/NeulisAlt-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NeulisAlt/NeulisAlt-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--neulisAlt", // nom de la variable CSS
});

// Déclaration Fonts
const fractul = localFont({
  src: [
    {
      path: "../public/fonts/Fractul/Fractul-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--fractul", // nom de la variable CSS
});

export const metadata = {
  title: "The Diplomatic Post",
  description: "Journal d'information",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${neulisAlt.variable} ${fractul.variable}`}>
      <body className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}