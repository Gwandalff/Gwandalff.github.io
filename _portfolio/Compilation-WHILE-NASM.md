---
title: "WHILE to NASM Assembler compiler"
collection: portfolio
permalink: /portfolio/Compilation-WHILE-NASM
excerpt: 'The goal of this project was to create a compiler for the WHILE language. Me and my friend Timothée wanted to challenge ourselves, so we choosed to compile to an assembly language.'
---

<span class="align-left"><i class="fa fa-clock"></i> 05/11/2018 - 27/01/2019</span><br>
<span class="cf"></span>
<span class="align-left"><i class="fa fa-angle-right"></i> Project of my COMP course by Olivier RIDOUX</span><span class="align-right"><i class="fa fa-cogs"></i> xText, xTend and NASM<br></span>
<span class="cf full"></span>


The goal of this project was to create a compiler for the WHILE language. Me and my friend Timothée wanted to challenge ourselves, so we choosed to compile to an assembly language.

The first part of this project was to create a pretty-printer for the WHILE language. Since a pretty-printer is not more than a WHILE-to-WHILE compiler, this part of the project let us understand the basic process of compiling and also let us the time to choose the assembly language that will be our target for this project.

Since we worked on the TASM Assembler we thought about using this one, but it was only for 16-bits architectures and we wanted to be able tu run the program directly on our computer. We searched for an equivalent assembly language and we found the NASM Assembler. This assembly language use, as well as TASM, the intel syntax and can be used to write programs for 32 and 64-bits architechtures.

In the second part of the project, we had to create a first compiler that can compile a subset of the WHILE language. In fact, we knew that the program would contain only one function and no multiple variables assignment. It was in this part that the main issues were raised. 

* The memory representation of the datatype. <br> Hopefully, the language was created to contain only one datatype, a binary tree. Since there is no datatype in NASM Assembler, we had to create our own convention of the data representation of a node
* TODO : The end of the description




<span class="align-left"><i class="fa fa-users"></i> : JOUNEAUX Gwendal, SCHNEIDER Timothée</span>
