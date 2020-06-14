import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = ({ title, ...otherProps }) => {

    return(
        <Button
         {...otherProps}
        >
        {title}
      </Button>
    );
}

export default ButtonComponent;