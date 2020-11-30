import React, {useState, useContext} from "react";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {ScreenContext} from "./context/screen/ScreenContext";
import {View} from "react-native";

export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext);

    return (
        <View>
            {!!todoId? <TodoScreen/> : <MainScreen/>}
        </View>

    )
}