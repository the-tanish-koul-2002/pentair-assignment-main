#!/bin/bash
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker
sudo systemctl enable docker
docker pull <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/my-weather-app:latest
