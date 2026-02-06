import React from "react";

// 일반 사용자가 보는 페이지의 헤더 영역
const Header = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/book_banner.PNG"
          alt=""
          className="h-[150px] w-full object-cover object-[center_80%]"
        />
        <span className="absolute left-[50px] top-[20px] text-[3rem] font-bold tracking-[10px] text-red-500">
          BoOoOoOoOoOoOoOoOoK
        </span>
      </div>
      <div>일반 사용자가 보는 메뉴</div>
    </div>
  );
};

export default Header;
