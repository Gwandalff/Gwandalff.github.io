Vue.component('project', {
	props: ['project'],
    template: `
	<div class="row project">
		<div class="col-sm-12">
			<div class="row project-head">
				<div class="col-sm-8 name">
					{{ project.name }}
				</div>
				<div class="col-sm-4 project-right">
					<span class="date">{{ project.start }} - {{ project.end }}</span>
					<span class="team">
						{{ project.team.length }}<i class="fa fa-users"></i>
						<span class="tooltip"><span v-for="mate in project.team">{{ mate.name }}<br></span></span>
					</span>
				</div>
				<div class="col-sm-8 context">
					<i class="fa fa-angle-right"></i>{{ project.context }}
				</div>
				<div class="col-sm-4 technos">
					<i class="fa fa-cogs"></i>{{ project.technos }}
				</div>
			</div>
			<div class="row project-body">
				<div class="col-sm-12 description" v-html="project.description"></div>
			</div>
			<div class="row project-footer">
				<p class="links">
					<a target="_blank" :href="project.github">Go to github</a>
				</p>
			</div>
		</div>
	</div>
    `
})