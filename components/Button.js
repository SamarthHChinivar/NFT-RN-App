import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: COLORS.white,
          position: "absolute",
          borderRadius: SIZES.extraLarge,
          alignItems: "center",
          justifyContent: "center",
          ...SHADOWS.light,
          ...props,
        }}
        onPress={handlePress}
      >
        <Image
          source={imgUrl}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const RectButton = () => {
  return <></>;
};
