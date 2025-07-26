import tokenomicsImg from '../assets/tokenomics.png'

export default function TokenomicsSection() {
  return (
    <section className="bg-transparent px-8 sm:px-10 md:px-14 lg:px-16 py-16 md:py-20">
  <div className="max-w-5xl mx-auto border-4 border-black">
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Text Area */}
      <div className="p-6 md:p-12 md:col-span-2">
        <h2 className="uppercase text-4xl lg:text-5xl text-center md:text-left font-bold text-black mb-6">
          TOKENOMICS
        </h2>
        <div className="space-y-4 font-light text-2xl lg:text-[28px] leading-loose text-[#3F3F3F] font-londrina">
          <p>Total Supply: 69,000,000,000</p>
          <p>Liquidity: 100% burned</p>
          <p>Tax: 0%</p>
          <p>Dev Wallet: Nah, LUSH doesn't rug himself</p>
        </div>
      </div>

      {/* Image Cell Tanpa Padding */}
      <div className="flex justify-end items-end md:col-span-1">
        <img
          src={tokenomicsImg}
          alt="Tokenomics Bear"
           className="max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          // className="w-40 sm:w-48 md:w-56"
        />
      </div>
    </div>
  </div>
</section>

    // <section className="bg-notebook px-6 py-16 md:py-20">
    //   <div className="max-w-5xl mx-auto relative border-4 border-black p-6 md:p-12">
    //     {/* Title */}
    //     <h2 className="uppercase text-4xl lg:text-5xl text-center md:text-left font-bold text-black mb-6">
    //       TOKENOMICS
    //     </h2>

    //     {/* Info */}
    //     <div className="space-y-4 font-light text-2xl lg:text-[28px] leading-loose text-black font-londrina">
    //       <p>Total Supply: 69,000,000,000</p>
    //       <p>Liquidity: 100% burned</p>
    //       <p>Tax: 0%</p>
    //       <p>Dev Wallet: Nah, LUSH doesn't rug himself</p>
    //     </div>

    //     {/* Image */}
    //     <img
    //       src={tokenomicsImg}
    //       alt="Tokenomics Bear"
    //        className="hidden md:block absolute bottom-0 right-0  max-w-[300px] md:max-w-[400px] lg:max-w-[400px]"
    //       // className="hidden md:block absolute bottom-0 right-0 w-48 md:w-56"
    //     />

    //     {/* Mobile image version */}
    //     <img
    //         src={tokenomicsImg}
    //         alt="Tokenomics Bear"
    //         className="block md:hidden absolute bottom-0 right-0 w-48 sm:w-40"
    //       />
    //   </div>
    // </section>
  )
}
