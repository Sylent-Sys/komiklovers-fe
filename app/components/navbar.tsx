import { FaBars, FaCircleUser, FaSistrix } from "react-icons/fa6";
import Input from "./input";
import Link from "next/link";

interface NavbarProps {
  sideBarEvent: () => void;
}

export default function Navbar({ sideBarEvent }: NavbarProps) {
  return (
    <nav className="flex fixed z-[5] top-0 left-0 w-full items-center justify-between py-2 lg:py-3 px-[15px] lg:px-[80px] text-white bg-color1 border-b border-color4 font-poppins">
      <div className="flex items-center gap-4">
        <div className="cursor text-xl cursor-pointer" onClick={sideBarEvent}>
          <FaBars />
        </div>
        <p className="text-2xl  fon-medium">KomikLovers</p>
      </div>
      <div className="hidden lg:block">
        <Input customClass="w-[500px] " />
      </div>
      <div className="text-2xl cursor-pointer flex gap-2 items-center">
        <Link href="/search">
          <FaSistrix className="block lg:hidden" />
        </Link>
        <FaCircleUser />
      </div>
    </nav>
  );
}
