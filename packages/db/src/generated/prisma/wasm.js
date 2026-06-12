
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  clerkId: 'clerkId',
  email: 'email',
  name: 'name',
  organizationId: 'organizationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrganizationScalarFieldEnum = {
  id: 'id',
  clerkOrgId: 'clerkOrgId',
  name: 'name',
  writingTone: 'writingTone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PromptTemplateScalarFieldEnum = {
  id: 'id',
  title: 'title',
  systemPrompt: 'systemPrompt',
  variables: 'variables',
  isPublic: 'isPublic',
  userId: 'userId',
  organizationId: 'organizationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WritingSessionScalarFieldEnum = {
  id: 'id',
  input: 'input',
  output: 'output',
  mode: 'mode',
  promptTemplateId: 'promptTemplateId',
  userId: 'userId',
  tokensUsed: 'tokensUsed',
  source: 'source',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  Organization: 'Organization',
  PromptTemplate: 'PromptTemplate',
  WritingSession: 'WritingSession'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/erictsai/Desktop/comcom/packages/db/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "/Users/erictsai/Desktop/comcom/packages/db/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n}\n\nmodel User {\n  id             String           @id @default(cuid())\n  clerkId        String           @unique\n  email          String           @unique\n  name           String?\n  organizationId String?\n  organization   Organization?    @relation(fields: [organizationId], references: [id])\n  prompts        PromptTemplate[]\n  sessions       WritingSession[]\n  createdAt      DateTime         @default(now())\n  updatedAt      DateTime         @updatedAt\n\n  @@index([clerkId])\n  @@index([organizationId])\n}\n\nmodel Organization {\n  id          String           @id @default(cuid())\n  clerkOrgId  String           @unique\n  name        String\n  writingTone Json             @default(\"{\\\"voice\\\":\\\"professional\\\",\\\"formality\\\":\\\"semi-formal\\\"}\")\n  users       User[]\n  prompts     PromptTemplate[]\n  createdAt   DateTime         @default(now())\n  updatedAt   DateTime         @updatedAt\n\n  @@index([clerkOrgId])\n}\n\nmodel PromptTemplate {\n  id             String           @id @default(cuid())\n  title          String\n  systemPrompt   String           @db.Text\n  variables      Json             @default(\"[]\")\n  isPublic       Boolean          @default(false)\n  userId         String\n  user           User             @relation(fields: [userId], references: [id], onDelete: Cascade)\n  organizationId String?\n  organization   Organization?    @relation(fields: [organizationId], references: [id], onDelete: SetNull)\n  sessions       WritingSession[]\n  createdAt      DateTime         @default(now())\n  updatedAt      DateTime         @updatedAt\n\n  @@index([userId])\n  @@index([organizationId])\n}\n\nmodel WritingSession {\n  id               String          @id @default(cuid())\n  input            String          @db.Text\n  output           String          @db.Text\n  mode             String\n  promptTemplateId String?\n  promptTemplate   PromptTemplate? @relation(fields: [promptTemplateId], references: [id], onDelete: SetNull)\n  userId           String\n  user             User            @relation(fields: [userId], references: [id], onDelete: Cascade)\n  tokensUsed       Int?\n  source           String          @default(\"web\")\n  createdAt        DateTime        @default(now())\n\n  @@index([userId])\n  @@index([promptTemplateId])\n  @@index([createdAt])\n}\n",
  "inlineSchemaHash": "790b9e8f6cf38e9739f302fb9838723ff63152544757d8a814da6c1b0d68b469",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"clerkId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"organizationId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"Organization\",\"relationName\":\"OrganizationToUser\"},{\"name\":\"prompts\",\"kind\":\"object\",\"type\":\"PromptTemplate\",\"relationName\":\"PromptTemplateToUser\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"WritingSession\",\"relationName\":\"UserToWritingSession\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Organization\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"clerkOrgId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"writingTone\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"OrganizationToUser\"},{\"name\":\"prompts\",\"kind\":\"object\",\"type\":\"PromptTemplate\",\"relationName\":\"OrganizationToPromptTemplate\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"PromptTemplate\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"systemPrompt\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"variables\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PromptTemplateToUser\"},{\"name\":\"organizationId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"Organization\",\"relationName\":\"OrganizationToPromptTemplate\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"WritingSession\",\"relationName\":\"PromptTemplateToWritingSession\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"WritingSession\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"input\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"output\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"mode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"promptTemplateId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"promptTemplate\",\"kind\":\"object\",\"type\":\"PromptTemplate\",\"relationName\":\"PromptTemplateToWritingSession\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToWritingSession\"},{\"name\":\"tokensUsed\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"source\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

