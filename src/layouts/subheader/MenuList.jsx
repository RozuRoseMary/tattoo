import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import MenuItem from "./MenuItem";

function MenuList() {
  const { user } = useAuth();
  const { userProfile, getUserByIdApi } = useUser();
  const { pathname } = useLocation();
  const userId = pathname.split("/")[2];

  // * CLIENT
  const menuClient = [
    {
      title: "Liked Flash",
      to: `/profile/like/products`,
      icon: "fa-solid fa-star",
    },
    {
      title: "Liked Posts",
      to: "/profile/like/posts",
      icon: "fa-solid fa-heart",
    },
  ];

  // * TATTOOIST
  const menuTattooist = [
    {
      title: "Flash Available",
      to: `/profile/${userId}/products`,
      icon: "fa-solid fa-basket-shopping",
    },
    {
      title: "Posts",
      to: `/profile/${userId}/posts`,
      icon: "fa-solid fa-images",
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

  // * TATTOOER
  const menuTattooer = [
    {
      title: "Flash Available",
      to: "/profile/products",
      icon: "fa-solid fa-basket-shopping",
    },
    {
      title: "Posts",
      to: "/profile/posts",
      icon: "fa-solid fa-images",
    },
  ];

  return (
    <div className="middle flex justify-start">
      {menuTattooist.map((el) => (
        <MenuItem
          key={el.title}
          title={el.title}
          to={el.to}
          icon={el.icon}
          active={pathname === el.to}
        />
      ))}
    </div>
  );
}

export default MenuList;
