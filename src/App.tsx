
import AddUser from './components/AddTask';
import { Box  } from '@chakra-ui/react';
import Header from "./components/header";



function App() {

    
  return (
    <Box
    bg="white"
    >
      <Header></Header>
      <AddUser></AddUser>

    </Box>
  );
}

export default App;
