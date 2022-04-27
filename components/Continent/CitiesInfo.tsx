import { Flex, Text } from "@chakra-ui/react";

interface CitiesInfoProps {
    numberOfCountries: Number;
    numberOfLanguages: Number;
    amountMostPopularCities: Number;
}

interface Props {
    citiesInfo: CitiesInfoProps;
}

export function CitiesInfo({ citiesInfo }: Props) {
    const infos = {
        "países": citiesInfo.numberOfCountries,
        "línguas": citiesInfo.numberOfLanguages,
        "cidades +100": citiesInfo.amountMostPopularCities,
    };

    return (
        <>
            {Object.entries(infos).map(([key, value], index) => {
                return (
                    <Flex
                        key={index}
                        flexDir="column"
                        align={["left", "center"]}
                    >
                        <Text
                            fontSize={["24px", "48px"]}
                            lineHeight={["36px", "72px"]}
                            fontWeight="600"
                            color="yellow.500"
                        >
                            {value}
                        </Text>
                        <Text
                            fontSize={["18px", "24px"]}
                            lineHeight={["27px", "36px"]}
                            fontWeight="600"
                        >
                            {key}
                        </Text>
                    </Flex>
                );
            })}
        </>
    );
}