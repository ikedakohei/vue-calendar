FROM node:14

RUN mkdir /frontend
WORKDIR /frontend

RUN apt update && \
  npm i && \
  npm i -g npm && \
  npm i -g @vue/cli
