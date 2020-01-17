var application = null;

function router() {
    if ('content' in document.createElement('template')) {
        routeUser()
    } else {
        alert('ERROR: this website is not compatible with your browser. Please download a modern one.')
    }
}

function routeUser() {
    const userRequestedRoute = window.location.hash.startsWith('#')
    ? window.location.hash.substring(1)
    : window.location.hash

    const app = document.getElementById('app')

    var vueData = null

    if (userRequestedRoute === '' || userRequestedRoute === '/home') {
        const projectID = getRandomInt(projects.length)
        app.innerHTML = "<home :randomproject='p'></home>"
        vueData = {p : projects[projectID]}
    } else if (userRequestedRoute === '/projects') {
        app.innerHTML = "<project v-for='p in projectList' :project='p'></project>"
        vueData = {projectList : projects}
    } else if (userRequestedRoute === '/contact') {
        app.innerHTML = "<contact></contact>"
        vueData = {}
    } else if (userRequestedRoute === '/studies') {
        app.innerHTML = "<studies v-for='s in studiesList' :study='s'></studies>"
        vueData = {studiesList : studies}
    } else if (userRequestedRoute.startsWith('/studies')) {
        const studiesID = parseInt(userRequestedRoute.substring('/studies/'.length))
        app.innerHTML = "<studies-detail :study='s'></studies-detail>"
        vueData = {s : studies[studiesID]}
    } else {
        app.innerHTML = "<notfound></notfound>"
        vueData = {}
    }
    application = new Vue({
      el: '#app',
      data: vueData
    })
}

window.onload = () => router()
window.onpopstate = () => router()

Vue.component('notfound', {
    template: `
    <p>404 - page not found</p>
    `
})

Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: `
    <div class="col-sm-4">
        <div class="card">
            <div class="card-body">
                <p v-if="todo.checked"><input type="checkbox" checked @change="toggleCheck">{{ todo.label }}</p>
                <p v-else><input type="checkbox" @change="toggleCheck">{{ todo.label }}</p>
                <button class="btn btn-danger todo-remove-button" @click="remove">Remove</button>
            </div>
        </div>
    </div>
    `,
    methods: {
        remove: function () {
            todos.splice(todos.indexOf(this.todo), 1)
        },
        toggleCheck: function() {
            todos[todos.indexOf(this.todo)].checked = !(todos[todos.indexOf(this.todo)].checked)
        }
    }
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}