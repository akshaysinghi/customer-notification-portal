# customer notification portal (Java/ REactJS)


## Run project via Docker

**Prerequisites for running through docker:** [Docker](https://docs.docker.com/engine/install/)

To run application on local, run the following commands:

```bash
docker pull akshaysinghi/docomo-portal
docker run -p 8080:8080 akshaysinghi/docomo-portal
open web browser and type http://localhost:8080 and enter
```

This will get a docker image of the project locally.

## Run application for development

**Prerequisites for development:** [Java 11]() and [Node.js 14+](https://nodejs.org/).

To install this application, run the following commands:

```bash
git clone https://github.com/akshaysinghi/customer-notification-portal.git
cd portal
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.

To run the backend server, run:

```bash
mvn spring-boot:run
open web browser and type http://localhost:8080
Check Database: http://localhost:8080/h2
```


To run the web client, cd into the `portal-web` folder and run:

```bash
npm i && npm start
open web browser and type http://localhost:3000
```


## Help

If you wish to change the web client server base url i.e. http://localhost:8080:

```bash
open package.json file.
change "proxy": "http://localhost:[YOUR_BACKEND_RUNNING_PORT]/"

```

