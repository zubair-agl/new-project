import React, { useEffect } from "react";
import RootNav from "./src/navigation/root";
import PushController from "./pushController";
import { useDispatch, useSelector } from "react-redux";
import { retrieveToken } from "./src/redux/actions";
import { ActivityIndicator, View } from "react-native"

function App() {

    const dispatch = useDispatch()
    const state = useSelector((state) => state.authReducer)

    useEffect(() => {
        console.log('state app', state.initialLoading)
        dispatch(retrieveToken())
    }, [])


    return (
        <>
            {
                state.initialLoading ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={'large'} />
                    </View>
                    :
                    <>
                        <RootNav />
                        <PushController />
                    </>
            }

        </>
    )
}

export default App


// import React, { Fragment } from 'react';
// import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, FlatList} from 'react-native';

// import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
// import PushController from './pushController';
// // Dummy data for list, we'll replace this with data received from push
// let pushData = [
//   {
//     title: "First push",
//     message: "First push message"
//   },
//   {
//     title: "Second push",
//     message: "Second push message"
//   }
// ]

// _renderItem = ({ item }) => (
//   <View key={item.title}>
//     <Text style={styles.title}>{item.title}</Text>
//     <Text style={styles.message}>{item.message}</Text>
//   </View>
// );

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           <View style={styles.listHeader}>
//             <Text>Push Notifications</Text>
//           </View>
//           <View style={styles.body}>
//             <FlatList
//               data={pushData}
//               renderItem={(item ) => this._renderItem(item)}
//               keyExtractor={(item ) => item.title}
//             />
//             {/* <LearnMoreLinks /> */}
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//       <PushController />
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {backgroundColor: Colors.lighter,},
//   listHeader:{ backgroundColor: '#eee', color: "#222", height: 44, padding: 12},
//   title:{fontSize: 18, fontWeight: 'bold', paddingTop: 10},
//   message:{ fontSize: 14, paddingBottom: 15, borderBottomColor: "#ccc", borderBottomWidth: 1},
//   engine: { position: 'absolute', right: 0,},
//   body: { backgroundColor: Colors.white, paddingHorizontal: 20, paddingVertical: 10, },
//   sectionContainer: { marginTop: 32, paddingHorizontal: 24, },
//   sectionTitle: { fontSize: 24, fontWeight: '600', color: Colors.black},
//   sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: '400', color: Colors.dark,},
//   highlight: { fontWeight: '700'},
//   footer: { color: Colors.dark, fontSize: 12, fontWeight: '600', padding: 4, paddingRight: 12, textAlign: 'right',},
// });

// export default App;