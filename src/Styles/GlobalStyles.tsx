import { myColors } from "./Colors";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnBlue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,

    },
    btnLight :{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,

    },
    btnGray :{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,

    },
    smallTextLight:{
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark:{
        fontSize: 32,
        color: myColors.black,
    },
    // for keyboard 
    // row adds buttons from left to right
    row:{
        maxWidth: '100%',
        flexDirection : "row"
    
    },
    viewButtom:{
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber:{
        fontSize : 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
        
    },
    screenSecondNumber:{
        fontSize : 48,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',

    }


})