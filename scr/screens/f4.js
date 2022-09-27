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

import {Picker} from '@react-native-picker/picker';
export default class f4 extends Component {
  constructor() {
    super();
    this.state = {vall1: '', vall2: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewone}>
          <Image source={require('./images/inmakes_icon.jpg')} />
          <View style={styles.View_text}>
            <Text style={styles.one_text}>Select your school board</Text>
            <Text></Text>
          </View>
        </View>
        <View style={styles.View_two}>
          <Picker
            maxLength={100}
            style={styles.size}
            selectedValue={this.state.vall1}
            onValueChange={item => {
              this.setState({vall1: item});
            }}>
            <Picker.Item label="select board" value={'Select board'} />
            <Picker.Item label="CBSE" value={'CBSE'} />
            <Picker.Item label="State" value={'State'} />
            <Picker.Item label="ICSE" value={'ICSE'} />
          </Picker>
          <Picker
            style={styles.size}
            selectedValue={this.state.vall2}
            onValueChange={item => {
              this.setState({vall2: item});
            }}>
            <Picker.Item label="select class" value={'select class'} />
            <Picker.Item label="one" value={'one'} />
            <Picker.Item label="two" value={'two'} />
            <Picker.Item label="three" value={'three'} />
            <Picker.Item label="four" value={'four'} />
          </Picker>
          <TouchableHighlight style={styles.button} onPress={()=>this.props.navigation.navigate('Tour')}>
            <Text>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1},
  viewone: {
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View_text: {marginTop: 90, alignItems: 'center'},

  one_text: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  View_two: {
    backgroundColor: '#05071a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    height: '30%',
    elevation: 20,
    justifyContent: 'space-evenly',
  },
  input: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    backgroundColor: '#347547',
    elevation: 10,
    opacity: 0.5,
  },
  size: {
    height: 50,
    width: '80%',
    backgroundColor: '#347547',
    borderRadius: 50,
    color: 'white',
    opacity: 0.5,
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
});
