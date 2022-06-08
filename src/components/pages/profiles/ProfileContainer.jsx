import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { useAuth } from "../../../context/AuthContext";
import { getUserByIdApi } from "../../../api/user";

import MenuList from "../../../layouts/subheader/MenuList";
import ProductProfile from "./footer/ProductProfile";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import SubHeader from "../../../layouts/subheader/SubHeader";
import UserIcon from "../../../components/ui/UserIcon";
import UpdatePicture from "../../ui/UpdatePicture";
import Input from "../../ui/Input";
import FlashCard from "../../ui/FlashCard";
import LeftProfile from "./header/LeftProfile";

function ProfileContainer() {
  const { user } = useAuth();
  const { userId } = useParams();
  const [edit, setEdit] = useState(false);
  const [getUser, setGetUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const res = await getUserByIdApi(userId);
        setGetUser(res.data.user);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [userId]);

  const editProfile = () => {
    // setModal(!modal);
    setEdit(!edit);
  };

  if (loading) return <Spinner />;

  return (
    <>
      {!getUser.firstName ? (
        <h1>WAITING FOR PAGE TO LOADING</h1>
      ) : (
        <div className="profile-container">
          <div className="flex p-11">
            <UserIcon containerSize=" w-[10rem] h-[10rem]" />

            {/* <UpdatePicture /> */}

            <LeftProfile
              edit={edit}
              getUser={getUser}
              editProfile={editProfile}
            />

            {/* {user ? modal && <Modal /> : null} */}

            <div className="line-x"></div>

            <div className="">
              <div className="text-header">About Me:</div>
              {edit || (
                <div className="text-detail">
                  {getUser.aboutMe || "This user does not have contain yet."}
                </div>
              )}
              {edit && (
                <textarea
                  className="input-textarea"
                  placeholder={
                    getUser.aboutMe || "This user does not have contain yet."
                  }
                ></textarea>
              )}
            </div>
          </div>

          <div className="w-[auto] h-[1.5px] mt-2 bg-light-gray"></div>

          <SubHeader />

          <div className="w-[auto] h-[1.5px] mb-2 bg-light-gray"></div>

          {/* <div className="footer-like-container flex justify-around flex-wrap"> */}
          <div className="footer-like-container grid grid-cols-4 gap-11 place-items-center min-h-[100vh]">
            <ProductProfile />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileContainer;
