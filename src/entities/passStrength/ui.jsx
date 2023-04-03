import { GiStrong } from "react-icons/gi";

import { handlePassStrength } from "./model";

export const PassStrength = ({ passStrength }) => {
  const strengthColor = handlePassStrength(passStrength);
  const iconsAmount = Array.apply(null, Array(passStrength));

  return (
    <div className="flex gap-3 items-center">
      {iconsAmount.map((_, index) => {
        return (
          <GiStrong
            key={index}
            className={`text-3xl ${strengthColor}`}
          />
        );
      })}
    </div>
  );
};
