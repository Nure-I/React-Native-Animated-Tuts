import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import LinkedInModal from "@gcou/react-native-linkedin";

const Auth = () => {
	linkedRef = React.useRef();
	const [token, setToken] = useState({});
	const [user, setUser] = useState({});

	const shareData = {
		author: `urn:li:person:${user?.id}`,
		lifecycleState: "PUBLISHED",
		specificContent: {
			"com.linkedin.ugc.ShareContent": {
				shareCommentary: {
					text: "Hello World! This is my first Share on LinkedIn!",
				},
				shareMediaCategory: "NONE",
			},
		},
		visibility: {
			"com.linkedin.ugc.MemberNetworkVisibility": "PRIVATE",
		},
	};
	const share = () => {
		fetch("https://api.linkedin.com/v2/ugcPosts", {
			method: "POST",
			headers: {
				Host: "api.linkedin.com",
				Connection: "Keep-Alive",
				Authorization: "Bearer " + token.access_token,
			},
			body: JSON.stringify(shareData),
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				console.log("shared");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<View style={{}}>
				{!user?.id ? (
					<LinkedInModal
						ref={this.linkedRef}
						areaTouchText={{ color: "#fff" }}
						// shouldGetAccessToken={false}
						renderButton={
							<View
								style={{
									backgroundColor: "#0077b5",
									width: 300,
									height: 50,
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "row",
									borderRadius: 5,
								}}
							>
								<Image
									source={{
										uri: "https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png",
									}}
									style={{
										width: 300,
										height: 40,
										paddingHorizontal: 20,
										resizeMode: "contain",
										// tintColor: "#fff",
									}}
								/>
								{/* <Text style={{ color: "#fff" }}>LOG IN WITH LINKEDIN</Text> */}
							</View>
						}
						clientID="86vdl5eil4aao9"
						clientSecret="KBeh58t5Kw51HGQe"
						redirectUri="https://www.linkedin.com/developers/tools/oauth/redirect"
						// permissions={["profile", "email"]}
						authState="DCEeFWf45A53sdfKef424"
						onSuccess={(token) => {
							setToken(token),
								fetch(
									"https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
									{
										method: "GET",
										headers: {
											Host: "api.linkedin.com",
											Connection: "Keep-Alive",
											Authorization: "Bearer " + token.access_token,
										},
									}
								)
									.then((response) => response.json())
									.then((json) => {
										console.log(json);
										console.log(json.elements[0]),
											fetch("https://api.linkedin.com/v2/me", {
												method: "GET",
												headers: {
													Host: "api.linkedin.com",
													Connection: "Keep-Alive",
													Authorization: "Bearer " + token.access_token,
												},
											})
												.then((response) => response.json())
												.then((json) => {
													setUser(json),
														console.log(json),
														console.log(json.profilePicture);
												});
									})

									.catch((error) => {
										console.error(error);
									});
						}}
					/>
				) : (
					<TouchableOpacity onPress={() => share()}>
						<Text>Share in linkedIn</Text>
					</TouchableOpacity>
				)}
			</View>
			{/* <Button title="Log Out" onPress={linkedRef.current.logoutAsync()} /> */}
		</View>
	);
};

export default Auth;

const styles = StyleSheet.create({});
