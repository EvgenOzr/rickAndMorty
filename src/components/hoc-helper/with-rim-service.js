import React from "react";
import { RiMServiceConsumer } from "../rim-service-contex/rim-service-context";


const withRiMService = (Wrapped, mapMethodsToProps) => {

    return (props) => {
        return (
            <RiMServiceConsumer>
            {
                (RiMService) => {
                    const serviceProps = mapMethodsToProps(RiMService) 
                    // console.log(props);   
                    return(
                        <Wrapped {...props} {...serviceProps}/>                        
                    )
                }
            }
            </RiMServiceConsumer>
        )
    }
}

export default withRiMService;