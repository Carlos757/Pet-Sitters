import { Alert, Snackbar } from "@mui/material";

const Toast = ({ toast, setToast, text, type }) => {
    const handleCloseToast = () => {
        setToast(false);
    };
    const openToast = () => {
        setToast(true);
    };
    return (
        <div>
            <Snackbar
                open={toast}
                autoHideDuration={4000}
                onClose={handleCloseToast}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={handleCloseToast}
                    severity={type}
                    sx={{ width: "100%" }}
                >
                    {text}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Toast;
