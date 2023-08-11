"use client";

import Navbar from "./navbar";
import Image from "next/image";
import React from "react";
import blueBubble from "../../public/bubble-blue.svg";
import purpleBubble from "../../public/bubble-purple.svg";
import { Sidebar } from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const sideBarEvent = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} sideBarEvent={sideBarEvent} />
      <div className="relative overflow-x-hidden">
        <div className="fixed -left-[70px] lg:-left-[200px] top-[20px]  overflow-hidden w-[200px] lg:w-[540px] h-[200px] lg:h-[460px] ">
          <Image src={blueBubble} alt="bubble" fill={true} />
        </div>
        <div className="fixed -right-[70px] lg:-right-[200px] bottom-[20px]  overflow-hidden w-[200px] lg:w-[540px] h-[200px] lg:h-[460px]">
          <Image src={purpleBubble} alt="bubble" fill={true} />
        </div>
        <Navbar sideBarEvent={sideBarEvent} />
        <main className="px-[15px] lg:px-[80px] font-poppins mt-[96px] pb-10">
          {children}
        </main>
      </div>
    </>
  );
}
