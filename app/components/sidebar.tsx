import { FaXmark } from "react-icons/fa6";

interface SidebarProps {
  isSidebarOpen: boolean;
  sideBarEvent: () => void;
}

export const Sidebar = ({ isSidebarOpen, sideBarEvent }: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed  top-0 left-0 w-[320px] border-r bg-opacity-80 border-color4 h-full bg-color1 z-[10] transition-all duration-300 ${
          isSidebarOpen
            ? "opacity-100 translate-x-0"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="py-2 lg:py-3 px-[15px] flex items-center justify-between">
          <p className="text-2xl fon-medium">KomikLovers</p>
          <div onClick={sideBarEvent}>
            <FaXmark className="text-2xl fon-medium cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-[15px] lg:p-[20px]">
          <p className="text-lg font-medium">Home</p>
          <p className="text-lg font-medium">Genre</p>
          <p className="text-lg font-medium">Projects</p>
          <p className="text-lg font-medium">Komik List</p>
        </div>
      </div>
    </>
  );
};
