import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from '../context/ThemeContext';
import {Styles} from '../Styles/GlobalStyles';

// some button are blue and gray those button not gonna change with theme
interface ButtonPops{
    onPress : () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;

}

// every time the theme changes we know inside the button
export default function Button({title, onPress, isBlue, isGray}: ButtonPops){
    const theme = useContext(ThemeContext);
    // style depending on the theme
    return(
        <TouchableOpacity
        style={
             isBlue
             ? Styles.btnBlue
             : isGray
             ? Styles.btnGray
             : theme === "light"
             ? Styles.btnLight
             : Styles.btnDark
        }
        onPress={onPress}
        >
        <Text 
        style={
            isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
            }    >
          
        {/* symbol of button and number it has  */}
        {title}
        </Text>
            
        </TouchableOpacity>

    );
}