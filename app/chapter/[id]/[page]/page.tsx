import Layout from "@/app/components/layout";
import { FaChevronLeft, FaChevronRight, FaListUl } from "react-icons/fa6";
import chapterImage from "../../../../public/sample-chapter.png";
import Image from "next/image";

export default function Chapter() {
  return (
    <Layout>
      <h1 className="font-semibold text-xl lg:text-2xl">Naruto</h1>
      <p className="font-medium text-base mt-2 text-gray-100">
        Chapter 700 - 15 Agustus 2023
      </p>

      <div className="flex items-center gap-2 relative z-[3] mt-6">
        <button className="glassmorph-color py-2 px-3 rounded-[5px]">
          <FaChevronLeft className="text-xl" />
        </button>
        <button className="glassmorph-color py-2 px-3 rounded-[5px]">
          <FaListUl className="text-xl" />
        </button>
        <button className="glassmorph-color py-2 px-3 rounded-[5px]">
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      <div className="lg:max-w-[800px] max-w-[340px] min-h-full relative mt-8 mx-auto">
        <Image
          src={chapterImage}
          alt="chapter"
          width={800} // Set the desired width
          height={400} // Set the desired height
          layout="responsive" // Keeps aspect ratio while fitting within the specified dimensions
        />
      </div>
    </Layout>
  );
}
