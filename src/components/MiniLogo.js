import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import SvgBookIcon from "../../assets/svg/SvgBookIcon"; // Certifique-se de importar o ícone corretamente

export default () => {
  return (
    <View style={style.container}>
      <Text style={style.miniLogo}>Pi Tesla</Text>
      <SvgBookIcon style={style.bookIcon} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  miniLogo: {
    fontFamily: "Montserrat-Bold",
    fontSize: 28,
    color: "#F5F5F5",
    paddingLeft: "5%",
    marginRight: 5,
  },
});
