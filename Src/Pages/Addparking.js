import React, { useState } from 'react';
import { View, Text,Dimensions } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../components/TextField';
import Button from '../components/Button';
import ProgressLoader from 'rn-progress-loader';
const height= Dimensions.get('window').height
const width= Dimensions.get('window').width


export default function addparking({navigation,props}) {
    const [Name, setName] = useState('');
    const [Mobile, setMobile] = useState('');
    const [State, setState] = useState('');
    const [City, setCity] = useState('');
    const [loader, setloader] = useState(false);

      let handleOrangeClick =async () => {
          if(Name.trim()==''&&Mobile.trim()==''&&State.trim()==''&&City.trim()=='')
          {
              alert('Please fill all details')
          }else{
              setloader(true)
            var a=  await AsyncStorage.getItem('parking')
            if(a==null)
            {var b =[{ name:Name, mobile:Mobile, state:State, city:City }]
            await AsyncStorage.setItem('parking',JSON.stringify(b))
            setloader(false)
            navigation.pop()
      
            }else{
                var b = JSON.parse(a)
            //    console.log('yes : ', b.includes((item)=>item.mobile))
            var c = b.filter((item)=>{
                return item.mobile==Mobile&&item.state==State&&item.city==City
            })
            console.log('filter : ',c)
            
            if(c.length==0)
            {
               b.push({ name:Name, mobile:Mobile, state:State, city:City })
                await AsyncStorage.setItem('parking',JSON.stringify(b))
                setloader(false)
                navigation.pop()
            }else{
                setloader(false)
                alert('Parking already exist')
            }
            setloader(false)
            
            }
          }
          
    //   var a=  await AsyncStorage.getItem('parking')
        console.log('data async',a)
        console.log('data all',Name)
        console.log('data all',Mobile)
        console.log('data all',State)
        console.log('data all',City)
        // AsyncStorage.setItem('user')
      };
  return (
    <View style={{  justifyContent: 'center',alignContent:'center',height:height,width:width }}>
        <ProgressLoader
          visible={loader}
          isModal={true} isHUD={true}
          hudColor={"#00b7ce"}
          color={"#FFFFFF"} ></ProgressLoader>
      
      <Input label={'Name'} placeholder={'Enter Parking Name'} value={Name} onChangeText={(value)=>{setName(value)}}/>
      <Input label={'Parking Address'} placeholder={'Enter Parking Address'} value={Mobile} onChangeText={(value)=>{setMobile(value)}}/>
      <Input label={'State'} placeholder={'Enter State'} value={State} onChangeText={(value)=>{setState(value)}}/>
      <Input label={'City'} placeholder={'Enter City'} value={City} onChangeText={(value)=>{setCity(value)}}/>
      <Button buttontext={'SUBMIT'} press={()=>handleOrangeClick()}/>
      </View>
  );
}
