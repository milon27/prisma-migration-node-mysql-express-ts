## how to deploy (init deploy)

1. git clone to get all code
1. pnpm install
1. cd init && bash seed.sh (seeding initial data)
1. npx prisma migrate deploy [did not generate auto]
1. npx prisma generate
1. pnpm run build

# change something in schema and deploy again
1. generate migarion in dev mode 
    1.1. npx prisma migrate dev --name add a field with default value
1. git clone
1. pnpm install
1. npx prisma migrate deploy
1. npx prisma generate
1. pnpm run build