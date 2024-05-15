import React, {Fragment, useEffect} from "react";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import {EventsPage} from "../pages/EventsPage";

import {Button} from "@mui/material";

import {Drawer}  from "@mui/material";
import {SearchPage} from "../pages/SearchPage";


export default function Navbar(props) {


    const navigate = useNavigate();

    const navigateToEvents = () => {
        navigate("/events");
    };

    const navigateToSearch = () => {
        navigate("/search");
    }

    return (
        <div>
            <Drawer
                sx={{width: 140}}
                variant="permanent"
                anchor="left"
                open={true}
            >
                <Button sx={{m: 3}}
                        onClick={navigateToEvents}>Events</Button>
                <Button sx={{m: 3}}
                        onClick={navigateToSearch}>Search</Button>
                <Button sx={{m: 3}}
                        onClick={props.logout}>Logout</Button>
            </Drawer>
            <div style={{marginLeft: 140}}>
                <Routes>
                    <Route path="/events" element={<EventsPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                </Routes>
            </div>


        </div>
    );
}
