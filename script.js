const Projects = []

class createProject {
    constructor(project_name) {
        this.project_name = project_name
        this.tasks = []
    }
}

const defaultProject = new createProject('Default Project')
Projects.push(defaultProject)



const addProjectBtn = document.getElementById('add-project')
const projectDialog = document.getElementById('project-dialog')
const closeProjectDialog = document.getElementById('project-dialog-close')


const addTaskBtn = document.getElementById('add-task')
const taskDialog = document.getElementById('task-dialog')
const closeTaskDialog = document.getElementById('task-dialog-close')



const mainContainer = document.getElementById('main-container')

// INPUTS
const projectInput = document.getElementById('project-input')
const taskInput = document.getElementById('task-input')

const selectTag = document.getElementById('project-options')

const projectContainer = document.getElementById('project-container')



function updateTasks() {
    Projects.forEach((object) => {
        if (object.project_name === selectTag.value) {
            object.tasks.push(taskInput.value)
        }
    })
}

function renderTasksDOM(item) {
    const rt_projName = document.createElement('h1')
    rt_projName.textContent = item.project_name

    const taskSection = document.createElement('div')
    taskSection.classList.add('task-section')

    const taskHeading = document.createElement('p')
    taskHeading.textContent = 'Tasks'
    taskSection.append(taskHeading)
    item.tasks.forEach((taskitem) => {
        const task = document.createElement('div')
        task.classList.add('task')
        const taskDetails = document.createElement('div')
        taskDetails.classList.add('task-details')
        const taskName = document.createElement('div')
        taskName.classList.add('task-name')
        const radioInput = document.createElement('input')
        radioInput.setAttribute('type', 'radio')
        const span = document.createElement('span')
        span.textContent = taskitem
        taskName.append(radioInput, span)

        const dateTime = document.createElement('div')
        dateTime.classList.add('date-time')
        dateTime.textContent = ('Date and Time')

        taskDetails.append(taskName, dateTime)
        task.append(taskDetails)

        taskSection.append(task)
    })




    mainContainer.append(rt_projName, taskSection)
}


function updateProjects() {


    const project = new createProject(projectInput.value)
    Projects.push(project)


    selectTag.innerHTML = ''
    Projects.forEach((object) => {
        const option = document.createElement('option')
        option.setAttribute('id', object.project_name)
        option.textContent = object.project_name

        selectTag.append(option)
    })
}

function renderProjectsDOM() {

    projectContainer.innerHTML = ''
    Projects.forEach((object) => {
        const projBtn = document.createElement('button')
        projBtn.classList.add('project')
        const projLogo = document.createElement('img')
        projLogo.setAttribute('src', 'assets/user-logo.png')
        const projName = document.createElement('p')
        projName.textContent = object.project_name

        projBtn.append(projLogo, projName)
        projectContainer.append(projBtn)
    })
    const projectBtn = document.querySelectorAll('.project')
    projectBtn.forEach((object) => {
        object.addEventListener("click", () => {
            mainContainer.innerHTML = ''
            Projects.forEach((item) => {
                if (item.project_name === object.textContent.trim()) {

                    renderTasksDOM(item)
                }
            })
        })
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

renderProjectsDOM()