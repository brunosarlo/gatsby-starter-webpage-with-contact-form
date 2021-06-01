import React from "react"

function HeaderSectionTemplate(props) {
    return (    
        
        <div id="headerSection" className={'pb-20 grid grid-cols-1 lg:grid-cols-12 lg:gap-8 col-span-12'}>
            {props.children}
        </div>
    )
}
export default HeaderSectionTemplate