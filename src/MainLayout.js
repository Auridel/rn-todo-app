import React, {useCallback, useContext} from "react";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {ScreenContext} from "./context/screen/ScreenContext";
import {View, StyleSheet} from "react-native";
import {Navbar} from "./components/Navbar";
import {TodoContext} from "./context/todo/TodoContext";
import {Error} from "./components/ui/Error";

export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext);
    const {error, getTodos} = useContext(TodoContext);

    const reload = useCallback(async () => await getTodos, [getTodos]);

    if(error) return (
        <View style={styles.container}>
            <Error reload={reload}/>
        </View>
    )

    return (
        <View style={styles.container}>
            <Navbar/>
            {todoId? <TodoScreen/> : <MainScreen/>}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})