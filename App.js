import React from "react";
import { View, Text } from "react-native";
import { theme } from "./src/util/theme";

function App() {
    return(
        <View>
            <Text style={{fontFamily: theme.REGULAR_FONTS}}>Lets get started!!</Text>
        </View>
    )
}

export default App