import { Navbar, Nav, Form, Image} from "react-bootstrap";
import avatar from "../components/media/avatar.png"
import * as Icon from 'react-bootstrap-icons';
import LogoIcon from "../components/media/netflixLogo.png"
import { Link } from "react-router-dom";



const MyNavbar = () => {
      return (
            <>
            <Navbar className="px-4" style={{backgroundColor: "#141414"}} variant="dark">
              <Image className="mr-2 align-middle" src={LogoIcon} style={{width: "120px"}}/>
              <Nav className="mr-auto">
                {/* <Nav.Link style={{fontSize: "15px"}} href="#home">Home</Nav.Link>
                <Nav.Link style={{fontSize: "15px", color: "white"}} href="#features">TV Shows</Nav.Link>
                <Nav.Link style={{fontSize: "15px"}} href="#pricing">Movies</Nav.Link>
                <Nav.Link style={{fontSize: "15px"}} href="#pricing">Recetly Added</Nav.Link>
                <Nav.Link style={{fontSize: "15px"}} href="#pricing">My List</Nav.Link> */}
                 <Link to="/">
                        <div className='nav-link'>
                            Home
                        </div>
                    </Link>
                  <Link to="/tvShows">
                        <div className='nav-link'>
                            TvShows
                        </div>
                    </Link>
                    <Link to="/details/:movieId">
                        <div className='nav-link'>
                            Details
                        </div>
                    </Link>

              </Nav>
              <Form inline>
                <Icon.Search className="mr-3" color="white" size={16} />
                <span className="font-weight-bold mr-3" style={{color: "white", fontSize: 12}}>KIDS</span>
                <Icon.BellFill className="mr-3"color="white" size={16}/>
                <Image className="mr-3 align-middle" src={avatar} style={{width: "25px"}}/> 
                <Icon.CaretDownFill className="mr-3"color="white" size={12}/>
              </Form>
            </Navbar>
           </>
      );
    };
    
    export default MyNavbar;