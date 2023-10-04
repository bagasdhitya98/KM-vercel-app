import React from "react";
import { useNavigate } from "react-router-dom";
import { UserCircleIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const Navbar = ({ list, onClick }) => {
  const navigate = useNavigate();
  const username = Cookies.get("email");

  const handleBookmark = () => {
    navigate("/bookmark");
  };

  const handleLogout = () => {
    Swal.fire({
      text: "Are you sure want to log out?",
      title: "Logout",
      confirmButtonText: "OK",
    }).then((res) => {
      if (res.isConfirmed) {
        Cookies.remove("email");
        Cookies.remove("token");
        navigate("/auth/login");
      }
    });
  };

  return (
    <nav className="w-screen h-20 bg-orange-500 sticky z-10 top-0 flex justify-end items-center">
      <div className="mr-10">
        <ul className="flex items-center gap-x-5 text-white font-semibold">
          <li
            className="cursor-pointer hover:bg-white hover:text-orange-500 rounded-md"
            onClick={() => handleBookmark()}
          >
            Read List
          </li>
          <li className="flex items-center">
            <BookmarkIcon width={40} height={40} /> Bookmark List : {list}
          </li>
          <li
            className="flex items-center ml-10 cursor-pointer"
            onClick={() => handleLogout()}
          >
            {username ? username : "You are not logged in"}
            <UserCircleIcon width={40} height={40} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
