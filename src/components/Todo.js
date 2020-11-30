import React from "react";
import {TouchableOpacity, StyleSheet} from "react-native";
import {TextRegular} from "./ui/TextRegular";

export const Todo = ({todo, onOpen, onRemove}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
                onOpen(todo.id)
            }}
            style={styles.todo}>
            <TextRegular style={styles.text}>{todo.title}</TextRegular>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000000"
    },
    text: {
        fontSize: 18

    }
})