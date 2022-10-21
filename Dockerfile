FROM node:18-alpine
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN npm install
CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]
EXPOSE 3000
