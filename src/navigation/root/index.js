/* app's root navigation container */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from '../stack';
import { useDispatch, useSelector } from 'react-redux';

function RootNav() {
  return (
    <NavigationContainer>
        <StackNav />
    </NavigationContainer>
  );
}

export default RootNav