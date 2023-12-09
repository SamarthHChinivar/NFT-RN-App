import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SIZES, FONTS, COLORS, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();

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
              navigation.navigate("Profile");
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
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
