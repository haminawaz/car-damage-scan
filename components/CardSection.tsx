import Image from "next/image";

const CardSection = () => {
  const cards = [
    {
      title: "Confidence in every inspection",
      description:
        "Trust every inspection. Each scan delivers clear, consistent, and objective results — fully automated, highly accurate, and completed in seconds.",
      points: [
        {
          icon: "/images/card-1point-1.svg",
          point: "Prevent damage disputes",
        },
        {
          icon: "/images/card-1point-2.svg",
          point: "Consistent results",
        },
        {
          icon: "/images/card-1point-3.svg",
          point: "Clear documentation",
        },
      ],
      image: "/images/built-1.svg",
    },
    {
      title: "Maximise revenue, minimise risk",
      description:
        "Detect and recover more damage at every stage, from check-in to resale. Keep your fleet protected and your margins healthy.",
      points: [
        {
          icon: "/images/card-2point-1.svg",
          point: "Capture overlooked revenue",
        },
        {
          icon: "/images/card-2point-2.svg",
          point: "Protect fleet value",
        },
        {
          icon: "/images/card-2point-3.svg",
          point: "Prevent losses before they happen",
        },
      ],
      image: "/images/built-2.svg",
    },
    {
      title: "Unlock maximum efficiency",
      description:
        "Streamline your entire inspection process — faster, leaner, and smarter. Our system reduces manual effort, lowers operational costs, and keeps performance high, so you can scale effortlessly without added complexity.",
      points: [
        {
          icon: "/images/card-3point-1.svg",
          point: "Reduce costs through automation",
        },
        {
          icon: "/images/card-3point-2.svg",
          point: "Scale operations efficiently",
        },
        {
          icon: "/images/card-3point-3.svg",
          point: "Eliminate manual bottlenecks",
        },
      ],
      image: "/images/built-3.svg",
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 md:px-8 space-y-16">
      {cards.map((card, index) => {
        const isImageRight = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row bg-white ${
              isImageRight ? "md:flex-row-reverse" : ""
            } items-center max-w-5xl mx-auto rounded-lg shadow-md px-6 py-10`}
          >
            <div className="w-full md:w-1/2 text-start font-poppins">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-4 mt-4 md:mt-0">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-6 pe-5">
                {card.description}
              </p>
              <ul className="text-sm md:text-base text-gray-800 space-y-2 font-medium">
                {card.points.map((point, i) => (
                  <li key={i} className="flex gap-3 mb-3">
                    <Image
                      src={point.icon}
                      alt={card.title}
                      width={20}
                      height={20}
                      priority
                    />
                    <span>{point.point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
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
