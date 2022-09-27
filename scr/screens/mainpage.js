import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
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

import Icons from 'react-native-vector-icons/FontAwesome';
import Feathericons from 'react-native-vector-icons/Feather';
import FontAwsmicons from 'react-native-vector-icons/FontAwesome';

export default class mainpage extends Component {
  constructor() {
    super();
    this.state = {
      val: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewone}>
          <Feathericons
            name="sidebar"
            size={30}
            style={styles.drawericon}
            color={'#23f50c'}
            onPress={() => this.props.navigation.openDrawer('Drawer')}
          />
          <Image
            source={require('./images/inmakes_icon.jpg')}
            style={styles.image}
          />

          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttext}>
              <FontAwsmicons name="circle" style={styles.ccolor} />
              Classes
            </Text>
          </TouchableHighlight>
        </View>
        <ScrollView>
         <View style={styles.viewtwo}>
          <Text style={styles.t1}>Goodmorning</Text>
          <Text style={styles.t2}>Aaron Taylor</Text>
          <ImageBackground
            source={require('./images/pickerbg.jpg')}
            style={styles.imagebg1}>
            <Text style={{ color: 'white' }}>class</Text>
            <Picker
              style={styles.pick}
              selectedValue={this.state.val}
              onValueChange={(value) => this.setState({ val: value })}>
              <Picker.Item label="select class" value={'Select class'} />
              <Picker.Item label="7" value={'7'} />
              <Picker.Item label="8" value={'8'} />
              <Picker.Item label="9" value={'9'} />
              <Picker.Item label="10" value={'10'}>
                agjahs
              </Picker.Item>
            </Picker>
          </ImageBackground>
        </View>
        <Text style={{ textAlign: 'center', height: 40, marginTop: 15 }}>
          Recent courses
        </Text>
        <View style={styles.scroll}>
          <ScrollView horizontal={true}>
            <TouchableHighlight style={styles.button2} onPress={()=>this.props.navigation.navigate("Biology")}>
              <Text style={styles.buttext}>
                <FontAwsmicons name="circle" style={styles.ccolor} />
                Biology
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button2}>
              <Text style={styles.buttext}>
                <FontAwsmicons name="circle" style={styles.ccolor} />
                Chem
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button2}>
              <Text style={styles.buttext}>
                <FontAwsmicons name="circle" style={styles.ccolor} />
                Physics
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button2}>
              <Text style={styles.buttext}>
                <FontAwsmicons name="circle" style={styles.ccolor} />
                It
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button2}>
              <Text style={styles.buttext}>
                <FontAwsmicons name="circle" style={styles.ccolor} />
                Maths
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button2}>
              <Text style={styles.buttext}>
                <FontAwsmicons name="circle" style={styles.ccolor} />
                English
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button2}>
              <Text style={styles.buttext}>
                <FontAwsmicons name="circle" style={styles.ccolor} />
                Hindi
              </Text>
            </TouchableHighlight>
          </ScrollView>
        </View>

        <ScrollView horizontal={true} style={{height:200}} >
          <ImageBackground
            source={require('./images/videobg.jpg')}
            style={styles.cards}>
            <FontAwsmicons
              name="play-circle"
              style={styles.playbut}
              size={24}
            />
          </ImageBackground>
          <ImageBackground
            source={require('./images/videobg.jpg')}
            style={styles.cards}>
            <FontAwsmicons
              name="play-circle"
              style={styles.playbut}
              size={24}
            />
          </ImageBackground>
          <ImageBackground
            source={require('./images/videobg.jpg')}
            style={styles.cards}>
            <FontAwsmicons
              name="play-circle"
              style={styles.playbut}
              size={24}
            />
          </ImageBackground>
          <ImageBackground
            source={require('./images/videobg.jpg')}
            style={styles.cards}>
            <FontAwsmicons
              name="play-circle"
              style={styles.playbut}
              size={24}
            />
          </ImageBackground>
          <ImageBackground
            source={require('./images/videobg.jpg')}
            style={styles.cards}>
            <FontAwsmicons
              name="play-circle"
              style={styles.playbut}
              size={24}
            />
          </ImageBackground>
        </ScrollView>
        <ScrollView horizontal={true} style={{padding:10}} >
        <View style={styles.card}>
        <View>

        <FontAwsmicons name="user-circle" size={60} />
        <Text style={{marginTop:15,color:"white",fontSize:25,fontWeight:"bold"}}>Inmakes live classes</Text>
        <Text style={{color:"white",fontSize:18,opacity:.6,marginTop:10}}>Live classes by best teachers from learning hub to claer your doubt and individual attention</Text>
        
        <TouchableHighlight style={styles.button12}>
        <Text style={{fontSize:18}}>Book your free class</Text>
        </TouchableHighlight>
        </View>
        
        </View>
          <View style={styles.card}>
        <View>

        <FontAwsmicons name="user-circle" size={60} />
        <Text style={{marginTop:15,color:"white",fontSize:25,fontWeight:"bold"}}>Inmakes live classes</Text>
        <Text style={{color:"white",fontSize:18,opacity:.6,marginTop:10}}>Live classes by best teachers from learning hub to claer your doubt and individual attention</Text>
        
        <TouchableHighlight style={styles.button12}>
        <Text style={{fontSize:18}}>Book your free class</Text>
        </TouchableHighlight>
        </View>
        
        </View>
          <View style={styles.card}>
        <View>

        <FontAwsmicons name="user-circle" size={60} />
        <Text style={{marginTop:15,color:"white",fontSize:25,fontWeight:"bold"}}>Inmakes live classes</Text>
        <Text style={{color:"white",fontSize:18,opacity:.6,marginTop:10}}>Live classes by best teachers from learning hub to claer your doubt and individual attention</Text>
        
        <TouchableHighlight style={styles.button12}>
        <Text style={{fontSize:18}}>Book your free class</Text>
        </TouchableHighlight>
        </View>
        
        </View>
          <View style={styles.card}>
        <View>

        <FontAwsmicons name="user-circle" size={60} />
        <Text style={{marginTop:15,color:"white",fontSize:25,fontWeight:"bold"}}>Inmakes live classes</Text>
        <Text style={{color:"white",fontSize:18,opacity:.6,marginTop:10}}>Live classes by best teachers from learning hub to claer your doubt and individual attention</Text>
        
        <TouchableHighlight style={styles.button12}>
        <Text style={{fontSize:18}}>Book your free class</Text>
        </TouchableHighlight>
        </View>
        
        </View>
        
        </ScrollView>
        </ScrollView>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  viewone: {
    height: '15%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.182,
  },
  image: { height: '60%', marginLeft: 20, marginTop: 40 },
  t1: { color: 'black' },
  t2: { color: 'black', fontWeight: 'bold', fontSize: 40 },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 65,
    borderRadius: 5,
    borderColor: 'green',
    borderWidth: 1,
    height: 20,
    width: 60,
  },
  viewtwo: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imagebg1: { height: 70, width: '98%', marginLeft: 25, padding: 10 },
  pick: { color: 'white', marginTop: -10, width: '90%' },
  cardview: { backgroundColor: 'green' },
  cards: { height: 200, width: 200, marginLeft: 10, marginTop: 10, padding: 5 },
  playbut: { marginTop: 140, height: 30, width: 30 },
  drawericon: { marginTop: 60, marginLeft: 10 },
  scroll: { height: '5%' },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,

    borderRadius: 5,
    borderColor: 'green',
    borderWidth: 1,
    height: 30,
    width: 60,
  },
  buttext: { fontSize: 12 },
  ccolor: { color: '#23f50c' },
  card:{width:230,backgroundColor:"#0a2c38",borderRadius:20,padding:10,marginRight:10},
  button12:{backgroundColor:"#23f50c",width:"80%",height:70,justifyContent:"center",alignItems:"center",margin:30,borderRadius:10}
});
