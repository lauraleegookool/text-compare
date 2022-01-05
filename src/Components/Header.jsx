import {Typography} from '@material-ui/core' 
function Header(props) {
    return <div className="header">
    <Typography variant="h3">{props.text}</Typography>
    </div>
}

export default Header