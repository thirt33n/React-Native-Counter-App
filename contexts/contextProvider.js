import { StatusBar } from 'expo-status-bar';
import React,{ createContext,useContext,useState } from 'react';


const CounterContext = createContext();


export default function ContextProvider({children}) {

    let [count,setCount] = useState(0);

    return( 
            <CounterContext.Provider style={styles.button} value={{count,setCount}}>
                {children}
            </CounterContext.Provider>

    
    );
};


export function useCounterContext(){
    return useContext(CounterContext)
}

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
})
