import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { addCouponLogo, arrowup, backarrow } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import { dateDet } from '../constants/dummyData'

const RenderDates = ({data}) => {

    const { id, date,month } = data;

    return(
        <>
        <View style={{
                // borderWidth:1,
                backgroundColor: colorMix.white,
                height: HEIGHT*0.1,
                width: WIDTH*0.18,
                marginLeft: id===0 ? WIDTH*0.045 : WIDTH*0.03,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: HEIGHT*0.04
            }}>
        <Text style={{
            color: colorMix.black,
            fontSize: HEIGHT*0.035,
            fontWeight: 700
        }}>{date}</Text>
        <Text style={{
            color: colorMix.dateShade,
            fontSize: HEIGHT*0.02,
            fontWeight: 500,
            marginTop: HEIGHT*0.01
        }}>{month}</Text>
         </View>
        </>
    )
}

const SubscriptionDetailsScreen = () => {
  return (
    <View style={{
        height: HEIGHT,
        backgroundColor: colorMix.white
    }}>
        <Navbar heading="Subscription"/>
        <View style={{
            // borderWidth: 1,
            backgroundColor: colorMix.white,
            flexDirection: 'row',
            height: HEIGHT*0.08,
            paddingHorizontal: WIDTH*0.05,
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
        <Text style={{
            fontSize: HEIGHT*0.025,
            color: colorMix.black
        }}>Starting date</Text>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
        <Text style={{
            color: colorMix.dateShade,
            fontSize: HEIGHT*0.024
        }}>Thursday-02-April-2020</Text>
        <Image 
        style={{
            height: HEIGHT*0.055,
            width: WIDTH*0.06,
            marginLeft: WIDTH*0.02
        }}
        source={arrowup}/>
        </View>
        </View>

        <View style={{
            height: HEIGHT*0.18,
            // paddingTop: HEIGHT*0.02,
            // borderWidth:1,
            // justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorMix.backgroundShade
            //  marginLeft : HEIGHT*0.1
        }}>
            
                <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                 data={dateDet}
                 renderItem={({item}) => <RenderDates data={item}/>}
                 keyExtractor={item => item.id}
                />
        </View>

        <View style={{
            // borderWidth:1,
            height: HEIGHT*0.1,
            flexDirection: 'row',
            paddingHorizontal: WIDTH*0.05,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colorMix.white
        }}>
            <Text style={{
                fontSize: HEIGHT*0.022,
                color: colorMix.black,
                // fontWeight: 500
            }}>Subscription Duration</Text>
            <Text style={{
                color: colorMix.subscriptionColor,
                fontSize: HEIGHT*0.023,
            }}>1 Months</Text>
        </View>
        <View style={{
            borderWidth:1,
            height: HEIGHT*0.1,
            borderColor: colorMix.backgroundShade,
            flexDirection: 'row',
            paddingHorizontal: WIDTH*0.05,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colorMix.white
        }}>
            <Text style={{
                fontSize: HEIGHT*0.022,
                color: colorMix.black,
                // fontWeight: 500
            }}>Total Payment</Text>
            <Text style={{
                color: colorMix.subscriptionColor,
                fontSize: HEIGHT*0.023,
                fontWeight: 700,
            }}>150 USD</Text>
        </View>
        <View style={{
            // borderWidth:1,
            height: HEIGHT*0.1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colorMix.white,
            paddingHorizontal: WIDTH*0.05
        }}>
            <Image 
            style={{
                height: HEIGHT*0.037,
                borderRadius: HEIGHT*0.016,
                width: HEIGHT*0.05,
                marginLeft: WIDTH*0.02,
            }}
            source={addCouponLogo}
            />
            <Text style={{
                marginLeft: WIDTH*0.03,
                color: colorMix.black
            }}>USE COUPON CODE</Text>
        </View>
        <View style={{
            // borderWidth:1,
            paddingHorizontal: WIDTH*0.05,
            backgroundColor: colorMix.white,
            paddingTop: HEIGHT*0.018,
        }}>
            <Text style={{
                textDecorationLine: 'underline',
                color: colorMix.termsText,
                fontWeight: 500
            }}>By Accepting this invitation you are accepting Terms & conditions</Text>
        </View>
        <View style={{
            paddingTop: HEIGHT*0.01,
            backgroundColor: colorMix.white
        }}>
        <ButtonComponent text="ACCEPT & PAY" background={colorMix.subscribeBtncolor} weight={700}/>
        </View>
       
    </View>
  )
}

export default SubscriptionDetailsScreen