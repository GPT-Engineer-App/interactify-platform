import React, { useState } from "react";
import { Box, Heading, Text, Button, Image, Stack, Flex, Grid, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { FaChartBar, FaCode, FaDonate, FaWpforms } from "react-icons/fa";

const features = [
  {
    icon: FaChartBar,
    title: "Interactive Element Builder",
    description: "Create and customize interactive elements like charts, graphs, tables, and countdowns without writing complex code.",
  },
  {
    icon: FaCode,
    title: "Embeddable Code Snippets",
    description: "Generate embeddable code snippets to seamlessly integrate interactive elements into your websites and applications.",
  },
  {
    icon: FaDonate,
    title: "Donation Blocks",
    description: "Quickly add pre-configured donation blocks for popular NGOs or charities, enabling visitors to make donations directly from your website.",
  },
  {
    icon: FaWpforms,
    title: "Lead Form Builder",
    description: "Create and customize lead capture forms, specifying the fields and information you want to collect from potential customers.",
  },
];

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic
    console.log("Submitted email:", email);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box bg={useColorModeValue("gray.100", "gray.700")} py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Empower Your Website with Interactive Elements
        </Heading>
        <Text fontSize="xl" maxW="2xl" mx="auto" mb={8}>
          A user-friendly, low-code SaaS platform that enables creators, entrepreneurs, and online publishers to easily add engaging elements to their websites without advanced coding skills.
        </Text>
        <Stack direction={["column", "row"]} spacing={4} justify="center">
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
          <Button size="lg">Learn More</Button>
        </Stack>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={12}>
          Key Features
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={8}>
          {features.map((feature, index) => (
            <Box key={index} textAlign="center">
              <Icon as={feature.icon} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                {feature.title}
              </Heading>
              <Text>{feature.description}</Text>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box bg={useColorModeValue("gray.100", "gray.700")} py={20}>
        <Flex direction={["column", "row"]} align="center" justify="center">
          <Box textAlign={["center", "left"]} mb={[8, 0]} mr={[0, 12]}>
            <Heading as="h2" size="xl" mb={4}>
              Ready to Enhance Your Website?
            </Heading>
            <Text fontSize="lg" mb={8}>
              Sign up now and start creating interactive elements for your website with ease.
            </Text>
          </Box>
          <Box>
            <form onSubmit={handleSubmit}>
              <Flex direction={["column", "row"]}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    marginRight: "8px",
                    marginBottom: "8px",
                  }}
                />
                <Button type="submit" colorScheme="blue" size="lg">
                  Sign Up
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={8} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Text>
        <Stack direction="row" spacing={4} justify="center" mt={4}>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Contact Us</Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
