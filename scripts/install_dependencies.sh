#!/bin/bash
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker
sudo systemctl enable docker
docker pull 216989092759.dkr.ecr.us-east-1.amazonaws.com/my-weather-app:latest