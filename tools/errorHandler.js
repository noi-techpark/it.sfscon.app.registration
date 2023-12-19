export default errorMessageHandler = (error) => {
  let message = "";
  if (error.response) {
    message = error.response?.data?.id_message || "Unknown error";
  } else if (error.request) {
    message = error.request._response.id_message;
  } else {
    message = error.message;
  }
  return message;
};
