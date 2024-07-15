import React, { useState } from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { backIcon_white, dana_jaber, star, star_grey } from '../assets'
import Svg, { Path } from 'react-native-svg';
import { dietPreferences, medicalIssues, reviewDetails } from '../constants/dummyData'

const RenderReviews = ({data, contentOffset, contentSize, scrollViewHeight, scrollElementHeightPercent}) => {

    const { name, rating, comment } = data;

    // const scrollPerc = (contentOffset.y / (contentSize-scrollViewHeight))*(100-scrollElementHeightPercent);

    return(
        <View style={{
            // position: 'absolute',
            // top: `${Number(scrollPerc || 0).toFixed(0)}%`,
            // height: `${scrollElementHeightPercent}%`
        }}>
        <Text style={{
           fontSize: HEIGHT*0.026,
           color: colorMix.black
       }}>{name}   <Text style={{
           fontSize: HEIGHT*0.018,
           fontWeight: 200,
           color: colorMix.black
       }}>({rating})</Text></Text>
       <Text style={{
           width: WIDTH*0.6,
           marginTop: HEIGHT*0.01,
           marginBottom: HEIGHT*0.03,
           color: '#c7cbd1',
           fontSize: HEIGHT*0.018
       }}>{comment}</Text>
       </View>
    )
}

const CoachDetailScreen = () => {

    const [contentOffset, setContentOffset] = useState({x:0,y:0});
    const [contentSize, setContentSize] = useState(0);
    const [scrollViewHeight,setScrollViewHeight] = useState(0);
    const scrollElementHeightPercent = 45;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            height: HEIGHT*0.1,
            width:WIDTH,
            backgroundColor: colorMix.white,
            marginTop: HEIGHT*0.105,
            // alignSelf: 'stretch'
            transform: [{ scaleX: 1.5 }],
            // borderTopEndRadius: HEIGHT*0.15,
        }}>
            <Svg
          height={HEIGHT * 0.29}
          width={WIDTH}
          
          viewBox={`0 0 ${WIDTH} ${HEIGHT * -0.3}`}
          style={{position: 'absolute',
            // top: 0,
            width: WIDTH,
            bottom: 0,
            transform: [{rotate: Platform.OS === 'android' ? '180deg' : '0deg'}],
            // borderWidth:1,
            left: 0,
            right:0
        }}
        >
          <Path
            d={`M0,0 Q${WIDTH / 2},${HEIGHT * -0.3} ${WIDTH},0 L${WIDTH},${HEIGHT *- 0.3} L0,${HEIGHT * -0.3} Z`}
            fill={colorMix.blue}
          />
        </Svg>
            
        </View>
        <View style={{
                // borderWidth:1,
                // width: WIDTH,
                backgroundColor: colorMix.white,
                alignItems: 'center'
                // height: HEIGHT*0.1,
                // marginTop: HEIGHT*0.11,
                // alignItems: 'center',
            }}>
                <Text style={{
                    // paddingLeft: WIDTH*0.33,
                    fontSize: HEIGHT*0.026,
                    fontWeight: 400,
                    letterSpacing: WIDTH*0.003,
                    // lineHeight: HEIGHT*0.05,
                    color: colorMix.black
                }}>Dana Jaber</Text>
                <View style={{
                    // borderWidth:1,
                    alignItems: 'center',
                    marginTop: HEIGHT*0.013,
                    flexDirection: 'row',
                    // marginLeft: WIDTH*0.33
                    // width: WIDTH*0.7
                }}>
                {[...Array(4)].fill().map((e,index)=>(
                 <Image
                 style={{
                     height: HEIGHT*0.017,
                     width: HEIGHT*0.017,
                     marginLeft: HEIGHT*0.004
                 }}
                 source={star}
                 />
            ))}
            <Image
            style={{
                height: HEIGHT*0.017,
                width: HEIGHT*0.017,
                marginLeft: HEIGHT*0.004
            }}
            source={star_grey}
            />
            <Text style={{
                fontSize: HEIGHT*0.015,
                marginLeft: HEIGHT*0.008
            }}>4.0</Text>
                </View>
            </View>
            <View style={{
                // borderWidth:1,
                borderBottomWidth: 0.8,
                borderColor: colorMix.borderColor,
                paddingHorizontal :WIDTH*0.05,
                marginTop: HEIGHT*0.04,
                paddingBottom: HEIGHT*0.04,
                // width: WIDTH*0.08
            }}>
            <Text style={{
                color: colorMix.orange,
                fontSize: HEIGHT*0.024
            }}>About Me</Text>
            <Text style={{
                // width: WIDTH*0.55,
                fontSize: HEIGHT*0.016,
                color: colorMix.black,
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
                    fontSize: HEIGHT*0.022
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
                            fontSize: HEIGHT*0.016,
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
                            // borderWidth:1, 
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
                flexDirection: 'row',
                height: HEIGHT*0.4
            }}>
                <View style={{
                    // borderWidth:1,
                    height: HEIGHT*0.4,
                    width: WIDTH*0.33,
                    // justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        marginTop: HEIGHT*0.026,
                        letterSpacing: WIDTH*0.002,
                        color: colorMix.blue,
                        fontSize: HEIGHT*0.025
                    }}>Reviews</Text>
                    <Text style={{
                        fontSize: HEIGHT*0.085,
                        marginTop: HEIGHT*0.005,
                        marginLeft: WIDTH*0.014,
                        color: colorMix.black,
                    }}>4.3</Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                    {[...Array(4)].fill().map((e,index)=>(
                 <Image
                 style={{
                     height: HEIGHT*0.02,
                     width: HEIGHT*0.02,
                     marginLeft: HEIGHT*0.004
                 }}
                 source={star}
                 />
            ))}
            <Image
            style={{
                height: HEIGHT*0.02,
                width: HEIGHT*0.02,
                marginLeft: HEIGHT*0.004
            }}
            source={star_grey}
            />
            </View>
                </View>
                <View style={{
                    // borderWidth:1,
                    height: HEIGHT*0.3,
                    width: WIDTH*0.65,
                    marginTop: HEIGHT*0.08,
                    paddingLeft: WIDTH*0.03
                }}>
                    <FlatList 
                    onScroll={e=>{
                        setContentOffset(e.nativeEvent.contentOffset)
                    }}
                    onLayout={e=>{setScrollViewHeight(e.nativeEvent.layout.height)}}
                    onContentSizeChange={(_,height)=>{
                        setContentSize(height);
                    }}
                    data={reviewDetails}
                    renderItem={({item}) => <RenderReviews data={item} contentOffset={contentOffset} contentSize={contentSize} scrollViewHeight={scrollViewHeight}
                    scrollElementHeightPercent={scrollElementHeightPercent}
                    />} 
                    indicatorStyle={{
                        color: colorMix.white
                    }}
                    keyExtractor={item => item.id}
                    />
                    {/* {reviewDetails?.map((item)=>(
                        <>
                         <Text style={{
                            fontSize: HEIGHT*0.03
                        }}>Dana Jaber   <Text style={{
                            fontSize: HEIGHT*0.02,
                            fontWeight: 200
                        }}>(4/5)</Text></Text>
                        <Text style={{
                            width: WIDTH*0.6,
                            marginTop: HEIGHT*0.01,
                            color: '#c7cbd1',
                            fontSize: HEIGHT*0.019
                        }}>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The</Text>
                        </>
                    ))} */}
                </View>
            </View>
    </View>
    </ScrollView>
  )
}

export default CoachDetailScreen