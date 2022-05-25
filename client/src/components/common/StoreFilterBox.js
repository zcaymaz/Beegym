import React,{ useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import StoreData from './StoreData';



const StoreFilterBox = () => {

    const[data, setData] = useState(StoreData);
    const filterCategory = (catItem) => {
        const result = StoreData.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }

    return (
        <>
            <Accordion sx={{ backgroundColor: '#CECECE', marginTop: '1.5rem' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        FİLTRE
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <FormLabel>Order By</FormLabel>
                        <RadioGroup
                        >
                            <FormControlLabel
                                value="suplement"
                                control={<Radio />}
                                label="Fiyat Artan"
                                onClick={()=> filterCategory('suplement')}
                            />
                            <FormControlLabel
                                value="shaker"
                                control={<Radio />}
                                label="Fiyat Azalan"
                                onClick={()=> filterCategory('shaker')}
                            />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default StoreFilterBox;