import { Flex, HStack, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

export default function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex
            w='100%'
            h={["163px", "368px"]}
            justify="center"
            align="center"
            bgImage="/background.png"
            bgRepeat="no-repeat"
            bgSize={["100% 100%", "100% 92%"]}
        >
            <HStack w="100%" maxW="1460px" justify="space-between">
                <VStack w={["100%", "524px"]} pl="16px" align="normal">
                    <Text
                        color="white.500"
                        fontWeight="medium"
                        fontSize={[20, 36]}
                    >
                        5 Continentes, <br /> infinitas possibilidades.
                    </Text>
                    <Text
                        color="gray.100"
                        fontWeight="normal"
                        fontSize={[14, 20]}
                        // maxW={[333, 524]}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </VStack>

                {isWideVersion &&
                    <Flex h="368px" align="end">
                        <Image
                            src="/airplane.svg"
                            alt="airplane"
                            maxW="417px"
                            h="270px"
                        />
                    </Flex>
                }
            </HStack>
        </Flex>
    );
}