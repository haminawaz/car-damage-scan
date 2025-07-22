import Image from "next/image";
import ScrollRevealCard from "./animations/ScrollRevealCard";
import BlurTextContainer from "@/components/animations/BlurTextContainer";
import {
  SlideDown,
  SlideUp,
} from "@/components/animations/BasicRevealAnimations";

const IndustriesSection = () => {
  const industryCardsData = [
    {
      id: 1,
      imageSrc: "/images/application-1.png",
      imageAlt: "Cars in a lot for leasing and re-marketing",
      icon: "/images/industries-card-1.svg",
      title: "Leasing & re-marketing",
      description:
        "Accurately detect return damage and prevent end-of-lease disputes. Document imperfections with high resolution and boost resale value through consistent inspections.",
      link: "#",
    },
    {
      id: 2,
      imageSrc: "/images/application-2.png",
      imageAlt: "Cargo ship and cars in a port",
      icon: "/images/industries-card-2.svg",
      title: "Ports & Logistics",
      description:
        "Accelerate vehicle flows with instant, AI-driven inspections. Replace manual checks, cut costs, and keep a verified digital record across your logistics chain.",
      link: "#",
    },
    {
      id: 3,
      imageSrc: "/images/application-3.png",
      imageAlt: "Cars on an assembly line",
      icon: "/images/industries-card-3.svg",
      title: "OEMs",
      description:
        "The highest technology and the latest generation of AI technology to effectively and efficiently inspect cars rented or valeted in your airport.",
      link: "#",
    },
  ];

  return (
    <section className="py-16">
      <div className="w-full mx-auto px-3 md:px-12">
        <div className="text-center mb-12">
          <SlideUp delay={0.06}>
            <span className="bg-white text-xs shadow-xl uppercase px-6 py-1 font-medium rounded-full border-2 border-[#d47ffe]">
              Applications
            </span>
          </SlideUp>
          <BlurTextContainer delay={0} stagger={0.03} duration={0.7}>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1B0C25] my-4 font-poppins">
              The industries we serve
            </h2>
          </BlurTextContainer>
          <SlideDown delay={0.03}>
            <p className="text-gray-600 text-xs lg:text-base">
              Built to solve real-world challenges in your specific business
              environment
            </p>
          </SlideDown>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 sm:w-full mx-auto">
          {industryCardsData.map((card, idx) => {
            return (
              <ScrollRevealCard delay={idx * 0.2}>
                <div
                  key={card.id}
                  className="bg-white rounded-lg overflow-hidden flex flex-col border border-[#255cf43b]"
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
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white font-bold text-sm bg-[linear-gradient(to_right,_#3B6FF7,_#3CC0F0)]">
                          <Image
                            src={card.icon}
                            alt={card.title}
                            width={20}
                            height={20}
                            priority
                          />
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-black">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-black mb-4 text-[15px] flex-grow">
                      {card.description}
                    </p>
                    <a
                      href={card.link}
                      className="text-[#3b8df4] underline underline-offset-4 font-medium mt-auto text-sm"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </ScrollRevealCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
