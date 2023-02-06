import {
  createTheme,
  Link,
  NextUIProvider,
  styled,
  Text
} from "@nextui-org/react";
import { Layout } from "@/components/Layout";
import Nav from "@/components/Nav";
import '../styles/transition.css'
import { Container } from "reactstrap";

const darkTheme = createTheme({
  type: "light",
  theme: {
    colors: {}
  }
});

function App({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <Layout>
      <NextUIProvider theme = { darkTheme }>
        <Container fluid>
        <Nav />
        <Component {...pageProps} />
        </Container>
      </NextUIProvider>
    </Layout>
  );
}

export default App;
