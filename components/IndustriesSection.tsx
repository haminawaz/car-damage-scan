import { LuCar, LuMousePointer2 } from "react-icons/lu";
import { FiRefreshCcw } from "react-icons/fi";
import Image from "next/image";

const IndustriesSection = () => {
  const IconMap = {
    RefreshCcw: FiRefreshCcw,
    MousePointer2: LuMousePointer2,
    Car: LuCar,
  };

  const industryCardsData = [
    {
      id: 1,
      imageSrc: "/images/application-1.png",
      imageAlt: "Cars in a lot for leasing and re-marketing",
      icon: "RefreshCcw",
      title: "Leasing & re-marketing",
      description:
        "Accurately detect return damage and prevent end-of-lease disputes. Document imperfections with high resolution and boost resale value through consistent inspections.",
      link: "#",
    },
    {
      id: 2,
      imageSrc: "/images/application-2.png",
      imageAlt: "Cargo ship and cars in a port",
      icon: "MousePointer2",
      title: "Ports & Logistics",
      description:
        "Accelerate vehicle flows with instant, AI-driven inspections. Replace manual checks, cut costs, and keep a verified digital record across your logistics chain.",
      link: "#",
    },
    {
      id: 3,
      imageSrc: "/images/application-3.png",
      imageAlt: "Cars on an assembly line",
      icon: "Car",
      title: "OEMs",
      description:
        "The highest technology and the latest generation of AI technology to effectively and efficiently inspect cars rented or valeted in your airport.",
      link: "#",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-white text-xs uppercase px-6 py-1 rounded-full border-2 border-[#d47ffe]">
            Applications
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 my-4 font-poppins">
            The industries we serve
          </h2>
          <p className="text-gray-600 text-xs lg:text-base">
            Built to solve real-world challenges in your specific business
            environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryCardsData.map((card) => {
            const IconComponent = IconMap[card.icon as keyof typeof IconMap];
            return (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    priority
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-sm bg-[linear-gradient(to_right,_#3B6FF7,_#3CC0F0)]">
                        {IconComponent ? (
                          <IconComponent size={24} color="white" />
                        ) : (
                          <span className="text-white">{card.icon}</span>
                        )}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 flex-grow">
                    {card.description}
                  </p>
                  <a
                    href={card.link}
                    className="text-[#3B8DF4] underline mt-auto text-sm"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
