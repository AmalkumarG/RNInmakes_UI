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

export default class Biology extends Component{
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.vone}>
      <Icons name="chevron-left" size={20} color="#289e35" style={{position:"absolute",top:30,left:10,borderWidth:1,borderColor:"#289e35"}}/>
      <Text style={{fontSize:40,fontWeight:"bold",color:"white"}}>Biology</Text>
      <View style={{flexDirection:"row"}}>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="#289e35" style={styles.icon1}/>
               <Text style={{color:"#289e35"}}>12 chapters</Text>

          </View>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="#289e35" style={styles.icon1}/>
               <Text style={{color:"#289e35"}}>12 chapters</Text>

          </View>

        </View>
      
      </View>
      <ScrollView>
      <View style={styles.cards}>
      <TouchableHighlight onPress={()=>this.props.navigation.navigate("biovideo")}>
       <View style={styles.card}  >
      
        <Text style={{fontSize:20}}>Long chapter name can be shown here</Text>
        
        <View style={{flexDirection:"row"}}>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}  />
               <Text>12 chapters</Text>

          </View>
          <View style={styles.chapters}>
               <Icons name="disc" size={15} color="grey" style={styles.icon1}/>
               <Text>12 chapters</Text>

          </View>

        </View>
        
        
        </View>
       </TouchableHighlight>
         
       
         <View style={styles.card}>
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
}
const styles=StyleSheet.create({
  container:{flex:1,},
  vone:{backgroundColor:"#1e3020",height:"35%",width:"100%",position:"relative",alignItems:"center",justifyContent:"center"}
  ,cards:{width:"100%",borderWidth:1,justifyContent:"center",alignItems:"center",backgroundColor:"#dfe8e0"},
  card:{height:100,width:"90%",elevation:20,justifyContent:"center",alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10},
  chapters:{flexDirection:"row",alignItems:"center",justifyContent:"center",margin:10

  },
  icon1:{opacity:.8}
})