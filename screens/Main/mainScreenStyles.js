import { StyleSheet } from "react-native";

const getStyles = (theme) => {
  return StyleSheet.create({
    main: {
      width: "50%",
      alignSelf: "center",
      alignItems: "center",
      marginTop: 80,
    },

    userActionContainer: {
      position: "absolute",
      right: 40,
    },

    barCodeContainer: {
      flex: 1,
    },

    barcodeScanner: {
      flex: 1,
    },

    closeBarCodeScannerButton: {
      backgroundColor: theme.backgroundColor,
      borderRadius: 100,
      padding: 8,
      position: "absolute",
      zIndex: 10,
      right: 56,
      top: 56,
    },

    currentLocationInfo: {
      backgroundColor: theme.backgroundColor,
      borderRadius: 20,
      flexDirection: "row",
      minWidth: "60%",
      maxWidth: "90%",
      justifyContent: "space-between",
      position: "absolute",
      alignSelf: "center",
      paddingHorizontal: 24,
      paddingVertical: 16,
      bottom: 48,
      zIndex: 10,
    },

    noLocationContainer: {
      alignItems: "center",
      flexDirection: "row",
    },

    homeIcon: {
      color: theme.textMedium,
    },

    textContainer: {
      fontSize: 16,
      paddingLeft: 20,
    },

    noLocationText: {
      color: theme.textLight,
    },

    locationName: {
      marginBottom: 10,
      color: theme.buttonTextColor,
    },

    closeBarCodeScannerIcon: {
      color: theme.textMedium,
    },

    button: {
      marginBottom: 38,
    },

    buttonSecondary: {
      backgroundColor: theme.secondaryButtonBackgroundColor,
      marginBottom: 28,
    },

    buttonSecondaryText: {
      color: theme.secondaryButtonTextColor,
    },
  });
};

export default getStyles;
