import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { backarrow, guideline_image, play_button } from '../assets'
import { allowedFoods, restrictedFoods } from '../constants/dummyData'

const GuidelineScreen = () => {
  return (
    <View>
        <Navbar leftIcon={backarrow} heading="General Guidelines"/>
        <ScrollView 
        style={{paddingBottom: HEIGHT*0.1}}
        showsVerticalScrollIndicator={false} >
        <View style={{
            paddingHorizontal: WIDTH*0.05,
            backgroundColor: '#FFFFFF',
        }}>
        <Text style={{
            fontSize: HEIGHT*0.032,
            fontWeight: 700,
            letterSpacing: WIDTH*0.002,
            paddingTop: HEIGHT*0.015,
            color: '#000000',
        }}>Allowed Food</Text>

        <View style={{
            // borderWidth:1,
            height: HEIGHT*0.16,
            marginTop: HEIGHT*0.012,
            flexDirection: 'row',
            flexWrap: 'wrap'
            }}>
                {allowedFoods?.map((item)=>(
                        <View style={{
                            // borderWidth:1,
                            marginLeft: item?.id !==0 ? WIDTH*0.001 :0,
                            height: HEIGHT*0.06,
                            margin: HEIGHT*0.005,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: HEIGHT*0.035,
                            backgroundColor: '#d9f0eb'
                        }}>
                        <Text style={{
                            padding: HEIGHT*0.015,
                            fontSize: HEIGHT*0.02,
                            fontWeight: 500,
                            letterSpacing: WIDTH*0.001,
                            color: '#3FB5A1'
                        }}>{item?.name}</Text>
                        </View>
                    ))}
            </View>
            <Text style={{
            fontSize: HEIGHT*0.032,
            fontWeight: 700,
            letterSpacing: WIDTH*0.002,
            // paddingTop: HEIGHT*0.01,
            color: '#000000',
        }}>Restricted Food</Text>

<View style={{
            // borderWidth:1,
            height: HEIGHT*0.16,
            marginTop: HEIGHT*0.012,
            flexDirection: 'row',
            flexWrap: 'wrap'
            }}>
                    {restrictedFoods?.map((item)=>(
                        <View style={{
                            // borderWidth:1,
                            marginLeft: item?.id !==0 ? WIDTH*0.001 :0,
                            height: HEIGHT*0.06,
                            margin: HEIGHT*0.005,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: HEIGHT*0.035,
                            backgroundColor: '#f7d8dc'
                        }}>
                        <Text style={{
                            padding: HEIGHT*0.015,
                            fontSize: HEIGHT*0.02,
                            fontWeight: 500,
                            letterSpacing: WIDTH*0.001,
                            color: '#E94356'
                        }}>{item?.name}</Text>
                        </View>
                    ))}
            </View>
            <Text style={{
            fontSize: HEIGHT*0.032,
            fontWeight: 700,
            letterSpacing: WIDTH*0.002,
            // paddingTop: HEIGHT*0.01,
            color: '#000000',
        }}>Details</Text>

        <Text style={{
            marginTop: HEIGHT*0.012,
            fontSize: HEIGHT*0.021,
            fontWeight: 500,
            color: '#000000'
        }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</Text>
        </View>
        <View style={{
            paddingTop: HEIGHT*0.025,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF'
        }}> 
        <Image 
       style={{
        position: 'absolute',
        zIndex: 1
       }}
        source={play_button}
        />
        <Image
        style={{
            height: HEIGHT*0.3,
            width: WIDTH*0.95,
            borderRadius: HEIGHT*0.02
        }}
        source={guideline_image}
        />
        </View>
        </ScrollView>
    </View>
  )
}

export default GuidelineScreen