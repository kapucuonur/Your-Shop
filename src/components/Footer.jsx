import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Typography sx={{ backgroundColor:'#10A3AE', color: 'white', height: '10vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      &copy; {new Date().getFullYear()} Your Shopping. All rights reserved by <Button  component="a"
      href="https://github.com/kapucuonur" target="_blank"
      sx={{fontSize:'14px', color:'brown'}}>Onur Kapucu</Button>
    </Typography>
  );
};

export default Footer;
