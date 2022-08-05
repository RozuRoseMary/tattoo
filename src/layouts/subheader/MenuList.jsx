import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import MenuItem from "./MenuItem";

function MenuList() {
  const { user } = useAuth();
  const { userId } = useParams();
  const { pathname } = useLocation();

  let isUser;
  if (user?.id === +userId) {
    isUser = true;
  } else isUser = false;

  // * TATTOOIST
  const menuTattooist = [
    {
      title: "Flash",
      to: `/profile/${userId}/products`,
      icon: "fa-solid fa-basket-shopping",
    },
    {
      title: "Booking",
      to: `/profile/${userId}/booking`,
      icon: "fa-solid fa-calendar-check",
    },
    {
      title: "Location",
      to: `/profile/${userId}/location`,
      icon: "fa-solid fa-location-dot",
    },
  ];

  return (
    <div className="middle flex justify-start">
      {user?.role !== "CLIENT" &&
        menuTattooist.map((el) => (
          <MenuItem
            key={el.title}
            title={el.title}
            to={el.to}
            icon={el.icon}
            active={pathname === el.to}
            isUser={el.isUser}
          />
        ))}

      {isUser && (
        <MenuItem
          title={"Statement"}
          to={`/profile/${userId}/statement`}
          icon={"fa-solid fa-coins"}
          active={pathname === `/profile/${userId}/statement`}
        />
      )}
    </div>
  );
}

export default MenuList;
