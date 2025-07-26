import faq1 from '../assets/faq-1.png'
import faq2 from '../assets/faq-2.png'
import faq3 from '../assets/faq-3.png'

const faqs = [
  {
    q: 'Is $LUSH safe?',
    a: 'Safer than trading without a stop loss. LP burned, renounced, 0% tax. Degen–safe.',
  },
  {
    q: 'Will I get rich?',
    a: 'If you don’t paper hand like a coward, maybe.',
  },
  {
    q: 'What does $LUSH do?',
    a: 'He trades coins, loses money, and still has the balls to launch his own.',
  },
  {
    q: 'Why green?',
    a: 'Because red candles are trauma.',
  },
]

const faqImages = [faq1, faq2, faq3]

export default function FAQSection() {
  return (
    <section className="bg-notebook px-8 sm:px-10 md:px-14 lg:px-16 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="uppercase text-4xl lg:text-5xl text-center md:text-left font-extrabold mb-2">
          FAQ <br />
        </h2>
        <h4 className="text-red-500 text-2xl mb-6 uppercase">(Frequently Asked Degenerate Questions)</h4>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Q&A Text */}
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div className='text-lg md:text-xl lg:text-2xl' key={i}>
                <p className="font-bold text-[#3F3F3F]">
                  <span className="text-[#3F3F3F]">Q:</span>{' '}
                  <span className="bg-secondary">{faq.q}</span>
                </p>
                <p className="text-[#3F3F3F]">
                  <span className="text-[#3F3F3F]">A:</span>{' '}
                  <span className="bg-[#7BFF88]">{faq.a}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Right: Images Stack */}
          <div className="hidden md:flex flex-col items-end gap-2">
            {faqImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`FAQ Bear ${i + 1}`}
                className="w-24 md:w-28"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
