import React from "react";

////// Import Hooks:
import { useGetAllData } from "./service/query/useGetAllData";

///// Import Icon's
import { SearchIcon } from "../../assets/icons/search-icon";

///// Import Components:
import { AnnouncementCard } from "../../components/cards/announcementCrad";

export const Home = () => {
  const { data } = useGetAllData();
  return (
    <div>
      {/* Search for Mobile */}
      <div className="bg-Clr1314 py-4 tablet:hidden">
        <div className="container">
          <div className="flex items-center justify-between px-4 py-2 bg-white rounded-[6px]">
            <input
              className="py-1.5 bg-transparent text-black outline-none placeholder:text-black"
              placeholder="Qidirish"
              type="text"
            />
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="container py-[50px]">
        <h1 className="text-[18px] tablet:text-[22px] text-Clr1314 font-bold">Siz uchun maxsus</h1>
        <div className="grid mt-4 grid-cols-cardColumn gap-y-4 justify-items-center tablet:grid-cols-3 desktop:grid-cols-4">
          {data?.map((item) => (
            <AnnouncementCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
