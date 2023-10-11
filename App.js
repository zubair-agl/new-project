import React, {useEffect} from 'react';
import RootNav from './src/navigation/root';
import PushController from './pushController';
import {useDispatch, useSelector} from 'react-redux';

import {ActivityIndicator, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {retrieveToken} from './src/redux/actions/authActions';

function App() {
  // const dispatch = useDispatch()
  // const state = useSelector((state) => state.authReducer)

  // useEffect(() => {

  //     console.log('state app', state.initialLoading)
  //     dispatch(retrieveToken())
  // }, [])

  return (
    // <>
    //     {
    //         state.initialLoading ?
    //             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //                 <ActivityIndicator size={'large'} />
    //             </View>
    //             :
    //             <>
    //                 <RootNav />
    //             </>
    //     }
    //     <PushController />

    // </>
    <RootNav />
  );
}

export default App;
