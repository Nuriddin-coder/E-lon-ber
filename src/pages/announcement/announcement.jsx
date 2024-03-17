import React from "react";
import { Buttons } from "../../components/buttons";
import { useForm } from "react-hook-form";
import { usePostAnnoun } from "./service/mutation/usePostAnnoun";
// import { useNavigate } from "react-router  -dom";

//// Import Icon's:
import { BackArrowIcon } from "../../assets/icons/back-arrow-icon";
import { Link } from "react-router-dom";
import { loadState } from "../../lib/local-storage";

export const Announcement = () => {
  const { register, reset, handleSubmit } = useForm();
  const { mutate } = usePostAnnoun();
  const userData = loadState("user");
  // const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        reset();
      },
    });
  };

  return (
    <div className="container py-4">
      <div className="flex items-center gap-[80px] py-3">
        <Link to="/">
          <BackArrowIcon />
        </Link>
        <p className="text-[18px] text-Clr1314 font-medium">E'lon Joylash</p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        {/* Product datas inputs */}
        <div className="flex flex-col gap-4 w-[200px]">
          {/* Product Img */}
          <div>
            <p className="text-Clr888 mb-1">Rasm</p>
            <input
              className="border-[1px] px-2 w-[300px] rounded-[6px] border-Clr888 py-2 outline-none"
              {...register("img")}
              placeholder="Rasm uchun URL kiriting"
              type="text"
            />
          </div>
          {/* Product Title */}
          <div>
            <p className="text-Clr888 mb-1">Sarlavha</p>
            <input
              {...register("title")}
              className="border-[1px] px-2 w-[300px] rounded-[6px] border-Clr888 py-2 outline-none"
              placeholder="Sarlavha"
              type="text"
            />
          </div>

          {/* Product Category */}
          <div>
            <p className="text-Clr888 mb-1">Kategorya</p>
            <select
              className="border-[1px] px-2 w-[300px] rounded-[6px] border-Clr888 py-2 outline-none"
              {...register("category")}
            >
              <option value="hobbi">hobbi</option>
              <option value="transport">transport</option>
              <option value="garden">garden</option>
              <option value="texno">texno</option>
              <option value="childrenFor">childrenFor</option>
              <option value="childrenFor">fashion</option>
              <option value="childrenFor">realEstate</option>
            </select>
          </div>

          {/* Product Price */}
          <div>
            <p className="text-Clr888 mb-1">Narx</p>
            <div className="flex items-end gap-4">
              <input
                {...register("price")}
                className="border-[1px] px-2 w-[150px] rounded-[6px] border-Clr888 py-2 outline-none"
                placeholder="0"
                type="text"
              />
              <select
                className="border-[1px] px-2 w-[300px] rounded-[6px] border-Clr888 py-2 outline-none"
                {...register("currency")}
              >
                <option value="uzs">UZS</option>
                <option value="usd">USD</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact You */}
        <div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-Clr888 mb-1">Joylashuv</p>
              <input
                {...register("location")}
                className="border-[1px] px-2 w-[300px] rounded-[6px] text-Clr888 border-Clr888 py-2 outline-none"
                defaultValue={userData ? userData.location : ""}
                type="text"
              />
            </div>
            <div>
              <p className="text-Clr888 mb-1">Ism</p>
              <input
                className="border-[1px] px-2 w-[300px] rounded-[6px] text-Clr888 border-Clr888 py-2 outline-none"
                defaultValue={userData ? userData.name : ""}
                type="text"
              />
            </div>
            <div>
              <p className="text-Clr888 mb-1">Email</p>
              <input
                className="border-[1px] px-2 w-[300px] rounded-[6px] text-Clr888 border-Clr888 py-2 outline-none"
                defaultValue={userData ? userData.email : ""}
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Buttons variant="primary">E'lon Joylashtirish</Buttons>
        </div>
      </form>
    </div>
  );
};
