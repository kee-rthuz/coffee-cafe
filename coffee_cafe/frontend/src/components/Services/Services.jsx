


import React from "react";
import Img2 from "../../assets/coffee2.webp";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description: "Rich and concentrated coffee shot, perfect for a quick energy boost.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description: "Diluted espresso with hot water, offering a milder flavor profile.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description: "Espresso topped with steamed milk and a layer of milk foam.",
    aosDelay: "500",
  },
];

const ServiceCard = ({ data }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={data.aosDelay}
    className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
  >
    <div className="h-[122px]">
      <img
        src={data.img}
        alt={data.name}
        className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
      />
    </div>
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
        {data.description}
      </p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-10">
      <div className="container">
        <h1 className="text-4xl font-bold font-cursive text-gray-800 text-center mb-20">
          Best Coffee For You
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {ServicesData.map((data) => (
            <ServiceCard key={data.id} data={data} />
          ))}
        </div>
      </div>
     </section>
  );
};

export default Services;