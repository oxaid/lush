import lushAboutImg from '../assets/about-lush.png'

export default function AboutSection() {
  return (
    <section className="bg-transparent px-8 sm:px-10 md:px-14 lg:px-16 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <div className="order-2 md:order-1 md:text-left">
        <h2 className="uppercase text-4xl lg:text-5xl text-center md:text-left font-extrabold mb-6">
          ABOUT $LUSH
        </h2>
        <p className="font-light leading-snug text-2xl lg:text-[28px] text-[#3F3F3F]" style={{ fontFamily: "'Londrina Solid', cursive" }}>
          $LUSH is a professional memecoin trader —<br />
          He's been rugged, scammed, dumped on — and<br />
          he still wakes up every day to trade shitcoins for breakfast.<br /><br />
          Now he's launching his own: $LUSH.<br />
          No utility, no promises, no roadmap. Just vibes.
        </p>
      </div>

      {/* Image */}
      <div className="order-1 md:order-2 flex justify-center">
        <img
          src={lushAboutImg}
          alt="About $LUSH"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>

    </section>
  )
}
