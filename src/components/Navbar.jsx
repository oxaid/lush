import { useState } from "react"
import { FiMenu, FiX, FiSend, FiXCircle, FiZap } from "react-icons/fi"
import telegramIcon from '../assets/telegram.png'
import xIcon from '../assets/x.png'
import dexToolsIcon from '../assets/dextools.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Why $LUSH", id: "why-lush" },
    { label: "Tokenomics", id: "tokenomics" },
    { label: "How to Buy", id: "how-to-buy" },
    { label: "FAQ", id: "faq" },
  ]



  return (
    <nav className="w-full">
      <div className="max-w-6xl mx-auto px-8 sm:px-10 md:px-14 lg:px-16 py-4 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="text-2xl md:text-3xl font-extrabold uppercase">$LUSH</div>

        {/* CENTER: Menu Items (Desktop Only) */}
        <ul className="hidden md:flex items-center gap-4 text-sm font-bold uppercase">
          {menuItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="bg-secondary text:md lg:text-lg px-3 py-1 rounded hover:bg-yellow-500 transition cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT: Icon Buttons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-2">
          {[telegramIcon, xIcon, dexToolsIcon].map((icon, i) => (
            <a
              href=''
              key={i}
              className="bg-secondary p-2 rounded hover:bg-yellow-500 transition cursor-pointer"
            >
              <img src={icon} alt={`Social ${i}`} className="w-4 h-4 lg:h-6 lg:w-6" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden bg-secondary p-2 rounded"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={20} />
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#2B2B2B] text-white flex flex-col items-center justify-center z-50">
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-secondary"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={36} />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-4 mt-8">
            {menuItems.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className="bg-[#FFF700] text-black text-md font-bold uppercase px-6 py-2 rounded hover:bg-yellow-500 transition cursor-pointer w-full max-w-[200px] text-center"
              >
                {label}
              </a>
            ))}

            {/* Icon Buttons */}
            <div className="flex gap-4 mt-6">
              {[telegramIcon, xIcon, dexToolsIcon].map((icon, i) => (
                <a
                  href=''
                  key={i}
                  className="bg-secondary p-3 rounded hover:bg-yellow-500 transition cursor-pointer"
                >
                  <img src={icon} alt={`Social ${i}`} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
