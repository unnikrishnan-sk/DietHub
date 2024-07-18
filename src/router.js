import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HubScreen from './screens/HubScreen';
import HubDetailScreen from './screens/HubDetailScreen';
import DashboardScreen from './screens/DashboardScreen';
import GuidelineScreen from './screens/GuidelineScreen';
import SelectCoach from './screens/SelectCoach';
import FilterScreen from './screens/FilterScreen';
import CoachDetailScreen from './screens/CoachDetailScreen';
import CoachSubscription from './screens/CoachSubscription';
import SubscriptionDetailsScreen from './screens/SubscriptionDetailsScreen';
import CoachChat from './screens/CoachChat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colorMix } from './constants/color';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from './constants/dimension';
import { coachIcon, dashboardIcon, foodDeliveryIcon, hubIcon, trackerIcon } from './assets';
import WalkDetailsScreen from './screens/WalkDetailsScreen';
import GoalScreen from './screens/GoalScreen';

const tabBarData = [{ id: 0, logo: hubIcon, title: "The Hub", route: "hub" }, { id: 1, logo: dashboardIcon, title: "Dashboard", route: "myTabs" }, { id: 2, logo: coachIcon, title: "Coach", route: "selectcoach" }, { id: 3, logo: trackerIcon, title: "Tracker" }, { id: 4, logo: foodDeliveryIcon, title: "Food Delivery" }]

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const RenderTabBar = ({ data }) => {

    const { id, logo, title, route } = data;
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate(route)}
            style={{
                // borderWidth: 1,
                borderColor: colorMix.white,
                alignItems: 'center',
                // justifyContent: 'space-between',
                marginLeft: id !== 0 ? WIDTH * 0.03 : 0
            }}>
            <Image
                style={{
                    height: HEIGHT * 0.04,
                    width: HEIGHT * 0.04
                }}
                source={logo}
            />
            <Text style={{
                fontSize: HEIGHT * 0.02,
                color: colorMix.white
            }}>{title}</Text>
        </Pressable>
    )
}

const MyTabBar = () => {
    return (
        <View style={{
            // borderWidth: 1,
            height: HEIGHT * 0.1,
            backgroundColor: colorMix.black,
            paddingHorizontal: WIDTH * 0.05,
            paddingVertical: HEIGHT * 0.012,
            // alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <FlatList
                horizontal
                data={tabBarData}
                renderItem={({ item }) => <RenderTabBar data={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const MyTabs = () => {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="dashboard" component={DashboardScreen} />
            <Tab.Screen name="messaging" component={CoachChat} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='chat'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="hub" component={HubScreen} />
                    <Stack.Screen name="hubdetail" component={HubDetailScreen} />
                    {/* <Stack.Screen name="dash" component={DashboardScreen} /> */}
                    <Stack.Screen name="myTabs" component={MyTabs} />
                    <Stack.Screen name="guidelines" component={GuidelineScreen} />
                    <Stack.Screen name="selectcoach" component={SelectCoach} />
                    <Stack.Screen name="filter" component={FilterScreen} />
                    <Stack.Screen name="coachdetail" component={CoachDetailScreen} />
                    <Stack.Screen name="subscription" component={CoachSubscription} />
                    <Stack.Screen name="subscriptionDetail" component={SubscriptionDetailsScreen} />
                    <Stack.Screen name="chat" component={CoachChat} />
                    <Stack.Screen name="walkdetails" component={WalkDetailsScreen} />
                    <Stack.Screen name="goal" component={GoalScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Router