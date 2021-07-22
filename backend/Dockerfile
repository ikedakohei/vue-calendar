FROM ruby:3.0.2

# rails環境を構築するのに必要なパッケージのインストール
RUN apt-get update && apt-get install -y build-essential libpq-dev nodejs && rm -rf /var/lib/apt/lists/*

RUN mkdir /backend
WORKDIR /backend

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN gem install bundler
RUN bundle install
