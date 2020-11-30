import React from "react";
import {View, StyleSheet} from "react-native";
import {THEME} from "../../theme";
import {TextRegular} from "./TextRegular";
import {AppButton} from "./AppButton";

export const Error = ({reload}) => {
    return (
        <View style={styles.container}>
            <TextRegular style={styles.text}>Something goes wrong...</TextRegular>
            <AppButton color={THEME.GREY_COLOR} onPress={reload}>Reload</AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: THEME.RED_COLOR,
        fontSize: 18,
        marginBottom: 10
    }
})