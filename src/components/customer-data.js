import { Divider, Stack, Text, Box } from "@chakra-ui/react";

function CustomerData({ firstName, lastName, telephone, creditCard }) {
  return (
    <Box mt={22} px={10}>
      <Stack isInline>
        <Box>
          <Text fontSize="lg" my={4} mx={4}>
            {firstName} {lastName}
          </Text>
        </Box>
      </Stack>

      <Divider border="4px" />

      <Stack isInline>
        <Box>
          <Text fontSize="lg" my={4} mx={4}>
            {telephone}
          </Text>
        </Box>
      </Stack>

      <Divider border="4px" />

      <Stack isInline>
        <Box>
          <Text fontSize="lg" my={4} mx={4}>
            {creditCard}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default CustomerData;
