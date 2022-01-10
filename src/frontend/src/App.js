import Home from "./home";
import {ThemeProvider} from "styled-components";

const theme = {
  primaryColor:'#1BC5EB',
  secondaryColor:'#D082E5',
    greenColor:'#297904',
    bgColor:"#11162B"
}

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
  );
}

export default App;
