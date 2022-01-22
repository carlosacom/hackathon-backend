FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app

# s3
ENV S3_URL=https://congenius.s3.us-east-2.amazonaws.com/
ENV S3_KEY_ID=AKIAIFKXJ3ISLTHTQWFQ
ENV S3_ACCESS_KEY=Un4/SJZCYS1yCoSkj6tkfi1Chk9YfKCHfoXGjAKS

# email
ENV EMAIL=no-reply@congeniusms.com
ENV EMAIL_PASSWORD="2wD%?}M#R,d$"
ENV EMAIL_SMTP=mail.congeniusms.com
ENV EMAIL_PORT=465

#PORT
ENV PORT=5000

# mongodb
ENV MONGO_URL="mongodb+srv://hackathon:03opaECpQo7VMsKH@testing.13qlx.mongodb.net/test"

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

CMD ["node", "dist/index.js"]