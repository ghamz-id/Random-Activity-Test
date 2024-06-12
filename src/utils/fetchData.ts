import { Alert } from "react-native";

const fetchData = async () => {
    try {
        const response = await fetch('https://bored-api.appbrewery.com/random');
        const data = await response.json();
        return data
    } catch (error) {
        Alert.alert('Too many requests, please try again later.')
    }
};

export default fetchData;
