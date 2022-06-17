import React from "react";
import SearchItem from "./SearchItem";
import PageIcon from "./PageIcon";
import UserHeader from "./UserHeader";

function Header() {
  return (
    <nav className="bg-black text-white text-md relative px-16">
      {/* text */}
      <div className="p-4 flex justify-between ">
        <div className="left flex">
          <UserHeader />

          {/* LINE */}
          <div className="mx-5 h-[100%] w-0.5 bg-light-gray"></div>

          <PageIcon />
        </div>

        {/* RIGHT : FILTER & SEARCH */}
        <SearchItem />
      </div>
    </nav>
  );
}

export default Header;
