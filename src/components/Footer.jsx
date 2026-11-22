import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ShieldCheck, Activity, Server } from 'lucide-react';
import { PARTNERS_LOGOS } from '../data/commercialData';

export default function Footer() {
  return (
    <footer className="bg-[#fcf9f2] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-9xl mx-auto bg-black text-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-2xl">
        {/* Top Section: Brand/Socials/Metrics + Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16">
          {/* Left Column: Logo, Social Buttons, Community Stats */}
          <div className="md:col-span-5 lg:col-span-5 space-y-6">
            {/* Logo */}
            <Link to="/" aria-label="Geeks on Tap home" className="inline-flex items-center gap-3 text-white group">
              <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-display font-black text-sm tracking-tighter shadow-md">
                GOT
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  GEEKS ON TAP
                </span>
                <span className="font-mono text-[10px] text-white/60 uppercase tracking-wider">
                  Infrastructure NOC
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Zero software engineering. Pure bare metal, network fabric, and 24/7 NOC operations engineered for zero-failure workloads.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.32a1.64 1.64 0 0 0-1.66 1.64c0 .91.74 1.65 1.66 1.65a1.65 1.65 0 0 0 1.66-1.65c0-.9-.75-1.64-1.66-1.64z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="tel:18004227662"
                aria-label="Hotline"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Infrastructure Metrics list */}
            {/* <div className="space-y-3 pt-2 text-xs text-white/90">
              <div className="flex items-start gap-2.5">
                <Server className="w-4 h-4 text-[#248a3d] flex-shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <p className="font-normal text-white/90">Global Backbone Network:</p>
                  <p className="font-semibold text-[#248a3d]">100Gbps+ Redundant Core Fabric</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-white/70 flex-shrink-0" />
                <span>24/7 NOC: 15-Min Response Guarantee</span>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-white/70 flex-shrink-0" />
                <span>Uptime SLA: 99.995% Network Availability</span>
              </div>
            </div> */}
          </div>

          {/* Center Column: Core Infrastructure Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white/60 mb-4">
              Core Infrastructure
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base font-normal text-white">
              <li>
                <Link to="/services/bare-metal" className="hover:text-white/80 transition-colors">
                  Dedicated Bare Metal
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-infrastructure" className="hover:text-white/80 transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/network-engineering" className="hover:text-white/80 transition-colors">
                  Network Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity-hardening" className="hover:text-white/80 transition-colors">
                  Cybersecurity Hardening
                </Link>
              </li>
              <li>
                <Link to="/services/managed-it-operations" className="hover:text-white/80 transition-colors">
                  Managed IT & NOC
                </Link>
              </li>
              <li>
                <Link to="/services/hardware-lifecycle" className="hover:text-white/80 transition-colors">
                  Hardware Lifecycle
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Standards, Compliance & Hotline */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white/60 mb-4">
              Standards & Operations
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base font-normal text-white/80">
              <li>
                <Link to="/about-us" className="hover:text-white transition-colors">
                  Tier-III+ Data Centers
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white transition-colors">
                  SOC 2 Type II Certified
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white transition-colors">
                  ISO/IEC 27001 Security
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white transition-colors">
                  "No-Dev" Infrastructure Manifesto
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  PGP Key & NOC Directory
                </Link>
              </li>
              <li>
                <a
                  href="tel:18004227662"
                  className="hover:text-white text-white font-mono transition-colors flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>+1 (343) 297‑6786</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Infrastructure Disclaimer */}
        <div className="mt-14 sm:mt-20 mb-10 sm:mb-14 text-[11px] sm:text-[12px] text-white/50 leading-relaxed font-light max-w-4xl">
          Geeks on Tap operates exclusively as an Infrastructure as a Service (IaaS) and Managed NOC provider. We do not develop consumer software or user-facing application code. All partner data centers and colocation suites adhere strictly to SOC 2 Type II, ISO/IEC 27001, PCI-DSS v4.0, and 99.995% Network Availability SLAs with Zero-Payload Inspection guarantees.
        </div>

        {/* Bottom Status & Policy Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 pt-4 border-t border-white/10 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2025 Geeks on Tap Inc. Mission-Critical Infrastructure.</span>
            <Link to="/about-us" className="hover:text-white transition-colors">
              Privacy & Data Policy
            </Link>
            <Link to="/services" className="hover:text-white transition-colors">
              Our Partners
            </Link>
          </div>

          {/* <div className="flex items-center gap-2 font-mono text-xs text-white">
            <span className="w-2 h-2 rounded-full bg-[#248a3d] animate-pulse" />
            <span className="font-bold">SYSTEM STATUS: ALL SYSTEMS OPERATIONAL</span>
          </div> */}
        </div>

        {/* Bottom Payment Methods Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 pt-6 border-t border-white/5 mt-4">
          {PARTNERS_LOGOS.map((pay, i) => (
            <img
              key={i}
              src={pay.src}
              alt={pay.name}
              className="h-4 sm:h-5 md:h-10 lg:h-14 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

//old footer

// import { PAYMENT_LOGOS } from '../data/commercialData';

// export default function Footer() {
//   return (
//     <footer className="bg-[#fcf9f2] py-8 sm:py-12 px-4 sm:px-6">
//       <div className="max-w-9xl mx-auto bg-black text-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-2xl">
//         {/* Top Section: Brand/Socials/Metrics + Nav Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16">
//           {/* Left Column: Logo, Social Buttons, Community Stats */}
//           <div className="md:col-span-5 lg:col-span-5 space-y-6">
//             {/* Logo */}
//             <a href="/" aria-label="Luminous Labs home" className="inline-block text-white">
//               <svg
//                 className="h-6 w-auto fill-current"
//                 viewBox="0 0 185 19"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M4.59259 4.55414C4.59259 2.09955 6.64877 0.109701 9.18519 0.109701C11.7216 0.109701 13.7778 2.09955 13.7778 4.55414C13.7778 7.00874 11.7216 8.99859 9.18519 8.99859C6.64877 8.99859 4.59259 7.00874 4.59259 4.55414Z" />
//                 <path d="M13.7778 4.55414C13.7778 2.09955 15.834 0.109701 18.3704 0.109701C20.9068 0.109701 22.963 2.09955 22.963 4.55414C22.963 7.00874 20.9068 8.99859 18.3704 8.99859C15.834 8.99859 13.7778 7.00874 13.7778 4.55414Z" />
//                 <path d="M0 13.443C0 10.9884 2.05617 8.99859 4.59259 8.99859C7.12901 8.99859 9.18519 10.9884 9.18519 13.443C9.18519 15.8976 7.12901 17.8875 4.59259 17.8875C2.05617 17.8875 0 15.8976 0 13.443Z" />
//                 <path d="M9.18519 13.443C9.18519 10.9884 11.2414 8.99859 13.7778 8.99859C16.3142 8.99859 18.3704 10.9884 18.3704 13.443C18.3704 15.8976 16.3142 17.8875 13.7778 17.8875C11.2414 17.8875 9.18519 15.8976 9.18519 13.443Z" />
//                 <path d="M34.5801 17.8875V0.0673828H37.7622V17.8875H34.5801Z" />
//                 <path d="M52.008 5.19976V17.8875H48.8259V15.93C48.3819 16.5984 47.7981 17.1236 47.0746 17.5055C46.351 17.8875 45.537 18.0784 44.6325 18.0784C43.2183 18.0784 42.0712 17.6607 41.1914 16.8252C40.3199 15.9897 39.8841 14.8836 39.8841 13.5071V5.19976H43.0415V12.8028C43.0415 13.5588 43.2717 14.1715 43.7322 14.6409C44.1926 15.1104 44.8052 15.3452 45.5699 15.3452C46.6059 15.3452 47.4076 14.9433 47.9749 14.1396C48.5423 13.336 48.8259 12.214 48.8259 10.7738V5.19976H52.008Z" />
//                 <path d="M54.2902 17.8875V5.19976H57.4723V7.1811C57.8341 6.50474 58.3357 5.97559 58.977 5.59364C59.6184 5.20374 60.3789 5.00879 61.2587 5.00879C62.2948 5.00879 63.1622 5.21568 63.8611 5.62945C64.5683 6.03526 65.0657 6.6241 65.3535 7.39594C65.7235 6.69571 66.2908 6.12279 67.0555 5.67719C67.8202 5.23159 68.7 5.00879 69.6949 5.00879C71.0845 5.00879 72.2069 5.40665 73.062 6.20236C73.9171 6.99013 74.3447 8.0166 74.3447 9.28179V17.8875H71.1626V10.1412C71.1626 9.36932 70.9488 8.75662 70.5213 8.30306C70.1019 7.8495 69.514 7.62272 68.7576 7.62272C67.8531 7.62272 67.1501 7.96886 66.6485 8.66113C66.1552 9.34545 65.9085 10.2685 65.9085 11.4302V17.8875H62.7264V10.1412C62.7264 9.36932 62.5126 8.75662 62.0851 8.30306C61.6657 7.8495 61.0778 7.62272 60.3214 7.62272C59.4334 7.62272 58.7345 7.97284 58.2247 8.67307C57.7231 9.3733 57.4723 10.3003 57.4723 11.4541V17.8875H54.2902Z" />
//                 <path d="M76.5036 17.8875V5.19976H79.6857V17.8875H76.5036ZM76.3679 0.0673828H79.8337V3.29004H76.3679V0.0673828Z" />
//                 <path d="M81.9432 17.8875V5.19976H85.1253V7.15723C85.5693 6.48882 86.1531 5.96365 86.8767 5.58171C87.6002 5.19976 88.4142 5.00879 89.3187 5.00879C90.733 5.00879 91.8759 5.42654 92.7475 6.26204C93.6273 7.09755 94.0672 8.2036 94.0672 9.58019V17.8875H90.9098V10.2844C90.9098 9.52846 90.6795 8.91576 90.2191 8.44629C89.7586 7.97682 89.146 7.74208 88.3814 7.74208C87.3453 7.74208 86.5436 8.14392 85.9763 8.94759C85.409 9.75127 85.1253 10.8732 85.1253 12.3135V17.8875H81.9432Z" />
//                 <path d="M102.196 18.0784C100.255 18.0784 98.6516 17.4618 97.3854 16.2284C96.1274 14.995 95.4984 13.4315 95.4984 11.5377C95.4984 9.6518 96.1274 8.09219 97.3854 6.85883C98.6516 5.62547 100.255 5.00879 102.196 5.00879C104.128 5.00879 105.727 5.62945 106.993 6.87077C108.26 8.10413 108.893 9.65976 108.893 11.5377C108.893 12.779 108.605 13.9009 108.029 14.9035C107.454 15.8982 106.656 16.678 105.637 17.2429C104.617 17.7999 103.47 18.0784 102.196 18.0784ZM102.196 15.4168C103.223 15.4168 104.058 15.0587 104.699 14.3426C105.341 13.6264 105.661 12.6914 105.661 11.5377C105.661 10.3918 105.336 9.46083 104.687 8.74468C104.046 8.02854 103.215 7.67046 102.196 7.67046C101.159 7.67046 100.325 8.02854 99.6918 8.74468C99.0669 9.46083 98.7544 10.3918 98.7544 11.5377C98.7544 12.6994 99.0669 13.6383 99.6918 14.3545C100.317 15.0627 101.151 15.4168 102.196 15.4168Z" />
//                 <path d="M122.472 5.19976V17.8875H119.29V15.93C118.846 16.5984 118.263 17.1236 117.539 17.5055C116.815 17.8875 116.001 18.0784 115.097 18.0784C113.683 18.0784 112.536 17.6607 111.656 16.8252C110.784 15.9897 110.349 14.8836 110.349 13.5071V5.19976H113.506V12.8028C113.506 13.5588 113.736 14.1715 114.197 14.6409C114.657 15.1104 115.27 15.3452 116.034 15.3452C117.07 15.3452 117.872 14.9433 118.439 14.1396C119.007 13.336 119.29 12.214 119.29 10.7738V5.19976H122.472Z" />
//                 <path d="M129.651 18.0784C127.974 18.0784 126.605 17.6527 125.544 16.8013C124.492 15.9499 123.932 14.8439 123.867 13.4832H126.975C127.016 13.9924 127.283 14.45 127.776 14.8558C128.278 15.2616 128.903 15.4645 129.651 15.4645C130.284 15.4645 130.798 15.3452 131.193 15.1064C131.596 14.8598 131.797 14.5415 131.797 14.1516C131.797 13.5071 131.324 13.0973 130.379 12.9222L128.331 12.5044C127.781 12.393 127.291 12.2498 126.864 12.0748C126.436 11.8917 126.033 11.657 125.655 11.3706C125.277 11.0761 124.985 10.6982 124.779 10.2367C124.574 9.77514 124.471 9.24599 124.471 8.6492C124.471 7.62272 124.919 6.75937 125.815 6.05914C126.712 5.3589 127.896 5.00879 129.367 5.00879C130.815 5.00879 132.036 5.37084 133.031 6.09494C134.034 6.81905 134.617 7.80176 134.782 9.04308H131.674C131.6 8.55769 131.337 8.17575 130.884 7.89724C130.44 7.61874 129.935 7.47949 129.367 7.47949C128.849 7.47949 128.43 7.58691 128.109 7.80176C127.789 8.00864 127.628 8.29112 127.628 8.6492C127.628 9.23007 128.101 9.61201 129.047 9.79503L131.094 10.2128C131.703 10.3321 132.225 10.4793 132.661 10.6544C133.096 10.8215 133.503 11.0483 133.882 11.3347C134.26 11.6212 134.543 11.9952 134.733 12.4567C134.93 12.9103 135.029 13.4514 135.029 14.08C135.029 15.2019 134.527 16.1488 133.524 16.9207C132.529 17.6925 131.238 18.0784 129.651 18.0784Z" />
//                 <path d="M141.209 17.8875V0.0673828H144.391V17.8875H141.209Z" />
//                 <path d="M150.533 18.0784C149.21 18.0784 148.116 17.7323 147.253 17.04C146.389 16.3478 145.958 15.4725 145.958 14.4142C145.958 13.3161 146.352 12.4289 147.142 11.7525C147.939 11.0682 149.07 10.6345 150.533 10.4515L153.161 10.1173C153.868 10.0218 154.221 9.68761 154.221 9.11469C154.221 8.6293 153.995 8.22349 153.543 7.89724C153.091 7.56304 152.49 7.39594 151.742 7.39594C151.002 7.39594 150.39 7.57498 149.904 7.93305C149.428 8.29112 149.164 8.78845 149.115 9.42502H146.032C146.188 8.06434 146.772 6.99013 147.783 6.20236C148.794 5.40665 150.114 5.00879 151.742 5.00879C153.477 5.00879 154.854 5.45041 155.874 6.33366C156.893 7.21691 157.403 8.41048 157.403 9.91439V14.3903C157.403 15.0746 157.675 15.4168 158.217 15.4168L158.637 15.369V17.8875C158.135 17.983 157.633 18.0307 157.132 18.0307C156.441 18.0307 155.874 17.8755 155.43 17.5652C154.986 17.2549 154.727 16.8093 154.653 16.2284C154.365 16.7934 153.847 17.2429 153.099 17.5771C152.359 17.9113 151.504 18.0784 150.533 18.0784ZM151.064 15.739C152.067 15.739 152.856 15.4287 153.432 14.8081C154.007 14.1874 154.295 13.3877 154.295 12.409V12.0509L151.064 12.5641C149.781 12.7551 149.14 13.324 149.14 14.2709C149.14 14.7006 149.317 15.0547 149.67 15.3332C150.024 15.6038 150.488 15.739 151.064 15.739Z" />
//                 <path d="M166.728 18.0784C165.889 18.0784 165.129 17.9233 164.446 17.613C163.772 17.2947 163.287 16.8889 162.991 16.3955V17.8875H159.809V0.0673828H162.991V6.64399C163.377 6.14269 163.904 5.74483 164.57 5.45041C165.244 5.156 165.98 5.00879 166.777 5.00879C168.668 5.00879 170.177 5.60956 171.304 6.81109C172.43 8.01262 172.993 9.58814 172.993 11.5377C172.993 13.4951 172.43 15.0746 171.304 16.2761C170.177 17.4777 168.652 18.0784 166.728 18.0784ZM166.272 15.4168C167.308 15.4168 168.146 15.0627 168.788 14.3545C169.437 13.6383 169.762 12.6994 169.762 11.5377C169.762 10.3759 169.437 9.44094 168.788 8.73275C168.146 8.02456 167.308 7.67046 166.272 7.67046C165.219 7.67046 164.368 8.02456 163.719 8.73275C163.077 9.44094 162.757 10.3759 162.757 11.5377C162.757 12.7074 163.077 13.6463 163.719 14.3545C164.368 15.0627 165.219 15.4168 166.272 15.4168Z" />
//                 <path d="M179.494 18.0784C177.816 18.0784 176.447 17.6527 175.387 16.8013C174.334 15.9499 173.775 14.8439 173.709 13.4832H176.817C176.858 13.9924 177.126 14.45 177.619 14.8558C178.121 15.2616 178.746 15.4645 179.494 15.4645C180.127 15.4645 180.641 15.3452 181.035 15.1064C181.438 14.8598 181.64 14.5415 181.64 14.1516C181.64 13.5071 181.167 13.0973 180.221 12.9222L178.174 12.5044C177.623 12.393 177.134 12.2498 176.706 12.0748C176.279 11.8917 175.876 11.657 175.498 11.3706C175.119 11.0761 174.828 10.6982 174.622 10.2367C174.416 9.77514 174.314 9.24599 174.314 8.6492C174.314 7.62272 174.762 6.75937 175.658 6.05914C176.554 5.3589 177.738 5.00879 179.21 5.00879C180.657 5.00879 181.878 5.37084 182.873 6.09494C183.876 6.81905 184.46 7.80176 184.625 9.04308H181.516C181.442 8.55769 181.179 8.17575 180.727 7.89724C180.283 7.61874 179.777 7.47949 179.21 7.47949C178.692 7.47949 178.273 7.58691 177.952 7.80176C177.631 8.00864 177.471 8.29112 177.471 8.6492C177.471 9.23007 177.944 9.61201 178.889 9.79503L180.937 10.2128C181.545 10.3321 182.067 10.4793 182.503 10.6544C182.939 10.8215 183.346 11.0483 183.724 11.3347C184.102 11.6212 184.386 11.9952 184.575 12.4567C184.773 12.9103 184.871 13.4514 184.871 14.08C184.871 15.2019 184.37 16.1488 183.367 16.9207C182.372 17.6925 181.081 18.0784 179.494 18.0784Z" />
//               </svg>
//             </a>

//             {/* Social Icons row */}
//             <div className="flex items-center gap-2.5 pt-2">
//               <a
//                 href="https://www.instagram.com/luminouslabs.health"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//               >
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>

//               <a
//                 href="https://www.linkedin.com/company/luminousred/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//               >
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.32a1.64 1.64 0 0 0-1.66 1.64c0 .91.74 1.65 1.66 1.65a1.65 1.65 0 0 0 1.66-1.65c0-.9-.75-1.64-1.66-1.64z" />
//                 </svg>
//               </a>

//               <a
//                 href="https://www.facebook.com/luminouslabs.health"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//               >
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                 </svg>
//               </a>

//               <a
//                 href="https://www.youtube.com/channel/UCiMeGvnq_xRFsNqYj7dd05Q"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="YouTube"
//                 className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//               >
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                 </svg>
//               </a>
//             </div>

//             {/* Community Metrics list */}
//             <div className="space-y-3 pt-3 text-xs text-white/90">
//               <div className="flex items-start gap-2.5">
//                 <svg className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//                   <circle cx="12" cy="7" r="4" />
//                 </svg>
//                 <div className="leading-tight">
//                   <p className="font-normal text-white/90">Combined across all platforms:</p>
//                   <p className="font-normal text-white/90">11k followers</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2.5">
//                 <svg className="w-4 h-4 text-white/70 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//                   <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//                 </svg>
//                 <span>Daily: 50 requests/DMs</span>
//               </div>

//               <div className="flex items-center gap-2.5">
//                 <svg className="w-4 h-4 text-white/70 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M3 3v18h18" />
//                   <path d="M18 17V9" />
//                   <path d="M13 17V5" />
//                   <path d="M8 17v-3" />
//                 </svg>
//                 <span>Growth: 2% organic growth monthly</span>
//               </div>
//             </div>
//           </div>

//           {/* Center Column: Navigation Links */}
//           <div className="md:col-span-3 lg:col-span-3">
//             <ul className="space-y-3.5 text-sm sm:text-base font-normal text-white">
//               <li><a href="/technology" className="hover:text-white/80 transition-colors">Technology</a></li>
//               <li><a href="/company" className="hover:text-white/80 transition-colors">Company</a></li>
//               <li><a href="/shop" className="hover:text-white/80 transition-colors">Shop</a></li>
//               <li><a href="/commercial" className="hover:text-white/80 transition-colors">Commercial</a></li>
//               <li><a href="/blog" className="hover:text-white/80 transition-colors">Blog</a></li>
//               <li><a href="/get-in-touch" className="hover:text-white/80 transition-colors">Contact</a></li>
//             </ul>
//           </div>

//           {/* Right Column: Legal & Support Links */}
//           <div className="md:col-span-4 lg:col-span-4">
//             <ul className="space-y-3.5 text-sm sm:text-base font-normal text-white/80">
//               <li><a href="/shipping-delivery" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
//               <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
//               <li><a href="/revocation" className="hover:text-white transition-colors">Revocation</a></li>
//               <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a></li>
//               <li><a href="/imprint" className="hover:text-white transition-colors">Imprint</a></li>
//               <li><a href="https://www.notion.so/luminouslabsgmbh/Press-kit" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Press kit</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Regulatory Disclaimer */}
//         <div className="mt-14 sm:mt-20 mb-10 sm:mb-14 text-[11px] sm:text-[12px] text-white/50 leading-relaxed font-light max-w-4xl">
//           These statements have not been evaluated by the Food and Drug Administration. In the European Union, the intended use of our products does not fall within the scope of article 2 section 1 of EU 2017/745 MDR. Our products are not intended to diagnose, treat, cure, or prevent any disease.
//         </div>

//         {/* Bottom Payment Methods Row */}
//         <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 pt-4">
//           {PAYMENT_LOGOS.map((pay, i) => (
//             <img
//               key={i}
//               src={pay.src}
//               alt={pay.name}
//               className="h-4 sm:h-5 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
//               loading="lazy"
//             />
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

