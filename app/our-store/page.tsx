import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import { FaMapMarkerAlt } from "react-icons/fa";

import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function OurStore() {
  return (
    <>
      <div className="md:py-29 py-10 px-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-4xl md:text-6xl font-imperator">Our store</p>
            <p className="font-metropolis text-lg md:text-2xl max-w-[550px] mt-6 md:mt-8">
              We are present in cities across Indonesia to make it easier for
              you to enjoy our products at a store near you.
            </p>
          </div>
          <div className="relative w-full max-w-[292px] h-[222px] mx-auto md:mx-0">
            <Image
              src="/store.png"
              fill
              alt="Our Store"
              className="object-cover rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between max-w-7xl mx-auto px-2 gap-6 mt-11">
          <div className="flex gap-4 w-full max-w-[390px] mx-auto md:mx-0">
            <Select>
              <SelectTrigger className="w-[180px] text-[#E08C27]">
                <SelectValue placeholder="Makassar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full max-w-[483px] mx-auto md:mx-0 relative">
            <Input
              placeholder="Search your fav bread"
              className="h-[60px] sm:h-[66px] md:h-[71px] font-metropolis placeholder:text-[#FFC786] pl-12 pr-28 bg-[#FFF3E5] border border-[#D0D0D026] w-full"
            />
            <HiMiniMagnifyingGlass
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E08C27] pointer-events-none"
            />
            <Button className="absolute font-metropolis right-5 top-1/2 -translate-y-1/2 px-4 py-2 rounded-md">
              Search
            </Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-10 grid-cols-1">
          {[...Array(6)].map((_, index) => (
            <Card
              key={index}
              className="border-[#CDCDCD] max-w-[405px] h-[484px] p-3"
            >
              <CardHeader className="px-0">
                <div className="relative h-[249px] max-w-[399px]">
                  <Image
                    src="/image14.png"
                    fill
                    alt={`Store Image ${index + 1}`}
                    className="object-cover rounded-[12px]"
                  />
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <CardTitle className="font-metropolis font-semibold text-3xl">
                  text-3xl
                </CardTitle>
                <CardDescription className="font-metropolis text-black mt-2 max-w-[324px]">
                  Jl. Sao Sao No.246, Bende, Kec. Kadia, Kota Kendari, Sulawesi
                  Tenggara 93117
                </CardDescription>
              </CardContent>
              <CardFooter className="flex w-full gap-2 px-0 mt-auto">
                <Button
                  variant="outline"
                  className="flex flex-1 items-center justify-center gap-2 text-[#E08C27] px-4"
                >
                  <FaMapMarkerAlt size={20} />
                  View Rute
                </Button>
                <Button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 text-white px-4"
                >
                  <FaWhatsapp size={20} />
                  Contact Person
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
