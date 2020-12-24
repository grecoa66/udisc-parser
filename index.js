#!/usr/bin/env node
const parseUdisc = require('./parse-udisc')
const getRoundsByPlayer = require('./app/getRoundsByPlayer');
const getCoursesPlayedByPlayer = require('./app/getCoursesPlayedByPlayer');
const getPlayers = require('./app/getPlayers');
const getCourses = require('./app/getCourses');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (_, res) => {
  const parsedData = await parseUdisc.parseUdisc();
  res.send(parsedData);
})

app.get('/players', async (_, res) => {
  const parsedData = await parseUdisc.parseUdisc();
  const players = getPlayers.getPlayers(parsedData);
  res.send(players);
});

app.get('/courses', async (req, res) => {
  const parsedData = await parseUdisc.parseUdisc();
  const courses = getCourses.getCourses(parsedData);
  res.send(courses);
})

app.get('/:playerName', async (req, res) => {
  const {playerName} = req.params;
  const parsedData = await parseUdisc.parseUdisc();
  const roundsByPlayer = getRoundsByPlayer.getRoundsByPlayer(parsedData, playerName);
  res.send(roundsByPlayer);
});

app.get('/:playerName/courses', async (req, res) => {
  const {playerName} = req.params;
  const parsedData = await parseUdisc.parseUdisc();
  const coursesPlayedByPlayer = getCoursesPlayedByPlayer.getCoursesPlayedByPlayer(parsedData, playerName);
  res.send(coursesPlayedByPlayer);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})