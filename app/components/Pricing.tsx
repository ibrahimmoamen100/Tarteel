import React from "react";
import { PiCaretCircleRightFill } from "react-icons/pi";

const cards = [
  {
    title: "Free",
    description: "For the first 1000 users",
    price: "0",
    item1: "8 sessions per month",
    item2: "60 min session duration",
    item3: " 1000 words per month",
    item4: " 1000 words per month",
  },
  {
    title: "Free",
    description: "For the first 1000 users",
    price: "0",
    item1: "8 sessions per month",
    item2: "60 min session duration",
    item3: " 1000 words per month",
    item4: " 1000 words per month",
  },
  {
    title: "Free",
    description: "For the first 1000 users",
    price: "0",
    item1: "8 sessions per month",
    item2: "60 min session duration",
    item3: " 1000 words per month",
    item4: " 1000 words per month",
  },
  {
    title: "Free",
    description: "For the first 1000 users",
    price: "0",
    item1: "8 sessions per month",
    item2: "60 min session duration",
    item3: " 1000 words per month",
    item4: " 1000 words per month",
  },
];
const Pricing = () => {
  return (
    <div>
      <section className="bg-lighterMain dark:bg-gray-800 overflow-hidden p-4">
        <div className="container  py-8 mx-auto">
          <div className="sm:flex sm:items-center   sm:justify-between">
            <div className=" text-center  flex flex-col m-auto ">
              <h2 className="text-4xl font-bold  text-darkMain text-center dark:text-gray-100">
                Our Pricing & Plan
              </h2>
              <p className="mt-4 text-darkMain dark:text-gray-400 text-center">
                No Contracts. No surorise fees.
              </p>
            </div>
          </div>

          <div className="grid gap-4 mt-16 -mx-6 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards.map((el) => {
              return (
                <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                  <p className="text-lg font-medium text-darkMain dark:text-gray-100">
                    {el.title}
                  </p>
                  <h4 className="mt-2 text-4xl font-semibold text-darkMain dark:text-gray-100">
                    ${el.price}{" "}
                    <span className="text-base font-normal text-darkMain dark:text-gray-400">
                      / Month
                    </span>
                  </h4>
                  <p className="mt-4   text-darkMain dark:text-gray-300">
                    {el.description}
                  </p>

                  <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                      <PiCaretCircleRightFill className="text-darkMain text-2xl" />

                      <span className="mx-4 text-darkMain dark:text-gray-300">
                        {el.item1}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <PiCaretCircleRightFill className="text-darkMain text-2xl" />

                      <span className="mx-4 text-darkMain dark:text-gray-300">
                        {el.item2}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <PiCaretCircleRightFill className="text-darkMain text-2xl" />

                      <span className="mx-4 text-darkMain dark:text-gray-300">
                        {el.item3}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <PiCaretCircleRightFill className="text-darkMain text-2xl" />

                      <span className="mx-4 text-darkMain dark:text-gray-300">
                        {el.item4}
                      </span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-secondMain rounded-md hover:bg-secondMain focus:outline-none focus:bg-secondMain">
                    Choose plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
