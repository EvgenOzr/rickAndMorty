import React, {useState} from "react";

const NavigationBlock = ({nextPage, page, allPages, prevBName, nextBName}) => {

    return(
        <div className="rowButton col-md-6">
        <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => nextPage(-1)}
            >{prevBName}</button>
        <span className="currentPage">Current page: {page}/{allPages}</span>
        <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => nextPage(1)}
            >{nextBName}</button>
    </div>
    )
}

export default NavigationBlock;