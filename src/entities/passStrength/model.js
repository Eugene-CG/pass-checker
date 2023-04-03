export const handlePassStrength = (passStrength) => {
  switch (passStrength) {
    case 1:
      return "text-black";
    case 2:
      return "text-yellow-500";
    case 3:
      return "text-green-500";
    default:
      return "text-black";
  }
};
