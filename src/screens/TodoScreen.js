import React, {useContext, useState} from "react";
import {View, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {ScreenContext} from "../context/screen/ScreenContext";
import {TextRegular} from "../components/ui/TextRegular";
import {AppButton} from "../components/ui/AppButton";
import {THEME} from "../theme";
import {TodoContext} from "../context/todo/TodoContext";
import {EditTodo} from "../components/EditTodo";

export const TodoScreen = () => {
    const {todoId, changeScreen} = useContext(ScreenContext);
    const {todos, deleteTodo} = useContext(TodoContext);

    const todo = todos.find(t => t.id === todoId)

    const [modal, setModal] = useState(false);

    return (
        <View style={styles.container}>
            <EditTodo visible={modal} trigger={setModal} value={todo.title}/>

            <View style={styles.todo}>
                <TextRegular style={styles.title}>{todo.title}</TextRegular>
                <AppButton>
                    <AntDesign name="edit" size={24} color="#ffffff" />
                </AppButton>
            </View>
            <View style={styles.buttons}>
                <AppButton onPress={() => changeScreen(null)} color={THEME.GREY_COLOR} text={{color: "black"}}>
                    <AntDesign name="back" size={24} color="black"/>Back
                </AppButton>
                <AppButton color={THEME.RED_COLOR} onPress={() => deleteTodo(todoId)}>
                    <AntDesign name="delete" size={24} color="#ffffff" />Delete
                </AppButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 20
    },
    todo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 30,
        width: "80%",
        marginBottom: 20,
        elevation: 5,
        borderRadius: 12,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 15,
        shadowOpacity: 0.3,
        backgroundColor: "#ffffff"
    },
    buttons: {
        width: "100%",
        paddingHorizontal: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        marginRight: 20,
        fontSize: 18
    }
})