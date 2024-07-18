import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { chatShadow } from '../constants/shadowStyle'

const GoalScreen = () => {
  return (
    <View style={{
        backgroundColor: colorMix.darkBackground,
        height:HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <View style={{
            borderWidth:3,
            borderColor: colorMix.darkBorder,
            height: HEIGHT*0.42,
            width: WIDTH*0.8,
            borderRadius: HEIGHT*0.02,
            backgroundColor: colorMix.white
        }}>
            <View style={{
                height: HEIGHT*0.11,
                // borderWidth:1,
                borderTopLeftRadius: HEIGHT*0.02,
                borderTopRightRadius: HEIGHT*0.02,
                backgroundColor: colorMix.headingShade,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: HEIGHT*0.028,
                    width: WIDTH*0.45,
                    textAlign: 'center',
                    color: colorMix.black,
                    fontWeight: 300
                }}>Enter Your Goal For This Week</Text>
            </View>
            <View style={{
                paddingHorizontal: WIDTH*0.07,
                marginTop: HEIGHT*0.06
            }}>
            <TextInput 
            style={{
                borderWidth:1,
                borderColor: colorMix.borderColor,
                height: HEIGHT*0.085,
                fontSize: HEIGHT*0.035,
                letterSpacing: WIDTH*0.004,
                paddingHorizontal: WIDTH*0.05
            }}
            placeholder='Goal'
            placeholderTextColor={colorMix.borderColor}
            />

            <View style={{
                // borderWidth:1,
                height: HEIGHT*0.08,
                marginTop: HEIGHT*0.04,
                borderRadius: HEIGHT*0.005,
                backgroundColor: colorMix.red,
                alignItems: 'center',
                justifyContent: 'center',
                ...chatShadow
            }}>
                <Text style={{
                    color: colorMix.white,
                    fontSize: HEIGHT*.03
                }}>Save</Text>
            </View>
            </View>
           
        </View>
    </View>
  )
}

export default GoalScreen