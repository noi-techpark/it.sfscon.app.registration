import { useState, useEffect, useMemo } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";
import Text from "./TextComponent";
import { useSelector } from "react-redux";
import { getTheme } from "../tools/getTheme";

export default ToasterComponent = ({ visibilityTime, type }) => {
  const theme = getTheme();
  const toast = useSelector((state) => state.utils.toast);

  const config = {
    errorToast: ({ text1, text2, props }) => {
      <View style={{ width: "100%", backgroundColor: "tomato" }}>
        <Text stylesProp={styles.type}>{text1}</Text>
        <Text stylesProp={styles.message}>{text2}</Text>
      </View>;
    },
  };

  useEffect(() => {
    if (toast?.message) {
      Toast.show({
        visibilityTime: toast?.duration || 3000,
        position: "top",
        type: toast?.type ?? "success",
        text1:
          toast?.type === "error"
            ? "Error"
            : toast?.type === "success"
            ? "Success"
            : "Info",
        text2: toast?.message,
      });
    }
  }, [toast]);

  return (
    <>
      <Toast
        config={config}
        position="top"
        visibilityTime={toast?.duration || 2000}
        type={toast.type || "success"}
      />
    </>
  );
};

const getStyles = () => {};
