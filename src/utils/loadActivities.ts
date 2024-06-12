import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const loadSavedActivities = async () => {
    try {
        const savedData = await AsyncStorage.getItem('Activity');
        if (savedData) {
            return JSON.parse(savedData)
        }
    } catch (error) {
        Alert.alert('Error loading saved activities')
    }
};

export default loadSavedActivities