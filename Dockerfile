FROM node:7
ARG BUILD_NUM
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]

