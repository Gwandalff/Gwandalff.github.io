Vue.component('studies', {
	props: ['study'],
    template: `
	<div class="row study">
		<div class="col-sm-12">
			<div class="row study-head">
				<div class="col-sm-8 name">
					{{ study.name }}
				</div>
				<div class="col-sm-4 study-right">
					<span class="date">{{ study.start }} - {{ study.end }}</span>
				</div>
			</div>
			<div class="row study-body">
				<div class="col-sm-12 description" v-html="study.shortdescription"></div>
			</div>
			<div class="row study-footer">
				<p class="links">
					<a :href="'#/studies/' + study.id">See more about this year</a>
				</p>
			</div>
		</div>
	</div>
    `
})

Vue.component('studies-detail', {
	props: ['study'],
    template: `
	<div class="row study">
		<div class="col-sm-12">
			<div class="row study-head">
				<div class="col-sm-8 name">
					{{ study.name }}
				</div>
				<div class="col-sm-4 study-right">
					<span class="date">{{ study.start }} - {{ study.end }}</span>
				</div>
			</div>
			<div class="row study-body">
				<div class="col-sm-12 description" v-html="study.description"></div>
			</div>
		</div>
	</div>
    `
})