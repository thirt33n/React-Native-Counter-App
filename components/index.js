import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default function Button(props) {

    let {title, action} = props

    return( 
            <TouchableOpacity style={styles.button} onPress={action}>
                <Text style={{ fontSize: 10, color: '#FF2281',fontSize: 20,}}>{title}</Text>
            </TouchableOpacity>

    
    );
};


const styles = StyleSheet.create ({

    button: 
    {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        color: 'blue',
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#4DA6FF',
        borderBottomColor: '#4DFFFF',
        borderTopColor: '#FF4D80',
        
    },




}



)