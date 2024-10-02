import React from "react";

const FooterSimple = () => {
  return (
    <div className="w-full py-4 border-t border-gray-200 absolute bottom-0">
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center text-[11px] tracking-wide font-extralight text-[#595959] lg:gap-8 md:gap-4 gap-1">
        <p href="#">© 2006-2024, Concur Technologies, Inc.</p>
        <a href="#">User Agreement</a>
        <a href="#">Privacy Statement</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Do Not Share/Sell My Personal Information</a>
        <a href="#">Help Center</a>
      </div>
    </div>
  );
};

export default FooterSimple;
