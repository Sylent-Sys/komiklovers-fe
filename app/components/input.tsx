import { FaSistrix } from "react-icons/fa6";

interface InputProps {
  customClass?: string;
}

export default function Input({ customClass }: InputProps) {
  return (
    <>
      <div className="-mt-2 relative pt-2 ">
        <input
          className={`border border-color4 bg-transparent h-10 px-4 pr-16 rounded-[32px] text-sm focus:outline-none ${customClass} `}
          type="text"
          name="search"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-5 mr-4 text-color4"
        >
          <FaSistrix />
        </button>
      </div>
    </>
  );
}
