import {Dialog, DialogContent, DialogTitle, TextField} from '@mui/material';
import { useState } from 'react';


const CreateBugModal  = ({open, setIsCreateBugModalOpen}) => {
    const[title, setTitle] = useState("");
    const[steps, setSteps] = useState("");
    return(
        <Dialog onClose = {() => setIsCreateBugModalOpen(false)} open = {open} fullWidth>
        <DialogTitle>Create Bug</DialogTitle>
        <DialogContent>
            <TextField label = "title" value = {title} onChange = {(e) => setTitle(e.target.value)}>Title: </TextField>
            <TextField label = "steps" value = {steps} onChange = {(e) => setSteps(e.target.value)}>Steps: </TextField>
        </DialogContent>
        </Dialog>

    )
}

export default CreateBugModal;