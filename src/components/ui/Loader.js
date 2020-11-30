import React from "react";
import {View, ActivityIndicator, StyleSheet} from "react-native";
import {THEME} from "../../theme";

export const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={THEME.MAIN_COLOR}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})