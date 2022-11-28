import React from 'react';
import { Box,  Icon, HStack, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function BottomNav(props) {
  const [selected, setSelected] = React.useState(1);
 
  function selectIcon(value){
    setSelected(value);
    props.onChangePage(value);
  } 

  return (
    <Box
      flex={1}
      safeAreaTop
      width="100%"
      alignSelf="center"
    >
      <HStack alignItems="center" >
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => selectIcon(0)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? 'home' : 'home-outline'}
                />
              }
              color="#7C7878"
              size="lg"
            />
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => selectIcon(1)}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="search" />}
              color="#7C7878"
              size="lg"
            />
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => selectIcon(2)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 2 ? 'cart' : 'cart-outline'}
                />
              }
              color="#7C7878"
              size="lg"
            />
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => selectIcon(3)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? 'account' : 'account-outline'}
                />
              }
              color="#7C7878"
              size="lg"
            />
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}
