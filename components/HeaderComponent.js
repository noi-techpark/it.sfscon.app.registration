import React, { useMemo, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { getTheme } from "../tools/getTheme";
import { AntDesign } from "@expo/vector-icons";
import LogoComponent from "./LogoComponent";
import Text from "./TextComponent";
import { useDispatch } from "react-redux";

export default HeaderComponent = ({ title1, title2 }) => {
  const theme = getTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.header}>
      <View style={styles.userActionContainer}>
        <View style={styles.logoContainer}>
          <LogoComponent />
        </View>
      </View>

      <Text bold stylesProp={styles.titleHeading}>
        {title1 || ""}
      </Text>
    </View>
  );
};

const getStyles = (theme) => {
  return StyleSheet.create({
    header: {
      alignItems: "center",
    },

    userActionContainer: {
      marginTop: 30,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 32,
    },

    logoContainer: {
      flex: 1,
      alignItems: "center",
    },

    userActionButton: {
      position: "absolute",
      right: 32,
      padding: 6,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: theme.borderDark,
      justifyContent: "flex-end",
    },

    popup: {
      zIndex: 500,
      borderRadius: 2,
      backgroundColor: theme.backgroundColor,
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
      shadowColor: "#52006A",
      paddingVertical: 10,
      paddingHorizontal: 12,
      position: "absolute",
      right: 32,
      top: 56,
    },

    userInfoContainer: {
      flexDirection: "row",
      borderBottomWidth: 2,
      paddingBottom: 20,
      paddingHorizontal: 12,
      alignItems: "center",
      borderBottomColor: "rgba(0, 0, 0, 0.03)",
    },

    userAvatarContainer: {
      padding: 6,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: theme.borderDark,
    },

    button: {
      flexDirection: "row",
      paddingHorizontal: 12,
      paddingVertical: 6,
    },

    helpBtn: {
      marginBottom: 12,
    },

    logoutBtn: {
      backgroundColor: "#F0F8FD",
    },

    logoutBtnTxt: {
      color: "#73C4EF",
    },

    btnText: {
      marginLeft: 8,
    },

    logoutIcon: {
      color: "#73C4EF",
    },

    actionButtonsContainer: {
      paddingTop: 12,
      borderBottomColor: "rgba(255, 255, 255, 0.85)",
    },

    userInfo: {
      marginLeft: 20,
    },

    username: {
      fontSize: 16,
      color: theme.textMedium,
    },

    email: {
      color: theme.textLight,
      minWidth: 140,
      maxWidth: 220,
    },

    titleHeading: {
      fontSize: 30,
      lineHeight: 24,
      paddingTop: 24,
      fontWeight: "600",
      color: theme.title,
    },

    titleText: {
      color: theme.secondaryTitle,
      fontWeight: "600",
      fontSize: 18,
    },
  });
};
