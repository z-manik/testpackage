import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, title, children, placement }) => (
  <Tooltip
    title={title}
    arrow
    placement={placement}
    classes={{ popper: className }}
  >
    {children}
  </Tooltip>
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function CustomizedTooltips({
  title,
  onClick,
  children,
  placement,
  getid,
}) {
  return (
    <CustomTooltip title={title} placement={placement}>
      <div role="link" onClick={onClick} id={getid}>
        {children}
      </div>
    </CustomTooltip>
  );
}
