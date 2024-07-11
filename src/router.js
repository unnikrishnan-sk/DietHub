import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HubScreen from './screens/HubScreen';
import HubDetailScreen from './screens/HubDetailScreen';
import DashboardScreen from './screens/DashboardScreen';


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='dash'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="hub" component={HubScreen} />
                    <Stack.Screen name="hubdetail" component={HubDetailScreen} />
                    <Stack.Screen name="dash" component={DashboardScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Router