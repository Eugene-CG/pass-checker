export const handleBGCOLOR = (passLength) => {
  switch (true) {
    case passLength === 0:
      return "bg-gray-200";
    case passLength < 9:
      return "bg-red-200";
    default:
      return "bg-green-50";
  }
};

export const checkPassIncludes = (pass) => {
  const checkPass = (reg, str) => reg.test(str);

  return [
    checkPass(/[a-zA-Z]+/, pass),
    checkPass(/\d/, pass),
    checkPass(/\W/, pass),
  ];
};
