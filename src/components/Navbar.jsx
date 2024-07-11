/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { backarrow } from '../assets';

const Navbar = ({heading, bgColor}) => {
  return (
    <View
      style={{
        height: HEIGHT * 0.08,
        width: WIDTH,
        borderBottomWidth: 1,
        borderColor: '#DBDBDB',
        backgroundColor: bgColor ? bgColor : '#FFFFFF',
      }}>
      <View
        style={{
          // borderWidth:1,
          height: HEIGHT * 0.09,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
          {/* <Image
          style={{
            height: HEIGHT*0.08,
            width: WIDTH*0.04
          }}
          source={backarrow} 
          /> */}
        <Text style={{
          fontSize: HEIGHT * 0.03, 
          fontWeight: 400, 
          color: bgColor ? '#FFFFFF' : '#000000',
          letterSpacing: WIDTH*0.004
          }}>{heading}</Text>
      </View>
    </View>
  );
};

export default Navbar;