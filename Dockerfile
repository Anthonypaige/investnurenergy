# Use Amazon Linux 2 as the base image
FROM amazonlinux:2

# Install curl and other dependencies
RUN yum update -y && yum install -y curl gcc-c++ make

# Install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js v18
RUN /bin/bash -c "source ~/.nvm/nvm.sh && nvm install 18 && nvm alias default 18 && nvm use default"

# Set environment variables
ENV NODE_ENV=production
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=true

# Install necessary build tools
RUN yum groupinstall -y "Development Tools"

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install sharp with verbose logging
RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp

# Install project dependencies
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Run your build commands
RUN npm run build
