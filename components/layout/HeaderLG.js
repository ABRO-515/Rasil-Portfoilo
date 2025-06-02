"use client"
import { Link as ScrollLink } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function HeaderLG() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollOrRedirect = useCallback((section) => {
    if (pathname === "/") {
      const scroller = require("react-scroll").scroller;
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    } else {
      router.push(`/?scrollTo=${section}`);
    }
  }, [pathname, router]);

  return (
    <main className="w-full h-full">
      <div className="bg-black lg:flex hidden px-16 my-3 py-3 items-center text-white mx-16 rounded-full justify-between">
        <h1 className="text-2xl file">R.A</h1>
        <ul className="flex gap-4">
          {["Home", "About", "Projects", "Skills", "Now"].map((section) => (
            <li
              key={section}
              onClick={() => scrollOrRedirect(section)}
              className="cursor-pointer file hover:text-gray-400"
            >
              {section}
            </li>
          ))}
          <a
            href="/resume.pdf"
            className="hover:text-gray-400 file"
            download="Rasil-Abro-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </ul>
      </div>
    </main>
  );
}
