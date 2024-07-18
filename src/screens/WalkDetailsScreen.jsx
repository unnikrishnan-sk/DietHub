import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'

const walkDetails = [{id:0, title: "This Week", distance: "27 Km"}, {id:1, title: "Saturday", distance: "1.2 km"},{id:2, title: "Friday", distance:"4.6 km"},{id:3, title: "Tuesday", distance:"3.2 km"},{id:4, title: "Wednesday", distance:"2.7 km"},{id:5, title: "Thursday", distance:"7.2 km"},{id:6, title: "Monday", distance:"0.3 km"},{id:7, title: "Sunday", distance:"2.2 km"}]

const RenderWalk = ({data}) => {

    const {id,title,distance} = data;

    return(
        <> 
        <View style={{
            // borderWidth:1,
            borderBottomWidth: 1,
            borderColor: colorMix.backgroundShade,
            height: HEIGHT*0.07,
            flexDirection: 'row',
            paddingHorizontal: WIDTH*0.05,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: id===0?colorMix.headingShade:colorMix.white
        }}>
        <Text style={{
            color: id===0?colorMix.blue:colorMix.black,
            fontSize: id===0?HEIGHT*0.03: HEIGHT*0.022,
            letterSpacing: WIDTH*0.0025
        }}>{title}</Text>
        <Text style={{
            color: id===0?colorMix.orange:colorMix.green,
            fontSize: id===0?HEIGHT*0.032:HEIGHT*0.022,
            letterSpacing: WIDTH*0.002
        }}>{distance}</Text>
        </View>
        </>
    )
}

const WalkDetailsScreen = () => {
  return (
    <View style={{
        backgroundColor: colorMix.white,
        height: HEIGHT
    }}>
        <Navbar heading="walking"/>
        
           <FlatList 
            data={walkDetails}
            renderItem={({item}) => <RenderWalk data={item}/>} 
            keyExtractor={item => item.id}
           />
        {/* </View> */}
    </View>
  )
}

export default WalkDetailsScreen