import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from "../screen/homescreen";
import DetailScreen from '../screen/DetailScreen';
import SearchScreen from '../screen/SearchScreen';
import sideMenu from '../customeDrawer';
const Route = createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen,
    Search: SearchScreen
},
    {
        initialRouteName: "Home",
        headerMode: 'none'
    })



// const bottomNavigation = createMaterialBottomTabNavigator({
// home:Route,
// Login:LoginScreen,

// })
const Drawer = createDrawerNavigator({
    main: Route,
    Home: HomeScreen
}, {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: sideMenu,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    })
export default createAppContainer(createStackNavigator({
    Route: Drawer
}, {
        headerMode: () => null
    }));