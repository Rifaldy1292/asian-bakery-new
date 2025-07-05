import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const whatWeMake = [
  {
    image: "/make1.png",
    title: "Traditional Mooncakes",
    alt: "",
    description:
      "Handcrafted with lotus seed paste and salted egg yolks, featuring intricate decorative designs that celebrate lunar traditions.",
  },
  {
    image: "/make2.png",
    title: "Japanese Milk Bread",
    alt: "",
    description:
      "Our signature shokupan features an impossibly soft texture and subtle sweetness, perfect for any time of day.",
  },
  {
    image: "/make3.png",
    title: "Matcha Cheesecake",
    alt: "",
    description:
      "Silky Japanese-style cheesecake infused with premium ceremonial grade matcha, offering delicate earthy notes.",
  },
  {
    image: "/make3.png",
    title: "Pineapple Buns",
    description:
      "Hong Kong-style bo lo bao with our signature crispy, golden topping and pillowy soft interior.",
    alt: "",
  },
  {
    image: "/make3.png",
    title: "Pineapple Buns",
    description:
      "Hong Kong-style bo lo bao with our signature crispy, golden topping and pillowy soft interior.",
    alt: "",
  },
  {
    image: "/make3.png",
    title: "Pineapple Buns",
    description:
      "Hong Kong-style bo lo bao with our signature crispy, golden topping and pillowy soft interior.",
    alt: "",
  },
  {
    image: "/make3.png",
    title: "Pineapple Buns",
    description:
      "Hong Kong-style bo lo bao with our signature crispy, golden topping and pillowy soft interior.",
    alt: "",
  },
  {
    image: "/make3.png",
    title: "Pineapple Buns",
    description:
      "Hong Kong-style bo lo bao with our signature crispy, golden topping and pillowy soft interior.",
    alt: "",
  },
];
export default function Menu() {
  return (
    <>
      <div className="bg-[#FFFAF3] py-22 px-3">
        <div>
          <p className="text-6xl font-imperator-vanila text-center">
            Our Bread & Pastry Menu
          </p>
          <p className="text-2xl max-w-[720px] text-center mx-auto font-metropolis mt-8">
            Discover a wide selection of mouth-watering cakes, breads, and
            desserts. Made with quality ingredients, special flavors, and
            tempting appearances.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="bg-[url('/Untitled(2).png')] bg-no-repeat bg-cover bg-center bg-full overflow-hidden p-5 md:p-0 flex  flex-col-reverse xl:flex-row md:justify-between rounded-4xl md:min-h-[458px] mt-10 h-auto ">
            <div className="px-6 pt-10 md:pt-[50px] md:ml-[95px]">
              <p className="text-[40px] md:text-[80px] font-imperator-vanila leading-[0.9] text-white">
                Black forest cake edition
              </p>
              <p className="mt-6 md:mt-[39px] font-metropolis mb-5 text-white max-w-full md:max-w-[500px]">
                Blackforest cake dari Asia Baru ini tampil elegan dengan lapisan
                cokelat yang lembut dan kilap menggoda. Bagian atasnya dihiasi
                dengan cantik oleh semprotan krim segar, taburan bubuk cokelat,
                dan topping cokelat bulat kecil. Sentuhan segar dari stroberi
                utuh dan dekorasi cokelat spiral memberikan tampilan premium.
                Disajikan di atas tatakan kayu dengan nuansa hangat, cake ini
                cocok sebagai suguhan istimewa untuk momen berkesan.
              </p>
            </div>

            <div className="relative h-[300px] md:h-[460px] w-full md:max-w-[611px] ml-auto mt-6 md:mt-0">
              <Image
                src="/black-forest.png"
                alt="Black forest cake"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-17 max-w-7xl mx-auto">
        <div className="md:flex md:justify-between flex flex-col-reverse md:flex-row gap-5 ">
          <div className="flex gap-4 max-w-[390px] font-metropolis px-2 mx-auto md:mx-0 w-full mt-auto">
            <Select>
              <SelectTrigger className="px-4 text-asian-bakery">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] px-4 text-asian-bakery">
                <SelectValue placeholder="Pastry" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] px-4 text-asian-bakery">
                <SelectValue placeholder="Store Sao sao " />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-3/8 min-w-[300px] mt-8  mx-auto relative md:ml-auto md:mr-10 px-2">
            <Input
              placeholder="Search your fav bread"
              className="h-[60px] sm:h-[66px] font-metropolis md:h-[71px] placeholder:text-[#FFC786] pl-12 pr-28 bg-[#FFF3E5] border border-[#D0D0D026] w-full"
            />
            <HiMiniMagnifyingGlass
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-asian-bakery pointer-events-none"
            />
            <Button className="absolute   font-metropolis right-5 top-1/2 -translate-y-1/2  px-4 py-2 rounded-md">
              Search
            </Button>
          </div>
        </div>
        <div className="md:hidden mt-[40px] p-3 md:grid md:grid-cols-4">
          <Carousel>
            <CarouselContent>
              {whatWeMake.map((item, index) => (
                <CarouselItem key={index} className="basis-[85%] ">
                  <div className="w-full relative  h-[339px] max-w-[293px] mx-auto">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="mt-[16px] text-center">
                    <p className="font-medium font-metropolis text-2xl">
                      {item.title}
                    </p>
                    <p className="font-medium font-metropolis text-[#3B3B3B] max-w-[293px]  mx-auto ">
                      {item.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="max-w-7xl mx-auto p-2 hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-17 gap-x-3  mt-[40px]">
            {whatWeMake.map((item, index) => (
              <div key={index}>
                <div className="w-full relative h-[339px] max-w-[293px]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="mt-[16px] ">
                  <p className="font-medium font-metropolis text-2xl">
                    {item.title}
                  </p>
                  <p
                    className=" font-medium   mt-2 font-metropolis text-[#3B3B3B] "
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
