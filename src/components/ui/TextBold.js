import React from "react";
import {StyleSheet, Text} from "react-native";

export const TextBold = props => <Text style={{...styles.text, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
    text: {
        fontFamily: "lato-bold"
    }
})