import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeworkDropdown from "../components/HomeworkComp/HomeworkDropdown";
import AppLayout from "../components/Layout/AppLayout";

const Homework = () => {
  return (
    <View>
      <HomeworkDropdown />
      <AppLayout></AppLayout>
    </View>
  );
};

export default Homework;

const styles = StyleSheet.create({});
