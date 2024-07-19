import { StyleSheet, View, Text } from "react-native";
import InputField, { Props } from "./InputField";

type FormProps = {
  inputFields: Props[];
};
const Form = ({ inputFields }: FormProps) => {
  return (
    <View style={styles.formContainer}>
      {inputFields.map((input, index) => {
        return (
          <View key={index}>
            <InputField
              label={input.label}
              inputMode={input.inputMode}
              keyboardType={input.keyboardType}
              maxLength={input.maxLength}
              placeholder={input.placeholder}
              secureEntry={input.secureEntry}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Form;
const styles = StyleSheet.create({
  formContainer: {
    gap: 18,
  },
  
  passwordIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 12,
    top: 15,
  },
});
