import React from "react";
import { useSelector } from "react-redux";

///// Import Component's:
import { Buttons } from "../../components/buttons";
import { Tab } from "../../components/tab";

///// Import Img's:
import Avatarka from "../../assets/imgs/avatarka.png";
import { Link } from "react-router-dom";

///// Import Icon's:
import { Facebook } from "../../assets/icons/facebook";
import { YouTube } from "../../assets/icons/you-tube";
import { TikTok } from "../../assets/icons/tik-tok";
import { Telegram } from "../../assets/icons/telegram";
import { Instagram } from "../../assets/icons/instagram";
import { CreditCardIcon } from "../../assets/icons/credit-card-icon";
import { VerifyIcon } from "../../assets/icons/verify-icon";
import { AnnouncementIcon } from "../../assets/icons/announcement-icon";
import { RightIcon } from "../../assets/icons/right-icon";
import { CreateIcon } from "../../assets/icons/create-icon";

export const User = () => {
  const { name } = useSelector((state) => state.user);

  return (
    <div>
      {/* User Page for Tbalet and Desktop */}
      <div className="hidden tablet:block">
        <div className="relative bg-[url('./assets/imgs/hero-bg.png')] py-[90px] desktop:py-[120px] bg-cover bg-no-repeat bg-center">
          <p className="text-white absolute left-[360px] bottom-3 text-[28px]">
            {name}
          </p>
          <Link className="text-white absolute right-[250px] bottom-[50px] flex items-center gap-2">
            <CreateIcon />
            Tahrirlash
          </Link>
        </div>
        <div className="container">
          {/* Avatarka */}
          <div className="relative">
            <span className="block shadow-lg absolute left-[0px] bottom-[-50px] max-w-[155px] bg-white p-1.5 rounded-full">
              <img className="w-[110px]" src={Avatarka} alt="img" />
            </span>
          </div>
          <div>
            <div className="flex items-center ml-[160px] gap-x-6 mt-3">
              <Link>
                <Facebook />
              </Link>
              <Link>
                <YouTube />
              </Link>
              <Link>
                <TikTok />
              </Link>
              <Link>
                <Telegram />
              </Link>
              <Link>
                <Instagram />
              </Link>
            </div>
          </div>
          <div className="pt-[90px] pb-[60px]">
            <div className="flex items-center gap-[80px]">
              <div>
                <span className="flex items-center gap-2">
                  <p className="text-Clr1314">Sizning hisobingiz :</p>
                  <p className="text-Clr1314">0 so'm</p>
                </span>
                <span className="flex items-center gap-2">
                  <p className="text-Clr1314">Mavjud bonuslar :</p>
                  <p className="text-Clr1314">0 so'm</p>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Buttons variant="outline">Hamyonni to’ldirish</Buttons>
                <Buttons variant="primary">Paket sotib olish</Buttons>
              </div>
            </div>
          </div>

          <div className="hidden tablet:block">
            <Tab />
          </div>
        </div>
      </div>

      {/* ========================================================================================== */}

      {/* User Page for Mobile */}
      <div className="tablet:hidden">
        <div className="bg-[url('./assets/imgs/mobile-profile-img.png')] py-[70px] bg-cover bg-no-repeat bg-center"></div>
        <div className="container">
          {/* Avatarka */}
          <div className="relative">
            <span className="block shadow-lg absolute mx-auto left-0 right-0 bottom-[10px] max-w-[85px] bg-white p-1.5 rounded-full">
              <img src={Avatarka} alt="img" />
            </span>
          </div>

          {/* Name */}
          <h1 className="text-Clr1314 flex items-center justify-center gap-2 text-[24px] font-bold text-center mt-12">
            {name}
            <VerifyIcon />
          </h1>

          {/* Media */}
          <div className="flex items-center justify-center gap-x-6 mt-3">
            <Link>
              <Facebook />
            </Link>
            <Link>
              <YouTube />
            </Link>
            <Link>
              <TikTok />
            </Link>
            <Link>
              <Telegram />
            </Link>
            <Link>
              <Instagram />
            </Link>
          </div>

          {/* Credit Card */}
          <div className="bg-white py-2 mt-5 px-4 rounded-[5px] flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <span className="bg-Clrf5f5 block w-[42px] pl-[9px] pt-[9px] h-[42px] rounded-full">
                <CreditCardIcon />
              </span>
              <p className="text-Clr1314 font-medium">Hamyon :</p>
            </div>
            <p className="font-bold text-ClrEA38">23 450 UZS</p>
          </div>

          {/* paket olish va elon berish */}
          <div className="flex items-center justify-between mt-4">
            <Buttons variant="primary">Paket sotib olish</Buttons>
            <Buttons variant="outline">E’lon berish</Buttons>
          </div>

          {/* Options */}
          <div className="mt-4 flex flex-col gap-y-3.5 rounded-[5px] bg-white px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <span className="w-[35px] h-[35px] pl-1.5 pt-1 block bg-Clr1314 rounded-full">
                  <AnnouncementIcon />
                </span>
                <p className="text-Clr181d font-medium">E’lonlar</p>
              </div>
              <RightIcon />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <span className="w-[35px] h-[35px] pl-1.5 pt-1 block bg-Clr1314 rounded-full">
                  <AnnouncementIcon />
                </span>
                <p className="text-Clr181d font-medium">E’lonlar</p>
              </div>
              <RightIcon />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <span className="w-[35px] h-[35px] pl-1.5 pt-1 block bg-Clr1314 rounded-full">
                  <AnnouncementIcon />
                </span>
                <p className="text-Clr181d font-medium">E’lonlar</p>
              </div>
              <RightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
