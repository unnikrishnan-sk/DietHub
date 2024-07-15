import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { closeIcon, tickIcon } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import { dietPreferences, medicalIssues, sortBy } from '../constants/dummyData'

const RenderDietItem = ({data}) => {

    const { id, title, allowed } = data;

    return(
        <View style={{
            // borderWidth:1,
            flexDirection: 'row',
            marginTop: HEIGHT*0.015,
            // width: WIDTH,
            // paddingHorizontal: WIDTH*0.05,
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: HEIGHT*0.025,
                color: colorMix.black
            }}>{title}</Text> 
            { allowed ? (
                <View style={{
                borderWidth:1,
                borderColor: colorMix.blue,
                height: HEIGHT*0.02,
                width: HEIGHT*0.02,
                backgroundColor: colorMix.blue,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image 
                style={{
                    height: HEIGHT*0.015,
                    width: HEIGHT*0.015,
                    // zIndex: 1
                }}
                source={tickIcon}
                />
            </View>
        ) : (
                <View style={{
                borderWidth:1,
                height: HEIGHT*0.02,
                width: HEIGHT*0.02
            }}></View>
        )}
        </View>
    )
}

const FilterScreen = () => {
  return (
    <View>
        <Navbar leftIcon={closeIcon} heading="Filter"/>
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: colorMix.borderColor,
            paddingBottom: HEIGHT*0.035,
            paddingTop: HEIGHT*0.03,
            backgroundColor: colorMix.white,
            paddingHorizontal: WIDTH*0.05
        }}>
            <Text style={{
                fontSize: HEIGHT*0.028,
                fontWeight: 600,
                 color: colorMix.black
            }}>Diet Preferences</Text>

            <FlatList 
            data={dietPreferences}
            renderItem={({item}) => <RenderDietItem data={item}/>}
            keyExtractor={item => item.id}
            />
        </View>

        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: colorMix.borderColor,
            paddingBottom: HEIGHT*0.035,
            paddingTop: HEIGHT*0.03,
            backgroundColor: colorMix.white,
            paddingHorizontal: WIDTH*0.05
        }}>
            <Text style={{
                fontSize: HEIGHT*0.028,
                fontWeight: 600,
                 color: colorMix.black
            }}>Medical Issues</Text>

            <FlatList 
            data={medicalIssues}
            renderItem={({item}) => <RenderDietItem data={item}/>}
            keyExtractor={item => item.id}
            />
        </View>

        <View style={{
            paddingBottom: HEIGHT*0.035,
            paddingTop: HEIGHT*0.03,
            backgroundColor: colorMix.white,
            paddingHorizontal: WIDTH*0.05
        }}>
            <Text style={{
                fontSize: HEIGHT*0.028,
                fontWeight: 600,
                 color: colorMix.black
            }}>Sort By</Text>

            <FlatList 
            data={sortBy}
            renderItem={({item}) => <RenderDietItem data={item}/>}
            keyExtractor={item => item.id}
            />
        </View>

    <View style={{
        backgroundColor: colorMix.white,
        paddingBottom: HEIGHT*0.2,
        // paddingTop: HEIGHT*0.04
    }}>
        <ButtonComponent text="Apply"/>
    </View>

    </View>
  )
}

export default FilterScreen