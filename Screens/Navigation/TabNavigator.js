import React from "react";
import { StyleSheet } from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import {RFValue} from "react--native-responsive-fontsize"

import Feed from "../Feed";
import CreateStory from "../CreateStory";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return(
        <Tab.Navigator 
            labeled = {false}
            barStyle = {styles.BottomTabStyle}
            screenOptions = {({route})=>({
                tabBarIcon:({focused, color, size})=>{
                    let iconName
                    if(route.name=== "Feed"){
                        iconName = focused ? "home" : "home-outline"
                    }
                    else if(route.name=== "CreateStory"){
                        iconName = focused ? "add-circle" : "add-circle-outline"
                    }
                    return <Ionicons name = {iconName} size = {RFValue(25)} color = {color} style = {styles.icons}/>
                }
            })}
            tabBarOptions = {{
                activeTintColor : "#ee8249",
                inactiveTintColor : "gray"
            }}
            >
                <Tab.Screen name = "Feed" component = {Feed}/>
                <Tab.Screen name = "CreateStory" component = {CreateStory}/>
            </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    BottomTabStyle: {
        backgroundColor: "#2f345d",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)

    }
})

export default BottomTabNavigator