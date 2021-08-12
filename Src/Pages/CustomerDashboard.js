import React, { useState } from 'react';
import { View, Text,Dimensions } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';
import ProgressLoader from 'rn-progress-loader';
const height= Dimensions.get('window').height
const width= Dimensions.get('window').width


export default function customer({navigation,props}) {
    const [loader, setloader] = useState(false);
    let showparking =async () => { 
        navigation.navigate('ShowParking')
      
     };
  return (
    <View style={{  justifyContent: 'center',alignContent:'center',height:height,width:width }}>
          <ProgressLoader
          visible={loader}
          isModal={true} isHUD={true}
          hudColor={"#00b7ce"}
          color={"#FFFFFF"} ></ProgressLoader>
       
      <Button buttontext={'Show Parking'} press={()=>showparking()}/> 
    </View>
  );
}
