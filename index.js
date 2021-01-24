#!/usr/bin/env node
const parseUdisc = require('./parse-udisc').parseUdisc;
const getRoundsByPlayer = require('./api/getRoundsByPlayer').getRoundsByPlayer;
const getCoursesPlayedByPlayer = require('./api/getCoursesPlayedByPlayer').getCoursesPlayedByPlayer;
const getPlayers = require('./api/getPlayers').getPlayers;
const getCourses = require('./api/getCourses').getCourses;
const express = require('express');
const app = express();
const port = 3000;

parseUdisc().then(parsedData => {

app.get('/', async (_, res) => {
  
  res.send(parsedData);
})

app.get('/players', async (_, res) => {
  // const parsedData = await parseUdisc.parseUdisc();
  const players = getPlayers(parsedData);
  res.send(players);
});

app.get('/players/:playerName', async (req, res) => {
  const {playerName} = req.params;
  // const parsedData = await parseUdisc.parseUdisc();
  const roundsByPlayer = getRoundsByPlayer(parsedData, playerName);
  res.send(roundsByPlayer);
});

app.get('/players/:playerName/courses', async (req, res) => {
  const {playerName} = req.params;
  // const parsedData = await parseUdisc.parseUdisc();
  const coursesPlayedByPlayer = getCoursesPlayedByPlayer(parsedData, playerName);
  res.send(coursesPlayedByPlayer);
});

app.get('/courses', async (req, res) => {
  // const parsedData = await parseUdisc.parseUdisc();
  const courses = getCourses(parsedData);
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
});