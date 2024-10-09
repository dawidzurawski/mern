import { Container } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Container maxW='container.xl' py={12}>
      <VStackContainer spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>
      </VStackContainer>
    </Container>
  )
}

export default HomePage