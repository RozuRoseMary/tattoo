import React from "react";
import Alert from "../ui/Alert";
import Modal from "../ui/Modal";
import Spinner from "../ui/Spinner";
import NewFlash from "./home/NewFlash";
import NewPost from "./home/NewPost";
import TopFlash from "./home/TopFlash";
import TopPost from "./home/TopPost";

function HomePage() {
  return (
    <div className="">
      <TopFlash />
      {/* <NewFlash /> */}
      {/* <TopPost /> */}
      {/* <NewPost /> */}
      {/* <Modal /> */}
      {/* <Spinner />
      <Alert /> */}
    </div>
  );
}

export default HomePage;
