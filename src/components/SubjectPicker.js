import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SvgBiologyIcon, SvgPhysicsIcon, SvgGeographyIcon, SvgHistoryIcon, SvgMathIcon, SvgPortugueseIcon, SvgChemistryIcon } from "../../assets/svg/icons/SvgSubjectIcons";


const subjects = [
    { id: 1, name: "Biologia", icon: <SvgBiologyIcon />, color: "#69C972" },
    { id: 2, name: "Física", icon: <SvgPhysicsIcon />, color: "#8C9BEB" },
    { id: 3, name: "Geografia", icon: <SvgGeographyIcon />, color: "#70C8FA" },
    { id: 4, name: "História", icon: <SvgHistoryIcon />, color: "#A68B63" },
    { id: 5, name: "Matemática", icon: <SvgMathIcon />, color: "#F2D981" },
    { id: 6, name: "Português", icon: <SvgPortugueseIcon />, color: "#FF7676" },
    { id: 7, name: "Química", icon: <SvgChemistryIcon />, color: "#E5E5E5" },
  ];


const SubjectGrid = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  console.warn(selectedSubjects)

  const selectSubject = (subjectId) => {
    const isSelected = selectedSubjects.includes(subjectId);
    if (isSelected) {
      setSelectedSubjects(selectedSubjects.filter((id) => id !== subjectId));
    } else {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    }
  };

  return subjects.map((subject) => (
    <View style={style.container}>
        <TouchableOpacity
        key={subject.id}
        style={[style.subjectbutton, { backgroundColor: subject.color },
            selectedSubjects.includes(subject.id) && { borderColor: "#000", borderWidth: 2 },
        ]}
        onPress={() => selectSubject(subject.id)}
        >
        <View style={style.subjectIcon}>{subject.icon}</View>
        <Text style={style.subjectText}>{subject.name}</Text>
        </TouchableOpacity>
    </View>
  ));
};

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: 120,
    },
});

export default SubjectGrid;
