import { useState } from "react";

import { checkPassIncludes, handleBGCOLOR } from "./model";

import { PassStrength } from "../entities/passStrength";
import { IncludeList } from "../entities/includeList";

import "./index.css";

export const App = () => {
  const [userPassInfo, handleUserPass] = useState({
    includeLetters: false,
    includeDigits: false,
    includeSymbols: false,
    bgColor: "bg-gray-200",
    passStrength: 0,
  });

  const handleUserInput = ({ target }) => {
    const pass = target.value;

    const bgColor = handleBGCOLOR(pass.length);

    const [includeLetters, includeDigits, includeSymbols] =
      checkPassIncludes(pass);

    const passStrength = includeLetters + includeDigits + includeSymbols;

    handleUserPass({
      includeLetters,
      includeDigits,
      includeSymbols,
      bgColor,
      passStrength,
    });
  };

  return (
    <main
      className={`
      md:w-2/4 w-full my-8 mx-4 p-8
      flex flex-col gap-4
      rounded-lg
      transition-bg duration-300
      ${userPassInfo.bgColor}`}
    >
      <input
        type="text"
        onChange={(e) => handleUserInput(e)}
        className="
        w-full pl-3
        border-2 border-solid rounded-[3rem]
        text-xl
      border-black"
      />

      <IncludeList {...userPassInfo} />

      {userPassInfo.passStrength !== 0 && (
        <PassStrength passStrength={userPassInfo.passStrength} />
      )}
    </main>
  );
};
