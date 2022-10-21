FROM node:18-alpine
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN npm install
CMD ["/bin/sh", "-c", "npm run build;npm run start"]
EXPOSE 3000
