import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const ImageSliderCard = () => {
  const images = [
    "https://cdn.weddingwishlist.com/wp-content/uploads/2019/01/Wedding-planners-in-India.png",
    "https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/IWP-Indian_Wedding_Planners/iwp-13.jpg",
    "https://www.theknot.com/tk-media/images/93ddc5c5-e090-432a-b781-90835b5aea3c",
    "https://mymandap.in/wp-content/uploads/2021/12/Capture5-e1640672153240-1024x684.png",
  ];

  return (
    <View style={{marginTop:10}}>
      <Text
        style={{
          margin: 10,
          fontSize: 16,
          fontWeight: "700",
        }}
      >
        Trending Now
      </Text>
      <SliderBox
        images={images}
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default ImageSliderCard;
