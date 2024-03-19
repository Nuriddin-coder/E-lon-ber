import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllData } from "../../pages/home/service/query/useGetAllData";
import { AnnouncementCard } from "../../components/cards/announcementCrad";
import { HeartIcon } from "../../assets/icons/heart-icon";

export const ProductSingle = () => {
  const { id } = useParams();
  const { data } = useGetAllData();

  const result = data?.filter((item) => item.id == id);

  return (
    <div>
      {result?.map((item) => (
        <div key={item.id}>
          <div>
            <img
              className="w-[350px] miniTab:w-[500px] tablet:h-[350px] mx-auto mt-2"
              src={item.img}
              alt="img"
            />
          </div>

          <div className="container">
            <div className="mt-1.5 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <p className="text-[12px] text-Clr888 border-r-[1px] pr-2 border-Clr888">
                  Bugun : 12:28
                </p>
                <p className="text-[12px] text-Clr888">{item.location}</p>
                <p className="text-[12px] text-Clr888 border-l-[1px] border-Clr888 pl-2">
                  Ko'rildi: 122
                </p>
              </span>
              <HeartIcon />
            </div>

            <h2 className="text-[18px] text-Clr1314">{item.title}</h2>
            <div>
              <p className="uppercase text-ClrEA38 text-[20px] font-bold">
                {item.price} {item.currency}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
