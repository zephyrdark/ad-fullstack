import React, { useContext } from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";
import { Logo } from "@choc-ui/logo";
import Button from "../../../components/common/buttons/Button";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../../config/context/AuthContext";

const AdminHeader = () => {
    const bg = useColorModeValue("white", "white");
    const mobileNav = useDisclosure();
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <chakra.header
            bg={bg}
            w="full"
            px={{ base: 2, sm: 4 }}
            py={4}
            shadow="md"
        >
            <Flex alignItems="center" justifyContent="space-between" mx="auto">
                <Flex>
                    <chakra.a
                        href="/"
                        title="FourQuant.ai Home Page"
                        display="flex"
                        alignItems="center"
                    >
                        <Logo />
                        <VisuallyHidden>FourQuant.ai</VisuallyHidden>
                    </chakra.a>
                    <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                        FourQuant.ai
                    </chakra.h1>
                </Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                    <HStack
                        spacing={1}
                        mr={1}
                        color="brand.100"
                        display={{ base: "none", md: "inline-flex" }}
                    >
                        {isAuthenticated ? (
                            <>
                                <Link to="/admin/managelivetrading">
                                    <Button>Live Trading</Button>
                                </Link>
                                <Link to="/admin/backtest">
                                    <Button>Backtest</Button>
                                </Link>
                                <Link to="/admin/manage-user">
                                    <Button>Manage User</Button>
                                </Link>
                                <Link to="/admin/manage-tickers">
                                    <Button>Manage Tickers</Button>
                                </Link>
                                <Button onClick={logout}>Sign Out</Button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="ghost">Sign in</Button>
                                </Link>
                                <Link to="/register">
                                    <Button variant="ghost">Register</Button>
                                </Link>
                            </>
                        )}
                    </HStack>
                    {!isAuthenticated && (
                        <Button colorScheme="brand" size="sm">
                            Get Started
                        </Button>
                    )}
                    <Box display={{ base: "inline-flex", md: "none" }}>
                        <IconButton
                            display={{ base: "flex", md: "none" }}
                            aria-label="Open menu"
                            fontSize="20px"
                            color="gray.800"
                            _dark={{ color: "inherit" }}
                            variant="ghost"
                            icon={<AiOutlineMenu />}
                            onClick={mobileNav.onOpen}
                        />

                        <VStack
                            pos="absolute"
                            top={0}
                            left={0}
                            right={0}
                            display={mobileNav.isOpen ? "flex" : "none"}
                            flexDirection="column"
                            p={2}
                            pb={4}
                            m={2}
                            bg={bg}
                            spacing={3}
                            rounded="sm"
                            shadow="sm"
                        >
                            <CloseButton
                                aria-label="Close menu"
                                onClick={mobileNav.onClose}
                            />

                            {isAuthenticated ? (
                                <>
                                    <Link to="/admin/livetrading">
                                        <Button w="full" variant="ghost">Live Trading</Button>
                                    </Link>
                                    <Link to="/admin/backtest">
                                        <Button w="full" variant="ghost">Backtest</Button>
                                    </Link>
                                    <Link to="/admin/manage-user">
                                        <Button w="full" variant="ghost">Manage User</Button>
                                    </Link>
                                    <Link to="/admin/manage-tickers">
                                        <Button w="full" variant="ghost">Manage Tickers</Button>
                                    </Link>
                                    <Button w="full" variant="ghost" onClick={logout}>Sign Out</Button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">
                                        <Button w="full" variant="ghost">
                                            Sign in
                                        </Button>
                                    </Link>
                                    <Link to="/register">
                                        <Button w="full" variant="ghost">
                                            Register
                                        </Button>
                                    </Link>
                                    <Button w="full" colorScheme="brand">
                                        Get Started
                                    </Button>
                                </>
                            )}
                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </chakra.header>
    );
};

export default AdminHeader;
