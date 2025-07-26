import { useState } from 'react'

// Gambar gallery (import sesuai urutan)
import lush1 from '../assets/gallery/lush1.png'
import lush2 from '../assets/gallery/lush2.png'
import lush3 from '../assets/gallery/lush3.png'
import lush4 from '../assets/gallery/lush4.png'
import lush5 from '../assets/gallery/lush5.png'
import lush6 from '../assets/gallery/lush6.png'
import lush7 from '../assets/gallery/lush7.png'
import lush8 from '../assets/gallery/lush8.png'
import lush9 from '../assets/gallery/lush9.png'
import lush10 from '../assets/gallery/lush10.png'

const galleryImages = [
  lush1, lush2, lush3, lush4, lush5,
  lush6, lush7, lush8, lush9, lush10
]

export default function GallerySection() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="max-w-5xl mx-auto px-8 sm:px-10 md:px-14 lg:px-16 py-20">
      <h2 className="uppercase text-4xl lg:text-5xl text-center font-extrabold mb-10">
        MEET $LUSH
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 gap-2 border-[3px] border-black p-4 max-w-6xl mx-auto bg-white">
        {galleryImages.map((img, i) => (
          <div key={i}>
            <img src={img} alt={`LUSH ${i + 1}`} className="w-full object-cover" />
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden border-4 border-black p-4 bg-white max-w-md mx-auto relative">
        <img
          src={galleryImages[current]}
          alt={`LUSH ${current + 1}`}
          className="w-full object-contain rounded-md mb-4"
        />

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-2">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full ${i === current ? 'bg-black' : 'bg-gray-400'}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
