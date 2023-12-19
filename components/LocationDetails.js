import React, { useMemo, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { getTheme } from "../tools/getTheme";
import { Feather } from "@expo/vector-icons";
import Text from "./TextComponent";
import { useDispatch } from "react-redux";

export default LocationDetails = ({ locationName }) => {
  const theme = getTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <View style={styles.location}>
      <View style={styles.locationCheckPoint}>
        <Feather name="home" size={24} style={styles.homeIcon} />
        <Text stylesProp={styles.locationCheckPointText}>{locationName}</Text>
      </View>
    </View>
  );
};

const getStyles = (theme) => {
  return StyleSheet.create({
    locationCheckPoint: {
      flexDirection: "row",
      alignItems: "center",
    },

    locationCheckPointText: {
      fontSize: 24,
      marginLeft: 12,
    },
  });
};
