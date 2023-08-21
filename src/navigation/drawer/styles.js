import { StyleSheet } from "react-native";
import { size, type, weight } from "../../theme/fonts";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    notifHeaderTitle: {
        fontWeight: weight.mid,
        fontSize: size.font20,
        //lineHeight: 24.2,
        fontFamily: type.regular,
        color: colors.black,
        //padding: 20,
        width: '100%',
        textAlign: 'center'
    }
})

export default styles