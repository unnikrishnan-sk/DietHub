import React from 'react'
import { Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'

const ButtonComponent = ({text, font, border, background, weight}) => {
  return (
    <View style={{
        backgroundColor: colorMix.white,
        // borderWidth:1, 
        height: HEIGHT*0.11,
        paddingHorizontal: WIDTH*0.05,
        justifyContent: 'center',
        // alignItems: 'center'
    }}>
        <View style={{
            // borderWidth:1,
            height:HEIGHT*0.08,
            backgroundColor: background ? background : colorMix.blue,
            justifyContent: 'center',
            borderRadius: border ? border : 0
        }}>
            <Text style={{
                textAlign: 'center',
                color: colorMix.white,
                fontSize:font ? font : HEIGHT*0.023,
                fontWeight: weight ? weight : 0
            }}>{text}</Text>
        </View>
    </View>
  )
}

export default ButtonComponent