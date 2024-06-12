import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DeleteMethod } from "../../models/types";

export default function BtnDelete({ deleteActivity, index }: { deleteActivity: DeleteMethod, index: number }) {
    return (
        <TouchableOpacity onPress={() => deleteActivity(index)}>
            <AntDesign name="delete" size={20} color="red" />
        </TouchableOpacity>
    )
}