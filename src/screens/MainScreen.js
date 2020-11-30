import React from "react";
import {View, StyleSheet} from "react-native";
import {AddTodo} from "../components/AddTodo";

export const MainScreen = () => {
    return (
        <View style={styles.container}>
            <AddTodo/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
})