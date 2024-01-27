import { View, Text } from "react-native";
import Toast from "react-native-toast-message";

import { COLORS, FONTS, SIZES } from "../constants";

const toastConfig = {
  heartToast: ({ text1, text2, ...rest }) => (
    <View style={{ height: 50, backgroundColor: "#FFB6C1", padding: 16 }}>
      <Text style={{ color: "#000080" }}>{text1}</Text>
      <Text style={{ color: "white" }}>{text2}</Text>
    </View>
  ),

  bidToast: ({ text1, text2, ...rest }) => (
    <View style={{ height: 90, backgroundColor: "#F0FFFF", padding: 24 }}>
      <Text
        style={{
          color: COLORS.primary,
          marginBottom: "1%",
          alignSelf: "center",
          fontFamily: FONTS.bold,
          fontSize: SIZES.medium,
        }}
      >
        {text1}
      </Text>
      <Text
        style={{
          color: COLORS.secondary,
          marginBottom: "4%",
          alignSelf: "center",
          fontFamily: FONTS.medium,
          fontSize: SIZES.large,
        }}
      >
        {text2}
      </Text>
    </View>
  ),
};

export default toastConfig;
