import { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import {
  BUILD_VERSION,
  BUILD_DATE,
  APP_VERSION,
} from "../constants/buildVersion";
import { getTheme } from "../tools/getTheme";

export default AppVersion = () => {
  const theme = getTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.appVersion}>
      <Text style={styles.appVersionText}>{BUILD_VERSION}</Text>
      <Text style={styles.appVersionText}>{BUILD_DATE}</Text>
      <Text style={styles.appVersionText}>{`Version: ${APP_VERSION}`}</Text>
    </View>
  );
};

const getStyles = (theme) => {
  return StyleSheet.create({
    appVersion: {
      position: "absolute",
      bottom: 30,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },

    appVersionText: {
      fontSize: 16,
      color: theme.textLight,
    },
  });
};
