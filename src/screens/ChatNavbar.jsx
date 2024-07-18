import React from 'react'
import { Image, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { backarrow, chatBack, profilePic, profile_pic_online } from '../assets'
import { colorMix } from '../constants/color'

const ChatNavbar = () => {
  return (
    <View style={{
        height: HEIGHT * 0.09,
        width: WIDTH,
        paddingHorizontal: WIDTH*0.05,
        borderBottomWidth: 1,
        borderColor: '#DBDBDB',
        backgroundColor:  '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
            // justifyContent: 'center'
        }}>
        <Image
        style={{
            height: HEIGHT*0.035,
            width: WIDTH*0.05
        }}
        source={chatBack}
        />
        <Text style={{
            color: colorMix.black,
            fontSize: HEIGHT*0.023,
            marginLeft: WIDTH*0.012
        }}>Back</Text>
        </View>

        <View style={{
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: HEIGHT*0.021,
                color: colorMix.black,
                fontWeight: 700
            }}>Coach Joanne</Text>
            <Text style={{
                fontSize: HEIGHT*0.018
            }}>Online</Text>
        </View>

        <Image 
        style={{
            height: HEIGHT*0.085
        }}
        source={profile_pic_online}/>
       
      </View>
  )
}

export default ChatNavbar