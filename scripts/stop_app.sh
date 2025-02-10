#!/bin/bash
docker stop my-weather-app || true
docker rm my-weather-app || true
