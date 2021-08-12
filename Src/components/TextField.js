import * as React from 'react';
import { View, Text ,TextInput,Dimensions} from 'react-native'; 
const height= Dimensions.get('window').height
const width= Dimensions.get('window').width
export default function input(props) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ width:width-10}}>{props.label}</Text>
      <TextInput
      placeholder={props.placeholder}
      value={props.value}
      style={{height:60,width:width-10,borderWidth:1,marginTop:10,paddingLeft:5}}
      onChangeText={(value)=>{props.onChangeText(value)}}
      />
    </View>
  );
}
