FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

RUN npx prisma db push

FROM node:18

WORKDIR /app

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma prisma
COPY --from=builder /app/.env .env

RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "start"]
