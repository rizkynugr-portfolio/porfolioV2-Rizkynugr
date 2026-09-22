"use client";

import { socialLinks } from "../data/portfolio";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
  );
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C13.8443 4.75 15.5284 5.43859 16.8166 6.57793M11.9616 11.8596L11.8687 11.7584M12.0298 9.35123L12.0003 9.35338M14.717 9.87879L14.7212 9.87271M13.2537 13.9213L13.2678 13.9114M16.1481 14.1206C16.1481 14.1206 17.5 13.1118 17.5 11.2384C17.5 9.36506 16.0264 7.5 13.4324 7.5C11.5176 7.5 9.77448 8.44102 8.78442 10.0211C7.74411 11.6814 7.5 14.3217 8.54019 16.035C9.58153 17.7504 11.6667 19.125 14.1667 18.0625C16.6667 17 16.7118 15.3414 16.671 14.7231C16.6202 13.9515 15.8209 13.5137 15.0931 13.8824C14.3653 14.2512 14.5126 15.177 14.0772 15.6534C13.6418 16.1299 12.3996 16.4883 11.5152 15.642C10.6307 14.7958 10.5186 12.396 11.8687 11.7584C12.3276 11.5416 12.8943 11.6429 13.2537 11.979C13.6132 12.3151 13.6841 12.8718 13.4357 13.2847C13.1873 13.6975 12.6842 13.8569 12.2854 13.6766C11.8866 13.4962 11.7226 13.0645 11.8687 12.6738M11.8687 12.6738C12.0148 12.2831 12.4411 12.0594 12.8596 12.1645C13.2781 12.2696 13.5592 12.6702 13.5156 13.0978C13.472 13.5255 13.1166 13.8549 12.6885 13.8647C12.2604 13.8744 11.8906 13.5786 11.8152 13.155C11.7397 12.7314 11.996 12.3082 12.4116 12.1666C12.8271 12.0249 13.2828 12.2045 13.4735 12.5855C13.6642 12.9664 13.5414 13.4385 13.1852 13.6874C12.829 13.9363 12.3396 13.8824 12.0298 13.5594C11.7201 13.2365 11.666 12.7239 11.8997 12.348C12.1333 11.9722 12.597 11.826 12.9866 11.9945C13.3761 12.1629 13.6062 12.5947 13.5276 13.0039C13.4489 13.413 13.0827 13.6934 12.6649 13.6657C12.247 13.638 11.9168 13.3106 11.8841 12.8943C11.8514 12.478 12.1284 12.0838 12.5367 11.9616M11.8687 11.7584L12.5367 11.9616M12.0003 9.35338C12.4419 9.32049 12.8803 9.53931 13.1492 9.9238C13.4182 10.3083 13.4705 10.7981 13.2863 11.2081C13.102 11.618 12.7126 11.8856 12.2641 11.912C11.8157 11.9385 11.3855 11.7188 11.1343 11.3347C10.883 10.9506 10.8523 10.4578 11.0537 10.0401C11.255 9.6225 11.6575 9.34997 12.1105 9.32431C12.5636 9.29864 13.0053 9.52479 13.2707 9.91799C13.5361 10.3112 13.5794 10.8146 13.3847 11.2407C13.1901 11.6667 12.7915 11.9542 12.3387 11.9961M12.0003 9.35338L12.3387 11.9961M14.717 9.87879C15.0567 10.3541 15.0489 11.0028 14.6975 11.4697C14.3461 11.9366 13.7226 12.1264 13.1678 11.935C12.6131 11.7435 12.2359 11.2132 12.2393 10.6307C12.2427 10.0482 12.6258 9.52184 13.183 9.33649C13.7402 9.15115 14.3644 9.34863 14.7118 9.82143C15.0592 10.2942 15.0514 10.9419 14.6922 11.4074C14.3331 11.8728 13.7126 12.0575 13.1633 11.8624C12.6141 11.6673 12.2435 11.1399 12.25 10.5599C12.2565 9.97984 12.6375 9.45863 13.1901 9.28014C13.7428 9.10166 14.3643 9.3087 14.7042 9.78923C15.0441 10.2698 15.0315 10.9135 14.6723 11.3712C14.313 11.829 13.6896 12.0039 13.1384 11.8021C12.5873 11.6003 12.2227 11.0664 12.2384 10.4851M14.717 9.87879L12.2384 10.4851M13.2537 13.9213C12.723 13.8045 12.2612 13.4357 12.0594 12.9358C11.8576 12.4359 11.9542 11.8687 12.3087 11.472C12.6632 11.0754 13.2201 10.9168 13.7381 11.063C14.2562 11.2091 14.6548 11.6358 14.7611 12.1645C14.8674 12.6931 14.6625 13.2384 14.2327 13.568C13.803 13.8975 13.22 13.9575 12.7285 13.7226C12.2369 13.4877 11.9161 13.0039 11.9056 12.4646C11.895 11.9254 12.1963 11.4258 12.6791 11.1738C13.1619 10.9219 13.7441 10.963 14.1849 11.2801C14.6258 11.5972 14.8517 12.138 14.7686 12.6738C14.6855 13.2095 14.3065 13.6499 13.7937 13.8093C13.2809 13.9688 12.7188 13.8211 12.348 13.4287C11.9772 13.0362 11.8576 12.466 12.0397 11.9582C12.2217 11.4504 12.6766 11.0822 13.2105 10.9996C13.7444 10.9169 14.2721 11.1332 14.5685 11.5583C14.865 11.9834 14.8809 12.5463 14.609 12.9866C14.3372 13.4269 13.826 13.666 13.2917 13.5975M13.2537 13.9213L13.2917 13.5975" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
  );
}

const SOCIALS = [
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    icon: <LinkedInIcon />,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    desc: "Let's connect professionally."
  },
  {
    label: "GitHub",
    href: socialLinks.github,
    icon: <GitHubIcon />,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    desc: "Check out my open source repositories."
  },
  {
    label: "Instagram",
    href: socialLinks.instagram,
    icon: <InstagramIcon />,
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=800&auto=format&fit=crop",
    desc: "Follow my visual journey & design process."
  },
  {
    label: "Threads",
    href: socialLinks.threads,
    icon: <ThreadsIcon />,
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
    desc: "Join the conversation and thoughts."
  },
  {
    label: "Facebook",
    href: socialLinks.facebook,
    icon: <FacebookIcon />,
    image: "https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=800&auto=format&fit=crop",
    desc: "Connect with me and the community."
  },
  {
    label: "Email",
    href: `mailto:${socialLinks.email}`,
    icon: <MailIcon />,
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop",
    desc: (
      <>
        <span className="block font-semibold text-white/90">{socialLinks.email}</span>
        Send me a direct message.
      </>
    )
  },
];

export default function Contact() {
  return (
    <footer className="w-full bg-[#09090b] text-white pt-20 pb-10 px-6 md:px-12 xl:px-20 mt-20 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1500px] mx-auto w-full relative z-10">
        <div className="flex flex-col xl:flex-row justify-between items-start gap-16 mb-20">

          {/* Left Column: Brand & Text */}
          <div className="flex flex-col items-start w-full xl:w-[40%]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black font-bold text-2xl">
                R
              </div>
              <h2 className="text-3xl font-bold tracking-tight">RIZKY.</h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Crafting premium digital experiences, immersive components, and creative web solutions built for the next generation.
            </p>

            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>

          {/* Right Column: Existing Accordion */}
          <nav
            className="flex flex-col xl:flex-row w-full xl:w-[55%] h-[500px] xl:h-[400px] overflow-hidden rounded-3xl bg-white shadow-2xl relative shrink-0"
            aria-label="Social media links"
          >
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col xl:flex-row h-full xl:h-auto w-full xl:w-auto flex-[1] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[4.5] cursor-pointer border-b xl:border-b-0 xl:border-r border-gray-200 last:border-b-0 xl:last:border-r-0"
              >
                {/* Collapsed State / Sidebar (Always visible) */}
                <div className="absolute left-0 top-0 w-full h-[50px] xl:h-full xl:w-[70px] bg-white flex flex-row xl:flex-col justify-start xl:justify-between items-center px-4 xl:px-0 py-0 xl:py-6 z-10 transition-colors duration-300 group-hover:bg-violet-600 gap-4 xl:gap-0">
                  <div className="w-8 h-8 xl:w-11 xl:h-11 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-white/20 text-violet-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    {social.icon}
                  </div>
                  <span className="transform xl:-rotate-90 whitespace-nowrap xl:mb-12 tracking-[0.15em] uppercase text-xs xl:text-[11px] font-bold text-gray-800 group-hover:text-white transition-colors duration-300 origin-center">
                    {social.label}
                  </span>
                </div>

                {/* Expanded State Content (Image & Text) */}
                <div className="relative w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-[50px] xl:mt-0 xl:ml-[70px]">
                  <img src={social.image} alt={social.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-full p-4 xl:p-6 pb-6 xl:pb-6">
                    <h3 className="text-white text-lg xl:text-xl font-bold mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{social.label}</h3>
                    <p className="text-white/80 text-xs xl:text-sm font-medium tracking-wide line-clamp-2">{social.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-sm text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Rizky Nugraha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
