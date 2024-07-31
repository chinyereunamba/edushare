import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList as FlatListType,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Styles } from "@/constants/Styles";
import { newColors } from "@/constants/Colors";

type IntroCardProps = {
  name: string;
  bg: string;
};

export function IntroCard({ name, bg }: IntroCardProps) {
  return (
    <View
      style={{
        width: Dimensions.get("window").width - 40,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 35,
        backgroundColor: bg,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          gap: 5,
        }}
      >
        <Text style={[Styles.headerText]}>{name}</Text>
        <Text style={[Styles.smallText, { width: "70%" }]}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
      </View>
    </View>
  );
}

interface IntroItem {
  name: string;
  bg: string;
}

interface CarouselProps {
  intro: IntroItem[];
}

const Carousel: React.FC<CarouselProps> = ({ intro }) => {
  const flatListRef = useRef<FlatListType<IntroItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<any> }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % intro.length;
      scrollToIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, intro.length]);

  const ItemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <View style={styles.carousel}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={intro}
        renderItem={({ item }) => (
          <IntroCard key={item.name} bg={item.bg} name={item.name} />
        )}
        keyExtractor={(item) => item.name}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        ItemSeparatorComponent={ItemSeparator}
      />
      <View style={styles.dotContainer}>
        {intro.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { opacity: index === currentIndex ? 1 : 0.3 }]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carousel: {
    position: "relative",
  },
  dotContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 10,
    alignSelf: "center",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#595959",
    marginHorizontal: 8,
  },
  itemSeparator: {
    width: 20,
  },
});
