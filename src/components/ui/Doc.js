import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {postReq} from "../utils/apiCalls";
import {API_REMOVE_DOC} from "../utils/constants";
import {useState} from "react";
import useStore from "../utils/useStore";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";

const Doc = (props) => {
    const [docOutputNumber, setDocOutputNumber] = useState(props.docOutputNumber);
    const [field, setField] = useState("");
    const navigate = useNavigate();
    const {docsStore} = useStore();
    const handlerButtonRemove = () => {
        if (field !== "") {
            postReq(API_REMOVE_DOC,true, {id: props.id, docOutputNumber: field})
                .then(() => {
                        setDocOutputNumber(field);
                    }
                );
        }
    }
    const updateDocOutputNumber = (event) => {
        const {value} = event.target;
        setField(value);
    }
    const handleShowVersionDocument = () => {
        docsStore.setDocIdSelected(props.id);
        navigate("/show-versions-doc");
    }
    return (
        <div>
            <Box
                sx={{
                    mt: 3,
                    mr: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    backgroundColor: '#0ea6d9',
                    borderRadius: 10,
                    width: 400,
                    height: 470,
                }}
            > <Grid container sx={{ml: 2, mt: 2}}>
                <Grid sx={{width: 400, height: 70}} alignItems='flex-start'>
                    <Typography variant='h2' align='left'
                                color={docOutputNumber === null ? "#56F43C" : "#b60a1c"}>
                        Документ
                    </Typography>
                </Grid>
                <Grid sx={{width: 400, minHeight: 330}}>
                    <Grid container sx={{maxWidth: 800}}>
                        <Typography align='left' variant='h3'>
                            Название:
                        </Typography>
                        <Typography align='center' sx={{ml: 1}} variant='h4'>
                            {props.docName}
                        </Typography>
                    </Grid>
                    <Grid container sx={{maxWidth: 800}}>
                        <Typography align='left' variant='h3'>
                            Автор:
                        </Typography>
                        <Typography align='center' sx={{ml: 1}} variant='h4'>
                            {props.author}
                        </Typography>
                    </Grid>
                    <Grid container sx={{maxWidth: 800}}>
                        <Typography align='left' variant='h3'>
                            Дата создания:
                        </Typography>
                        <Typography align='center' sx={{ml: 1}} variant='h4'>
                            {props.dateInit}
                        </Typography>
                    </Grid>
                    <Grid container sx={{maxWidth: 800}}>
                        <Typography align='left' variant='h3'>
                            Входящий номер:
                        </Typography>
                        <Typography align='center' sx={{ml: 1}} variant='h4'>
                            {props.docInputNumber}
                        </Typography>
                    </Grid>
                    <Grid container sx={{maxWidth: 800}}>
                        <Typography align='left' variant='h3'>
                            Исходящий номер:
                        </Typography>
                        <Typography align='center' sx={{ml: 1}} variant='h4'>
                            {docOutputNumber === null ? "нет" : docOutputNumber}
                        </Typography>
                    </Grid>
                    <Grid container sx={{maxWidth: 800, mt: -1}}>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={handleShowVersionDocument}
                            sx={{ml: 3, mt: 2}}
                        >Просмотреть версии документа
                        </Button>
                    </Grid>
                    {docOutputNumber === null ? (
                        <Grid container sx={{maxWidth: 800, mr: 2}}>
                            <TextField
                                margin="normal"
                                required={true}
                                label='Исходящий номер'
                                name="name"
                                onChange={updateDocOutputNumber}
                                sx={{width: 320, mt: 2, ml: 3,backgroundColor:'#FFFFFF'}}
                            />
                            <Button type="submit" variant="contained" onClick={handlerButtonRemove}
                                    sx={{ml: 13.3, backgroundColor: "#b60a1c"}}>Снять с
                                учёта</Button></Grid>) : (<Grid/>)}
                </Grid>
            </Grid>
            </Box>
        </div>
    )
        ;
}
export default observer(Doc);