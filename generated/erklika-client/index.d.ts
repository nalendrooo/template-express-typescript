
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
 * Model SvUser
 * 
 */
export type SvUser = $Result.DefaultSelection<Prisma.$SvUserPayload>
/**
 * Model SvUserType
 * 
 */
export type SvUserType = $Result.DefaultSelection<Prisma.$SvUserTypePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SvUsers
 * const svUsers = await prisma.svUser.findMany()
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
   * // Fetch zero or more SvUsers
   * const svUsers = await prisma.svUser.findMany()
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
   * `prisma.svUser`: Exposes CRUD operations for the **SvUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SvUsers
    * const svUsers = await prisma.svUser.findMany()
    * ```
    */
  get svUser(): Prisma.SvUserDelegate<ExtArgs>;

  /**
   * `prisma.svUserType`: Exposes CRUD operations for the **SvUserType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SvUserTypes
    * const svUserTypes = await prisma.svUserType.findMany()
    * ```
    */
  get svUserType(): Prisma.SvUserTypeDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    SvUser: 'SvUser',
    SvUserType: 'SvUserType'
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
      modelProps: "svUser" | "svUserType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SvUser: {
        payload: Prisma.$SvUserPayload<ExtArgs>
        fields: Prisma.SvUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SvUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SvUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserPayload>
          }
          findFirst: {
            args: Prisma.SvUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SvUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserPayload>
          }
          findMany: {
            args: Prisma.SvUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserPayload>[]
          }
          create: {
            args: Prisma.SvUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserPayload>
          }
          createMany: {
            args: Prisma.SvUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SvUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserPayload>
          }
          update: {
            args: Prisma.SvUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserPayload>
          }
          deleteMany: {
            args: Prisma.SvUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SvUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SvUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserPayload>
          }
          aggregate: {
            args: Prisma.SvUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSvUser>
          }
          groupBy: {
            args: Prisma.SvUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<SvUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SvUserCountArgs<ExtArgs>
            result: $Utils.Optional<SvUserCountAggregateOutputType> | number
          }
        }
      }
      SvUserType: {
        payload: Prisma.$SvUserTypePayload<ExtArgs>
        fields: Prisma.SvUserTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SvUserTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SvUserTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserTypePayload>
          }
          findFirst: {
            args: Prisma.SvUserTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SvUserTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserTypePayload>
          }
          findMany: {
            args: Prisma.SvUserTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserTypePayload>[]
          }
          create: {
            args: Prisma.SvUserTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserTypePayload>
          }
          createMany: {
            args: Prisma.SvUserTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SvUserTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserTypePayload>
          }
          update: {
            args: Prisma.SvUserTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserTypePayload>
          }
          deleteMany: {
            args: Prisma.SvUserTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SvUserTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SvUserTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SvUserTypePayload>
          }
          aggregate: {
            args: Prisma.SvUserTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSvUserType>
          }
          groupBy: {
            args: Prisma.SvUserTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SvUserTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SvUserTypeCountArgs<ExtArgs>
            result: $Utils.Optional<SvUserTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type SvUserTypeCountOutputType
   */

  export type SvUserTypeCountOutputType = {
    SvUsers: number
  }

  export type SvUserTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SvUsers?: boolean | SvUserTypeCountOutputTypeCountSvUsersArgs
  }

  // Custom InputTypes
  /**
   * SvUserTypeCountOutputType without action
   */
  export type SvUserTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserTypeCountOutputType
     */
    select?: SvUserTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SvUserTypeCountOutputType without action
   */
  export type SvUserTypeCountOutputTypeCountSvUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SvUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SvUser
   */

  export type AggregateSvUser = {
    _count: SvUserCountAggregateOutputType | null
    _avg: SvUserAvgAggregateOutputType | null
    _sum: SvUserSumAggregateOutputType | null
    _min: SvUserMinAggregateOutputType | null
    _max: SvUserMaxAggregateOutputType | null
  }

  export type SvUserAvgAggregateOutputType = {
    user_type: number | null
  }

  export type SvUserSumAggregateOutputType = {
    user_type: number | null
  }

  export type SvUserMinAggregateOutputType = {
    gid: string | null
    full_name: string | null
    email: string | null
    phone: string | null
    school: string | null
    user_type: number | null
  }

  export type SvUserMaxAggregateOutputType = {
    gid: string | null
    full_name: string | null
    email: string | null
    phone: string | null
    school: string | null
    user_type: number | null
  }

  export type SvUserCountAggregateOutputType = {
    gid: number
    full_name: number
    email: number
    phone: number
    school: number
    user_type: number
    _all: number
  }


  export type SvUserAvgAggregateInputType = {
    user_type?: true
  }

  export type SvUserSumAggregateInputType = {
    user_type?: true
  }

  export type SvUserMinAggregateInputType = {
    gid?: true
    full_name?: true
    email?: true
    phone?: true
    school?: true
    user_type?: true
  }

  export type SvUserMaxAggregateInputType = {
    gid?: true
    full_name?: true
    email?: true
    phone?: true
    school?: true
    user_type?: true
  }

  export type SvUserCountAggregateInputType = {
    gid?: true
    full_name?: true
    email?: true
    phone?: true
    school?: true
    user_type?: true
    _all?: true
  }

  export type SvUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SvUser to aggregate.
     */
    where?: SvUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SvUsers to fetch.
     */
    orderBy?: SvUserOrderByWithRelationInput | SvUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SvUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SvUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SvUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SvUsers
    **/
    _count?: true | SvUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SvUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SvUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SvUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SvUserMaxAggregateInputType
  }

  export type GetSvUserAggregateType<T extends SvUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSvUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSvUser[P]>
      : GetScalarType<T[P], AggregateSvUser[P]>
  }




  export type SvUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SvUserWhereInput
    orderBy?: SvUserOrderByWithAggregationInput | SvUserOrderByWithAggregationInput[]
    by: SvUserScalarFieldEnum[] | SvUserScalarFieldEnum
    having?: SvUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SvUserCountAggregateInputType | true
    _avg?: SvUserAvgAggregateInputType
    _sum?: SvUserSumAggregateInputType
    _min?: SvUserMinAggregateInputType
    _max?: SvUserMaxAggregateInputType
  }

  export type SvUserGroupByOutputType = {
    gid: string
    full_name: string | null
    email: string | null
    phone: string | null
    school: string | null
    user_type: number | null
    _count: SvUserCountAggregateOutputType | null
    _avg: SvUserAvgAggregateOutputType | null
    _sum: SvUserSumAggregateOutputType | null
    _min: SvUserMinAggregateOutputType | null
    _max: SvUserMaxAggregateOutputType | null
  }

  type GetSvUserGroupByPayload<T extends SvUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SvUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SvUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SvUserGroupByOutputType[P]>
            : GetScalarType<T[P], SvUserGroupByOutputType[P]>
        }
      >
    >


  export type SvUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gid?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    school?: boolean
    user_type?: boolean
    SvUserType?: boolean | SvUser$SvUserTypeArgs<ExtArgs>
  }, ExtArgs["result"]["svUser"]>


  export type SvUserSelectScalar = {
    gid?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    school?: boolean
    user_type?: boolean
  }

  export type SvUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SvUserType?: boolean | SvUser$SvUserTypeArgs<ExtArgs>
  }

  export type $SvUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SvUser"
    objects: {
      SvUserType: Prisma.$SvUserTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      gid: string
      full_name: string | null
      email: string | null
      phone: string | null
      school: string | null
      user_type: number | null
    }, ExtArgs["result"]["svUser"]>
    composites: {}
  }

  type SvUserGetPayload<S extends boolean | null | undefined | SvUserDefaultArgs> = $Result.GetResult<Prisma.$SvUserPayload, S>

  type SvUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SvUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SvUserCountAggregateInputType | true
    }

  export interface SvUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SvUser'], meta: { name: 'SvUser' } }
    /**
     * Find zero or one SvUser that matches the filter.
     * @param {SvUserFindUniqueArgs} args - Arguments to find a SvUser
     * @example
     * // Get one SvUser
     * const svUser = await prisma.svUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SvUserFindUniqueArgs>(args: SelectSubset<T, SvUserFindUniqueArgs<ExtArgs>>): Prisma__SvUserClient<$Result.GetResult<Prisma.$SvUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SvUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SvUserFindUniqueOrThrowArgs} args - Arguments to find a SvUser
     * @example
     * // Get one SvUser
     * const svUser = await prisma.svUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SvUserFindUniqueOrThrowArgs>(args: SelectSubset<T, SvUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SvUserClient<$Result.GetResult<Prisma.$SvUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SvUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserFindFirstArgs} args - Arguments to find a SvUser
     * @example
     * // Get one SvUser
     * const svUser = await prisma.svUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SvUserFindFirstArgs>(args?: SelectSubset<T, SvUserFindFirstArgs<ExtArgs>>): Prisma__SvUserClient<$Result.GetResult<Prisma.$SvUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SvUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserFindFirstOrThrowArgs} args - Arguments to find a SvUser
     * @example
     * // Get one SvUser
     * const svUser = await prisma.svUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SvUserFindFirstOrThrowArgs>(args?: SelectSubset<T, SvUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__SvUserClient<$Result.GetResult<Prisma.$SvUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SvUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SvUsers
     * const svUsers = await prisma.svUser.findMany()
     * 
     * // Get first 10 SvUsers
     * const svUsers = await prisma.svUser.findMany({ take: 10 })
     * 
     * // Only select the `gid`
     * const svUserWithGidOnly = await prisma.svUser.findMany({ select: { gid: true } })
     * 
     */
    findMany<T extends SvUserFindManyArgs>(args?: SelectSubset<T, SvUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SvUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SvUser.
     * @param {SvUserCreateArgs} args - Arguments to create a SvUser.
     * @example
     * // Create one SvUser
     * const SvUser = await prisma.svUser.create({
     *   data: {
     *     // ... data to create a SvUser
     *   }
     * })
     * 
     */
    create<T extends SvUserCreateArgs>(args: SelectSubset<T, SvUserCreateArgs<ExtArgs>>): Prisma__SvUserClient<$Result.GetResult<Prisma.$SvUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SvUsers.
     * @param {SvUserCreateManyArgs} args - Arguments to create many SvUsers.
     * @example
     * // Create many SvUsers
     * const svUser = await prisma.svUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SvUserCreateManyArgs>(args?: SelectSubset<T, SvUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SvUser.
     * @param {SvUserDeleteArgs} args - Arguments to delete one SvUser.
     * @example
     * // Delete one SvUser
     * const SvUser = await prisma.svUser.delete({
     *   where: {
     *     // ... filter to delete one SvUser
     *   }
     * })
     * 
     */
    delete<T extends SvUserDeleteArgs>(args: SelectSubset<T, SvUserDeleteArgs<ExtArgs>>): Prisma__SvUserClient<$Result.GetResult<Prisma.$SvUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SvUser.
     * @param {SvUserUpdateArgs} args - Arguments to update one SvUser.
     * @example
     * // Update one SvUser
     * const svUser = await prisma.svUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SvUserUpdateArgs>(args: SelectSubset<T, SvUserUpdateArgs<ExtArgs>>): Prisma__SvUserClient<$Result.GetResult<Prisma.$SvUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SvUsers.
     * @param {SvUserDeleteManyArgs} args - Arguments to filter SvUsers to delete.
     * @example
     * // Delete a few SvUsers
     * const { count } = await prisma.svUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SvUserDeleteManyArgs>(args?: SelectSubset<T, SvUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SvUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SvUsers
     * const svUser = await prisma.svUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SvUserUpdateManyArgs>(args: SelectSubset<T, SvUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SvUser.
     * @param {SvUserUpsertArgs} args - Arguments to update or create a SvUser.
     * @example
     * // Update or create a SvUser
     * const svUser = await prisma.svUser.upsert({
     *   create: {
     *     // ... data to create a SvUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SvUser we want to update
     *   }
     * })
     */
    upsert<T extends SvUserUpsertArgs>(args: SelectSubset<T, SvUserUpsertArgs<ExtArgs>>): Prisma__SvUserClient<$Result.GetResult<Prisma.$SvUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SvUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserCountArgs} args - Arguments to filter SvUsers to count.
     * @example
     * // Count the number of SvUsers
     * const count = await prisma.svUser.count({
     *   where: {
     *     // ... the filter for the SvUsers we want to count
     *   }
     * })
    **/
    count<T extends SvUserCountArgs>(
      args?: Subset<T, SvUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SvUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SvUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SvUserAggregateArgs>(args: Subset<T, SvUserAggregateArgs>): Prisma.PrismaPromise<GetSvUserAggregateType<T>>

    /**
     * Group by SvUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserGroupByArgs} args - Group by arguments.
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
      T extends SvUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SvUserGroupByArgs['orderBy'] }
        : { orderBy?: SvUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SvUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSvUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SvUser model
   */
  readonly fields: SvUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SvUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SvUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SvUserType<T extends SvUser$SvUserTypeArgs<ExtArgs> = {}>(args?: Subset<T, SvUser$SvUserTypeArgs<ExtArgs>>): Prisma__SvUserTypeClient<$Result.GetResult<Prisma.$SvUserTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the SvUser model
   */ 
  interface SvUserFieldRefs {
    readonly gid: FieldRef<"SvUser", 'String'>
    readonly full_name: FieldRef<"SvUser", 'String'>
    readonly email: FieldRef<"SvUser", 'String'>
    readonly phone: FieldRef<"SvUser", 'String'>
    readonly school: FieldRef<"SvUser", 'String'>
    readonly user_type: FieldRef<"SvUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SvUser findUnique
   */
  export type SvUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
    /**
     * Filter, which SvUser to fetch.
     */
    where: SvUserWhereUniqueInput
  }

  /**
   * SvUser findUniqueOrThrow
   */
  export type SvUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
    /**
     * Filter, which SvUser to fetch.
     */
    where: SvUserWhereUniqueInput
  }

  /**
   * SvUser findFirst
   */
  export type SvUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
    /**
     * Filter, which SvUser to fetch.
     */
    where?: SvUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SvUsers to fetch.
     */
    orderBy?: SvUserOrderByWithRelationInput | SvUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SvUsers.
     */
    cursor?: SvUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SvUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SvUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SvUsers.
     */
    distinct?: SvUserScalarFieldEnum | SvUserScalarFieldEnum[]
  }

  /**
   * SvUser findFirstOrThrow
   */
  export type SvUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
    /**
     * Filter, which SvUser to fetch.
     */
    where?: SvUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SvUsers to fetch.
     */
    orderBy?: SvUserOrderByWithRelationInput | SvUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SvUsers.
     */
    cursor?: SvUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SvUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SvUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SvUsers.
     */
    distinct?: SvUserScalarFieldEnum | SvUserScalarFieldEnum[]
  }

  /**
   * SvUser findMany
   */
  export type SvUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
    /**
     * Filter, which SvUsers to fetch.
     */
    where?: SvUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SvUsers to fetch.
     */
    orderBy?: SvUserOrderByWithRelationInput | SvUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SvUsers.
     */
    cursor?: SvUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SvUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SvUsers.
     */
    skip?: number
    distinct?: SvUserScalarFieldEnum | SvUserScalarFieldEnum[]
  }

  /**
   * SvUser create
   */
  export type SvUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
    /**
     * The data needed to create a SvUser.
     */
    data: XOR<SvUserCreateInput, SvUserUncheckedCreateInput>
  }

  /**
   * SvUser createMany
   */
  export type SvUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SvUsers.
     */
    data: SvUserCreateManyInput | SvUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SvUser update
   */
  export type SvUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
    /**
     * The data needed to update a SvUser.
     */
    data: XOR<SvUserUpdateInput, SvUserUncheckedUpdateInput>
    /**
     * Choose, which SvUser to update.
     */
    where: SvUserWhereUniqueInput
  }

  /**
   * SvUser updateMany
   */
  export type SvUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SvUsers.
     */
    data: XOR<SvUserUpdateManyMutationInput, SvUserUncheckedUpdateManyInput>
    /**
     * Filter which SvUsers to update
     */
    where?: SvUserWhereInput
  }

  /**
   * SvUser upsert
   */
  export type SvUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
    /**
     * The filter to search for the SvUser to update in case it exists.
     */
    where: SvUserWhereUniqueInput
    /**
     * In case the SvUser found by the `where` argument doesn't exist, create a new SvUser with this data.
     */
    create: XOR<SvUserCreateInput, SvUserUncheckedCreateInput>
    /**
     * In case the SvUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SvUserUpdateInput, SvUserUncheckedUpdateInput>
  }

  /**
   * SvUser delete
   */
  export type SvUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
    /**
     * Filter which SvUser to delete.
     */
    where: SvUserWhereUniqueInput
  }

  /**
   * SvUser deleteMany
   */
  export type SvUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SvUsers to delete
     */
    where?: SvUserWhereInput
  }

  /**
   * SvUser.SvUserType
   */
  export type SvUser$SvUserTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
    where?: SvUserTypeWhereInput
  }

  /**
   * SvUser without action
   */
  export type SvUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
  }


  /**
   * Model SvUserType
   */

  export type AggregateSvUserType = {
    _count: SvUserTypeCountAggregateOutputType | null
    _avg: SvUserTypeAvgAggregateOutputType | null
    _sum: SvUserTypeSumAggregateOutputType | null
    _min: SvUserTypeMinAggregateOutputType | null
    _max: SvUserTypeMaxAggregateOutputType | null
  }

  export type SvUserTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type SvUserTypeSumAggregateOutputType = {
    id: number | null
  }

  export type SvUserTypeMinAggregateOutputType = {
    id: number | null
    title_id: string | null
    title_en: string | null
  }

  export type SvUserTypeMaxAggregateOutputType = {
    id: number | null
    title_id: string | null
    title_en: string | null
  }

  export type SvUserTypeCountAggregateOutputType = {
    id: number
    title_id: number
    title_en: number
    _all: number
  }


  export type SvUserTypeAvgAggregateInputType = {
    id?: true
  }

  export type SvUserTypeSumAggregateInputType = {
    id?: true
  }

  export type SvUserTypeMinAggregateInputType = {
    id?: true
    title_id?: true
    title_en?: true
  }

  export type SvUserTypeMaxAggregateInputType = {
    id?: true
    title_id?: true
    title_en?: true
  }

  export type SvUserTypeCountAggregateInputType = {
    id?: true
    title_id?: true
    title_en?: true
    _all?: true
  }

  export type SvUserTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SvUserType to aggregate.
     */
    where?: SvUserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SvUserTypes to fetch.
     */
    orderBy?: SvUserTypeOrderByWithRelationInput | SvUserTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SvUserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SvUserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SvUserTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SvUserTypes
    **/
    _count?: true | SvUserTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SvUserTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SvUserTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SvUserTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SvUserTypeMaxAggregateInputType
  }

  export type GetSvUserTypeAggregateType<T extends SvUserTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSvUserType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSvUserType[P]>
      : GetScalarType<T[P], AggregateSvUserType[P]>
  }




  export type SvUserTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SvUserTypeWhereInput
    orderBy?: SvUserTypeOrderByWithAggregationInput | SvUserTypeOrderByWithAggregationInput[]
    by: SvUserTypeScalarFieldEnum[] | SvUserTypeScalarFieldEnum
    having?: SvUserTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SvUserTypeCountAggregateInputType | true
    _avg?: SvUserTypeAvgAggregateInputType
    _sum?: SvUserTypeSumAggregateInputType
    _min?: SvUserTypeMinAggregateInputType
    _max?: SvUserTypeMaxAggregateInputType
  }

  export type SvUserTypeGroupByOutputType = {
    id: number
    title_id: string | null
    title_en: string | null
    _count: SvUserTypeCountAggregateOutputType | null
    _avg: SvUserTypeAvgAggregateOutputType | null
    _sum: SvUserTypeSumAggregateOutputType | null
    _min: SvUserTypeMinAggregateOutputType | null
    _max: SvUserTypeMaxAggregateOutputType | null
  }

  type GetSvUserTypeGroupByPayload<T extends SvUserTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SvUserTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SvUserTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SvUserTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SvUserTypeGroupByOutputType[P]>
        }
      >
    >


  export type SvUserTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_id?: boolean
    title_en?: boolean
    SvUsers?: boolean | SvUserType$SvUsersArgs<ExtArgs>
    _count?: boolean | SvUserTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["svUserType"]>


  export type SvUserTypeSelectScalar = {
    id?: boolean
    title_id?: boolean
    title_en?: boolean
  }

  export type SvUserTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SvUsers?: boolean | SvUserType$SvUsersArgs<ExtArgs>
    _count?: boolean | SvUserTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SvUserTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SvUserType"
    objects: {
      SvUsers: Prisma.$SvUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title_id: string | null
      title_en: string | null
    }, ExtArgs["result"]["svUserType"]>
    composites: {}
  }

  type SvUserTypeGetPayload<S extends boolean | null | undefined | SvUserTypeDefaultArgs> = $Result.GetResult<Prisma.$SvUserTypePayload, S>

  type SvUserTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SvUserTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SvUserTypeCountAggregateInputType | true
    }

  export interface SvUserTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SvUserType'], meta: { name: 'SvUserType' } }
    /**
     * Find zero or one SvUserType that matches the filter.
     * @param {SvUserTypeFindUniqueArgs} args - Arguments to find a SvUserType
     * @example
     * // Get one SvUserType
     * const svUserType = await prisma.svUserType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SvUserTypeFindUniqueArgs>(args: SelectSubset<T, SvUserTypeFindUniqueArgs<ExtArgs>>): Prisma__SvUserTypeClient<$Result.GetResult<Prisma.$SvUserTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SvUserType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SvUserTypeFindUniqueOrThrowArgs} args - Arguments to find a SvUserType
     * @example
     * // Get one SvUserType
     * const svUserType = await prisma.svUserType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SvUserTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, SvUserTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SvUserTypeClient<$Result.GetResult<Prisma.$SvUserTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SvUserType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserTypeFindFirstArgs} args - Arguments to find a SvUserType
     * @example
     * // Get one SvUserType
     * const svUserType = await prisma.svUserType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SvUserTypeFindFirstArgs>(args?: SelectSubset<T, SvUserTypeFindFirstArgs<ExtArgs>>): Prisma__SvUserTypeClient<$Result.GetResult<Prisma.$SvUserTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SvUserType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserTypeFindFirstOrThrowArgs} args - Arguments to find a SvUserType
     * @example
     * // Get one SvUserType
     * const svUserType = await prisma.svUserType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SvUserTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, SvUserTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SvUserTypeClient<$Result.GetResult<Prisma.$SvUserTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SvUserTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SvUserTypes
     * const svUserTypes = await prisma.svUserType.findMany()
     * 
     * // Get first 10 SvUserTypes
     * const svUserTypes = await prisma.svUserType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const svUserTypeWithIdOnly = await prisma.svUserType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SvUserTypeFindManyArgs>(args?: SelectSubset<T, SvUserTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SvUserTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SvUserType.
     * @param {SvUserTypeCreateArgs} args - Arguments to create a SvUserType.
     * @example
     * // Create one SvUserType
     * const SvUserType = await prisma.svUserType.create({
     *   data: {
     *     // ... data to create a SvUserType
     *   }
     * })
     * 
     */
    create<T extends SvUserTypeCreateArgs>(args: SelectSubset<T, SvUserTypeCreateArgs<ExtArgs>>): Prisma__SvUserTypeClient<$Result.GetResult<Prisma.$SvUserTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SvUserTypes.
     * @param {SvUserTypeCreateManyArgs} args - Arguments to create many SvUserTypes.
     * @example
     * // Create many SvUserTypes
     * const svUserType = await prisma.svUserType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SvUserTypeCreateManyArgs>(args?: SelectSubset<T, SvUserTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SvUserType.
     * @param {SvUserTypeDeleteArgs} args - Arguments to delete one SvUserType.
     * @example
     * // Delete one SvUserType
     * const SvUserType = await prisma.svUserType.delete({
     *   where: {
     *     // ... filter to delete one SvUserType
     *   }
     * })
     * 
     */
    delete<T extends SvUserTypeDeleteArgs>(args: SelectSubset<T, SvUserTypeDeleteArgs<ExtArgs>>): Prisma__SvUserTypeClient<$Result.GetResult<Prisma.$SvUserTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SvUserType.
     * @param {SvUserTypeUpdateArgs} args - Arguments to update one SvUserType.
     * @example
     * // Update one SvUserType
     * const svUserType = await prisma.svUserType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SvUserTypeUpdateArgs>(args: SelectSubset<T, SvUserTypeUpdateArgs<ExtArgs>>): Prisma__SvUserTypeClient<$Result.GetResult<Prisma.$SvUserTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SvUserTypes.
     * @param {SvUserTypeDeleteManyArgs} args - Arguments to filter SvUserTypes to delete.
     * @example
     * // Delete a few SvUserTypes
     * const { count } = await prisma.svUserType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SvUserTypeDeleteManyArgs>(args?: SelectSubset<T, SvUserTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SvUserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SvUserTypes
     * const svUserType = await prisma.svUserType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SvUserTypeUpdateManyArgs>(args: SelectSubset<T, SvUserTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SvUserType.
     * @param {SvUserTypeUpsertArgs} args - Arguments to update or create a SvUserType.
     * @example
     * // Update or create a SvUserType
     * const svUserType = await prisma.svUserType.upsert({
     *   create: {
     *     // ... data to create a SvUserType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SvUserType we want to update
     *   }
     * })
     */
    upsert<T extends SvUserTypeUpsertArgs>(args: SelectSubset<T, SvUserTypeUpsertArgs<ExtArgs>>): Prisma__SvUserTypeClient<$Result.GetResult<Prisma.$SvUserTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SvUserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserTypeCountArgs} args - Arguments to filter SvUserTypes to count.
     * @example
     * // Count the number of SvUserTypes
     * const count = await prisma.svUserType.count({
     *   where: {
     *     // ... the filter for the SvUserTypes we want to count
     *   }
     * })
    **/
    count<T extends SvUserTypeCountArgs>(
      args?: Subset<T, SvUserTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SvUserTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SvUserType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SvUserTypeAggregateArgs>(args: Subset<T, SvUserTypeAggregateArgs>): Prisma.PrismaPromise<GetSvUserTypeAggregateType<T>>

    /**
     * Group by SvUserType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SvUserTypeGroupByArgs} args - Group by arguments.
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
      T extends SvUserTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SvUserTypeGroupByArgs['orderBy'] }
        : { orderBy?: SvUserTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SvUserTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSvUserTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SvUserType model
   */
  readonly fields: SvUserTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SvUserType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SvUserTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SvUsers<T extends SvUserType$SvUsersArgs<ExtArgs> = {}>(args?: Subset<T, SvUserType$SvUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SvUserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SvUserType model
   */ 
  interface SvUserTypeFieldRefs {
    readonly id: FieldRef<"SvUserType", 'Int'>
    readonly title_id: FieldRef<"SvUserType", 'String'>
    readonly title_en: FieldRef<"SvUserType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SvUserType findUnique
   */
  export type SvUserTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
    /**
     * Filter, which SvUserType to fetch.
     */
    where: SvUserTypeWhereUniqueInput
  }

  /**
   * SvUserType findUniqueOrThrow
   */
  export type SvUserTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
    /**
     * Filter, which SvUserType to fetch.
     */
    where: SvUserTypeWhereUniqueInput
  }

  /**
   * SvUserType findFirst
   */
  export type SvUserTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
    /**
     * Filter, which SvUserType to fetch.
     */
    where?: SvUserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SvUserTypes to fetch.
     */
    orderBy?: SvUserTypeOrderByWithRelationInput | SvUserTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SvUserTypes.
     */
    cursor?: SvUserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SvUserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SvUserTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SvUserTypes.
     */
    distinct?: SvUserTypeScalarFieldEnum | SvUserTypeScalarFieldEnum[]
  }

  /**
   * SvUserType findFirstOrThrow
   */
  export type SvUserTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
    /**
     * Filter, which SvUserType to fetch.
     */
    where?: SvUserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SvUserTypes to fetch.
     */
    orderBy?: SvUserTypeOrderByWithRelationInput | SvUserTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SvUserTypes.
     */
    cursor?: SvUserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SvUserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SvUserTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SvUserTypes.
     */
    distinct?: SvUserTypeScalarFieldEnum | SvUserTypeScalarFieldEnum[]
  }

  /**
   * SvUserType findMany
   */
  export type SvUserTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
    /**
     * Filter, which SvUserTypes to fetch.
     */
    where?: SvUserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SvUserTypes to fetch.
     */
    orderBy?: SvUserTypeOrderByWithRelationInput | SvUserTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SvUserTypes.
     */
    cursor?: SvUserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SvUserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SvUserTypes.
     */
    skip?: number
    distinct?: SvUserTypeScalarFieldEnum | SvUserTypeScalarFieldEnum[]
  }

  /**
   * SvUserType create
   */
  export type SvUserTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a SvUserType.
     */
    data: XOR<SvUserTypeCreateInput, SvUserTypeUncheckedCreateInput>
  }

  /**
   * SvUserType createMany
   */
  export type SvUserTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SvUserTypes.
     */
    data: SvUserTypeCreateManyInput | SvUserTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SvUserType update
   */
  export type SvUserTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a SvUserType.
     */
    data: XOR<SvUserTypeUpdateInput, SvUserTypeUncheckedUpdateInput>
    /**
     * Choose, which SvUserType to update.
     */
    where: SvUserTypeWhereUniqueInput
  }

  /**
   * SvUserType updateMany
   */
  export type SvUserTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SvUserTypes.
     */
    data: XOR<SvUserTypeUpdateManyMutationInput, SvUserTypeUncheckedUpdateManyInput>
    /**
     * Filter which SvUserTypes to update
     */
    where?: SvUserTypeWhereInput
  }

  /**
   * SvUserType upsert
   */
  export type SvUserTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the SvUserType to update in case it exists.
     */
    where: SvUserTypeWhereUniqueInput
    /**
     * In case the SvUserType found by the `where` argument doesn't exist, create a new SvUserType with this data.
     */
    create: XOR<SvUserTypeCreateInput, SvUserTypeUncheckedCreateInput>
    /**
     * In case the SvUserType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SvUserTypeUpdateInput, SvUserTypeUncheckedUpdateInput>
  }

  /**
   * SvUserType delete
   */
  export type SvUserTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
    /**
     * Filter which SvUserType to delete.
     */
    where: SvUserTypeWhereUniqueInput
  }

  /**
   * SvUserType deleteMany
   */
  export type SvUserTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SvUserTypes to delete
     */
    where?: SvUserTypeWhereInput
  }

  /**
   * SvUserType.SvUsers
   */
  export type SvUserType$SvUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUser
     */
    select?: SvUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserInclude<ExtArgs> | null
    where?: SvUserWhereInput
    orderBy?: SvUserOrderByWithRelationInput | SvUserOrderByWithRelationInput[]
    cursor?: SvUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SvUserScalarFieldEnum | SvUserScalarFieldEnum[]
  }

  /**
   * SvUserType without action
   */
  export type SvUserTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SvUserType
     */
    select?: SvUserTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SvUserTypeInclude<ExtArgs> | null
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


  export const SvUserScalarFieldEnum: {
    gid: 'gid',
    full_name: 'full_name',
    email: 'email',
    phone: 'phone',
    school: 'school',
    user_type: 'user_type'
  };

  export type SvUserScalarFieldEnum = (typeof SvUserScalarFieldEnum)[keyof typeof SvUserScalarFieldEnum]


  export const SvUserTypeScalarFieldEnum: {
    id: 'id',
    title_id: 'title_id',
    title_en: 'title_en'
  };

  export type SvUserTypeScalarFieldEnum = (typeof SvUserTypeScalarFieldEnum)[keyof typeof SvUserTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SvUserWhereInput = {
    AND?: SvUserWhereInput | SvUserWhereInput[]
    OR?: SvUserWhereInput[]
    NOT?: SvUserWhereInput | SvUserWhereInput[]
    gid?: StringFilter<"SvUser"> | string
    full_name?: StringNullableFilter<"SvUser"> | string | null
    email?: StringNullableFilter<"SvUser"> | string | null
    phone?: StringNullableFilter<"SvUser"> | string | null
    school?: StringNullableFilter<"SvUser"> | string | null
    user_type?: IntNullableFilter<"SvUser"> | number | null
    SvUserType?: XOR<SvUserTypeNullableRelationFilter, SvUserTypeWhereInput> | null
  }

  export type SvUserOrderByWithRelationInput = {
    gid?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    user_type?: SortOrderInput | SortOrder
    SvUserType?: SvUserTypeOrderByWithRelationInput
  }

  export type SvUserWhereUniqueInput = Prisma.AtLeast<{
    gid?: string
    email?: string
    AND?: SvUserWhereInput | SvUserWhereInput[]
    OR?: SvUserWhereInput[]
    NOT?: SvUserWhereInput | SvUserWhereInput[]
    full_name?: StringNullableFilter<"SvUser"> | string | null
    phone?: StringNullableFilter<"SvUser"> | string | null
    school?: StringNullableFilter<"SvUser"> | string | null
    user_type?: IntNullableFilter<"SvUser"> | number | null
    SvUserType?: XOR<SvUserTypeNullableRelationFilter, SvUserTypeWhereInput> | null
  }, "gid" | "email">

  export type SvUserOrderByWithAggregationInput = {
    gid?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    user_type?: SortOrderInput | SortOrder
    _count?: SvUserCountOrderByAggregateInput
    _avg?: SvUserAvgOrderByAggregateInput
    _max?: SvUserMaxOrderByAggregateInput
    _min?: SvUserMinOrderByAggregateInput
    _sum?: SvUserSumOrderByAggregateInput
  }

  export type SvUserScalarWhereWithAggregatesInput = {
    AND?: SvUserScalarWhereWithAggregatesInput | SvUserScalarWhereWithAggregatesInput[]
    OR?: SvUserScalarWhereWithAggregatesInput[]
    NOT?: SvUserScalarWhereWithAggregatesInput | SvUserScalarWhereWithAggregatesInput[]
    gid?: StringWithAggregatesFilter<"SvUser"> | string
    full_name?: StringNullableWithAggregatesFilter<"SvUser"> | string | null
    email?: StringNullableWithAggregatesFilter<"SvUser"> | string | null
    phone?: StringNullableWithAggregatesFilter<"SvUser"> | string | null
    school?: StringNullableWithAggregatesFilter<"SvUser"> | string | null
    user_type?: IntNullableWithAggregatesFilter<"SvUser"> | number | null
  }

  export type SvUserTypeWhereInput = {
    AND?: SvUserTypeWhereInput | SvUserTypeWhereInput[]
    OR?: SvUserTypeWhereInput[]
    NOT?: SvUserTypeWhereInput | SvUserTypeWhereInput[]
    id?: IntFilter<"SvUserType"> | number
    title_id?: StringNullableFilter<"SvUserType"> | string | null
    title_en?: StringNullableFilter<"SvUserType"> | string | null
    SvUsers?: SvUserListRelationFilter
  }

  export type SvUserTypeOrderByWithRelationInput = {
    id?: SortOrder
    title_id?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    SvUsers?: SvUserOrderByRelationAggregateInput
  }

  export type SvUserTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SvUserTypeWhereInput | SvUserTypeWhereInput[]
    OR?: SvUserTypeWhereInput[]
    NOT?: SvUserTypeWhereInput | SvUserTypeWhereInput[]
    title_id?: StringNullableFilter<"SvUserType"> | string | null
    title_en?: StringNullableFilter<"SvUserType"> | string | null
    SvUsers?: SvUserListRelationFilter
  }, "id">

  export type SvUserTypeOrderByWithAggregationInput = {
    id?: SortOrder
    title_id?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    _count?: SvUserTypeCountOrderByAggregateInput
    _avg?: SvUserTypeAvgOrderByAggregateInput
    _max?: SvUserTypeMaxOrderByAggregateInput
    _min?: SvUserTypeMinOrderByAggregateInput
    _sum?: SvUserTypeSumOrderByAggregateInput
  }

  export type SvUserTypeScalarWhereWithAggregatesInput = {
    AND?: SvUserTypeScalarWhereWithAggregatesInput | SvUserTypeScalarWhereWithAggregatesInput[]
    OR?: SvUserTypeScalarWhereWithAggregatesInput[]
    NOT?: SvUserTypeScalarWhereWithAggregatesInput | SvUserTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SvUserType"> | number
    title_id?: StringNullableWithAggregatesFilter<"SvUserType"> | string | null
    title_en?: StringNullableWithAggregatesFilter<"SvUserType"> | string | null
  }

  export type SvUserCreateInput = {
    gid: string
    full_name?: string | null
    email?: string | null
    phone?: string | null
    school?: string | null
    SvUserType?: SvUserTypeCreateNestedOneWithoutSvUsersInput
  }

  export type SvUserUncheckedCreateInput = {
    gid: string
    full_name?: string | null
    email?: string | null
    phone?: string | null
    school?: string | null
    user_type?: number | null
  }

  export type SvUserUpdateInput = {
    gid?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    SvUserType?: SvUserTypeUpdateOneWithoutSvUsersNestedInput
  }

  export type SvUserUncheckedUpdateInput = {
    gid?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SvUserCreateManyInput = {
    gid: string
    full_name?: string | null
    email?: string | null
    phone?: string | null
    school?: string | null
    user_type?: number | null
  }

  export type SvUserUpdateManyMutationInput = {
    gid?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SvUserUncheckedUpdateManyInput = {
    gid?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SvUserTypeCreateInput = {
    id: number
    title_id?: string | null
    title_en?: string | null
    SvUsers?: SvUserCreateNestedManyWithoutSvUserTypeInput
  }

  export type SvUserTypeUncheckedCreateInput = {
    id: number
    title_id?: string | null
    title_en?: string | null
    SvUsers?: SvUserUncheckedCreateNestedManyWithoutSvUserTypeInput
  }

  export type SvUserTypeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    SvUsers?: SvUserUpdateManyWithoutSvUserTypeNestedInput
  }

  export type SvUserTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    SvUsers?: SvUserUncheckedUpdateManyWithoutSvUserTypeNestedInput
  }

  export type SvUserTypeCreateManyInput = {
    id: number
    title_id?: string | null
    title_en?: string | null
  }

  export type SvUserTypeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SvUserTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SvUserTypeNullableRelationFilter = {
    is?: SvUserTypeWhereInput | null
    isNot?: SvUserTypeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SvUserCountOrderByAggregateInput = {
    gid?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    school?: SortOrder
    user_type?: SortOrder
  }

  export type SvUserAvgOrderByAggregateInput = {
    user_type?: SortOrder
  }

  export type SvUserMaxOrderByAggregateInput = {
    gid?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    school?: SortOrder
    user_type?: SortOrder
  }

  export type SvUserMinOrderByAggregateInput = {
    gid?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    school?: SortOrder
    user_type?: SortOrder
  }

  export type SvUserSumOrderByAggregateInput = {
    user_type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SvUserListRelationFilter = {
    every?: SvUserWhereInput
    some?: SvUserWhereInput
    none?: SvUserWhereInput
  }

  export type SvUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SvUserTypeCountOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    title_en?: SortOrder
  }

  export type SvUserTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SvUserTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    title_en?: SortOrder
  }

  export type SvUserTypeMinOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    title_en?: SortOrder
  }

  export type SvUserTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SvUserTypeCreateNestedOneWithoutSvUsersInput = {
    create?: XOR<SvUserTypeCreateWithoutSvUsersInput, SvUserTypeUncheckedCreateWithoutSvUsersInput>
    connectOrCreate?: SvUserTypeCreateOrConnectWithoutSvUsersInput
    connect?: SvUserTypeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SvUserTypeUpdateOneWithoutSvUsersNestedInput = {
    create?: XOR<SvUserTypeCreateWithoutSvUsersInput, SvUserTypeUncheckedCreateWithoutSvUsersInput>
    connectOrCreate?: SvUserTypeCreateOrConnectWithoutSvUsersInput
    upsert?: SvUserTypeUpsertWithoutSvUsersInput
    disconnect?: SvUserTypeWhereInput | boolean
    delete?: SvUserTypeWhereInput | boolean
    connect?: SvUserTypeWhereUniqueInput
    update?: XOR<XOR<SvUserTypeUpdateToOneWithWhereWithoutSvUsersInput, SvUserTypeUpdateWithoutSvUsersInput>, SvUserTypeUncheckedUpdateWithoutSvUsersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SvUserCreateNestedManyWithoutSvUserTypeInput = {
    create?: XOR<SvUserCreateWithoutSvUserTypeInput, SvUserUncheckedCreateWithoutSvUserTypeInput> | SvUserCreateWithoutSvUserTypeInput[] | SvUserUncheckedCreateWithoutSvUserTypeInput[]
    connectOrCreate?: SvUserCreateOrConnectWithoutSvUserTypeInput | SvUserCreateOrConnectWithoutSvUserTypeInput[]
    createMany?: SvUserCreateManySvUserTypeInputEnvelope
    connect?: SvUserWhereUniqueInput | SvUserWhereUniqueInput[]
  }

  export type SvUserUncheckedCreateNestedManyWithoutSvUserTypeInput = {
    create?: XOR<SvUserCreateWithoutSvUserTypeInput, SvUserUncheckedCreateWithoutSvUserTypeInput> | SvUserCreateWithoutSvUserTypeInput[] | SvUserUncheckedCreateWithoutSvUserTypeInput[]
    connectOrCreate?: SvUserCreateOrConnectWithoutSvUserTypeInput | SvUserCreateOrConnectWithoutSvUserTypeInput[]
    createMany?: SvUserCreateManySvUserTypeInputEnvelope
    connect?: SvUserWhereUniqueInput | SvUserWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SvUserUpdateManyWithoutSvUserTypeNestedInput = {
    create?: XOR<SvUserCreateWithoutSvUserTypeInput, SvUserUncheckedCreateWithoutSvUserTypeInput> | SvUserCreateWithoutSvUserTypeInput[] | SvUserUncheckedCreateWithoutSvUserTypeInput[]
    connectOrCreate?: SvUserCreateOrConnectWithoutSvUserTypeInput | SvUserCreateOrConnectWithoutSvUserTypeInput[]
    upsert?: SvUserUpsertWithWhereUniqueWithoutSvUserTypeInput | SvUserUpsertWithWhereUniqueWithoutSvUserTypeInput[]
    createMany?: SvUserCreateManySvUserTypeInputEnvelope
    set?: SvUserWhereUniqueInput | SvUserWhereUniqueInput[]
    disconnect?: SvUserWhereUniqueInput | SvUserWhereUniqueInput[]
    delete?: SvUserWhereUniqueInput | SvUserWhereUniqueInput[]
    connect?: SvUserWhereUniqueInput | SvUserWhereUniqueInput[]
    update?: SvUserUpdateWithWhereUniqueWithoutSvUserTypeInput | SvUserUpdateWithWhereUniqueWithoutSvUserTypeInput[]
    updateMany?: SvUserUpdateManyWithWhereWithoutSvUserTypeInput | SvUserUpdateManyWithWhereWithoutSvUserTypeInput[]
    deleteMany?: SvUserScalarWhereInput | SvUserScalarWhereInput[]
  }

  export type SvUserUncheckedUpdateManyWithoutSvUserTypeNestedInput = {
    create?: XOR<SvUserCreateWithoutSvUserTypeInput, SvUserUncheckedCreateWithoutSvUserTypeInput> | SvUserCreateWithoutSvUserTypeInput[] | SvUserUncheckedCreateWithoutSvUserTypeInput[]
    connectOrCreate?: SvUserCreateOrConnectWithoutSvUserTypeInput | SvUserCreateOrConnectWithoutSvUserTypeInput[]
    upsert?: SvUserUpsertWithWhereUniqueWithoutSvUserTypeInput | SvUserUpsertWithWhereUniqueWithoutSvUserTypeInput[]
    createMany?: SvUserCreateManySvUserTypeInputEnvelope
    set?: SvUserWhereUniqueInput | SvUserWhereUniqueInput[]
    disconnect?: SvUserWhereUniqueInput | SvUserWhereUniqueInput[]
    delete?: SvUserWhereUniqueInput | SvUserWhereUniqueInput[]
    connect?: SvUserWhereUniqueInput | SvUserWhereUniqueInput[]
    update?: SvUserUpdateWithWhereUniqueWithoutSvUserTypeInput | SvUserUpdateWithWhereUniqueWithoutSvUserTypeInput[]
    updateMany?: SvUserUpdateManyWithWhereWithoutSvUserTypeInput | SvUserUpdateManyWithWhereWithoutSvUserTypeInput[]
    deleteMany?: SvUserScalarWhereInput | SvUserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SvUserTypeCreateWithoutSvUsersInput = {
    id: number
    title_id?: string | null
    title_en?: string | null
  }

  export type SvUserTypeUncheckedCreateWithoutSvUsersInput = {
    id: number
    title_id?: string | null
    title_en?: string | null
  }

  export type SvUserTypeCreateOrConnectWithoutSvUsersInput = {
    where: SvUserTypeWhereUniqueInput
    create: XOR<SvUserTypeCreateWithoutSvUsersInput, SvUserTypeUncheckedCreateWithoutSvUsersInput>
  }

  export type SvUserTypeUpsertWithoutSvUsersInput = {
    update: XOR<SvUserTypeUpdateWithoutSvUsersInput, SvUserTypeUncheckedUpdateWithoutSvUsersInput>
    create: XOR<SvUserTypeCreateWithoutSvUsersInput, SvUserTypeUncheckedCreateWithoutSvUsersInput>
    where?: SvUserTypeWhereInput
  }

  export type SvUserTypeUpdateToOneWithWhereWithoutSvUsersInput = {
    where?: SvUserTypeWhereInput
    data: XOR<SvUserTypeUpdateWithoutSvUsersInput, SvUserTypeUncheckedUpdateWithoutSvUsersInput>
  }

  export type SvUserTypeUpdateWithoutSvUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SvUserTypeUncheckedUpdateWithoutSvUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SvUserCreateWithoutSvUserTypeInput = {
    gid: string
    full_name?: string | null
    email?: string | null
    phone?: string | null
    school?: string | null
  }

  export type SvUserUncheckedCreateWithoutSvUserTypeInput = {
    gid: string
    full_name?: string | null
    email?: string | null
    phone?: string | null
    school?: string | null
  }

  export type SvUserCreateOrConnectWithoutSvUserTypeInput = {
    where: SvUserWhereUniqueInput
    create: XOR<SvUserCreateWithoutSvUserTypeInput, SvUserUncheckedCreateWithoutSvUserTypeInput>
  }

  export type SvUserCreateManySvUserTypeInputEnvelope = {
    data: SvUserCreateManySvUserTypeInput | SvUserCreateManySvUserTypeInput[]
    skipDuplicates?: boolean
  }

  export type SvUserUpsertWithWhereUniqueWithoutSvUserTypeInput = {
    where: SvUserWhereUniqueInput
    update: XOR<SvUserUpdateWithoutSvUserTypeInput, SvUserUncheckedUpdateWithoutSvUserTypeInput>
    create: XOR<SvUserCreateWithoutSvUserTypeInput, SvUserUncheckedCreateWithoutSvUserTypeInput>
  }

  export type SvUserUpdateWithWhereUniqueWithoutSvUserTypeInput = {
    where: SvUserWhereUniqueInput
    data: XOR<SvUserUpdateWithoutSvUserTypeInput, SvUserUncheckedUpdateWithoutSvUserTypeInput>
  }

  export type SvUserUpdateManyWithWhereWithoutSvUserTypeInput = {
    where: SvUserScalarWhereInput
    data: XOR<SvUserUpdateManyMutationInput, SvUserUncheckedUpdateManyWithoutSvUserTypeInput>
  }

  export type SvUserScalarWhereInput = {
    AND?: SvUserScalarWhereInput | SvUserScalarWhereInput[]
    OR?: SvUserScalarWhereInput[]
    NOT?: SvUserScalarWhereInput | SvUserScalarWhereInput[]
    gid?: StringFilter<"SvUser"> | string
    full_name?: StringNullableFilter<"SvUser"> | string | null
    email?: StringNullableFilter<"SvUser"> | string | null
    phone?: StringNullableFilter<"SvUser"> | string | null
    school?: StringNullableFilter<"SvUser"> | string | null
    user_type?: IntNullableFilter<"SvUser"> | number | null
  }

  export type SvUserCreateManySvUserTypeInput = {
    gid: string
    full_name?: string | null
    email?: string | null
    phone?: string | null
    school?: string | null
  }

  export type SvUserUpdateWithoutSvUserTypeInput = {
    gid?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SvUserUncheckedUpdateWithoutSvUserTypeInput = {
    gid?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SvUserUncheckedUpdateManyWithoutSvUserTypeInput = {
    gid?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SvUserTypeCountOutputTypeDefaultArgs instead
     */
    export type SvUserTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SvUserTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SvUserDefaultArgs instead
     */
    export type SvUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SvUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SvUserTypeDefaultArgs instead
     */
    export type SvUserTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SvUserTypeDefaultArgs<ExtArgs>

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