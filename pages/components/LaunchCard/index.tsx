import {
  Card,
  CardBody,
  Image,
  Text,
  Heading,
  Stack,
  Box,
  CardFooter,
  Link,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Props {
  imgs: string[];
  missionName: string;
  date: string;
  details: string;
  link: string;
}

export default function LaunchCard({
  imgs,
  missionName,
  date,
  details,
  link,
}: Props) {
  const [img, setImg] = useState<string>("");
  useEffect(() => {
    const getRandomImg = (imgs: string[]) =>
      imgs[Math.floor(Math.random() * imgs.length)];
    setImg(getRandomImg(imgs));
  }, [imgs]);

  return (
    <Card maxW="sm" className={styles.card}>
      <Image
        boxSize="300px"
        objectFit="cover"
        src={img || "/spacex-black.jpg"}
        alt="Image from the mission"
        borderTopRadius="lg"
      />
      <CardBody>
        <Stack spacing="5">
          <Box>
            <Heading size="sm">{missionName}</Heading>
            {date && <Text>{format(parseISO(date), `MMMMMMM dd, yyyy`)}</Text>}
          </Box>
          <Text noOfLines={5}>
            {details || "No further information provided"}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter justify="center">
        <Link href={link} isExternal>
          Wikipedia <ExternalLinkIcon mx="2px" />
        </Link>
      </CardFooter>
    </Card>
  );
}
