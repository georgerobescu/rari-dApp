import React from "react";
import { DASHBOARD_BOX_PROPS, DASHBOARD_BOX_SPACING } from "./DashboardBox";
import { Box, Heading, CloseButton } from "@chakra-ui/react";
import { Row } from "buttered-chakra";

export const MODAL_PROPS = {
  width: { md: "450px", base: "92%" },
  color: "#FFFFFF",
  ...DASHBOARD_BOX_PROPS,
};

export const ModalTitle = React.memo(({ text }: { text: string }) => {
  return (
    <Row
      width="100%"
      mainAxisAlignment="center"
      crossAxisAlignment="center"
      p={DASHBOARD_BOX_SPACING.asPxString()}
    >
      <Heading fontSize="27px">{text}</Heading>
    </Row>
  );
});

export const ModalTitleWithCloseButton = React.memo(
  ({ text, onClose }: { text: string; onClose: () => any }) => {
    return (
      <Row
        width="100%"
        mainAxisAlignment="space-between"
        crossAxisAlignment="center"
        p={DASHBOARD_BOX_SPACING.asPxString()}
      >
        <Box width="32px" />
        <Heading fontSize="27px" lineHeight="1.25em">
          {text}
        </Heading>
        <CloseButton onClick={onClose} />
      </Row>
    );
  }
);

export const ModalDivider = React.memo(() => {
  return <Box h="1px" width="100%" bg="#272727" />;
});
