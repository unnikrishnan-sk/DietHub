/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { ExcerciseData, cupData } from '../constants/dummyData';

const RenderWaterItem = ({data}) => {

    const {id, number, completed} = data;

    return(
        <View style={{
            flexDirection: 'row',
            marginTop: HEIGHT*0.03
        }}>

        <View style={{
            borderWidth:2,
            height:HEIGHT*0.1,
            marginLeft: id===0? 0 :WIDTH*0.025,
            backgroundColor: completed==true ? '#89d9fb' : '#FFFFFF',
            width: HEIGHT*0.1,
            borderRadius:HEIGHT*0.05,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: completed==='not started' ? '#dbdbdb' : '#89d9fb'
        }}>
            <Text style={{
                fontSize: HEIGHT*0.03,
                fontWeight: 500,
                color: completed===true ? ('#FFFFFF') : (completed==='not started' ? '#dbdbdb' : '#89d9fb'),
            }}>{number}</Text>
        </View>
        </View>
    )
}

const RenderExcerciseItem = ({data}) => {

    const {id, image, title, time, completed} = data;

    return(
         <View style={{
            // borderWidth:1,
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: HEIGHT*0.03
        }}>

        <View style={{
            borderWidth:2,
            height:HEIGHT*0.16,
            marginLeft: id===0? 0 :WIDTH*0.025,
            backgroundColor: completed==true ? '#89d9fb' : '#FFFFFF',
            width: HEIGHT*0.16,
            borderRadius:HEIGHT*0.1,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: completed==='not started' ? '#dbdbdb' : '#89d9fb'
        }}>
            <Image
            style={{height: HEIGHT*0.06}}
            source={image}
             />
            <Text style={{
                fontSize: HEIGHT*0.05,
                fontWeight: 500,
                color: completed===true ? ('#FFFFFF') : (completed==='not started' ? '#dbdbdb' : '#89d9fb'),
            }}>{time}</Text>
            <Text style={{color: completed===true ? ('#FFFFFF') : (completed==='not started' ? '#dbdbdb' : '#89d9fb'),}}>min</Text>
        </View>
        <Text style={{
            fontSize: HEIGHT*0.025,
            marginTop: HEIGHT*0.02,
            fontWeight: 200,
        }}>{title}</Text>
        </View>
    )
}

const DashDetComponent = () => {
  return (
    <View style={{
        // paddingHorizontal: WIDTH*0.05,
        marginTop: HEIGHT*0.025,
    }}>
        <Text style={{
            fontSize: HEIGHT*0.03,
            fontWeight: 300,
            letterSpacing: WIDTH*0.005,
            paddingHorizontal: WIDTH*0.05,
            color: '#6871a8',
        }}>Water Cup</Text>
            <FlatList
            data={cupData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <RenderWaterItem data={item}/>}
            keyExtractor={item => item.id}
            />
             <Text style={{
            fontSize: HEIGHT*0.03,
            fontWeight: 300,
            letterSpacing: WIDTH*0.005,
            marginTop: HEIGHT*0.02,
            paddingHorizontal: WIDTH*0.05,
            color: '#6871a8',
        }}>Excercises</Text>
        <FlatList
            data={ExcerciseData}
            style={{
                paddingBottom: HEIGHT*0.1
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <RenderExcerciseItem data={item}/>}
            keyExtractor={item => item.id}
            />
    </View>
  )
}

export default DashDetComponent;