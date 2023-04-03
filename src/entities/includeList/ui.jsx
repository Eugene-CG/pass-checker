import { IncludLine } from "../../shared";

export const IncludeList = ({
  includeLetters,
  includeDigits,
  includeSymbols,
}) => {
  const letterLineColor = includeLetters ? "text-green-600" : "text-black";
  const digitsLineColor = includeDigits ? "text-green-600" : "text-black";
  const symbolsLineColor = includeSymbols ? "text-green-600" : "text-black";

  return (
    <>
      <IncludLine
        condition={letterLineColor}
        text="Include Letters"
      />
      <IncludLine
        condition={digitsLineColor}
        text="Include Digits"
      />
      <IncludLine
        condition={symbolsLineColor}
        text="Include Symbols"
      />
    </>
  );
};
