import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {THEME} from "../theme";

export const Navbar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{"Todo App"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 30,
        backgroundColor: THEME.MAIN_COLOR
    },
    header: {
        fontSize: 20,
        fontWeight: "700",
        color: "#ffffff"
    }
})