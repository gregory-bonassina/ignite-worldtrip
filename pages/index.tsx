import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Banner from '../components/Banner';
import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <Flex w="100%" justify="center" direction="column">
            <Header />

            <Banner />
        </Flex>
    );
}

export default Home;
