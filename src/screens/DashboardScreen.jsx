/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Navbar from '../components/Navbar';
import { backarrow_grey, down_arrow, forwardarrow_grey, rightarrow } from '../assets';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { dates, dietData } from '../constants/dummyData';
import DashItemsComponent from '../components/DashItemsComponent';
import DashDetComponent from '../components/DashDetComponent';

const DashboardScreen = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
        <Navbar heading="Dashboard"/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
            // borderWidth:1,
            flexDirection: 'row', alignItems:'center',
            marginTop: HEIGHT*0.02,
            paddingHorizontal: WIDTH*0.05,
            // backgroundColor: '#FFFFFF'
            }}>
        <Text style={{fontSize: HEIGHT*0.023, letterSpacing:WIDTH*0.003}}>General Guidelines</Text>
        <Image 
        style={{
            marginLeft: WIDTH*0.04,
        }}
        source={rightarrow}
        />
        </View>
        <View style={{
            borderWidth:1,
            // borderTopWidth: 0.5,
            // borderBottomWidth: 1,
            borderColor:'#dbdbdb',
            height: HEIGHT*0.08,
            marginTop: HEIGHT*0.02,
            flexDirection: 'row',
        }}>
            {dates.map((item)=>(
                <View 
                key={item.id}
                style={{
                    // borderWidth: 1,
                    height:HEIGHT*0.08,
                    width:WIDTH*0.331,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: item.id===1 ? '#f6f6f6' : '#FFFFFF',
                    borderTopWidth: item.id===1 ? 1.5 : 0,
                    borderColor: '#ddb564',
                    // marginTop: HEIGHT*0.02
                }}>
                    {item.id === 0 ? (<View style={{flexDirection: 'row'}}>
                    <Image
                    style={{
                        // borderWidth:1,
                        height:HEIGHT*0.02, 
                        width: WIDTH*0.07,marginTop: HEIGHT*0.005}}
                    source={backarrow_grey}
                    />
                    <Text style={{
                        fontSize: HEIGHT*0.023,
                        color: 'grey',
                    }}
                    >{item.title}</Text>
                    </View>) : ( <>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{
                            // borderWidth:1,
                             alignItems: 'center'}}>
                        <Text style={{
                        // borderWidth:1,
                        paddingTop: item.id===0?HEIGHT*0.018:0,
                        fontSize: HEIGHT*0.023,
                        color: item.id===1 ? '#000000' : 'grey',
                    }}
                    >{item.title}</Text>
                    <Text style={{
                        fontSize: HEIGHT*0.02,
                        marginTop: HEIGHT*0.005,
                        color: 'grey',
                    }}>{item.count}</Text>
                        </View>
                    
                    { item.id===2 &&
                    <Image 
                    style={{height:HEIGHT*0.02, width: WIDTH*0.07,marginTop: HEIGHT*0.02}}
                    source={forwardarrow_grey}
                    />
                    }
                    </View>
                    </>)}
                   
                </View>
            ))}
            
        </View>
        <View style={{
            // borderWidth:1, 
            borderTopWidth: 2,
            borderColor: '#dbdbdb',
            // marginTop: HEIGHT*0.01,
            height: HEIGHT*0.08, paddingHorizontal: WIDTH*0.05, justifyContent: 'center'}}>
            <Text style={{
                // fontSize: HEIGHT*0.032,
                // fontWeight: 300,
                // letterSpacing: WIDTH*0.005,
                // color: '#6871a8',
                fontSize: HEIGHT*0.03, letterSpacing: WIDTH*0.005, 
                color: '#6871a8', 
                fontWeight:300,
                }}>Breakfast</Text>
        </View>

        <DashItemsComponent />

        {dietData?.map((item)=>(
            <View 
            key={item.id}
            style={{
                borderBottomWidth: 0.8,
                borderColor: '#dbdbdb',
                // borderWidth:1,
                height: HEIGHT*0.08,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: WIDTH*0.05,
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: HEIGHT*0.03,
                    fontWeight: 300,
                    letterSpacing: WIDTH*0.008,
                }}>{item.title}</Text>
                <Image 
                style={{height: HEIGHT*0.03, width: WIDTH*0.06}}
                source={item?.image}
                />
            </View>
        ))}
        <DashDetComponent />
        </ScrollView>
    </View>
  );
};

export default DashboardScreen;