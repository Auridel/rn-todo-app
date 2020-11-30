import React, {useState, useEffect, useContext} from "react";
import {View, StyleSheet, FlatList, Dimensions} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {THEME} from "../theme";
import {Navbar} from "../components/Navbar";
import {ScreenContext} from "../context/screen/ScreenContext";

export const MainScreen = () => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get("window").width - THEME.PADDING_HORIZONTAL);
    const {changeScreen} = useContext(ScreenContext);

    useEffect(() => {
        const updateWidth = () => {
            const width = Dimensions.get("window").width - THEME.PADDING_HORIZONTAL;
            setDeviceWidth(width);
        }
        Dimensions.addEventListener("change", updateWidth);
        return () => {
            Dimensions.removeEventListener("change", updateWidth);
        }
    })

    const todos = [
        {id: "1", title: "Learn React"}, {id: "2", title: "Buy bread"}
    ]

    return (
        <View>
            <Navbar/>
            <View style={{...styles.container, width: deviceWidth}} >
                <AddTodo/>
                <FlatList style={styles.list} keyExtractor={item => item.id.toString()} data={todos} renderItem={({item}) => <Todo todo={item} onOpen={changeScreen}/>}/>
            </View>
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