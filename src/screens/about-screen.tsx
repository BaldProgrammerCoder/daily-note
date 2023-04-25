import React from "react";
import {Box, Image, ScrollView, Text, useColorModeValue, VStack} from "native-base";
import Masthead from "../components/masthead";
import NavBar from "../components/navbar";
import AnimatedColorBox from "../components/animated-checkbox";

const AboutScreen = () => {
    return (
        <AnimatedColorBox
            flex={1}
            bg={useColorModeValue('warmGray.50', 'warmGray.900')}
            w="full"
        >
            <Masthead
                title="关于每天记"
                image={require('../assets/masthead.png')}
            >
                <NavBar/>
            </Masthead>
            <ScrollView
                bg={useColorModeValue('warmGray.50', 'primary.900')}
                mt={"-20px"}
                pt={"30px"}
                p={4}
                borderTopLeftRadius={"20px"}
                borderTopRightRadius={"20px"}
            >
                <VStack flex={1} space={4} >
                    <Box alignItems={"center"} >
                        <Image
                            source={require('../assets/zbwIcon.png')}
                            borderRadius={"full"}
                            resizeMode={"cover"}
                            w={120}
                            h={120}
                            alt={"author"}
                        />
                    </Box>
                    <Text fontSize={"md"} w={"full"} left={110} >
                        每天记，每天记录好心情
                    </Text>
                </VStack>
            </ScrollView>
        </AnimatedColorBox>

    )
}

export default AboutScreen
