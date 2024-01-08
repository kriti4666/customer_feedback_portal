import {
  Skeleton,
  Stack,
  Td,
  Tr,
  Table,
  Tbody,
  Heading,
} from "@chakra-ui/react";

function LoadingSkeleton() {
  const numberOfRows = 6;
  const numberOfColumns = 5;

  return (
    <Stack width="100%">
      <Heading alignItems="center">Loading...!</Heading>
      {[...Array(numberOfRows)].map((_, rowIndex) => (
        <Tr key={rowIndex}>
          {[...Array(numberOfColumns)].map((_, colIndex) => (
            <>
              <Td key={colIndex}>
                <Skeleton
                  height="40px"
                  width="100%"
                  bg="green.500"
                  color="white"
                  fadeDuration={1}
                />
              </Td>
              <Td key={colIndex}>
                <Skeleton
                  height="40px"
                  width="100%"
                  bg="green.500"
                  color="white"
                  fadeDuration={1}
                />
              </Td>
              <Td key={colIndex}>
                <Skeleton
                  height="40px"
                  width="100%"
                  bg="green.500"
                  color="white"
                  fadeDuration={1}
                />
              </Td>
              <Td key={colIndex}>
                <Skeleton
                  height="40px"
                  width="100%"
                  bg="green.500"
                  color="white"
                  fadeDuration={1}
                />
              </Td>
              <Td key={colIndex}>
                <Skeleton
                  height="40px"
                  width="100%"
                  bg="green.500"
                  color="white"
                  fadeDuration={1}
                />
              </Td>
            </>
          ))}
        </Tr>
      ))}
    </Stack>
  );
}

export default LoadingSkeleton;
