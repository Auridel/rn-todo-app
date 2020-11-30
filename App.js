import React, {useState} from 'react';
import {AppLoading} from "expo";
import * as Font from "expo-font";
import {MainLayout} from "./src/MainLayout";
import {ScreenState} from "./src/context/screen/ScreenState";
import {TodoState} from "./src/context/todo/TodoState";


async function loadFonts() {
    await Font.loadAsync({
        "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
        "lato-bold": require("./assets/fonts/Lato-Bold.ttf")
    })
}

export default function App() {
    const [ready, setReady] = useState(false);

    if(!ready) return <AppLoading startAsync={loadFonts}
                                  onFinish={() => setReady(true)}
                                  onError={(e) => console.log(e)}
                                  />

    return (
        <ScreenState>
            <TodoState>
                <MainLayout/>
            </TodoState>
        </ScreenState>
    );
}


