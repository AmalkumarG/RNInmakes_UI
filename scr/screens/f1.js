import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
} from 'react-native';
import Secondpage from './Secondpage';

export default class f1 extends Component {
  render() {
    return (
      <View style={styles.contaier}>
        <View style={styles.viewOne}>
          <Image
            source={require('./images/inmakes_icon.jpg')}
            style={styles.imagestyle}
          />
        </View>

        <View style={styles.textView}>
          <Text>Enter your mobile number</Text>
          <Text>We will sent an OTP to verify</Text>
        </View>
        <View style={styles.viewThird}>
          <View style={styles.viewTwo}>
            <TextInput style={styles.inputField1}>+91</TextInput>
            <TextInput
              placeholder="Phone number"
              style={styles.inputField} ></TextInput>
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('page2')}>
            <Text>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contaier: {flex: 1},
  viewOne: {
    height: '70%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTwo: {
    height: '30%',
    borderRadius: 30,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textView: {alignItems: 'center', height: 50, backgroundColor: 'white'},
  imagestyle: {height: 40},
  inputField: {
    borderWidth: 2,
    borderRadius: 10,
    width: '70%',
    marginLeft: 10,
    backgroundColor: 'white',
  },
  inputField1: {
    borderWidth: 2,
    borderRadius: 10,
    width: '10%',
    backgroundColor: 'white',
  },
  buttonView: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31324a',
  },
  button: {
    backgroundColor: '#5ce65e',
    height: 40,
    width: '72%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  viewThird: {
    width: '100%',
    height: '30%',
    backgroundColor: '#05071a',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
