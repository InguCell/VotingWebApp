import React from "react";

import { Home, People, Article, HowToVote, ListAlt} from "@mui/icons-material";

export const SidebarData = [
    {
        title: "Dashboard",
        icons: <Home/>,
        path: "/dashboard"
    },

    {
        title: "Candidates",
        icons: <People/>,
        path: "/candidates"
    },

    {
        title: "Candidate Details",
        icons: <Article/>,
        path: "/candidateDetails"
    },

    {
        title: "Vote",
        icons: <HowToVote/>,
        path: "/vote"
    },

    {
        title: "Voters Guidelines",
        icons: <ListAlt/>,
        path: "/voteGuidelines"
    },
];