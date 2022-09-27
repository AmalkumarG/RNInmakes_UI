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
  TouchableOpacity
} from 'react-native';
import FontAwsmicons from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather';

export default  BioTittles =({name,active,setActive})=>{
  
    return(
      <TouchableOpacity style={styles.tittle} key={name} onPress={()=>setActive(name)} >
      <Text style={styles.activitycat(active===name)}>{name}</Text>
      </TouchableOpacity>
    )
  
}

const styles=StyleSheet.create({tittle:{margin:10},
  activitycat:isActive=>({
      color:isActive?"white":"#65bd26",fontSize:isActive?20:18,fontWeight:"bold"
      
    })
    
  
})
