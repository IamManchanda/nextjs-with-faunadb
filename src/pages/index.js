import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  Divider,
  Button,
  Input,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import CustomerData from "../components/customer-data";

function PageIndex() {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch("/api/customers");
    const resData = await res.json();
    setData(resData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Next.js with FaunaDB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Heading as="h1" my={2} textAlign="center">
          Next.js, FaunaDB & Serverless
        </Heading>

        <Heading as="h3" my={2} textAlign="center">
          Customer Data
        </Heading>
      </Box>
      <Flex mt={12} align="center" justify="center">
        <Stack>
          <Heading mb={6} as="h4">
            Full Name:
          </Heading>
          <Divider border="4px" />
          <Heading mb={6} as="h4">
            Phone Number:
          </Heading>
          <Divider border="4px" />
          <Divider border="4px" />
          <Heading mb={6} as="h4">
            Credit Card:
          </Heading>
        </Stack>
        {data.length > 0 ? (
          data.map((d) => (
            <CustomerData
              key={d.data.telephone}
              firstName={d.data.firstName}
              lastName={d.data.lastName}
              telephone={d.data.telephone}
              creditCard={d.data.creditCard.number}
            />
          ))
        ) : (
          <Fragment>
            <Text>Loading...</Text>
          </Fragment>
        )}
        <CustomerData />
      </Flex>
    </Fragment>
  );
}

export default PageIndex;
