"use client";

import { FaArrowLeft } from "react-icons/fa6";
import Input from "../components/input";
import Layout from "../components/layout";
import {
  SearchAuthorCard,
  SearchCard,
  SearchGroupCard,
} from "../components/card";
import { SearchMoreButton } from "../components/button";
import Link from "next/link";
import { useState } from "react";

export default function Search() {
  const [filter, setFilter] = useState("all");
  return (
    <Layout>
      <div className="flex items-center gap-2 mb-4 relative z-[3]">
        <Link href="/">
          <FaArrowLeft className="cursor-pointer" />
        </Link>
        <h1 className="text-lg :text-2xl font-medium">Search</h1>
      </div>
      <div className="mt-6">
        <Input customClass="w-full " />
      </div>
      <div className="flex relative z-[3] gap-2 mt-8 glassmorph-color p-[5px] text-base w-max mx-auto lg:mx-0 rounded-[2px]">
        {["all", "manga", "author", "group"].map((item, index) => (
          <button
            key={index}
            className={`py-2 px-[10px] rounded-[2px] capitalize ${
              filter === item ? "bg-color1 " : ""
            }`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {(filter === "all" || filter === "manga") && (
        <div className="mt-6">
          <h1 className="text-lg :text-2xl font-medium">Manga</h1>
          <div className="grid grid-cols-1 mt-6 gap-2">
            <SearchCard />
            <SearchCard />
            <SearchMoreButton />
          </div>
        </div>
      )}

      {(filter === "all" || filter === "author") && (
        <div className="mt-6">
          <h1 className="text-lg :text-2xl font-medium">Authors</h1>
          <div className="grid grid-cols-1 mt-6 gap-2">
            <SearchAuthorCard />
            <SearchAuthorCard />
            <SearchMoreButton />
          </div>
        </div>
      )}

      {(filter === "all" || filter === "group") && (
        <div className="mt-6">
          <h1 className="text-lg :text-2xl font-medium">Groups</h1>
          <div className="grid grid-cols-1 mt-6 gap-2">
            <SearchGroupCard />
            <SearchGroupCard />
            <SearchMoreButton />
          </div>
        </div>
      )}
    </Layout>
  );
}
