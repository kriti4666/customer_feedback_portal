import {
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../redux/auth/action";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dispactch = useDispatch();
  return (
    <Flex
      align="center"
      width="100%"
      backgroundColor="gray.900"
      color="gray.50"
      p={4}
    >
      <Heading as="h3" size="md">
        Customer Feedback Portal
      </Heading>
      <Spacer />
      <HStack spacing="24px">
        <Text onClick={() => navigate("/")}>Register</Text>
        {!token ? (
          <Button onClick={() => navigate("/login")}>Login</Button>
        ) : (
          <Button onClick={() => dispactch(Logout())}>Logout</Button>
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
