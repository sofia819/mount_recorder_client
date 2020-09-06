import React from "react";
import { Checkbox, FormControlLabel, Box } from "@material-ui/core";
import { EXPANSION_MAP } from "../../utils/constants";

export const ExpansionFilter = (props) => {
  return (
    <Box m={1}>
      {Object.keys(EXPANSION_MAP).map((expansion) => {
        return (
          <FormControlLabel
            key={expansion}
            control={
              <Checkbox
                checked={props.checkedExpansions.includes(expansion)}
                onChange={() => props.onChangeCheckbox(expansion)}
              />
            }
            label={EXPANSION_MAP[expansion]}
          />
        );
      })}
    </Box>
  );
};
