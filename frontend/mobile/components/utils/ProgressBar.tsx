// ProgressBar.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
      <Text>
        {step} / {totalSteps}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 0,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#76c7c0",
  },
});

export default ProgressBar;
