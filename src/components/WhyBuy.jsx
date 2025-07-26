// File: src/sections/WhyBuySection.jsx
import lushWhyImg from '../assets/why-buy.png' // Ganti dengan path gambar lo

export default function WhyBuySection() {
  const reasons = [
    <>
      <span className="bg-secondary px-1">LP Burned</span>
    </>,
    <>
      <span className="bg-secondary px-1">Ownership Renounced</span>
    </>,
    <>
      <span className="bg-secondary px-1">No Taxes</span>
    </>,
    <>
      <span className="bg-secondary px-1">Backed by  zero VC — 100% degen energy</span>
    </>,
    <>
      <span className="bg-secondary px-1">Fully green-powered  (he’s green, literally)</span>
    </>,
  ]

  return (
    <section className="px-8 sm:px-10 md:px-14 lg:px-16 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Section */}
      <div className="order-2 md:order-1">
        <h2 className="uppercase text-4xl lg:text-5xl text-center md:text-left font-extrabold mb-6">Why Buy $LUSH?</h2>
        <ul className="space-y-3 font-light leading-snug text-2xl lg:text-[28px] whitespace-pre-line">
          {reasons.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-[#3F3F3F] text-lg leading-[1]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="order-1 md:order-2 flex justify-center">
        <img
          src={lushWhyImg}
          alt="Why Buy $LUSH"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>
    </section>
  )
}
