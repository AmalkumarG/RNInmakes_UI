import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class f2 extends Component {
  render() {
    return (
      <View>
        <View style={styles.view_One}>
          <Image source={require('./images/inmakes_icon.jpg')} />
          <View style={styles.View_text}>
            <Text style={styles.one_text}>Verification code</Text>
            <Text style={{marginTop: 10}}>
              {' '}
              Please type the verification code sent to
            </Text>
            <Text></Text>
          </View>
        </View>

        <View style={styles.View_two}>
          <View style={styles.input_view}>
            <TextInput style={styles.inputField} maxLength={1} />
            <TextInput style={styles.inputField} maxLength={1} />
            <TextInput style={styles.inputField} maxLength={1} />
            <TextInput style={styles.inputField} maxLength={1} />
            <TextInput style={styles.inputField} maxLength={1} />
            <TextInput style={styles.inputField} maxLength={1} />
          </View>
          <TouchableHighlight style={styles.button} onPress={()=>this.props.navigation.navigate('page3')}>
            <Text style={{color: 'black'}}>Resent OTP</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view_One: {
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View_text: {marginTop: 5, alignItems: 'center'},
  one_text: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  View_two: {
    backgroundColor: '#05071a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    height: '40%',
    elevation: 20,
  },
  inputField: {
    backgroundColor: 'white',
    width: 40,
    marginTop: 30,
    marginRight: 10,
    borderRadius: 10,
  },
  input_view: {flexDirection: 'row'},
  button: {
    height: 40,
    width: '72%',
    backgroundColor: '#5ce65e',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
