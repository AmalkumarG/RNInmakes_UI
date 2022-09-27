import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default class f3 extends Component {
  constructor() {
    super();
    this.state = {vall: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view_One}>
          <Image source={require('./images/inmakes_icon.jpg')} />
          <View style={styles.View_text}>
            <Text style={styles.one_text}>Student details</Text>
            <Text></Text>
          </View>
        </View>
        <View style={styles.View_two}>
          <TextInput
            style={styles.input}
            placeholder="   full name" 
            placeholderTextColor={'white'}
          />
          <TextInput
            style={styles.input}
            placeholder="   email"
            placeholderTextColor={'white'}
          />
          <Picker
            style={styles.size}
            selectedValue={this.state.vall}
            onValueChange={item => {
              this.setState({vall: item});
            }}>
            <Picker.Item label="select state" value={'jjjjj'} />
            <Picker.Item label="one" value={'one'} />
            <Picker.Item label="two" value={'two'} />
            <Picker.Item label="three" value={'three'} />
            <Picker.Item label="four" value={'four'} />
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="   pincode"
            placeholderTextColor={'white'}
          />

          <TouchableHighlight style={styles.button} onPress={()=>this.props.navigation.navigate('page4')}>
            <Text>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1},
  view_One: {
    height: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View_text: {marginTop: 20, alignItems: 'center'},
  one_text: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  View_two: {
    backgroundColor: '#05071a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    height: '50%',
    elevation: 20,
    justifyContent: 'space-evenly',
  },
  input: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    backgroundColor: '#347547',
    elevation: 10,
    opacity: 0.5,textAlign:'justify'
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#5ce65e',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  size: {
    height: 50,
    width: '80%',
    backgroundColor: '#347547',
    borderRadius: 50,
    color: 'white',
    opacity: 0.5,
  },
});
