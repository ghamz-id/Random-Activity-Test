import { Text, View } from "react-native";
import { Data, DeleteMethod } from "../../models/types";
import BtnDelete from "../button/btnDelete";

export default function CardList({ act, index, deleteActivity }: { act: Data, index: number, deleteActivity: DeleteMethod }) {
	return (
		<View className="flex flex-row justify-between items-center bg-green-50 rounded-lg p-2 mb-2">
			<Text>
				{index + 1}. {act.activity}
			</Text>
			<BtnDelete deleteActivity={deleteActivity} index={index} />
		</View>
	);
}
