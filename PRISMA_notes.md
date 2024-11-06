# Prisma CLI Commands Reference Guide

## Table of Contents
- [Installation Commands](#installation-commands)
- [Project Initialization](#project-initialization)
- [Database Migration Commands](#database-migration-commands)
- [Schema Management](#schema-management)
- [Client Generation](#client-generation)
- [Data Management](#data-management)
- [Development Tools](#development-tools)
- [Deployment Commands](#deployment-commands)
- [Troubleshooting Commands](#troubleshooting-commands)

## Installation Commands

| Command | Description | Example | Options/Flags |
|---------|-------------|---------|---------------|
| `npm install prisma --save-dev` | Installs Prisma CLI as a dev dependency | - | `--global` for global installation |
| `npm install @prisma/client` | Installs Prisma Client | - | - |

## Project Initialization

| Command | Description | Example | Options/Flags |
|---------|-------------|---------|---------------|
| `prisma init` | Initializes a new Prisma project | `npx prisma init` | `--url` to specify database URL |
| `prisma init --datasource-provider postgresql` | Initializes with specific database | - | `sqlite`, `mysql`, `sqlserver`, `mongodb` |

## Database Migration Commands

| Command | Description | Example | Options/Flags |
|---------|-------------|---------|---------------|
| `prisma migrate dev` | Creates a migration during development | `npx prisma migrate dev --name init` | `--name`: Migration name<br>`--create-only`: Only creates files |
| `prisma migrate reset` | Resets database and applies migrations | - | `--force`: Skip confirmation |
| `prisma migrate deploy` | Deploys pending migrations | - | `--preview-feature` |
| `prisma migrate status` | Shows migration history | - | - |
| `prisma migrate diff` | Shows differences between schemas | - | `--from-schema-datamodel`<br>`--to-schema-datamodel` |

## Schema Management

| Command | Description | Example | Options/Flags |
|---------|-------------|---------|---------------|
| `prisma validate` | Validates schema file | - | - |
| `prisma format` | Formats schema file | - | - |
| `prisma db pull` | Pulls database schema into Prisma schema | - | `--force`: Overwrites schema |
| `prisma db push` | Pushes schema changes to database | - | `--preview-feature`<br>`--force-reset` |

## Client Generation

| Command | Description | Example | Options/Flags |
|---------|-------------|---------|---------------|
| `prisma generate` | Generates Prisma Client | - | `--watch`: Watch mode |
| `prisma generate --data-proxy` | Generates client for Prisma Data Platform | - | - |

## Data Management

| Command | Description | Example | Options/Flags |
|---------|-------------|---------|---------------|
| `prisma db seed` | Runs seed script | - | - |
| `prisma db execute` | Executes raw SQL | - | `--file`: SQL file path |
| `prisma db pull` | Introspects database schema | - | `--force`: Overwrites schema |

## Development Tools

| Command | Description | Example | Options/Flags |
|---------|-------------|---------|---------------|
| `prisma studio` | Opens Prisma Studio GUI | - | `--port`: Custom port<br>`--browser`: Browser launch |
| `prisma format` | Formats schema file | - | - |
| `prisma validate` | Validates schema file | - | - |

## Deployment Commands

| Command | Description | Example | Options/Flags |
|---------|-------------|---------|---------------|
| `prisma deploy` | Deploys service (deprecated) | - | - |
| `prisma migrate deploy` | Applies pending migrations | - | - |
| `prisma migrate status` | Checks migration status | - | - |

## Troubleshooting Commands

| Command | Description | Example | Options/Flags |
|---------|-------------|---------|---------------|
| `prisma --version` | Shows Prisma version | - | - |
| `prisma -h` | Shows help menu | - | - |
| `prisma migrate reset` | Resets database | - | `--force`: Skip confirmation |

## Common Schema Examples

```prisma
// User model with relations
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  profile   Profile?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Post model with relations
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Profile model with one-to-one relation
model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}
```

## Best Practices

1. **Migration Naming**:
   - Use descriptive names: `npx prisma migrate dev --name add_user_email_verification`
   - Follow naming convention: `verb_noun_action`

2. **Schema Organization**:
   - Group related models together
   - Use clear and consistent naming
   - Document complex relationships

3. **Development Workflow**:
   ```bash
   # Initial setup
   npx prisma init
   npx prisma db push
   
   # After schema changes
   npx prisma generate
   npx prisma migrate dev
   
   # Before deployment
   npx prisma migrate deploy
   ```

4. **Error Handling**:
   - Always check migration status before deployment
   - Use `--force-reset` cautiously in production
   - Backup data before major migrations

## Interview Tips for Oracle DBMS Position

1. **Key Concepts to Highlight**:
   - Experience with database migrations
   - Understanding of database relationships
   - Knowledge of data modeling
   - Familiarity with SQL and ORM concepts

2. **Technical Discussion Points**:
   - Prisma's type safety features
   - Migration strategies
   - Performance optimization
   - Database security practices

3. **Practical Examples to Prepare**:
   - Complex schema designs
   - Migration scenarios
   - Data seeding strategies
   - Query optimization

## References

- [Prisma Official Documentation](https://www.prisma.io/docs/)
- [Prisma CLI Reference](https://www.prisma.io/docs/reference/api-reference/command-reference)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)

---

