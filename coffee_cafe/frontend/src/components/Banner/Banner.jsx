



import React from "react";
import BannerImg from "../../assets/y.webp"
import BgTexture from "../../assets/website/c.avif";

import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";

const bgImage = {
    backgroundImage: `url(${BgTexture})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Banner = () => {
  return (
    <>
    <span id="about"></span>
    <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Image Section */}
                <div>
                    <img src={BannerImg} alt="" 
                    className="max-w-[430px] w-full mx-auto spin  "
                    />
                </div>
                {/* Text content Section */}
                <div className=" justify-center flex-col flex gap-6  ">
                    <h1 className="text-4xl font-bold font-serif ">
                        Premium Blend Coffee
                    </h1>                    
                    <p className="text-sm text-black-500   ">
                        Indulge in our exquisite Premium Blend Coffee, carefully crafted for coffee enthusiasts. 
                        This rich, aromatic blend combines hand-selected beans from the world's finest coffee-growing regions, 
                        delivering a smooth and balanced flavor profile that will elevate your coffee experience.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">


                            <div data-aos="fade-up" className="flex items-center gap-3">
                                <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                                <span>Premium Coffee</span>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="flex items-center gap-3"
                            >
                                <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                                <span>Caramel Macchiato</span>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-delay="500"
                                className="flex items-center gap-3"
                            >
                                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                                <span>White Chocolate Mocha</span>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-delay="700"
                                className="flex items-center gap-3"
                            >
                                <GiCoffeeCup className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-100" />
                                <span>Cold Coffee</span>
                            </div>

                        </div>
                        <div
                            data-aos="slide-left"
                            className="border-l-4 border-primary/50 pl-6 space-y-2"
                        >

                            <h1 className="text-2xl font-semibold font-serif ">
                                Tea Lover
                            </h1>
                            <p className="text-sm text-justify ">
                            A tea lover cherishes the ritual of brewing and 
                            sipping this ancient beverage. 
                            They delight in exploring various flavors, from delicate white 
                            teas to robust black blends, savoring each unique 
                            aroma and taste. For them, tea is more than a drink—it's 
                            a moment of tranquility and a connection to centuries of tradition.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Banner;





