FROM node:7
ENV BUILD_NUM=${github.run_number}
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]

