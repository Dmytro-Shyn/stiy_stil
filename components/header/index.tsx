"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`t fixed top-0 left-0 z-50 w-full bg-white/10 px-5 py-[15px] backdrop-blur-md transition-all duration-300 lg:py-[25px] ${open ? "h-[100vh]" : "h-[70px] py-[15px] lg:py-[25px]"}`}
    >
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="flex items-center">
          <span className="mr-[31px] text-[20px] font-medium text-nowrap md:text-2xl">
            STIY STIL
          </span>
          <div className="mr-[25px] hidden h-[51px] w-0.5 bg-[var(--gray-6)] lg:block"></div>
          <span className="hidden w-[140px] text-[12px] leading-[15px] text-wrap lg:block">
            <span className="text-[#787E83]">Tables that</span> <br /> keep you
            healthy
          </span>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="block cursor-pointer lg:hidden"
        >
          <GiHamburgerMenu className="size-6 text-black" />
        </button>

        <nav className="hidden items-center gap-[59px] lg:flex">
          <ul className="flex gap-[30px]">
            <li className="text-[14px] font-medium">
              <a href="">Description</a>
            </li>
            <li className="text-[14px] font-medium">
              <a href="">Dimensions</a>
            </li>
          </ul>
          <Button className="h-[46px] w-[120px] bg-[#F1F3F5] text-[var(--gray-9)] hover:text-[var(--background)]">
            Buy
          </Button>
        </nav>
      </div>
      {open && (
        <div className="rounded pt-10">
          <ul className="flex flex-col gap-3">
            <li className="text-[40px] font-medium">
              <a href="">Description</a>
            </li>
            <li className="text-[40px] font-medium">
              <a href="">Dimensions</a>
            </li>
          </ul>
          <Button className="mt-5 h-[46px] w-[120px] bg-[#F1F3F5] text-[var(--gray-9)] hover:text-[var(--background)]">
            Buy
          </Button>
        </div>
      )}
    </header>
  );
}
