import { CgProfile } from "react-icons/cg";
export default function Navbar() {
    return (
        <nav className="flex items-center px-[35px] py-[25px]">
            <div>
                <p className="text-primary text-[35px] font-extrabold">KomikLovers</p>
            </div>
            <div className="grow"></div>
            <div className="text-white text-[25px]">
                <CgProfile/>
            </div>
        </nav>
    )
}