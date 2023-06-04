import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as Splashscreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () =>{
    const [fontsLoaded] = useFonts({
        DMBold : require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium : require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular : require('../assets/fonts/DMSans-Regular.ttf')


    })
    const onLayOutRootView = useCallback( async () => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    },[fontsLoaded])
if(!fontsLoaded){
    return null;
}

    return <Stack onLayout={onLayOutRootView}/>;
}
export default Layout;