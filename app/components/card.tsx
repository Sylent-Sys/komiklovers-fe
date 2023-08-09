import Image from "next/image";
import { FaStar, FaUserGroup } from "react-icons/fa6";

export function HomeCard() {
  return (
    <>
      <div className="flex gap-3 glassmorph p-[5px] lg:p-[10px] rounded-md overflow-hidden w-full">
        <div className="overflow-hidden min-w-[50px] min-h-[74px] lg:min-w-[65px] lg:min-h-[80px] relative">
          <Image
            src="https://pbs.twimg.com/media/FtU_lPoXoAI81Ht?format=jpg&name=900x900"
            alt="Picture of the manga"
            fill={true}
          />
        </div>
        {/* kasih elipsis */}
        <div className="w-full flex flex-col justify-between overflow-hidden">
          <h2 className="truncate text-[13px] lg:text-base font-semibold">
            Daily Life of Sa-chan, a Drugstore Clerk
          </h2>
          <p className="text-xs lg:text-[15px]">Chapter 700</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaUserGroup />
              <p className="text-xs lg:text-[13px]">Fap It Scans</p>
            </div>
            <p className="text-xs lg:text-[13px]">38 Menit yang lalu</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function SliderCard() {
  return (
    <>
      <div className="slider p-[5px] lg:p-[20px] w-full flex gap-2 lg:gap-5">
        <div className="overflow-hidden min-w-[90px] min-h-[120px] lg:min-w-[200px] lg:min-h-[287px] relative rounded-md">
          <Image
            src="https://pbs.twimg.com/media/FtU_lPoXoAI81Ht?format=jpg&name=900x900"
            alt="Picture of the manga"
            fill={true}
          />
        </div>
        <div className="overflow-hidden">
          <h2 className="truncate text-base lg:text-4xl font-bold">
            Daily Life of Sa-chan, a Drugstore Clerk
          </h2>
          <div className="flex items-center gap-2 mt-3">
            <FaStar className="text-yellow-300 text-xs lg:text-base" />
            <p className="text-xs lg:text-base mt-[2px]">8.25</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="w-max bg-gray-50 bg-opacity-10 py-1 px-2 cursor-pointer text-[10px] lg:text-base rounded-sm">
              Action
            </div>
            <div className="w-max bg-gray-50 bg-opacity-10 py-1 px-2 cursor-pointer text-[10px] lg:text-base rounded-sm">
              Adventure
            </div>
            <div className="w-max bg-gray-50 bg-opacity-10 py-1 px-2 cursor-pointer text-[10px] lg:text-base rounded-sm">
              Comedy
            </div>
            <div className="w-max bg-gray-50 bg-opacity-10 py-1 px-2 cursor-pointer text-[10px] lg:text-base rounded-sm">
              Slice of life
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
