/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {FlatList, Image, Text, View} from 'react-native';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { dashData } from '../constants/dummyData';
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

const DashItemsComponent = () => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([{ key: 'first', title: 'First' },{ key: 'second', title: 'Second' },{ key: 'third', title: 'Third' }]);

    const FirstRoute = () => (
        <>
        <View style={{
            // borderWidth:1,
            // justifyContent: 'center',
            // alignItems: 'center',
            alignSelf: 'center',
            borderRadius: HEIGHT*0.01,
            backgroundColor: '#FFFFFF',
            height: HEIGHT*0.4,
            width: WIDTH*0.75,
            marginTop: HEIGHT*0.03,
            }}>
               <FlatList
               showsVerticalScrollIndicator={false}
               data={dashData}
               renderItem={({item}) => <RenderItem data={item}/>}
               keyExtractor={item => item.id}
               />
            </View>
            <View style={{
                // borderWidth:1,
                justifyContent: 'space-between',
                width:WIDTH*0.75,
                alignSelf: 'center',
                height: HEIGHT*0.06,
                flexDirection: 'row',
            }}>
                <Image
                style={{
                    height: HEIGHT*0.03,
                    width: WIDTH*0.06,
                    alignSelf: 'center',
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
                }}><Text style={{
                    color: '#FFFFFF',
                    fontSize: HEIGHT*0.027,
                }}>390 Cal.</Text></View>
            </View>
            </>
      );
    //   const SecondRoute = () => (
    //     <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    //   );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: FirstRoute,
        third: FirstRoute,
      });

  return (
    <View>
        <View style={{
            // borderWidth:1,
            height: HEIGHT*0.6,
            backgroundColor: '#f6f6f6',
            // justifyContent: 'center',
            // marginTop: HEIGHT*0.03,
            alignItems: 'center',
        }}>
            <TabView style={{
                flex:1,
                width:WIDTH,
                // borderWidth: 1,
                // justifyContent: 'center'
                // alignItems: 'center',
                }}
                tabBarPosition='bottom'
                renderTabBar={(props)=><CustomTabBar {...props} radius={HEIGHT*0.15}  detail='detail' />} 
                navigationState={{ index, routes }} renderScene={renderScene} onIndexChange={setIndex} lazyPreloadDistance={4} initialLayout={{ width: WIDTH }}/>
        </View>
    </View>
  )
}

export default DashItemsComponent