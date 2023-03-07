import GlobalStyle from "../styles";
import Header from "../components/Header";
import { useState } from "react";
import { useContext } from "react";
import { LargeImage, LargeImageProvider } from "../context/LargeImage";

import Main from "../components/Main";

export default function App({ Component, pageProps }) {
  //const [isLarge, setIsLarge] = useState(false);
  const ImageContext = useContext(LargeImage);

  /* function handleSetIsLarge(newValue) {
    setIsLarge(newValue);
  } */
  return (
    <LargeImageProvider>
      <GlobalStyle />

      <Header />

      <Main>
        <Component {...pageProps} />
      </Main>
    </LargeImageProvider>
  );
}
