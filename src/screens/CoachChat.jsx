import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { chatSeenLogo, playIcon, playImage, profilePic } from '../assets'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { GiftedChat, Send } from 'react-native-gifted-chat'

const chatDetails = [{id:0, profilepic: profilePic, message: "Hi, thank you for subscribing with me!", time: "8:07 AM", voice: false, voiceDur: null, msgStatus: "received"}, {id:1, profilepic: profilePic, message: "Can you start by giving me an introduction of your daily lifestyle?", time: "8:07 AM", voice: false, voiceDur: null, msgStatus: "received"}, {id:2, profilepic: profilePic, message: "Sure.", time: "8:07 AM", voice: false, voiceDur: null, msgStatus: "send"}, {id:3, profilepic: profilePic, message: "", time: "8:08 AM", voice: true, voiceDur: "0.09", msgStatus: 'send'}, {id:4, profilepic: profilePic, message: "", time: "8:09 AM", voice: true, voiceDur: "0.02", msgStatus: "received"}]

const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={{flexDirection: 'row'}}>
          <Image
          source={profilePic}
            // type="font-awesome"
            // name="paperclip"
            // style={{
            //   marginBottom: 10,
            //   marginRight: 10,
            //   transform: [{rotateY: '180deg'}],
            // }}
            // size={25}
            // color='blue'
            // tvParallaxProperties={undefined}
          />
          <Image
          source={playIcon}
            // type="font-awesome"
            // name="send"
            // style={{marginBottom: 10, marginRight: 10}}
            // size={25}
            // color='orange'
            // tvParallaxProperties={undefined}
          />
        </View>
      </Send>
    );
  };

const RenderChats = ({data}) => {

    const {id, profilepic, message, time, voice, voiceDur, msgStatus } = data;

    return(
        <View style={{
            // borderWidth:1,
            backgroundColor: colorMix.white,
            paddingHorizontal: WIDTH*0.05,
            flexDirection: msgStatus==="received" ? 'row': 'row-reversed',
            paddingRight: msgStatus==="received"? WIDTH*0.3: WIDTH*0.05
            // alignItems: 'flex-start'
            // height: HEIGHT*0.18
        }}>
            {msgStatus==="received" ? ( <Image 
            style={{
                height: HEIGHT*0.07,
                width: HEIGHT*0.07,
                marginTop: HEIGHT*0.025
            }}
            source={profilepic}
            />) : null}
           
            <View style={{
                // paddingHorizontal: WIDTH*0.1,
                // borderWidth:1,
                // width: WIDTH*0.6,
                marginLeft: WIDTH*0.06,
                marginTop: HEIGHT*0.05,
                paddingLeft: msgStatus==="received"?HEIGHT*0.018:HEIGHT*0.035,
                paddingRight: HEIGHT*0.018,
                paddingTop: HEIGHT*0.01,
                paddingBottom: HEIGHT*0.01,
                borderBottomLeftRadius: HEIGHT*0.025,
                borderBottomRightRadius: msgStatus==="received" ? HEIGHT*0.025 : 0,
                borderTopRightRadius: HEIGHT*0.025,
                borderTopLeftRadius: msgStatus==="send"? HEIGHT*0.025:0,
                backgroundColor: msgStatus==="received" ? colorMix.chatReceiveBackground : colorMix.chatSendBackground,
                alignSelf: msgStatus==="received"? "flex-start" : "flex-end",
            }}>
                {voice ? (
                    <View style={{
                        // borderWidth:1,
                        width: WIDTH*0.6,
                        height: HEIGHT*0.055,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image 
                        style={{
                            height: HEIGHT*0.03,
                            width: HEIGHT*0.03,
                            marginTop: HEIGHT*0.02,
                            marginLeft: WIDTH*0.02
                        }}
                        source={playIcon}
                        />
                        <View style={{
                            // borderWidth: 1,
                            width: WIDTH*0.45,
                            height: HEIGHT*0.005,
                            marginTop: HEIGHT*0.02,
                            marginLeft: WIDTH*0.05,
                            backgroundColor: colorMix.playBackground
                        }}></View>
                    </View>
                ) : (
                    <Text style={{
                        fontSize: HEIGHT*0.02,
                        color: colorMix.black,
                        textAlign: msgStatus==="received" ? 'left':'right',
                    }}>{message}</Text>
                )}
            <View style={{
                flexDirection: 'row',
                // alignItems: 'flex-start'
            }}>
            <Text style={{
                color: colorMix.chatShade,
                fontSize: HEIGHT*0.016,
                marginTop: HEIGHT*0.01,
                textAlign: msgStatus==="received" ? 'left':'right',
            }}>{time}</Text>
            {msgStatus==="send" ? (
                <Image 
                style={{
                    // alignItems: 'flex-end',
                    marginTop: HEIGHT*0.002
                }}
                source={chatSeenLogo}
                />
            ) : null}
            </View>
            </View>
        </View>

    )
}

const CoachChat = () => {

    const [messages, setMessages] = useState([{
        _id: 1,
        text: 'Welcome !',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'UserChat',
          avatar: '',
        },
        image: '',
        file: '',
      },]);

    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Hello developer',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://placeimg.com/140/140/any',
    //             },
    //         },
    //     ])
    // }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

  return (
    <View>
        <Navbar />
        <View style={{
            backgroundColor: colorMix.white,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: colorMix.chatShade,
                fontSize: HEIGHT*0.018,
                paddingTop: HEIGHT*0.05
            }}>Today</Text>
        </View>

        {/* <View style={{flexDirection: 'row'}}>
        <Image
          type="font-awesome"
          name="paperclip"
          style={{
            marginBottom: 10,
            marginRight: 10,
            transform: [{rotateY: '180deg'}],
          }}
          size={25}
          color='blue'
          tvParallaxProperties={undefined}
        />
        <Icon
          type="font-awesome"
          name="send"
          style={{marginBottom: 10, marginRight: 10}}
          size={25}
          color='orange'
          tvParallaxProperties={undefined}
        />
      </View> */}

        <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={messages=>onSend(messages)}
        user={{
            _id:2
        }}
        renderSend={renderSend}
        alwaysShowSend
        scrollToBottom
        // scrollToBottomComponent={scrollToBottomComponent}
        />

        {/* <FlatList 
         data={chatDetails}
         renderItem={({item}) => <RenderChats data={item}/>}
        keyExtractor={item => item.id}
        /> */}
    </View>
  )
}

export default CoachChat