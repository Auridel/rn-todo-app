import React, {useState} from "react";
import {Alert, Modal, TextInput, View, StyleSheet} from "react-native";
import {AppButton} from "./ui/AppButton";
import {THEME} from "../theme";

export const EditTodo = ({visible, title, onSave, trigger}) => {
    const [value, setValue] = useState(title)

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
        >
            <View style={styles.wrapper}>
                <View style={styles.textContainer}>
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={text => setValue(text)}
                    />
                </View>
                <View style={styles.buttons}>
                    <AppButton
                        color={THEME.GREY_COLOR}
                        onPress={() => {
                        setValue(title);
                        trigger(false);
                    }}>Cancel</AppButton>
                    <AppButton onPress={() => {
                        if(value.trim().length > 2){
                            onSave(value);
                        }else {
                            Alert.alert("Error!", `Min length is 3 characters? now it's ${value.trim().length}!`);
                        }
                    }}>Save</AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        paddingHorizontal: 40,
        paddingVertical: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        fontSize: 18,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        borderStyle: "solid",
        marginBottom: 20
    },
    buttons: {
        width: "80%",
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})