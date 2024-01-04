export const generateToastMessage = (type, data) => {
  let message = "";

  if (type === "location") {
    message = `Location ${data} scanned successfully`;
  } else if (type === "person") {
    message = `User scanned successfully`;
  }

  return message;
};
