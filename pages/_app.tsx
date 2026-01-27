import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  //Socket.io, Redux, MUI ...
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider> ;
}
