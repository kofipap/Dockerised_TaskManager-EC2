# Dockerized Task Manager App with CI/CD on AWS EC2

## Overview

This project is a full-stack Task Manager application built with Node.js, Express, Docker, GitHub Actions, and AWS EC2.

The application demonstrates how to:

* Build a Node.js backend
* Serve a frontend using Express
* Containerize applications using Docker
* Automate CI/CD with GitHub Actions
* Deploy containers to a self-hosted EC2 runner
* Run production-style deployments on AWS

---

# Architecture

```text
Developer Pushes Code to GitHub
                ↓
        GitHub Actions CI/CD
                ↓
        Build Docker Image
                ↓
        Push Docker Image
                ↓
      Self-Hosted Runner on EC2
                ↓
      Pull and Run Docker Container
                ↓
          Task Manager App
```

---

# Tech Stack

## Backend

* Node.js
* Express.js

## Frontend

* HTML
* CSS
* JavaScript

## DevOps / Cloud

* Docker
* GitHub Actions
* AWS EC2
* Self-hosted GitHub Runner

---

# Features

* Add tasks
* Delete tasks
* Mark tasks as completed
* Dockerized application
* CI/CD pipeline using GitHub Actions
* Automated deployment to AWS EC2
* Self-hosted runner deployment

---

# Project Structure

```text
TaskManager/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── docs/
│   └── screenshots/
│
├── Dockerfile
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

```bash
cd YOUR_REPOSITORY
```

---

# Run Locally

## Install Dependencies

```bash
npm install
```

## Start Application

```bash
npm start
```

Application runs on:

```text
http://localhost:3000
```

---

# Docker Setup

## Build Docker Image

```bash
docker build -t task-manager-app .
```

## Run Docker Container

```bash
docker run -d -p 3000:3000 --name task-manager-container task-manager-app
```

---

# AWS EC2 Deployment

This project uses:

* Ubuntu EC2 instance
* Docker installed on EC2
* Self-hosted GitHub Actions runner

## EC2 Setup

### Install Docker

```bash
sudo apt update -y
sudo apt install docker.io -y
```

### Start Docker

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

### Add User to Docker Group

```bash
sudo usermod -aG docker ubuntu
```

---

# GitHub Actions CI/CD

The pipeline automatically:

1. Builds Docker image
2. Pushes Docker image
3. Deploys application to EC2
4. Restarts Docker container

Workflow file:

```text
.github/workflows/deploy.yml
```

---

# GitHub Secrets

The following secrets are required:

| Secret Name     | Description                      |
| --------------- | -------------------------------- |
| DOCKER_USERNAME | Docker Hub username              |
| DOCKER_PASSWORD | Docker Hub access token/password |


# Author

Kofi Mensah


