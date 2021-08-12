import * as React from 'react';
import { View, Text ,TextInput,Dimensions, TouchableOpacity} from 'react-native'; 
const height= Dimensions.get('window').height
const width= Dimensions.get('window').width
export default function button(props) {
  return (
    <View style={{ alignItems: 'center',marginTop:10 }}> 
      <TouchableOpacity onPress={()=>props.press()} style={{ width:width-10,height:50,borderWidth:1,backgroundColor:'red',alignItems:'center',justifyContent:'center',borderRadius:10}}>
          <Text>{props.buttontext}</Text>
      </TouchableOpacity>
    </View>
  );
}
