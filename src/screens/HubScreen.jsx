/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import Navbar from '../components/Navbar';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { timer } from '../assets';
import { hubData } from '../constants/dummyData';
import { useNavigation } from '@react-navigation/native';

const RenderItem = ({data}) => {

  const navigation = useNavigation();
  const { id, image, title, coachName, time } = data;

  return(
    <Pressable 
    onPress={()=>navigation.navigate('hubdetail')}
    style={{
      // borderWidth:1, 
      paddingVertical: HEIGHT*0.02,
      height:HEIGHT*0.24, paddingHorizontal:HEIGHT*0.035,alignItems:'center', 
      borderBottomWidth: 0.7,
      borderColor: '#DBDBDB',
      flexDirection:'row'}}>
      <Image 
      style={{height:HEIGHT*0.17,width:WIDTH*0.3}}
      source={image}
    />
    <View style={{
      // borderWidth:1,
      height: HEIGHT*0.2,
      width:WIDTH*0.65,
      marginLeft: WIDTH*0.005,
      paddingHorizontal: WIDTH*0.05
    }}>
      <Text style={{
        // borderWidth: 1,
        height:HEIGHT*0.08,
        fontSize:HEIGHT*0.03, 
        marginTop: HEIGHT*0.018,
        lineHeight: HEIGHT*0.04,
        fontWeight: 400,
        letterSpacing: WIDTH*0.0025,
        color: '#000000',
      }}>{title}</Text>
      <Text style={{color:'grey',marginTop: HEIGHT*0.01}}>{coachName}</Text>
      <View style={{flexDirection: 'row',marginTop: HEIGHT*0.015,
        alignItems: 'center',
      }}>
      <Image 
      style={{
        height: HEIGHT*0.022,
        width: HEIGHT*0.022,
      }}
      source={timer}/>
      <Text style={{color:'grey',marginLeft: WIDTH*0.02}}>{time}</Text>
      </View>
    </View>
    </Pressable>
  )
}

const HubScreen = () => {
  return (
    <>
    <Navbar heading="The Hub"/>
    <View 
    style={{
      // borderWidth:1,
      height:HEIGHT,
    }}>
     <FlatList 
     style={{marginBottom: HEIGHT*0.1}}
     showsVerticalScrollIndicator={false}
     data={hubData}
     renderItem={({item}) => <RenderItem data={item}/>} 
     keyExtractor={item => item.id}
     />
    </View>
    </>
  )
}

export default HubScreen
