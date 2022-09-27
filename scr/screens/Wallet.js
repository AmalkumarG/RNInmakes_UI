import React,{Component} from "react";
import {View,Text,StyleSheet} from 'react-native'

export default class Wallet extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.profiletext}>abcd </Text>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
    },
    profiletext:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }
})