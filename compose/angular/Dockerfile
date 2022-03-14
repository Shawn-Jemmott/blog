FROM node:12.20

# Set working directory
WORKDIR /frontend

# Copy app dependencies to container
COPY ./frontend/package*.json ./

# add `./node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# Install app dependencies
RUN npm install
RUN npm install -g @angular/cli

# Deploy app for local development
CMD ng serve --host 0.0.0.0 --port ${ANGULAR_PORT} --disableHostCheck true