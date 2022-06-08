import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import MenuItem from "./MenuItem";

function MenuList() {
  const { user } = useAuth();
  const { pathname } = useLocation();

  const {
    user: { id },
  } = useAuth();

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
      to: `/profile/${user.id}/products`,
      icon: "fa-solid fa-basket-shopping",
    },
    {
      title: "Posts",
      to: `/profile/${user.id}/posts`,
      icon: "fa-solid fa-images",
    },
    {
      title: "Booking",
      to: `/profile/${user.id}/booking`,
      icon: "fa-solid fa-calendar-check",
    },
    {
      title: "Location",
      to: `/profile/${user.id}/location`,
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
