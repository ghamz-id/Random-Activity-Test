import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export default class FetchController {
    static async fetchData() {
        try {
            const response = await fetch('https://bored-api.appbrewery.com/random');
            return await response.json();
        } catch (error) {
            Alert.alert('Too many requests, please try again later.')
        }
    }
    static async loadSavedActivities() {
        try {
            const savedData = await AsyncStorage.getItem('Activity');
            if (savedData) {
                return JSON.parse(savedData)
            }
        } catch (error) {
            Alert.alert('Error loading saved activities')
        }
    }
}