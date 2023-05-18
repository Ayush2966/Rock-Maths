/* 
ToDo -
[ ] Find and change the images for addition, subtraction, muliplication and division

*/

import zenMode from '../assets/images/mode-zen.svg';
import timerMode from '../assets/images/mode-timer.svg';
import pomodoroMode from '../assets/images/mode-pomodoro.svg';
import extremeMode from '../assets/images/mode-extreme.svg';

import { Flex, Stack, Heading, Text, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react';

import SimpleCard from '../components/SimpleCard';

export default function Learn() {
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
                        What do we learn today Captain?
                    </Heading>
                    <Text fontSize={'lg'}>Select your game mode</Text>
                </Stack>

                <Wrap justify="center" maxW={'4xl'} spacing={4}>
                    <WrapItem>
                        <SimpleCard
                            transitionDuration={0.5}
                            title="Addition"
                            progressValue={20}
                            imageSrc={zenMode}
                            bodyText=""
                            linkTo="/calculator"
                            buttonText="Start"
                        />
                    </WrapItem>
                    <WrapItem>
                        <SimpleCard
                            transitionDuration={1}
                            title="Subtraction"
                            progressValue={4}
                            imageSrc={pomodoroMode}
                            bodyText=""
                            linkTo="/calculator"
                            buttonText="Start"
                        />
                    </WrapItem>
                    <WrapItem>
                        <SimpleCard
                            transitionDuration={1.5}
                            title="Multiplication"
                            progressValue={1}
                            imageSrc={timerMode}
                            bodyText=""
                            linkTo="/calculator"
                            buttonText="Start"
                        />
                    </WrapItem>
                    <WrapItem>
                        <SimpleCard
                            transitionDuration={2}
                            title="Division"
                            progressValue={0}
                            imageSrc={extremeMode}
                            bodyText=""
                            linkTo="/calculator"
                            buttonText="Start"
                        />
                    </WrapItem>
                </Wrap>
            </Stack>
        </Flex>
    );
}
