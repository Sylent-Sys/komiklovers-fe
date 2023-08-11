import { FaArrowRight } from "react-icons/fa6";

export function SearchMoreButton() {
  return (
    <>
      <button className="gradient1 flex gap-2 w-full items-center justify-center py-2 cursor-pointer">
        <p className="text-white text-base font-medium">See More</p>
        <FaArrowRight className="text-white" />
      </button>
    </>
  );
}
