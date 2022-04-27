import { Image, Flex, useBreakpointValue, Text, Box } from "@chakra-ui/react";

interface TravelTypeItemProps {
    imageUrl: string
    imageAlt: string
    title: string
}

export default function TravelTypeItem({ imageUrl, imageAlt, title }: TravelTypeItemProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex
            direction={["row", "column"]}
            align="center"
            gap={["8px", "28px"]}
            mb={['24px', 0]}
        >
            {
                isWideVersion ?
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                    />
                    :
                    <Box
                        w={2}
                        h={2}
                        bg="yellow.500"
                        borderRadius={4}
                    />
            }
            <Text
                color="gray.500"
                fontWeight={['medium', 'semibold']}
                fontSize={["18px", "24px"]}
                lineHeight={["27px", "36px"]}
            >
                {title}
            </Text>
        </Flex>
    );
}