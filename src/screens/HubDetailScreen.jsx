/* eslint-disable prettier/prettier */
import React from 'react'
import Navbar from '../components/Navbar'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { hubdetail, timer } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { useNavigation } from '@react-navigation/native'

const HubDetailScreen = () => {

  const navigation = useNavigation();

  return (
    <>
    <Navbar heading="The Hub"/>
    <View style={{
        justifyContent:'center',
        paddingTop: HEIGHT*0.02,
        // borderWidth:1,
        paddingHorizontal: WIDTH*0.025

    }}>
    <Image 
    style={{width: WIDTH*0.95, height: HEIGHT*0.29, borderRadius:HEIGHT*0.02}}
    source={hubdetail}
    />
    <View style={{
      // borderWidth:1,
        paddingHorizontal: WIDTH*0.025
    }}>
    <Text style={{
      fontSize: HEIGHT*0.026,
      marginTop: HEIGHT*0.02, 
      letterSpacing: WIDTH*0.002, 
      color: '#000000', 
      fontWeight:500
      }}>
        A Guide to Eating a Balanced Diet</Text>
    <View style={{ 
      flexDirection: 'row',
      marginTop: HEIGHT*0.04, justifyContent:'space-between'
      }}>
        <Text style={{
          color:'grey',
          fontSize: HEIGHT*0.02
          }}>
            Dietitian Joanne
            </Text>
            <View style={{
              // borderWidth:1,
              flexDirection: 'row',
              alignItems:'center'
              }}>
              <Image
              style={{height:HEIGHT*0.021, width: HEIGHT*0.021}}
              source={timer}
              />
        <Text style={{
          color:'grey',
          fontSize: HEIGHT*0.02,
          marginLeft: WIDTH*0.02
          }}>15 Min</Text>
          </View>
          </View>
    <ScrollView contentContainerStyle={{}}>
      <Pressable
      onPress={()=>navigation.navigate('myTabs')}
      >
    <Text style={{marginTop: HEIGHT*0.02, fontSize: HEIGHT*0.022, lineHeight: HEIGHT*0.03, letterSpacing: WIDTH*0.002, fontWeight: 300, color:'#000000'}}>A Balanced Diet is One That Fulfills All Of A Person’s Nutritional Needs. Humans Need A Certain Amount Of Calories And Nutrients To Stay Healthy. A Balanced Diet Provides All The Nutrients A Person Requires, Without Going Over The Recommended Daily Calorie Intake.{"\n"}{"\n"} By Eating A Balanced Diet, People Can Get The Nutrients And Calories They Need And Avoid Eating Junk Food, Or Food Without Nutritional Value.{"\n"}{'\n'} The United States Department Of Agriculture (Usda) Used To Recommend Following A Food Pyramid. However, As Nutritional Science Has Changed, They Now Recommend Eating Foods From the Five Groups And Building A Balanced Plate.</Text>
    </Pressable>
    </ScrollView>
    </View>
  
    </View>
    
    </>
  )
}

export default HubDetailScreen