// File: src/components/Hero.jsx
import lushImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 sm:px-10 md:px-14 lg:px-16 py-10 pt-24 md:py-20 md:pt-32 max-w-6xl mx-auto">
  {/* IMAGE FIRST ON MOBILE */}
  <div className="w-full max-w-sm mx-auto order-1 md:order-2">
    <img
      src={lushImg}
      alt="$LUSH character"
      className="lg:w-[516px] lg:h-[350px]"
    />
  </div>

  {/* TEXT SECOND ON MOBILE */}
    <div className="order-2 md:order-1 text-center md:text-left">
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] 2xl:text-[64px] tracking-wide">
        Meet $LUSH — The Drunkest, Smartest Memecoin Trader Alive
      </h1>
      <p className="hidden md:block text-[#6B6B6B] md:text-lg lg:text-xl mt-4 font-light">
        He’s green, he’s lit, and he’s here to turn your SOL into <br />
        <span>Lamborghini.</span>
      </p>
      <div className="hidden md:flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
        <button className="bg-secondary  font-bold px-6 py-y rounded hover:bg-yellow-500 transition">
          Buy $LUSH
        </button>
        <button className="bg-secondary font-bold px-6 py-2 rounded hover:bg-yellow-500 transition">
          JOIN THE CULT
        </button>
      </div>
    </div>
  </section>

  )
}
