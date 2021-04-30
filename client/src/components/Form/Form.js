import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';


// css import
import useStyles from './style.js';

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', message: '', tags: '', selectFile: ''});

    const classes = useStyles();
    // handle submit function
    const handleSubmit = () => {

    }
    // clear function
    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <Form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit} >
                <Typography varient="h6"> Creating a Memory </Typography>
                <TextField name="creator" varient="outlined" label="Creator" fullWidth value={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
                <TextField name="title" varient="outlined" label="Title" fullWidth value={postData.title}onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
                <TextField name="message" varient="outlined" label="Message" fullWidth value={postData.message}onChange={(e) => setPostData({ ...postData, message: e.target.value})} />
                <TextField name="tags" varient="outlined" label="Tags" fullWidth value={postData.tags}onChange={(e) => setPostData({ ...postData, tags: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase type="file"multiple={false}onDone={({base64}) => setPostData({ ...postData, selectFile: base64}) }/>
                    <Button className={classes.buttonSubmit} varient="container" color="primary" size="large" type="submit" fullwidth > Submit </Button>
                    <Button className={classes.buttonSubmit} varient="contained" color="secondary" size="small" onClick={clear} fullwidth > Clear </Button>
                </div>
            </Form>
        </Paper>
    );
}

export default Form;