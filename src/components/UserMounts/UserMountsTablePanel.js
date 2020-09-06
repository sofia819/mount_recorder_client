import React, {useState} from "react";
import { UserMountsTable } from "./UserMountsTable";
import { EXPANSION_MAP } from "../../utils/constants";
import { Container, AppBar, Tabs, Tab } from "@material-ui/core";

//filter out expansions
//generate multiple tables with the filters

export const UserMountsTablePanel = (props) => {

    const [selectedTab, setSelectedTab] = useState(0);
    const changeSelectedTab = (expansion) => {
        setSelectedTab(expansion);
    }

    return <Container>
        <Tabs
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          centered
          value={selectedTab}
          className="tabs"
        />
        <Tab onClick={() => changeSelectedTab(0)} label={EXPANSION_MAP[0]} />
        <Tab onClick={() => changeSelectedTab(2)} label={EXPANSION_MAP[2]} />
        <Tab onClick={() => changeSelectedTab(3)} label={EXPANSION_MAP[3]} />
        <Tab onClick={() => changeSelectedTab(4)} label={EXPANSION_MAP[4]} />
        <Tab onClick={() => changeSelectedTab(5)} label={EXPANSION_MAP[5]} />
        <UserMountsTable mounts={props.mounts.filter((mount) => mount.expansion === selectedTab)} users={props.users} />;
    </Container>
};