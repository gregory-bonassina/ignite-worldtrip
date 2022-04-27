import { Flex, useBreakpointValue } from "@chakra-ui/react";
import TravelTypeItem from "./TravelTypeItem";

type TravelItemProps = {
    imageUrl: string
    imageAlt: string
    title: string
}[]

export function TravelType() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    const travelItens: TravelItemProps = [
        {
            imageUrl: "/traveltypes/cocktail.svg",
            imageAlt: "Cocktail illustration",
            title: "vida noturna"
        },
        {
            imageUrl: "/traveltypes/surf.svg",
            imageAlt: "Surf illustration",
            title: "praia"
        },
        {
            imageUrl: "/traveltypes/building.svg",
            imageAlt: "Building illustration",
            title: "moderno"
        },
        {
            imageUrl: "/traveltypes/museum.svg",
            imageAlt: "Museum illustration",
            title: "clássico"
        },
        {
            imageUrl: "/traveltypes/earth.svg",
            imageAlt: "Earth illustration",
            title: "e mais..."
        },
    ]

    return (
        <Flex
            mt={["36px", "80px"]}
            px="16px"
            w="100%"
            maxW={["275px", "1160px"]}
            justify="space-between"
            flexFlow="wrap"
            gap="5px"
        >
            {travelItens.map((travelItem, index) => {
                if (!isWideVersion && index === travelItens.length - 1) {
                    return (
                        <Flex
                            key={index}
                            w="100%"
                            justifyContent="center"
                        >
                            <TravelTypeItem
                                imageUrl={travelItem.imageUrl}
                                imageAlt={travelItem.imageAlt}
                                title={travelItem.title}
                            />
                        </Flex>
                    )
                }

                return (
                    <TravelTypeItem
                        key={index}
                        imageUrl={travelItem.imageUrl}
                        imageAlt={travelItem.imageAlt}
                        title={travelItem.title}
                    />
                );
            })}
        </Flex>
    );
}