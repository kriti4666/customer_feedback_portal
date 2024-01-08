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
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/auth/action";
import ShowAlert from "../Component/ShowAlert";

const initState = {
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initState);
  const [alert, setAlert] = useState({ status: "success", message: "" });
  const dispactch = useDispatch();
  const registerStatus = useSelector(({ registerReducer }) => registerReducer);

  // OnChange value
  const handleFormChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    dispactch(registerUser(formData));
  };

  useEffect(() => {
    if (registerStatus.error || registerStatus.errMessage) {
      setAlert({ status: "error", message: registerStatus.errMessage });
    } else if (registerStatus.res) {
      setAlert({
        status: "success",
        message: "Signup successfully.",
      });
    }
  }, [registerStatus.res, registerStatus.error]);

  console.log(registerStatus.res, "res");

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
          <Heading size={{ base: "s", md: "lg" }}>
            Register your account
          </Heading>
          <Text color="fg.muted">
            Already have an Account? <Link href="/login">Sign in</Link>
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
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </FormControl>

              <PasswordField
                value={formData.name}
                handleFormChange={handleFormChange}
              />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              {/* <Button onClick={handleSubmit}>Sign up</Button> */}

              {registerStatus.loading ? (
                <Button isLoading colorScheme="teal" variant="solid">
                  Loading
                </Button>
              ) : (
                <Button onClick={handleSubmit}>Sign up</Button>
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;
// priya@123 priyaVerma@gmail.com