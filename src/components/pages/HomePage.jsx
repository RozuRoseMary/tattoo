import React from "react";
import NewFlash from "./home/NewFlash";
import NewPost from "./home/NewPost";
import TopFlash from "./home/TopFlash";
import TopPost from "./home/TopPost";

function HomePage() {
  return (
    // <div className="bg-blue-500">
    <div className="">
      <TopFlash />
      <NewFlash />
      {/* <TopPost /> */}
      {/* <NewPost /> */}
    </div>
  );
}

export default HomePage;
