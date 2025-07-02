import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});
export default function GetInTouch() {
  return (
    <>
      <div className="relative  ">
        <div className=" max-w-[1186px]  w-full py-[34px] px-[27px] mt-[310px] rounded-[20px] bg-white shadow-lg z-10 left-1/2 -translate-x-1/2 absolute text-black">
          <div className="flex md:justify-between flex-col md:flex-row gap-9">
            <div className="w-full max-w-[394px]">
              <div className="bg-[#E08C27] rounded-t-[12px] text-white p-2 max-w-[394px]  h-[261px] flex  justify-between">
                <div className="p-9">
                  <p className="text-2xl  md:text-3xl  font-imperator">
                    Contact information
                  </p>
                  <div className="mt-4 flex gap-4 items-center">
                    <FaWhatsapp size={28} color="#FFFFFF" />
                    <div className={roboto.className}>
                      <p>085156935350</p>

                      <p>085156935350</p>
                    </div>
                  </div>{" "}
                  <div className="mt-4 flex gap-4 items-center">
                    <MdEmail size={28} color="#FFFFFF" />
                    <p className={roboto.className}>sampleemail@gmail.com</p>
                  </div>
                  <div className="flex gap-5 mt-5 ">
                    {["instagram", "twitter", "fb", "youtube"].map((name) => (
                      <div
                        key={name}
                        className="bg-white/10 rounded-full p-[10px] w-[35px] flex items-center justify-center"
                      >
                        <Image
                          src={`/${name}.png`}
                          alt={name}
                          width={29.2}
                          height={10}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>{" "}
              <div className="">
                <div className="relative rounded-b-[12px]  overflow-hidden h-[346px] max-w-[394px]">
                  <Image
                    src="/cake1.png"
                    alt="Cake"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="w-full  space-y-4">
              <div className="flex flex-col  gap-4">
                <div className="flex gap-5">
                  <div className="grid w-full  items-center gap-3">
                    <Label htmlFor="" className="text-lg">
                      Name
                    </Label>
                    <Input
                      type="string"
                      className="border-none bg-[#F5F5F5] h-[57px]"
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-3">
                    <Label htmlFor="" className="text-lg">
                      Your email *
                    </Label>
                    <Input
                      type="string"
                      className="border-none bg-[#F5F5F5] h-[57px]"
                    />
                  </div>
                </div>

                <div className="grid w-full items-center mt-5 gap-3">
                  <Label htmlFor="" className="text-lg">
                    Your subject*
                  </Label>
                  <Input
                    type="string"
                    className="border-none bg-[#F5F5F5] h-[65px] w-full"
                  />
                </div>
              </div>

              <div className="grid w-full items-center mt-5 gap-3 mb-[42px]">
                <Label
                  htmlFor=""
                  className="text-[#E08C27] font-semibold text-lg"
                >
                  Message*
                </Label>
                <Label htmlFor="" className="text-[#B2B1AF] text-lg ">
                  Write your message here :
                </Label>
                <Textarea className="border-none bg-[#F5F5F5] h-[126px]" />
              </div>
              <Button>Send Message</Button>
            </div>
          </div>
        </div>
        <div className="bg-[#E08C27] h-[477px] pt-[79px]">
          <div>
            <p className="text-center text-white  font-imperator-vanila text-6xl">
              Get In Touch
            </p>
            <p className="text-center text-white text-2xl font-metropolis">
              Contact us for orders and complaints
            </p>
          </div>
        </div>

        <div className=" md:h-[602px] h-[1200px]"></div>
      </div>
    </>
  );
}
