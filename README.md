# Rook

This is the front end of Autograder 2.0.

### Development
This app uses Docker and Docker Compose to make stuff nice and easy. First, download
Docker desktop onto your computer. It's a React app that communicates to the backend
with Axios, all running behind an NGINX server/load balancer.


I recommend you use Visual Studio Code to work on this (and the backend). You can
download it <a href="https://code.visualstudio.com" target="_blank">here</a>. Once it's installed,
the plugins that will be helpful for this repository are Docker, TSLint, and ESLint. Other suggested
plugins are vscode-icons and Visual Studio Intellicode.


To start developing: `docker-compose up --build -d`


To stop developing: `docker-compose down --volumes`

We'll be using <a href="hub.docker.com" target="_blank">DockerHub</a> to host images and stuff eventually,
so make sure to make an account.

### Useful Links
1. <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank">React Tutorial</a>
2. Codeacademy Learn React<a href="https://www.codecademy.com/learn/react-101" target="_blank">Part 1</a> and <a href="https://www.codecademy.com/learn/react-102" target="_blank">Part 2</a>
3. <a href="https://reactjs.org/docs/react-api.html" target="_blank">React docs</a>
4. <a href="https://www.tutorialspoint.com/typescript/index.htm" target="_blank">Typescript tutorial</a>
5. <a href="https://www.typescriptlang.org/docs/home.html" target="_blank">Typescript docs</a>
6. <a href="https://github.com/axios/axios" target="_blank">Axios documentation</a>

### License
This is a closed source project. Collaboration from anyone other than Autograder team members and approved
guests is not allowed.
