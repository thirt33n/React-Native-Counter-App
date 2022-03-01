import { StatusBar } from 'expo-status-bar';
import React,{ createContext,useContext,useState } from 'react';


const CounterContext = createContext()
//const TapContext  = createContext()

export default function ContextProvider({children}) {

    const [count,setCount] = useState(0);
    //const [taps,setTaps]  = useState(0);

    return( 
            <CounterContext.Provider value={{count,setCount/*,taps,setTaps*/}}>
                {children}
            </CounterContext.Provider>

    
    );
};


export function useCounterContext(){
    return useContext(CounterContext)
}
/*export function useTapContext(){
    return useContext(TapContext)
}
*/
