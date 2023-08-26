import * as React from "react";
import {
	StatusBar,
	FlatList,
	Image,
	Animated,
	Text,
	View,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	Easing,
	SafeAreaViewBase,
	SafeAreaView,
} from "react-native";
const { width, height } = Dimensions.get("screen");
import { faker } from "@faker-js/faker";

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
	return {
		key: faker.string.uuid(),
		image: faker.image.avatar(),
		name: faker.person.fullName(),
		jobTitle: faker.person.jobTitle(),
		email: faker.internet.email(),
	};
});
const BG_IMG =
	"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800";

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const ScrollItem = () => {
	const scrollY = React.useRef(new Animated.Value(0)).current;

	return (
		<View style={{ flex: 1, backgroundColor: "#fff" }}>
			<Image
				source={{ uri: BG_IMG }}
				style={StyleSheet.absoluteFillObject}
				blurRadius={80}
			/>
			<Animated.FlatList
				data={DATA}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: true }
				)}
				keyExtractor={(item) => item.key}
				contentContainerStyle={{
					padding: SPACING,
					paddingTop: StatusBar.currentHeight || 42,
				}}
				renderItem={({ item, index }) => {
					const inputRange = [
						-1,
						0,
						ITEM_SIZE * index,
						ITEM_SIZE * (index + 2),
					];
					const opacityInputRange = [
						-1,
						0,
						ITEM_SIZE * index,
						ITEM_SIZE * (index + 0.8),
					];

					const scale = scrollY.interpolate({
						inputRange,
						outputRange: [1, 1, 1, 0],
					});

					const opacity = scrollY.interpolate({
						inputRange: opacityInputRange,
						outputRange: [1, 1, 1, 0],
					});
					return (
						<Animated.View
							style={{
								flexDirection: "row",
								padding: SPACING,
								marginBottom: SPACING,
								backgroundColor: "rgba(255,255,255, 0.8)",
								borderRadius: 12,
								shadowColor: "#000",
								shadowOffset: {
									width: 0,
									height: 10,
								},
								shadowOpacity: 0.3,
								shadowRadius: 20,
								opacity,
								transform: [{ scale }],
							}}
						>
							<Image
								source={{ uri: item.image }}
								style={{
									width: AVATAR_SIZE,
									height: AVATAR_SIZE,
									borderRadius: AVATAR_SIZE,
									marginRight: SPACING / 2,
								}}
							/>
							<View>
								<Text style={{ fontSize: 22, fontWeight: "700" }}>
									{item.name}
								</Text>
								<Text style={{ fontSize: 18, opacity: 0.7 }}>
									{item.jobTitle}
								</Text>
								<Text style={{ fontSize: 14, opacity: 0.8, color: "#0099cc" }}>
									{item.email}
								</Text>
							</View>
						</Animated.View>
					);
				}}
			/>
		</View>
	);
};

export default ScrollItem;

const styles = StyleSheet.create({});
