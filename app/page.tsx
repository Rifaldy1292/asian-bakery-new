import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HappyCustomer from "@/components/HappyCustomer";
import FromOurGallery from "@/components/FromOurGallery";
import GetInTouch from "@/components/GetInTouch";
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
];
export default function Home() {
  return (
    <div className="">
      <div className="h-[755px] bg-[url('/Untitled.png')] bg-cover bg-center flex items-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-white text-[32px]  md:text-7xl font-imperator-vanila w-full text-center leading-tight">
            Handmade Bakery 🥖 with Authentic Asian taste
          </p>
          <p className="text-white mt-4 text-base  md:text-xl font-metropolis w-full text-center">
            Crafting traditional pastries and modern delights with time-honored
            recipes passed down through generations. Experience the art of Asian
            baking in every bite.
          </p>
          <div className="w-full mt-8 max-w-sm md:max-w-[483px] relative mx-auto px-2">
            <Input
              placeholder="Search your fav bread"
              className="h-[60px] sm:h-[66px] md:h-[71px] pl-12 pr-28 bg-[#E69635] placeholder:text-[#FFFFFF80] text-white border border-[#FFFFFF26] w-full"
            />
            <HiMiniMagnifyingGlass
              size={24}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white pointer-events-none"
            />
            <Button
              variant="secondary"
              className="absolute  text-asian-bakery font-metropolis  right-5 top-1/2 -translate-y-1/2  p-6 rounded-md"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFAF3] md:h-full  px-4 py-30">
        <div className="max-w-7xl mx-auto flex flex-col   lg:flex-row items-center gap-10 md:gap-7 h-full">
          <div className="max-w-full md:max-w-[379px] w-full">
            <p className="text-3xl md:text-6xl  font-imperator-vanila w-full">
              Our Heritage Bakeshop
            </p>
            <div className="rounded-[12px] overflow-hidden">
              <Image
                src="/our-heritage.png"
                alt=""
                width={379}
                height={298}
                className="mt-5 md:mt-[69px] mx-auto"
              />
            </div>
          </div>

          <div className="w-full bg-[#FFFAF3]">
            <div className="max-w-[766px] py-[40px] md:py-[76px] px-[20px] md:px-[49px] rounded-[12px] w-full bg-[url('/Frame-16.png')] bg-cover bg-center 1 ml-auto">
              <div className="flex flex-col md:flex-row font-metropolis text-white gap-6 md:gap-0">
                <div className="w-full md:w-1/3 border-white/20 md:border-r flex gap-4">
                  <div className="flex items-center">
                    <Image
                      src="/Vector(5).png"
                      alt="handmade icon"
                      width={43}
                      height={48}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Hand made</p>
                    <p className="text-xs mt-2 max-w-[110px]">
                      Crafted by hand for authentic taste.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/3 md:pl-4 flex gap-4 border-white/20 md:border-r">
                  <div className="flex  items-center">
                    <Image
                      src="/Vector(6).png"
                      alt="handmade icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">100% Baked</p>
                    <p className="text-xs mt-2 max-w-[108px]">
                      Fully baked, never instant.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/3 flex gap-4 md:pl-4">
                  <div className="flex items-center">
                    <Image
                      src="/Vector(7).png"
                      alt="handmade icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Secure Packing</p>
                    <p className="text-xs max-w-[130px] mt-2">
                      Safe and neat packaging every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-auto max-w-[766px] mt-10 px-2 md:px-0">
              <p className="text-base md:text-2xl mt-10 md:mt-20 font-metropolis">
                Asia Baru Cake & Bakery was founded in February 2021 in Kendari,
                Southeast Sulawesi. We specialize in fresh, preservative-free
                cakes and bread made with high-quality ingredients and offered
                at affordable prices. With six branches and a steadily growing
                presence, we are committed to maintaining quality, freshness,
                and service—bringing delightful baked goods to every special
                moment in your life.
              </p>
              <Button className="mt-[30px] py-6 text-lg px-5 font-metropolis">
                View pricelist
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-26 ">
        <div className="max-w-[784px] mx-auto ">
          <p className="text-6xl text-asian-bakery text-center font-imperator">
            New Best seller
          </p>
          <p className="text-xl font-metropolis mt-1 text-center font-imperator px-2">
            Discover a wide selection of mouth-watering cakes, breads, and
            desserts. Made with quality ingredients, special flavors, and
            tempting appearances.
          </p>
        </div>
        <div className="md:hidden mt-[40px] p-3">
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
                    <p className="font-medium font-neue text-2xl">
                      {item.title}
                    </p>
                    <p className="font-medium font-neue text-[#3B3B3B] max-w-[293px] mx-auto truncate">
                      {item.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="max-w-7xl mx-auto p-2 hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[40px]">
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
                  <p className="font-medium font-neue text-2xl">{item.title}</p>
                  <p className="font-medium font-neue text-[#3B3B3B] ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full text-center mt-[40px] ">
            <Button variant="outline" className="text-asian-bakery">
              View more
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[url('/Untitled(1).png')] relative  bg-cover bg-full flex    xl:h-[458px] h-full ">
        <div className="max-w-7xl mx-auto w-full flex flex-col xl:flex-row justify-between   px-4 py-8  md:py-0">
          <div className=" lg:w-[750px] w-[300px] mb-4 h-[400px] order-1 xl:order-2 ">
            <div className="relative  h-[250px] md:h-[460px] w-full w-[611px] order-1  md:mb-0 right"></div>
          </div>
          <div className=" md:mt-15  mt-10 xl:order-1 order-2 ">
            <p className="text-[40px] md:text-[80px] leading-[0.9] font-imperator-vanila text-white max-w-[454px]">
              Black forest cake edition
            </p>
            <p className="mt-4 md:mt-[39px] font-metropolis text-white max-w-[509px] w-full text-sm md:text-base">
              Blackforest cake dari Asia Baru ini tampil elegan dengan lapisan
              cokelat yang lembut dan kilap menggoda. Bagian atasnya dihiasi
              dengan cantik oleh semprotan krim segar, taburan bubuk cokelat,
              dan topping cokelat bulat kecil. Sentuhan segar dari stroberi utuh
              dan dekorasi cokelat spiral memberikan tampilan premium. Disajikan
              di atas tatakan kayu dengan nuansa hangat, cake ini cocok sebagai
              suguhan istimewa untuk momen berkesan.
            </p>
          </div>{" "}
          <div className="absolute top-0  right-0 w-[829px] h-[400px] ">
            <div className="relative  h-[458px] md:h-[460px] w-full md:max-w-[829px]     right">
              <Image
                src="/ChatGpt-image.png"
                alt="Black Forest Cake"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <HappyCustomer />
      <FromOurGallery />
      <GetInTouch />
    </div>
  );
}
