import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => (
    {
        text: {
            color: theme.text.color,
            '&:hover': {
                color: theme.text.hoverColor,
                'background-color': theme.text.color
            }
        }
    });

const Text = ({classes}) => {

    const texto = 'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! Mé faiz elementum girarzis, nisi eros vermeio.'
    return (
        <div className={classes.text}>
            <p>
                {texto}
            </p>
        </div>
    )
}

export default injectSheet(styles)(Text);