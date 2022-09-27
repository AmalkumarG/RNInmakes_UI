import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component ,useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  ScrollView,
  FlatList,
  StatusBar,TextInput
} from 'react-native';
import BioTittles from "./bioTittles"
import Icons from 'react-native-vector-icons/Feather';
import Feathericons from 'react-native-vector-icons/Feather';
import FontAwsmicons from 'react-native-vector-icons/FontAwesome';

export default bioClass=()=>{
return(
  <View style={styles.container}>
  
   <View style={styles.card}>
      
        <Image style={{height:200,width:"100%"}} source={require("./images/teache.jpg")}/>
        
       <View style={{flexDirection:"row",marginTop:10,borderBottomColor:"green",borderBottomWidth:1,backgroundColor:"#1e3020",justifyContent:"space-evenly"}}>
           <Text style={{fontSize:15,color:"white"}}>Long chapter name can be shown here</Text>
           <Icons name="download" size={30} style={{marginLeft:10,color:"white"}} />

       </View>

        
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <View style={styles.chapters}>
               <Icons name="skip-back" size={12} color="white" style={styles.icon1}/>
               <Text style={{color:"white",marginLeft:5}}>previous</Text>

          </View>
          <View style={styles.chapters}>
               <Icons name="disc" size={12} color="white" style={styles.icon1}/>
               <Text style={{color:"white",marginLeft:5}}>page 1</Text>

          </View>
        <View style={styles.chapters}>
               <Icons name="skip-forward" size={12} color="white" style={styles.icon1}/>
               <Text style={{color:"white",marginLeft:5}}>next</Text>

          </View>
        
        
        </View>
          
          

        
        
        
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-evenly",top:"80%",borderWidth:1,borderRadius:8,width:"80%",borderRightWidth:0,height:70,backgroundColor:"#b5bdb6"}}>
         <TextInput placeholder="ask a questions" ></TextInput>
         <TouchableHighlight style={{width:70,height:70,borderRadius:10,justifyContent:"center",alignItems:"center",elevation:10,backgroundColor:"white",marginLeft:60}}>
         <Text style={{}}>Post</Text>
         </TouchableHighlight>
        </View>
         <TouchableHighlight style={{width:"80%",height:70,borderRadius:10,justifyContent:"center",alignItems:"center",elevation:30,backgroundColor:"#1e3020",top:"40%",borderColor:"#5de366",borderWidth:1}}>
         <View style={{flexDirection:"row",justifyContent:"center"}}>
         <FontAwsmicons name="whatsapp" size={25} color="#5de366" />
         <Text style={{fontSize:18,color:"#5de366",marginLeft:5}}>Chat with teacher</Text>
         </View>
         
         </TouchableHighlight>
        
  </View>
)
}

const styles=StyleSheet.create({container:{flex:1,alignItems:"center",backgroundColor:"#1e3020"},
  cards:{width:"100%",borderWidth:1,justifyContent:"center",alignItems:"center",backgroundColor:"#dfe8e0"},
  card:{height:300,width:"100%",elevation:20,margin:10,backgroundColor:"#1e3020",borderRadius:10},
  chapters:{flexDirection:"row",alignItems:"center",justifyContent:"center",margin:10,color:"white"

  },
})