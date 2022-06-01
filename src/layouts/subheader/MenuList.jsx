import React from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

// * CLIENT
const menuClient = [
  {
    title: "Liked Flash",
    to: "/profile/like/products",
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
    to: "/profile/products",
    icon: "fa-solid fa-basket-shopping",
  },
  {
    title: "Posts",
    to: "/profile/posts",
    icon: "fa-solid fa-images",
  },
  {
    title: "Booking",
    to: "/profile/booking",
    icon: "fa-solid fa-calendar-check",
  },
  {
    title: "Location",
    to: "/profile/location",
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

function MenuList() {
  const { pathname } = useLocation();

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
