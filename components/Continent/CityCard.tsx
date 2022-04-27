import { Flex, Image, VStack, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface CityCardProps {
    cityName: string;
    countryName: string;
    countryCode: string;
    cityImage: string;
}

interface Props {
    city: CityCardProps;
}

export function CityCard({ city }: Props) {
    return (
        <VStack
            w="256px"
            mx={['auto', '0']}
            borderRadius={["4px"]}
            spacing={0}
            h="100%"
            maxH="279px"

        >
            <Image
                src={city.cityImage}
                alt={`${city.cityName}, ${city.countryName}`}
                h="170px"
                w="100%"
                borderRadius={["4px 4px 0 0"]}
            />
            <Flex
                w="100%"
                border="1px solid rgba(255, 186, 8, 0.5);"
                p="18px 24px 25px"
                justify="space-between"
                bgColor="#FFF"
            >
                <VStack align="left">
                    <Text
                        fontWeight="semibold"
                        fontSize="20px"
                        lineHeight="25px"
                        fontFamily="Barlow"
                    >
                        {city.cityName}
                    </Text>
                    <Text
                        fontWeight="normal"
                        fontSize="16px"
                        lineHeight="26px"
                        fontFamily="Barlow"
                        color="gray.300"
                    >
                        {city.countryName}
                    </Text>
                </VStack>
                <Flex
                    align="center"
                    justify="center"
                >
                    <ReactCountryFlag
                        style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            objectFit: "cover"
                        }}
                        aria-label={city.countryName}
                        countryCode={city.countryCode}
                        svg
                    />
                </Flex>
            </Flex>
        </VStack>
    );
}