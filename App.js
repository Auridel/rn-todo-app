import React, {useState} from 'react';
import {View} from "react-native";
import {AppLoading} from "expo";
import * as Font from "expo-font";
import {MainScreen} from "./src/screens/MainScreen";
import {Navbar} from "./src/components/Navbar";

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
          <View>
            <Navbar/>
            <MainScreen/>
          </View>
        );
    }


