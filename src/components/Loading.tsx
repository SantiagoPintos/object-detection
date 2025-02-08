import { Backdrop, CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <Backdrop 
        open={true}
        sx={(theme) => ({ 
          color: '#fff', 
          zIndex: theme.zIndex.drawer + 1,
        })}
    >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <CircularProgress color="inherit" />
          <div>
              Loading model...
          </div>
        </div>
    </Backdrop>
  );
};