import { useState, useEffect, useMemo } from "react";
import { View, Modal, KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getTheme } from "../../tools/getTheme";
import getStyles from "./registerAttendeeComponentStyles";
import InputComponent from "../UI/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../UI/ButtonComponent";
import { registerAttendee } from "../../store/actions/AppActions";
import Text from "../TextComponent";
import { useForm, Controller } from "react-hook-form";
import { storageGetItem } from "../../tools/secureStore";
import SecondaryButtonComponent from "../UI/SecondaryButtonComponent";
import { filterObject } from "../../tools/validations";

export default RegisterAttendeeComponent = ({
  laneId,
  showModal,
  setShowModal,
}) => {
  const dispatch = useDispatch();
  const theme = getTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const confirm = () => {
    const attendee = filterObject({
      first_name: getValues().firstName,
      last_name: getValues().lastName,
      organization: getValues().companyName,
      email: getValues().emailAddress,
      mobile_phone: getValues().phoneNumber,
    });

    if (Object.keys(errors).length < 1) {
      dispatch(registerAttendee(laneId, attendee));
      reset();
      setShowModal(false);
    }
  };

  return (
    <Modal visible={showModal} transparent={true} animationType={"fade"}>
      <View style={{ ...styles.modal }}>
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
          <View style={{ ...styles.modalContent }}>
            <View style={styles.form}>
              <Text bold stylesProp={styles.modalTitle}>
                Set up attendee's account
              </Text>

              <Controller
                control={control}
                name="firstName"
                render={({ field: { onChange, value, onBlur } }) => (
                  <InputComponent
                    error={errors?.firstName}
                    errorMessage={errors?.firstName?.message ?? ""}
                    handleChange={(val) => onChange(val)}
                    onBlur={onBlur}
                    value={value}
                    label={"First name*"}
                    stylesProp={{ input: styles.input, label: styles.label }}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: "Field is required!",
                  },
                }}
              />

              <Controller
                control={control}
                name="lastName"
                render={({ field: { onChange, value, onBlur } }) => (
                  <InputComponent
                    error={errors?.lastName}
                    errorMessage={errors?.lastName?.message ?? ""}
                    handleChange={(val) => onChange(val)}
                    onBlur={onBlur}
                    value={value}
                    label={"Last name*"}
                    stylesProp={{ input: styles.input, label: styles.label }}
                  />
                )}
              />

              <Controller
                control={control}
                name="companyName"
                render={({ field: { onChange, value, onBlur } }) => (
                  <InputComponent
                    error={errors?.companyName}
                    errorMessage={errors?.companyName?.message}
                    handleChange={(val) => onChange(val)}
                    onBlur={onBlur}
                    value={value}
                    label={"Organization"}
                    stylesProp={{ input: styles.input, label: styles.label }}
                  />
                )}
              />

              <Controller
                control={control}
                name="emailAddress"
                render={({ field: { onChange, value, onBlur } }) => (
                  <InputComponent
                    error={errors?.emailAddress}
                    errorMessage={errors?.emailAddress?.message}
                    handleChange={(val) => onChange(val)}
                    onBlur={onBlur}
                    value={value}
                    label={"Email address"}
                    stylesProp={{ input: styles.input, label: styles.label }}
                  />
                )}
              />

              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { onChange, value, onBlur } }) => (
                  <InputComponent
                    error={errors?.phoneNumber}
                    errorMessage={errors?.phoneNumber?.message}
                    handleChange={(val) => onChange(val)}
                    onBlur={onBlur}
                    value={value}
                    label={"Phone number"}
                    stylesProp={{ input: styles.input, label: styles.label }}
                  />
                )}
              />

              <View style={styles.actionsContainer}>
                <SecondaryButtonComponent
                  label={"Cancel"}
                  stylesProp={{
                    button: styles.cancelBtn,
                    label: styles.cancelBtnLabel,
                  }}
                  handlePress={() => {
                    setShowModal(false);
                  }}
                />
                <ButtonComponent
                  handlePress={handleSubmit(confirm)}
                  label={"Confirm"}
                  stylesProp={{
                    button: styles.confirmBtn,
                    label: styles.confirmBtnLabel,
                  }}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};
