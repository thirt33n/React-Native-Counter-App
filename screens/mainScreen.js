import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components';



export default function MainScreen(){
    
        const [count, setCount] = useState(0);
        const [taps, setTaps]  = useState(0);

        function increaser(){

            setCount(count + 1);
            setTaps(taps + 1);
        }

        function decreaser(){

            setCount(count - 1);
            setTaps(taps + 1);
        }

        function reset(){
            setCount(count - count);
            setTaps(taps + 1);
        }
        

        return (
            <View style={styles.screen}>
                <StatusBar style='auto' />
                <LinearGradient colors={['#2B1B39','#1D1835','#1A1A37']}
                style={{ flex:1,alignItems:'center',
                justifyContent:'center', }}>
                    <Text style={styles.info}> ULTIMATE COUNTER </Text>
                    <Text style= {styles.tapper}>Number of taps: {taps}</Text>
                    <View style={styles.board}>

                        <Text style={{ fontSize: 90,color:'#FF2281',marginTop:'9%',alignContent: 'center'}}>{count}</Text>

                    </View>
                    <View style={ { backgroundColor:'rgba(128,128,128,0.6)',height: '0.4%',width: '90%',borderRadius: 20,marginTop: '-50%' } }></View>
                    
                    <View style={{ display:'flex', flexDirection:'row',flex: 1,marginLeft: '20%',marginTop: "10%" }}>
                        <View style={{ display:'flex',flex: 0.6,}}>
                            <Button title={"+"} action={increaser}/>
                        </View>
                        <View style={{ display:'flex',flex: 0.6,}}>
                            <Button title={"-"} action={decreaser}/>
                        </View>
                    </View>

                    <View style={{ display:'flex', alignItems:'center',flex: 0.3,marginBottom:'20%',}}>
                        <Button title={'reset'} action={reset}/>
                    </View>

                </LinearGradient>
            </View>
        );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    board: {
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        width: '60%',
        marginBottom: '60%',
        marginTop: '25%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#4DA6FF',
        borderBottomColor: '#4DFFFF',
        borderTopColor: '#FF4D80',
        paddingBottom: 5,

    },
    info: {
        color: '#EBECE8',
        marginTop: '20%',
        fontSize: 30,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0.9)',
        borderRadius: 10,
    },
    tapper: {
        color: 'grey',
        fontSize: 15,
        marginTop: '25%',
        fontFamily: 'monospace',

    }
})