// Component made so we can show View based on Platform IOS/Android because of status bar.
import React, { useMemo } from "react";
import {
  View,
  SafeAreaView,
  Platform,
  Pressable,
  Keyboard,
  ImageBackground,
} from "react-native";
import getStyles from "./wrapperComponentStyles";
import { getTheme } from "../../tools/getTheme";
import { StatusBar } from "expo-status-bar";

export default WrapperComponent = ({ children }) => {
  const theme = getTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  const platform = Platform.OS;
  const render =
    platform === "ios" ? (
      <SafeAreaView style={styles.iosWrapper}>
        <StatusBar />
        {children}
      </SafeAreaView>
    ) : (
      <View style={styles.androidWrapper}>{children}</View>
    );

  return render;
};
