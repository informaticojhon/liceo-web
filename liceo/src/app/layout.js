import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head"; // Importar Head para favicon

export const metadata = {
  title: "Liceo Melinka",
  description: "Sitio oficial del Liceo Melinka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="flex flex-col min-h-screen bg-white text-black">
        <Header />
        <main className="flex-1 container mx-auto py-10 mt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
