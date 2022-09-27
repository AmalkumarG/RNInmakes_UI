import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';
import FontAwsmicons from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather';

export default Tour1=({navigation})=>{
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#e1e3e1"}}>
    <Image source={require("./images/glass.jpg")} style={{height:400,width:"80%"}}/>
    <Text style={{fontSize:20,marginTop:30}}>App tour tittle</Text>
    <Text style={{marginTop:20}}>App description goes here </Text>
    <TouchableHighlight style={{backgroundColor:"#289e35",width:60,height:60,justifyContent:"center",alignItems:"center",marginTop:20,borderColor:"white",borderWidth:2}} onPress={()=>navigation.navigate("Tour2")}>
    <FontAwsmicons name="arrow-right" size={30} color="white"  />
    </TouchableHighlight>
    
    
    </View>
  )
}