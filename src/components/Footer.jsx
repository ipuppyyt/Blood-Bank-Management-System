import * as React from 'react';
import './css/footer.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div class='footer'>
         <div class="footer-icons">
          <div class="footer-text">© {(new Date().getFullYear())} Blood Bank Management System.</div>
            {/* YouTube Icon */}
            <div class="icon-bg yt">
              <a href='https://www.youtube.com/' title='Youtube' target="_blank" rel='noreferrer'><YouTubeIcon style={{color:"white"}} /></a>
            </div>&nbsp;

            {/* Facebook Icon */}
            <div class="icon-bg fb">
              <a href='https://www.facebook.com/' title='Facebook' target="_blank" rel='noreferrer'><FacebookIcon style={{color:"white"}} /></a>
            </div>&nbsp;

            {/* Twitter Icon */}
            <div class="icon-bg tw">
              <a href='https://twitter.com/' title='Twitter' target="_blank" rel='noreferrer'><TwitterIcon style={{color:"white"}} /></a>
            </div>&nbsp;

            {/* Instagram Icon */}
            <div class="icon-bg ig">
              <a href='https://www.instagram.com/' title='Instagram' target="_blank" rel='noreferrer'><InstagramIcon style={{color:"white"}} /></a>
            </div>
         </div>
    </div>
  );
};

export default Footer;
