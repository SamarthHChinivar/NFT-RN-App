import React from "react";
import { WebView } from "react-native-webview";
import { View, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
        source={{ uri: "http://samarth-portfolio-website.000webhostapp.com" }}
        //allows to open links in the webview itself
        setSupportMultipleWindows={false}
      />
    </>
  );
};

export default Profile;
