import { Text, TouchableOpacity } from "react-native";
import { BtnMethod } from "../../models/types";

export default function BtnSave({ saveActivity }: { saveActivity: BtnMethod }) {
    return (
        <TouchableOpacity
            onPress={saveActivity}
            className="p-3 rounded bg-green-500"
        >
            <Text className="text-center text-white font-bold">Save</Text>
        </TouchableOpacity>
    )
}