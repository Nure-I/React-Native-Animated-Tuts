import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Dimensions,
	Easing,
	Animated,
	Image,
	Button,
	SafeAreaView,
} from "react-native";
import React from "react";
import data, { detailsList, iconsByType } from "../data/data";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
	Directions,
	FlingGestureHandler,
	State,
} from "react-native-gesture-handler";
import { Transition, Transitioning } from "react-native-reanimated";
import posed, { Transition as PoseTransition } from "react-native-pose";

const width = 412;
const height = 758;

const DURATION = 700;
const TITLE_SIZE = 36;
const SPACING = 80;
const IMAGE_SIZE = width * 0.8;

const colors = {
	lightBg: "#f2f2f2",
	darkBg: "#2c2d51",
	lightText: "#e5e5dd",
	darkText: "#A5a6aa",
};
const Item = ({ children, style }) => {
	return (
		<View
			style={[
				{
					justifyContent: "center",
					overflow: "hidden",
					backgroundColor: "transparent",
				},
				style,
			]}
		>
			{children}
		</View>
	);
};

const Icon = ({ type }) => {
	return (
		<SimpleLineIcons
			name={type}
			size={26}
			color="#a5a6aa"
			style={{ marginRight: 15, height: 26 }}
		/>
	);
};

const Description = ({ index, text, color }) => {
	return (
		<Item>
			<Text key={`description-${index}`} style={{ fontSize: 16, color }}>
				{text}
			</Text>
		</Item>
	);
};

const Title = ({ index, text, color }) => {
	return (
		<Item style={{ height: TITLE_SIZE * 3, justifyContent: "flex-end" }}>
			<Text
				key={`title-${index}`}
				style={{ fontSize: TITLE_SIZE, fontWeight: "900", color }}
			>
				{text}
			</Text>
		</Item>
	);
};

const Details = ({ color, index }) => {
	return (
		<View style={{ marginVertical: SPACING }}>
			{detailsList.map((key) => {
				return (
					<View
						key={key}
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 25,
						}}
					>
						<Icon type={iconsByType[key]} />
						<Item style={{ flex: 1, height: 26, justifyContent: "center" }}>
							<Text
								key={`${key}-${index}`}
								style={{ fontSize: 16, color, fontWeight: "700" }}
							>
								{data[index][key]}
							</Text>
						</Item>
					</View>
				);
			})}
		</View>
	);
};

// const transition = (
// 	<Transition.Together>
// 		<Transition.Out
// 			type="slide-bottom"
// 			durationMs={DURATION}
// 			interpolate="easeIn"
// 		/>
// 		<Transition.Change />
// 		<Transition.In
// 			type="slide-bottom"
// 			durationMs={DURATION}
// 			interpolate="easeOut"
// 		/>
// 	</Transition.Together>
// );

const config = {
	transition: {
		type: "tween",
		duration: DURATION,
		easing: Easing.elastic(0.9),
	},
};

const posedView = posed.View({
	enter: { opacity: 1, rotate: "0deg", ...config },
	exit: { opacity: 0, rotate: "180deg", ...config },
});

const AdvancedCarouselDailyMeal = () => {
	const [index, setIndex] = React.useState(0);
	const color = index % 2 === 1 ? colors.lightText : colors.darkText;
	const headingColor = index % 2 === 1 ? colors.lightText : colors.darkBg;
	const activeIndex = React.useRef(new Animated.Value(0)).current;
	const animation = React.useRef(new Animated.Value(0)).current;

	React.useEffect(() => {
		Animated.timing(animation, {
			toValue: activeIndex,
			duration: DURATION * 0.7,
			useNativeDriver: true,
		}).start();
		StatusBar.setBarStyle(
			index % 2 === 0 ? "dark-content" : "light-content",
			true
		);
	});

	const setActiveIndex = React.useCallback((newIndex) => {
		activeIndex.setValue(index + 1);
		ref.current.animatedNextTransition();
		setIndex(newIndex);
	});

	const translateY = animation.interpolate({
		inputRange: [-1, 0, 1],
		outputRange: [height, 0, -height],
	});

	const ref = React.useRef();

	return (
		// <FlingGestureHandler
		// 	key="up"
		// 	direction={Directions.UP}
		// 	onHandlerStateChange={({ nativeEvent }) => {
		// 		if (nativeEvent.state === State.END) {
		// 			if (index === data.length - 1) {
		// 				return;
		// 			}
		// 			setActiveIndex(index + 1);
		// 		}
		// 	}}
		// >
		// 	<FlingGestureHandler
		// 		key="down"
		// 		direction={Directions.DOWN}
		// 		onHandlerStateChange={({ nativeEvent }) => {
		// 			if (nativeEvent.state === State.END) {
		// 				if (index === 0) {
		// 					return;
		// 				}
		// 				setActiveIndex(index - 1);
		// 			}
		// 		}}
		// 	>
		<SafeAreaView style={{ flex: 1 }}>
			<Animated.View
				style={[
					StyleSheet.absoluteFillObject,
					{ height: height * data.length, transform: [{ translateY }] },
				]}
			>
				{data.map((_, i) => {
					return (
						<View
							key={i}
							style={{
								height,
								backgroundColor: i % 2 === 0 ? colors.lightBg : colors.darkBg,
							}}
						></View>
					);
				})}
			</Animated.View>
			<PoseTransition>
				{index % 2 === 0 ? (
					<posedView
						key="image0"
						style={[
							styles.imageContainer,
							{
								borderColor: index % 2 === 0 ? colors.darkBg : colors.lightBg,
							},
						]}
					>
						<Image source={{ uri: data[index].image }} style={styles.image} />
					</posedView>
				) : (
					<posedView
						key="image1"
						style={[
							styles.imageContainer,
							{
								borderColor: index % 2 === 0 ? colors.darkBg : colors.lightBg,
							},
						]}
					>
						<Image source={{ uri: data[index].image }} style={styles.image} />
					</posedView>
				)}
			</PoseTransition>
			<Transitioning.View
				ref={ref}
				// transition={transition}
				style={{ padding: 20, flex: 1, justifyContent: "space-evenly" }}
			>
				<Title color={headingColor} index={index} text={data[index].title} />
				<Details color={color} index={index} />
				<Description
					index={index}
					text={data[index].description}
					color={headingColor}
				/>
			</Transitioning.View>
		</SafeAreaView>
		// 	</FlingGestureHandler>
		// </FlingGestureHandler>
	);
};
export default AdvancedCarouselDailyMeal;

const styles = StyleSheet.create({});
