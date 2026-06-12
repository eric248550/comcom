
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model PromptTemplate
 * 
 */
export type PromptTemplate = $Result.DefaultSelection<Prisma.$PromptTemplatePayload>
/**
 * Model WritingSession
 * 
 */
export type WritingSession = $Result.DefaultSelection<Prisma.$WritingSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs>;

  /**
   * `prisma.promptTemplate`: Exposes CRUD operations for the **PromptTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptTemplates
    * const promptTemplates = await prisma.promptTemplate.findMany()
    * ```
    */
  get promptTemplate(): Prisma.PromptTemplateDelegate<ExtArgs>;

  /**
   * `prisma.writingSession`: Exposes CRUD operations for the **WritingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WritingSessions
    * const writingSessions = await prisma.writingSession.findMany()
    * ```
    */
  get writingSession(): Prisma.WritingSessionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Organization: 'Organization',
    PromptTemplate: 'PromptTemplate',
    WritingSession: 'WritingSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "organization" | "promptTemplate" | "writingSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      PromptTemplate: {
        payload: Prisma.$PromptTemplatePayload<ExtArgs>
        fields: Prisma.PromptTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          findFirst: {
            args: Prisma.PromptTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          findMany: {
            args: Prisma.PromptTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          create: {
            args: Prisma.PromptTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          createMany: {
            args: Prisma.PromptTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          delete: {
            args: Prisma.PromptTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          update: {
            args: Prisma.PromptTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          deleteMany: {
            args: Prisma.PromptTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromptTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          aggregate: {
            args: Prisma.PromptTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptTemplate>
          }
          groupBy: {
            args: Prisma.PromptTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<PromptTemplateCountAggregateOutputType> | number
          }
        }
      }
      WritingSession: {
        payload: Prisma.$WritingSessionPayload<ExtArgs>
        fields: Prisma.WritingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WritingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WritingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingSessionPayload>
          }
          findFirst: {
            args: Prisma.WritingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WritingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingSessionPayload>
          }
          findMany: {
            args: Prisma.WritingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingSessionPayload>[]
          }
          create: {
            args: Prisma.WritingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingSessionPayload>
          }
          createMany: {
            args: Prisma.WritingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WritingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingSessionPayload>[]
          }
          delete: {
            args: Prisma.WritingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingSessionPayload>
          }
          update: {
            args: Prisma.WritingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingSessionPayload>
          }
          deleteMany: {
            args: Prisma.WritingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WritingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WritingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingSessionPayload>
          }
          aggregate: {
            args: Prisma.WritingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWritingSession>
          }
          groupBy: {
            args: Prisma.WritingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WritingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WritingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<WritingSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    prompts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | UserCountOutputTypeCountPromptsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WritingSessionWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    prompts: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    prompts?: boolean | OrganizationCountOutputTypeCountPromptsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptTemplateWhereInput
  }


  /**
   * Count Type PromptTemplateCountOutputType
   */

  export type PromptTemplateCountOutputType = {
    sessions: number
  }

  export type PromptTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | PromptTemplateCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * PromptTemplateCountOutputType without action
   */
  export type PromptTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplateCountOutputType
     */
    select?: PromptTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromptTemplateCountOutputType without action
   */
  export type PromptTemplateCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WritingSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    name: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    name: string | null
    organizationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | User$organizationArgs<ExtArgs>
    prompts?: boolean | User$promptsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | User$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | User$organizationArgs<ExtArgs>
    prompts?: boolean | User$promptsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | User$organizationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      prompts: Prisma.$PromptTemplatePayload<ExtArgs>[]
      sessions: Prisma.$WritingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      name: string | null
      organizationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends User$organizationArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    prompts<T extends User$promptsArgs<ExtArgs> = {}>(args?: Subset<T, User$promptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.organization
   */
  export type User$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * User.prompts
   */
  export type User$promptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    where?: PromptTemplateWhereInput
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    cursor?: PromptTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    where?: WritingSessionWhereInput
    orderBy?: WritingSessionOrderByWithRelationInput | WritingSessionOrderByWithRelationInput[]
    cursor?: WritingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WritingSessionScalarFieldEnum | WritingSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    clerkOrgId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    clerkOrgId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    clerkOrgId: number
    name: number
    writingTone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    clerkOrgId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    clerkOrgId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    clerkOrgId?: true
    name?: true
    writingTone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    clerkOrgId: string
    name: string
    writingTone: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkOrgId?: boolean
    name?: boolean
    writingTone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    prompts?: boolean | Organization$promptsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkOrgId?: boolean
    name?: boolean
    writingTone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    clerkOrgId?: boolean
    name?: boolean
    writingTone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    prompts?: boolean | Organization$promptsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      prompts: Prisma.$PromptTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkOrgId: string
      name: string
      writingTone: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    prompts<T extends Organization$promptsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$promptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly clerkOrgId: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly writingTone: FieldRef<"Organization", 'Json'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.prompts
   */
  export type Organization$promptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    where?: PromptTemplateWhereInput
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    cursor?: PromptTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model PromptTemplate
   */

  export type AggregatePromptTemplate = {
    _count: PromptTemplateCountAggregateOutputType | null
    _min: PromptTemplateMinAggregateOutputType | null
    _max: PromptTemplateMaxAggregateOutputType | null
  }

  export type PromptTemplateMinAggregateOutputType = {
    id: string | null
    title: string | null
    systemPrompt: string | null
    isPublic: boolean | null
    userId: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptTemplateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    systemPrompt: string | null
    isPublic: boolean | null
    userId: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptTemplateCountAggregateOutputType = {
    id: number
    title: number
    systemPrompt: number
    variables: number
    isPublic: number
    userId: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptTemplateMinAggregateInputType = {
    id?: true
    title?: true
    systemPrompt?: true
    isPublic?: true
    userId?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptTemplateMaxAggregateInputType = {
    id?: true
    title?: true
    systemPrompt?: true
    isPublic?: true
    userId?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptTemplateCountAggregateInputType = {
    id?: true
    title?: true
    systemPrompt?: true
    variables?: true
    isPublic?: true
    userId?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTemplate to aggregate.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptTemplates
    **/
    _count?: true | PromptTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptTemplateMaxAggregateInputType
  }

  export type GetPromptTemplateAggregateType<T extends PromptTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptTemplate[P]>
      : GetScalarType<T[P], AggregatePromptTemplate[P]>
  }




  export type PromptTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptTemplateWhereInput
    orderBy?: PromptTemplateOrderByWithAggregationInput | PromptTemplateOrderByWithAggregationInput[]
    by: PromptTemplateScalarFieldEnum[] | PromptTemplateScalarFieldEnum
    having?: PromptTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptTemplateCountAggregateInputType | true
    _min?: PromptTemplateMinAggregateInputType
    _max?: PromptTemplateMaxAggregateInputType
  }

  export type PromptTemplateGroupByOutputType = {
    id: string
    title: string
    systemPrompt: string
    variables: JsonValue
    isPublic: boolean
    userId: string
    organizationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PromptTemplateCountAggregateOutputType | null
    _min: PromptTemplateMinAggregateOutputType | null
    _max: PromptTemplateMaxAggregateOutputType | null
  }

  type GetPromptTemplateGroupByPayload<T extends PromptTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], PromptTemplateGroupByOutputType[P]>
        }
      >
    >


  export type PromptTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    systemPrompt?: boolean
    variables?: boolean
    isPublic?: boolean
    userId?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | PromptTemplate$organizationArgs<ExtArgs>
    sessions?: boolean | PromptTemplate$sessionsArgs<ExtArgs>
    _count?: boolean | PromptTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    systemPrompt?: boolean
    variables?: boolean
    isPublic?: boolean
    userId?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | PromptTemplate$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectScalar = {
    id?: boolean
    title?: boolean
    systemPrompt?: boolean
    variables?: boolean
    isPublic?: boolean
    userId?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | PromptTemplate$organizationArgs<ExtArgs>
    sessions?: boolean | PromptTemplate$sessionsArgs<ExtArgs>
    _count?: boolean | PromptTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromptTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | PromptTemplate$organizationArgs<ExtArgs>
  }

  export type $PromptTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptTemplate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      sessions: Prisma.$WritingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      systemPrompt: string
      variables: Prisma.JsonValue
      isPublic: boolean
      userId: string
      organizationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promptTemplate"]>
    composites: {}
  }

  type PromptTemplateGetPayload<S extends boolean | null | undefined | PromptTemplateDefaultArgs> = $Result.GetResult<Prisma.$PromptTemplatePayload, S>

  type PromptTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromptTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromptTemplateCountAggregateInputType | true
    }

  export interface PromptTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptTemplate'], meta: { name: 'PromptTemplate' } }
    /**
     * Find zero or one PromptTemplate that matches the filter.
     * @param {PromptTemplateFindUniqueArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptTemplateFindUniqueArgs>(args: SelectSubset<T, PromptTemplateFindUniqueArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PromptTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromptTemplateFindUniqueOrThrowArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PromptTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindFirstArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptTemplateFindFirstArgs>(args?: SelectSubset<T, PromptTemplateFindFirstArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PromptTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindFirstOrThrowArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PromptTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptTemplates
     * const promptTemplates = await prisma.promptTemplate.findMany()
     * 
     * // Get first 10 PromptTemplates
     * const promptTemplates = await prisma.promptTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptTemplateFindManyArgs>(args?: SelectSubset<T, PromptTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PromptTemplate.
     * @param {PromptTemplateCreateArgs} args - Arguments to create a PromptTemplate.
     * @example
     * // Create one PromptTemplate
     * const PromptTemplate = await prisma.promptTemplate.create({
     *   data: {
     *     // ... data to create a PromptTemplate
     *   }
     * })
     * 
     */
    create<T extends PromptTemplateCreateArgs>(args: SelectSubset<T, PromptTemplateCreateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PromptTemplates.
     * @param {PromptTemplateCreateManyArgs} args - Arguments to create many PromptTemplates.
     * @example
     * // Create many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptTemplateCreateManyArgs>(args?: SelectSubset<T, PromptTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptTemplates and returns the data saved in the database.
     * @param {PromptTemplateCreateManyAndReturnArgs} args - Arguments to create many PromptTemplates.
     * @example
     * // Create many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptTemplates and only return the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PromptTemplate.
     * @param {PromptTemplateDeleteArgs} args - Arguments to delete one PromptTemplate.
     * @example
     * // Delete one PromptTemplate
     * const PromptTemplate = await prisma.promptTemplate.delete({
     *   where: {
     *     // ... filter to delete one PromptTemplate
     *   }
     * })
     * 
     */
    delete<T extends PromptTemplateDeleteArgs>(args: SelectSubset<T, PromptTemplateDeleteArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PromptTemplate.
     * @param {PromptTemplateUpdateArgs} args - Arguments to update one PromptTemplate.
     * @example
     * // Update one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptTemplateUpdateArgs>(args: SelectSubset<T, PromptTemplateUpdateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PromptTemplates.
     * @param {PromptTemplateDeleteManyArgs} args - Arguments to filter PromptTemplates to delete.
     * @example
     * // Delete a few PromptTemplates
     * const { count } = await prisma.promptTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptTemplateDeleteManyArgs>(args?: SelectSubset<T, PromptTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptTemplateUpdateManyArgs>(args: SelectSubset<T, PromptTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PromptTemplate.
     * @param {PromptTemplateUpsertArgs} args - Arguments to update or create a PromptTemplate.
     * @example
     * // Update or create a PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.upsert({
     *   create: {
     *     // ... data to create a PromptTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptTemplate we want to update
     *   }
     * })
     */
    upsert<T extends PromptTemplateUpsertArgs>(args: SelectSubset<T, PromptTemplateUpsertArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PromptTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateCountArgs} args - Arguments to filter PromptTemplates to count.
     * @example
     * // Count the number of PromptTemplates
     * const count = await prisma.promptTemplate.count({
     *   where: {
     *     // ... the filter for the PromptTemplates we want to count
     *   }
     * })
    **/
    count<T extends PromptTemplateCountArgs>(
      args?: Subset<T, PromptTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromptTemplateAggregateArgs>(args: Subset<T, PromptTemplateAggregateArgs>): Prisma.PrismaPromise<GetPromptTemplateAggregateType<T>>

    /**
     * Group by PromptTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromptTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptTemplateGroupByArgs['orderBy'] }
        : { orderBy?: PromptTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromptTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptTemplate model
   */
  readonly fields: PromptTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    organization<T extends PromptTemplate$organizationArgs<ExtArgs> = {}>(args?: Subset<T, PromptTemplate$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sessions<T extends PromptTemplate$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, PromptTemplate$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromptTemplate model
   */ 
  interface PromptTemplateFieldRefs {
    readonly id: FieldRef<"PromptTemplate", 'String'>
    readonly title: FieldRef<"PromptTemplate", 'String'>
    readonly systemPrompt: FieldRef<"PromptTemplate", 'String'>
    readonly variables: FieldRef<"PromptTemplate", 'Json'>
    readonly isPublic: FieldRef<"PromptTemplate", 'Boolean'>
    readonly userId: FieldRef<"PromptTemplate", 'String'>
    readonly organizationId: FieldRef<"PromptTemplate", 'String'>
    readonly createdAt: FieldRef<"PromptTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"PromptTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromptTemplate findUnique
   */
  export type PromptTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate findUniqueOrThrow
   */
  export type PromptTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate findFirst
   */
  export type PromptTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate findFirstOrThrow
   */
  export type PromptTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate findMany
   */
  export type PromptTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplates to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate create
   */
  export type PromptTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a PromptTemplate.
     */
    data: XOR<PromptTemplateCreateInput, PromptTemplateUncheckedCreateInput>
  }

  /**
   * PromptTemplate createMany
   */
  export type PromptTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptTemplates.
     */
    data: PromptTemplateCreateManyInput | PromptTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptTemplate createManyAndReturn
   */
  export type PromptTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PromptTemplates.
     */
    data: PromptTemplateCreateManyInput | PromptTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptTemplate update
   */
  export type PromptTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a PromptTemplate.
     */
    data: XOR<PromptTemplateUpdateInput, PromptTemplateUncheckedUpdateInput>
    /**
     * Choose, which PromptTemplate to update.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate updateMany
   */
  export type PromptTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptTemplates.
     */
    data: XOR<PromptTemplateUpdateManyMutationInput, PromptTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PromptTemplates to update
     */
    where?: PromptTemplateWhereInput
  }

  /**
   * PromptTemplate upsert
   */
  export type PromptTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the PromptTemplate to update in case it exists.
     */
    where: PromptTemplateWhereUniqueInput
    /**
     * In case the PromptTemplate found by the `where` argument doesn't exist, create a new PromptTemplate with this data.
     */
    create: XOR<PromptTemplateCreateInput, PromptTemplateUncheckedCreateInput>
    /**
     * In case the PromptTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptTemplateUpdateInput, PromptTemplateUncheckedUpdateInput>
  }

  /**
   * PromptTemplate delete
   */
  export type PromptTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter which PromptTemplate to delete.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate deleteMany
   */
  export type PromptTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTemplates to delete
     */
    where?: PromptTemplateWhereInput
  }

  /**
   * PromptTemplate.organization
   */
  export type PromptTemplate$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * PromptTemplate.sessions
   */
  export type PromptTemplate$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    where?: WritingSessionWhereInput
    orderBy?: WritingSessionOrderByWithRelationInput | WritingSessionOrderByWithRelationInput[]
    cursor?: WritingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WritingSessionScalarFieldEnum | WritingSessionScalarFieldEnum[]
  }

  /**
   * PromptTemplate without action
   */
  export type PromptTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
  }


  /**
   * Model WritingSession
   */

  export type AggregateWritingSession = {
    _count: WritingSessionCountAggregateOutputType | null
    _avg: WritingSessionAvgAggregateOutputType | null
    _sum: WritingSessionSumAggregateOutputType | null
    _min: WritingSessionMinAggregateOutputType | null
    _max: WritingSessionMaxAggregateOutputType | null
  }

  export type WritingSessionAvgAggregateOutputType = {
    tokensUsed: number | null
  }

  export type WritingSessionSumAggregateOutputType = {
    tokensUsed: number | null
  }

  export type WritingSessionMinAggregateOutputType = {
    id: string | null
    input: string | null
    output: string | null
    mode: string | null
    promptTemplateId: string | null
    userId: string | null
    tokensUsed: number | null
    source: string | null
    createdAt: Date | null
  }

  export type WritingSessionMaxAggregateOutputType = {
    id: string | null
    input: string | null
    output: string | null
    mode: string | null
    promptTemplateId: string | null
    userId: string | null
    tokensUsed: number | null
    source: string | null
    createdAt: Date | null
  }

  export type WritingSessionCountAggregateOutputType = {
    id: number
    input: number
    output: number
    mode: number
    promptTemplateId: number
    userId: number
    tokensUsed: number
    source: number
    createdAt: number
    _all: number
  }


  export type WritingSessionAvgAggregateInputType = {
    tokensUsed?: true
  }

  export type WritingSessionSumAggregateInputType = {
    tokensUsed?: true
  }

  export type WritingSessionMinAggregateInputType = {
    id?: true
    input?: true
    output?: true
    mode?: true
    promptTemplateId?: true
    userId?: true
    tokensUsed?: true
    source?: true
    createdAt?: true
  }

  export type WritingSessionMaxAggregateInputType = {
    id?: true
    input?: true
    output?: true
    mode?: true
    promptTemplateId?: true
    userId?: true
    tokensUsed?: true
    source?: true
    createdAt?: true
  }

  export type WritingSessionCountAggregateInputType = {
    id?: true
    input?: true
    output?: true
    mode?: true
    promptTemplateId?: true
    userId?: true
    tokensUsed?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type WritingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WritingSession to aggregate.
     */
    where?: WritingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WritingSessions to fetch.
     */
    orderBy?: WritingSessionOrderByWithRelationInput | WritingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WritingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WritingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WritingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WritingSessions
    **/
    _count?: true | WritingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WritingSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WritingSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WritingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WritingSessionMaxAggregateInputType
  }

  export type GetWritingSessionAggregateType<T extends WritingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWritingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWritingSession[P]>
      : GetScalarType<T[P], AggregateWritingSession[P]>
  }




  export type WritingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WritingSessionWhereInput
    orderBy?: WritingSessionOrderByWithAggregationInput | WritingSessionOrderByWithAggregationInput[]
    by: WritingSessionScalarFieldEnum[] | WritingSessionScalarFieldEnum
    having?: WritingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WritingSessionCountAggregateInputType | true
    _avg?: WritingSessionAvgAggregateInputType
    _sum?: WritingSessionSumAggregateInputType
    _min?: WritingSessionMinAggregateInputType
    _max?: WritingSessionMaxAggregateInputType
  }

  export type WritingSessionGroupByOutputType = {
    id: string
    input: string
    output: string
    mode: string
    promptTemplateId: string | null
    userId: string
    tokensUsed: number | null
    source: string
    createdAt: Date
    _count: WritingSessionCountAggregateOutputType | null
    _avg: WritingSessionAvgAggregateOutputType | null
    _sum: WritingSessionSumAggregateOutputType | null
    _min: WritingSessionMinAggregateOutputType | null
    _max: WritingSessionMaxAggregateOutputType | null
  }

  type GetWritingSessionGroupByPayload<T extends WritingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WritingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WritingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WritingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WritingSessionGroupByOutputType[P]>
        }
      >
    >


  export type WritingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input?: boolean
    output?: boolean
    mode?: boolean
    promptTemplateId?: boolean
    userId?: boolean
    tokensUsed?: boolean
    source?: boolean
    createdAt?: boolean
    promptTemplate?: boolean | WritingSession$promptTemplateArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writingSession"]>

  export type WritingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input?: boolean
    output?: boolean
    mode?: boolean
    promptTemplateId?: boolean
    userId?: boolean
    tokensUsed?: boolean
    source?: boolean
    createdAt?: boolean
    promptTemplate?: boolean | WritingSession$promptTemplateArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writingSession"]>

  export type WritingSessionSelectScalar = {
    id?: boolean
    input?: boolean
    output?: boolean
    mode?: boolean
    promptTemplateId?: boolean
    userId?: boolean
    tokensUsed?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type WritingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promptTemplate?: boolean | WritingSession$promptTemplateArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WritingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promptTemplate?: boolean | WritingSession$promptTemplateArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WritingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WritingSession"
    objects: {
      promptTemplate: Prisma.$PromptTemplatePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      input: string
      output: string
      mode: string
      promptTemplateId: string | null
      userId: string
      tokensUsed: number | null
      source: string
      createdAt: Date
    }, ExtArgs["result"]["writingSession"]>
    composites: {}
  }

  type WritingSessionGetPayload<S extends boolean | null | undefined | WritingSessionDefaultArgs> = $Result.GetResult<Prisma.$WritingSessionPayload, S>

  type WritingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WritingSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WritingSessionCountAggregateInputType | true
    }

  export interface WritingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WritingSession'], meta: { name: 'WritingSession' } }
    /**
     * Find zero or one WritingSession that matches the filter.
     * @param {WritingSessionFindUniqueArgs} args - Arguments to find a WritingSession
     * @example
     * // Get one WritingSession
     * const writingSession = await prisma.writingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WritingSessionFindUniqueArgs>(args: SelectSubset<T, WritingSessionFindUniqueArgs<ExtArgs>>): Prisma__WritingSessionClient<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WritingSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WritingSessionFindUniqueOrThrowArgs} args - Arguments to find a WritingSession
     * @example
     * // Get one WritingSession
     * const writingSession = await prisma.writingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WritingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, WritingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WritingSessionClient<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WritingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingSessionFindFirstArgs} args - Arguments to find a WritingSession
     * @example
     * // Get one WritingSession
     * const writingSession = await prisma.writingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WritingSessionFindFirstArgs>(args?: SelectSubset<T, WritingSessionFindFirstArgs<ExtArgs>>): Prisma__WritingSessionClient<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WritingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingSessionFindFirstOrThrowArgs} args - Arguments to find a WritingSession
     * @example
     * // Get one WritingSession
     * const writingSession = await prisma.writingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WritingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, WritingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WritingSessionClient<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WritingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WritingSessions
     * const writingSessions = await prisma.writingSession.findMany()
     * 
     * // Get first 10 WritingSessions
     * const writingSessions = await prisma.writingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const writingSessionWithIdOnly = await prisma.writingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WritingSessionFindManyArgs>(args?: SelectSubset<T, WritingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WritingSession.
     * @param {WritingSessionCreateArgs} args - Arguments to create a WritingSession.
     * @example
     * // Create one WritingSession
     * const WritingSession = await prisma.writingSession.create({
     *   data: {
     *     // ... data to create a WritingSession
     *   }
     * })
     * 
     */
    create<T extends WritingSessionCreateArgs>(args: SelectSubset<T, WritingSessionCreateArgs<ExtArgs>>): Prisma__WritingSessionClient<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WritingSessions.
     * @param {WritingSessionCreateManyArgs} args - Arguments to create many WritingSessions.
     * @example
     * // Create many WritingSessions
     * const writingSession = await prisma.writingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WritingSessionCreateManyArgs>(args?: SelectSubset<T, WritingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WritingSessions and returns the data saved in the database.
     * @param {WritingSessionCreateManyAndReturnArgs} args - Arguments to create many WritingSessions.
     * @example
     * // Create many WritingSessions
     * const writingSession = await prisma.writingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WritingSessions and only return the `id`
     * const writingSessionWithIdOnly = await prisma.writingSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WritingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, WritingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WritingSession.
     * @param {WritingSessionDeleteArgs} args - Arguments to delete one WritingSession.
     * @example
     * // Delete one WritingSession
     * const WritingSession = await prisma.writingSession.delete({
     *   where: {
     *     // ... filter to delete one WritingSession
     *   }
     * })
     * 
     */
    delete<T extends WritingSessionDeleteArgs>(args: SelectSubset<T, WritingSessionDeleteArgs<ExtArgs>>): Prisma__WritingSessionClient<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WritingSession.
     * @param {WritingSessionUpdateArgs} args - Arguments to update one WritingSession.
     * @example
     * // Update one WritingSession
     * const writingSession = await prisma.writingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WritingSessionUpdateArgs>(args: SelectSubset<T, WritingSessionUpdateArgs<ExtArgs>>): Prisma__WritingSessionClient<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WritingSessions.
     * @param {WritingSessionDeleteManyArgs} args - Arguments to filter WritingSessions to delete.
     * @example
     * // Delete a few WritingSessions
     * const { count } = await prisma.writingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WritingSessionDeleteManyArgs>(args?: SelectSubset<T, WritingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WritingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WritingSessions
     * const writingSession = await prisma.writingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WritingSessionUpdateManyArgs>(args: SelectSubset<T, WritingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WritingSession.
     * @param {WritingSessionUpsertArgs} args - Arguments to update or create a WritingSession.
     * @example
     * // Update or create a WritingSession
     * const writingSession = await prisma.writingSession.upsert({
     *   create: {
     *     // ... data to create a WritingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WritingSession we want to update
     *   }
     * })
     */
    upsert<T extends WritingSessionUpsertArgs>(args: SelectSubset<T, WritingSessionUpsertArgs<ExtArgs>>): Prisma__WritingSessionClient<$Result.GetResult<Prisma.$WritingSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WritingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingSessionCountArgs} args - Arguments to filter WritingSessions to count.
     * @example
     * // Count the number of WritingSessions
     * const count = await prisma.writingSession.count({
     *   where: {
     *     // ... the filter for the WritingSessions we want to count
     *   }
     * })
    **/
    count<T extends WritingSessionCountArgs>(
      args?: Subset<T, WritingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WritingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WritingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WritingSessionAggregateArgs>(args: Subset<T, WritingSessionAggregateArgs>): Prisma.PrismaPromise<GetWritingSessionAggregateType<T>>

    /**
     * Group by WritingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WritingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WritingSessionGroupByArgs['orderBy'] }
        : { orderBy?: WritingSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WritingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWritingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WritingSession model
   */
  readonly fields: WritingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WritingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WritingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promptTemplate<T extends WritingSession$promptTemplateArgs<ExtArgs> = {}>(args?: Subset<T, WritingSession$promptTemplateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WritingSession model
   */ 
  interface WritingSessionFieldRefs {
    readonly id: FieldRef<"WritingSession", 'String'>
    readonly input: FieldRef<"WritingSession", 'String'>
    readonly output: FieldRef<"WritingSession", 'String'>
    readonly mode: FieldRef<"WritingSession", 'String'>
    readonly promptTemplateId: FieldRef<"WritingSession", 'String'>
    readonly userId: FieldRef<"WritingSession", 'String'>
    readonly tokensUsed: FieldRef<"WritingSession", 'Int'>
    readonly source: FieldRef<"WritingSession", 'String'>
    readonly createdAt: FieldRef<"WritingSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WritingSession findUnique
   */
  export type WritingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    /**
     * Filter, which WritingSession to fetch.
     */
    where: WritingSessionWhereUniqueInput
  }

  /**
   * WritingSession findUniqueOrThrow
   */
  export type WritingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    /**
     * Filter, which WritingSession to fetch.
     */
    where: WritingSessionWhereUniqueInput
  }

  /**
   * WritingSession findFirst
   */
  export type WritingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    /**
     * Filter, which WritingSession to fetch.
     */
    where?: WritingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WritingSessions to fetch.
     */
    orderBy?: WritingSessionOrderByWithRelationInput | WritingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WritingSessions.
     */
    cursor?: WritingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WritingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WritingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WritingSessions.
     */
    distinct?: WritingSessionScalarFieldEnum | WritingSessionScalarFieldEnum[]
  }

  /**
   * WritingSession findFirstOrThrow
   */
  export type WritingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    /**
     * Filter, which WritingSession to fetch.
     */
    where?: WritingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WritingSessions to fetch.
     */
    orderBy?: WritingSessionOrderByWithRelationInput | WritingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WritingSessions.
     */
    cursor?: WritingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WritingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WritingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WritingSessions.
     */
    distinct?: WritingSessionScalarFieldEnum | WritingSessionScalarFieldEnum[]
  }

  /**
   * WritingSession findMany
   */
  export type WritingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    /**
     * Filter, which WritingSessions to fetch.
     */
    where?: WritingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WritingSessions to fetch.
     */
    orderBy?: WritingSessionOrderByWithRelationInput | WritingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WritingSessions.
     */
    cursor?: WritingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WritingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WritingSessions.
     */
    skip?: number
    distinct?: WritingSessionScalarFieldEnum | WritingSessionScalarFieldEnum[]
  }

  /**
   * WritingSession create
   */
  export type WritingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WritingSession.
     */
    data: XOR<WritingSessionCreateInput, WritingSessionUncheckedCreateInput>
  }

  /**
   * WritingSession createMany
   */
  export type WritingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WritingSessions.
     */
    data: WritingSessionCreateManyInput | WritingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WritingSession createManyAndReturn
   */
  export type WritingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WritingSessions.
     */
    data: WritingSessionCreateManyInput | WritingSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WritingSession update
   */
  export type WritingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WritingSession.
     */
    data: XOR<WritingSessionUpdateInput, WritingSessionUncheckedUpdateInput>
    /**
     * Choose, which WritingSession to update.
     */
    where: WritingSessionWhereUniqueInput
  }

  /**
   * WritingSession updateMany
   */
  export type WritingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WritingSessions.
     */
    data: XOR<WritingSessionUpdateManyMutationInput, WritingSessionUncheckedUpdateManyInput>
    /**
     * Filter which WritingSessions to update
     */
    where?: WritingSessionWhereInput
  }

  /**
   * WritingSession upsert
   */
  export type WritingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WritingSession to update in case it exists.
     */
    where: WritingSessionWhereUniqueInput
    /**
     * In case the WritingSession found by the `where` argument doesn't exist, create a new WritingSession with this data.
     */
    create: XOR<WritingSessionCreateInput, WritingSessionUncheckedCreateInput>
    /**
     * In case the WritingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WritingSessionUpdateInput, WritingSessionUncheckedUpdateInput>
  }

  /**
   * WritingSession delete
   */
  export type WritingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
    /**
     * Filter which WritingSession to delete.
     */
    where: WritingSessionWhereUniqueInput
  }

  /**
   * WritingSession deleteMany
   */
  export type WritingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WritingSessions to delete
     */
    where?: WritingSessionWhereInput
  }

  /**
   * WritingSession.promptTemplate
   */
  export type WritingSession$promptTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    where?: PromptTemplateWhereInput
  }

  /**
   * WritingSession without action
   */
  export type WritingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingSession
     */
    select?: WritingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    name: 'name',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    clerkOrgId: 'clerkOrgId',
    name: 'name',
    writingTone: 'writingTone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const PromptTemplateScalarFieldEnum: {
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

  export type PromptTemplateScalarFieldEnum = (typeof PromptTemplateScalarFieldEnum)[keyof typeof PromptTemplateScalarFieldEnum]


  export const WritingSessionScalarFieldEnum: {
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

  export type WritingSessionScalarFieldEnum = (typeof WritingSessionScalarFieldEnum)[keyof typeof WritingSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    organizationId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationNullableRelationFilter, OrganizationWhereInput> | null
    prompts?: PromptTemplateListRelationFilter
    sessions?: WritingSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    prompts?: PromptTemplateOrderByRelationAggregateInput
    sessions?: WritingSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    organizationId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationNullableRelationFilter, OrganizationWhereInput> | null
    prompts?: PromptTemplateListRelationFilter
    sessions?: WritingSessionListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    organizationId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    clerkOrgId?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    writingTone?: JsonFilter<"Organization">
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    prompts?: PromptTemplateListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    clerkOrgId?: SortOrder
    name?: SortOrder
    writingTone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    prompts?: PromptTemplateOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkOrgId?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    writingTone?: JsonFilter<"Organization">
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    prompts?: PromptTemplateListRelationFilter
  }, "id" | "clerkOrgId">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    clerkOrgId?: SortOrder
    name?: SortOrder
    writingTone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    clerkOrgId?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    writingTone?: JsonWithAggregatesFilter<"Organization">
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type PromptTemplateWhereInput = {
    AND?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    OR?: PromptTemplateWhereInput[]
    NOT?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    id?: StringFilter<"PromptTemplate"> | string
    title?: StringFilter<"PromptTemplate"> | string
    systemPrompt?: StringFilter<"PromptTemplate"> | string
    variables?: JsonFilter<"PromptTemplate">
    isPublic?: BoolFilter<"PromptTemplate"> | boolean
    userId?: StringFilter<"PromptTemplate"> | string
    organizationId?: StringNullableFilter<"PromptTemplate"> | string | null
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationNullableRelationFilter, OrganizationWhereInput> | null
    sessions?: WritingSessionListRelationFilter
  }

  export type PromptTemplateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    systemPrompt?: SortOrder
    variables?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    sessions?: WritingSessionOrderByRelationAggregateInput
  }

  export type PromptTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    OR?: PromptTemplateWhereInput[]
    NOT?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    title?: StringFilter<"PromptTemplate"> | string
    systemPrompt?: StringFilter<"PromptTemplate"> | string
    variables?: JsonFilter<"PromptTemplate">
    isPublic?: BoolFilter<"PromptTemplate"> | boolean
    userId?: StringFilter<"PromptTemplate"> | string
    organizationId?: StringNullableFilter<"PromptTemplate"> | string | null
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationNullableRelationFilter, OrganizationWhereInput> | null
    sessions?: WritingSessionListRelationFilter
  }, "id">

  export type PromptTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    systemPrompt?: SortOrder
    variables?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptTemplateCountOrderByAggregateInput
    _max?: PromptTemplateMaxOrderByAggregateInput
    _min?: PromptTemplateMinOrderByAggregateInput
  }

  export type PromptTemplateScalarWhereWithAggregatesInput = {
    AND?: PromptTemplateScalarWhereWithAggregatesInput | PromptTemplateScalarWhereWithAggregatesInput[]
    OR?: PromptTemplateScalarWhereWithAggregatesInput[]
    NOT?: PromptTemplateScalarWhereWithAggregatesInput | PromptTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromptTemplate"> | string
    title?: StringWithAggregatesFilter<"PromptTemplate"> | string
    systemPrompt?: StringWithAggregatesFilter<"PromptTemplate"> | string
    variables?: JsonWithAggregatesFilter<"PromptTemplate">
    isPublic?: BoolWithAggregatesFilter<"PromptTemplate"> | boolean
    userId?: StringWithAggregatesFilter<"PromptTemplate"> | string
    organizationId?: StringNullableWithAggregatesFilter<"PromptTemplate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PromptTemplate"> | Date | string
  }

  export type WritingSessionWhereInput = {
    AND?: WritingSessionWhereInput | WritingSessionWhereInput[]
    OR?: WritingSessionWhereInput[]
    NOT?: WritingSessionWhereInput | WritingSessionWhereInput[]
    id?: StringFilter<"WritingSession"> | string
    input?: StringFilter<"WritingSession"> | string
    output?: StringFilter<"WritingSession"> | string
    mode?: StringFilter<"WritingSession"> | string
    promptTemplateId?: StringNullableFilter<"WritingSession"> | string | null
    userId?: StringFilter<"WritingSession"> | string
    tokensUsed?: IntNullableFilter<"WritingSession"> | number | null
    source?: StringFilter<"WritingSession"> | string
    createdAt?: DateTimeFilter<"WritingSession"> | Date | string
    promptTemplate?: XOR<PromptTemplateNullableRelationFilter, PromptTemplateWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WritingSessionOrderByWithRelationInput = {
    id?: SortOrder
    input?: SortOrder
    output?: SortOrder
    mode?: SortOrder
    promptTemplateId?: SortOrderInput | SortOrder
    userId?: SortOrder
    tokensUsed?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    promptTemplate?: PromptTemplateOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WritingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WritingSessionWhereInput | WritingSessionWhereInput[]
    OR?: WritingSessionWhereInput[]
    NOT?: WritingSessionWhereInput | WritingSessionWhereInput[]
    input?: StringFilter<"WritingSession"> | string
    output?: StringFilter<"WritingSession"> | string
    mode?: StringFilter<"WritingSession"> | string
    promptTemplateId?: StringNullableFilter<"WritingSession"> | string | null
    userId?: StringFilter<"WritingSession"> | string
    tokensUsed?: IntNullableFilter<"WritingSession"> | number | null
    source?: StringFilter<"WritingSession"> | string
    createdAt?: DateTimeFilter<"WritingSession"> | Date | string
    promptTemplate?: XOR<PromptTemplateNullableRelationFilter, PromptTemplateWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type WritingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    input?: SortOrder
    output?: SortOrder
    mode?: SortOrder
    promptTemplateId?: SortOrderInput | SortOrder
    userId?: SortOrder
    tokensUsed?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: WritingSessionCountOrderByAggregateInput
    _avg?: WritingSessionAvgOrderByAggregateInput
    _max?: WritingSessionMaxOrderByAggregateInput
    _min?: WritingSessionMinOrderByAggregateInput
    _sum?: WritingSessionSumOrderByAggregateInput
  }

  export type WritingSessionScalarWhereWithAggregatesInput = {
    AND?: WritingSessionScalarWhereWithAggregatesInput | WritingSessionScalarWhereWithAggregatesInput[]
    OR?: WritingSessionScalarWhereWithAggregatesInput[]
    NOT?: WritingSessionScalarWhereWithAggregatesInput | WritingSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WritingSession"> | string
    input?: StringWithAggregatesFilter<"WritingSession"> | string
    output?: StringWithAggregatesFilter<"WritingSession"> | string
    mode?: StringWithAggregatesFilter<"WritingSession"> | string
    promptTemplateId?: StringNullableWithAggregatesFilter<"WritingSession"> | string | null
    userId?: StringWithAggregatesFilter<"WritingSession"> | string
    tokensUsed?: IntNullableWithAggregatesFilter<"WritingSession"> | number | null
    source?: StringWithAggregatesFilter<"WritingSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WritingSession"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    prompts?: PromptTemplateCreateNestedManyWithoutUserInput
    sessions?: WritingSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptTemplateUncheckedCreateNestedManyWithoutUserInput
    sessions?: WritingSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    prompts?: PromptTemplateUpdateManyWithoutUserNestedInput
    sessions?: WritingSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptTemplateUncheckedUpdateManyWithoutUserNestedInput
    sessions?: WritingSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    clerkOrgId: string
    name: string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    prompts?: PromptTemplateCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    clerkOrgId: string
    name: string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    prompts?: PromptTemplateUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    prompts?: PromptTemplateUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    prompts?: PromptTemplateUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    clerkOrgId: string
    name: string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateCreateInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPromptsInput
    organization?: OrganizationCreateNestedOneWithoutPromptsInput
    sessions?: WritingSessionCreateNestedManyWithoutPromptTemplateInput
  }

  export type PromptTemplateUncheckedCreateInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    userId: string
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: WritingSessionUncheckedCreateNestedManyWithoutPromptTemplateInput
  }

  export type PromptTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPromptsNestedInput
    organization?: OrganizationUpdateOneWithoutPromptsNestedInput
    sessions?: WritingSessionUpdateManyWithoutPromptTemplateNestedInput
  }

  export type PromptTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WritingSessionUncheckedUpdateManyWithoutPromptTemplateNestedInput
  }

  export type PromptTemplateCreateManyInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    userId: string
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WritingSessionCreateInput = {
    id?: string
    input: string
    output: string
    mode: string
    tokensUsed?: number | null
    source?: string
    createdAt?: Date | string
    promptTemplate?: PromptTemplateCreateNestedOneWithoutSessionsInput
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type WritingSessionUncheckedCreateInput = {
    id?: string
    input: string
    output: string
    mode: string
    promptTemplateId?: string | null
    userId: string
    tokensUsed?: number | null
    source?: string
    createdAt?: Date | string
  }

  export type WritingSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promptTemplate?: PromptTemplateUpdateOneWithoutSessionsNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type WritingSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    promptTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WritingSessionCreateManyInput = {
    id?: string
    input: string
    output: string
    mode: string
    promptTemplateId?: string | null
    userId: string
    tokensUsed?: number | null
    source?: string
    createdAt?: Date | string
  }

  export type WritingSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WritingSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    promptTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrganizationNullableRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type PromptTemplateListRelationFilter = {
    every?: PromptTemplateWhereInput
    some?: PromptTemplateWhereInput
    none?: PromptTemplateWhereInput
  }

  export type WritingSessionListRelationFilter = {
    every?: WritingSessionWhereInput
    some?: WritingSessionWhereInput
    none?: WritingSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PromptTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WritingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    clerkOrgId?: SortOrder
    name?: SortOrder
    writingTone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkOrgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    clerkOrgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PromptTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    systemPrompt?: SortOrder
    variables?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    systemPrompt?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    systemPrompt?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PromptTemplateNullableRelationFilter = {
    is?: PromptTemplateWhereInput | null
    isNot?: PromptTemplateWhereInput | null
  }

  export type WritingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    input?: SortOrder
    output?: SortOrder
    mode?: SortOrder
    promptTemplateId?: SortOrder
    userId?: SortOrder
    tokensUsed?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type WritingSessionAvgOrderByAggregateInput = {
    tokensUsed?: SortOrder
  }

  export type WritingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    input?: SortOrder
    output?: SortOrder
    mode?: SortOrder
    promptTemplateId?: SortOrder
    userId?: SortOrder
    tokensUsed?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type WritingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    input?: SortOrder
    output?: SortOrder
    mode?: SortOrder
    promptTemplateId?: SortOrder
    userId?: SortOrder
    tokensUsed?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type WritingSessionSumOrderByAggregateInput = {
    tokensUsed?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PromptTemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<PromptTemplateCreateWithoutUserInput, PromptTemplateUncheckedCreateWithoutUserInput> | PromptTemplateCreateWithoutUserInput[] | PromptTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutUserInput | PromptTemplateCreateOrConnectWithoutUserInput[]
    createMany?: PromptTemplateCreateManyUserInputEnvelope
    connect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
  }

  export type WritingSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<WritingSessionCreateWithoutUserInput, WritingSessionUncheckedCreateWithoutUserInput> | WritingSessionCreateWithoutUserInput[] | WritingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WritingSessionCreateOrConnectWithoutUserInput | WritingSessionCreateOrConnectWithoutUserInput[]
    createMany?: WritingSessionCreateManyUserInputEnvelope
    connect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
  }

  export type PromptTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PromptTemplateCreateWithoutUserInput, PromptTemplateUncheckedCreateWithoutUserInput> | PromptTemplateCreateWithoutUserInput[] | PromptTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutUserInput | PromptTemplateCreateOrConnectWithoutUserInput[]
    createMany?: PromptTemplateCreateManyUserInputEnvelope
    connect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
  }

  export type WritingSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WritingSessionCreateWithoutUserInput, WritingSessionUncheckedCreateWithoutUserInput> | WritingSessionCreateWithoutUserInput[] | WritingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WritingSessionCreateOrConnectWithoutUserInput | WritingSessionCreateOrConnectWithoutUserInput[]
    createMany?: WritingSessionCreateManyUserInputEnvelope
    connect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type PromptTemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromptTemplateCreateWithoutUserInput, PromptTemplateUncheckedCreateWithoutUserInput> | PromptTemplateCreateWithoutUserInput[] | PromptTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutUserInput | PromptTemplateCreateOrConnectWithoutUserInput[]
    upsert?: PromptTemplateUpsertWithWhereUniqueWithoutUserInput | PromptTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromptTemplateCreateManyUserInputEnvelope
    set?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    disconnect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    delete?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    connect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    update?: PromptTemplateUpdateWithWhereUniqueWithoutUserInput | PromptTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromptTemplateUpdateManyWithWhereWithoutUserInput | PromptTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromptTemplateScalarWhereInput | PromptTemplateScalarWhereInput[]
  }

  export type WritingSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WritingSessionCreateWithoutUserInput, WritingSessionUncheckedCreateWithoutUserInput> | WritingSessionCreateWithoutUserInput[] | WritingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WritingSessionCreateOrConnectWithoutUserInput | WritingSessionCreateOrConnectWithoutUserInput[]
    upsert?: WritingSessionUpsertWithWhereUniqueWithoutUserInput | WritingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WritingSessionCreateManyUserInputEnvelope
    set?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    disconnect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    delete?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    connect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    update?: WritingSessionUpdateWithWhereUniqueWithoutUserInput | WritingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WritingSessionUpdateManyWithWhereWithoutUserInput | WritingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WritingSessionScalarWhereInput | WritingSessionScalarWhereInput[]
  }

  export type PromptTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromptTemplateCreateWithoutUserInput, PromptTemplateUncheckedCreateWithoutUserInput> | PromptTemplateCreateWithoutUserInput[] | PromptTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutUserInput | PromptTemplateCreateOrConnectWithoutUserInput[]
    upsert?: PromptTemplateUpsertWithWhereUniqueWithoutUserInput | PromptTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromptTemplateCreateManyUserInputEnvelope
    set?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    disconnect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    delete?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    connect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    update?: PromptTemplateUpdateWithWhereUniqueWithoutUserInput | PromptTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromptTemplateUpdateManyWithWhereWithoutUserInput | PromptTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromptTemplateScalarWhereInput | PromptTemplateScalarWhereInput[]
  }

  export type WritingSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WritingSessionCreateWithoutUserInput, WritingSessionUncheckedCreateWithoutUserInput> | WritingSessionCreateWithoutUserInput[] | WritingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WritingSessionCreateOrConnectWithoutUserInput | WritingSessionCreateOrConnectWithoutUserInput[]
    upsert?: WritingSessionUpsertWithWhereUniqueWithoutUserInput | WritingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WritingSessionCreateManyUserInputEnvelope
    set?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    disconnect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    delete?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    connect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    update?: WritingSessionUpdateWithWhereUniqueWithoutUserInput | WritingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WritingSessionUpdateManyWithWhereWithoutUserInput | WritingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WritingSessionScalarWhereInput | WritingSessionScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PromptTemplateCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PromptTemplateCreateWithoutOrganizationInput, PromptTemplateUncheckedCreateWithoutOrganizationInput> | PromptTemplateCreateWithoutOrganizationInput[] | PromptTemplateUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutOrganizationInput | PromptTemplateCreateOrConnectWithoutOrganizationInput[]
    createMany?: PromptTemplateCreateManyOrganizationInputEnvelope
    connect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PromptTemplateUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PromptTemplateCreateWithoutOrganizationInput, PromptTemplateUncheckedCreateWithoutOrganizationInput> | PromptTemplateCreateWithoutOrganizationInput[] | PromptTemplateUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutOrganizationInput | PromptTemplateCreateOrConnectWithoutOrganizationInput[]
    createMany?: PromptTemplateCreateManyOrganizationInputEnvelope
    connect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PromptTemplateUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PromptTemplateCreateWithoutOrganizationInput, PromptTemplateUncheckedCreateWithoutOrganizationInput> | PromptTemplateCreateWithoutOrganizationInput[] | PromptTemplateUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutOrganizationInput | PromptTemplateCreateOrConnectWithoutOrganizationInput[]
    upsert?: PromptTemplateUpsertWithWhereUniqueWithoutOrganizationInput | PromptTemplateUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PromptTemplateCreateManyOrganizationInputEnvelope
    set?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    disconnect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    delete?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    connect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    update?: PromptTemplateUpdateWithWhereUniqueWithoutOrganizationInput | PromptTemplateUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PromptTemplateUpdateManyWithWhereWithoutOrganizationInput | PromptTemplateUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PromptTemplateScalarWhereInput | PromptTemplateScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PromptTemplateUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PromptTemplateCreateWithoutOrganizationInput, PromptTemplateUncheckedCreateWithoutOrganizationInput> | PromptTemplateCreateWithoutOrganizationInput[] | PromptTemplateUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutOrganizationInput | PromptTemplateCreateOrConnectWithoutOrganizationInput[]
    upsert?: PromptTemplateUpsertWithWhereUniqueWithoutOrganizationInput | PromptTemplateUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PromptTemplateCreateManyOrganizationInputEnvelope
    set?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    disconnect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    delete?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    connect?: PromptTemplateWhereUniqueInput | PromptTemplateWhereUniqueInput[]
    update?: PromptTemplateUpdateWithWhereUniqueWithoutOrganizationInput | PromptTemplateUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PromptTemplateUpdateManyWithWhereWithoutOrganizationInput | PromptTemplateUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PromptTemplateScalarWhereInput | PromptTemplateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPromptsInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutPromptsInput = {
    create?: XOR<OrganizationCreateWithoutPromptsInput, OrganizationUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPromptsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type WritingSessionCreateNestedManyWithoutPromptTemplateInput = {
    create?: XOR<WritingSessionCreateWithoutPromptTemplateInput, WritingSessionUncheckedCreateWithoutPromptTemplateInput> | WritingSessionCreateWithoutPromptTemplateInput[] | WritingSessionUncheckedCreateWithoutPromptTemplateInput[]
    connectOrCreate?: WritingSessionCreateOrConnectWithoutPromptTemplateInput | WritingSessionCreateOrConnectWithoutPromptTemplateInput[]
    createMany?: WritingSessionCreateManyPromptTemplateInputEnvelope
    connect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
  }

  export type WritingSessionUncheckedCreateNestedManyWithoutPromptTemplateInput = {
    create?: XOR<WritingSessionCreateWithoutPromptTemplateInput, WritingSessionUncheckedCreateWithoutPromptTemplateInput> | WritingSessionCreateWithoutPromptTemplateInput[] | WritingSessionUncheckedCreateWithoutPromptTemplateInput[]
    connectOrCreate?: WritingSessionCreateOrConnectWithoutPromptTemplateInput | WritingSessionCreateOrConnectWithoutPromptTemplateInput[]
    createMany?: WritingSessionCreateManyPromptTemplateInputEnvelope
    connect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPromptsNestedInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    upsert?: UserUpsertWithoutPromptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPromptsInput, UserUpdateWithoutPromptsInput>, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type OrganizationUpdateOneWithoutPromptsNestedInput = {
    create?: XOR<OrganizationCreateWithoutPromptsInput, OrganizationUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPromptsInput
    upsert?: OrganizationUpsertWithoutPromptsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPromptsInput, OrganizationUpdateWithoutPromptsInput>, OrganizationUncheckedUpdateWithoutPromptsInput>
  }

  export type WritingSessionUpdateManyWithoutPromptTemplateNestedInput = {
    create?: XOR<WritingSessionCreateWithoutPromptTemplateInput, WritingSessionUncheckedCreateWithoutPromptTemplateInput> | WritingSessionCreateWithoutPromptTemplateInput[] | WritingSessionUncheckedCreateWithoutPromptTemplateInput[]
    connectOrCreate?: WritingSessionCreateOrConnectWithoutPromptTemplateInput | WritingSessionCreateOrConnectWithoutPromptTemplateInput[]
    upsert?: WritingSessionUpsertWithWhereUniqueWithoutPromptTemplateInput | WritingSessionUpsertWithWhereUniqueWithoutPromptTemplateInput[]
    createMany?: WritingSessionCreateManyPromptTemplateInputEnvelope
    set?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    disconnect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    delete?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    connect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    update?: WritingSessionUpdateWithWhereUniqueWithoutPromptTemplateInput | WritingSessionUpdateWithWhereUniqueWithoutPromptTemplateInput[]
    updateMany?: WritingSessionUpdateManyWithWhereWithoutPromptTemplateInput | WritingSessionUpdateManyWithWhereWithoutPromptTemplateInput[]
    deleteMany?: WritingSessionScalarWhereInput | WritingSessionScalarWhereInput[]
  }

  export type WritingSessionUncheckedUpdateManyWithoutPromptTemplateNestedInput = {
    create?: XOR<WritingSessionCreateWithoutPromptTemplateInput, WritingSessionUncheckedCreateWithoutPromptTemplateInput> | WritingSessionCreateWithoutPromptTemplateInput[] | WritingSessionUncheckedCreateWithoutPromptTemplateInput[]
    connectOrCreate?: WritingSessionCreateOrConnectWithoutPromptTemplateInput | WritingSessionCreateOrConnectWithoutPromptTemplateInput[]
    upsert?: WritingSessionUpsertWithWhereUniqueWithoutPromptTemplateInput | WritingSessionUpsertWithWhereUniqueWithoutPromptTemplateInput[]
    createMany?: WritingSessionCreateManyPromptTemplateInputEnvelope
    set?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    disconnect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    delete?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    connect?: WritingSessionWhereUniqueInput | WritingSessionWhereUniqueInput[]
    update?: WritingSessionUpdateWithWhereUniqueWithoutPromptTemplateInput | WritingSessionUpdateWithWhereUniqueWithoutPromptTemplateInput[]
    updateMany?: WritingSessionUpdateManyWithWhereWithoutPromptTemplateInput | WritingSessionUpdateManyWithWhereWithoutPromptTemplateInput[]
    deleteMany?: WritingSessionScalarWhereInput | WritingSessionScalarWhereInput[]
  }

  export type PromptTemplateCreateNestedOneWithoutSessionsInput = {
    create?: XOR<PromptTemplateCreateWithoutSessionsInput, PromptTemplateUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutSessionsInput
    connect?: PromptTemplateWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PromptTemplateUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<PromptTemplateCreateWithoutSessionsInput, PromptTemplateUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutSessionsInput
    upsert?: PromptTemplateUpsertWithoutSessionsInput
    disconnect?: PromptTemplateWhereInput | boolean
    delete?: PromptTemplateWhereInput | boolean
    connect?: PromptTemplateWhereUniqueInput
    update?: XOR<XOR<PromptTemplateUpdateToOneWithWhereWithoutSessionsInput, PromptTemplateUpdateWithoutSessionsInput>, PromptTemplateUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    clerkOrgId: string
    name: string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptTemplateCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    clerkOrgId: string
    name: string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptTemplateUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type PromptTemplateCreateWithoutUserInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutPromptsInput
    sessions?: WritingSessionCreateNestedManyWithoutPromptTemplateInput
  }

  export type PromptTemplateUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: WritingSessionUncheckedCreateNestedManyWithoutPromptTemplateInput
  }

  export type PromptTemplateCreateOrConnectWithoutUserInput = {
    where: PromptTemplateWhereUniqueInput
    create: XOR<PromptTemplateCreateWithoutUserInput, PromptTemplateUncheckedCreateWithoutUserInput>
  }

  export type PromptTemplateCreateManyUserInputEnvelope = {
    data: PromptTemplateCreateManyUserInput | PromptTemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WritingSessionCreateWithoutUserInput = {
    id?: string
    input: string
    output: string
    mode: string
    tokensUsed?: number | null
    source?: string
    createdAt?: Date | string
    promptTemplate?: PromptTemplateCreateNestedOneWithoutSessionsInput
  }

  export type WritingSessionUncheckedCreateWithoutUserInput = {
    id?: string
    input: string
    output: string
    mode: string
    promptTemplateId?: string | null
    tokensUsed?: number | null
    source?: string
    createdAt?: Date | string
  }

  export type WritingSessionCreateOrConnectWithoutUserInput = {
    where: WritingSessionWhereUniqueInput
    create: XOR<WritingSessionCreateWithoutUserInput, WritingSessionUncheckedCreateWithoutUserInput>
  }

  export type WritingSessionCreateManyUserInputEnvelope = {
    data: WritingSessionCreateManyUserInput | WritingSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptTemplateUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptTemplateUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type PromptTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: PromptTemplateWhereUniqueInput
    update: XOR<PromptTemplateUpdateWithoutUserInput, PromptTemplateUncheckedUpdateWithoutUserInput>
    create: XOR<PromptTemplateCreateWithoutUserInput, PromptTemplateUncheckedCreateWithoutUserInput>
  }

  export type PromptTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: PromptTemplateWhereUniqueInput
    data: XOR<PromptTemplateUpdateWithoutUserInput, PromptTemplateUncheckedUpdateWithoutUserInput>
  }

  export type PromptTemplateUpdateManyWithWhereWithoutUserInput = {
    where: PromptTemplateScalarWhereInput
    data: XOR<PromptTemplateUpdateManyMutationInput, PromptTemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type PromptTemplateScalarWhereInput = {
    AND?: PromptTemplateScalarWhereInput | PromptTemplateScalarWhereInput[]
    OR?: PromptTemplateScalarWhereInput[]
    NOT?: PromptTemplateScalarWhereInput | PromptTemplateScalarWhereInput[]
    id?: StringFilter<"PromptTemplate"> | string
    title?: StringFilter<"PromptTemplate"> | string
    systemPrompt?: StringFilter<"PromptTemplate"> | string
    variables?: JsonFilter<"PromptTemplate">
    isPublic?: BoolFilter<"PromptTemplate"> | boolean
    userId?: StringFilter<"PromptTemplate"> | string
    organizationId?: StringNullableFilter<"PromptTemplate"> | string | null
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PromptTemplate"> | Date | string
  }

  export type WritingSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: WritingSessionWhereUniqueInput
    update: XOR<WritingSessionUpdateWithoutUserInput, WritingSessionUncheckedUpdateWithoutUserInput>
    create: XOR<WritingSessionCreateWithoutUserInput, WritingSessionUncheckedCreateWithoutUserInput>
  }

  export type WritingSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: WritingSessionWhereUniqueInput
    data: XOR<WritingSessionUpdateWithoutUserInput, WritingSessionUncheckedUpdateWithoutUserInput>
  }

  export type WritingSessionUpdateManyWithWhereWithoutUserInput = {
    where: WritingSessionScalarWhereInput
    data: XOR<WritingSessionUpdateManyMutationInput, WritingSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type WritingSessionScalarWhereInput = {
    AND?: WritingSessionScalarWhereInput | WritingSessionScalarWhereInput[]
    OR?: WritingSessionScalarWhereInput[]
    NOT?: WritingSessionScalarWhereInput | WritingSessionScalarWhereInput[]
    id?: StringFilter<"WritingSession"> | string
    input?: StringFilter<"WritingSession"> | string
    output?: StringFilter<"WritingSession"> | string
    mode?: StringFilter<"WritingSession"> | string
    promptTemplateId?: StringNullableFilter<"WritingSession"> | string | null
    userId?: StringFilter<"WritingSession"> | string
    tokensUsed?: IntNullableFilter<"WritingSession"> | number | null
    source?: StringFilter<"WritingSession"> | string
    createdAt?: DateTimeFilter<"WritingSession"> | Date | string
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptTemplateCreateNestedManyWithoutUserInput
    sessions?: WritingSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptTemplateUncheckedCreateNestedManyWithoutUserInput
    sessions?: WritingSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PromptTemplateCreateWithoutOrganizationInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPromptsInput
    sessions?: WritingSessionCreateNestedManyWithoutPromptTemplateInput
  }

  export type PromptTemplateUncheckedCreateWithoutOrganizationInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: WritingSessionUncheckedCreateNestedManyWithoutPromptTemplateInput
  }

  export type PromptTemplateCreateOrConnectWithoutOrganizationInput = {
    where: PromptTemplateWhereUniqueInput
    create: XOR<PromptTemplateCreateWithoutOrganizationInput, PromptTemplateUncheckedCreateWithoutOrganizationInput>
  }

  export type PromptTemplateCreateManyOrganizationInputEnvelope = {
    data: PromptTemplateCreateManyOrganizationInput | PromptTemplateCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    organizationId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type PromptTemplateUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PromptTemplateWhereUniqueInput
    update: XOR<PromptTemplateUpdateWithoutOrganizationInput, PromptTemplateUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PromptTemplateCreateWithoutOrganizationInput, PromptTemplateUncheckedCreateWithoutOrganizationInput>
  }

  export type PromptTemplateUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PromptTemplateWhereUniqueInput
    data: XOR<PromptTemplateUpdateWithoutOrganizationInput, PromptTemplateUncheckedUpdateWithoutOrganizationInput>
  }

  export type PromptTemplateUpdateManyWithWhereWithoutOrganizationInput = {
    where: PromptTemplateScalarWhereInput
    data: XOR<PromptTemplateUpdateManyMutationInput, PromptTemplateUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserCreateWithoutPromptsInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    sessions?: WritingSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPromptsInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: WritingSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPromptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
  }

  export type OrganizationCreateWithoutPromptsInput = {
    id?: string
    clerkOrgId: string
    name: string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPromptsInput = {
    id?: string
    clerkOrgId: string
    name: string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPromptsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPromptsInput, OrganizationUncheckedCreateWithoutPromptsInput>
  }

  export type WritingSessionCreateWithoutPromptTemplateInput = {
    id?: string
    input: string
    output: string
    mode: string
    tokensUsed?: number | null
    source?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type WritingSessionUncheckedCreateWithoutPromptTemplateInput = {
    id?: string
    input: string
    output: string
    mode: string
    userId: string
    tokensUsed?: number | null
    source?: string
    createdAt?: Date | string
  }

  export type WritingSessionCreateOrConnectWithoutPromptTemplateInput = {
    where: WritingSessionWhereUniqueInput
    create: XOR<WritingSessionCreateWithoutPromptTemplateInput, WritingSessionUncheckedCreateWithoutPromptTemplateInput>
  }

  export type WritingSessionCreateManyPromptTemplateInputEnvelope = {
    data: WritingSessionCreateManyPromptTemplateInput | WritingSessionCreateManyPromptTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPromptsInput = {
    update: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPromptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type UserUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    sessions?: WritingSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WritingSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithoutPromptsInput = {
    update: XOR<OrganizationUpdateWithoutPromptsInput, OrganizationUncheckedUpdateWithoutPromptsInput>
    create: XOR<OrganizationCreateWithoutPromptsInput, OrganizationUncheckedCreateWithoutPromptsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPromptsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPromptsInput, OrganizationUncheckedUpdateWithoutPromptsInput>
  }

  export type OrganizationUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    writingTone?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type WritingSessionUpsertWithWhereUniqueWithoutPromptTemplateInput = {
    where: WritingSessionWhereUniqueInput
    update: XOR<WritingSessionUpdateWithoutPromptTemplateInput, WritingSessionUncheckedUpdateWithoutPromptTemplateInput>
    create: XOR<WritingSessionCreateWithoutPromptTemplateInput, WritingSessionUncheckedCreateWithoutPromptTemplateInput>
  }

  export type WritingSessionUpdateWithWhereUniqueWithoutPromptTemplateInput = {
    where: WritingSessionWhereUniqueInput
    data: XOR<WritingSessionUpdateWithoutPromptTemplateInput, WritingSessionUncheckedUpdateWithoutPromptTemplateInput>
  }

  export type WritingSessionUpdateManyWithWhereWithoutPromptTemplateInput = {
    where: WritingSessionScalarWhereInput
    data: XOR<WritingSessionUpdateManyMutationInput, WritingSessionUncheckedUpdateManyWithoutPromptTemplateInput>
  }

  export type PromptTemplateCreateWithoutSessionsInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPromptsInput
    organization?: OrganizationCreateNestedOneWithoutPromptsInput
  }

  export type PromptTemplateUncheckedCreateWithoutSessionsInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    userId: string
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateCreateOrConnectWithoutSessionsInput = {
    where: PromptTemplateWhereUniqueInput
    create: XOR<PromptTemplateCreateWithoutSessionsInput, PromptTemplateUncheckedCreateWithoutSessionsInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    prompts?: PromptTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type PromptTemplateUpsertWithoutSessionsInput = {
    update: XOR<PromptTemplateUpdateWithoutSessionsInput, PromptTemplateUncheckedUpdateWithoutSessionsInput>
    create: XOR<PromptTemplateCreateWithoutSessionsInput, PromptTemplateUncheckedCreateWithoutSessionsInput>
    where?: PromptTemplateWhereInput
  }

  export type PromptTemplateUpdateToOneWithWhereWithoutSessionsInput = {
    where?: PromptTemplateWhereInput
    data: XOR<PromptTemplateUpdateWithoutSessionsInput, PromptTemplateUncheckedUpdateWithoutSessionsInput>
  }

  export type PromptTemplateUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPromptsNestedInput
    organization?: OrganizationUpdateOneWithoutPromptsNestedInput
  }

  export type PromptTemplateUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    prompts?: PromptTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PromptTemplateCreateManyUserInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WritingSessionCreateManyUserInput = {
    id?: string
    input: string
    output: string
    mode: string
    promptTemplateId?: string | null
    tokensUsed?: number | null
    source?: string
    createdAt?: Date | string
  }

  export type PromptTemplateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutPromptsNestedInput
    sessions?: WritingSessionUpdateManyWithoutPromptTemplateNestedInput
  }

  export type PromptTemplateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WritingSessionUncheckedUpdateManyWithoutPromptTemplateNestedInput
  }

  export type PromptTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WritingSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promptTemplate?: PromptTemplateUpdateOneWithoutSessionsNestedInput
  }

  export type WritingSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    promptTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WritingSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    promptTemplateId?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateCreateManyOrganizationInput = {
    id?: string
    title: string
    systemPrompt: string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptTemplateUpdateManyWithoutUserNestedInput
    sessions?: WritingSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptTemplateUncheckedUpdateManyWithoutUserNestedInput
    sessions?: WritingSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPromptsNestedInput
    sessions?: WritingSessionUpdateManyWithoutPromptTemplateNestedInput
  }

  export type PromptTemplateUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WritingSessionUncheckedUpdateManyWithoutPromptTemplateNestedInput
  }

  export type PromptTemplateUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    variables?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WritingSessionCreateManyPromptTemplateInput = {
    id?: string
    input: string
    output: string
    mode: string
    userId: string
    tokensUsed?: number | null
    source?: string
    createdAt?: Date | string
  }

  export type WritingSessionUpdateWithoutPromptTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type WritingSessionUncheckedUpdateWithoutPromptTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WritingSessionUncheckedUpdateManyWithoutPromptTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
     */
    export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromptTemplateCountOutputTypeDefaultArgs instead
     */
    export type PromptTemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptTemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationDefaultArgs instead
     */
    export type OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromptTemplateDefaultArgs instead
     */
    export type PromptTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WritingSessionDefaultArgs instead
     */
    export type WritingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WritingSessionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}