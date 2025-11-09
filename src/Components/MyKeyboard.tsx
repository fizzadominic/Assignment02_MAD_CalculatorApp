import React, { useCallback, useState } from 'react';
import { Styles } from "../Styles/GlobalStyles"
import { View, Text, Alert } from 'react-native';
import { myColors } from '../Styles/Colors';
import Button from './Button';


// what keys youre pressing and whats the result of your operations
export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("");
    // result can be a number or null
    const [result, setResult] = useState< number | null>(null);

    
    const handleNumberPress = (buttonValue: string) => {
        // Prevent adding a second decimal point
        if (buttonValue === "." && firstNumber.includes(".")) return;

        if (firstNumber.length < 10) {
            // string concatenation
            setFirstNumber(firstNumber + buttonValue)
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
        setResult(null);
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    const getResult = () => {
        const num1 = parseFloat(secondNumber); // Use parseFloat for decimal support
        const num2 = parseFloat(firstNumber);

        // Don't calculate if the numbers are invalid
        if (isNaN(num1) || isNaN(num2)) {
             setResult(null); // Or some error indicator
             return;
        }

        let calculationResult = 0;

        switch (operation) {
            case "+":
                calculationResult = num1 + num2;
                break;
            case "-":
                calculationResult = num1 - num2;
                break;
            case "*":
                // **FIXED: Changed - to ***
                calculationResult = num1 * num2;
                break;
            case "/":
                // **FIXED: Changed - to /**
                if (num2 === 0) {
                    clear();
                    // Handle division by zero
                   ;
                }
                calculationResult = num1 / num2;
                break;
            // Add case for % or others if you want them to work
            default:
                calculationResult = 0;
                break;
        }

        clear(); // Clear all state after calculation
        setResult(calculationResult);
    }

    // help us to manage the style of the first number depending on the length
    const firstNumberDisplay = () => {
        
        if (result !== null) {
            return (
                <Text style={result < 99999
                    ? [Styles.screenFirstNumber, { color: myColors.result }]
                    : [Styles.screenFirstNumber, { fontSize: 50, color: myColors.result }]}>
                    {result}
                </Text>
            );
        }

        if (firstNumber && firstNumber.length < 6) {
            return <Text style={Styles.screenFirstNumber}  >{firstNumber}</Text>
        }
        if (firstNumber === "") {
            return <Text style={Styles.screenFirstNumber}> {"0"} </Text>
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (<Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}> {firstNumber} </Text>);
        }
        if (firstNumber.length > 7) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]} >
                    {firstNumber}
                </Text>
            )
        }
    }

    return (

        <>
       
            {/* keyboard has position absolute */}
            <View style={Styles.viewButtom}>
                <View style={
                    {
                        height: 120,
                        width: '98%',
                        justifyContent: 'flex-end',
                        alignSelf: 'center'
                    }}> 
                    <Text  style={Styles.screenSecondNumber} >
                        {secondNumber}

                        <Text style={{color: 'purple', fontSize: 50, fontWeight : '500', }} >{operation}</Text>
                    </Text>
                    {firstNumberDisplay()}
                </View>
                <View style={Styles.row} >
                    <Button title='C' isGray onPress={clear} />
                   
                    <Button title='+/-' isGray onPress={() => handleOperationPress("+/-")} />
                   
                    <Button title='%' isGray onPress={() => handleOperationPress("%")} />
                    <Button title='/' isBlue onPress={() => handleOperationPress("/")} />
                </View>

                <View style={Styles.row} >
                    <Button title='7' onPress={() => { handleNumberPress("7") }} />      
                    <Button title='8' onPress={() => handleNumberPress("8")} />       
                   <Button title='9' onPress={() => handleNumberPress("9")} />
                    <Button title='x' isBlue onPress={() => handleOperationPress("*")} />
                </View>

                <View style={Styles.row} >
                    <Button title='4' onPress={() => { handleNumberPress("4") }} />
                    <Button title='5' onPress={() => handleNumberPress("5")} />
                    <Button title='6' onPress={() => handleNumberPress("6")} />
                    <Button title='-' isBlue onPress={() => handleOperationPress("-")} />
                </View>

                <View style={Styles.row} >
                    <Button title='1' onPress={() => { handleNumberPress("1") }} />          
                    <Button title='2' onPress={() => handleNumberPress("2")} />     
                    <Button title='3' onPress={() => handleNumberPress("3")} />
                    <Button title='+' isBlue onPress={() => handleOperationPress("+")} />
                </View>

                <View style={Styles.row} >
                   
                    <Button title='.' onPress={() => { handleNumberPress(".") }} />
                    <Button title='0' onPress={() => handleNumberPress("0")} />
                    <Button title='⌫' onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                    <Button title='=' isBlue onPress={() => getResult()} />
                </View>
            </View>
        </>
    );
}