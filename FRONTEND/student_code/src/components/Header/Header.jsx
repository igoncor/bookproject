import { AppBar, Button } from '@mui/material'

const options = [ "Home", "Profile", "login"]

function Header() {
  return (
    <AppBar position= 'sticky' sx= {{display: "flex", flexDirection: "row"}}>
       { options.map ((option, idx) => { 
         return <Button key={idx} sx= {{ color: "white"}}>
            {option}

         </Button>
       })} 
    </AppBar>
  )
}

export default Header