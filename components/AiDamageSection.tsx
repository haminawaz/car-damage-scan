import Image from "next/image";

const damageData = [
  {
    image: "/images/damage-detect-1.png",
    cardImage: "/images/damage-detect-card-1.svg",
    tags: ["dent", "back door right", "2.5cm"],
  },
  {
    image: "/images/damage-detect-2.png",
    cardImage: "/images/damage-detect-card-2.svg",
    tags: ["deep scracth", "rear bumper", "2.7cm"],
  },
  {
    image: "/images/damage-detect-3.png",
    cardImage: "/images/damage-detect-card-3.svg",
    tags: ["rim damage", "front wheel left", "3.8cm"],
  },
];

export default function AiDamageSection() {
  return (
    <section className="bg-[#F7F9FC] py-16 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[57%_40%] gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <span className="bg-white text-xs uppercase px-6 py-1 rounded-full border-2 border-[#d47ffe]">
              Real results
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mt-6">
              AI damage detection
            </h2>
            <p className="text-gray-600 mt-4 mb-16 text-xs">
              Car scanned within seconds, damage detection results available
              within a minute
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                See damage report
              </button>
              <button className="border border-gray-300 text-sm font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/damage-detect.png"
              alt="AI Car Damage"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {damageData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-64 mb-12">
                <Image
                  src={item.image}
                  alt={`Damage ${idx + 1}`}
                  className="object-cover"
                  fill
                  priority
                />
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-md overflow-hidden">
                  <Image
                    src={item.cardImage}
                    alt={`Card Zoom ${idx + 1}`}
                    className="object-cover"
                    fill
                    priority
                  />
                </div>
              </div>
              <div className="flex justify-evenly items-center px-4 md:px-0 lg:px-4 py-3 mt-auto">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[8px] md:text-[7px] lg:text-[8px] px-4 md:px-3 lg:px-4 py-1 border-2 border-[#3C8EF4] rounded-full uppercase font-medium whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
