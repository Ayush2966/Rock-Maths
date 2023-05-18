import zenMode from '../assets/images/mode-zen.svg';
import timerMode from '../assets/images/mode-timer.svg';
import extremeMode from '../assets/images/mode-extreme.svg';

import { Flex, Stack, Heading, Text, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react';
import SimpleCard from '../components/SimpleCard';

export default function Levels() {
    return (
        <Flex
            minH="calc(100vh - 3.5rem)"
            align={'center'}
            justify={'center'}
            bgGradient={useColorModeValue(
                'linear(to-br, #faaca8,#ddd6f3)',
                'linear(to-br, #c33764,#1d2671)'
            )}
        >
            <Stack spacing={8} mx={'auto'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading textAlign="center" fontSize={'4xl'}>
                        What do we play today Captain?
                    </Heading>
                    <Text fontSize={'lg'}>Select your game mode</Text>
                </Stack>

                <Wrap justify="center" maxW={'6xl'} spacing={4}>
                    <WrapItem>
                        <SimpleCard
                            transitionDuration={0.75}
                            title="Classic Mode"
                            badgeText="Easy"
                            badgeColorScheme="green"
                            imageSrc={zenMode}
                            bodyText="Take your time in a soothing play with numbers. Relax it's just math!"
                            linkTo="/calculator"
                            buttonText="Start"
                        />
                    </WrapItem>
                    <WrapItem>
                        <SimpleCard
                            transitionDuration={1.5}
                            title="Timer Mode"
                            badgeText="Medium"
                            imageSrc={timerMode}
                            bodyText="Want more focused practice? Do a pomodoro style timed practice."
                            linkTo="/calculator"
                            buttonText="Start"
                        />
                    </WrapItem>
                    <WrapItem>
                        <SimpleCard
                            transitionDuration={2.25}
                            title="Extreme Mode"
                            badgeText="Hard"
                            badgeColorScheme="red"
                            imageSrc={extremeMode}
                            bodyText="No distactions, no mistakes. Do you have what it takes to be the best?"
                            linkTo="/calculator"
                            buttonText="Start"
                        />
                    </WrapItem>
                </Wrap>
            </Stack>
        </Flex>
    );
}
