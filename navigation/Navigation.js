import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { showLoader } from "../store/actions/UtilsActions";
import { getTheme } from "../tools/getTheme";
import ToasterComponent from "../components/ToasterComponent";
import LoaderComponent from "../components/LoaderComponent";
import MainScreen from "../screens/Main/MainScreen";
import { storageDeleteItem, storageSetItem } from "../tools/secureStore";
import * as SplashScreen from "expo-splash-screen";
import { setLocations } from "../store/actions/AppActions";

SplashScreen.preventAutoHideAsync();

export default Navigation = () => {
  const theme = getTheme();
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  const loader = useSelector((state) => state.utils.loader);

  const [isServerLoaded, setIsServerLoaded] = useState(false);

  const getServerFromAmazon = async () => {
    try {
      const url = `https://sfscon.s3.eu-central-1.amazonaws.com/opencon.json?x=${Math.round(
        Math.random() * 1
      )}`;
      const response = await fetch(url);
      const data = await response.json();
      await storageSetItem("server", data?.service_uri);
      dispatch(setLocations(data.printer_port_forwarding_uri_per_lane));
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsServerLoaded(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    getServerFromAmazon();
  }, []);

  if (!isServerLoaded) {
    return <LoaderComponent />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={MainScreen} name="Main" />
      </Stack.Navigator>
      <ToasterComponent />
    </NavigationContainer>
  );
};
