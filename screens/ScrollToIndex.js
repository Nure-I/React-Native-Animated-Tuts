import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import { faker } from "@faker-js/faker";
import { MotiView } from "moti";
const data = [...Array(20).keys()].map(() => ({
	key: faker.string.uuid(),
	job: faker.animal.crocodilia(),
}));

const _colors = {
	active: "#FCD259ff",
	inactive: "#FCD25900",
};

const _spacing = 10;
const ScrollToIndex = () => {
	const ref = React.useRef(null);
	const [index, setIndex] = React.useState(0);
	const [viewPosition, setViewPosition] = React.useState(0);

	React.useEffect(() => {
		ref.current?.scrollToIndex({
			index,
			animated: true,
			viewOffset: viewPosition === 0 ? _spacing : 0,
			viewPosition, // percentage from the viewport starting from left handside
		});
	}, [index, viewPosition]);
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<FlatList
				ref={ref}
				initialScrollIndex={index}
				style={{ flexGrow: 0 }}
				data={data}
				keyExtractor={(item) => item.key}
				contentContainerStyle={{ paddingLeft: _spacing }}
				showsHorizontalScrollIndicator={false}
				horizontal
				renderItem={({ item, index: findex }) => {
					return (
						<TouchableOpacity
							onPress={() => {
								setIndex(findex);
							}}
						>
							<MotiView
								animate={{
									backgroundColor:
										findex === index ? _colors.active : _colors.inactive,
									opacity: findex === index ? 1 : 0.6,
								}}
								transition={{ duration: 500 }}
								style={{
									marginRight: _spacing,
									padding: _spacing,
									borderWidth: 2,
									borderColor: _colors.active,

									borderRadius: 12,
								}}
							>
								<Text style={{ color: "#36303f", fontWeight: "700" }}>
									{item.job}
								</Text>
							</MotiView>
						</TouchableOpacity>
					);
				}}
			/>
			<View
				style={{
					alignItems: "center",
					flexDirection: "row",
					marginTop: _spacing + 10,
				}}
			>
				<View style={{ alignItems: "center" }}>
					<Text
						style={{
							color: "#36303f",
							fontWeight: "700",
							marginBottom: _spacing,
						}}
					>
						Scroll position
					</Text>
					<View
						style={{
							flexDirection: "row",
							width: 210,
							justifyContent: "center",
						}}
					>
						<TouchableOpacity
							onPress={() => {
								setViewPosition(0);
							}}
						>
							<View
								style={{
									padding: _spacing,
									backgroundColor: "#FCD259",
									borderRadius: _spacing,
									marginRight: _spacing,
								}}
							>
								<Entypo name="align-left" size={24} color="#36303f" />
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setViewPosition(0.5);
							}}
						>
							<View
								style={{
									padding: _spacing,
									backgroundColor: "#FCD259",
									borderRadius: _spacing,
									marginRight: _spacing,
								}}
							>
								<Entypo
									name="align-horizontal-middle"
									size={24}
									color="#36303f"
								/>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setViewPosition(1);
							}}
						>
							<View
								style={{
									padding: _spacing,
									backgroundColor: "#FCD259",
									borderRadius: _spacing,
									marginRight: _spacing,
								}}
							>
								<Entypo name="align-right" size={24} color="#36303f" />
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ alignItems: "center" }}>
					<Text
						style={{ color: "#36303f", fontWeight: "700", marginBottom: 10 }}
					>
						Navigation
					</Text>
					<View
						style={{
							flexDirection: "row",
							width: 210,
							justifyContent: "center",
						}}
					>
						<TouchableOpacity
							onPress={() => {
								if (index === 0) {
									return;
								}
								setIndex(index - 1);
							}}
						>
							<View
								style={{
									padding: _spacing,
									backgroundColor: "#FCD259",
									borderRadius: _spacing,
									marginRight: _spacing,
								}}
							>
								<Feather name="arrow-left" size={24} color="#36303f" />
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								if (index === data.length - 1) {
									return;
								}
								setIndex(index + 1);
							}}
						>
							<View
								style={{
									padding: _spacing,
									backgroundColor: "#FCD259",
									borderRadius: _spacing,
									marginRight: _spacing,
								}}
							>
								<Feather name="arrow-right" size={24} color="#36303f" />
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ScrollToIndex;

const styles = StyleSheet.create({});
