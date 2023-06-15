import { Oval } from "react-loader-spinner";
import { Flex } from "@chakra-ui/react";

function Loading() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh  "
      width={"205vh"}
    >
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Flex>
  );
}

export default Loading;
