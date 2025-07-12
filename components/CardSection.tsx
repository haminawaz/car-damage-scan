import Image from "next/image";

const CardSection = () => {
  const cards = [
    {
      title: "Confidence in every inspection",
      description:
        "Trust every inspection. Each scan delivers clear, consistent, and objective results — fully automated, highly accurate, and completed in seconds.",
      points: [
        "Objective Scans = no more damage disputes",
        "Consistent results, every day",
        "High-resolution documentation of all damage",
      ],
      image: "/images/built-1.svg",
    },
    {
      title: "Maximise revenue, minimise risk",
      description:
        "Detect and recover more damage at every stage, from check-in to resale. Keep your fleet protected and your margins healthy.",
      points: [
        "Capture revenue often lost in manual checks",
        "Protect fleet value with accurate records",
        "Prevent losses before they happen",
      ],
      image: "/images/built-2.svg",
    },
    {
      title: "Unlock maximum efficiency",
      description:
        "Streamline your entire inspection process — faster, leaner, and smarter. Our system reduces manual effort, lowers operational costs, and keeps performance high, so you can scale effortlessly without added complexity.",
      points: [
        "Reduce costs through automation",
        "Scale operations without extra costs",
        "Eliminate manual bottlenecks",
      ],
      image: "/images/built-3.svg",
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 space-y-16">
      {cards.map((card, index) => {
        const isImageRight = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row bg-white ${
              isImageRight ? "lg:flex-row-reverse" : ""
            } items-center max-w-5xl mx-auto rounded-lg shadow-md px-6 py-10`}
          >
            <div className="w-full lg:w-1/2 text-center lg:text-left font-poppins">
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 mt-4 lg:mt-0">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base mb-6 pe-5">
                {card.description}
              </p>
              <ul className="text-sm lg:text-base text-gray-800 space-y-2 lg:ps-5 font-medium">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CardSection;
