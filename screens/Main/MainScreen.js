import React, { useMemo, useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { getTheme } from "../../tools/getTheme";
import { useDispatch, useSelector } from "react-redux";
import getStyles from "./mainScreenStyles";
import Text from "../../components/TextComponent";
import WrapperComponent from "../../components/Wrapper/WrapperComponent";
import HeaderComponent from "../../components/HeaderComponent";
import ButtonComponent from "../../components/UI/ButtonComponent";
import ShapeComponent from "../../components/ShapeComponent";
import AppVersionComponent from "../../components/AppVersionComponent";
import {
  unsetScanning,
  scanUser,
  setScannedLocation,
} from "../../store/actions/AppActions";
import { isValidUUID } from "../../tools/validations";
import LocationDetails from "../../components/LocationDetails";
import UserPrintingLoader from "../../components/UserPrintingLoader";

export default MainScreen = () => {
  const dispatch = useDispatch();
  const theme = getTheme();
  const cameraRef = useRef(null);
  const styles = useMemo(() => getStyles(theme), [theme]);

  const currentlyScannedUserTime = useSelector(
    (state) => state.app.currentlyScannedUserTime
  );
  const currentLocation = useSelector((state) => state.app.currentLocation);
  const currentlyScannedUser = useSelector(
    (state) => state.app.currentlyScannedUser
  );
  const locations = useSelector((state) => state.app.locations);
  const scanned = useSelector((state) => state.app.scanned);
  const printing = useSelector((state) => state.app.printing);

  const [camera, setCamera] = useState(null);
  const [headerTitle, setHeaderTitle] = useState("Choose your location");

  const getPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setCamera(true);
    } else {
      console.log("Permission denied");
    }
  };

  const barCodeScanned = ({ data }) => {
    if (!printing) {
      if (!isValidUUID(data)) {
        if (data === currentlyScannedUser) {
          if (
            currentlyScannedUserTime &&
            new Date().getTime() < currentlyScannedUserTime.getTime() + 10000
          )
            return;
        }
        dispatch(scanUser(locations[currentLocation?.id]?.url, data));
      } else {
        dispatch(
          setScannedLocation(data, () => {
            setCamera(false);
          })
        );
      }
    }
  };

  useEffect(() => {
    if (scanned) {
      setTimeout(() => {
        dispatch(unsetScanning());
      }, 300);
    }
  }, [scanned]);

  useEffect(() => {
    setCamera(false);
    setHeaderTitle(currentLocation?.name || "Choose your location");
  }, [currentLocation?.id]);

  return (
    <WrapperComponent>
      {printing ? <UserPrintingLoader closeCamera={setCamera} /> : null}

      {camera ? (
        <View style={styles.barCodeContainer}>
          <TouchableOpacity
            onPress={() => {
              setCamera(false);
            }}
            style={styles.closeBarCodeScannerButton}
          >
            <AntDesign
              name="close"
              size={28}
              style={styles.closeBarCodeScannerIcon}
            />
          </TouchableOpacity>

          <View style={styles.currentLocationInfo}>
            <LocationDetails
              locationName={currentLocation?.name || "Location not selected"}
            />
          </View>
          <Camera
            type={CameraType.back}
            ref={cameraRef}
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
            ratio={Platform.OS === "android" && "16:9"}
            onBarCodeScanned={scanned && !printing ? undefined : barCodeScanned}
            style={styles.barcodeScanner}
          />
        </View>
      ) : (
        <>
          <HeaderComponent title1={headerTitle || ""} />

          <View style={styles.main}>
            <ButtonComponent
              handlePress={() => {
                getPermissions();
              }}
              label={"Scan QR Code"}
              stylesProp={{
                button: { ...styles.button, ...styles.buttonPrimary },
                label: styles.buttonPrimaryText,
              }}
            />
          </View>
          <ShapeComponent />
          <AppVersionComponent />
        </>
      )}
    </WrapperComponent>
  );
};
