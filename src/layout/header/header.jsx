import React from "react";
import { Link, NavLink } from "react-router-dom";
import { loadState } from "../../lib/local-storage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

///// Import Icon's
import { HomeIcon } from "../../assets/icons/home-icon";
import { MessageIcon } from "../../assets/icons/message-icon";
import { AddIcon } from "../../assets/icons/add-icon";
import { HeartIcon } from "../../assets/icons/heart-icon";
import { ProfileIcon } from "../../assets/icons/profile-icon";

//// Import Img's:
import Logo from "../../assets/imgs/elon.png";
import { Buttons } from "../../components/buttons";

export const Header = () => {
  const userData = loadState("user");
  const { isAuthification } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const navigateAnnoun = () => {
    navigate("/announcement");
  };

  return (
    <div>
      {/* Header Main */}
      <div className="container py-4 hidden tablet:flex items-center justify-between">
        <Link to="/">
          <img className="w-[100px]" src={Logo} alt="" />
        </Link>
        <div className="flex items-center gap-4">
          {/* Messages */}
          <Link className="flex items-center gap-2">
            <MessageIcon />
            <p className="font-medium">Xabarlar</p>
          </Link>

          {/* Likes */}
          <Link className="flex items-center gap-2">
            <HeartIcon />
            <p className="font-medium">Yoqtirganlar</p>
          </Link>

          {/* Profile or Log in */}
          {userData ? (
            <Link to="/user" className="flex items-center gap-2 font-medium">
              <ProfileIcon /> {userData.name}
            </Link>
          ) : (
            <div className="flex items-center gap-1">
              <Link
                to="/login"
                className="font-medium border-b-[1px] border-green-600 text-green-600"
              >
                Kirish
              </Link>
              <p>/</p>
              <Link
                to="/regis"
                className="font-medium border-b-[1px] border-green-600 text-green-600"
              >
                Ro'yx. o'tish
              </Link>
            </div>
          )}

          <div>
            {userData ? (
              <Buttons onClick={navigateAnnoun} variant="third">
                E'lon joylashtirish
              </Buttons>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* Header for Mobile */}
      <div className="flex items-center gap-3">
        <div className="flex tablet:hidden items-center bg-white py-1 fixed bottom-0 left-0 right-0 justify-between w-full container">
          <NavLink to="/" className="flex flex-col items-center">
            <HomeIcon />
            <p className="text-[12px] text-Clr8c8c">Home</p>
          </NavLink>
          <div className="flex flex-col items-center">
            <MessageIcon />
            <p className="text-[12px] text-Clr8c8c">Xabarlar</p>
          </div>
          {userData ? (
            <Link to="/announcement" className="flex flex-col items-center">
              <AddIcon />
              <p className="text-[12px] text-Clr8c8c">E'lon berish</p>
            </Link>
          ) : (
            <div className="flex flex-col items-center opacity-60">
              <AddIcon />
              <p className="text-[12px] text-Clr8c8c">E'lon berish</p>
            </div>
          )}
          <div className="flex flex-col items-center">
            <HeartIcon />
            <p className="text-[12px] text-Clr8c8c">Saqlanganlar</p>
          </div>
          {userData ? (
            <NavLink to="/user" className="flex flex-col items-center">
              <ProfileIcon />
              <p className="text-[12px] text-Clr8c8c">
                {userData.name.slice(0, 3)}.
              </p>
            </NavLink>
          ) : (
            <NavLink to="/login" className="flex flex-col items-center">
              <ProfileIcon />
              <p className="text-[12px] text-Clr8c8c">Kirish</p>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
