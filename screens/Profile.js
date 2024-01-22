import React from "react";
import { WebView } from "react-native-webview";
import { View, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { CircleButton } from "../components";
import { assets, COLORS } from "../constants";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.gray} />
      <View style={{ zIndex: 2 }}>
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10}
        />
      </View>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: "https://samarth-portfolio-website.000webhostapp.com" }}
        //allows to open links in the webview itself
        setSupportMultipleWindows={false}
        onError={() => {
          Alert.alert(
            "No Internet Connection",
            "Please check your internet connection and try again.",
            [
              {
                text: "OK",
                onPress: () => {
                  navigation.goBack();
                },
              },
            ],
            { cancelable: false }
          );
        }}
        startInLoadingState={true}
      />
    </>
  );
};

export default Profile;
