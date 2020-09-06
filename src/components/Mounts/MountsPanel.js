import React from "react";
import { MountsTable } from "./MountsTable";
import PropTypes from "prop-types";

export const MountsPanel = (props) => <MountsTable mounts={props.mounts} />;

MountsPanel.propTypes = {
  mounts: PropTypes.array,
};
