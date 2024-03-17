import React from "react";

export const Tab = () => {
  const [toggle, setToggle] = React.useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div
          onClick={() => updateToggle(1)}
          className={
            toggle === 1
              ? "active-tab text-[18px] text-Clr1314 font-semibold cursor-pointer"
              : "text-[18px] text-Gray font-semibold border-b-2 border-transparent cursor-pointer"
          }
        >
          Elonlar
        </div>
        <div
          onClick={() => updateToggle(2)}
          className={
            toggle === 2
              ? "active-tab text-[18px] text-Clr1314 font-semibold cursor-pointer"
              : "text-[18px] text-Gray font-semibold border-b-2 border-transparent cursor-pointer"
          }
        >
          Xabarlar
        </div>
        <div
          onClick={() => updateToggle(3)}
          className={
            toggle === 3
              ? "active-tab text-[18px] text-Clr1314 font-semibold cursor-pointer"
              : "text-[18px] text-Gray font-semibold border-b-2 border-transparent cursor-pointer"
          }
        >
          To'lovlar tarixi
        </div>
        <div
          onClick={() => updateToggle(4)}
          className={
            toggle === 4
              ? "active-tab text-[18px] text-Clr1314 font-semibold cursor-pointer"
              : "text-[18px] text-Gray font-semibold border-b-2 border-transparent cursor-pointer"
          }
        >
          Sozlamalar
        </div>
        <div
          onClick={() => updateToggle(5)}
          className={
            toggle === 5
              ? "active-tab text-[18px] text-Clr1314 font-semibold cursor-pointer"
              : "text-[18px] text-Gray font-semibold border-b-2 border-transparent cursor-pointer"
          }
        >
          Cuponlar
        </div>
      </div>


      <div className={toggle === 1 ? "show-conten" : "content"}>
        <p>salomaaaat 11111111111111111111111111111111</p>
      </div>
      <div className={toggle === 2 ? "show-conten" : "content"}>
        <p>salomaaaat 222222222222222222222222222222222</p>
      </div>
      <div className={toggle === 3 ? "show-conten" : "content"}>
        <p>salomaaaat 3333333333333333333333333333333</p>
      </div>
      <div className={toggle === 4 ? "show-conten" : "content"}>
        <p>salomaaaat 44444444444444444444</p>
      </div>
      <div className={toggle === 5 ? "show-conten" : "content"}>
        <p>salomaaaat 55555555555555555555555555555555</p>
      </div>
    </div>
  );
};
