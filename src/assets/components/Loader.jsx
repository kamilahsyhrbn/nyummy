import React from "react";
import loader from "../images/Loader.gif";

export default function Loader() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <img src={loader} alt="" className="lg:w-3/12 md:w-7/12 w-10/12" />
    </div>
  );
}
