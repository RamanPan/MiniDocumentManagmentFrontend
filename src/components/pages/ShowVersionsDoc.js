import useStore from "../utils/useStore";
import {Box, Button, Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import VersionDoc from "../ui/VersionDoc";
import CreateVersionDoc from "../ui/CreateVersionDoc";

const ShowVersionsDoc = () => {
    const {docsStore} = useStore();
    const [versionsDoc, setVersionsDoc] = useState([])
    const [checkCreation, setCheckCreation] = useState(false);

    function handleChangeState() {
        setCheckCreation(true);
    }

    const fetchData = () => {
        //getReq(API_GET_VERSION_DOC, true, docsStore.docIdSelected)
        docsStore.getVersionsDoc().then(data => {
                setVersionsDoc(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div style={{justifyContent: 'center',}}>
            <Grid container component="main"
                  style={{}}
                  sx={{
                      justifyContent: 'center',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundColor: '#017fa4',
                      minHeight: 1380
                  }}>
                <Box
                    sx={{
                        my: 8,
                        mx: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography component="h1" variant="h1" sx={{mr: 0.5}}>
                        ПРОСМОТР ВЕРСИИ ДОКУМЕНТА
                    </Typography>

                    <Grid container sx={{mt: 3, mb: 2}}>
                        <Grid container sx={{
                            width: 1400,
                        }}>
                            {docsStore.versionDocs.map(data => (
                                <VersionDoc id={data.id} docId={data.docId} number={data.number} author={data.author}
                                            fileName={data.fileName} fileType={data.fileType}
                                            />))}
                            {checkCreation ? <CreateVersionDoc/> :
                                <Button type="submit" variant="contained" onClick={handleChangeState}
                                        sx={{
                                            mt: 3,
                                            mr: 3,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            backgroundColor: '#0ea6d9',
                                            borderRadius: 10,
                                            width: 400,
                                            height: 170
                                        }}>Создать новую версию документа</Button>}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
}
export default observer(ShowVersionsDoc);