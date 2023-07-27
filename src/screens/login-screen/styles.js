import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { size, type, weight } from "../../theme/fonts";
import { metrics } from "../../theme/metrics";

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    formContainer: {
        flex: 2,
        backgroundColor: colors.secondary,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headContainer: {
        flex: 1,
    },
    heading: {
        fontFamily: type.regular,
        fontSize: size.font50,
        fontWeight: weight.semi,
        lineHeight: 65,
        color: colors.secondary,
    },
    headingLayout: {
        marginTop: metrics.screenHeight*0.05,
        marginLeft: 20
    },
    formLayout: {
        width: metrics.screenWidth*0.8
    },
    emoticon: {
        fontSize: size.font24,
    }
})

export default styles