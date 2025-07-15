import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg py-[25px] min-w-0 px-1">
      <div className="flex justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <span className="font-medium text-2xl text-nowrap mr-[31px]">
            STIY STIL
          </span>
          <div className="w-0.5 h-[51px] bg-[var(--gray-6)] mr-[25px]"></div>
          <span className="text-[12px] leading-[15px] w-[140px] text-wrap ">
            <span className="text-[#787E83]">Tables that</span> <br /> keep you
            healthy
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-[59px]">
          <ul className="flex gap-[30px]">
            <li className="font-medium text-[14px]">
              <a href="">Description</a>
            </li>
            <li className="font-medium text-[14px]">
              <a href="">Dimensions</a>
            </li>
          </ul>
          <Button className="h-[46px] w-[120px] bg-[#F1F3F5] text-[var(--gray-9)] hover:text-[var(--background)]">
            Buy
          </Button>
        </nav>
      </div>
    </header>
  );
}
