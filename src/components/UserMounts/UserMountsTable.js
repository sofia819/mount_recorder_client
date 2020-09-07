import React, { useState, createRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { USER_COLUMN } from "../../utils/constants";
import { EditUserMountsForm } from "./EditUserMounts/EditUserMountsForm";
import "../Table.scss";

export const UserMountsTable = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <TableContainer component={Paper}>
      <Table className="table" aria-label="customized table">
        <TableHead className="table-head">
          <TableRow>
            <TableCell align="center">{USER_COLUMN}</TableCell>
            {props.mounts.map((mount) => (
              <TableCell align="center" key={mount.mount_name}>
                {mount.mount_name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users
            .sort((a, b) => a.username.localeCompare(b.username))
            .map((row) => {
              const filteredUserMounts = props.userMounts.filter(
                (userMount) => userMount.user_id === row.user_id
              );
              return (
                <TableRow key={row.user_id} className="table-row">
                  <TableCell align="center" component="th" scope="row">
                    <Button onClick={handleOpenModal}>
                      {row.username}
                      <Modal
                        open={isModalOpen}
                        onClose={handleCloseModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        <EditUserMountsForm
                          ref={createRef()}
                          userMounts={filteredUserMounts}
                        />
                      </Modal>
                    </Button>
                  </TableCell>
                  {filteredUserMounts.map((userMount) => (
                    <TableCell align="center" key={userMount.mount_id}>
                      {userMount.owned ? (
                        <CheckIcon color="primary" />
                      ) : (
                        <ClearIcon color="error" />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
