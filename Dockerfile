FROM node as base
COPY . /code
WORKDIR /code
RUN ["npm", "i"]

FROM base as test
CMD ["npm", "test"]

FROM base as dev
CMD ["npm", "start"]

FROM base as prod
RUN ["npm", "run", "build"]
CMD ["npm", "run", "prod"]
