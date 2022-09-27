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
  StatusBar
} from 'react-native';
import BioTittles from "./bioTittles"
import Icons from 'react-native-vector-icons/Feather';
import Feathericons from 'react-native-vector-icons/Feather';
import FontAwsmicons from 'react-native-vector-icons/FontAwesome';

import tittles from "./tittles"

export default BioVideo =({navigation})=>{
  const [active,setActive]=useState()
    return(
     <View style={styles.container}>
      <View style={styles.vone}>
      <Icons name="chevron-left" size={20} color="#289e35" style={{position:"absolute",top:30,left:10,borderWidth:1,borderColor:"#289e35"}}/>
      <Text style={{fontSize:40,position:"absolute",top:10,fontWeight:"bold",color:"white"}}>Biology</Text>
      <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginTop:40}}>Long chapter name can be shown here</Text>
      <View style={{flexDirection:"row"}}>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="white" style={styles.icon1}/>
               <Text style={{color:"white",marginLeft:5}}>12 chapters</Text>

          </View>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="white" style={styles.icon1}/>
               <Text style={{color:"white",marginLeft:5}}>12 chapters</Text>

          </View>

        </View>
        <View style={{flexDirection:"row",top:20}}>
      {
      tittles.tittles.map(({name})=>(
        <BioTittles name={name} active={active} setActive={setActive}/>
      ))
      
      }
      </View>
      
      </View>
      <ScrollView>
      <View style={styles.cards}>
       <View style={styles.card} onpress={()=>navigation.navigate("bioclass")}>
      
        <Image style={{height:200,width:"100%"}} source={require("./images/teache.jpg")}/>
         <TouchableHighlight style={{backgroundColor:"#16ab20",position:"absolute",right:5,width:"40%",height:40,borderRadius:10,elevation:20,justifyContent:"center",alignItems:"center"}} onPress={()=>navigation.navigate("bioclass")}>
       <Text style={{fontWeight:"bold",fontSize:20}}>Biology</Text>
       </TouchableHighlight>
                <Text style={{fontSize:20}}>Long chapter name can be shown here</Text>

        <View style={{flexDirection:"row"}}>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>

        </View>
        
        
        </View>
         <View style={styles.card}>
         <Image style={{height:200,width:"100%"}} source={require("./images/teache.jpg")}/>
         <TouchableHighlight style={{backgroundColor:"#16ab20",position:"absolute",right:5,width:"40%",height:40,borderRadius:10,elevation:20,justifyContent:"center",alignItems:"center"}}>
       <Text style={{fontWeight:"bold",fontSize:20}}>Biology</Text>
       </TouchableHighlight>
                <Text style={{fontSize:20}}>Long chapter name can be shown here</Text>

        <View style={{flexDirection:"row"}}>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>

        </View>
        
        
        </View>
         <View style={styles.card}>
         <Image style={{height:200,width:"100%"}} source={require("./images/teache.jpg")}/>
         <TouchableHighlight style={{backgroundColor:"#16ab20",position:"absolute",right:5,width:"40%",height:40,borderRadius:10,elevation:20,justifyContent:"center",alignItems:"center"}}>
       <Text style={{fontWeight:"bold",fontSize:20}}>Biology</Text>
       </TouchableHighlight>
                <Text style={{fontSize:20}}>Long chapter name can be shown here</Text>

        <View style={{flexDirection:"row"}}>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>

        </View>
        
        
        </View>
         <View style={styles.card}>
         <Image style={{height:200,width:"100%"}} source={require("./images/teache.jpg")}/>
         <TouchableHighlight style={{backgroundColor:"#16ab20",position:"absolute",right:5,width:"40%",height:40,borderRadius:10,elevation:20,justifyContent:"center",alignItems:"center"}}>
       <Text style={{fontWeight:"bold",fontSize:20}}>Biology</Text>
       </TouchableHighlight>
                <Text style={{fontSize:20}}>Long chapter name can be shown here</Text>

        <View style={{flexDirection:"row"}}>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>

        </View>
        
        
        </View>
         <View style={styles.card}>
         <Image style={{height:200,width:"100%"}} source={require("./images/teache.jpg")}/>
         <TouchableHighlight style={{backgroundColor:"#16ab20",position:"absolute",right:5,width:"40%",height:40,borderRadius:10,elevation:20,justifyContent:"center",alignItems:"center"}}>
       <Text style={{fontWeight:"bold",fontSize:20}}>Biology</Text>
       </TouchableHighlight>
                <Text style={{fontSize:20}}>Long chapter name can be shown here</Text>

        <View style={{flexDirection:"row"}}>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>

        </View>
        
        
        </View>
         <View style={styles.card}>
         <Image style={{height:200,width:"100%"}} source={require("./images/teache.jpg")}/>
         <TouchableHighlight style={{backgroundColor:"#16ab20",position:"absolute",right:5,width:"40%",height:40,borderRadius:10,elevation:20,justifyContent:"center",alignItems:"center"}}>
       <Text style={{fontWeight:"bold",fontSize:20}}>Biology</Text>
       </TouchableHighlight>
                <Text style={{fontSize:20}}>Long chapter name can be shown here</Text>

        <View style={{flexDirection:"row"}}>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>

        </View>
        
        
        </View>
      </View>
       
      </ScrollView>
     
     </View>
    )
  
}
const styles=StyleSheet.create({
  //  vone:{backgroundColor:"#1e3020",height:1000,width:"100%",position:"absolute",alignItems:"center",}
   
  chapters:{flexDirection:"row",alignItems:"center",justifyContent:"center",margin:10

  },
  
  container:{flex:1,},
  vone:{backgroundColor:"#1e3020",height:"35%",width:"100%",position:"relative",alignItems:"center",justifyContent:"center"}
  ,cards:{width:"100%",borderWidth:1,justifyContent:"center",alignItems:"center",backgroundColor:"#dfe8e0"},
  card:{height:300,width:"90%",elevation:20,justifyContent:"center",alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10},
  chapters:{flexDirection:"row",alignItems:"center",justifyContent:"center",margin:10

  },
  icon1:{opacity:.8}
  
})


