const mainArray = []

class Project{
    constructor(project_name){
        this.project_name = project_name
        this.tasks = []
    }
}

const addProjectBtn = document.getElementById('add-project')
const projectDialog = document.getElementById('project-dialog')
const closeProjectDialog = document.getElementById('project-dialog-close')
const projectForm = document.getElementById('project-form')

const addTaskBtn = document.getElementById('add-task')
const taskDialog = document.getElementById('task-dialog')
const closeTaskDialog = document.getElementById('task-dialog-close')

const todoSection = document.getElementById('todo-section')

// INPUTS
const projectInput = document.getElementById('project-input')
const taskInput = document.getElementById('task-input')

const selectTag = document.getElementById('project-options')

function updateProjects(){
    

    const project = new Project(projectInput.value)
    mainArray.push(project)


    selectTag.innerHTML = ''
    mainArray.forEach((object) => {
        const option = document.createElement('option')
        option.setAttribute('id', object.project_name)
        option.textContent = object.project_name

        selectTag.append(option)
    })
}

function updateTasks(){
    mainArray.forEach((object) => {
        if (object.project_name === selectTag.value){
            object.tasks.push(taskInput.value)
        }
    })
}

function renderTasksDOM(){
    
}

function renderProjectsDOM(){
    todoSection.innerHTML = ''

    mainArray.forEach((object) => {
        const projDiv = document.createElement('div')
        projDiv.classList.add('todo-section-project')
        const projName = document.createElement('p')
        projName.classList.add('project-name')
        projName.textContent = object.project_name

        projDiv.append(projName)
        todoSection.append(projDiv)

    })
    
}

addProjectBtn.addEventListener("click", () => {
    projectDialog.show()
})

closeProjectDialog.addEventListener("click", (e) => {
    e.preventDefault()

    projectDialog.close()

    updateProjects()
    renderProjectsDOM()
})

addTaskBtn.addEventListener("click", () => {
    
    taskDialog.show()
})

closeTaskDialog.addEventListener("click", (e) => {
    e.preventDefault()



    taskDialog.close()
    updateTasks()


})