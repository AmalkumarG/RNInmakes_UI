/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  createMaterialBottomTabNavigator,

} from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import Help from './scr/screens/Help';
import Profile from './scr/screens/Profile';
import Wallet from './scr/screens/Wallet';
import Records from './scr/screens/Records';
import Refund from './scr/screens/Refund';
import Settings from './scr/screens/Settings';
import f1 from './scr/screens/f1';
import f2 from './scr/screens/f2';
import f3 from './scr/screens/f3';
import f4 from './scr/screens/f4';
import Biology from "./scr/screens/biology"
import mainpage from './scr/screens/mainpage';
import Drawercont from './scr/screens/drawercont';
import BioVideo from "./scr/screens/BioVideo"
import bioClass from "./scr/screens/bioclass"
import Tour from "./scr/screens/Tour"
import Tour1 from "./scr/screens/Tour1"
import Tour2 from "./scr/screens/Tour2"

const Stack = createStackNavigator();
const Drawernv = createDrawerNavigator();
const toptab = createMaterialBottomTabNavigator();

function Mystack() {
  return (
    <Stack.Navigator>
    
      <Stack.Screen
        name="page1"
        component={f1}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="abc"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="page2"
        component={f2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="page3"
        component={f3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="page4"
        component={f4}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Tour"
        component={Tour}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tour1"
        component={Tour1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tour2"
        component={Tour2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="mainpage"
        component={mainpage}
        options={{ tittle: 'inmakes' }}
      />

      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="tab1" component={mytab} />
        <Stack.Screen
        name="Biology"
        component={Biology}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="biovideo"
        component={BioVideo}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="bioclass"
        component={bioClass}
        options={{ headerShown: false }}
      />
     
    </Stack.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawernv.Navigator
      initialRouteName="mainpage"
      drawerContent={(props) => <Drawercont {...props} />}>
      <Drawernv.Screen
        name={'mainpage'}
        component={mytab}
        options={{ headerShown: false }}
      />
      <Drawernv.Screen name="help" component={Help} />
    </Drawernv.Navigator>
  );
}
function mytab() {
  return (
    <toptab.Navigator
      initialRouteName="mainpage"
      activeColor="green"
      labeled={true}
      barStyle={{
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 10,
        position: 'relative',
        marginTop: 5,
        padding: 5,
        bottom: 20,
      }}>
      <toptab.Screen
        name="home"
        component={mainpage}
        options={{
          tabBarIcon: () => <Icons name="home" size={25} color={'#23f50c'} />,
          headerShown: false,activeColor:"green"
        }}
      />
      <toptab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icons name="user-o" size={25} color={'#23f50c'}/>,
          headerShown: false,activeColor:"green"
        }}
      />
      <toptab.Screen
        name="Recent"
        component={Wallet}
        options={{
          tabBarIcon: () => <Icons name="play" size={25} color={'#23f50c'} />,
          headerShown: false,activeColor:"green",backgroundColor:"green"
        }}
      />
      <toptab.Screen
        name="Exam"
        component={Records}
        options={{
          tabBarIcon: () => <Ionicon name="reader-outline" size={25} color={'#23f50c'} />,
          headerShown: false,
        }}
      />
      <toptab.Screen
        name="Contact"
        component={Refund}
        options={{
          tabBarIcon: () => <Ionicon name="mail" size={25} color={'#23f50c'}/>,
          headerShown: false,
        }}
      />
    </toptab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  );
}
