import React, { useMemo } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { setPrinting, stopPrinting } from "../store/actions/AppActions";
import { getTheme } from "../tools/getTheme";
import Text from "./TextComponent";

export default UserPrintingLoader = ({ closeCamera }) => {
  const theme = getTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size="large"
          color={theme.primary ?? null}
          style={styles.spinner}
        />
        <Text stylesProp={styles.loaderTitle}>{`Printing ticket`}</Text>
      </View>
    </>
  );
};

const getStyles = (theme) => {
  return StyleSheet.create({
    loaderContainer: {
      position: "absolute",
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.8,
      zIndex: 50,
    },

    loaderTitle: {
      color: theme.primaryButtonTextColor,
      zIndex: 100,
      fontSize: 24,
      marginTop: 25,
      textAlign: "center",
      alignSelf: "center",
      borderColor: "#FFF",
      opacity: 1,
    },

    cancelBtn: {
      marginTop: 50,
    },

    cancelBtnText: {
      color: "#FFF",
      fontSize: 22,
      borderWidth: 1,
      borderColor: "#FFF",
      paddingVertical: 12,
      paddingHorizontal: 50,
      borderRadius: 20,
      zIndex: 100,
    },
  });
};
