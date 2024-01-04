import { StyleSheet } from "react-native";

const getStyles = (theme) => {
  return StyleSheet.create({
    modalContainer: {
      flex: 1,
    },
    modal: {
      backgroundColor: theme.modalCoverBackgroundColor,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },

    scrollView: {
      paddingHorizontal: 20,
    },

    modalContent: {
      borderRadius: 10,
      backgroundColor: theme.modalBackgroundColor,
    },

    form: {
      margin: 16,
    },

    modalTitle: {
      fontSize: 18,
      marginBottom: 28,
      fontWeight: "600",
      alignSelf: "center",
      color: theme.title,
    },

    label: {
      fontSize: 18,
      color: theme.text,
    },

    input: {
      backgroundColor: theme.inputBackground,
      color: theme.inputTextColor,
    },

    actionsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },

    confirmBtn: {
      width: 120,
      backgroundColor: theme.primaryButtonBackgroundColor,
      marginLeft: 16,
    },

    confirmBtnLabel: {
      fontSize: 18,
      color: theme.primaryButtonTextColor,
    },

    cancelBtnLabel: {
      fontSize: 18,
    },
  });
};

export default getStyles;
