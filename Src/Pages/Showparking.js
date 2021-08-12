import React, { useState , useEffect } from 'react';
import { View, Text,Dimensions, ScrollView } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../components/TextField';
import Button from '../components/Button';
import Dropdown from '../components/CustomDropdown/dropdown'
import ProgressLoader from 'rn-progress-loader';
const height= Dimensions.get('window').height
const width= Dimensions.get('window').width


export default function showparking({navigation,props}) {
    const [Data, setData] = useState([]);
    const [UserData, setUserData] = useState({});
    const [loader, setloader] = useState(false);
    useEffect(async() => {
        // setloader(true)
        var a=  await AsyncStorage.getItem('parking')
        var b=  await AsyncStorage.getItem('user_active')
        setUserData(b)
            console.log('user data : ',a)
            console.log('user_active data : ',b)
            if(a!=null)
             {
                var b = JSON.parse(a)
                setData(b)
            }
        //    await setloader(false)   
      });

      let addparking =async () => { 
        navigation.navigate('AddParking')
      
     };
   
  return (
    <View style={{  justifyContent: 'center',alignItems:'center',height:height,width:width }}>
          <ProgressLoader
          visible={loader}
          isModal={true} isHUD={true}
          hudColor={"#00b7ce"}
          color={"#FFFFFF"} ></ProgressLoader>

          <ScrollView>
          {Data.map((item,index)=>{
              return(
                  <View style={{borderWidth:1,width:width-20,padding:10}}>
                      <Text>{'Name : '}{item.name}</Text>
                      <Text>{'State : '}{item.state}</Text>
                      <Text>{'City : '}{item.city}</Text>
                      <Text>{'Address : '}{item.mobile}</Text>
                      {UserData[0].type!="Customer"&& <Button buttontext={'Edit Parking'} press={()=>addparking()}/> }
                      {UserData[0].type!="Customer"&& <Button buttontext={'Delete Parking'} press={()=>addparking()}/> }
                  </View>
              )
          })}
          </ScrollView>
      
    </View>
  );
}
