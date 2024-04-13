import {useState} from "react";
import useStore from "../utils/useStore";
import {API_CREATE_VERSION_DOC} from "../utils/constants";
import {Box, Button, Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";

const CreateVersionDoc = () => {
    const [file, setFile] = useState(null);
    const {docsStore} = useStore();
    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    }
    const uploadFile = (event) => {
        event.preventDefault();

        if (file === null || file === undefined) {
            return;
        }
        let data = new FormData();
        data.append('fileData', file);
        data.append('id', docsStore.docIdSelected);
        data.append('author', docsStore.login);

        fetch(API_CREATE_VERSION_DOC, {
            method: 'POST',
            body: data
        }).then(() =>{
            docsStore.getVersionsDoc();
            //window.location.reload();
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
                    height: 170,
                }}
            > <Grid container sx={{ml: 2, mt: 2}}>
                <Grid sx={{width: 400, height: 70}} alignItems='flex-start'>
                    <Typography variant='h2' align='left'>
                        Создание новой версии
                    </Typography>
                </Grid>
                <Grid sx={{width: 400, minHeight: 330}}>
                    <Grid container sx={{mt: -1, ml:1}}>
                        <input onChange={onFileChange} multiple type="file"/>
                    </Grid>
                    <Grid container sx={{}}>
                        <Button
                            type="submit"
                            inputtype="file"
                            variant="contained"
                            onClick={uploadFile}
                            sx={{ml: 3, mt: 1}}
                        >Создать документ
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
}
export default observer(CreateVersionDoc);