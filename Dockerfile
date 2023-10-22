# Use Amazon Linux 2 as the base image
FROM amazonlinux:2

# Install curl and other prerequisites
RUN yum update -y && yum install -y curl ca-certificates gnupg

# Set environment variables
ENV NODE_ENV=production
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=true

# Install Node.js and npm
RUN curl -fsSL https://rpm.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/pki/rpm-gpg/RPM-GPG-KEY-nodesource
RUN echo -e "[nodesource]\nname=Node.js Packages\nbaseurl=https://rpm.nodesource.com/pub_18.x/el/7/x86_64/\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-nodesource" > /etc/yum.repos.d/nodesource.repo
RUN yum update -y && yum install -y nodejs

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
