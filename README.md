# Test task BeeJee

url: https://test-work-to-do-list-backend.herokuapp.com/
## Setup development

Prerequisites:

- nodejs v16
- docker-compose

```
# cloning repo
git clone https://github.com/feldek/test-work-to-do-list-backend

npm i

cp .env.sample .env

# running server and services
npm run compose or sudo docker-compose up

npm run db:create
npm run db:migrate
npm run dev
```


