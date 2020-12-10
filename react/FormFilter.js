import React,{useState} from 'react'
import ProjectsType from '../projectsType.json'
function FormFilter() {
    console.log(ProjectsType)
    const [openForm, setOpenForm] = useState(false);
    const [isVisited, setIsVisited] = useState(false);
    function toggleShowForm() {
        setOpenForm(true)
    }
    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleProjectType(e) {
        setIsVisited(true);
        console.log(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit} onMouseEnter={toggleShowForm}>
            <h3>Projects (3)</h3>
            <div className="button_container">
                {openForm && ProjectsType.map(project => (
                <button onClick={handleProjectType} value={project.name} className={`form_button`} key={project.id}>{project.name}</button>
            ))}
            </div>
        </form>
    )
}

export default FormFilter
