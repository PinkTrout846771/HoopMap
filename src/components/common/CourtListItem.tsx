import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import Box from "../../components/common/Box";
import Text from "../../components/common/Text";

interface Props {
    title: string,
    distance: string,
    rating: number,
    reviewCount: number,
    type: string,
    image: string,
}

export default function CourtListItem({title, distance, rating, reviewCount, type, image}: Props) {
    return (
        <Box padding="m" backgroundColor="secondary" borderRadius="m" flexDirection="column" gap="s">
            <Box backgroundColor="accent" width="100%" height={128} borderRadius="s"/> 
            <Box flexDirection="row" justifyContent="space-between">
                <Box flex={1}>
                    <Text variant="header2" color="text">
                        {title}
                    </Text>
                    <Text variant="body" color="text">
                        {distance}
                    </Text>
                    <Text variant="body" color="text">
                        {type}
                    </Text>
                </Box>

                <Box flexDirection="row" justifyContent="center" gap="xs">
                    <FontAwesome size={22} name="star" color="#ddab22" />
                    <Text variant="header3">
                        {rating}
                    </Text>
                    <Text variant="body">
                        ({reviewCount} reviews)
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}