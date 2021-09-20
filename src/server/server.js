import fetch from "node-fetch";
import express from "express";
import { MongoClient } from "mongodb";

const mongoURI =
  "mongodb+srv://charlieturner:Smoothbox678@zeddata.rk84a.mongodb.net/zed?retryWrites=true&w=majority";
const app = express();
const port = 3001;
const client = new MongoClient(mongoURI);
const db = client.db("zed");
const horses = db.collection("horses");
const horseRaces = db.collection("race_results");

app.listen(port, () => console.log(`Server listening on port ${port}`));

app.get("/api/getHorse/horseId", async (req, res) => {
  await client.connect();
  const data = await client
    .db("zed")
    .collection("horses")
    .findOne({
      horse_id: Number(req.params.horseId),
    });
  res.send(data);
  client.close();
});

app.get("/api/getHorseResults/:horseId", async (req, res) => {
  await client.connect();
  const races = [];
  const data = await horseRaces.find({ horse_id: Number(req.params.horseId) });
  for await (const doc of data) {
    races.push(doc);
  }

  res.send(await races);
});

app.get("/api/getHorseStats/:horseId", async (req, res) => {
  await client.connect();
  let races = [];
  const results = await horseRaces.find({
    horse_id: Number(req.params.horseId),
  });
  for await (const doc of results) {
    races.push(doc);
  }
  res.send(races);
  client.close();
});

app.get("/api/getStableHorses/:stableAddress", async (req, res) => {
  const address = req.params.stableAddress;
  const horseList = [];
  await client.connect();
  const result = await horses.find({ owner: address });
  for await (const doc of result) {
    horseList.push(doc);
  }
  res.send(horseList);
});

app.get("/api/getStableAddress/:stableSlug", async (req, res) => {
  const slug = req.params.stableSlug;
  const result = await (
    await fetch("https://api.zed.run/api/v1/users/stable/" + String(slug))
  ).json();
  console.log(await result);
  res.send("nah");
});

app.get("/api/getHorses", async (req, res) => {
  await client.connect();
  const result = await horses.find({}).limit(10);
  const results = [];
  for await (const doc of result) {
    results.push(doc);
  }
  await res.send(results);
  await client.close();
});
