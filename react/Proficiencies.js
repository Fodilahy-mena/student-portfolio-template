import React from 'react'

function Proficiencies() {
    return (
        <>
            <h2>Front end</h2>
            <div className="proficiencies_devider">
                <div>
                    <div className="proficiencies_container">
                        <label>React</label>
                        <progress className="proficiency" value="90" max="100"> 90% </progress>
                    </div>
                    <div className="proficiencies_container">
                        <label>JavaScript</label>
                        <progress className="proficiency" value="85" max="100"> 85% </progress>
                    </div>
                    <div className="proficiencies_container">
                        <label>CSS</label>
                        <progress className="proficiency" value="93" max="100"> 93% </progress>
                    </div>
                </div>
                <div>
                    <div className="proficiencies_container">
                        <label>Vue</label>
                        <progress className="proficiency" value="16" max="100"> 26% </progress>
                    </div>
                    <div className="proficiencies_container">
                        <label>Redux</label>
                        <progress className="proficiency" value="22" max="100"> 22% </progress>
                    </div>
                    <div className="proficiencies_container">
                        <label>React Native</label>
                        <progress className="proficiency" value="87" max="100"> 87% </progress>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proficiencies
