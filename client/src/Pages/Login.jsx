import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import PasswordField from "../Component/PasswordField";
import { authenticate } from "../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShowAlert from "../Component/ShowAlert";

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginData, setLoginData] = useState(initState);
  const dispactch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [alert, setAlert] = useState({ status: "success", message: "" });
  const loginStatus = useSelector(({ loginReducer }) => loginReducer);

  const handleFormChange = ({ target }) => {
    const { name, value } = target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = () => {
    dispactch(authenticate(loginData));
  };

  useEffect(() => {
    if (loginStatus.error || loginStatus.errMessage) {
      setAlert({ status: "error", message: loginStatus.errMessage });
    } else if (loginStatus.res) {
      setAlert({
        status: "success",
        message: "Login successfully.",
      });
    }
  }, [loginStatus.res, loginStatus.error]);

  useEffect(() => {
    if (token || loginStatus.isAuth) {
      navigate("/feedback");
    }
  }, [token, loginStatus.isAuth]);

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      {alert.message && (
        <ShowAlert
          title={alert.status === "success" ? "Success!" : "Error!"}
          desc={alert.message}
          status={alert.status}
        />
      )}
      <Stack spacing="8">
        <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
          <Heading size={{ base: "sm", md: "lg" }}>
            Log in to your account
          </Heading>
          <Text color="fg.muted">
            Don't have an account? <Link href="/">Sign up</Link>
          </Text>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleFormChange}
              />
            </FormControl>
            <PasswordField
              value={loginData.name}
              handleFormChange={handleFormChange}
            />
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button onClick={handleSubmit}>Sign in</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box align="center">
        <p>for Admin use </p>
        <p>email: Admin_basal@gmail.com</p>
        <p>password: AdminBasal@1234</p>
      </Box>
    </Container>
  );
};

export default Login;
