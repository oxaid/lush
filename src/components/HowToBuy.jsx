import phantomIcon from '../assets/phantom.png'
import copyIcon from '../assets/copy.png'
import raydiumJupiterIcon from '../assets/raydium-jupiter.png'
import dollarIcon from '../assets/dollar.png'

export default function HowToBuySection() {
  return (
    <section className="px-0 pl-16 sm:pl-0  md:px-14 lg:px-16 py-16 bg-notebook">
      <h2 className="uppercase text-4xl lg:text-5xl text-center font-extrabold mb-10">
        HOW TO BUY $LUSH?
      </h2>

      {/* MOBILE CAROUSEL */}
      <div className="flex sm:hidden overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide">
        {[
          { icon: phantomIcon, text: "Load your Solana wallet" },
          { icon: copyIcon, text: "Copy–paste this contract address" },
          { icon: raydiumJupiterIcon, text: "Go to Raydium or Jupiter" },
          { icon: dollarIcon, text: "Buy $LUSH" }
        ].map((card, i) => (
          <div
            key={i}
            className="min-w-[75%] aspect-square border-[4px] border-black rounded-md p-12 flex flex-col items-center justify-center snap-center "
          >
            <img src={card.icon} alt="" className="h-40 md:h-44" />
            <p className="text-center text-[#3F3F3F] text-2xl mt-4 font-bold">{card.text}</p>
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden max-w-2xl mx-auto sm:grid grid-cols-2 md:grid-cols-2 gap-10">
        {[
          { icon: phantomIcon, text: "Load your Solana wallet" },
          { icon: copyIcon, text: "Copy–paste this contract address" },
          { icon: raydiumJupiterIcon, text: "Go to Raydium or Jupiter" },
          { icon: dollarIcon, text: "Buy $LUSH" }
        ].map((card, i) => (
          <div
            key={i}
            className="aspect-square border-[4px] border-black rounded-md p-6 flex flex-col items-center justify-center"
          >
            <img src={card.icon} alt="" className="h-40 mb-4" />
            <p className="text-center text-[#3F3F3F] text-2xl font-bold px-8 md:px-10">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


// import phantomIcon from '../assets/phantom.png'
// import copyIcon from '../assets/copy.png'
// import raydiumJupiterIcon from '../assets/raydium-jupiter.png'
// import dollarIcon from '../assets/dollar.png'

// const steps = [
//   { icon: (<img src={phantomIcon} alt="Raydium Logo" className="h-10 w-10 sm:h-40 sm:w-44"/>), text: "Load your Solana wallet" },
//   { icon: (<img src={copyIcon} alt="Raydium Logo" className="h-10 w-10 sm:h-12 sm:w-12"/>),  text: "Copy-paste this contract address" },
//   { icon: (<img src={raydiumJupiterIcon} alt="Raydium Logo" className="h-10 w-10 sm:h-12 sm:w-12"/>), text: "Go to Raydium or Jupiter" },
//   { icon: (<img src={dollarIcon} alt="Raydium Logo" className="h-10 w-10 sm:h-12 sm:w-12"/>),  text: "Buy $LUSH" },
//   ];

// export default function HowToBuySection() {
//   return (
//     <div className="w-full flex flex-col items-center justify-center p-6 sm:p-8">
//       <div className="container mx-auto max-w-4xl text-center">
//         <h2 style={{ fontFamily: "'Anton', sans-serif" }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black uppercase tracking-wider mb-10 sm:mb-16">
//           How to buy $LUSH?
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
//           {steps.map((step, index) => (
//             <div key={index} className="bg-white/50 border-2 border-black p-6 flex flex-col items-center justify-center text-center h-48 sm:h-56">
//               <div className="flex-grow flex items-center justify-center mb-4">
//                 {step.icon}
//               </div>
//               <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-semibold text-black text-base sm:text-lg">
//                 {step.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
