import React from 'react'
import { Image, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { backIcon_white, dana_jaber, star, star_grey } from '../assets'
import Svg, { Path } from 'react-native-svg';
import { dietPreferences, medicalIssues } from '../constants/dummyData'

const CoachDetailScreen = () => {

  return (
    <View style={{
        // borderWidth: 1,
        backgroundColor: colorMix.white,
        // paddingHorizontal: WIDTH*0.05,
        // paddingVertical: WIDTH*0.05
        // height: HEIGHT*0.1
    }}>
        <Image
        style={{
            marginTop: HEIGHT*0.05
        }}
        source={backIcon_white}
        />
        <Image
        style={{
            borderWidth:2,
            borderRadius: HEIGHT*0.07,
            borderColor: colorMix.white,
            position: 'absolute',
            height: HEIGHT*0.14,
            width: HEIGHT*0.14,
            marginLeft: WIDTH*0.38,
            marginTop: HEIGHT*0.085,
            zIndex: 1
        }}
        source={dana_jaber}
        />

        
        <View style={{
            // borderWidth:1,
            height: 100,
            width:WIDTH,
            backgroundColor: colorMix.white,
            marginTop: HEIGHT*0.06,
            // alignSelf: 'stretch'
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            transform: [{ scaleX: 1.5 }],
            // borderT: HEIGHT*0.15,
            // borderTopEndRadius: HEIGHT*0.15,
            // borderTo
            // borderTopCurve: 1000
        }}>
            <Svg
          height={HEIGHT * 0.3}
          width={WIDTH}
          
          viewBox={`0 0 ${WIDTH} ${HEIGHT * -0.3}`}
          style={{position: 'absolute',
            // top: 0,
            // width: WIDTH,
            bottom: 0,
            borderWidth:1,
            left: 0,
            right:0
        }}
        >
          <Path
            d={`M0,0 Q${WIDTH / 2},${HEIGHT * -0.3} ${WIDTH},0 L${WIDTH},${HEIGHT * -0.3} L0,${HEIGHT * -0.3} Z`}
            fill={colorMix.blue}
          />
        </Svg>
            
        </View>
        <View style={{
                // borderWidth:1,
                // width: WIDTH,
                backgroundColor: colorMix.white,
                // height: HEIGHT*0.1,
                // marginTop: HEIGHT*0.11,
                // alignItems: 'center',
            }}>
                <Text style={{
                    paddingLeft: WIDTH*0.33,
                    fontSize: HEIGHT*0.029,
                    fontWeight: 400,
                    // lineHeight: HEIGHT*0.05,
                    color: colorMix.black
                }}>Dana Jaber</Text>
                <View style={{
                    // borderWidth:1,
                    alignItems: 'center',
                    marginTop: HEIGHT*0.01,
                    flexDirection: 'row',
                    marginLeft: WIDTH*0.33
                    // width: WIDTH*0.7
                }}>
                {[...Array(4)].fill().map((e,index)=>(
                 <Image
                 style={{
                     height: HEIGHT*0.02,
                     width: HEIGHT*0.02,
                     marginLeft: HEIGHT*0.005
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
                </View>
            </View>
            <View style={{
                // borderWidth:1,
                borderBottomWidth: 1,
                borderColor: colorMix.borderColor,
                paddingHorizontal :WIDTH*0.05,
                marginTop: HEIGHT*0.04,
                paddingBottom: HEIGHT*0.04,
                // width: WIDTH*0.08
            }}>
            <Text style={{
                color: colorMix.orange,
                fontSize: HEIGHT*0.028
            }}>About Me</Text>
            <Text style={{
                // width: WIDTH*0.55,
                fontSize: HEIGHT*0.018,
                marginTop: HEIGHT*0.02,
                fontWeight: 200
            }}>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The</Text>
            </View>
            
            <View style={{
                // borderWidth:1,
                paddingHorizontal :WIDTH*0.05,
                marginTop: HEIGHT*0.03
            }}>
                <Text style={{
                    color: colorMix.orange,
                    fontWeight: 600,
                    fontSize: HEIGHT*0.027
                }}>Diet Preferences</Text>
                <View style={{
                    flexDirection: 'row',
                    borderRadius: HEIGHT*0.2,
                    // marginTop: HEIGHT*0.02,
                    flexWrap: 'wrap'
                }}>
                    {dietPreferences.map((item)=>(
                        <Text style={{
                            borderWidth:1, 
                            borderRadius: HEIGHT*0.022,
                            padding: HEIGHT*0.01,
                            marginTop: HEIGHT*0.01,
                            fontWeight: 300,
                            fontSize: HEIGHT*0.017,
                            marginLeft: WIDTH*0.02,
                            color: colorMix.black,
                            borderColor: colorMix.borderColor
                        }}>{item?.title}</Text>
                    ))}
                </View>
            </View>
            <View style={{
                // borderWidth:1,
                paddingHorizontal :WIDTH*0.05,
                marginTop: HEIGHT*0.03
            }}>
                <Text style={{
                    color: colorMix.orange,
                    fontWeight: 600,
                    fontSize: HEIGHT*0.027
                }}>Medical Issues</Text>
                <View style={{
                    flexDirection: 'row',
                    borderRadius: HEIGHT*0.2,
                    // marginTop: HEIGHT*0.02,
                    flexWrap: 'wrap'
                }}>
                    {medicalIssues.map((item)=>(
                        <Text style={{
                            borderWidth:1, 
                            borderRadius: HEIGHT*0.022,
                            padding: HEIGHT*0.01,
                            marginTop: HEIGHT*0.01,
                            fontWeight: 300,
                            fontSize: HEIGHT*0.017,
                            marginLeft: WIDTH*0.02,
                            color: colorMix.black,
                            borderColor: colorMix.borderColor
                        }}>{item?.title}</Text>
                    ))}
                </View>
            </View>
        <Text>Dana</Text>
    </View>
  )
}

export default CoachDetailScreen