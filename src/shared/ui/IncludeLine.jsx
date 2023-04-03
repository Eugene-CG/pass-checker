import { AiOutlineCheckCircle } from "react-icons/ai";

export const IncludLine = ({ condition, text }) => {
  return (
    <div
      className={`
    flex gap-3 items-center
    text-xl 
    ${condition}`}
    >
      <AiOutlineCheckCircle className="text-3xl" />
      {text}
    </div>
  );
};
