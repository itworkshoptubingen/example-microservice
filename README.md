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

# Running the Microservice

First, you need to have `node` and `npm` installed.

Open a terminal in the project folder and run `npm install` to download and install all dependencies of the microservice.
Then, run `npm start` to start it.

You can terminate the microservice by pressing `ctrl+C`.
