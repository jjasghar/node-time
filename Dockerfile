FROM node:10

WORKDIR /usr/src/app
COPY app.js ./
EXPOSE 8000
CMD [ "node", "app.js" ]
