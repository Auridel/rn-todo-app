import React, {useState} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {THEME} from "../theme";
import {AppButton} from "./ui/AppButton";
import {AntDesign} from "@expo/vector-icons";

export const AddTodo = () => {
    const [value, setValue] = useState("");

    return (
        <View style={styles.addTodo}>
            <TextInput
                value={value}
                onChangeText={text => setValue(text)}
                style={styles.input} placeholder="Enter todo"/>
            <AppButton>
                <AntDesign name="plus" size={16} color="#ffffff" />AddTodo
            </AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    addTodo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        marginBottom: 20
    },
    input: {
        width: "60%",
        padding: 10,
        marginRight: 20,
        borderBottomWidth: 2,
        borderStyle: "solid",
        borderBottomColor: THEME.MAIN_COLOR
    },
    icon: {
        paddingRight: 25
    }
})