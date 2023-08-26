import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AdvancedCarouselDailyMeal from "./screens/AdvancedCarouselDailyMeal";
import Auth from "./screens/Auth";
import CallWaveThingy from "./screens/CallWaveThingy";
import Carousel from "./screens/Carousel";
import DynamicTabIndicator from "./screens/DynamicTabIndicator";
import GalleryView from "./screens/GalleryView";
import LoadingLoop from "./screens/LoadingLoop";
import ScrollItem from "./screens/ScrollItem";
import ScrollToIndex from "./screens/ScrollToIndex";
import StickyFooter from "./screens/StickyFooter";

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			{/* <ScrollToIndex /> */}
			{/* <CallWaveThingy /> */}
			{/* <LoadingLoop /> */}
			{/* <GalleryView /> */}
			{/* <ScrollItem /> */}
			{/* <Carousel /> */}
			{/* <StickyFooter /> */}
			{/* <AdvancedCarouselDailyMeal /> */}
			{/* <Auth /> */}
			<DynamicTabIndicator />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
