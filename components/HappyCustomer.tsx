import { Card } from "@/components/ui/card";

export default function HappyCustomer() {
  return (
    <>
      <div className="max-w-[1230px] mx-auto py-[143px]">
        <div>
          <p className="text-7xl text-center text-[#E08C27] font-imperator-vanila">
            Happy Customer Say
          </p>
          <p className="text-xl text-center max-w-[784px] mt-9 mx-auto  font-metropoli">
            From daily fresh baking to special occasions, we're here to make
            every moment sweeter with our authentic Asian pastries.
          </p>
        </div>
        <div className="max-w-7xl bg-[#FFFAF3] rounded-[12px] h-[600px] mt-[60px] p-6 relative overflow-hidden">
          <div className="w-[1230px]">
            <div className="bg-[#E08C27] drop-shadow-[0_4px_16px_rgba(0,0,0,0.1)] text-white max-w-[376px] h-[307px] p-6 rounded-lg shadow-md rotate-[-6deg] absolute top-[100px] left-[40px] flex flex-col justify-between">
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.561-.954L10 0l2.95 5.955 6.561.954-4.755 4.635 1.122 6.545z" />
                    </svg>
                  ))}
              </div>
              <p className="text-lg leading-relaxed font-metropolis font-medium">
                Roti dari Asia Baru selalu fresh dan empuk! Favorit keluarga
                setiap pagi. Varian rotinya juga banyak banget, jadi nggak
                pernah bosan!
              </p>
              <p className="mt-4 font-light font-metropolis">
                Amelia R. – Jakarta
              </p>
            </div>

            <div className="bg-[#E08C27] drop-shadow-[0_4px_16px_rgba(0,0,0,0.1)] text-white max-w-[376px] h-[307px] p-6 rounded-lg shadow-md rotate-[-5deg] absolute top-[200px] sm:left-[270px] left-[70px] flex flex-col justify-between">
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.561-.954L10 0l2.95 5.955 6.561.954-4.755 4.635 1.122 6.545z" />
                    </svg>
                  ))}
              </div>
              <p className="text-lg leading-relaxed font-metropolis font-medium">
                Saya suka sekali dengan roti isi keju dari Asia Baru. Rasanya
                pas, tidak terlalu manis, dan kejunya berlimpah. Pelayanannya
                juga cepat!
              </p>
              <p className="text-sm mt-4 font-light font-metropolis">
                Budi Santoso – Bogor
              </p>
            </div>

            <div className="bg-[#E08C27] drop-shadow-[0_4px_16px_rgba(0,0,0,0.1)] text-white max-w-[376px] h-[307px] p-6 rounded-lg shadow-md rotate-[10deg] absolute top-[140px] lg:left-[590px] md:left-[390px] sm:left-[190px] left-[80px] flex flex-col justify-between">
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.561-.954L10 0l2.95 5.955 6.561.954-4.755 4.635 1.122 6.545z" />
                    </svg>
                  ))}
              </div>
              <p className="text-lg leading-relaxed font-metropolis font-medium">
                Saya suka sekali dengan roti isi keju dari Asia Baru. Rasanya
                pas, tidak terlalu manis, dan kejunya berlimpah. Pelayanannya
                juga cepat!
              </p>
              <p className="text-sm mt-4 font-light font-metropolis">
                Andika M. – Bekasi
              </p>
            </div>
            <div className="bg-[#E08C27] drop-shadow-[0_4px_16px_rgba(0,0,0,0.1)] text-white max-w-[376px] h-[307px] p-6 rounded-lg shadow-md rotate-[-3.5deg] absolute top-[200px] right-[50px] flex flex-col justify-between">
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.561-.954L10 0l2.95 5.955 6.561.954-4.755 4.635 1.122 6.545z" />
                    </svg>
                  ))}
              </div>
              <p className="text-lg leading-relaxed font-metropolis font-medium">
                Kue ulang tahun pesanan saya benar-benar melebihi ekspektasi.
                Dekorasinya rapi dan rasanya lezat. Anak saya sangat senang!
              </p>
              <p className="text-sm mt-4 font-light font-metropolis">
                Andika M. – Bekasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
