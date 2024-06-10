import { Job, MicroBatch, BatchConfig } from '@smilexx2/micro-batching-library';

class MyBatchProcessor {
  async processBatch(jobs) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log('Processing batch of jobs:', jobs);
  }
}

const batchConfig = new BatchConfig(2, 1000);
const batchProcessor = new MyBatchProcessor();
const microBatch = new MicroBatch(batchConfig, batchProcessor);

const job1 = new Job("1");
const job2 = new Job("2");
const job3 = new Job("3");

await microBatch.submit(job1);
await microBatch.submit(job2);
await microBatch.submit(job3);

setTimeout(async () => {
  await microBatch.shutdown();
}, 5000);
