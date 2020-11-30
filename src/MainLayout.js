import React, {useContext} from "react";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {ScreenContext} from "./context/screen/ScreenContext";
import {View} from "react-native";
import {Navbar} from "./components/Navbar";

export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext);

    return (
        <View>
            <Navbar/>
            {todoId? <TodoScreen/> : <MainScreen/>}
        </View>

    )
}