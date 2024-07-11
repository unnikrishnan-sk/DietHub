/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'

const Navbar = ({heading}) => {
  return (
    <View
      style={{
        height: HEIGHT * 0.1,
        width: WIDTH,
        borderBottomWidth: 1,
        borderColor: '#DBDBDB'
      }}>
      <View
        style={{
          height: HEIGHT * 0.12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: HEIGHT * 0.03, fontWeight: 300, color:'#000000'}}>{heading}</Text>
      </View>
    </View>
  );
};

export default Navbar;