import React from "react";
import {TouchableOpacity, TouchableNativeFeedback, Platform, View, StyleSheet} from "react-native";
import {THEME} from "../../theme";
import {TextBold} from "./TextBold";

export const AppButton = ({children, onPress, color = THEME.MAIN_COLOR}) => {
    const Container = Platform.OS === "android"? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Container onPress={onPress} activeOpacity={0.8}>
            <View style={{...styles.button, backgroundColor: color}}>
                <TextBold style={styles.text}>
                    {children}
                </TextBold>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#ffffff"
    }
})