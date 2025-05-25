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
    const removeTask = document.querySelectorAll('.task')
    removeTask.forEach((item) => {
        item.remove()
    })

    mainArray.forEach((object) => {
        object.tasks.forEach((objects) => {
            const task = document.createElement('div')
            task.classList.add('task')
            const taskDetails = document.createElement('div')
            taskDetails.classList.add('task-details')
            const taskName = document.createElement('div')
            taskName.classList.add('task-name')
            const radioInput = document.createElement('input')
            radioInput.setAttribute('type', 'radio')
            
            const span = document.createElement('span')
            span.textContent = objects
            taskName.append(radioInput, span)

            

            const dateTime = document.createElement('div')
            dateTime.classList.add('date-time')
            dateTime.textContent = ('Date and Time')

            taskDetails.append(taskName, dateTime)
            task.append(taskDetails)

            const projectDiv = document.getElementById(object.project_name)
            projectDiv.append(task)
        })
    })
    
}

function renderProjectsDOM(){
    todoSection.innerHTML = ''

    mainArray.forEach((object) => {
        const projDiv = document.createElement('div')
        projDiv.classList.add('todo-section-project')
        projDiv.setAttribute('id', object.project_name)

        const projName = document.createElement('p')
        projName.classList.add('project-name')
        projName.textContent = object.project_name

        projDiv.append(projName)
        todoSection.append(projDiv)

    })

    renderTasksDOM()
    
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
    renderTasksDOM()


})