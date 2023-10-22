# Use a base image that includes the required GLIBC version
FROM ubuntu:latest

# Install Node.js and npm
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Set environment variables (if any)
ENV NODE_ENV=production

# Install necessary build tools
RUN apt-get update && apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install sharp with verbose logging
RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp

# Copy the current directory contents into the container
COPY . .

# Run your build commands
RUN npm run build

