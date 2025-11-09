import React, {useState} from 'react';
import { ThemeContext } from './src/context/ThemeContext';
import { View, Text, StyleSheet, Switch} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { myColors } from './src/Styles/Colors';
import MyKeyboard from './src/Components/MyKeyboard';



export default function App() {
  const [theme, setTheme]= useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaProvider>
      <View style={theme === 'light'? styles.container: [styles.container, {backgroundColor: '#000'}] }>
      
          <Switch value={theme === 'light'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        
        <MyKeyboard/>

       
      </View>
    </SafeAreaProvider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container:{

    flex: 1,
    backgroundColor:myColors.light,
    alignItems:'center',
    justifyContent:'flex-start'


  

  },

})