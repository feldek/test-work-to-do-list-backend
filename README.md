# Test task BeeJee

## Setup development

Prerequisites:

- nodejs v16
- docker-compose

```
# cloning repo
git clone https://github.com/feldek/...
cd test-beejee-backend

npm i

cp .env.sample .env

# running server and its services
npm run compose or sudo docker-compose up

npm run db:create
npm run db:migrate
npm run dev
```


