import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";

const ShowAlert = ({ title, desc, status }) => {
  const toast = useToast();

  useEffect(() => {
    // Call the toast function when the component mounts
    toast({
      title: title,
      description: desc,
      status: status,
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
  }, [title, desc, status, toast]);

  // The ShowAlert component should return null
  return null;
};

export default ShowAlert;