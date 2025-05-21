import MarqueeBanner from "@/components/UI/avail";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeaderLG from "@/components/layout/HeaderLG";


export const metadata = {
  title: "Rasil Abro",
  description: "A Passionate Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <div className="flex flex-col min-h-screen" >
      <Header />
       <HeaderLG />
        <main className="flex-grow" >
      {children}
        <MarqueeBanner />
        </main>
        <Footer />
      </div>
    </body>
    </html>
  );
}

