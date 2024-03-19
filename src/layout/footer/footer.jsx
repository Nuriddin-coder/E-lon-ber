import React from "react";
import { Link } from "react-router-dom";

///// Import Img's:
import Logo from "../../assets/imgs/elon.png";
import { AppleStoreIcon } from "../../assets/icons/apple-store-icon";
import { PlayStoreIcon } from "../../assets/icons/play-store-icon";

export const Footer = () => {
  return (
    <section className="bg-Clr1919 py-[50px]">
      <div className="container">
        <div className="mb-[55px] tablet:m-0 tablet:flex tablet:justify-between">
          <Link>
            <img
              className="w-[100px] border bg-white rounded-md p-1"
              src={Logo}
              alt=""
            />
          </Link>
          <div className="flex flex-col gap-y-1 mt-4">
            <Link className="text-white">Mobil ilovalar</Link>
            <Link className="text-white">Yordam</Link>
            <Link className="text-white">Pullik xizmatlar</Link>
            <Link className="text-white">E'lon ber da biznes</Link>
            <Link className="text-white">Saytda reklama</Link>
            <Link className="text-white">Foydalanish shartlari</Link>
            <Link className="text-white">Maxfiylik siyosati</Link>
            <Link className="text-white">Foydalanish shartlari</Link>
          </div>
          <div className="flex flex-col gap-y-1 my-4">
            <Link className="text-white">
              Qanday qilib sotish va sotib olish kerak?
            </Link>
            <Link className="text-white">Xavfsizlik qoidalari</Link>
            <Link className="text-white">Sayt xaritasi</Link>
            <Link className="text-white">Mintaqalar xaritasi</Link>
            <Link className="text-white">E'lon ber da karyera</Link>
            <Link className="text-white">Qayta aloqa</Link>
          </div>
          <div>
            <AppleStoreIcon />
            <PlayStoreIcon />
          </div>
        </div>
      </div>
    </section>
  );
};
