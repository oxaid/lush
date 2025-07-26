import telegramIcon from '../assets/telegram.png'
import xIcon from '../assets/x.png'
import dexToolsIcon from '../assets/dextools.png'
import footerBearLeft from '../assets/footer-bear-left.png'
import footerBearRight from '../assets/footer-bear-right.png'

export default function Footer() {
  return (
    <footer className="relative bg-notebook pt-10 pb-32 md:py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col text-center">
        {/* Title */}
        <h2 className="uppercase text-4xl lg:text-5xl text-center font-bold text-black mb-10">
          JOIN THE CULT
        </h2>

        {/* Icon Links */}
        <div className="flex justify-center gap-6 mb-10 md:mb-36">
          {[telegramIcon, xIcon, dexToolsIcon].map((icon, i) => (
            <a
              href=''
              key={i}
              className="bg-secondary w-16 md:w-24 h-16 md:h-24 flex items-center justify-center hover:bg-yellow-500 transition cursor-pointer shadow-md"
            >
              <img src={icon} alt={`Social ${i}`} className="h-8 md:w-12 xl:w-14 w-8 md:h-12 xl:h-14" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-lg font-bold">COPYRIGHT $LUSH – 2025</p>
      </div>

        {/* Bears on side */}

        <img
          src={footerBearLeft}
          alt="Bear Left"
          className="absolute bottom-0 left-0 max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
        />
        <img
          src={footerBearRight}
          alt="Bear Right"
          className="absolute bottom-0 right-0 max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
        />
    </footer>
  )
}
