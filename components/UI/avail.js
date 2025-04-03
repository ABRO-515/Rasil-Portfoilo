"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";

const MarqueeBanner = () => {
  return (
    <Link href="https://api.whatsapp.com/send/?phone=3010127971&text=Hi%21+Rasil+Abro+How+Are+You%3F&type=phone_number&app_absent=0" >  <div className="fixed bottom-0 left-0 w-full bg-white py-1 shadow-md z-50">
      <Marquee speed={50} gradient={false}>
        <span className="mx-4 text-[14px] file font-bold flex items-center gap-8">
          <h2>✦ &nbsp;&nbsp;AVAILABLE FOR HIRE</h2>
          <h2>✦ &nbsp;&nbsp;AVAILABLE FOR HIRE</h2>
          <h2>✦ &nbsp;&nbsp;AVAILABLE FOR HIRE</h2>
          <h2>✦ &nbsp;&nbsp;AVAILABLE FOR HIRE</h2>
          <h2>✦ &nbsp;&nbsp;AVAILABLE FOR HIRE</h2>
          <h2>✦ &nbsp;&nbsp;AVAILABLE FOR HIRE</h2>
          <h2>✦ &nbsp;&nbsp;AVAILABLE FOR HIRE</h2>
          <h2>✦ &nbsp;&nbsp;AVAILABLE FOR HIRE</h2>
        </span>
      </Marquee>
    </div></Link>
  );
};

export default MarqueeBanner;
