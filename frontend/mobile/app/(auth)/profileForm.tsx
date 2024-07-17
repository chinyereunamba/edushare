import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Form from "@/components/utils/Form";
import CustomButton from "@/components/utils/Button";

export default function Profile() {
  const [btnDisabled, setBtnDisabled] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Form
        inputList={[
          { name: "firstName", placeholder: "First Name", type: "text" },
          { name: "lastName", placeholder: "Last Name", type: "text" },
          { name: "institution", placeholder: "Institution", type: "text" },
          {
            name: ["level", "dob"],
            placeholder: ["Academic level", 'Date of Birth'],
            type: ["text", "text"],
            dualInput: true,
            style: { flex: 1 },
          },
          { name: "dob", placeholder: "Date of birth", type: "decimal" },
          { name: "faculty", placeholder: "Faculty", type: "text" },
          { name: "department", placeholder: "Department", type: "text" },
        ]}
        formType="profile"
        submitHandler={() => {}}
      />
      <CustomButton
        disabled={true}
        color=""
        bg=""
        title="Complete"
        fnc={() => {}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
