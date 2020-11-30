import React from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";
import {THEME} from "../theme";

export const AddTodo = () => {
    return (
        <View style={styles.addTodo}>
            <TextInput style={styles.input} placeholder="Enter todo"/>
            <Button title={"Add Todo"} />
        </View>
    )
}

const styles = StyleSheet.create({
    addTodo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    input: {
        width: "60%",
        padding: 10,
        marginRight: 20,
        borderBottomWidth: 2,
        borderStyle: "solid",
        borderBottomColor: THEME.MAIN_COLOR
    }
})