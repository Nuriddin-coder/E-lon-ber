import React from "react";

////// Import Icon's:
import { LocationIcon } from "../../../assets/icons/location-icon";
import { HeartIcon } from "../../../assets/icons/heart-icon";
import { Link } from "react-router-dom";

export const AnnouncementCard = (props) => {
  return (
    <div className="bg-white w-[150px] pb-2 tablet:w-[220px]">
      <Link to={`/product-single/${props.id}`}>
        <img
          className="w-full h-[150px] tablet:h-[180px] p-1"
          src={props.img}
          alt="img"
        />
      </Link>
      <div className="px-2">
        <p className="text-Clr1314 font-medium text-[18px] mt-1">
          {props.title}
        </p>
        <div className="flex items-center gap-2 mb-3">
          <p className="text-ClrEA38 font-bold">{props.price}</p>
          <p className="uppercase text-ClrEA38 font-bold">{props.currency}</p>
        </div>
        <div className="flex items-center justify-between">
          {/* Location */}
          <div className="flex items-center gap-1">
            <LocationIcon />
            <p className="text-Clr888">
              {props.location ? props.location.slice(0, 7) : ""} ...
            </p>
          </div>
          <div>
            <HeartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
