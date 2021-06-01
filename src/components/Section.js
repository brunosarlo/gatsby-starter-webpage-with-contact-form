import React from "react"

function SectionTemplate(props) {
    return (    
        
            <div className={'col-span-12 pb-20 diagonal-box bg-' + props.section.colour}>
                <div className="content">
                    <div className={'mb-10 sm:mb-0 diagonal-h2 col-span-12 bg-' + props.section.colour}>
                        <h2 className={'text-center'}>{props.section.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 py-0 lg:grid-cols-12">
                        {props.children}
                    </div>
                </div>
            </div>
    )
}
export default SectionTemplate