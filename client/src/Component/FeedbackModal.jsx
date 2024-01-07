import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addFeedback } from "../redux/feedback/action";



const FeedbackModal = ({ isOpen, onClose, initState }) => {
  const [formData, setFormData] = useState(initState);
  const dispactch = useDispatch();

  const token = localStorage.getItem("token");

  // OnChange value
  const handleFormChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    dispactch(addFeedback(formData, token));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
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
                  <FormLabel htmlFor="email">CustomerName</FormLabel>
                  <Input
                    id="customerName"
                    type="customerName"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleFormChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Feedback</FormLabel>
                  <Input
                    id="feedback"
                    type="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleFormChange}
                  />
                </FormControl>
              </Stack>

              <Stack spacing="6">
                <Button onClick={handleSubmit}>Sumit</Button>
              </Stack>
            </Stack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FeedbackModal;
