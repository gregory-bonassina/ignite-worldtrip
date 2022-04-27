import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const { asPath } = useRouter();

    return (
        <Flex
            as="header"
            w="100%"
            h={[50, 100]}
            maxW={1480}
            mx="auto"
            align="center"
            justify="space-between"
        >
            {asPath === "/" ?
                <div /> :
                <Link href={"/"} passHref >
                    <ChakraLink ml="16px">
                        <Image
                            src="/back.svg"
                            alt="back button"
                            w={["16px", "32px"]}
                            cursor="pointer"
                        />
                    </ChakraLink>
                </Link>
            }

            <Image src="/logo.svg" alt="logo" h={["20px", "45px"]} />

            <div />
        </Flex>
    );
}