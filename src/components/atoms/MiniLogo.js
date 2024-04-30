import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import SvgBookIcon from "../../../assets/svg/icons/SvgBookIcon"; // Certifique-se de importar o ícone corretamente
import AtomicText from "./AtomicText";

export default () => {
  return (
    <View style={style.container}>
      <AtomicText fontFamily='Montserrat-Bold' fontSize={28} color='#F5F5F5'>Pi Tesla</AtomicText>
      <SvgBookIcon style={style.bookIcon} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});
