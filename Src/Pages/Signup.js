import React, { useState } from 'react';
import { View, Text,Dimensions, ScrollView } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../components/TextField';
import Button from '../components/Button';
import Dropdown from '../components/CustomDropdown/dropdown'
import ProgressLoader from 'rn-progress-loader';
const height= Dimensions.get('window').height
const width= Dimensions.get('window').width


export default function signup({navigation,props}) {
    const [Type, setType] = useState('');
    const [Name, setName] = useState('');
    const [Mobile, setMobile] = useState('');
    const [State, setState] = useState('');
    const [City, setCity] = useState('');
    const [loader, setloader] = useState(false);
     

      let handleOrangeClick =async () => {
        // await AsyncStorage.removeItem('user')
        // // navigation.reset('Login')
        // console.log('props data : ',props)
        // return;
        if(Name.trim()==''||Mobile.trim()==''||State.trim()==''||City.trim()==''||Type.trim()=='')
        {
            alert('Please fill all details')
        }else{
            setloader(true)
            var a=  await AsyncStorage.getItem('user')
            if(a==null)
            {var b =[{ name:Name, mobile:Mobile, state:State, city:City, type:Type }]
            await AsyncStorage.setItem('user',JSON.stringify(b))
            setloader(false)
            navigation.navigate('Login')
      
            }else{
                var b = JSON.parse(a)
            //    console.log('yes : ', b.includes((item)=>item.mobile))
            var c = b.filter((item)=>{
                return item.mobile==Mobile&&item.type==Type
            })
            console.log('filter : ',c)
            
            if(c.length==0)
            {
               b.push({ name:Name, mobile:Mobile, state:State, city:City, type:Type })
                await AsyncStorage.setItem('user',JSON.stringify(b))
                setloader(false)
                navigation.navigate('Login')
            }else{
                setloader(false)
                alert('Mobile already exist')
            }
            setloader(false)
            
            }
        }
      
      };
  return (
    <View style={{  justifyContent: 'center',alignContent:'center',height:height,width:width }}>
        <ProgressLoader
          visible={loader}
          isModal={true} isHUD={true}
          hudColor={"#00b7ce"}
          color={"#FFFFFF"} ></ProgressLoader>
<ScrollView>
<Dropdown
      data={[{value:'Customer',label:'Customer'},{value:'Owner',label:'Owner'}]}
      onChangeText={value => setType(value)}
      />
      <Input label={'Name'} placeholder={'Enter Name'} value={Name} onChangeText={(value)=>{setName(value)}}/>
      <Input label={'Mobile'} placeholder={'Enter Mobile'} value={Mobile} onChangeText={(value)=>{setMobile(value)}}/>
      <Input label={'State'} placeholder={'Enter State'} value={State} onChangeText={(value)=>{setState(value)}}/>
      <Input label={'City'} placeholder={'Enter City'} value={City} onChangeText={(value)=>{setCity(value)}}/>
      <Button buttontext={'SUBMIT'} press={()=>handleOrangeClick()}/>
      <Text onPress={()=>{navigation.navigate('Login')}} style={{width:width-10,textDecorationLine:'underline',marginTop:10}}>Login</Text>
</ScrollView>
    </View>
  );
}
