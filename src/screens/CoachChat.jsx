import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native'
// import { auth, db } from '../fire'
// import { firebase, firestore } from '../../firebase';
import { firebase } from '@react-native-firebase/firestore'
// import firestore from '@react-native-firebase/firestore'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { addIcon, chatSeenLogo, playIcon, playImage, profilePic, sendIcon, tickIcon, voiceIcon } from '../assets'
import { Avatar, Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'
import { chatData } from '../redux/slice/chatSlice'
import { useDispatch } from 'react-redux'
import ChatNavbar from './ChatNavbar'

const renderSend = (props) => {
    return (
      <>
       <Send {...props}
       containerStyle={{
        width: WIDTH*0.2,
        // marginLeft: WIDTH*0.3,
        // borderWidth:1,
        // zIndex:1,
        // flexDirection: 'row',
        // paddingRight: WIDTH*0.2,
        marginRight: WIDTH*0.06
        // alignItems:'center',
        // justifyContent: 'center',
        // backgroundColor: 'blue'
       }}
       >
      {/* <Image
            style={{
              position: 'absolute',
              height: HEIGHT*0.02,
              width: HEIGHT*0.02,
              // marginRight: WIDTH*0.035,
              // borderWidth:1,
              bottom: 20,
              // left: -270,
              // marginLeft: 10
            }}
            source={addIcon}
            />
      */}

        <View style={{
          // borderWidth:1,
          alignItems: 'center',
          justifyContent: 'center',
          width:WIDTH*0.1,
          flexDirection: 'row',
          paddingTop: HEIGHT*0.03,
          // paddingRight: WIDTH*0.1,
          // marginLeft: WIDTH*0.25,
          paddingHorizontal: WIDTH*0.1,
          // height: HEIGHT*0.1
          }}> 
      <Image 
      style={{
        height: HEIGHT*0.06,
        width: HEIGHT*0.08,
        justifyContent: 'center',
        // paddingRight: WIDTH*0.02,
        // zIndex: 1,
        // marginRight: WIDTH*0.2
      }}
      source={sendIcon}
      />
      {/* <Image
            style={{
              // position: 'absolute',
              height: HEIGHT*0.02,
              width: HEIGHT*0.02,
              marginRight: WIDTH*0.035
              // borderWidth:1,
              // bottom: 10,
              // left: -250,
              // marginLeft: 10
            }}
            source={addIcon}
            /> */}
            <Pressable
          
            >
      <Image 
      source={voiceIcon}
      />
      </Pressable>
        </View>
        </Send>
      </>
    );
  };

  const renderInputToolBar = (props) => {
    return(
      <>
      <InputToolbar
      {...props}
      containerStyle={{
        // borderWidth:1,
        // ...chatShadow,
        // marginRight: WIDTH*0.2,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colorMix.white,
        // height: HEIGHT*0.08,
        // width: WIDTH*0.8,
        zIndex:1,
        justifyContent: 'center'
      }}
      >
        {/* <Image 
        style={{
          borderWidth:1,
          marginLeft: WIDTH*0.02,
          height: HEIGHT*0.03,
          width: HEIGHT*0.03
        }}
        source={addIcon}
        /> */}
        {/* {props.children} */}
        {/* <View style={{
        // borderWidth:1,
        // height: HEIGHT*0.12,
        // width: WIDTH,
        backgroundColor: colorMix.white,
        paddingBottom: HEIGHT*0.1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: WIDTH*0.02
      }}>
         */}
        {/* <TextInput 
        style={{
          marginLeft: WIDTH*0.08,
          fontSize: HEIGHT*0.025,
          fontWeight: 200
          // borderWidth:1
        }}
        placeholder='Type something'
        placeholderTextColor={colorMix.black}
        /> */}
        {/* <Image 
        style={{
          // borderWidth:1,
          height:HEIGHT*0.035,
          width: HEIGHT*0.025,
          marginRight: WIDTH*0.08,
          // zIndex: 1,
          // marginLeft: WIDTH*0.1
        }}
        source={voiceIcon}
        /> */}
        {/* <Text>hi</Text> */}
      {/* </View> */}
     
      </InputToolbar>
      </>
    )
  }

   {/* <View style={{
        borderWidth:1,
        height: HEIGHT*0.16,
        backgroundColor: colorMix.white,
        paddingBottom: HEIGHT*0.1,
        alignItems: 'center',
        // justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: WIDTH*0.02
      }}>
        <Image 
        style={{
          // borderWidth:1,
          height: HEIGHT*0.03,
          width: HEIGHT*0.03
        }}
        source={addIcon}
        />
        <TextInput 
        style={{
          marginLeft: WIDTH*0.08,
          fontSize: HEIGHT*0.025,
          fontWeight: 200
          // borderWidth:1
        }}
        placeholder='Type something'
        placeholderTextColor={colorMix.black}
        />
        <Image 
        style={{
          marginLeft: WIDTH*0.4
        }}
        source={voiceIcon}
        />
        {/* <Text>hi</Text> */}
      {/* </View> */} 

  const RenderBubble = (props) => {
    return(
      <Bubble {...props}
      wrapperStyle={{
        right: {
          backgroundColor: colorMix.chatSendBackground,
          // width: WIDTH*0.7,
          borderBottomRightRadius: 0,
          borderTopRightRadius: HEIGHT*0.025,
          borderTopLeftRadius: HEIGHT*0.025,
          borderBottomLeftRadius: HEIGHT*0.025,
          paddingTop: HEIGHT*0.002,
          paddingLeft: WIDTH*0.025,
          paddingBottom: HEIGHT*0.002,
          paddingRight: HEIGHT*0.01,
          marginTop: HEIGHT*0.01,
          marginBottom: HEIGHT*0.01
        },
        left: {
          backgroundColor: colorMix.chatReceiveBackground,
          borderTopStartRadius: 0,
          borderTopRightRadius: HEIGHT*0.03,
          borderBottomLeftRadius: HEIGHT*0.03,
          borderBottomRightRadius: HEIGHT*0.03,
          paddingTop: HEIGHT*0.01,
          paddingLeft: WIDTH*0.01,
          paddingBottom: HEIGHT*0.01,
          paddingRight: WIDTH*0.025,
          marginBottom: HEIGHT*0.01
        }
      }}
      textStyle={{
        right: {
          fontSize: HEIGHT*0.02,
          color: colorMix.black
        },
      }}
      timeTextStyle={{
        right: {
          fontSize: HEIGHT*0.015,
          color: colorMix.chatShade
        },
        left: {
          fontSize: HEIGHT*0.02,
          color: colorMix.chatShade
        }
      }}
      />
    )
  }

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

const RenderAvatar = (props) => {
  return(
    <View style={{
      marginBottom: HEIGHT*0.07
    }}>
      <Avatar {...props} />
    </View>
  )
}

const RenderTicks = (message) => {
  if(message.sent){
    return <Image style={{height:HEIGHT*0.02}} source={tickIcon}/>
  } else if(message.received){
    return <Image style={{height:HEIGHT*0.02, tintColor: colorMix.green}} source={tickIcon}/>
  } else if(message.read){
    return <Image style={{height:HEIGHT*0.02, tintColor: colorMix.blue}} source={tickIcon}/>
  }
  return null;
}

const RenderFooter = () => {
  <Text style={{
    marginBottom: HEIGHT*0.02,
    marginLeft: WIDTH*0.1
  }}>Typing...</Text>
}

// dummydata = {
//   _id: 1,
//   text: 'Welcome !',
//   createdAt: new Date(),
//   user: {
//     _id: 1,
//     name: 'UserChat',
//     avatar: '',
//   },
//   image: '',
//   file: '',
// },

const CoachChat = () => {

    const [messages, setMessages] = useState([]);
    // console.log("mess",messages[0].createdAt);

      const dispatch = useDispatch();


  useEffect (()=>{
    const unsubscribe = firebase.firestore().collection('messages').orderBy('createdAt','desc').onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc=>({
        ...doc.data(),
        _id: doc.id,
        createdAt: doc?.data()?.createdAt ? doc?.data()?.createdAt?.toDate() : new Date(),
      }))
      // console.log("data",data[2].createdAt.toDate());
      setMessages(data); 
    })
    return () => unsubscribe();
  },[]);

    const onSend = useCallback(async(messages = []) => {
      const formattedMessage = {
        ...messages[0],
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await firebase.firestore().collection('messages').add(formattedMessage);
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        // console.log("mess", messages);
        // dispatch(chatData({...messages}));
    }, []);

  return (
    <View style={{
        flex:1
    }}>
        <ChatNavbar
        // heading="Blair Dota"
        />
        <View style={{
          flex:1,
            backgroundColor: colorMix.white,
            // justifyContent: 'center',
            // alignItems: 'center',
            paddingVertical: HEIGHT*0.025,
            paddingHorizontal: WIDTH*0.02,
            // ...chatShadow
            // marginTop: HEIGHT*0.02
        }}>
            {/* <Text style={{
                color: colorMix.chatShade,
                fontSize: HEIGHT*0.018,
                paddingTop: HEIGHT*0.05
            }}>Today</Text> */}
       

        <GiftedChat
        // style={{
        //   backgroundColor: colorMix.white
        // }}
        // listViewProps={{showVerticalScrollIndicator: false}}
        // showVerticalScrollIndicator={false}
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={messages=>onSend(messages)}
        user={{
            _id:2
        }}
        wrapperStyle={{
          // borderWidth: 1,
          // height: HEIGHT*0.3,
          // ...chatShadow,
          backgroundColor: colorMix.white,
          
        }}
        renderInputToolbar={renderInputToolBar}
        placeholder='Type something'
        renderSend={renderSend}
        renderBubble={RenderBubble}
        renderAvatar={RenderAvatar}
        renderTicks={()=>RenderTicks(messages)}
        renderFooter={RenderFooter}
        // renderCustomView={RenderCustomView}
        // isTyping
        alwaysShowSend
        scrollToBottom
        isLoadingEarlier
        renderAvatarOnTop
        // scrollToBottomComponent={scrollToBottomComponent}
        />

        {/* <FlatList 
         data={chatDetails}
         renderItem={({item}) => <RenderChats data={item}/>}
        keyExtractor={item => item.id}
        /> */}
         </View>
    </View>
  )
}

export default CoachChat