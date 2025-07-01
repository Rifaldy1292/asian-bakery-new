import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function ForOurGallery() {
  return (
    <>
      <div className="max-w-[1230px] mx-auto py-15 bg-[url('/Group1.png')] bg-no-repeat bg-[right_-10px_top]  bg-cover">
        <div>
          <p className="text-7xl text-center text-[#E08C27] font-imperator-vanila">
            From Our galery
          </p>
          <p className="text-xl text-center max-w-[784px] mt-9 mx-auto  font-metropoli">
            Discover our finest creations and special moments — from birthday
            cakes and freshly baked breads to trendy desserts. All made with
            care and premium ingredients.
          </p>
        </div>
        <div className="flex   items-center w-full mt-10 gap-4 overflow-x-auto">
          <div className="rounded-[25.37px] w-[214px] h-[273px] relative overflow-hidden">
            <Image src="/image13.png" alt="galeri image" fill />
          </div>
          <div>
            <div className="rounded-[25.37px]  relative overflow-hidden w-[214px] h-[160px]">
              <Image src="/image16.png" alt="galeri image" fill />
            </div>
            <div className="rounded-[25.37px] relative mt-5 overflow-hidden w-[214px]  h-[280px]">
              <Image src="/image14.png" fill alt="galeri image" />
            </div>
          </div>
          <div>
            <div className="rounded-[25.37px] relative   overflow-hidden object-cover w-[214px] h-[548px]">
              <Image
                src="/image15.png"
                fill
                alt="Gallery Image"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="rounded-[25.37px] relative  overflow-hidden w-[214px]  h-[280px]">
              <Image src="/image17.png" fill alt="galeri image" />
            </div>
            <div className="rounded-[25.37px]  relative mt-5 overflow-hidden w-[214px] h-[160px]">
              <Image src="/image19.png" alt="galeri image" fill />
            </div>
          </div>
          <div className="rounded-[25.37px] w-[214px] h-[273px] relative overflow-hidden">
            <Image src="/image18.png" alt="galeri image" fill />
          </div>
        </div>
      </div>
    </>
  );
}
