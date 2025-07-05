import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="h-auto  bg-[url('/Untitled(3).png')] bg-cover w-full font-metropolis">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-[20px] md:px-[67px] py-[40px] md:py-[76px] flex flex-col md:flex-row md:justify-between gap-10 md:h-[330.9px]">
            <div className="flex flex-col items-start">
              <div className="bg-white p-2.5 rounded-[12px] w-fit">
                <Image
                  src="/ASIA-BARU-LOGO1.png"
                  alt="logo"
                  width={131.61}
                  height={56}
                />
              </div>

              <div className="flex gap-5 mt-[30px] md:mt-[51px]">
                {["instagram", "twitter", "fb", "youtube"].map((name) => (
                  <div
                    key={name}
                    className="bg-white/10 rounded-full p-[10px] flex items-center justify-center"
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

            <div className="text-white font-generalsans grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-[50px] w-full md:w-auto">
              <div className="w-full md:w-[184px]">
                <h3 className="font-medium text-lg font-manrope mb-4">
                  Quick Menu
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Catalog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4 font-manrope text-lg">
                  Location
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Sao sao
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Baruga
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Andhunohu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Puuwatu
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Bunggasi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Ranomeeto
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Saranani
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Bau bau
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Raha
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[110px] bg-[#ED972E] flex items-center border border-[#F6AE56] px-4">
          <p className="mx-auto text-white font-generalsans text-center text-sm md:text-base">
            © 2020-2025 Asia Baru - Bake House
          </p>
        </div>
      </footer>
    </>
  );
}
