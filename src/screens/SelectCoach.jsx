import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import Navbar from '../components/Navbar';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { dana, star, star_grey } from '../assets';
import { coachData } from '../constants/dummyData';

const RenderItem = ({data}) => {

    const { id, image, name, designation, rating} = data;

    return(
        <View style={{
            borderBottomWidth:1,
            borderColor: '#DBDBDB',
            height: HEIGHT*0.2,
            paddingHorizontal: WIDTH*0.07,
            alignItems: 'center',
            flexDirection: 'row',
            // justifyContent: 'space-between'
           }}>
            <Image
            style={{
                // padding: HEIGHT*0.04
                height: HEIGHT*0.15,
                width: HEIGHT*0.15
            }}
            source={image}
            />
            <View style={{
            // borderWidth:1,
            height: HEIGHT*0.12,
            width: WIDTH*0.5, 
            marginLeft: WIDTH*0.08
            }}>
                <Text style={{
                    fontSize: HEIGHT*0.031,
                    color: '#000000',
                    fontWeight: 400
                }}>{name}</Text>
            <Text style={{
                fontSize: HEIGHT*0.021,
                fontWeight: 300,
            }}>{designation}</Text>
            <View style={{
                // borderWidth:1,
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: HEIGHT*0.01
            }}>
            {[...Array(rating)].fill().map((e,index)=>(
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
            <Text style={{
                marginLeft: WIDTH*0.02
            }}>{rating.toFixed(1)}</Text>
            </View>
            </View>
           </View>
    )
}

const SelectCoach = () => {
  return (
    <View style={{
        flex:1,
        borderWidth:1
    }}>
       <Navbar heading="Select Coach" bgColor="#4c5ac0"/>
       
       <FlatList
       contentContainerStyle={{
        marginBottom: HEIGHT*0.3
       }}
       data={coachData}
       showsVerticalScrollIndicator={false}
       renderItem={({item}) => <RenderItem data={item}/>} 
       keyExtractor={item => item.id}
       />
    </View>
  )
}

export default SelectCoach