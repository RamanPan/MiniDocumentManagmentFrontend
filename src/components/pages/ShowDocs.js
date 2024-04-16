import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import Doc from "../ui/Doc";
import useStore from "../utils/useStore";
import {observer} from "mobx-react-lite";
import {getDate} from "../utils/constants";
import {useEffect, useState} from "react";
import CreateDoc from "../ui/CreateDoc";


const ShowDocs = () => {
    const {docsStore} = useStore();
    const [checkCreation, setCheckCreation] = useState(false);
    function handleChangeState() {
        setCheckCreation(true);
    }
    const updateLogin = (event) => {
        const {value} = event.target;
        docsStore.setLogin(value);
    }
    const fetchData = () => {
        docsStore.getDocs();
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
                > <Container>
                    <Typography component="h1" variant="h1" sx={{mr: 0.5}}>
                        ПРОСМОТР И СОЗДАНИЕ ДОКУМЕНТОВ
                    </Typography>
                    <Typography component="h1" variant="h1" sx={{mr: 0.5, mt: 1}}>
                        Введите ваше имя: <TextField
                        margin="normal"
                        required={true}
                        label='Имя'
                        name="name"
                        defaultValue={'admin'}
                        onChange={updateLogin}
                        sx={{width: 320, mt: 1, ml: 3, backgroundColor: '#0ea6d9'}}
                    />
                    </Typography>
                </Container>
                    <Grid container sx={{mt: 2, mb: 2}}>
                        <Grid container sx={{
                            width: 1400,
                        }}>
                            {docsStore.docs.map(data => (
                                <Doc id={data.id} infoDocId={data.infoDocId} docName={data.docName}
                                     author={data.author} docInputNumber={data.docInputNumber}
                                     docOutputNumber={data.docOutputNumber}
                                     dateInit={getDate(data.dateInit)}/>))}
                            {checkCreation ? <CreateDoc/> :
                                <Button type="submit" variant="contained" onClick={handleChangeState}
                                        sx={{
                                            mt: 3,
                                            mr: 3,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            backgroundColor: '#0ea6d9',
                                            borderRadius: 10,
                                            width: 400,
                                            height: 470
                                        }}>Создать новый документ</Button>}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
}
export default observer(ShowDocs);