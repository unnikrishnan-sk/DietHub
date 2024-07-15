import React, { useCallback, useRef, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { backarrow, tickIcon_subscription } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import ButtonComponent from '../components/ButtonComponent'

const subcriptionDetails = [{id:0, title: "Daily access to your Diet plan", status: true}, {id:1, title:"Open Chat With Your dietitian", status: true}, {id:2, title: "Customized meal plan every", status:true},{id:3, title: "Access to Features tips & recipes on the hub", status: true}, {id:4, title: "Connect Diet hub with apple health kit and get your data sync with your coach", status: true}]

const subMonthsDetails = [{is:0, title:"1 month"}, {id:1, title: "3 months"}, {id:2, title: "6 months"}]

const RenderSubscription = ({data}) => {

    const {id, title, status} = data;

    return(
        <View style={{
            // borderWidth:1,
            width: WIDTH*0.68,
            flexDirection: 'row',
            // alignItems: 'center',
            marginTop: HEIGHT*0.025
            // justifyContent: 'space-between'
        }}>
            <Image
            style={{
                height: HEIGHT*0.026,
                width: HEIGHT*0.026,
                marginTop: HEIGHT*0.004
            }}
            source={tickIcon_subscription}
            />
            <Text style={{
                // borderWidth:1,
                width: WIDTH*0.6,
                marginLeft: WIDTH*0.026,
                fontSize: HEIGHT*0.023,
                fontWeight: 400,
                color: colorMix.black
            }}>{title}</Text>
        </View>
    )
}

const Pagination = ({index}) => {
    return(
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            { subMonthsDetails.map((_,i)=>{
                    return(
                        <View
                        style={{
                            // alignItems: 'center'
                        }}
                        key={i}
                        >
                            {index === i ? (
                                 <View style={{
                                    borderWidth:2,
                                    borderColor: colorMix.blue,
                                    backgroundColor: colorMix.blue,
                                    height: HEIGHT*0.013,
                                    width: HEIGHT*0.013,
                                    borderRadius: HEIGHT*0.01,
                                    marginTop: HEIGHT*0.02,
                                    marginBottom: HEIGHT*0.02,
                                    marginLeft: WIDTH*0.02

                                }}></View>
                            ) : (
                                <View style={{
                                    borderWidth:2,
                                    borderColor: '#e0e0e0',
                                    backgroundColor: '#e0e0e0',
                                    height: HEIGHT*0.013,
                                    width: HEIGHT*0.013,
                                    borderRadius: HEIGHT*0.01,
                                    marginTop: HEIGHT*0.02,
                                    marginBottom: HEIGHT*0.02,
                                    marginLeft: WIDTH*0.02
                                }}></View>
                            )}
                        </View>
                    )})}
        </View>
    )}

const RenderSubMonths = ({data,index}) => {

    const {id, title} = data;
    console.log(index);
    
    return(
        <View style={{
            // borderWidth:1,
            height: HEIGHT*0.67 ,
            width: WIDTH*0.75 ,
            backgroundColor: colorMix.white,
            margin: HEIGHT*0.04,
            borderBottomLeftRadius: HEIGHT*0.03,
            borderBottomRightRadius: HEIGHT*0.03,
            borderRadius: HEIGHT*0.03
        }}>
            <View style={{
                // borderWidth: 1,
                height: HEIGHT*0.08,
                borderTopLeftRadius: HEIGHT*0.03,
                borderTopRightRadius: HEIGHT*0.03,
                backgroundColor: colorMix.red,
                alignItems: 'center',
                // justifyContent: 'center'
            }}>
                <Text style={{
                    color: colorMix.white,
                    fontSize: HEIGHT*0.023,
                    letterSpacing: WIDTH*0.004,
                    fontWeight: 700,
                    marginTop: HEIGHT*0.03
                }}>3- Months Subscription</Text>
            </View>
            <View style={{
                backgroundColor: colorMix.white,
                // borderWidth:1,
                alignItems: 'center'
            }}>
            <Text style={{
                fontSize: HEIGHT*0.015,
                fontWeight: 600,
                // borderWidth:1,
                // alignSelf: 'baseline'
                // paddingBottom: HEIGHT*0.4
            }}>$<Text style={{
                fontSize: HEIGHT*0.07,
                color: colorMix.black,
                fontWeight: 800
            }}>135</Text>/ Month</Text>

            <FlatList
            data={subcriptionDetails}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <RenderSubscription data={item}/>} 
            keyExtractor={item => item.id}
            />
            </View> 
            <View style={{
                paddingTop: HEIGHT*0.01,
            }}>
            <ButtonComponent text="Subscribe now" font={HEIGHT*0.03} border={HEIGHT*0.013}/>  
            </View>
        </View>
    )
}

const CoachSubscription = () => {

    const [index, setIndex] = useState(0);
    const flatListRef = useRef(FlatList);

    const onScroll = useCallback((event)=>{
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        // console.log(roundIndex);
        const distance = Math.abs(roundIndex-index);
        const isNoMansLand = 0.4 < distance;
        if(roundIndex !== flatListRef.current && !isNoMansLand){
            setIndex(roundIndex);
            flatListRef?.current?.scrollToIndex({
                index: roundIndex
            })
        }
    },[]);

  return (
    <View>
        <Navbar heading="Choose Plan" />

        <View style={{
            // borderWidth: 1,
            paddingHorizontal: WIDTH*0.05
            // height: HEIGHT*0.4
        }}>
            <FlatList
            data={subMonthsDetails}
            horizontal
            showsHorizontalScrollIndicator={false}
            // showsVerticalScrollIndicator={false}
            ref={flatListRef}
            pagingEnabled={true}
            renderItem={({item}) => <RenderSubMonths data={item} index={index}/>} 
            onScroll={onScroll}
            keyExtractor={item => item.id}
             />
        </View>
        <Pagination index={index} />
        {/* <Text>Subscription</Text> */}
    </View>
  )
}

export default CoachSubscription