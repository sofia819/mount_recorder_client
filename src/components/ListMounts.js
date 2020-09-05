import React from "react";
import { MountTable } from "./MountTable";
import PropTypes from "prop-types";

export const ListMounts = (props) => <MountTable mounts={props.mounts} />;

ListMounts.propTypes = {
  mounts: PropTypes.array,
};
