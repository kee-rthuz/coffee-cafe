





import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/website/o.jpg"

// import AppStoreImg from "../../assets/website/v.png";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";


const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
}

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">

        <div className="bg-black/10 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
            {/* comapny details */}
            <div className="py-8 px-4">
                <a href="#" className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"> 
                    Coffee Cafe 
                </a>
                <p className="pt-4">
                    Crafted Coffee, Cozy Vibes, Unforgettable
                    Moments - Your Perfect
                    Espresso Escape
                </p>
                
                <div className="flex flex-wrap justify-center sm:justify-start items-center">
                    <a href="#">
                    <img src={AppStoreImg} alt="" className=" md:max-w-[150px] " />
                    </a>

                    <a href="#">
                    <img src={PlayStoreImg} alt="" className=" md:max-w-[150px] " />
                    </a>
                </div>

            </div>
            {/* Footer Links */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">

                {/* first cols links */}
                <div className="py-8 px-4">
                    <h1 className="text-xl font-semibold ">
                        Footer Links
                    </h1>
                    <ul className="space-y-3">
                        {FooterLinks.map((data, index) => (
                            <li key={index} className="my-2">
                            <a 
                                href={data.link} 
                                className="inline-block hover:scale-105 transition duration-200"
                            >
                                {data.title}
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* second cols link */}
                <div className="py-8 px-4">
                    <h1 className="text-xl font-semibold ">
                        Quick Links
                    </h1>
                    <ul className="space-y-3">
                        {FooterLinks.map((data, index) => (
                            <li key={index} className="my-2">
                            <a 
                                href={data.link} 
                                className="inline-block hover:scale-105 transition duration-200"
                            >
                                {data.title}
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company Address Section*/}
                <div className="py-8 px-4  sm:col-auto">
                    <h1 className="text-xl font-semibold sm:text-left mb-3">
                        Address
                    </h1>
                    <div>
                        <p className="mb-3">Noida, India</p>
                        <p>+91 1234567890</p>

                        {/* social links */}
                        <div className="space-x-3 mt-6">
                            <a href="#">
                                <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                            </a>

                            <a href="#">
                                <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200" />
                            </a>

                            <a href="#">
                                <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer