import Image from "next/image";
import {
  FaBookmark,
  FaCircle,
  FaComment,
  FaEye,
  FaStar,
  FaUserGroup,
} from "react-icons/fa6";

export function HomeCard() {
  return (
    <>
      <div className="flex gap-3 glassmorph p-[5px] lg:p-[10px] rounded-md overflow-hidden w-full">
        <div className="overflow-hidden min-w-[70px] min-h-[94px] lg:min-w-[90px] lg:min-h-[120px] rounded-md relative">
          <Image
            src="https://pbs.twimg.com/media/FtU_lPoXoAI81Ht?format=jpg&name=900x900"
            alt="Picture of the manga"
            fill={true}
          />
        </div>
        {/* kasih elipsis */}
        <div className="w-full flex flex-col justify-between overflow-hidden">
          <h2 className="truncate-2-lines text-base font-semibold">
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
          <h2 className="truncate-2-lines text-base lg:text-4xl font-bold">
            Daily Life of Sa-chan, a Drugstore Clerk
          </h2>
          <div className="flex items-center gap-2 mt-3">
            <FaStar className="text-yellow-300 text-xs lg:text-base" />
            <p className="text-xs lg:text-base mt-[2px]">8.25</p>
          </div>
          <div className="flex flex-wrap gap-1 lg:gap-3 mt-4">
            <div className="w-max bg-gray-50 bg-opacity-10 py-[2px] px-[4px] lg:py-1 lg:px-2 cursor-pointer text-[10px] lg:text-base rounded-sm">
              Action
            </div>
            <div className="w-max bg-gray-50 bg-opacity-10 py-[2px] px-[4px] lg:py-1 lg:px-2 cursor-pointer text-[10px] lg:text-base rounded-sm">
              Adventure
            </div>
            <div className="w-max bg-gray-50 bg-opacity-10 py-[2px] px-[4px] lg:py-1 lg:px-2 cursor-pointer text-[10px] lg:text-base rounded-sm">
              Comedy
            </div>
            <div className="w-max bg-gray-50 bg-opacity-10 py-[2px] px-[4px] lg:py-1 lg:px-2 cursor-pointer text-[10px] lg:text-base rounded-sm">
              Slice of life
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SearchCard() {
  return (
    <>
      <div className="flex flex-col gap-1 glassmorph p-[5px] lg:p-[10px] rounded-md overflow-hidden w-full">
        <div className="flex gap-3">
          <div className="overflow-hidden min-w-[60px] min-h-[84px] lg:min-w-[93px] lg:min-h-[120px] rounded-md relative">
            <Image
              src="https://pbs.twimg.com/media/FtU_lPoXoAI81Ht?format=jpg&name=900x900"
              alt="Picture of the manga"
              fill={true}
            />
          </div>
          <div className="w-full flex flex-col lg:justify-between overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start">
              <div className="overflow-hidden w-full">
                <h2 className="truncate text-[13px] lg:text-base font-semibold ">
                  Daily Life of Sa-chan, a Drugstore Clerk
                </h2>
              </div>
              <div className="flex gap-2 mt-2 lg:mt-0">
                <span className="flex items-center gap-1 ">
                  <FaStar className="text-yellow-300 lg:text-[13px] text-[10px]" />
                  <p className="lg:text-[13px] text-[10px]">8.25</p>
                </span>
                <span className="flex items-center gap-1">
                  <FaBookmark className="lg:text-[13px] text-[10px]" />
                  <p className="lg:text-[13px] text-[10px]">1.2k</p>
                </span>
                <span className="flex items-center gap-1">
                  <FaEye className="lg:text-[13px] text-[10px]" />
                  <p className="lg:text-[13px] text-[10px]">1.2k</p>
                </span>
                <span className="flex items-center gap-1">
                  <FaComment className="lg:text-[13px] text-[10px]" />
                  <p className="lg:text-[13px] text-[10px]">1.2k</p>
                </span>
                <span className="flex items-center gap-1 lg:px-2 lg:py-1 lg:border border-white rounded-[5px]">
                  <FaCircle className="text-[6px] text-[#1D51FE]" />
                  <p className="lg:text-[13px] text-[10px]">Completed</p>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-3 mt-1 lg:mt-0">
              <div className="w-max bg-gray-50 bg-opacity-10 py-[2px] px-[4px] cursor-pointer text-[10px] rounded-sm">
                Action
              </div>
              <div className="w-max bg-gray-50 bg-opacity-10 py-[2px] px-[4px] cursor-pointer text-[10px] rounded-sm">
                Adventure
              </div>
              <div className="w-max bg-gray-50 bg-opacity-10 py-[2px] px-[4px] cursor-pointer text-[10px] rounded-sm">
                Comedy
              </div>
              <div className="w-max bg-gray-50 bg-opacity-10 py-[2px] px-[4px] cursor-pointer text-[10px] rounded-sm">
                Slice of life
              </div>
            </div>
            <div className="mt-3 hidden lg:block">
              <p className="text-xs lg:text-[14px] truncate-3-lines font-normal">
                Before Naruto birth, a great demon fox had attacked the Hidden
                Leaf Village. The 4th Hokage from the leaf village sealed the
                demon inside the newly born Naruto, causing him to unknowingly
                grow up detested by his fellow villagers. Despite his lack of
                talent in many areas of ninjutsu, Naruto strives for only one
                goal: to gain the title of Hokage, the strongest ninja in his
                village. Desiring the respect he never received, Naruto works
                toward his dream with fellow friends Sasuke and Sakura....
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 block lg:hidden">
          <p className="text-xs lg:text-[14px] truncate-3-lines font-normal">
            Before Naruto birth, a great demon fox had attacked the Hidden Leaf
            Village. The 4th Hokage from the leaf village sealed the demon
            inside the newly born Naruto, causing him to unknowingly grow up
            detested by his fellow villagers. Despite his lack of talent in many
            areas of ninjutsu, Naruto strives for only one goal: to gain the
            title of Hokage, the strongest ninja in his village. Desiring the
            respect he never received, Naruto works toward his dream with fellow
            friends Sasuke and Sakura....
          </p>
        </div>
      </div>
    </>
  );
}

export function SearchAuthorCard() {
  return (
    <>
      <div className="glassmorph w-full flex items-center gap-2">
        <div className="min-w-[32px] min-h-[32px] rounded-full overflow-hidden relative">
          <Image
            src="https://pbs.twimg.com/media/FtU_lPoXoAI81Ht?format=jpg&name=900x900"
            alt="Picture of the manga"
            fill={true}
          />
        </div>
        <h3 className="text-base font-medium">Fuad Rusdy</h3>
      </div>
    </>
  );
}

export function SearchGroupCard() {
  return (
    <>
      <div className="glassmorph-color2 w-full flex gap-3 p-[5px] lg:p-[10px]">
        <div className="min-w-[60px] min-h-[60px] rounded-full overflow-hidden relative">
          <Image
            src="https://pbs.twimg.com/media/FtU_lPoXoAI81Ht?format=jpg&name=900x900"
            alt="Picture of the manga"
            fill={true}
          />
        </div>
        <div className="flex justify-between flex-col ">
          <h3 className="font-semibold text-lg">Ngawi Society</h3>
          <p className="font-normal text-base">Sultan Ironi</p>
        </div>
      </div>
    </>
  );
}
