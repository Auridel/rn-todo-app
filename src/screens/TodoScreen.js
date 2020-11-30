import React, {useContext} from "react";
import {View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {ScreenContext} from "../context/screen/ScreenContext";
import {TextRegular} from "../components/ui/TextRegular";
import {AppButton} from "../components/ui/AppButton";
import {THEME} from "../theme";

export const TodoScreen = () => {
    const {todoId, changeScreen} = useContext(ScreenContext);

    return (
        <View>
            <View>
                <TextRegular>to do</TextRegular>
            </View>
            <View>
                <AppButton onPress={() => changeScreen(null)} color={THEME.GREY_COLOR} text={{color: "black"}}>
                    <AntDesign name="back" size={24} color="black"/>Back
                </AppButton>
                <AppButton color={THEME.RED_COLOR}>
                    <AntDesign name="delete" size={24} color="#ffffff" />Delete
                </AppButton>
            </View>
        </View>
    )
}