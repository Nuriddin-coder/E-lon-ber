import React from "react";
import { useForm } from "react-hook-form";
import { saveState } from "../../lib/local-storage";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useCreateUser } from "./mutation/useCreateUser";
import { changeEffect } from "../../redux/reducers/user-reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

///// Import Img's:
import Logo from "../../assets/imgs/elon.png";
import { Buttons } from "../../components/buttons";

export const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthification } = useSelector((state) => state.user);
  console.log(isAuthification);

  const { mutate } = useCreateUser();
  const submit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        dispatch(changeEffect(data));
        saveState("user", res.user);
        Cookies.set("token", res.accessToken, { expires: 7 });
        navigate("/");
      },
    });

    reset();
  };

  return (
    <div className="container">
      <div className="my-4 max-w-[150px] tablet:mx-auto">
        <img className="w-[120px] tablet:mx-auto" src={Logo} alt="logo" />
        <h1 className="text-Clr222 text-[24px] font-bold mt-2">
          Xush Kelibsiz
        </h1>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col tablet:w-full tablet:items-center justify-items-center w-[300px] gap-y-4">

          {/* Email */}
          <div>
            <p className="text-[12px] pb-1 text-Clr888">Email</p>
            <input
              {...register("email")}
              placeholder="Email"
              className="border-2 border-Clr888 outline-none tablet:w-[400px] tablet:py-3 rounded-[6px] py-2 w-full px-3"
              type="email"
            />
          </div>

          {/* Name */}
          <div>
            <p className="text-[12px] pb-1 text-Clr888"> Name</p>
            <input
              {...register("name")}
              placeholder="Name"
              className="border-2 border-Clr888 outline-none tablet:w-[400px] tablet:py-3 rounded-[6px] py-2 w-full px-3"
              type="text"
            />
          </div>

          {/* Location */}
          <div>
            <p className="text-[12px] pb-1 text-Clr888">Location</p>
            <input
              {...register("location")}
              placeholder="Location"
              className="border-2 border-Clr888 outline-none tablet:w-[400px] tablet:py-3 rounded-[6px] py-2 w-full px-3"
              type="text"
            />
          </div>

          {/* Age */}
          <div>
            <p className="text-[12px] pb-1 text-Clr888">Age</p>
            <input
              {...register("age")}
              placeholder="Age"
              className="border-2 border-Clr888 outline-none tablet:w-[400px] tablet:py-3 rounded-[6px] py-2 w-full px-3"
              type="text"
            />
          </div>

          {/* Password */}
          <div>
            <p className="text-[12px] pb-1 text-Clr888">Password</p>
            <input
              {...register("password")}
              placeholder="Password"
              className="border-2 border-Clr888 outline-none tablet:w-[400px] tablet:py-3 rounded-[6px] py-2 w-full px-3"
              type="password"
            />
          </div>
        </div>

        <div className="tablet:text-center mt-4">
          <Buttons variant="primary">Jo'natish</Buttons>
        </div>

        {/* <button
          type="submit"
          className="bg-slate-500 text-white border px-8 py-2 mr-4 mt-4 rounded-[6px]"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
};
