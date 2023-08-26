import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
const _color = {
	active: "#2c2c2c",
	inactive: "#dcdcdc",
};
const LoadingIndicator = ({ size, Darkmode }) => {
	return (
		<MotiView
			from={{
				width: size,
				height: size,
				borderRadius: size / 2,
				borderWidth: 0,
				shadowOpacity: 0.5,
			}}
			animate={{
				width: size + 20,
				height: size + 20,
				borderRadius: (size + 20) / 2,
				borderWidth: size / 10,
				shadowOpacity: 1,
			}}
			transition={{
				type: "timing",
				duration: 1000,
				loop: true,
			}}
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				borderWidth: size / 10,
				borderColor: Darkmode ? "#fff" : "#000",
				shadowColor: Darkmode ? "#fff" : "#000",
				shadowOffset: { width: 0, height: 0 },
				shadowOpacity: 1,
				shadowRadius: 10,
			}}
		/>
	);
};

const transition = {
	type: "timing",
	duration: 300,
	easing: Easing.inOut(Easing.ease),
};
const Switch = ({ size, onPress, isActive }) => {
	const trackWidth = React.useMemo(() => {
		return size * 1.5;
	}, [size]);
	const trackheight = React.useMemo(() => {
		return size * 0.4;
	}, [size]);
	const knobSize = React.useMemo(() => {
		return size * 0.6;
	}, [size]);
	return (
		<Pressable onPress={onPress}>
			<View style={{ alignItems: "center", justifyContent: "center" }}>
				<MotiView
					animate={{
						backgroundColor: isActive ? _color.active : _color.inactive,
					}}
					transition={transition}
					style={{
						position: "absolute",
						width: trackWidth,
						height: trackheight,
						borderRadius: trackheight / 2,
						backgroundColor: _color.active,
					}}
				/>
				<MotiView
					transition={transition}
					animate={{
						translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
					}}
					style={{
						width: size,
						height: size,
						borderRadius: size / 2,
						backgroundColor: "#fff",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<MotiView
						transition={transition}
						animate={{
							width: isActive ? 0 : knobSize,
							borderColor: isActive ? _color.active : _color.inactive,
						}}
						style={{
							width: knobSize,
							height: knobSize,
							borderRadius: knobSize / 2,
							borderWidth: size * 0.1,
							borderColor: _color.active,
						}}
					/>
				</MotiView>
			</View>
		</Pressable>
	);
};
const LoadingLoop = () => {
	const [isActive, setIsActive] = React.useState(false);
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: isActive ? "#010100" : "#fff",
				}}
			>
				<LoadingIndicator size={100} Darkmode={isActive} />
			</View>
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#fff",
				}}
			>
				<Switch
					size={60}
					onPress={() => {
						setIsActive((isActive) => !isActive);
					}}
					isActive={isActive}
				/>
			</View>
		</View>
	);
};

export default LoadingLoop;

const styles = StyleSheet.create({});
