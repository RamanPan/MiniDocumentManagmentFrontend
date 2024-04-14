import {Box, Button, Container, CssBaseline, Grid, Typography} from "@mui/material";
import useStore from "../utils/useStore";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";

const StartPage = () => {
    const {docsStore} = useStore();
    const navigate = useNavigate();
    const handlerButtonShowDocs = () => {
        docsStore.getDocs();
        navigate("/show-docs");
    }

    return (
        <Box sx={{
            justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#017fa4',
        }}>
            <Container component="main" sx={{}}>
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 35,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        verticalAlign: 'middle',
                        backgroundColor: '#017fa4'

                    }}
                > <Typography component="h1" variant="h1">
                    Приветствуем!
                </Typography>
                    <Typography component="h1" variant="h1">
                        Выберите, что вы хотите сделать
                    </Typography>
                    <Box component="form" noValidate sx={{marginTop: 5}}>
                        <Grid container spacing={2}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Добавить новый документ
                            </Button>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                onClick={handlerButtonShowDocs}
                                sx={{mt: 3, mb: 2}}
                            >Просмотреть список документов
                            </Button>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
export default observer(StartPage);