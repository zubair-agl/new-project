import { StyleSheet } from 'react-native'
import { metrics } from '../../theme/metrics';

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
    }
});

export default styles