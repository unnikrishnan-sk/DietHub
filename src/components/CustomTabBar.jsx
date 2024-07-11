/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/dimension';
// import { colors } from '../constants/color';
// import { shadowStyles } from '../constants/shade';

const CustomTabBar = ({ navigationState, jumpTo, radius , bgColor, detail}) => {
  return (
    <>
    <View style={{ 
         flexDirection: 'row',
         justifyContent: 'center',
         paddingVertical: HEIGHT*0.02,
         width: WIDTH*0.8,
        //  backgroundColor: 'grey',
         alignSelf: 'center',
         }}>
      {navigationState.routes.map((route, index) => {
        const isActive = navigationState.index === index;
        return (
          <TouchableOpacity key={route.key} onPress={() => jumpTo(route.key)}
            style={{width: HEIGHT*0.015,
                height: HEIGHT*0.015,
                borderRadius: HEIGHT*0.05,
                borderWidth: 1,
                borderColor: '#bababa',
                // backgroundColor: '#000000',
                backgroundColor:isActive? '#bababa': '#f6f6f6',
                marginHorizontal: HEIGHT*0.005,
            }}
          />
        );
      })}
    </View>
    </>
  );
};

export default CustomTabBar;