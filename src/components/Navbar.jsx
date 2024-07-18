/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { backarrow, closeIcon, dana_jaber, star, star_grey } from '../assets';
import { colorMix } from '../constants/color';
import { useNavigation } from '@react-navigation/native';

const Navbar = ({heading, leftIcon, rightIcon, bgColor}) => {

  const navigation = useNavigation();

  return (
    <View
      style={{
        // height: HEIGHT * 0.08,
        width: WIDTH,
        paddingHorizontal: WIDTH*0.05,
        borderBottomWidth: 1,
        borderColor: '#DBDBDB',
        backgroundColor: bgColor ? bgColor : '#FFFFFF',
      }}>
      <Pressable
      onPress={()=>navigation.goBack()}
        style={{
          // borderWidth:1,
          height: HEIGHT * 0.09,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
          { leftIcon ? (<Image
          style={{
            height: HEIGHT*0.04,
            width: WIDTH*0.05
          }}
          source={leftIcon} 
          />) : (<View></View>)}
          
        <Text style={{
          fontSize: HEIGHT * 0.03, 
          fontWeight: 400, 
          color: bgColor ? '#FFFFFF' : '#000000',
          letterSpacing: WIDTH*0.004
          }}>{heading}</Text>

          {
            rightIcon ? ( <Image
              style={{
                height: HEIGHT*0.08,
                width: WIDTH*0.04
              }}
              source={closeIcon} 
              />) : (<View></View>)
          }
          
      </Pressable>

      {heading==="Choose Plan" ? (
        <>
        <View style={{
          // borderWidth:1,
          flexDirection: 'row',
          paddingBottom: HEIGHT*0.015
        }}>
          <Image
          style={{
            height: HEIGHT*0.07,
            width: HEIGHT*0.07
          }}
          source={dana_jaber}
          />
          <View style={{
            marginLeft: WIDTH*0.04,
            marginTop: HEIGHT*0.008
          }}>
            <Text style={{
              fontWeight: 500,
              fontSize: HEIGHT*0.023,
              color: colorMix.black
            }}>Dana Jaber</Text>
            <View style={{
              flexDirection: 'row',
              marginTop: HEIGHT*0.005,
              alignItems: 'center'
            }}>
             {[...Array(4)].fill().map((e,index)=>(
                 <Image
                 style={{
                     height: HEIGHT*0.02,
                     width: HEIGHT*0.02,
                     marginLeft: index===0 ? 0 : HEIGHT*0.005
                 }}
                 source={star}
                 />
            ))}
            <Image
            style={{
                height: HEIGHT*0.02,
                width: HEIGHT*0.02,
                marginLeft: HEIGHT*0.005
            }}
            source={star_grey}
            />
            <Text style={{
              textAlign: 'center',
              marginLeft: WIDTH*0.01,
              // color: colorMix.black
            }}>(4)</Text>
            </View>
          </View>
        </View>
        </>
      ): (<>
      </>)}
    </View>
  );
};

export default Navbar;