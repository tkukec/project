

import {FormControl, Radio, RadioGroup} from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';


import { supabase } from "../lib/helper/supabaseClient";


export function EventsPage(props) {


    function submitForm(event) {

        const name = document.getElementById("name").value;
        const affected_brand = document.getElementById("affected_brand").value;
        const description = document.getElementById("description").value;
        const malicious_url = document.getElementById("malicious_url").value;
        const malicious_domain = document.getElementById("malicious_domain").value;
        const malicious_dns_a = document.getElementById("malicious_dns_a").value;
        const malicious_dns_ns = document.getElementById("malicious_dns_ns").value;
        const malicious_dns_mx = document.getElementById("malicious_dns_mx").value;
        const keywords = document.getElementById("keywords").value;
        const status = document.querySelector('input[name="status"]:checked').value;

        const data = {
            user_id: supabase.auth.user().id,
            name,
            affected_brand,
            description,
            malicious_url,
            malicious_domain,
            malicious_dns_a,
            malicious_dns_ns,
            malicious_dns_mx,
            keywords,
            status
        };

        supabase
            .from("events")
            .insert([data])
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });


    }


  return (
    <FormControl fullWidth>
        <TextField sx={{m: 1}}
            id="name"
            label="Name"
            variant="outlined"
        />
        <TextField sx={{m: 1}}
            id="affected_brand"
            label="affected_brand"
            variant="outlined"
        />
        <TextField sx={{m: 1}}
            id="description"
            label="Description"
            variant="outlined"
        />
        <TextField sx={{m: 1}}
            id="malicious_url"
            label="Malicious URL"
            variant="outlined"
        />
        <TextField sx={{m: 1}}
            id="malicious_domain"
            label="Malicious Domain"
            variant="outlined"
        />
        <TextField sx={{m: 1}}
            id="malicious_dns_a"
            label="Malicious DNS A"
            variant="outlined"
        />
        <TextField sx={{m: 1}}
            id="malicious_dns_ns"
            label="Malicious DNS NS"
            variant="outlined"
        />
        <TextField sx={{m: 1}}
            id="malicious_dns_mx"
            label="Malicious DNS MX"
            variant="outlined"
        />
        <TextField sx={{m: 1}}
            id="keywords"
            label="Keywords"
            variant="outlined"
        />
        <RadioGroup sx={{m: 1}}
            row
            aria-label
            name="status"
            defaultValue="todo"
        >
            <FormControl sx={{m: 1}}>
                <Radio value="todo" />
                Todo
            </FormControl>
            <FormControl sx={{m: 1}}>
                <Radio value="in progress" />
                In Progress
            </FormControl>
            <FormControl sx={{m: 1}}>
                <Radio value="done" />
                Done
            </FormControl>
        </RadioGroup>
        <Button sx={{m: 1}}
            variant="contained"
            onClick={submitForm}
        >
            Submit
        </Button>
    </FormControl>
  );
}



