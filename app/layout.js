import MarqueeBanner from "@/components/UI/avail";
import "./globals.css";


export const metadata = {
  title: "Rasil Abro",
  description: "A Passionate Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}
        <MarqueeBanner />

      </body>
    </html>
  );
}
