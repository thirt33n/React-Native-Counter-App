import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-web';

export default function MainScreen(){
    
        const [count, setCount] = useState(0);
        return (
            <View style={styles.screen}>
                <StatusBar style='auto' />
                <LinearGradient colors={['#2B1B39','#1D1835','#1A1A37']}
                style={{ flex:1,alignItems:'center',
                justifyContent:'center', }}>
                    <Text style={styles.info}> ULTIMATE COUNTER </Text>
                    <View style={styles.board}>
                        <Text style={{ fontSize: 90,color:'#FF2281',marginTop:'100%',textAlign: 'center'}}>{count}</Text>
                    </View>
                </LinearGradient>
            </View>
        );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    board: {
        flex: 1,
        width: '50%',

    },
    info: {
        color: '#0062FF',
        marginTop: '20%',
        fontSize: 30,
        fontFamily: 'monospace',
        fontWeight: 'bold',
    }
})