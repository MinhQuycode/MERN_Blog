import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
const theme = createTheme();
export default makeStyles(() => ({
    container: {
        backgroundColor: "blue",
        color: "white",
        marginBottom: "20px !important",
        fontWeight: "500 !important",
    },
    paper: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        position: "absolute",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    header: {
        margin: "0 0 10px 0",
    },
    title: {
        marginBottom: "10px",
    },
    textarea: {
        padding: "10px",
        marginBottom: "10px",
    },
    footer: {
        marginTop: "10px",
    },
}));