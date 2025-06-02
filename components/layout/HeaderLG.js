'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function HeaderLG() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (sectionId) => {
    if (pathname === '/') {
      // Trigger client-side event for scroll on same page
      const event = new CustomEvent('scrollToSection', { detail: sectionId });
      window.dispatchEvent(event);
    } else {
      // Navigate to home with query param
      router.push(`/?scrollTo=${sectionId}`);
    }
  };

  return (
    <main className="w-full h-full">
      <div className="bg-black lg:flex hidden px-16 my-3 py-3 items-center text-white mx-16 rounded-full justify-between">
        <h1 className="text-2xl text-white file">R.A</h1>
        <ul className="flex gap-4">
          {['Home', 'About', 'Projects', 'Skills', 'Now'].map((item) => (
            <li
              key={item}
              className="list-none hover:text-gray-400 file text-white cursor-pointer"
              onClick={() => handleScroll(item)}
            >
              {item}
            </li>
          ))}
          <a
            href="/resume.pdf"
            className="hover:text-gray-400 file cursor-pointer"
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
