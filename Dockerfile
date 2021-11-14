FROM node:7
ARG BUILD_ARG
ENV BUILD_NUM=${BUILD_ARG}
ENV RESPOSNSE_MSG="Not defined - Default"
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]

