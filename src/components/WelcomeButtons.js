import React, { Fragment } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("StudentLogin")}>
                <Text style={styles.buttonText}>Sou aluno</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonTeacher]} onPress={() => props.navigation.navigate("StudentLogin")}>
                <Text style={[styles.buttonText, styles.buttonTextTeacher]}>Sou professor</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },

    button: {
        backgroundColor: '#097969',
        height: 40,
        width: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    button: {
        backgroundColor: '#F5F5F5',
        height: 40,
        width: "100%",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 6,
    },

    buttonTeacher: {
        backgroundColor: "#006BFF",
        borderWidth: 1,
        borderColor: "#F5F5F5"

    },

    buttonText: {
        fontSize: 16,
        fontFamily: "Montserrat-SemiBold",
        color: '#006BFF',
    },

    buttonTextTeacher: {
        color: '#F5F5F5',
    },
})