import React from "react";
import {Modal, TextInput, View} from "react-native";
import {AppButton} from "./ui/AppButton";

export const EditTodo = ({visible, value, onSave, trigger}) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
        >
            <View>
                <TextInput defaultValue={value}/>
            </View>
            <View>
                <AppButton>Cancel</AppButton>
                <AppButton>Save</AppButton>
            </View>
        </Modal>
    )
}