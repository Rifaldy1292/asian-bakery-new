import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function Home() {
  return (
    <div>
      <div className="h-[755px] bg-[linear-gradient(to_bottom,rgba(228,119,13,0.6),rgba(228,119,13,1)),url('/bg-jumbotron.png')] bg-cover bg-center flex items-center">
        <div className="max-w-[943px] mx-auto px-4">
          <p className="text-white text-[32px]  md:text-7xl font-imperator-vanila w-full text-center leading-tight">
            Handmade Bakery 🥖 with Authentic Asian taste
          </p>
          <p className="text-white mt-4 text-base  md:text-xl font-metropolis w-full text-center">
            Crafting traditional pastries and modern delights with time-honored
            recipes passed down through generations. Experience the art of Asian
            baking in every bite.
          </p>
          <div className="w-full mt-8 max-w-sm max-w-[483px] relative mx-auto px-2">
            <Input
              placeholder="Search..."
              className="h-[60px] sm:h-[66px] md:h-[71px] pl-12 pr-28 bg-[#E69635] border border-[#FFFFFF26] w-full"
            />
            <HiMiniMagnifyingGlass
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"
            />
            <Button
              variant="secondary"
              className="absolute  text-[#E08C27] font-metropolis right-5 top-1/2 -translate-y-1/2  px-4 py-2 rounded-md"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFAF3] h-[835px]">
        <div className="max-w-7xl mx-auto h-[835px] flex items-center justify-between">
          <div>
            <p className="text-6xl font-imperator-vanila max-w-[379px]">
              Our Heritage Bakeshop
            </p>
            <div className="rounde-[12px] overflow-hidden">
              <Image
                src="/our-heritage.png"
                alt=""
                width={379}
                height={298}
                className=" mt-[69px]"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="max-w-[766px] h-[204px] w-full bg-[#E08C27] ml-auto">
              tes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
