import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar({ isVisible = true }: { isVisible?: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4"
        >
          <div
            className="flex items-center justify-between bg-black border border-white/10 rounded-full p-2"
            style={{
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
              width: "100%",
              maxWidth: "800px"
            }}
          >
            {/* Logo / Brand */}
            <a
              href="#hero"
              className="flex items-center gap-3 pl-3 pr-4 group"
            >
              <span
                className="text-base font-bold text-white tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="text-purple-400">Porto</span>Rizky
              </span>
            </a>

            {/* Nav links — hidden on mobile */}
            <div className="hidden md:flex items-center gap-7 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-medium text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Download CV Action */}
            <StyledWrapper>
              <a href="/cv-rizky-nugraha.pdf" download className="btn-53">
                <div className="original">Resume</div>
                <div className="letters">
                  <span>R</span>
                  <span>E</span>
                  <span>S</span>
                  <span>U</span>
                  <span>M</span>
                  <span>E</span>
                </div>
              </a>
            </StyledWrapper>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const StyledWrapper = styled.div`
  .btn-53,
  .btn-53 *,
  .btn-53 :after,
  .btn-53 :before,
  .btn-53:after,
  .btn-53:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-53 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 100%;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
    text-decoration: none;
  }

  .btn-53:disabled {
    cursor: default;
  }

  .btn-53:-moz-focusring {
    outline: auto;
  }

  .btn-53 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-53 [hidden] {
    display: none;
  }

  .btn-53 {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    box-sizing: border-box;
    display: block;
    font-weight: 900;
    overflow: hidden;
    padding: 0.6rem 1.8rem;
    position: relative;
    text-transform: uppercase;
    font-size: 12px;
  }

  .btn-53 .original {
    background: #ffff;
    color: #222229;
    display: grid;
    inset: 0;
    place-content: center;
    position: absolute;
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .btn-53:hover .original {
    transform: translateY(100%);
  }

  .btn-53 .letters {
    display: inline-flex;
  }

  .btn-53 span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
  }

  .btn-53 span:nth-child(2n) {
    transform: translateY(15px);
  }

  .btn-53:hover span {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-53:hover span:nth-child(2) {
    transition-delay: 0.1s;
  }

  .btn-53:hover span:nth-child(3) {
    transition-delay: 0.2s;
  }

  .btn-53:hover span:nth-child(4) {
    transition-delay: 0.3s;
  }

  .btn-53:hover span:nth-child(5) {
    transition-delay: 0.4s;
  }

  .btn-53:hover span:nth-child(6) {
    transition-delay: 0.5s;
  }
`;
