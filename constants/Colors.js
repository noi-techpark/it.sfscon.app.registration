const common = {
  primary: "#3EB5F8",
  inputTextColor: "rgba(0, 0, 0, 0.8)",
  primaryButtonBackgroundColor: "#73C4EF",
  primaryButtonTextColor: "#FFF",
  secondaryButtonBackgroundColor: "#F0F8FD",
  secondaryButtonTextColor: "#3EB5F8",
  inputErrorBorderColor: "#EB5757",
  inputErrorMessage: "#EB5757",
};

const darkTheme = {
  ...common,
  backgroundColor: "#0E0E0E",
  inputBackground: "rgba(255, 255, 255, 0.85)",
  buttonTextColor: "#FFF",
  title: "#FFF",
  secondaryTitle: "#3EB5F8",
  text: "rgba(255, 255, 255, 0.85)",
  modalBackgroundColor: "#313131",
  modalCoverBackgroundColor: "rgba(12, 12, 12, 0.8)",
};
const lightTheme = {
  ...common,
  backgroundColor: "#FFF",
  buttonTextColor: "#000",
  inputBackground: "rgba(0, 0, 0, 0.03)",
  borderDark: "#000",
  title: "#000",
  secondaryTitle: "#73C4EF",
  text: "rgba(0, 0, 0, 0.85)",
  textMedium: "rgba(0, 0, 0, 0.7)",
  textLight: "rgba(0, 0, 0, 0.45)",
  modalBackgroundColor: "#FFFFFF",
  modalCoverBackgroundColor: "rgba(0, 0, 0, 0.21)",
};

export const colors = { light: lightTheme, dark: darkTheme };
