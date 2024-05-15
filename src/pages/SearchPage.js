import {FormControl, Radio, RadioGroup} from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';


import { supabase } from "../lib/helper/supabaseClient";

import { useState } from 'react';

import { Typography} from "@mui/material";


export function SearchPage(props) {

    let [search_text, setSearchText] = useState("");

    async function search(event) {

        event.preventDefault();

        let search_text = document.getElementById("qwe").value;


        let {data, error} = await supabase
            .rpc('search_events', {
                search_text
            }).then((data) => {
                setSearchText(data.data)
            }).catch((error) => {
                console.log(error);
            });



    }


    return (
    <div>
        <form fullWidth>
            <TextField  sx={{m: 3}} id="qwe" label="Search" variant="outlined" />
            <Button sx={{m: 3}}
            variant="contained"
            onClick={search}
        >
            Search
        </Button>
        </form>
        {search_text && search_text.map((event) => {
            return (
                <div>
                    <Typography sx={{m: 3}} variant="h4">{event.name}</Typography>
                    <Typography sx={{m: 3}} variant="h4">{event.affected_brand}</Typography>
                    <Typography sx={{m: 3}} variant="h6">{event.description}</Typography>
                </div>
            )
        })}
    </div>
    )
}