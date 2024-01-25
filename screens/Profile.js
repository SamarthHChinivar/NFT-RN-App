import React, { useState, useRef, useEffect } from "react";
import { WebView } from "react-native-webview";
import { View, StatusBar, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import ProgressBar from "react-native-progress/Bar";

import { CircleButton } from "../components";
import { assets, COLORS, SIZES, FONTS } from "../constants";

const Profile = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const [renderWebView, setRenderWebView] = useState(false);
  const webViewRenderRef = useRef(null);

  useEffect(() => {
    return () => {
      setRenderWebView(false);
    };
  }, []);

  const Loading = () => {
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          marginBottom: StatusBar.currentHeight + 300,
        }}
      >
        <Image
          source={assets.babyLoading}
          style={{
            width: "90%",
            height: "70%",
            marginBottom: SIZES.medium,
            marginTop: "35%",
          }}
        />
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
            marginTop: SIZES.base / 2,
          }}
        >
          Hang On ⌛ ...
        </Text>
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
            marginTop: SIZES.base / 2,
          }}
        >
          We're Loading this Site for You 🚀 ...
        </Text>
      </View>
    );
  };

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

      {!renderWebView ? (
        <ProgressBar
          progress={progress}
          color={"blue"}
          borderWidth={0}
          borderRadius={0}
          animationType={"spring"}
        />
      ) : null}

      <WebView
        onError={() => {
          Alert.alert(
            "Internet Disconnected ⚠️",
            "Please check your internet connection and try again.",
            [
              {
                text: "Go Back",
                onPress: () => {
                  navigation.goBack();
                },
              },
            ],
            { cancelable: false }
          );
        }}
        ref={webViewRenderRef}
        onLoad={() => {
          <Loading />;
          if (renderWebView) setRenderWebView(false);
        }}
        //Destructuring the nativeEvent object in the below line:
        onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
        onLoadEnd={() =>
          setTimeout(() => {
            setRenderWebView(true);
          }, 750)
        }
        style={{ flex: 1 }}
        source={{ uri: "https://samarth-portfolio-website.000webhostapp.com" }}
        //allows to open links in the webview itself
        setSupportMultipleWindows={false}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={true}
      />
    </>
  );
};

export default Profile;
