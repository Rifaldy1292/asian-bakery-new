import { Card } from "@/components/ui/card";
import Image from "next/image";

const items = [
  { name: "Saosao" },
  { name: "Baruga" },
  { name: "Andhunohu" },
  { name: "Puuwatu" },
  { name: "Bunggasi" },
  { name: "Ranomeeto" },
  { name: "Saranani" },
  { name: "Bau bau" },
  { name: "Raha" },
];

export default function GetInTouch() {
  return (
    <div className="bg-[#FFFAF3] py-20 px-6 sm:px-10 lg:px-[86px] ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <p className="text-4xl sm:text-5xl lg:text-7xl text-asian-bakery font-imperator-vanila max-w-[513px]">
          Get in Touch with Asia Baru
        </p>
        <div className="mt-auto lg:mt-auto lg:ml-auto">
          <p className="text-asian-bakery md:text-right font-metropolis text-base sm:text-lg">
            Email :
          </p>
          <p className="text-asian-bakery font-semibold font-metropolis text-base sm:text-lg">
            Asiabaru@gmail.com
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-[70px]">
        <p className="text-asian-bakery text-xl font-metropolis mb-9">
          Our Store & Branch Locations :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-5">
          {items.map((label, index) => (
            <div
              key={index}
              className="w-full font-metropolis bg-asian-bakery rounded-[12px] p-5 flex h-[92px] justify-between items-center"
            >
              <p className="text-white text-xl sm:text-2xl lg:text-3xl">
                {label.name}
              </p>
              <div className="w-[52px] h-[52px] relative">
                <Image src="/Frame54.png" alt="wa" fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
