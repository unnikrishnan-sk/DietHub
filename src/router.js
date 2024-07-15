import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HubScreen from './screens/HubScreen';
import HubDetailScreen from './screens/HubDetailScreen';
import DashboardScreen from './screens/DashboardScreen';
import GuidelineScreen from './screens/GuidelineScreen';
import SelectCoach from './screens/SelectCoach';
import FilterScreen from './screens/FilterScreen';
import CoachDetailScreen from './screens/CoachDetailScreen';
import CoachSubscription from './screens/CoachSubscription';


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='coachdetail'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="hub" component={HubScreen} />
                    <Stack.Screen name="hubdetail" component={HubDetailScreen} />
                    <Stack.Screen name="dash" component={DashboardScreen} />
                    <Stack.Screen name="guidelines" component={GuidelineScreen} />
                    <Stack.Screen name="selectcoach" component={SelectCoach} />
                    <Stack.Screen name="filter" component={FilterScreen} />
                    <Stack.Screen name="coachdetail" component={CoachDetailScreen} />
                    <Stack.Screen name="subscription" component={CoachSubscription} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Router