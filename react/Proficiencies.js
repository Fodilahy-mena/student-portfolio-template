import React from 'react'

function Proficiencies() {
    return (
        <>
            <h2>Front end</h2>
            <div className="proficiencies_container">
                <label for="react">React</label>
                <progress className="proficiency" value="90" max="100"> 90% </progress>
            </div>
            <div className="proficiencies_container">
                <label for="javaScript">JavaScript</label>
                <progress className="proficiency" value="85" max="100"> 85% </progress>
            </div>
            <div className="proficiencies_container">
                <label for="css">CSS</label>
                <progress className="proficiency" value="93" max="100"> 93% </progress>
            </div>
            <div className="proficiencies_container">
                <label for="vue">Vue</label>
                <progress className="proficiency" value="16" max="100"> 26% </progress>
            </div>
            <div className="proficiencies_container">
                <label for="redux">Redux</label>
                <progress className="proficiency" value="22" max="100"> 22% </progress>
            </div>
            <div className="proficiencies_container">
                <label for="react-native">React Native</label>
                <progress className="proficiency" value="87" max="100"> 87% </progress>
            </div>
        </>
    )
}

export default Proficiencies
