import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../components/ui/Spinner";
import UserIcon from "../../components/ui/UserIcon";
import { useAuth } from "../../context/AuthContext";
import DropdownUser from "./DropdownUser";

function UserHeader() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [dropdown, setDropdownUser] = useState(false);
  const navigate = useNavigate();

  const showDropdownUser = () => setDropdownUser(!dropdown);

  const handleLogin = () => {
    if (!user) navigate("/login");
  };

  return (
    <>
      <div className="user-profile" onClick={handleLogin}>
        <div className="flex">
          <UserIcon src={user?.profilePicture} />

          <div className="username flex " onClick={showDropdownUser}>
            <div
              className={
                pathname === "/login" ? "icon-header-active " : "icon-header "
              }
            >
              <div className="flex">
                <p className="">
                  {user
                    ? user.displayName || user.firstName + " " + user.lastName
                    : "Login"}
                </p>
                <div className="ml-5 ">
                  <i
                    className={
                      user
                        ? "fa-solid fa-sort-down"
                        : "fa-solid fa-right-to-bracket"
                    }
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Link> */}

        {user ? dropdown && <DropdownUser /> : null}
      </div>
      {/* )} */}
    </>
  );
}

export default UserHeader;
