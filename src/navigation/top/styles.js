import { StyleSheet } from "react-native";
import { size, type, weight } from "../../theme/fonts";

const styles = StyleSheet.create({
    labelStyle: {
        paddingHorizontal: 10,
        fontFamily: type.regular,
        fontSize: size.font18,
        //lineHeight: 21.78,
        fontWeight: weight.mid,
        color: 'rgba(0, 0, 0, 0.55)',
        textTransform: 'capitalize',
    },
    scanButton: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        elevation: 7
    }
})

export default styles