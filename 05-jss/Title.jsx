import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => (
    {
        title: {
            color: theme.title.color,
            'text-align': 'center',
            'flex': '1 100%',
            '&:hover':{
                'text-decoration' : (props) => props.hover ? theme.title.hoverTransformation : 'none'

            }

        }
    });


const Title = ( {classes} ) => {


    return (
            <h1 className={classes.title}>Meetup React Maringá</h1>

    )
};

export default injectSheet(styles)(Title);