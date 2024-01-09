import {
  Button,
  Container,
  Heading,
  Modal,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFeedback, getfeedback } from "../redux/feedback/action";
import FeedbackModal from "../Component/FeedbackModal";
import UpdateModal from "../Component/UpdateModal";
import ShowAlert from "../Component/ShowAlert";
import Navbar from "../Component/Navbar";
import LoadingSkeleton from "../Component/LoadingSkeleton";

const initState = {
  customerName: "",
  feedback: "",
};

const ShowFeedback = () => {
  const [alert, setAlert] = useState({ status: "success", message: "" });
  const token = localStorage.getItem("token");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const [userFd, setUserFd] = useState({});
  const [userId, setUserId] = useState("");
  const dispactch = useDispatch();

  const list = useSelector(({ feedbackListReducer }) => feedbackListReducer);
  const add = useSelector(({ feedbackCreateReducer }) => feedbackCreateReducer);
  const update = useSelector(
    ({ feedbackUpdateReducer }) => feedbackUpdateReducer
  );
  const deletefb = useSelector(
    ({ feedbackDeleteReducer }) => feedbackDeleteReducer
  );

  const handelUpdate = (id, feedback) => {
    onOpenEdit();
    setUserFd(feedback);
    setUserId(id);
  };

  const handelDelete = (id) => {
    dispactch(deleteFeedback(id, token));
  };


  useEffect(() => {
    if (add.error || add.errMessage) {
      add.errMessage
        ? setAlert({ status: "error", message: add.errMessage })
        : setAlert({ status: "error", message: add.error });
    } else if (add.data) {
      setAlert({
        status: "success",
        message: "Feedback created successfully.",
      });
    }
  }, [add.data, add.error]);

  useEffect(() => {
    if (update.error || update.errMessage) {
      setAlert({ status: "error", message: update.errMessage });
    } else if (update.data) {
      setAlert({
        status: "success",
        message: "Feedback updated successfully.",
      });
    }
  }, [update.data, update.error]);

  useEffect(() => {
    if (deletefb.error) {
      setAlert({ status: "error", message: deletefb.errMessage });
    } else if (deletefb.data) {
      setAlert({
        status: "success",
        message: "Feedback deleted successfully.",
      });
    }
  }, [deletefb.data, deletefb.error]);

  useEffect(() => {
    dispactch(getfeedback(token));
  }, []);

  return (
    <>
      <Navbar />
      <Container
        maxW="80%"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Heading textAlign="center" mb="30px" size={{ base: "s", md: "lg" }}>
          Customer Feedback Details
        </Heading>
        {alert.message && (
          <ShowAlert
            title={alert.status === "success" ? "Success!" : "Error!"}
            desc={alert.message}
            status={alert.status}
          />
        )}
        <Button onClick={onOpen} colorScheme="messenger">
          Add Feedback
        </Button>
        <TableContainer>
          <Table size={"lg"} variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Customer Name</Th>
                <Th>Feedback</Th>
                <Th>Date</Th>
                <Th>Update</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {list.loading ? (
                <LoadingSkeleton />
              ) : (
                list.res?.map((fd, i) => (
                  <Tr key={fd._id} gap={"30px"}>
                    <Td>{fd.customerName}</Td>
                    <Td>{fd.feedback}</Td>
                    <Td>{fd.date}</Td>

                    <Td align="center">
                      <Button
                        colorScheme="whatsapp"
                        onClick={() => handelUpdate(fd._id, fd)}
                      >
                        Update
                      </Button>
                    </Td>
                    <Td align="center">
                      <Button
                        colorScheme="red"
                        onClick={() => handelDelete(fd._id)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <FeedbackModal
          isOpen={isOpen}
          onClose={onClose}
          initState={initState}
        />
        <UpdateModal
          isOpenEdit={isOpenEdit}
          onCloseEdit={onCloseEdit}
          initState={userFd}
          id={userId}
        />
      </Container>
    </>
  );
};

export default ShowFeedback;
