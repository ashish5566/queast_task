import React, { useState } from 'react';
import { View, Text,Dimensions } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../components/TextField';
import Button from '../components/Button';
import Dropdown from '../components/CustomDropdown/dropdown'
import ProgressLoader from 'rn-progress-loader';
const height= Dimensions.get('window').height
const width= Dimensions.get('window').width


export default function login({navigation,props}) {
    const [Type, setType] = useState('');
    const [Mobile, setMobile] = useState('');
    const [loader, setloader] = useState(false);
    let handleOrangeClick =async () => { 
        if(Mobile.trim()==''&&Type.trim()=='')
        {
            alert('Please fill all details')
        }else{
            setloader(true)
            var a=  await AsyncStorage.getItem('user')
            console.log('user data : ',a)
            if(a==null)
            {
                alert('Please Signup first')  
                setloader(false)    
            }else{
                var b = JSON.parse(a)
                // console.log('login data : ',b.includes((item)=>Mobile))
                var c = b.filter((item)=>{
                    return item.mobile==Mobile&&item.type==Type
                })
                console.log('filter login : ',c)
                if(c.length==1)
                {
                    await AsyncStorage.removeItem('user_active')
                    await AsyncStorage.setItem('user_active',JSON.stringify(c[0]))
                    // alert('Login Sucessful '+Type)
                    if(Type=="Customer")
                    {
                        navigation.navigate('Customer')
                    }else{
                        navigation.navigate('Owner')
                    }
                 }else{
                    alert('Incorrect Detail')
                 }
               setloader(false)
                
          
        }
     
    }};
  return (
    <View style={{  justifyContent: 'center',alignContent:'center',height:height,width:width }}>
          <ProgressLoader
          visible={loader}
          isModal={true} isHUD={true}
          hudColor={"#00b7ce"}
          color={"#FFFFFF"} ></ProgressLoader>
      <Dropdown
      data={[{value:'Customer',label:'Customer'},{value:'Owner',label:'Owner'}]}
      onChangeText={value => setType(value)}
      />
      <Input label={'Mobile'} placeholder={'Enter Mobile'} value={Mobile} onChangeText={(value)=>{setMobile(value)}}/>
      <Button buttontext={'SUBMIT'} press={()=>handleOrangeClick()}/>
      <Text onPress={()=>{navigation.navigate('Sign')}} style={{width:width-10,textDecorationLine:'underline',marginTop:10}}>Sign Up</Text>
    </View>
  );
}
