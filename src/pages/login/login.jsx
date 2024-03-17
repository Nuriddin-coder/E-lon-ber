import React from "react";
import { useForm } from "react-hook-form";
import { useLoginUser } from "./mutation/useLoginUser";
import { useNavigate } from "react-router-dom";
import { saveState } from "../../lib/local-storage";
import Cookies from "js-cookie";

////// Import Img's
import Logo from "../../assets/imgs/elon.png";
import { Link } from "react-router-dom";
import { Buttons } from "../../components/buttons";

export const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useLoginUser();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        console.log(res);
        saveState("user", res.user);
        Cookies.set("token", res.accessToken, { expires: 7 });
        navigate("/");
      },
    });
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
        <div className="flex flex-col tablet:items-center tablet:w-full justify-items-center w-[300px] gap-y-4">
          {/* Email */}
          <div>
            <p className="text-[12px] pb-1 text-Clr888">Email</p>
            <input
              {...register("email")}
              placeholder="Email"
              className="border-2 border-Clr888 tablet:w-[350px] tablet:py-3 outline-none rounded-[6px] py-2 w-full px-3"
              type="email"
            />
          </div>

          {/* Password */}
          <div>
            <p className="text-[12px] pb-1 text-Clr888">Password</p>
            <input
              {...register("password")}
              placeholder="Password"
              className="border-2 border-Clr888 tablet:w-[350px] tablet:py-3 outline-none rounded-[6px] py-2 w-full px-3"
              type="password"
            />
          </div>
        </div>

        <div className="mt-1 tablet:text-center tablet:mt-2">
          <Link
            to="/regis"
            className="text-blue-700 border-b-2 border-blue-400 pb-[2px]"
          >
            Akkuntingiz yo'qmi ?
          </Link>
        </div>

        <div className="tablet:text-center tablet:mt-4 mt-4">
          <Buttons variant="primary">Kirish</Buttons>
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
