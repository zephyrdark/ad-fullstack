import React, { useState, useEffect } from 'react';
import useLiveTrading from "../hooks/useLiveTrading";
import CallToActionSection from "./sections/CallToActionSection";
import Button from "../../components/common/buttons/Button";
import { FormControl, FormLabel, GridItem, HStack, Select, useToast, VStack } from "@chakra-ui/react";
import TransactionsPage from "../pages/LiveTrading/TransactionsPage";
import { Modal } from "../../components/common/modal/Modal";

const LiveTrading = () => {
    const toast = useToast();
    const { isTrading, startLiveTrading, stopLiveTrading, getLiveTradingTransactions, getAlgorithmTypes, algorithmTypes } = useLiveTrading();
    const [portfolioType, setPortfolioType] = useState('AGGRESSIVE');
    const [algorithmType, setAlgorithmType] = useState('');

    useEffect(() => {
        getAlgorithmTypes();
    }, [getAlgorithmTypes]);

    useEffect(() => {
        if (algorithmTypes.length > 0 && !algorithmType) {
            setAlgorithmType(algorithmTypes[0]);
        }
    }, [algorithmTypes, algorithmType]);

    const handleStartLiveTrading = async () => {
        if (!algorithmType) {
            toast({
                title: "Algorithm not selected",
                description: "Please select an algorithm to start live trading.",
                status: "warning",
                duration: 2000,
                isClosable: true,
                position: "top"
            });
            return;
        }

        await startLiveTrading(algorithmType);
        toast({
            title: "Trading started.",
            description: "Live trading has been started successfully.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top"
        });
    };

    const handleStopLiveTrading = async () => {
        await stopLiveTrading();
        toast({
            title: "Trading stopped.",
            description: "Live trading has been stopped.",
            status: "info",
            duration: 5000,
            isClosable: true,
            position: "top"
        });
    };


    const handleGetTransactions = async () => {
        await getLiveTradingTransactions(portfolioType);
        toast({
            title: "Transactions retrieved.",
            description: "Live trading transactions have been retrieved.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top"
        });
    };

    const portfolioOptions = [
        { label: 'Aggressive', value: 'AGGRESSIVE' },
        { label: 'Conservative', value: 'CONSERVATIVE' },
        { label: 'Moderate', value: 'MODERATE' }
    ];

    return (
        <div>
            <CallToActionSection title="Live Trading"
                                 subtitle="Measure Algorithm Performance">
                <VStack>
                    <HStack>
                        <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel>Portfolio Type</FormLabel>
                            <Select
                                value={portfolioType}
                                onChange={(e) => setPortfolioType(e.target.value)}
                                disabled={isTrading}
                                bg="gray.50"
                                borderColor="gray.300"
                                _hover={{ borderColor: "gray.400" }}
                                _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
                                _disabled={{ bg: "gray.100", cursor: "not-allowed" }}
                                width="200px"
                            >
                                {portfolioOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel>Algorithm Type</FormLabel>
                            <Select
                                value={algorithmType}
                                onChange={(e) => setAlgorithmType(e.target.value)}
                                disabled={isTrading}
                                bg="gray.50"
                                borderColor="gray.300"
                                _hover={{ borderColor: "gray.400" }}
                                _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
                                _disabled={{ bg: "gray.100", cursor: "not-allowed" }}
                                width="300px"
                            >
                                {algorithmTypes.map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </HStack>

                    <HStack>
                        <Button onClick={isTrading ? handleStopLiveTrading : handleStartLiveTrading}
                                style={{ width: '150px' }}>
                            {isTrading ? 'Stop Live Trading' : 'Start Live Trading'}
                        </Button>
                        <Modal
                            triggerText="Get Transactions"
                            title={`Transactions for ${portfolioType}`}
                            onOpen={handleGetTransactions}
                            onClose={() => {}}
                        >
                            <TransactionsPage portfolioType={portfolioType} />
                        </Modal>
                    </HStack>
                </VStack>
            </CallToActionSection>
        </div>
    );
};

export default LiveTrading;
