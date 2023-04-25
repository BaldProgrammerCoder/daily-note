import React, {useCallback} from "react";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import AnimatedColorBox from "./animated-checkbox";
import {Avatar, Center, Heading, HStack, IconButton, Text, useColorModeValue, VStack} from "native-base";
import {Feather} from "@expo/vector-icons";
import MenuButton from "./menu-button";
import ThemeToggle from "./theme-toggle";

const Sidebar = (props: DrawerContentComponentProps) => {
    const {state, navigation} = props
    const currentRoute = state.routeNames[state.index]

    const handlePressBackButton = useCallback(() => {
        navigation.closeDrawer()
    }, [navigation])

    const handlePressMenuMain = useCallback(() => {
        navigation.navigate('Main')
    }, [navigation])

    const handlePressMenuAbout = useCallback(() => {
        navigation.navigate('About')
    }, [navigation])

    return (
        <AnimatedColorBox
            safeArea
            flex={1}
            bg={useColorModeValue('blue.50', 'darkBlue.700')}
            p={7}
        >
            <VStack flex={1} space={2}>
                <HStack justifyContent={"flex-end"}>
                    <IconButton
                        onPress={handlePressBackButton}
                        borderRadius={100}
                        variant={"outline"}
                        borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
                        _icon={{
                            as: Feather,
                            name: 'chevron-left',
                            size: 6,
                            color: useColorModeValue('blue.800', 'darkBlue.700')
                        }}
                    />
                </HStack>
                <Avatar
                    source={require('../assets/zbwIcon.png')}
                    size={"xl"}
                    borderRadius={100}
                    mb={6}
                    borderColor="coolGray.600"
                    borderWidth={3}
                />
                <Heading mb={4} size={"xl"}>
                    张博文
                </Heading>
                <MenuButton
                    active={currentRoute === 'Main'}
                    onPress={handlePressMenuMain}
                    icon="inbox">
                    主页
                </MenuButton>
                <MenuButton
                    active={currentRoute === 'About'}
                    onPress={handlePressMenuAbout}
                    icon="info">
                    关于每天记
                </MenuButton>
            </VStack>
            <Center>
                <ThemeToggle/>
            </Center>
        </AnimatedColorBox>
    )
}

export default Sidebar
