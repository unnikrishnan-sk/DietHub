/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, { useCallback, useRef, useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import Navbar from '../components/Navbar';
import { backarrow_grey, forwardarrow_grey, rightarrow } from '../assets';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { dates, dietData } from '../constants/dummyData';
import DashItemsComponent from '../components/DashItemsComponent';
import DashDetComponent from '../components/DashDetComponent';
import { useNavigation } from '@react-navigation/native';

const RenderDates = ({data,currentIndex}) => {

    const { id, image, title , count} = data;
    const isSelected = id === currentIndex+1

    return(
        <View 
            key={id}
            style={{
                    // borderWidth: 1,
                    // flex:1,
                    height:HEIGHT*0.08,
                    width:WIDTH*0.28,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isSelected ? '#f6f6f6' : '#FFFFFF',
                    borderTopWidth: isSelected ? 1.5 : 0,
                    borderColor: isSelected ? '#ddb564' : '#FFFFFF',
                    // marginTop: HEIGHT*0.02
                }}>
                <>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{
                            // borderWidth:1,
                             alignItems: 'center'}}>
                        <Text style={{
                        // borderWidth:1,
                        paddingTop: id===0?HEIGHT*0.018:0,
                        fontSize: HEIGHT*0.023,
                        color: isSelected ? '#000000' : 'grey',
                    }}
                    >{title}</Text>
                    <Text style={{
                        fontSize: HEIGHT*0.02,
                        marginTop: HEIGHT*0.005,
                        color: 'grey',
                    }}>{count}</Text>
                        </View>
                    </View>
                    </>
                </View>
    )
}

const DashboardScreen = () => {

    const flatListRef = useRef(FlatList);
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigation = useNavigation();

    const onScroll = useCallback((event)=>{
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize*1.3;
        const roundIndex = Math.round(index);
        const distance = Math.abs(roundIndex-index);
        const isNoMansLand = 0.3 < distance;
        if(roundIndex !== flatListRef.current && !isNoMansLand){
            setCurrentIndex(roundIndex);
            flatListRef?.current?.scrollToIndex({
                index: roundIndex
            })
        }
    },[]);

    const onDateNext = () => {
        if(currentIndex<dates.length-1){
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex)
            flatListRef?.current?.scrollToIndex({
                index: nextIndex
            })
        }
    }
    const onDatePrev = () => {
        if(currentIndex>=1){
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex)
            flatListRef?.current?.scrollToIndex({index: prevIndex})
        }
    }
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
        <Text 
        onPress={()=>navigation.navigate('guidelines')}
        style={{fontSize: HEIGHT*0.023, letterSpacing:WIDTH*0.003}}>General Guidelines</Text>
        <Image 
        style={{
            marginLeft: WIDTH*0.04,
        }}
        source={rightarrow}
        />
        </View>
        <View style={{
            // borderWidth:1,
            paddingHorizontal: WIDTH*0.02,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Pressable onPress={onDatePrev}>
             <Image
                style={{
                    // borderWidth:1,
                    height:HEIGHT*0.02, 
                    width: WIDTH*0.06,marginTop: HEIGHT*0.015}}
                    source={backarrow_grey}
                    />
                    </Pressable>
        <View style={{
            // borderWidth:1,
            // borderTopWidth: 0.5,
            // borderBottomWidth: 1,
            borderColor:'#dbdbdb',
            height: HEIGHT*0.08,
            width: WIDTH*0.82,
            alignSelf: 'center',
            marginTop: HEIGHT*0.02,
            flexDirection: 'row',
        }}>

            <FlatList
            data={dates}
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
            renderItem={({item}) => <RenderDates data={item} currentIndex={currentIndex}/>} 
            keyExtractor={item => item.id}
            />
        </View>
        <Pressable
        onPress={onDateNext}
        >
        <Image 
            style={{
                height:HEIGHT*0.02, 
                width: WIDTH*0.07,
                marginTop: HEIGHT*0.02
            }}
            source={forwardarrow_grey}
            />
            </Pressable>
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

        <DashItemsComponent index={currentIndex} onScroll={onScroll} flatListRefer={flatListRef}/>

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
                style={{
                    height: HEIGHT*0.03, 
                    width: WIDTH*0.06}}
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