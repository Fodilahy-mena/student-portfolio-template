import React from 'react'

function Proficiencies() {
    return (
        <>
            <h2>Front end</h2>
            <div className="proficiencies_devider">
                <div>
                    <div className="proficiencies_container">
                        <label>HTML</label>
                        <progress className="proficiency" value="90" max="100"> 90% </progress>
                    </div>
                    <div className="proficiencies_container">
                        <label>CSS</label>
                        <progress className="proficiency" value="93" max="100"> 93% </progress>
                    </div>
                    <div className="proficiencies_container">
                        <label>Vanilla JavaScript</label>
                        <progress className="proficiency" value="75" max="100"> 75% </progress>
                    </div>
                </div>
                <div>
                    <div className="proficiencies_container">
                        <label>React Native</label>
                        <progress className="proficiency" value="87" max="100"> 87% </progress>
                    </div>
                    <div className="proficiencies_container">
                        <label>React Hooks</label>
                        <progress className="proficiency" value="80" max="100"> 80% </progress>
                    </div>
                    <div className="proficiencies_container">
                        <label>Redux</label>
                        <progress className="proficiency" value="1" max="100"> Not yet </progress>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proficiencies
