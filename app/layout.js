import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import "../styles/style.css";
import "../styles/owl.transitions.css";
import "../styles/font.css";
import "../styles/font-awesome.css";
import "../styles/bootstrap.css";
import "../styles/bootstrap.min.css";
import "../styles/bootstrap-datepicker.css";

export const metadata = {
  title: "NM Tafe Next.js App",
  description: "A modern application built with Next.js and Bulma",
  openGraph: {
    title: "My Next.js App",
    description: "A modern web application built with Next.js",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "App Logo",
      },
    ],
    siteName: "My Next.js App",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
            {children}
        <Footer />
      </body>
    </html>
  );
}