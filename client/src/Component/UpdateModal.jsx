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
import { updateFeedback } from "../redux/feedback/action";

const UpdateModal = ({ isOpenEdit, onCloseEdit, initState, id }) => {
    const [updateData, setUpdateData] = useState({
        customerName: initState?.customerName || '',
        feedback: initState?.feedback || '',
      });
  const dispactch = useDispatch();

  const token = localStorage.getItem("token");

  // OnChange value
  const handleFormChange = ({ target }) => {
    const { name, value } = target;
    setUpdateData({ ...updateData, [name]: value });
  };

  console.log(updateData, initState.customerName, initState.feedback);

  const handleSubmit = () => {
    dispactch(updateFeedback(updateData, id, token));
    onCloseEdit();
  };


  return (
    <Modal isOpen={isOpenEdit} onClose={onCloseEdit}>
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
                    value={updateData.customerName}
                    onChange={handleFormChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Feedback</FormLabel>
                  <Input
                    id="feedback"
                    type="feedback"
                    name="feedback"
                    value={updateData.feedback}
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

export default UpdateModal;
