import React,{Component} from "react";
import {View,StyleSheet,Text,TouchableHighlight,ActivityIndicator,FlatList} from 'react-native'
import axios from "axios";

export default class firstpage extends Component{
    constructor(){
        super();
        this.state={loader:false,
        DATA: []}
    }
   
    // getdata(){
        // this.setState({loader:true})
        // fetch('https://api.sampleapis.com/switch/games')
        // .then((response)=>response.json())
        // .then((response)=>{
            // this.setState({loader:false})
            //  console.log(response)
            // if(response.length>0){
                // this.setState({
                    // DATA:response
                // })
            // }

        // })
        // .catch((error)=>{
            // this.setState({loader:false})
        // })
    // }
    getAxiosData(){
        axios.get('https://api.sampleapis.com/switch/games')
        .then((response)=>{
            console.log(response)
            if(response.length>0){
                this.setState({
                    DATA:response
                })
            }
             })
             .catch((error)=>{
                this.setState({loader:false})
            })
    }
  
    componentDidMount(){
        this.getAxiosData()
    }
    render(){
        const renderItem=({item})=>(
            <View style={styles.itemcontainer}>
                 <Text style={{color:'black'}}>Developer: {item.developers}</Text>
                 <Text style={{color:'black'}}>Genre: {item.genre}</Text>
                 <Text style={{color:'black'}}>ID: {item.id}</Text>
                 <Text style={{color:'black'}}>ReleaseDates: {item.releaseDates.Australia}</Text>

            </View>
        )
        return(
            <View style={styles.container} >
            <Text style={{fontWeight:'bold',color:'black',fontSize:50}}>GAMES</Text>
            <ActivityIndicator size="large" color={'black'} animating={this.state.loader}/>
            <FlatList style={{width:'95%'}} data={this.state.DATA} renderItem={renderItem} />
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('secondpage','Drawer')}>
                        <Text>click</Text>
                    </TouchableHighlight>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{backgroundColor:'green',width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}
,itemcontainer:{width:'100%',padding:10,backgroundColor:'grey',elevation:4,marginBottom:10}
})