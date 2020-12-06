import React,{useState} from 'react'
import Projects from '../projectsData.json'
function FormFilter() {
    console.log(Projects)
    const [openForm, setOpenForm] = useState(false);
    const [isVisited, setIsVisited] = useState(false);
    function toggleShowForm() {
        setOpenForm(true)
    }
    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleVisite() {
        setIsVisited(true);
    }
    return (
        <form onSubmit={handleSubmit} onMouseEnter={toggleShowForm}>
            <h3>Projects (3)</h3>
            <div className="button_container">
                {openForm && Projects.map(project => (
                <button onClick={handleVisite} className={`form_button`} key={project.id}>{project.name}</button>
            ))}
            </div>
        </form>
    )
}

export default FormFilter
