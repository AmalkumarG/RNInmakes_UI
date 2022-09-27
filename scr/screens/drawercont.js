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
export default class Drawercont extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewone}>
         <FontAwsmicons name="user-circle" size={70} color="white" style={styles.ccolor} />
         <View>
          <Text style={{color:"white",fontSize:20}}>Aron Taylor</Text>
          <Text style={{color:"white"}}>ID:1234</Text>
         </View>
        </View>
        <Text
          style={styles.links}
          onPress={() => this.props.navigation.navigate('abc')}>
          <FontAwsmicons
            name="square-o"
            color={'#23f50c'}
            size={24}
            style={styles.iconmarg}
          />{' '}
          Exam Corner
        </Text>
        <Text style={styles.links}>
          <FontAwsmicons
            name="square-o"
            color={'#23f50c'}
            size={24}
            style={styles.iconmarg}
          />{' '}
          Subscription
        </Text>
        <Text style={styles.links}>
          <FontAwsmicons
            name="square-o"
            color={'#23f50c'}
            size={24}
            style={styles.iconmarg}
          />{' '}
          Analytic{' '}
        </Text>
        <Text style={styles.links}>
          <FontAwsmicons
            name="square-o"
            color={'#23f50c'}
            size={24}
            style={styles.iconmarg}
          />{' '}
          Downloads
        </Text>
        <Text style={styles.links}>
          <FontAwsmicons
            name="square-o"
            color={'#23f50c'}
            size={24}
            style={styles.iconmarg}
          />{' '}
          Notifications
        </Text>
        <Text style={styles.links}>
          <FontAwsmicons
            name="square-o"
            color={'#23f50c'}
            size={24}
            style={styles.iconmarg}
          />{' '}
          Referrals
        </Text>
        <Text style={styles.links}>
          <FontAwsmicons
            name="square-o"
            color={'#23f50c'}
            size={24}
            style={styles.iconmarg}
          />{' '}
          Share app
        </Text>
        <Text style={styles.links2}>
          <FontAwsmicons
            name="square-o"
            color={'#23f50c'}
            size={24}
            style={styles.iconmarg}
          />{' '}
          Logout
        </Text>
        <TouchableHighlight style={styles.enquire}>
          <Text style={styles.txcolor}>Enquire now</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121a13' },
  viewone: { height: '30%', backgroundColor: '#121a13',flexDirection:"row" ,alignItems:"center"},
  links: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 15,
    color: 'white',
    borderBottomWidth: 0.182,
    borderColor: 'grey',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 15,
  },
  iconmarg: { marginRight: -10 },
  enquire: {
    height: 40,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#23f50c',
    borderWidth: 1,
    marginLeft: '25%',
    marginTop: '20%',
    color: '23f50c',
    borderRadius: 10,
  },
  txcolor: { color: '#23f50c' },
  ccolor:{margin:30,borderRadius:40,borderColor:"#23f50c",alignItems:"center",justifyContent:"center"},  links2: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 15,
    color: 'red',
    borderBottomWidth: 0.182,
    borderColor: 'grey',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 15,
  },
});
