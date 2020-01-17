const projects = [
	{
		"name": "WHILE to NASM Assembler compiler", 
		"start":"05/11/2018", 
		"end":"27/01/2019", 
		"technos":"xText, xTend and NASM", 
		"context":"Project of my COMP course by Olivier RIDOUX", 
		"description":`
			<p>
				The goal of this project was to create a compiler for the WHILE language. 
				Me and my friend Timothée wanted to challenge ourselves, so we choosed to compile 
				to an assembly language.
			</p>
			<p>
				The first part of this project was to create a pretty-printer for the WHILE language.
				Since a pretty-printer is not more than a WHILE-to-WHILE compiler, this part of the
				project let us understand the basic process of compiling and also let us the time to 
				choose the assembly language that will be our target for this project.
			</p>
			<p>
				Since we worked on the TASM Assembler we thought about using this one, but it was only 
				for 16-bits architectures and we wanted to be able tu run the program directly on our 
				computer. We searched for an equivalent assembly language and we found the NASM Assembler. 
				This assembly language use, as well as TASM, the intel syntax and can be used to write 
				programs for 32 and 64-bits architechtures.
			</p>
			<p>
				In the second part of the project, we had to create a first compiler that can compile a
				subset of the WHILE language. In fact, we knew that the program would contain only one 
				function and no multiple assignment. It was in this part that the main issues were raised.
			</p>
			<ul>
				<li>
					The memory representation of the datatype.
					<p>
						Hopefully, the language was created to contain only one datatype, a binary tree.
						Since there is no datatype in NASM Assembler, we had to create our own convention
						of the data representation of a node
					</p>
				</li>
				<li>TODO : The end of the description</li>
			</ul>
		`, 
		"github":"#", 
		"team":[
			{"name":"JOUNEAUX Gwendal"},
			{"name":"SCHNEIDER Timothée"}
		]
	},
	{
		"name": "Lines of Action game and Artificial Intelligence", 
		"start":"05/11/2018", 
		"end":"27/01/2019", 
		"technos":"Angular, TypeScipt", 
		"context":"Project of the AI course by Zoltan MIKLOS", 
		"description":`
			<p>
				The goal of this project was to create a web-based <strong>
				Lines of Action</strong> game and create some Artificial Intelligences
				for the game.
			</p>
			<p>
				We choosed to not use back-end calculus to be able to publish the game in a Github Page and let
				everyone have fun with this project. We used Angular to create this project because we didn't
				know how to create an Angular application and we wanted to learn this new technology.
			</p>
			<p>
				For the Artificial Intelligences, we have started by creating a basic AI which play randomly but
				always follow the rules of the game. So we begin to create the game flow and the function that 
				calculate the valid moves of a given pawn. After that, create the random AI was really easy, we 
				just have to pick randomly one of the AI's pawn and play randomly one of its valid moves. 
			</p>
			<p>
				After that we created two other AI that are more "Clever" than the random one. This two AI used
				the same algorithm, a Min-Max algorithm. The main issue is that there is millions of nodes in a 
				Min-Max tree of the entire game. So, we used some heuristics to give an "Advantage" value for the 
				possibles boards and process the Min-Max tree only on a selected depth. The difference between the 
				two level of "Clever" AI is only the heuristics we selected for the "Advantage" calculation.
			</p>
		`, 
		"github":"https://github.com/PapaTimot/gyt-lines", 
		"team":[
			{"name":"BRETON Yoann"},
			{"name":"JOUNEAUX Gwendal"},
			{"name":"SCHNEIDER Timothée"}
		]
	},
	{
		"name": "Scala library for the GNS3 software", 
		"start":"05/11/2018", 
		"end":"27/01/2019", 
		"technos":"Scala, GNS3 REST API", 
		"context":"Project of the software architecture course by Olivier BARAIS and Johann BOURCIER", 
		"description":`
			<p>
				TODO : ALL
			</p>
		`, 
		"github":"https://github.com/PierreMear/GNS3-Scala-lib", 
		"team":[
			{"name":"MEAR Pierre"},
			{"name":"BRETON Yoann"},
			{"name":"GEGOU Adrien"},
			{"name":"JOUNEAUX Gwendal"}
		]
	}
]

