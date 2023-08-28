import { StyleSheet } from 'react-native'
import { metrics } from '../../theme/metrics';
import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomViewStyle: {
        height: 0,
        flex: 0
    },
    topViewStyle: {
        height: 0,
        flex: 0
    },
    flashContainer: {
        position: 'absolute',
        alignSelf: 'flex-start',
        left: metrics.screenWidth * 0.05,
        top: metrics.screenHeight * 0.05
    },
    moreVerContainer: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: metrics.screenWidth * 0.05,
        top: metrics.screenHeight * 0.05
    },
    closeIconContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: metrics.screenHeight * 0.05
    },
    flashIcon: {
        height: 24,
        width: 24,
        tintColor: colors.secondary
    }
});

export default styles