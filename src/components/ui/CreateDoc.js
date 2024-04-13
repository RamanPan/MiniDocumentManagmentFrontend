import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import useStore from "../utils/useStore";
import {API_CREATE_DOC} from "../utils/constants";

const CreateDoc = () => {
    const [file, setFile] = useState(null);
    const [docName, setDocName] = useState("");
    const [inputNumber, setInputNumber] = useState("");
    const {docsStore} = useStore();
    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    }
    const updateDocName = (event) => {
        const {value} = event.target;
        setDocName(value);
    }
    const updateInputNumber = (event) => {
        const {value} = event.target;
        setInputNumber(value);
    }

    const uploadFile = (event) => {
        event.preventDefault();

        if (file === null || file === undefined) {
            return;
        }
        let data = new FormData();
        data.append('fileData', file);
        data.append('author', docsStore.login);
        data.append('docName', docName);
        data.append('inputNumber', inputNumber);

        fetch(API_CREATE_DOC, {
            method: 'POST',
            body: data
        }).then(response => {
            window.location.reload();
            //docsStore.getDocs();
        });

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
                    <Typography variant='h2' align='left'>
                        Создание нового документа
                    </Typography>
                </Grid>
                <Grid sx={{width: 400, minHeight: 330}}>
                    <Grid>
                        <Typography align='left' variant='h3'>
                            Введите название:
                        </Typography>
                    </Grid>
                    <TextField
                        margin="normal"
                        required={true}
                        label='Название'
                        name="name"
                        onChange={updateDocName}
                        sx={{width: 360, mr: 4, mt: 2, backgroundColor: '#FFFFFF'}}
                    />
                    <Grid>
                        <Typography align='left' variant='h3'>
                            Введите входящий номер:
                        </Typography>
                        <TextField
                            margin="normal"
                            required={true}
                            label='Входящий номер'
                            name="name"
                            onChange={updateInputNumber}
                            sx={{width: 360, mr: 4, mt: 2, backgroundColor: '#FFFFFF'}}
                        />
                    </Grid>
                    <Grid container sx={{mt: 1, ml: 1}}>
                        <input onChange={onFileChange} multiple type="file"/>
                    </Grid>
                    <Grid container sx={{mt: 1, mb: 1}}>
                        <Button
                            type="submit"
                            inputtype="file"
                            variant="contained"
                            onClick={uploadFile}
                            sx={{ml: 2, mt: 2, width: 340}}
                        >Создать документ
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
        ;
}
export default observer(CreateDoc);