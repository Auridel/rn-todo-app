import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {THEME} from "../theme";
import {TextBold} from "./ui/TextBold";

export const Navbar = () => {
    return (
        <View style={styles.container}>
            <TextBold style={styles.header}>{"Todo App"}</TextBold>
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
        color: "#ffffff"
    }
})