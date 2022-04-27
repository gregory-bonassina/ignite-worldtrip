import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Banner } from "../../components/Continent/Banner";
import { CitiesInfo } from "../../components/Continent/CitiesInfo";
import { CityCard } from "../../components/Continent/CityCard";

import Header from "../../components/Header";
import { api } from "../api/api";

interface PopularCityProps {
    cityName: string;
    countryName: string;
    countryCode: string;
    cityImage: string;
}

interface ContinentProps {
    id: string;
    name: string;
    description: string;
    swiperImage: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    amountMostPopularCities: number;
    mostPopularCities: PopularCityProps[];
}

interface Props {
    continent: ContinentProps;
}

interface IParams extends ParsedUrlQuery {
    slug: string
}

export default function Continent({ continent }: Props) {

    return (
        <Flex
            w="100%"
            justify="center"
            align="center"
            direction="column"
            pb="20px"
        >
            <Header />
            <Banner image={continent.swiperImage} name={continent.name} />
            <Flex
                w="100%"
                maxW={["100%", "1240px"]}
                flexDir={["column", "row"]}
                p={["0 16px", "0 40px"]}
                gap={["0", "70px"]}
                mt={["24px", "80px"]}
            >
                <Text
                    color="gray.500"
                    fontSize={["14px", "24px"]}
                    lineHeight={["21px", "36px"]}
                    w={["100%", "50%"]}
                >
                    {continent.description}
                </Text>
                <Flex
                    gap="42px"
                    w={["100%", "50%"]}
                    justify="center"
                    align="center"
                    mt={["16px", "0"]}
                    flexWrap="wrap"
                >
                    <CitiesInfo citiesInfo={{...continent}}
                    />
                </Flex>
            </Flex>
            <VStack
                w="100%"
                maxW={["100%", "1240px"]}
                p={["0 16px", "0 40px"]}
                mt={["32px", "80px"]}
            >
                <Text
                    w="100%"
                    fontSize={["24px", "36px"]}
                    lineHeight={["36px", "54px"]}
                    color="gray.500"
                    fontWeight="500"
                    align="left"
                    mb={["20px","40px"]}
                >
                    Cidades +100
                </Text>
                <Flex
                    direction={["column", "row"]}
                    gap={["20px", "45px"]}
                    flexWrap="wrap"
                >
                    {continent.mostPopularCities.map((city) => {
                        return <CityCard key={city.cityName} city={{ ...city }} />
                    })}
                </Flex>
            </VStack>
        </Flex>
    );
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params as IParams;
    const slug = params.slug;

    const response = await api.get(`/continents?slug=${slug}`);
    const continent = response.data[0];

    return {
        props: {
            continent
        },
        revalidate: 60 * 60 * 24
    }
}