Vue.component('home', {
	props: ['randomproject'],
    template: `
    <div>
    	<h1>Hello world, I'm Gwendal</h1>
    	<about></about>
    	<h2>One of my projects</h2>
	    <project :project='randomproject'></project>
	    <contact></contact>
	</div>
    `
})