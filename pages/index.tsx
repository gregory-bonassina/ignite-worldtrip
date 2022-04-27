import { Divider, Flex, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';

import Banner from '../components/Banner';
import Header from '../components/Header';
import Swiper from '../components/Swiper';
import { TravelType } from '../components/TravelType';
import { api } from './api/api';

interface ContinentProps {
    id: string;
    slug: string;
    name: string;
    title: string;
    swiperImage: string;
}

interface HomeProps {
    continents: ContinentProps[]
}

export default function Home({ continents }: HomeProps) {
    return (
        <Flex
            w="100%"
            justify="center"
            align="center"
            direction="column"
        >
            <Header />
            <Banner />
            <TravelType />

            <Divider
                w={["60px", "90px"]}
                mt={["12px", "80px"]}
                borderColor="gray.500"
                borderBottomWidth="2px"
            />

            <Flex
                w="100%"
                maxW="840px"
                mt={["24px", "52px"]}
                align="center"
                justify="center"
                direction="column"
                color="gray.500"
                fontSize={["20px", "36px"]}
                fontWeight={["500", "medium"]}
                lineHeight={["30px", "54px"]}
                p="0 16px"
            >
                <Text>
                    Vamos nessa?
                </Text>
                <Text>
                    Então escolha seu continente
                </Text>
            </Flex>

            <Swiper swiperItems={continents} />
        </Flex>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await api.get( '/continents' );
    const continents = response.data;

    return {
        props: {
            continents
        },
        revalidate: 60 * 60 * 24
    }
}