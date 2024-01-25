import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SIZES, FONTS, COLORS, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [activity, setActivity] = useState(false);

  const LoadActivity = ({ setActivity }) => {
    // useEffect(() => {
    //   const timeoutId = setTimeout(() => {
    //     setActivity(false);
    //   }, 750);

    //   return () => {
    //     clearTimeout(timeoutId);
    //   };
    // }, [setActivity]);
    setTimeout(() => {
      setActivity(false);
    }, 750);

    return <ActivityIndicator size="large" />;
  };

  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 100,
            height: 50,
          }}
        />

        <View style={{ width: 50, height: 50 }}>
          <TouchableOpacity
            onPress={() => {
              setTimeout(() => {
                navigation.navigate("Profile");
              }, 200);
            }}
          >
            <Image
              source={assets.person01}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </TouchableOpacity>
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              right: 0,
              bottom: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
          }}
        >
          Hi Samarth 👋🏻
        </Text>
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's Find a Masterpiece
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.secondary,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.small,
            }}
          />
          <TextInput
            placeholder="Search NFT's"
            style={{ flex: 1, color: COLORS.white }}
            onChangeText={(text) => {
              setSearchText(text);
              onSearch(text);
              setActivity(true);
            }}
            value={searchText}
          />
          <TouchableOpacity
            onPress={() => {
              if (searchText) {
                onSearch("");
                setSearchText("");
              }
              if (activity) {
                setActivity(false);
              }
            }}
          >
            <Image
              source={assets.cancelButton}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        {activity && <LoadActivity setActivity={setActivity} />}
      </View>
    </View>
  );
};

export default HomeHeader;
