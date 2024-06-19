
// import { CardHeader, Card, CardContent, TextField, CardActions, Button,InputAdornment,Icon,Email,Lock,IconButton,VisibilityOff } from '@mui/material';
// //import React from "react";
// import { blue } from '@mui/material/colors';

// function Login() {
//     //const [isPassVisible, setIsPassVisible]  = useState(false)
//   return (
//     <Card sx={{ maxWidth: 500, backgroundColor: blue[300], margin: 'auto', mt: 4 }} raised={true}>
//       <CardHeader title="Login" />
//       <CardContent>
//         <TextField
//           label="Email"
//           variant="outlined"
//           margin="dense"
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment>
//                 <Icon>
//                   <Email />
//                 </Icon>
//               </InputAdornment>
//             )
//           }}
//         />
//         <TextField
//             //type=(isPassVisible ? 'text' : 'password')
//           type="password"
//           label="Password"
//           variant="outlined"
//           margin="dense"
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment>
//                 <Icon>
//                   <Lock />
//                 </Icon>
//               </InputAdornment>
//             ),
//             endAdornment: (
//               <InputAdornment>
//                 <IconButton>
//                 {/* onClick={() => {
//                     setIsPassVisible((oldState) => !oldState)
//                   }} */}
//                   {/* {isPassVisible ? <Visibility/>>:<VisibilityOff/>} */}
//                   <VisibilityOff />
//                 </IconButton>
//               </InputAdornment>
//             )
//           }}
//         />
//       </CardContent>
//       <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <Button size="small" color="secondary" variant="contained">
//           Register
//         </Button>
//         <Button size="small" color="success" variant="contained">
//           Login
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default Login;

import Singup from "../../components/Singup";