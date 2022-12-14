import {
  Card,
  CardBody,
  Image,
  Text,
  Heading,
  Divider,
  Stack,
  Box,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

export default function LaunchCard(props: any) {
  const getRandomImg = (imgs: any) =>
    imgs[Math.floor(Math.random() * imgs.length)];
  const image = getRandomImg(props.imgs);

  return (
    <Card maxW="sm">
      <CardBody>
        {image ? (
          <Image
            boxSize="200px"
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        ) : (
          <Box
            style={{
              backgroundColor: "#A0A0A0",
              height: "200px",
              width: "200px",
            }}
          />
        )}
        <Stack mt="6" spacing="3">
          <Box>
            <Heading size="sm">{props.missionName}</Heading>
            <Text>{format(parseISO(props.date), ` MMMMMMM dd, yyyy`)}</Text>
          </Box>
          <Text noOfLines={[1, 2, 3]}>
            {props.details || "No further information provided"}
          </Text>
          <Text color="blue.600" fontSize="2xl"></Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
}
