import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Styles } from '@/constants/Styles';

export default function Discover() {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={Styles.titleText}>Discover</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({})