import { Box } from "@chakra-ui/react";
import React from "react";

const VideoCard = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <Box bg={"#BFAF9F"} borderWidth={1} p={4} borderRadius={5}>
            <Box mb={2}>
                {children}
            </Box>
        </Box>
    )
};

export default VideoCard;
