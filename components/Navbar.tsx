import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <>
      <nav className="h-[124px] p-4 ">
        <Sheet>
          <div className="max-w-[1230px] font-metropolis flex items-center justify-between w-full  h-full mx-auto ">
            <div className="p-2.5  font-metropolis  mr-[40px] inline-flex  ">
              <Link href="/">
                <Image
                  src="/ASIA-BARU-LOGO1.png"
                  alt="logo"
                  width={131.61}
                  height={56}
                />
              </Link>
            </div>
            <div className="p-4.5 text-asian-bakery md:block hidden">
              <ul className="flex gap-12 text-xl">
                <li>
                  <Link href="/menu">Menu</Link>
                </li>
                <li>
                  <Link href="/our-store">Stores</Link>
                </li>
                <li>
                  <Link href="/get-in-touch">Treats</Link>
                </li>
                <li>
                  <Link href="/get-in-touch">B2B</Link>
                </li>
              </ul>
            </div>
            <SheetTrigger asChild className=" md:hidden block">
              <Button variant="outline">
                <FaBars size={24} className="text-yellow-500" />
              </Button>
            </SheetTrigger>
          </div>

          <SheetContent className="text-asian-bakery">
            <SheetHeader>
              <SheetTitle className="text-asian-bakery mb-10">
                Navigation
              </SheetTitle>
              <SheetClose asChild>
                <Button variant="ghost">Menu</Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="ghost">Stores</Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="ghost">Treats</Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="ghost">B2B</Button>
              </SheetClose>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <div className="grid gap-3"></div>
              <div className="grid gap-3"></div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
