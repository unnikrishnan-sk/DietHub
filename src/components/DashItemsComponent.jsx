/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {FlatList, Image, Text, View} from 'react-native';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { dashData, dashDateWise, dietData } from '../constants/dummyData';
import { SceneMap, TabView } from 'react-native-tab-view';
import CustomTabBar from './CustomTabBar';
import { edit_icon } from '../assets';

const RenderItem = ({data}) => {

    const { id, image, item_number, title, desc} = data;

    return (
        <View style={{
            // borderWidth:1,
            borderBottomWidth: 1,
            borderTopLeftRadius: HEIGHT*0.01,
            // borderRadius: HEIGHT*0.01,
            borderColor: '#dbdbdb',
            height: HEIGHT*0.08,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
                <View style={{
                    // borderWidth:1,
                    height: HEIGHT*0.08,
                    width: HEIGHT*0.08,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRightWidth: 1,
                    borderColor: '#dbdbdb',
                }}>
                <Image
                style={{
                    height: HEIGHT*0.055,
                    width: HEIGHT*0.055,
                }} 
                source={image}
                />
                </View>
                <View style={{
                    // borderWidth:1,
                    height: HEIGHT*0.055,
                    width: WIDTH*0.6,
                    marginLeft: WIDTH*0.02,
                }}>
                    <Text style={{
                        color: '#ddb564',
                        fontWeight: 800,
                        fontSize: HEIGHT*0.02,
                    }}>{item_number}  <Text style={{
                        color:'#000000',
                        fontWeight: 300,
                    }}>{title}</Text></Text>
                    <Text style={{
                        fontSize: HEIGHT*0.016,
                        color: 'grey',
                    }}>{desc}</Text>
                </View>
            </View>
    )
}

const RenderDashData = ({data}) => {

    const { id, name } = data;
    return(
<>
    <View style={{
        // borderWidth:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: WIDTH*0.05,
        alignSelf: 'center',
        borderRadius: HEIGHT*0.01,
        backgroundColor: '#FFFFFF',
        height: HEIGHT*0.45,
        width: WIDTH*0.75,
        marginTop: HEIGHT*0.01,
        }}>
           <FlatList
           showsVerticalScrollIndicator={false}
           data={dashData}
           renderItem={({item}) => <RenderItem data={item}/>}
           keyExtractor={item => item.id}
           />
           <View style={{
            // borderWidth:1,
            justifyContent: 'space-between',
            width:WIDTH*0.75,
            alignSelf: 'center',
            height: HEIGHT*0.06,
            flexDirection: 'row',
            backgroundColor: '#e3e3e3',
            borderBottomLeftRadius: HEIGHT*0.01,
            borderBottomRightRadius: HEIGHT*0.01
            // paddingHorizontal: WIDTH*0.03
        }}>
            <Image
            style={{
                height: HEIGHT*0.02,
                width: WIDTH*0.038,
                alignSelf: 'center',
                marginLeft: WIDTH*0.04
                // tintColor: 'grey'
            }}
            source={edit_icon}
            />
            <Text style={{
                fontSize: HEIGHT*0.018,
                alignSelf: 'center',
            }}>Add Comments to Coach</Text>
            <View style={{
                // borderWidth:1,
                width: WIDTH*0.25,
                backgroundColor: '#b9b9b9',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomRightRadius: HEIGHT*0.01,
            }}><Text style={{
                color: '#FFFFFF',
                fontSize: HEIGHT*0.027,
            }}>390 Cal.</Text></View>
        </View>
        </View>
        {/* <View style={{
            // borderWidth:1,
            height: HEIGHT*0.03,
            marginTop: HEIGHT*0.008,
            alignItems: 'center',
            justifyContent: 'center'
        }}> */}
            {/* <View style={{
                borderWidth:1,
                height: HEIGHT*0.02,
                width: HEIGHT*0.02,
                borderRadius: HEIGHT*0.01
            }}></View> */}
        {/* </View> */}
        {/* </View> */}
        </>
    )
}

const Pagination = ({index}) => {
    return(
        <View style={{
            flexDirection: 'row'
        }}>
            {
                dashDateWise.map((_,i)=>{
                    return(
                        <View
                        key={i}
                        >
                            {index === i ? (
                                 <View style={{
                                    borderWidth:2,
                                    borderColor: '#b9b9b9',
                                    backgroundColor: '#b9b9b9',
                                    height: HEIGHT*0.016,
                                    width: HEIGHT*0.016,
                                    borderRadius: HEIGHT*0.01,
                                    marginTop: HEIGHT*0.02,
                                    marginBottom: HEIGHT*0.02,
                                    marginLeft: WIDTH*0.01

                                }}></View>
                            ) : (
                                <View style={{
                                    borderWidth:2,
                                    borderColor: '#b9b9b9',
                                    height: HEIGHT*0.016,
                                    width: HEIGHT*0.016,
                                    borderRadius: HEIGHT*0.01,
                                    marginTop: HEIGHT*0.02,
                                    marginBottom: HEIGHT*0.02,
                                    marginLeft: WIDTH*0.01
                                }}></View>
                            )}
                        </View>
                    )})
            }
        </View>
    )
}

const DashItemsComponent = ({index, onScroll, flatListRefer}) => {

  return (
    <View>
        <View style={{
            // borderWidth:1,
            height: HEIGHT*0.55,
            // paddingHorizontal: WIDTH*0.05,
            backgroundColor: '#f6f6f6',
            // justifyContent: 'center',
            // marginTop: HEIGHT*0.03,
            alignItems: 'center',
        }}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            data={dashDateWise}
            horizontal
            renderItem={({item}) => <RenderDashData data={item}/>}
           keyExtractor={item => item.id}
        //    ref={flatListRefer}
           onScroll={onScroll}
            />     
        <Pagination index={index} />
        </View>
    </View>
  )
}

export default DashItemsComponent