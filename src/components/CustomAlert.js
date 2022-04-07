
import {Alert} from 'react-bootstrap';

const CustomAlert = ({variant,message,show}) => {
    return(
        <Alert variant={variant} show={show}>
            {message}
        </Alert>
    );
}

export default CustomAlert;