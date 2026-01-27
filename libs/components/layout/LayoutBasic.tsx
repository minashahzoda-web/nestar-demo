import { Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import Head from "next/head";

const withLayoutBasic = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: green[300] }}>Header Basic</Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: brown[300] }}>Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutBasic;
