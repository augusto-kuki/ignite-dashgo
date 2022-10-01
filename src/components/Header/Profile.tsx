import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Augusto</Text>
          <Text color="gray.300" fontSize="small">
            augusto@dashgo.com
          </Text>
        </Box>
      )}

      <Avatar
        size="lg"
        name="Augusto Farias"
        src="https://github.com/augusto-kuki.png"
      />
    </Flex>
  );
}
