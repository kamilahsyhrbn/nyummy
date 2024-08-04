import React from "react";
import ScrollToTop from "react-scroll-up";
import { ImArrowUp2 } from "react-icons/im";

export default function BtnScrollTop() {
  return (
    <div className="relative z-[300]">
      <ScrollToTop showUnder={160}>
        <div className="font-bold cursor-pointer bg-[#F29C33] hover:bg-[#EE6352] transition-colors duration-300 text-white text-2xl rounded-full p-3">
          <ImArrowUp2 />
        </div>
      </ScrollToTop>
    </div>
  );
}
