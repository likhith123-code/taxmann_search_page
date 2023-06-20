FROM node:20-alpine
WORKDIR /react_app
COPY package.json . 
RUN npm install 
COPY . .
ENV REACT_APP_FETCH_URL=default
EXPOSE 3000
CMD ["npm","start"]
