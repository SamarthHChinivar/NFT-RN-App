import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Image, Text } from "react-native";

import { assets, COLORS, NFTData, FONTS, SIZES } from "../constants";
import { FocusedStatusBar, NFTCard, HomeHeader } from "../components";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(null);
    } else {
      setNftData(filteredData);
    }
  };

  const NoDataComponent = () => {
    return (
      <>
        <Image
          source={assets.invalidSearch}
          style={{ height: 450, width: -450 }}
        />
        <View style={{ backgroundColor: COLORS.secondary, flex: 4, paddingBottom:SIZES.large }}>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.extraLarge,
              color: COLORS.primary,
              alignSelf: "center",
              marginTop: SIZES.large,
            }}
          >
            No Data Found 😔 ...
          </Text>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.extraLarge,
              color: COLORS.primary,
              alignSelf: "center",
              marginTop: SIZES.medium,
            }}
          >
            Invalid Search 🔍 ...
          </Text>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        {/* View for Rendering NFT List */}
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 225, backgroundColor: COLORS.primary }} />
          {!nftData && <NoDataComponent />}
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
