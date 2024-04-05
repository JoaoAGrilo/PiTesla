import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SvgBiologyIcon, SvgPhysicsIcon, SvgGeographyIcon, SvgHistoryIcon, SvgMathIcon, SvgPortugueseIcon, SvgChemistryIcon } from "../../assets/svg/icons/SvgSubjectIcons";

const subjects = [
  { id: 1, name: "Biologia", icon: <SvgBiologyIcon />, color: "#69C972" },
  { id: 2, name: "Física", icon: <SvgPhysicsIcon />, color: "#8C9BEB" },
  { id: 3, name: "Geografia", icon: <SvgGeographyIcon />, color: "#E5E5E5" },
  { id: 4, name: "História", icon: <SvgHistoryIcon />, color: "#A68B63" },
  { id: 5, name: "Matemática", icon: <SvgMathIcon />, color: "#F2D981" },
  { id: 6, name: "Português", icon: <SvgPortugueseIcon />, color: "#FF7676" },
  { id: 7, name: "Química", icon: <SvgChemistryIcon />, color: "#E5E5E5" },
];

export default () => {
  return (
    <>
      <Text>Lista de matérias</Text>
      {subjects.map((subject) => (
        <View key={subject.id} style={{ backgroundColor: subject.color }}>
          {subject.icon}
          <Text>{subject.name}</Text>
        </View>
      ))}
    </>
  );
};

const style = StyleSheet.create({
    
})