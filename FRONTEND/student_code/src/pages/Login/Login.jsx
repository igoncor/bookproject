// import{CardHeader,Card,CardContent,TextField, CardActions,Button} from '@mui/material';
// import React from "react";
// import { blue } from '@mui/material/colors';
// function Login(){
//     return(
        
//           <Card sx={{ maxWidth: '500px', backgroundColor: blue[300] }} raised={true}>
//           <CardHeader title="Login"></CardHeader>
//           <CardContent>
//             <TextField
//               label="Email"
//               variant="outlined"
//               margin="dense"
//               fullWidth={true}
//             ></TextField>
//             <TextField
//               label="Password"
//               variant="outlined"
//               margin="dense"
//               fullWidth={true}
//             ></TextField>
//           </CardContent>
//           <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <Button size="small" color="secondary" variant="contained">
//           Register
//         </Button>
//         <Button size="small" color="primary" variant="contained">
//           Login
//         </Button>
//       </CardActions>
//         </Card>
//     )
// }

// export default Login

//segunda opcion
import { CardHeader, Card, CardContent, TextField, CardActions, Button } from '@mui/material';
import React from "react";
import { blue } from '@mui/material/colors';

function Login() {
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: blue[300], margin: 'auto', mt: 4 }} raised={true}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField
          label="Email"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="dense"
          type="password"
          fullWidth
        />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="small" color="secondary" variant="contained">
          Register
        </Button>
        <Button size="small" color="primary" variant="contained">
          Login
        </Button>
      </CardActions>
    </Card>
  );
}

export default Login;