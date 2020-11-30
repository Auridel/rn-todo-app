import React, {useState, useEffect, useContext, useCallback} from "react";
import {View, StyleSheet, FlatList, Dimensions, Image} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {THEME} from "../theme";
import {ScreenContext} from "../context/screen/ScreenContext";
import {TodoContext} from "../context/todo/TodoContext";

export const MainScreen = () => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get("window").width - THEME.PADDING_HORIZONTAL);
    const {changeScreen} = useContext(ScreenContext);
    const {todos, addTodo, getTodos, deleteTodo} = useContext(TodoContext);

    const loadTodos = useCallback(async () => await getTodos(), [getTodos]);

    useEffect(() => {
        loadTodos();
    }, [])

    useEffect(() => {
        const updateWidth = () => {
            const width = Dimensions.get("window").width - THEME.PADDING_HORIZONTAL;
            setDeviceWidth(width);
        }
        Dimensions.addEventListener("change", updateWidth);
        return () => {
            Dimensions.removeEventListener("change", updateWidth);
        }
    }, [])


    return (
        <View style={{...styles.container, width: deviceWidth}} >
            <AddTodo addTodo={addTodo}/>
            {todos.length?
            <FlatList style={styles.list} keyExtractor={item => item.id.toString()} data={todos} renderItem={({item}) => <Todo todo={item} onOpen={changeScreen} onRemove={deleteTodo}/>}/>
                :
            <Image source={require("../../assets/empty.svg")}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30
    },
    list: {
        width: "100%"
    }
})