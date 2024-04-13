import {Box, Button, Grid, Typography} from "@mui/material";
import {API_GET_FILE_BY_VERSION_ID} from "../utils/constants";

const VersionDoc = (props) => {

    const downloadFile = () => {
        fetch(API_GET_FILE_BY_VERSION_ID + "/" + props.id)
            .then(response => {
                response.blob().then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    // Создаем ссылку для скачивания файла
                    const link = document.createElement('a');
                    link.href = url;
                    console.log(props.fileName)
                    link.setAttribute('download', props.fileName); // Указываем имя файла
                    // Добавляем ссылку на страницу и эмулируем клик для скачивания
                    document.body.appendChild(link);
                    link.click();
                    // Очищаем ссылку
                    link.parentNode.removeChild(link);
                });
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
                        Версия документа {props.number}
                    </Typography>
                </Grid>
                <Grid sx={{width: 400, minHeight: 330}}>
                    <Grid container sx={{mt: -2}}>
                        <Typography align='left' variant='h3'>
                            Автор:
                        </Typography>
                        <Typography align='center' sx={{ml: 1}} variant='h4'>
                            {props.author}
                        </Typography>
                    </Grid>
                    <Grid container sx={{mt: -2}}>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={downloadFile}
                            sx={{ml: 3, mt: 2,width: '80%'}}
                        >Скачать файл
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
}
export default VersionDoc;