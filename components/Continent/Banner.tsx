import { Flex, Text } from "@chakra-ui/react";

interface BannerProps {
    image: string;
    name: string;
}

export function Banner({ image, name }: BannerProps) {
    return (
        <Flex
            w="100%"
            h={["150px", "500px"]}
            bgImage={image}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center center"
            justify={["center","unset"]}
            align={["center", "end"]}
            pb={["0px", "59px"]}
            pl={["0px", "140px"]}
        >
            <Text
                color="white"
                fontWeight="600"
                fontSize={["24px", "48px"]}
                lineHeight={["36px", "72px"]}
            >
                {name}
            </Text>
        </Flex >
    );
}