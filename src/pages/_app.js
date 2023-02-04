// 1. import `NextUIProvider` component
import {
  createTheme,
  Link,
  NextUIProvider,
  styled,
  Text
} from "@nextui-org/react";

const darkTheme = createTheme({
  type: "light",
  theme: {
    colors: {}
  }
});

function App({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme = { darkTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;
