# micro-batching-client
This project demonstrates the use of the @smilexx2/micro-batching-library to process jobs in micro-batches.

## Project Structure
The main file in this project is index.js.

## How it works
In `index.js`, we define a class `MyBatchProcessor` with a method `processBatch` that simulates processing a batch of jobs.

We then create a `BatchConfig` instance with a batch size of 2 and a batch interval of 1000 milliseconds.

A MicroBatch instance is created with the `BatchConfig` and `MyBatchProcessor` instances.

Three jobs are created and submitted to the `MicroBatch` instance.

After 5000 milliseconds, the `MicroBatch` instance is shut down.

## Usage
To run this project, you need to have Node.js installed.

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `node index.js` to start the program.

## Dependencies
This project uses the following dependencies:
* `@smilexx2/micro-batching-library`: A library for processing jobs in micro-batches.