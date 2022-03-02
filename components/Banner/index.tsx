import { Flex, HStack, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

export default function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex
            w="100%"
            h={["163px", "369px"]}
            bgImage="/background.png"
            bgRepeat="no-repeat"
            // bgSize={["cover", "unset"]}
            bgSize={["100% 100%", "100% 335px"]}
            justify="center"
        >
            <HStack w="1460px" justify="space-between">
                <VStack w={["100%", "524px"]} pl="16px" align="normal">
                    <Text
                        w={["238px", "426px"]}
                        color="white.500"
                        fontWeight="medium"
                        fontSize={[20, 36]}
                    >
                        5 Continentes, <br /> infinitas possibilidades.
                    </Text>
                    <Text
                        w={["333px", "524px"]}
                        color="gray.100"
                        fontWeight="normal"
                        fontSize={[14, 20]}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </VStack>

                {isWideVersion &&
                    <Flex h="100%" align="end">
                        <Image src="/airplane.svg" alt="airplane" maxW="417px" h="270px" />
                    </Flex>
                }
            </HStack>
        </Flex>
    );
}