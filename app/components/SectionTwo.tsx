import React from "react";
import Image from "next/image";
import boy from "@/public/images/reading quran.jpeg";

function SectionTwo() {
  return (
    <div className="bg-lightMain ">
      <div className="container max-7xl m-auto">
        <div className="flex md:flex-row flex-col items-center gap-16  py-20">
          <Image
            src={boy}
            alt="hell this image"
            className="object-cover w-auto sm:w-[400px] "
          />

          <div className="flex flex-col items-start justify-between max-w-lg gap-4">
            <h2 className="md:text-3xl text-xl text-darkMain font-bold mb-4">
              Learning Quran Online - Pave The Way To Become A Better Practicing
              Muslim!
            </h2>
            <p>
              As a Muslim, It is always fascinating to expand your knowledge and
              strengthen your faith through better communication with Allah’s
              revelation. In{" "}
              <span className="bg-darkMain p-[2px] font-bold text-secondMain rounded-md">
                {" "}
                Tarteel Academy
              </span>{" "}
              we help you to profoundly learn and understand Allah’s message
              through our professional, handpicked Online Arabic and Quran
              Tutors!
            </p>
            <button className="border-2 border-darkMain p-2 rounded-md">
              Have A Tour Through Our Courses!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
