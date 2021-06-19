import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';


export default class Read extends React.Component {

  render() {
    return (
      <View style={{ backgroundColor: 'crimson', margin: 0, height: 700 }}>
        <Text style={{textAlign:'center', fontSize:20}}> Read Story </Text>
      </View>
    );
  }
}
