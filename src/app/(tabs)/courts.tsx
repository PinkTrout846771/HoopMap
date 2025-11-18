// HOME PAGE OF APP

import Box from "@/src/components/common/Box";
import CourtListItem from "@/src/components/common/CourtListItem";
import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Courts() {
  const courtItems = [
  {
    id: 1,
    title: "Riverside Park Court",
    distance: "0.4 mi",
    rating: 4.6,
    reviewCount: 128,
    type: "Outdoor",
    image: "https://example.com/court1.jpg",
  },
  {
    id: 2,
    title: "Uptown Rec Center Gym",
    distance: "1.2 mi",
    rating: 4.9,
    reviewCount: 412,
    type: "Indoor",
    image: "https://example.com/court2.jpg",
  },
  {
    id: 3,
    title: "Elm Street Half Court",
    distance: "0.7 mi",
    rating: 4.2,
    reviewCount: 54,
    type: "Outdoor",
    image: "https://example.com/court3.jpg",
  },
  {
    id: 4,
    title: "Greenwood Community Gym",
    distance: "2.3 mi",
    rating: 4.7,
    reviewCount: 289,
    type: "Indoor",
    image: "https://example.com/court4.jpg",
  },
  {
    id: 5,
    title: "Sunset Hills Park Court",
    distance: "1.8 mi",
    rating: 4.3,
    reviewCount: 96,
    type: "Outdoor",
    image: "https://example.com/court5.jpg",
  },
  {
    id: 6,
    title: "Eastside Athletic Club",
    distance: "3.1 mi",
    rating: 5.0,
    reviewCount: 178,
    type: "Indoor",
    image: "https://example.com/court6.jpg",
  },
  {
    id: 7,
    title: "Lakeside Courts",
    distance: "0.9 mi",
    rating: 4.1,
    reviewCount: 61,
    type: "Outdoor",
    image: "https://example.com/court7.jpg",
  },
  {
    id: 8,
    title: "Hillcrest Community Gym",
    distance: "2.9 mi",
    rating: 4.8,
    reviewCount: 203,
    type: "Indoor",
    image: "https://example.com/court8.jpg",
  },
  {
    id: 9,
    title: "Maplewood Playground Court",
    distance: "1.5 mi",
    rating: 4.0,
    reviewCount: 47,
    type: "Outdoor",
    image: "https://example.com/court9.jpg",
  },
  {
    id: 10,
    title: "Downtown Athletic Center",
    distance: "3.6 mi",
    rating: 4.9,
    reviewCount: 331,
    type: "Indoor",
    image: "https://example.com/court10.jpg",
  }
];

  return (
    <SafeAreaView style={{flex:1, padding: 16}}>
      <Box flex={1}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>Courts Page</Text>

        <Box width="100%">
          <FlatList
            data={courtItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Box><CourtListItem
                title={item.title}
                distance={item.distance}
                rating={item.rating}
                reviewCount={item.reviewCount}
                type={item.type}
                image={item.image}
              /></Box>
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Box height={24}/>}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
}
