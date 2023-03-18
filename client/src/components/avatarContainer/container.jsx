import AvatarImg from "../avatar/avatar";
import {Grid, } from '@mui/material'

const Container = (props) => {

    return (
        
            props.variants.map((variant) => {
                const newBase = {...props.base, [props.variantName]:[variant]}
                return (<Grid item xs={2} sm={4} md={2}><AvatarImg setBase={props.setBase} name={variant} key={variant} base={newBase} /></Grid>)
            })
        
    )
}

export default Container;