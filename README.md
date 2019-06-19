# Example Microservice

This example microservice offers four operations for simple calculations.
Every operation takes *exactly* two numbers as input, which are passed to the API as URL parameters.
The answer will always be a JSON object of the following form:

```JSON
{ "result": 42 }
```

Results of calculations evaulating to unreal numbers (such as `Infinity` or `NaN`) will always be `null`:

```JSON
{ "result": null }
```

## `GET /add?a=<number>&b=<number>`
Calculates `a + b`.

## `GET /subtract?a=<number>&b=<number>`
Calculates `a - b`.

## `GET /multiply?a=<number>&b=<number>`
Calculates `a * b`.

## `GET /divide?a=<number>&b=<number>`
Calculates `a / b`.

# Running the Microservice Directly

First, you need to have `node` and `npm` installed.

Open a terminal in the project folder and run `npm install` to download and install all dependencies of the microservice.
Then, run `npm start` to start it.

You can terminate the microservice by pressing `ctrl+C`.

# Running the Microservice through Docker

Make sure you have `docker` installed.

Open a terminal in the project folder and run `docker build --tag example-microservice`.
Then, run `docker run -p 3000:3000 example-microservice` to start it.

You can terminate the microservice by pressing `ctrl+C`.

# Running the Microservice through Docker Swarm

Make sure your Docker swarm cluster is initialised by running `docker info --format '{{.Swarm.LocalNodeState}}'`.
If it is not, run `docker swarm init` to create a swarm.

Open a terminal in the project folder and run `docker build --tag example-microservice` or `docker-compose build` (if you have `docker-compose` installed) to build the Docker image, if you have not already done so.

Then, run `docker stack deploy --compose-file docker-compose.yml microservice` to start the microservice.

Cou can inspect the microservice's logs by running `docker service logs microservice_example`.

To stop the microservice, run `docker service rm microservice_example`
