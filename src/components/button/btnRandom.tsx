import { Text, TouchableOpacity } from "react-native";
import { BtnMethod } from "../../models/types";

export default function BtnRandomise({ fetchData }: { fetchData: BtnMethod }) {
    return (
        <TouchableOpacity onPress={fetchData} className="p-3 rounded bg-blue-500 mb-2">
            <Text className="text-center text-white font-bold">Randomise!</Text>
        </TouchableOpacity>
    )
}