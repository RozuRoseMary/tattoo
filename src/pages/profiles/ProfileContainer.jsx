import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  getUserByIdApi,
  updateProfileApi,
  updateProfilePic,
} from "../../api/user";

import FooterProfile from "./footer/FooterProfile";
import Spinner from "../../components/ui/Spinner";
import SubHeader from "../../layouts/subheader/SubHeader";
import LeftProfile from "./header/LeftProfile";
import RightProfile from "./header/RightProfile";
import ProfilePic from "./header/ProfilePic";
import DetailProfile from "./header/DetailProfile";
import { useError } from "../../context/ErrorContext";

function ProfileContainer() {
  const { userId } = useParams();
  const { user } = useAuth();
  const { setError } = useError();

  const [loading, setLoading] = useState(true);
  const [getUser, setGetUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const res = await getUserByIdApi(userId);
        setGetUser(res.data.user);
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [userId]);

  const editProfile = () => {
    setEdit(!edit);
    if (edit) {
      handleSave();
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      // * update profile picture
      const formData = new FormData();
      formData.append("profilePicture", image);

      await updateProfilePic(formData);

      // * update profile
      await updateProfileApi({ displayName, aboutMe });

      if (image || displayName || aboutMe) {
        window.location.reload();
        setImage(null);
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setImage(null);
    setDisplayName(null);
    setAboutMe(null);
    setEdit(false);
  };

  if (loading) return <Spinner />;

  return (
    <>
      {!getUser.firstName ? (
        <></>
      ) : (
        <div className="profile-container">
          <div className="flex p-11 flex-wrap min-h-[250px]">
            <ProfilePic
              edit={edit}
              getUser={getUser}
              image={image}
              setImage={setImage}
            />

            <LeftProfile
              edit={edit}
              getUser={getUser}
              editProfile={editProfile}
              setDisplayName={setDisplayName}
            />

            <div className="line-x "></div>

            <div className="flex flex-col grow">
              {user && (
                <RightProfile
                  edit={edit}
                  getUser={getUser}
                  editProfile={editProfile}
                  setAboutMe={setAboutMe}
                />
              )}

              {user?.id === +userId && (
                <div className="flex ">
                  <button className="btn w-[10rem]" onClick={editProfile}>
                    {edit ? "Save" : "Your Account"}
                  </button>

                  {edit || (
                    <DetailProfile
                      edit={edit}
                      getUser={getUser}
                      editProfile={editProfile}
                      setAboutMe={setAboutMe}
                    />
                  )}

                  {edit && (
                    <button
                      className="btn w-[10rem] ml-10"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="w-[auto] h-[1.5px] mt-2 bg-light-gray"></div>

          <SubHeader />

          <div className="w-[auto] h-[1.5px] mb-2 bg-light-gray"></div>

          <div className="footer-like-container place-items-center min-h-[50vh] pb-16">
            <FooterProfile />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileContainer;
