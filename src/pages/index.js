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
import INITIAL_FORM_STATE from "../constants/initial-form-state";

function PageIndex() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  async function getData() {
    const res = await fetch("/api/customers");
    const resData = await res.json();
    setData(resData);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await addCustomer();
    setFormData(INITIAL_FORM_STATE);
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function addCustomer() {
    try {
      await fetch("/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: formData,
        }),
      });
      getData();
    } catch (error) {
      console.log({ error });
    }
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

        <Divider mt={8} border="1px" />

        <Box mt={6}>
          <Heading as="h2" my={2} textAlign="center">
            Customer Data Table
          </Heading>

          <Flex align="center" justify="center">
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
          </Flex>
        </Box>

        <Divider mt={6} border="1px" />

        <Box mt={6}>
          <Heading as="h2" mt={6} textAlign="center">
            Add a New Customer
          </Heading>
          <Flex mt={6} align="center" justify="center">
            <form onSubmit={handleSubmit} method="POST">
              <FormControl onChange={handleChange}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  aria-describedby="first-name-helper-text"
                />
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  aria-describedby="last-name-helper-text"
                />
                <FormLabel htmlFor="streetAddress">Street Address</FormLabel>
                <Input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  aria-describedby="street-address-helper-text"
                />
                <Stack isInline mt={2}>
                  <FormLabel mt={2} htmlFor="city">
                    City
                  </FormLabel>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    aria-describedby="city-helper-text"
                  />
                  <FormLabel mt={2} htmlFor="state">
                    State
                  </FormLabel>
                  <Input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    aria-describedby="state-helper-text"
                  />
                  <FormLabel htmlFor="zipCode">Zip</FormLabel>
                  <Input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    aria-describedby="zipcode-helper-text"
                  />
                </Stack>
                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                <Input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  aria-describedby="phoneNumber-helper-text"
                />
                <RadioGroup
                  my={4}
                  spacing={8}
                  isInline
                  value={formData.cardType}
                >
                  <FormLabel htmlFor="cardType">Card Type</FormLabel>
                  <Radio
                    name="cardType"
                    value="Visa"
                    label="Visa"
                    onChange={handleChange}
                  >
                    Visa
                  </Radio>
                  <Radio
                    name="cardType"
                    value="MasterCard"
                    label="MasterCard"
                    onChange={handleChange}
                  >
                    MasterCard
                  </Radio>
                  <Radio
                    name="cardType"
                    value="Amex"
                    label="Amex"
                    onChange={handleChange}
                  >
                    American Express
                  </Radio>
                </RadioGroup>
                <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
                <Input
                  type="number"
                  name="cardNumber"
                  id="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  aria-describedby="cardNumber-helper-text"
                />
                <Button
                  type="submit"
                  my={8}
                  ml="20%"
                  width="50%"
                  size="md"
                  height="48px"
                  border="2px"
                  borderColor="green.500"
                >
                  Add Customer
                </Button>
              </FormControl>
            </form>
          </Flex>
        </Box>
      </Box>
    </Fragment>
  );
}

export default PageIndex;
