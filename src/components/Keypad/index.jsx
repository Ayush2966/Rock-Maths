import { Button, Grid, GridItem, VStack } from '@chakra-ui/react';
import React from 'react';

export default function Keypad(props) {
    const keypadButtons = [
        { id: 9, buttonNumber: '9' },
        { id: 8, buttonNumber: '8' },
        { id: 7, buttonNumber: '7' },
        { id: 6, buttonNumber: '6' },
        { id: 5, buttonNumber: '5' },
        { id: 4, buttonNumber: '4' },
        { id: 3, buttonNumber: '3' },
        { id: 2, buttonNumber: '2' },
        { id: 1, buttonNumber: '1' },
        { id: 'del', buttonNumber: 'del' },
        { id: 0, buttonNumber: '0' },
        { id: '.', buttonNumber: '.' }
    ];

    const buildButton = keypadButtons.map((keypadButton) => {
        return (
            <GridItem w={'100%'} h={'100%'} justifySelf={'center'} key={keypadButton.id}>
                <Button
                    h="100%"
                    w="100%"
                    fontSize={'2xl'}
                    fontWeight={'medium'}
                    bg={'blackAlpha.700'}
                    color={keypadButton.buttonNumber === 'del' ? 'orange.400' : 'white'}
                    key={keypadButton.id}
                    onClick={() => props.upadateQuiz(keypadButton.buttonNumber)}
                    _hover={{ bg: 'blackAlpha.800' }}
                >
                    {keypadButton.buttonNumber}
                </Button>
            </GridItem>
        );
    });

    return (
        <VStack>
            <Grid
                templateColumns="repeat(3,1fr)"
                gap={1}
                width={['90vw', '90vw', 'md', 'xs']}
                height={['40vh']}
            >
                {buildButton}
            </Grid>
        </VStack>
    );
}
