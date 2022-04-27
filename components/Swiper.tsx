import { Flex, Link, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

interface SwiperItemProps {
    id: string;
    slug: string;
    name: string;
    title: string;
    swiperImage: string;
}

interface SwiperProps {
    swiperItems: SwiperItemProps[];
}

export default function MySwiper({ swiperItems }: SwiperProps) {
    return (
        <Flex
            h={["250px","450px"]}
            w="100%"
            mt="52px"
            mb={["24px","40px"]}
        >
            <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                navigation
                scrollbar={{ draggable: true }}
                mousewheel
                keyboard
                autoplay={{
                    delay: 4000,
                }}
            >
                {swiperItems.map(item => (
                    <SwiperSlide key={item.id}>
                        <Flex
                            bgImage={item.swiperImage}
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            bgPosition="center center"
                            w="100%"
                            h="100%"
                            justify="center"
                            align="center"
                        >
                            <Link href={`/continent/${item.slug}`}>
                                <a>
                                    <VStack>
                                        <Text
                                            color="white"
                                            fontWeight="700"
                                            fontSize={["24px","48px"]}
                                            lineHeight={["36px","72px"]}
                                        >
                                            {item.name}
                                        </Text>
                                        <Text
                                            color="white"
                                            fontWeight="700"
                                            fontSize={["14px","24px"]}
                                            lineHeight={["21px","36px"]}
                                        >
                                            {item.title}
                                        </Text>
                                    </VStack>
                                </a>
                            </Link>
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    );
}