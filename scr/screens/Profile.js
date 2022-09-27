import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import FontAwsmicons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{height:'40%',backgroundColor:'black',width:'100%'}}/>
        <ScrollView style={styles.scrollstyle}>
          <View style={styles.view2}>
            <FontAwsmicons name="user-circle" size={50} style={styles.ccolor} />

            <View style={{ marginLeft: 80 }}>
              <Text>Aaron taylor</Text>
              <Text style={{ marginTop: 30 }}>ID : 1234</Text>
            </View>
          </View>
          <Text style={{ marginTop: 30 }}>Personal Info</Text>
          <Text style={{ marginTop: 30, marginBottom: 30 }}>
            Account Settings
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>Email</Text>
            <Text style={{ marginLeft: 49, marginBottom: 30 }}>
              Aarontaylor@gmail.com
            </Text>
          </View>

          <Text style={{ marginBottom: 30, fontWeight: 'bold' }}>
            Course info
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginBottom: 30 }}>Course info</Text>
            <Text style={styles.courseinfo}>Inmakes edu</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginBottom: 30 }}>Course </Text>
            <Text style={styles.courseinfo}>Plus two science</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginBottom: 30 }}>Payment status</Text>
            <Text style={styles.courseinfo}>fee</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginBottom: 30 }}>Expiry Date</Text>
            <Text style={styles.courseinfo}>Not applicable</Text>
          </View>
          <TouchableHighlight style={styles.paymentButton}>
            <View style={styles.paymentView}>
              <MaterialIcons
                name="payment"
                size={20}
                style={{ marginLeft: 5 }}
              />
              <Text style={{ marginLeft: 10 }}>Custom payment</Text>
              <MaterialIcons
                name="arrow-right"
                size={20}
                style={{ marginLeft: 80 }}
              />
              
            </View>
          </TouchableHighlight>
           <TouchableHighlight style={styles.paymentButton}>
            <View style={styles.paymentView}>
              <MaterialIcons
                name="payment"
                size={20}
                style={{ marginLeft: 5 }}
              />
              <Text style={{ marginLeft: 10 }}>Custom payment</Text>
              <MaterialIcons
                name="arrow-right"
                size={20}
                style={{ marginLeft: 80 }}
              />
              
            </View>
          </TouchableHighlight>

        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: 'white',
  },
  profiletext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  view2: {
    flexDirection: 'row',
    width: '80%',
  },
  scrollstyle: {
    padding: 10,
    backgroundColor: '#fff',
    width: '80%',
    marginTop: 20,
    borderRadius: 20,
    marginTop:'-70%',
    elevation:20
  },
  courseinfo: { marginLeft: 80 },
  paymentView: { flexDirection: 'row' },
  paymentButton: {
    backgroundColor: '#34eb46',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
    width: '100%',
    marginBottom:30
  },
});
