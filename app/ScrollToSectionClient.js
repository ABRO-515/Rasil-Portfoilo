"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { scroller } from "react-scroll";

export default function ScrollToSectionClient() {
  const searchParams = useSearchParams();
  const section = searchParams.get("scrollTo");

  useEffect(() => {
    if (section) {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -80, // Adjust if you have a sticky header
      });
    }
  }, [section]);

  return null;
}
