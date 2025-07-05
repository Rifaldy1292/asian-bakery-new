import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const galleryImages = [
  {
    src: "/image13.png",
    alt: "galeri image",
  },

  {
    src: "/image16.png",
    alt: "galeri image",
    className: "md:w-[214px] w-[154px] h-[160px]",
  },
  {
    src: "/image14.png",
    alt: "galeri image",
    className: "md:w-[214px] w-[154px] h-[280px] mt-5",
  },

  {
    src: "/image15.png",
    alt: "Gallery Image",
    className: "md:w-[214px] w-[154px] h-[548px]",
  },

  {
    src: "/image17.png",
    alt: "galeri image",
    className: "md:w-[214px] w-[154px] h-[280px]",
  },
  {
    src: "/image19.png",
    alt: "galeri image",
    className: "md:w-[214px] w-[154px] h-[160px] mt-5",
  },

  {
    src: "/image18.png",
    alt: "galeri image",
    className: "md:w-[214px] w-[154px] h-[273px]",
  },
];

export default function FromOurGallery() {
  return (
    <>
      <div className=" mx-auto py-15 bg-[url('/frame-34.png')] bg-no-repeat bg-[right_-10px_top]  bg-cover">
        <div>
          <p className="text-7xl text-center text-asian-bakery font-imperator-vanila">
            From Our galery
          </p>
          <p className="text-xl text-center max-w-[884px] mt-9 mx-auto  font-metropolis">
            Discover our finest creations and special moments — from birthday
            cakes and freshly baked breads to trendy desserts. All made with
            care and premium ingredients.
          </p>
        </div>
        <div className="flex justify-center mt-5 text-asian-bakery">
          <Button variant="outline">View more</Button>
        </div>
        <div className=" mx-auto  p-5 max-w-[1210px] items-center w-full mt-10 gap-4 hidden lg:flex ">
          <div className="rounded-[25.37px] md:w-[214px] w-[154px] h-[273px] relative overflow-hidden ">
            <Image
              src="/image13.png"
              alt="galeri image"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="rounded-[25.37px]  relative overflow-hidden md:w-[214px] w-[154px] h-[160px]">
              <Image
                src="/image16.png"
                alt="galeri image"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-[25.37px] relative mt-5 overflow-hidden md:w-[214px] w-[154px]  h-[280px]">
              <Image
                src="/image14.png"
                fill
                alt="galeri image"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="rounded-[25.37px] relative   overflow-hidden object-cover md:w-[214px] w-[154px] h-[548px]">
              <Image
                src="/image15.png"
                fill
                alt="Gallery Image"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="rounded-[25.37px] relative  overflow-hidden md:w-[214px] w-[154px] h-[280px]">
              <Image
                src="/image17.png"
                fill
                alt="galeri image"
                className="object-cover"
              />
            </div>
            <div className="rounded-[25.37px]  relative mt-5 overflow-hidden md:w-[214px] w-[154px] h-[160px]">
              <Image
                src="/image19.png"
                alt="galeri image"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="rounded-[25.37px] md:w-[214px] w-[154px] h-[273px] relative overflow-hidden ">
            <Image
              src="/image18.png"
              alt="galeri image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:hidden mt-[40px] p-3">
          <Carousel>
            <CarouselContent>
              {galleryImages.map((item, index) => (
                <CarouselItem key={index} className="basis-[85%] ">
                  <div className="w-full relative  h-[339px] max-w-[293px] mb-5 mx-auto">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}
