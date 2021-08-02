import logo from "./logo.svg";
import "./App.css";
import { Button, ChakraProvider, Text } from "@chakra-ui/react";
import theme from "./theme/theme";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Text
          bgGradient="linear(to-r, orange.200, purple.300)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome to Chakra UI
        </Text>
      </ChakraProvider>
    </div>
  );
}

export default App;
