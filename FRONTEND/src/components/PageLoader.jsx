import { LoaderPinwheel } from "lucide-react";
import React from "react";

const PageLoader = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      data-theme="forest"
    >
      <div className="flex flex-col items-center">
        <LoaderPinwheel
          className="animate-spin-slow size-28
       text-baseColor"
        />
        <div className="font-bold">Loading...</div>
      </div>
    </div>
  );
};

export default PageLoader;
