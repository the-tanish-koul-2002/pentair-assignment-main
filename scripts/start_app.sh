#!/bin/bash
docker stop my-weather-app || true
docker rm my-weather-app || true
docker run -d -p 3000:3000 --name my-weather-app 216989092759.dkr.ecr.us-east-1.amazonaws.com/my-weather-app:latest
