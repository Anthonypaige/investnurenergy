# Use Amazon Linux 2 as the base image
FROM amazonlinux:2

# Install curl and other dependencies
RUN yum update -y && yum install -y curl gcc-c++ make

# Install Node.js v18
RUN curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
RUN yum install -y nodejs

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
