import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
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
      <div className="bg-[#FFFAF3] md:h-[835px]  px-4 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-0  md:h-[835px]">
          <div className="max-w-full md:max-w-[379px] w-full">
            <p className="text-3xl md:text-6xl text-center font-imperator-vanila w-full">
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
            <div className="max-w-[766px] py-[40px] md:py-[76px] px-[20px] md:px-[49px] rounded-[12px] w-full bg-[#E08C27] ml-auto">
              <div className="flex flex-col md:flex-row font-metropolis text-white gap-6 md:gap-0">
                <div className="w-full md:w-1/3 border-white/20 md:border-r flex gap-4">
                  <div>
                    <Image
                      src="/Vector(5).png"
                      alt="handmade icon"
                      width={43}
                      height={48}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Hand made</p>
                    <p className="text-xs max-w-[108px]">
                      Crafted by hand for authentic taste.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/3 md:pl-4 flex gap-4 border-white/20 md:border-r">
                  <div>
                    <Image
                      src="/Vector(6).png"
                      alt="handmade icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">100% Baked</p>
                    <p className="text-xs max-w-[108px]">
                      Fully baked, never instant.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/3 flex gap-4 md:pl-4">
                  <div>
                    <Image
                      src="/Vector(7).png"
                      alt="handmade icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Secure Packing</p>
                    <p className="text-xs max-w-[108px]">
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
              <Button className="mt-[30px]">View pricelist</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-26 ">
        <div className="max-w-[784px] mx-auto ">
          <p className="text-6xl text-[#E08C27] text-center font-imperator">
            New Best seller
          </p>
          <p className="text-xl font-metropolis mt-1 text-center font-imperator">
            Discover a wide selection of mouth-watering cakes, breads, and
            desserts. Made with quality ingredients, special flavors, and
            tempting appearances.
          </p>
        </div>
        <div className="max-w-7xl mx-auto p-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[40px]">
            {whatWeMake.map((item, index) => (
              <div>
                <div
                  key={index}
                  className="w-full relative h-[293px] max-w-[293px]"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="mt-[16px] ">
                  <p className="font-medium font-neue text-2xl">{item.title}</p>
                  <p className="font-medium font-neue truncate text-[#3B3B3B] ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full text-center mt-[40px] ">
            <Button variant="outline" className="text-[#E08C27]">
              View more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
