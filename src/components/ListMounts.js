import React, { useEffect, useState } from "react";
import { getMountsService } from "../services/mountServices";
import { MountTable } from "./MountTable";

export const ListMounts = () => {
  const [mounts, setMounts] = useState([]);

  // Get all mounts
  const getMounts = () => {
    getMountsService()
      .then((res) => {
          setMounts(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMounts();
  }, []);

  return <MountTable mounts={mounts} />;
};