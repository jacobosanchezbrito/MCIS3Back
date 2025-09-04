
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model StockLog
 * 
 */
export type StockLog = $Result.DefaultSelection<Prisma.$StockLogPayload>
/**
 * Model Alerta
 * 
 */
export type Alerta = $Result.DefaultSelection<Prisma.$AlertaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductEstado: {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO',
  AGOTADO: 'AGOTADO'
};

export type ProductEstado = (typeof ProductEstado)[keyof typeof ProductEstado]


export const LogTipo: {
  ENTRADA: 'ENTRADA',
  SALIDA: 'SALIDA'
};

export type LogTipo = (typeof LogTipo)[keyof typeof LogTipo]

}

export type ProductEstado = $Enums.ProductEstado

export const ProductEstado: typeof $Enums.ProductEstado

export type LogTipo = $Enums.LogTipo

export const LogTipo: typeof $Enums.LogTipo

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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.stockLog`: Exposes CRUD operations for the **StockLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockLogs
    * const stockLogs = await prisma.stockLog.findMany()
    * ```
    */
  get stockLog(): Prisma.StockLogDelegate<ExtArgs>;

  /**
   * `prisma.alerta`: Exposes CRUD operations for the **Alerta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alertas
    * const alertas = await prisma.alerta.findMany()
    * ```
    */
  get alerta(): Prisma.AlertaDelegate<ExtArgs>;
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
    Product: 'Product',
    StockLog: 'StockLog',
    Alerta: 'Alerta'
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
      modelProps: "user" | "product" | "stockLog" | "alerta"
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
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      StockLog: {
        payload: Prisma.$StockLogPayload<ExtArgs>
        fields: Prisma.StockLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLogPayload>
          }
          findFirst: {
            args: Prisma.StockLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLogPayload>
          }
          findMany: {
            args: Prisma.StockLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLogPayload>[]
          }
          create: {
            args: Prisma.StockLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLogPayload>
          }
          createMany: {
            args: Prisma.StockLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLogPayload>[]
          }
          delete: {
            args: Prisma.StockLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLogPayload>
          }
          update: {
            args: Prisma.StockLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLogPayload>
          }
          deleteMany: {
            args: Prisma.StockLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLogPayload>
          }
          aggregate: {
            args: Prisma.StockLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockLog>
          }
          groupBy: {
            args: Prisma.StockLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockLogCountArgs<ExtArgs>
            result: $Utils.Optional<StockLogCountAggregateOutputType> | number
          }
        }
      }
      Alerta: {
        payload: Prisma.$AlertaPayload<ExtArgs>
        fields: Prisma.AlertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          findFirst: {
            args: Prisma.AlertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          findMany: {
            args: Prisma.AlertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>[]
          }
          create: {
            args: Prisma.AlertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          createMany: {
            args: Prisma.AlertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>[]
          }
          delete: {
            args: Prisma.AlertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          update: {
            args: Prisma.AlertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          deleteMany: {
            args: Prisma.AlertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          aggregate: {
            args: Prisma.AlertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlerta>
          }
          groupBy: {
            args: Prisma.AlertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertaCountArgs<ExtArgs>
            result: $Utils.Optional<AlertaCountAggregateOutputType> | number
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    StockLogs: number
    Alertas: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StockLogs?: boolean | ProductCountOutputTypeCountStockLogsArgs
    Alertas?: boolean | ProductCountOutputTypeCountAlertasArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLogWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAlertasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    failedAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    failedAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    rol: string | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
    createdAt: Date | null
    updatedAt: Date | null
    verificado: boolean | null
    verificationCode: string | null
    verificationExpires: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    failedAttempts: number | null
    lockUntil: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    rol: string | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
    createdAt: Date | null
    updatedAt: Date | null
    verificado: boolean | null
    verificationCode: string | null
    verificationExpires: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    failedAttempts: number | null
    lockUntil: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    rol: number
    nombre: number
    direccion: number
    telefono: number
    createdAt: number
    updatedAt: number
    verificado: number
    verificationCode: number
    verificationExpires: number
    resetToken: number
    resetTokenExpiry: number
    failedAttempts: number
    lockUntil: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    failedAttempts?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    failedAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    rol?: true
    nombre?: true
    direccion?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
    verificado?: true
    verificationCode?: true
    verificationExpires?: true
    resetToken?: true
    resetTokenExpiry?: true
    failedAttempts?: true
    lockUntil?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    rol?: true
    nombre?: true
    direccion?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
    verificado?: true
    verificationCode?: true
    verificationExpires?: true
    resetToken?: true
    resetTokenExpiry?: true
    failedAttempts?: true
    lockUntil?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    rol?: true
    nombre?: true
    direccion?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
    verificado?: true
    verificationCode?: true
    verificationExpires?: true
    resetToken?: true
    resetTokenExpiry?: true
    failedAttempts?: true
    lockUntil?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    rol: string
    nombre: string
    direccion: string
    telefono: string
    createdAt: Date
    updatedAt: Date
    verificado: boolean
    verificationCode: string | null
    verificationExpires: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    failedAttempts: number
    lockUntil: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    rol?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificado?: boolean
    verificationCode?: boolean
    verificationExpires?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    failedAttempts?: boolean
    lockUntil?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificado?: boolean
    verificationCode?: boolean
    verificationExpires?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    failedAttempts?: boolean
    lockUntil?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificado?: boolean
    verificationCode?: boolean
    verificationExpires?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    failedAttempts?: boolean
    lockUntil?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      rol: string
      nombre: string
      direccion: string
      telefono: string
      createdAt: Date
      updatedAt: Date
      verificado: boolean
      verificationCode: string | null
      verificationExpires: Date | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      failedAttempts: number
      lockUntil: Date | null
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly rol: FieldRef<"User", 'String'>
    readonly nombre: FieldRef<"User", 'String'>
    readonly direccion: FieldRef<"User", 'String'>
    readonly telefono: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly verificado: FieldRef<"User", 'Boolean'>
    readonly verificationCode: FieldRef<"User", 'String'>
    readonly verificationExpires: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly failedAttempts: FieldRef<"User", 'Int'>
    readonly lockUntil: FieldRef<"User", 'DateTime'>
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
    stockMinimo: number | null
    descuento: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
    stockMinimo: number | null
    descuento: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    stockMinimo: number | null
    imagenUrl: string | null
    categoria: string | null
    subcategoria: string | null
    marca: string | null
    descuento: number | null
    estado: $Enums.ProductEstado | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    stockMinimo: number | null
    imagenUrl: string | null
    categoria: string | null
    subcategoria: string | null
    marca: string | null
    descuento: number | null
    estado: $Enums.ProductEstado | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    stock: number
    stockMinimo: number
    imagenUrl: number
    categoria: number
    subcategoria: number
    marca: number
    descuento: number
    estado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    stockMinimo?: true
    descuento?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    stockMinimo?: true
    descuento?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    stockMinimo?: true
    imagenUrl?: true
    categoria?: true
    subcategoria?: true
    marca?: true
    descuento?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    stockMinimo?: true
    imagenUrl?: true
    categoria?: true
    subcategoria?: true
    marca?: true
    descuento?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    stockMinimo?: true
    imagenUrl?: true
    categoria?: true
    subcategoria?: true
    marca?: true
    descuento?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    stockMinimo: number
    imagenUrl: string
    categoria: string
    subcategoria: string | null
    marca: string | null
    descuento: number | null
    estado: $Enums.ProductEstado
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    stockMinimo?: boolean
    imagenUrl?: boolean
    categoria?: boolean
    subcategoria?: boolean
    marca?: boolean
    descuento?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    StockLogs?: boolean | Product$StockLogsArgs<ExtArgs>
    Alertas?: boolean | Product$AlertasArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    stockMinimo?: boolean
    imagenUrl?: boolean
    categoria?: boolean
    subcategoria?: boolean
    marca?: boolean
    descuento?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    stockMinimo?: boolean
    imagenUrl?: boolean
    categoria?: boolean
    subcategoria?: boolean
    marca?: boolean
    descuento?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StockLogs?: boolean | Product$StockLogsArgs<ExtArgs>
    Alertas?: boolean | Product$AlertasArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      StockLogs: Prisma.$StockLogPayload<ExtArgs>[]
      Alertas: Prisma.$AlertaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precio: number
      stock: number
      stockMinimo: number
      imagenUrl: string
      categoria: string
      subcategoria: string | null
      marca: string | null
      descuento: number | null
      estado: $Enums.ProductEstado
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    StockLogs<T extends Product$StockLogsArgs<ExtArgs> = {}>(args?: Subset<T, Product$StockLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "findMany"> | Null>
    Alertas<T extends Product$AlertasArgs<ExtArgs> = {}>(args?: Subset<T, Product$AlertasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly nombre: FieldRef<"Product", 'String'>
    readonly descripcion: FieldRef<"Product", 'String'>
    readonly precio: FieldRef<"Product", 'Float'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly stockMinimo: FieldRef<"Product", 'Int'>
    readonly imagenUrl: FieldRef<"Product", 'String'>
    readonly categoria: FieldRef<"Product", 'String'>
    readonly subcategoria: FieldRef<"Product", 'String'>
    readonly marca: FieldRef<"Product", 'String'>
    readonly descuento: FieldRef<"Product", 'Float'>
    readonly estado: FieldRef<"Product", 'ProductEstado'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.StockLogs
   */
  export type Product$StockLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
    where?: StockLogWhereInput
    orderBy?: StockLogOrderByWithRelationInput | StockLogOrderByWithRelationInput[]
    cursor?: StockLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockLogScalarFieldEnum | StockLogScalarFieldEnum[]
  }

  /**
   * Product.Alertas
   */
  export type Product$AlertasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    where?: AlertaWhereInput
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    cursor?: AlertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model StockLog
   */

  export type AggregateStockLog = {
    _count: StockLogCountAggregateOutputType | null
    _avg: StockLogAvgAggregateOutputType | null
    _sum: StockLogSumAggregateOutputType | null
    _min: StockLogMinAggregateOutputType | null
    _max: StockLogMaxAggregateOutputType | null
  }

  export type StockLogAvgAggregateOutputType = {
    id: number | null
    productoId: number | null
    cantidad: number | null
    usuarioId: number | null
  }

  export type StockLogSumAggregateOutputType = {
    id: number | null
    productoId: number | null
    cantidad: number | null
    usuarioId: number | null
  }

  export type StockLogMinAggregateOutputType = {
    id: number | null
    productoId: number | null
    cantidad: number | null
    tipo: $Enums.LogTipo | null
    fecha: Date | null
    usuarioId: number | null
  }

  export type StockLogMaxAggregateOutputType = {
    id: number | null
    productoId: number | null
    cantidad: number | null
    tipo: $Enums.LogTipo | null
    fecha: Date | null
    usuarioId: number | null
  }

  export type StockLogCountAggregateOutputType = {
    id: number
    productoId: number
    cantidad: number
    tipo: number
    fecha: number
    usuarioId: number
    _all: number
  }


  export type StockLogAvgAggregateInputType = {
    id?: true
    productoId?: true
    cantidad?: true
    usuarioId?: true
  }

  export type StockLogSumAggregateInputType = {
    id?: true
    productoId?: true
    cantidad?: true
    usuarioId?: true
  }

  export type StockLogMinAggregateInputType = {
    id?: true
    productoId?: true
    cantidad?: true
    tipo?: true
    fecha?: true
    usuarioId?: true
  }

  export type StockLogMaxAggregateInputType = {
    id?: true
    productoId?: true
    cantidad?: true
    tipo?: true
    fecha?: true
    usuarioId?: true
  }

  export type StockLogCountAggregateInputType = {
    id?: true
    productoId?: true
    cantidad?: true
    tipo?: true
    fecha?: true
    usuarioId?: true
    _all?: true
  }

  export type StockLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockLog to aggregate.
     */
    where?: StockLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLogs to fetch.
     */
    orderBy?: StockLogOrderByWithRelationInput | StockLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockLogs
    **/
    _count?: true | StockLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockLogMaxAggregateInputType
  }

  export type GetStockLogAggregateType<T extends StockLogAggregateArgs> = {
        [P in keyof T & keyof AggregateStockLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockLog[P]>
      : GetScalarType<T[P], AggregateStockLog[P]>
  }




  export type StockLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLogWhereInput
    orderBy?: StockLogOrderByWithAggregationInput | StockLogOrderByWithAggregationInput[]
    by: StockLogScalarFieldEnum[] | StockLogScalarFieldEnum
    having?: StockLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockLogCountAggregateInputType | true
    _avg?: StockLogAvgAggregateInputType
    _sum?: StockLogSumAggregateInputType
    _min?: StockLogMinAggregateInputType
    _max?: StockLogMaxAggregateInputType
  }

  export type StockLogGroupByOutputType = {
    id: number
    productoId: number
    cantidad: number
    tipo: $Enums.LogTipo
    fecha: Date
    usuarioId: number | null
    _count: StockLogCountAggregateOutputType | null
    _avg: StockLogAvgAggregateOutputType | null
    _sum: StockLogSumAggregateOutputType | null
    _min: StockLogMinAggregateOutputType | null
    _max: StockLogMaxAggregateOutputType | null
  }

  type GetStockLogGroupByPayload<T extends StockLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockLogGroupByOutputType[P]>
            : GetScalarType<T[P], StockLogGroupByOutputType[P]>
        }
      >
    >


  export type StockLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoId?: boolean
    cantidad?: boolean
    tipo?: boolean
    fecha?: boolean
    usuarioId?: boolean
    producto?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockLog"]>

  export type StockLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoId?: boolean
    cantidad?: boolean
    tipo?: boolean
    fecha?: boolean
    usuarioId?: boolean
    producto?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockLog"]>

  export type StockLogSelectScalar = {
    id?: boolean
    productoId?: boolean
    cantidad?: boolean
    tipo?: boolean
    fecha?: boolean
    usuarioId?: boolean
  }

  export type StockLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StockLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $StockLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockLog"
    objects: {
      producto: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productoId: number
      cantidad: number
      tipo: $Enums.LogTipo
      fecha: Date
      usuarioId: number | null
    }, ExtArgs["result"]["stockLog"]>
    composites: {}
  }

  type StockLogGetPayload<S extends boolean | null | undefined | StockLogDefaultArgs> = $Result.GetResult<Prisma.$StockLogPayload, S>

  type StockLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockLogCountAggregateInputType | true
    }

  export interface StockLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockLog'], meta: { name: 'StockLog' } }
    /**
     * Find zero or one StockLog that matches the filter.
     * @param {StockLogFindUniqueArgs} args - Arguments to find a StockLog
     * @example
     * // Get one StockLog
     * const stockLog = await prisma.stockLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockLogFindUniqueArgs>(args: SelectSubset<T, StockLogFindUniqueArgs<ExtArgs>>): Prisma__StockLogClient<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockLogFindUniqueOrThrowArgs} args - Arguments to find a StockLog
     * @example
     * // Get one StockLog
     * const stockLog = await prisma.stockLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockLogFindUniqueOrThrowArgs>(args: SelectSubset<T, StockLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockLogClient<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLogFindFirstArgs} args - Arguments to find a StockLog
     * @example
     * // Get one StockLog
     * const stockLog = await prisma.stockLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockLogFindFirstArgs>(args?: SelectSubset<T, StockLogFindFirstArgs<ExtArgs>>): Prisma__StockLogClient<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLogFindFirstOrThrowArgs} args - Arguments to find a StockLog
     * @example
     * // Get one StockLog
     * const stockLog = await prisma.stockLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockLogFindFirstOrThrowArgs>(args?: SelectSubset<T, StockLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockLogClient<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockLogs
     * const stockLogs = await prisma.stockLog.findMany()
     * 
     * // Get first 10 StockLogs
     * const stockLogs = await prisma.stockLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockLogWithIdOnly = await prisma.stockLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockLogFindManyArgs>(args?: SelectSubset<T, StockLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockLog.
     * @param {StockLogCreateArgs} args - Arguments to create a StockLog.
     * @example
     * // Create one StockLog
     * const StockLog = await prisma.stockLog.create({
     *   data: {
     *     // ... data to create a StockLog
     *   }
     * })
     * 
     */
    create<T extends StockLogCreateArgs>(args: SelectSubset<T, StockLogCreateArgs<ExtArgs>>): Prisma__StockLogClient<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockLogs.
     * @param {StockLogCreateManyArgs} args - Arguments to create many StockLogs.
     * @example
     * // Create many StockLogs
     * const stockLog = await prisma.stockLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockLogCreateManyArgs>(args?: SelectSubset<T, StockLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockLogs and returns the data saved in the database.
     * @param {StockLogCreateManyAndReturnArgs} args - Arguments to create many StockLogs.
     * @example
     * // Create many StockLogs
     * const stockLog = await prisma.stockLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockLogs and only return the `id`
     * const stockLogWithIdOnly = await prisma.stockLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockLogCreateManyAndReturnArgs>(args?: SelectSubset<T, StockLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockLog.
     * @param {StockLogDeleteArgs} args - Arguments to delete one StockLog.
     * @example
     * // Delete one StockLog
     * const StockLog = await prisma.stockLog.delete({
     *   where: {
     *     // ... filter to delete one StockLog
     *   }
     * })
     * 
     */
    delete<T extends StockLogDeleteArgs>(args: SelectSubset<T, StockLogDeleteArgs<ExtArgs>>): Prisma__StockLogClient<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockLog.
     * @param {StockLogUpdateArgs} args - Arguments to update one StockLog.
     * @example
     * // Update one StockLog
     * const stockLog = await prisma.stockLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockLogUpdateArgs>(args: SelectSubset<T, StockLogUpdateArgs<ExtArgs>>): Prisma__StockLogClient<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockLogs.
     * @param {StockLogDeleteManyArgs} args - Arguments to filter StockLogs to delete.
     * @example
     * // Delete a few StockLogs
     * const { count } = await prisma.stockLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockLogDeleteManyArgs>(args?: SelectSubset<T, StockLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockLogs
     * const stockLog = await prisma.stockLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockLogUpdateManyArgs>(args: SelectSubset<T, StockLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockLog.
     * @param {StockLogUpsertArgs} args - Arguments to update or create a StockLog.
     * @example
     * // Update or create a StockLog
     * const stockLog = await prisma.stockLog.upsert({
     *   create: {
     *     // ... data to create a StockLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockLog we want to update
     *   }
     * })
     */
    upsert<T extends StockLogUpsertArgs>(args: SelectSubset<T, StockLogUpsertArgs<ExtArgs>>): Prisma__StockLogClient<$Result.GetResult<Prisma.$StockLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLogCountArgs} args - Arguments to filter StockLogs to count.
     * @example
     * // Count the number of StockLogs
     * const count = await prisma.stockLog.count({
     *   where: {
     *     // ... the filter for the StockLogs we want to count
     *   }
     * })
    **/
    count<T extends StockLogCountArgs>(
      args?: Subset<T, StockLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockLogAggregateArgs>(args: Subset<T, StockLogAggregateArgs>): Prisma.PrismaPromise<GetStockLogAggregateType<T>>

    /**
     * Group by StockLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLogGroupByArgs} args - Group by arguments.
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
      T extends StockLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockLogGroupByArgs['orderBy'] }
        : { orderBy?: StockLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockLog model
   */
  readonly fields: StockLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the StockLog model
   */ 
  interface StockLogFieldRefs {
    readonly id: FieldRef<"StockLog", 'Int'>
    readonly productoId: FieldRef<"StockLog", 'Int'>
    readonly cantidad: FieldRef<"StockLog", 'Int'>
    readonly tipo: FieldRef<"StockLog", 'LogTipo'>
    readonly fecha: FieldRef<"StockLog", 'DateTime'>
    readonly usuarioId: FieldRef<"StockLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StockLog findUnique
   */
  export type StockLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
    /**
     * Filter, which StockLog to fetch.
     */
    where: StockLogWhereUniqueInput
  }

  /**
   * StockLog findUniqueOrThrow
   */
  export type StockLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
    /**
     * Filter, which StockLog to fetch.
     */
    where: StockLogWhereUniqueInput
  }

  /**
   * StockLog findFirst
   */
  export type StockLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
    /**
     * Filter, which StockLog to fetch.
     */
    where?: StockLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLogs to fetch.
     */
    orderBy?: StockLogOrderByWithRelationInput | StockLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockLogs.
     */
    cursor?: StockLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockLogs.
     */
    distinct?: StockLogScalarFieldEnum | StockLogScalarFieldEnum[]
  }

  /**
   * StockLog findFirstOrThrow
   */
  export type StockLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
    /**
     * Filter, which StockLog to fetch.
     */
    where?: StockLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLogs to fetch.
     */
    orderBy?: StockLogOrderByWithRelationInput | StockLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockLogs.
     */
    cursor?: StockLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockLogs.
     */
    distinct?: StockLogScalarFieldEnum | StockLogScalarFieldEnum[]
  }

  /**
   * StockLog findMany
   */
  export type StockLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
    /**
     * Filter, which StockLogs to fetch.
     */
    where?: StockLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLogs to fetch.
     */
    orderBy?: StockLogOrderByWithRelationInput | StockLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockLogs.
     */
    cursor?: StockLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLogs.
     */
    skip?: number
    distinct?: StockLogScalarFieldEnum | StockLogScalarFieldEnum[]
  }

  /**
   * StockLog create
   */
  export type StockLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
    /**
     * The data needed to create a StockLog.
     */
    data: XOR<StockLogCreateInput, StockLogUncheckedCreateInput>
  }

  /**
   * StockLog createMany
   */
  export type StockLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockLogs.
     */
    data: StockLogCreateManyInput | StockLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockLog createManyAndReturn
   */
  export type StockLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockLogs.
     */
    data: StockLogCreateManyInput | StockLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockLog update
   */
  export type StockLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
    /**
     * The data needed to update a StockLog.
     */
    data: XOR<StockLogUpdateInput, StockLogUncheckedUpdateInput>
    /**
     * Choose, which StockLog to update.
     */
    where: StockLogWhereUniqueInput
  }

  /**
   * StockLog updateMany
   */
  export type StockLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockLogs.
     */
    data: XOR<StockLogUpdateManyMutationInput, StockLogUncheckedUpdateManyInput>
    /**
     * Filter which StockLogs to update
     */
    where?: StockLogWhereInput
  }

  /**
   * StockLog upsert
   */
  export type StockLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
    /**
     * The filter to search for the StockLog to update in case it exists.
     */
    where: StockLogWhereUniqueInput
    /**
     * In case the StockLog found by the `where` argument doesn't exist, create a new StockLog with this data.
     */
    create: XOR<StockLogCreateInput, StockLogUncheckedCreateInput>
    /**
     * In case the StockLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockLogUpdateInput, StockLogUncheckedUpdateInput>
  }

  /**
   * StockLog delete
   */
  export type StockLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
    /**
     * Filter which StockLog to delete.
     */
    where: StockLogWhereUniqueInput
  }

  /**
   * StockLog deleteMany
   */
  export type StockLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockLogs to delete
     */
    where?: StockLogWhereInput
  }

  /**
   * StockLog without action
   */
  export type StockLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLog
     */
    select?: StockLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLogInclude<ExtArgs> | null
  }


  /**
   * Model Alerta
   */

  export type AggregateAlerta = {
    _count: AlertaCountAggregateOutputType | null
    _avg: AlertaAvgAggregateOutputType | null
    _sum: AlertaSumAggregateOutputType | null
    _min: AlertaMinAggregateOutputType | null
    _max: AlertaMaxAggregateOutputType | null
  }

  export type AlertaAvgAggregateOutputType = {
    id: number | null
    productoId: number | null
  }

  export type AlertaSumAggregateOutputType = {
    id: number | null
    productoId: number | null
  }

  export type AlertaMinAggregateOutputType = {
    id: number | null
    mensaje: string | null
    productoId: number | null
    fechaGeneracion: Date | null
    atendida: boolean | null
    fechaAtendida: Date | null
  }

  export type AlertaMaxAggregateOutputType = {
    id: number | null
    mensaje: string | null
    productoId: number | null
    fechaGeneracion: Date | null
    atendida: boolean | null
    fechaAtendida: Date | null
  }

  export type AlertaCountAggregateOutputType = {
    id: number
    mensaje: number
    productoId: number
    fechaGeneracion: number
    atendida: number
    fechaAtendida: number
    _all: number
  }


  export type AlertaAvgAggregateInputType = {
    id?: true
    productoId?: true
  }

  export type AlertaSumAggregateInputType = {
    id?: true
    productoId?: true
  }

  export type AlertaMinAggregateInputType = {
    id?: true
    mensaje?: true
    productoId?: true
    fechaGeneracion?: true
    atendida?: true
    fechaAtendida?: true
  }

  export type AlertaMaxAggregateInputType = {
    id?: true
    mensaje?: true
    productoId?: true
    fechaGeneracion?: true
    atendida?: true
    fechaAtendida?: true
  }

  export type AlertaCountAggregateInputType = {
    id?: true
    mensaje?: true
    productoId?: true
    fechaGeneracion?: true
    atendida?: true
    fechaAtendida?: true
    _all?: true
  }

  export type AlertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerta to aggregate.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alertas
    **/
    _count?: true | AlertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertaMaxAggregateInputType
  }

  export type GetAlertaAggregateType<T extends AlertaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlerta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlerta[P]>
      : GetScalarType<T[P], AggregateAlerta[P]>
  }




  export type AlertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaWhereInput
    orderBy?: AlertaOrderByWithAggregationInput | AlertaOrderByWithAggregationInput[]
    by: AlertaScalarFieldEnum[] | AlertaScalarFieldEnum
    having?: AlertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertaCountAggregateInputType | true
    _avg?: AlertaAvgAggregateInputType
    _sum?: AlertaSumAggregateInputType
    _min?: AlertaMinAggregateInputType
    _max?: AlertaMaxAggregateInputType
  }

  export type AlertaGroupByOutputType = {
    id: number
    mensaje: string
    productoId: number
    fechaGeneracion: Date
    atendida: boolean
    fechaAtendida: Date | null
    _count: AlertaCountAggregateOutputType | null
    _avg: AlertaAvgAggregateOutputType | null
    _sum: AlertaSumAggregateOutputType | null
    _min: AlertaMinAggregateOutputType | null
    _max: AlertaMaxAggregateOutputType | null
  }

  type GetAlertaGroupByPayload<T extends AlertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertaGroupByOutputType[P]>
            : GetScalarType<T[P], AlertaGroupByOutputType[P]>
        }
      >
    >


  export type AlertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensaje?: boolean
    productoId?: boolean
    fechaGeneracion?: boolean
    atendida?: boolean
    fechaAtendida?: boolean
    producto?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type AlertaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensaje?: boolean
    productoId?: boolean
    fechaGeneracion?: boolean
    atendida?: boolean
    fechaAtendida?: boolean
    producto?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type AlertaSelectScalar = {
    id?: boolean
    mensaje?: boolean
    productoId?: boolean
    fechaGeneracion?: boolean
    atendida?: boolean
    fechaAtendida?: boolean
  }

  export type AlertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type AlertaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $AlertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alerta"
    objects: {
      producto: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mensaje: string
      productoId: number
      fechaGeneracion: Date
      atendida: boolean
      fechaAtendida: Date | null
    }, ExtArgs["result"]["alerta"]>
    composites: {}
  }

  type AlertaGetPayload<S extends boolean | null | undefined | AlertaDefaultArgs> = $Result.GetResult<Prisma.$AlertaPayload, S>

  type AlertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlertaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlertaCountAggregateInputType | true
    }

  export interface AlertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alerta'], meta: { name: 'Alerta' } }
    /**
     * Find zero or one Alerta that matches the filter.
     * @param {AlertaFindUniqueArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertaFindUniqueArgs>(args: SelectSubset<T, AlertaFindUniqueArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Alerta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlertaFindUniqueOrThrowArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertaFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Alerta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindFirstArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertaFindFirstArgs>(args?: SelectSubset<T, AlertaFindFirstArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Alerta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindFirstOrThrowArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertaFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Alertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alertas
     * const alertas = await prisma.alerta.findMany()
     * 
     * // Get first 10 Alertas
     * const alertas = await prisma.alerta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertaWithIdOnly = await prisma.alerta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertaFindManyArgs>(args?: SelectSubset<T, AlertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Alerta.
     * @param {AlertaCreateArgs} args - Arguments to create a Alerta.
     * @example
     * // Create one Alerta
     * const Alerta = await prisma.alerta.create({
     *   data: {
     *     // ... data to create a Alerta
     *   }
     * })
     * 
     */
    create<T extends AlertaCreateArgs>(args: SelectSubset<T, AlertaCreateArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Alertas.
     * @param {AlertaCreateManyArgs} args - Arguments to create many Alertas.
     * @example
     * // Create many Alertas
     * const alerta = await prisma.alerta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertaCreateManyArgs>(args?: SelectSubset<T, AlertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alertas and returns the data saved in the database.
     * @param {AlertaCreateManyAndReturnArgs} args - Arguments to create many Alertas.
     * @example
     * // Create many Alertas
     * const alerta = await prisma.alerta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alertas and only return the `id`
     * const alertaWithIdOnly = await prisma.alerta.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertaCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Alerta.
     * @param {AlertaDeleteArgs} args - Arguments to delete one Alerta.
     * @example
     * // Delete one Alerta
     * const Alerta = await prisma.alerta.delete({
     *   where: {
     *     // ... filter to delete one Alerta
     *   }
     * })
     * 
     */
    delete<T extends AlertaDeleteArgs>(args: SelectSubset<T, AlertaDeleteArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Alerta.
     * @param {AlertaUpdateArgs} args - Arguments to update one Alerta.
     * @example
     * // Update one Alerta
     * const alerta = await prisma.alerta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertaUpdateArgs>(args: SelectSubset<T, AlertaUpdateArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Alertas.
     * @param {AlertaDeleteManyArgs} args - Arguments to filter Alertas to delete.
     * @example
     * // Delete a few Alertas
     * const { count } = await prisma.alerta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertaDeleteManyArgs>(args?: SelectSubset<T, AlertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alertas
     * const alerta = await prisma.alerta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertaUpdateManyArgs>(args: SelectSubset<T, AlertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alerta.
     * @param {AlertaUpsertArgs} args - Arguments to update or create a Alerta.
     * @example
     * // Update or create a Alerta
     * const alerta = await prisma.alerta.upsert({
     *   create: {
     *     // ... data to create a Alerta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alerta we want to update
     *   }
     * })
     */
    upsert<T extends AlertaUpsertArgs>(args: SelectSubset<T, AlertaUpsertArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Alertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaCountArgs} args - Arguments to filter Alertas to count.
     * @example
     * // Count the number of Alertas
     * const count = await prisma.alerta.count({
     *   where: {
     *     // ... the filter for the Alertas we want to count
     *   }
     * })
    **/
    count<T extends AlertaCountArgs>(
      args?: Subset<T, AlertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertaAggregateArgs>(args: Subset<T, AlertaAggregateArgs>): Prisma.PrismaPromise<GetAlertaAggregateType<T>>

    /**
     * Group by Alerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGroupByArgs} args - Group by arguments.
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
      T extends AlertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertaGroupByArgs['orderBy'] }
        : { orderBy?: AlertaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alerta model
   */
  readonly fields: AlertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alerta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Alerta model
   */ 
  interface AlertaFieldRefs {
    readonly id: FieldRef<"Alerta", 'Int'>
    readonly mensaje: FieldRef<"Alerta", 'String'>
    readonly productoId: FieldRef<"Alerta", 'Int'>
    readonly fechaGeneracion: FieldRef<"Alerta", 'DateTime'>
    readonly atendida: FieldRef<"Alerta", 'Boolean'>
    readonly fechaAtendida: FieldRef<"Alerta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alerta findUnique
   */
  export type AlertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta findUniqueOrThrow
   */
  export type AlertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta findFirst
   */
  export type AlertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta findFirstOrThrow
   */
  export type AlertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta findMany
   */
  export type AlertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alertas to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta create
   */
  export type AlertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The data needed to create a Alerta.
     */
    data: XOR<AlertaCreateInput, AlertaUncheckedCreateInput>
  }

  /**
   * Alerta createMany
   */
  export type AlertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alertas.
     */
    data: AlertaCreateManyInput | AlertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alerta createManyAndReturn
   */
  export type AlertaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Alertas.
     */
    data: AlertaCreateManyInput | AlertaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alerta update
   */
  export type AlertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The data needed to update a Alerta.
     */
    data: XOR<AlertaUpdateInput, AlertaUncheckedUpdateInput>
    /**
     * Choose, which Alerta to update.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta updateMany
   */
  export type AlertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alertas.
     */
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyInput>
    /**
     * Filter which Alertas to update
     */
    where?: AlertaWhereInput
  }

  /**
   * Alerta upsert
   */
  export type AlertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The filter to search for the Alerta to update in case it exists.
     */
    where: AlertaWhereUniqueInput
    /**
     * In case the Alerta found by the `where` argument doesn't exist, create a new Alerta with this data.
     */
    create: XOR<AlertaCreateInput, AlertaUncheckedCreateInput>
    /**
     * In case the Alerta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertaUpdateInput, AlertaUncheckedUpdateInput>
  }

  /**
   * Alerta delete
   */
  export type AlertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter which Alerta to delete.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta deleteMany
   */
  export type AlertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alertas to delete
     */
    where?: AlertaWhereInput
  }

  /**
   * Alerta without action
   */
  export type AlertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    rol: 'rol',
    nombre: 'nombre',
    direccion: 'direccion',
    telefono: 'telefono',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    verificado: 'verificado',
    verificationCode: 'verificationCode',
    verificationExpires: 'verificationExpires',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    failedAttempts: 'failedAttempts',
    lockUntil: 'lockUntil'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    stock: 'stock',
    stockMinimo: 'stockMinimo',
    imagenUrl: 'imagenUrl',
    categoria: 'categoria',
    subcategoria: 'subcategoria',
    marca: 'marca',
    descuento: 'descuento',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const StockLogScalarFieldEnum: {
    id: 'id',
    productoId: 'productoId',
    cantidad: 'cantidad',
    tipo: 'tipo',
    fecha: 'fecha',
    usuarioId: 'usuarioId'
  };

  export type StockLogScalarFieldEnum = (typeof StockLogScalarFieldEnum)[keyof typeof StockLogScalarFieldEnum]


  export const AlertaScalarFieldEnum: {
    id: 'id',
    mensaje: 'mensaje',
    productoId: 'productoId',
    fechaGeneracion: 'fechaGeneracion',
    atendida: 'atendida',
    fechaAtendida: 'fechaAtendida'
  };

  export type AlertaScalarFieldEnum = (typeof AlertaScalarFieldEnum)[keyof typeof AlertaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ProductEstado'
   */
  export type EnumProductEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductEstado'>
    


  /**
   * Reference to a field of type 'ProductEstado[]'
   */
  export type ListEnumProductEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductEstado[]'>
    


  /**
   * Reference to a field of type 'LogTipo'
   */
  export type EnumLogTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogTipo'>
    


  /**
   * Reference to a field of type 'LogTipo[]'
   */
  export type ListEnumLogTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogTipo[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    rol?: StringFilter<"User"> | string
    nombre?: StringFilter<"User"> | string
    direccion?: StringFilter<"User"> | string
    telefono?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    verificado?: BoolFilter<"User"> | boolean
    verificationCode?: StringNullableFilter<"User"> | string | null
    verificationExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    failedAttempts?: IntFilter<"User"> | number
    lockUntil?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificado?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    verificationExpires?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    failedAttempts?: SortOrder
    lockUntil?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    rol?: StringFilter<"User"> | string
    nombre?: StringFilter<"User"> | string
    direccion?: StringFilter<"User"> | string
    telefono?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    verificado?: BoolFilter<"User"> | boolean
    verificationCode?: StringNullableFilter<"User"> | string | null
    verificationExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    failedAttempts?: IntFilter<"User"> | number
    lockUntil?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificado?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    verificationExpires?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    failedAttempts?: SortOrder
    lockUntil?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    rol?: StringWithAggregatesFilter<"User"> | string
    nombre?: StringWithAggregatesFilter<"User"> | string
    direccion?: StringWithAggregatesFilter<"User"> | string
    telefono?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    verificado?: BoolWithAggregatesFilter<"User"> | boolean
    verificationCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    failedAttempts?: IntWithAggregatesFilter<"User"> | number
    lockUntil?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    nombre?: StringFilter<"Product"> | string
    descripcion?: StringFilter<"Product"> | string
    precio?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    stockMinimo?: IntFilter<"Product"> | number
    imagenUrl?: StringFilter<"Product"> | string
    categoria?: StringFilter<"Product"> | string
    subcategoria?: StringNullableFilter<"Product"> | string | null
    marca?: StringNullableFilter<"Product"> | string | null
    descuento?: FloatNullableFilter<"Product"> | number | null
    estado?: EnumProductEstadoFilter<"Product"> | $Enums.ProductEstado
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    StockLogs?: StockLogListRelationFilter
    Alertas?: AlertaListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    imagenUrl?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrderInput | SortOrder
    marca?: SortOrderInput | SortOrder
    descuento?: SortOrderInput | SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    StockLogs?: StockLogOrderByRelationAggregateInput
    Alertas?: AlertaOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    nombre?: StringFilter<"Product"> | string
    descripcion?: StringFilter<"Product"> | string
    precio?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    stockMinimo?: IntFilter<"Product"> | number
    imagenUrl?: StringFilter<"Product"> | string
    categoria?: StringFilter<"Product"> | string
    subcategoria?: StringNullableFilter<"Product"> | string | null
    marca?: StringNullableFilter<"Product"> | string | null
    descuento?: FloatNullableFilter<"Product"> | number | null
    estado?: EnumProductEstadoFilter<"Product"> | $Enums.ProductEstado
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    StockLogs?: StockLogListRelationFilter
    Alertas?: AlertaListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    imagenUrl?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrderInput | SortOrder
    marca?: SortOrderInput | SortOrder
    descuento?: SortOrderInput | SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    nombre?: StringWithAggregatesFilter<"Product"> | string
    descripcion?: StringWithAggregatesFilter<"Product"> | string
    precio?: FloatWithAggregatesFilter<"Product"> | number
    stock?: IntWithAggregatesFilter<"Product"> | number
    stockMinimo?: IntWithAggregatesFilter<"Product"> | number
    imagenUrl?: StringWithAggregatesFilter<"Product"> | string
    categoria?: StringWithAggregatesFilter<"Product"> | string
    subcategoria?: StringNullableWithAggregatesFilter<"Product"> | string | null
    marca?: StringNullableWithAggregatesFilter<"Product"> | string | null
    descuento?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    estado?: EnumProductEstadoWithAggregatesFilter<"Product"> | $Enums.ProductEstado
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type StockLogWhereInput = {
    AND?: StockLogWhereInput | StockLogWhereInput[]
    OR?: StockLogWhereInput[]
    NOT?: StockLogWhereInput | StockLogWhereInput[]
    id?: IntFilter<"StockLog"> | number
    productoId?: IntFilter<"StockLog"> | number
    cantidad?: IntFilter<"StockLog"> | number
    tipo?: EnumLogTipoFilter<"StockLog"> | $Enums.LogTipo
    fecha?: DateTimeFilter<"StockLog"> | Date | string
    usuarioId?: IntNullableFilter<"StockLog"> | number | null
    producto?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type StockLogOrderByWithRelationInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    producto?: ProductOrderByWithRelationInput
  }

  export type StockLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockLogWhereInput | StockLogWhereInput[]
    OR?: StockLogWhereInput[]
    NOT?: StockLogWhereInput | StockLogWhereInput[]
    productoId?: IntFilter<"StockLog"> | number
    cantidad?: IntFilter<"StockLog"> | number
    tipo?: EnumLogTipoFilter<"StockLog"> | $Enums.LogTipo
    fecha?: DateTimeFilter<"StockLog"> | Date | string
    usuarioId?: IntNullableFilter<"StockLog"> | number | null
    producto?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type StockLogOrderByWithAggregationInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    _count?: StockLogCountOrderByAggregateInput
    _avg?: StockLogAvgOrderByAggregateInput
    _max?: StockLogMaxOrderByAggregateInput
    _min?: StockLogMinOrderByAggregateInput
    _sum?: StockLogSumOrderByAggregateInput
  }

  export type StockLogScalarWhereWithAggregatesInput = {
    AND?: StockLogScalarWhereWithAggregatesInput | StockLogScalarWhereWithAggregatesInput[]
    OR?: StockLogScalarWhereWithAggregatesInput[]
    NOT?: StockLogScalarWhereWithAggregatesInput | StockLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockLog"> | number
    productoId?: IntWithAggregatesFilter<"StockLog"> | number
    cantidad?: IntWithAggregatesFilter<"StockLog"> | number
    tipo?: EnumLogTipoWithAggregatesFilter<"StockLog"> | $Enums.LogTipo
    fecha?: DateTimeWithAggregatesFilter<"StockLog"> | Date | string
    usuarioId?: IntNullableWithAggregatesFilter<"StockLog"> | number | null
  }

  export type AlertaWhereInput = {
    AND?: AlertaWhereInput | AlertaWhereInput[]
    OR?: AlertaWhereInput[]
    NOT?: AlertaWhereInput | AlertaWhereInput[]
    id?: IntFilter<"Alerta"> | number
    mensaje?: StringFilter<"Alerta"> | string
    productoId?: IntFilter<"Alerta"> | number
    fechaGeneracion?: DateTimeFilter<"Alerta"> | Date | string
    atendida?: BoolFilter<"Alerta"> | boolean
    fechaAtendida?: DateTimeNullableFilter<"Alerta"> | Date | string | null
    producto?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type AlertaOrderByWithRelationInput = {
    id?: SortOrder
    mensaje?: SortOrder
    productoId?: SortOrder
    fechaGeneracion?: SortOrder
    atendida?: SortOrder
    fechaAtendida?: SortOrderInput | SortOrder
    producto?: ProductOrderByWithRelationInput
  }

  export type AlertaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertaWhereInput | AlertaWhereInput[]
    OR?: AlertaWhereInput[]
    NOT?: AlertaWhereInput | AlertaWhereInput[]
    mensaje?: StringFilter<"Alerta"> | string
    productoId?: IntFilter<"Alerta"> | number
    fechaGeneracion?: DateTimeFilter<"Alerta"> | Date | string
    atendida?: BoolFilter<"Alerta"> | boolean
    fechaAtendida?: DateTimeNullableFilter<"Alerta"> | Date | string | null
    producto?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type AlertaOrderByWithAggregationInput = {
    id?: SortOrder
    mensaje?: SortOrder
    productoId?: SortOrder
    fechaGeneracion?: SortOrder
    atendida?: SortOrder
    fechaAtendida?: SortOrderInput | SortOrder
    _count?: AlertaCountOrderByAggregateInput
    _avg?: AlertaAvgOrderByAggregateInput
    _max?: AlertaMaxOrderByAggregateInput
    _min?: AlertaMinOrderByAggregateInput
    _sum?: AlertaSumOrderByAggregateInput
  }

  export type AlertaScalarWhereWithAggregatesInput = {
    AND?: AlertaScalarWhereWithAggregatesInput | AlertaScalarWhereWithAggregatesInput[]
    OR?: AlertaScalarWhereWithAggregatesInput[]
    NOT?: AlertaScalarWhereWithAggregatesInput | AlertaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alerta"> | number
    mensaje?: StringWithAggregatesFilter<"Alerta"> | string
    productoId?: IntWithAggregatesFilter<"Alerta"> | number
    fechaGeneracion?: DateTimeWithAggregatesFilter<"Alerta"> | Date | string
    atendida?: BoolWithAggregatesFilter<"Alerta"> | boolean
    fechaAtendida?: DateTimeNullableWithAggregatesFilter<"Alerta"> | Date | string | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    rol?: string
    nombre: string
    direccion: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verificado?: boolean
    verificationCode?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    failedAttempts?: number
    lockUntil?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    rol?: string
    nombre: string
    direccion: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verificado?: boolean
    verificationCode?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    failedAttempts?: number
    lockUntil?: Date | string | null
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificado?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificado?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    rol?: string
    nombre: string
    direccion: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verificado?: boolean
    verificationCode?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    failedAttempts?: number
    lockUntil?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificado?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificado?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    nombre: string
    descripcion: string
    precio: number
    stock: number
    stockMinimo?: number
    imagenUrl: string
    categoria: string
    subcategoria?: string | null
    marca?: string | null
    descuento?: number | null
    estado?: $Enums.ProductEstado
    createdAt?: Date | string
    updatedAt?: Date | string
    StockLogs?: StockLogCreateNestedManyWithoutProductoInput
    Alertas?: AlertaCreateNestedManyWithoutProductoInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    stockMinimo?: number
    imagenUrl: string
    categoria: string
    subcategoria?: string | null
    marca?: string | null
    descuento?: number | null
    estado?: $Enums.ProductEstado
    createdAt?: Date | string
    updatedAt?: Date | string
    StockLogs?: StockLogUncheckedCreateNestedManyWithoutProductoInput
    Alertas?: AlertaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumProductEstadoFieldUpdateOperationsInput | $Enums.ProductEstado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StockLogs?: StockLogUpdateManyWithoutProductoNestedInput
    Alertas?: AlertaUpdateManyWithoutProductoNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumProductEstadoFieldUpdateOperationsInput | $Enums.ProductEstado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StockLogs?: StockLogUncheckedUpdateManyWithoutProductoNestedInput
    Alertas?: AlertaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    stockMinimo?: number
    imagenUrl: string
    categoria: string
    subcategoria?: string | null
    marca?: string | null
    descuento?: number | null
    estado?: $Enums.ProductEstado
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumProductEstadoFieldUpdateOperationsInput | $Enums.ProductEstado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumProductEstadoFieldUpdateOperationsInput | $Enums.ProductEstado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockLogCreateInput = {
    cantidad: number
    tipo: $Enums.LogTipo
    fecha?: Date | string
    usuarioId?: number | null
    producto: ProductCreateNestedOneWithoutStockLogsInput
  }

  export type StockLogUncheckedCreateInput = {
    id?: number
    productoId: number
    cantidad: number
    tipo: $Enums.LogTipo
    fecha?: Date | string
    usuarioId?: number | null
  }

  export type StockLogUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    tipo?: EnumLogTipoFieldUpdateOperationsInput | $Enums.LogTipo
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    producto?: ProductUpdateOneRequiredWithoutStockLogsNestedInput
  }

  export type StockLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    tipo?: EnumLogTipoFieldUpdateOperationsInput | $Enums.LogTipo
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockLogCreateManyInput = {
    id?: number
    productoId: number
    cantidad: number
    tipo: $Enums.LogTipo
    fecha?: Date | string
    usuarioId?: number | null
  }

  export type StockLogUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    tipo?: EnumLogTipoFieldUpdateOperationsInput | $Enums.LogTipo
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    tipo?: EnumLogTipoFieldUpdateOperationsInput | $Enums.LogTipo
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlertaCreateInput = {
    mensaje: string
    fechaGeneracion?: Date | string
    atendida?: boolean
    fechaAtendida?: Date | string | null
    producto: ProductCreateNestedOneWithoutAlertasInput
  }

  export type AlertaUncheckedCreateInput = {
    id?: number
    mensaje: string
    productoId: number
    fechaGeneracion?: Date | string
    atendida?: boolean
    fechaAtendida?: Date | string | null
  }

  export type AlertaUpdateInput = {
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    atendida?: BoolFieldUpdateOperationsInput | boolean
    fechaAtendida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    producto?: ProductUpdateOneRequiredWithoutAlertasNestedInput
  }

  export type AlertaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    productoId?: IntFieldUpdateOperationsInput | number
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    atendida?: BoolFieldUpdateOperationsInput | boolean
    fechaAtendida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertaCreateManyInput = {
    id?: number
    mensaje: string
    productoId: number
    fechaGeneracion?: Date | string
    atendida?: boolean
    fechaAtendida?: Date | string | null
  }

  export type AlertaUpdateManyMutationInput = {
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    atendida?: BoolFieldUpdateOperationsInput | boolean
    fechaAtendida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    productoId?: IntFieldUpdateOperationsInput | number
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    atendida?: BoolFieldUpdateOperationsInput | boolean
    fechaAtendida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificado?: SortOrder
    verificationCode?: SortOrder
    verificationExpires?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    failedAttempts?: SortOrder
    lockUntil?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    failedAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificado?: SortOrder
    verificationCode?: SortOrder
    verificationExpires?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    failedAttempts?: SortOrder
    lockUntil?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificado?: SortOrder
    verificationCode?: SortOrder
    verificationExpires?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    failedAttempts?: SortOrder
    lockUntil?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    failedAttempts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumProductEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductEstado | EnumProductEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.ProductEstado[] | ListEnumProductEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductEstado[] | ListEnumProductEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumProductEstadoFilter<$PrismaModel> | $Enums.ProductEstado
  }

  export type StockLogListRelationFilter = {
    every?: StockLogWhereInput
    some?: StockLogWhereInput
    none?: StockLogWhereInput
  }

  export type AlertaListRelationFilter = {
    every?: AlertaWhereInput
    some?: AlertaWhereInput
    none?: AlertaWhereInput
  }

  export type StockLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    imagenUrl?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    marca?: SortOrder
    descuento?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    descuento?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    imagenUrl?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    marca?: SortOrder
    descuento?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    imagenUrl?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    marca?: SortOrder
    descuento?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    descuento?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumProductEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductEstado | EnumProductEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.ProductEstado[] | ListEnumProductEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductEstado[] | ListEnumProductEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumProductEstadoWithAggregatesFilter<$PrismaModel> | $Enums.ProductEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductEstadoFilter<$PrismaModel>
    _max?: NestedEnumProductEstadoFilter<$PrismaModel>
  }

  export type EnumLogTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.LogTipo | EnumLogTipoFieldRefInput<$PrismaModel>
    in?: $Enums.LogTipo[] | ListEnumLogTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogTipo[] | ListEnumLogTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTipoFilter<$PrismaModel> | $Enums.LogTipo
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

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type StockLogCountOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
  }

  export type StockLogAvgOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    usuarioId?: SortOrder
  }

  export type StockLogMaxOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
  }

  export type StockLogMinOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
  }

  export type StockLogSumOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumLogTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogTipo | EnumLogTipoFieldRefInput<$PrismaModel>
    in?: $Enums.LogTipo[] | ListEnumLogTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogTipo[] | ListEnumLogTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTipoWithAggregatesFilter<$PrismaModel> | $Enums.LogTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTipoFilter<$PrismaModel>
    _max?: NestedEnumLogTipoFilter<$PrismaModel>
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

  export type AlertaCountOrderByAggregateInput = {
    id?: SortOrder
    mensaje?: SortOrder
    productoId?: SortOrder
    fechaGeneracion?: SortOrder
    atendida?: SortOrder
    fechaAtendida?: SortOrder
  }

  export type AlertaAvgOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
  }

  export type AlertaMaxOrderByAggregateInput = {
    id?: SortOrder
    mensaje?: SortOrder
    productoId?: SortOrder
    fechaGeneracion?: SortOrder
    atendida?: SortOrder
    fechaAtendida?: SortOrder
  }

  export type AlertaMinOrderByAggregateInput = {
    id?: SortOrder
    mensaje?: SortOrder
    productoId?: SortOrder
    fechaGeneracion?: SortOrder
    atendida?: SortOrder
    fechaAtendida?: SortOrder
  }

  export type AlertaSumOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StockLogCreateNestedManyWithoutProductoInput = {
    create?: XOR<StockLogCreateWithoutProductoInput, StockLogUncheckedCreateWithoutProductoInput> | StockLogCreateWithoutProductoInput[] | StockLogUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockLogCreateOrConnectWithoutProductoInput | StockLogCreateOrConnectWithoutProductoInput[]
    createMany?: StockLogCreateManyProductoInputEnvelope
    connect?: StockLogWhereUniqueInput | StockLogWhereUniqueInput[]
  }

  export type AlertaCreateNestedManyWithoutProductoInput = {
    create?: XOR<AlertaCreateWithoutProductoInput, AlertaUncheckedCreateWithoutProductoInput> | AlertaCreateWithoutProductoInput[] | AlertaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutProductoInput | AlertaCreateOrConnectWithoutProductoInput[]
    createMany?: AlertaCreateManyProductoInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type StockLogUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<StockLogCreateWithoutProductoInput, StockLogUncheckedCreateWithoutProductoInput> | StockLogCreateWithoutProductoInput[] | StockLogUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockLogCreateOrConnectWithoutProductoInput | StockLogCreateOrConnectWithoutProductoInput[]
    createMany?: StockLogCreateManyProductoInputEnvelope
    connect?: StockLogWhereUniqueInput | StockLogWhereUniqueInput[]
  }

  export type AlertaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<AlertaCreateWithoutProductoInput, AlertaUncheckedCreateWithoutProductoInput> | AlertaCreateWithoutProductoInput[] | AlertaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutProductoInput | AlertaCreateOrConnectWithoutProductoInput[]
    createMany?: AlertaCreateManyProductoInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProductEstadoFieldUpdateOperationsInput = {
    set?: $Enums.ProductEstado
  }

  export type StockLogUpdateManyWithoutProductoNestedInput = {
    create?: XOR<StockLogCreateWithoutProductoInput, StockLogUncheckedCreateWithoutProductoInput> | StockLogCreateWithoutProductoInput[] | StockLogUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockLogCreateOrConnectWithoutProductoInput | StockLogCreateOrConnectWithoutProductoInput[]
    upsert?: StockLogUpsertWithWhereUniqueWithoutProductoInput | StockLogUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: StockLogCreateManyProductoInputEnvelope
    set?: StockLogWhereUniqueInput | StockLogWhereUniqueInput[]
    disconnect?: StockLogWhereUniqueInput | StockLogWhereUniqueInput[]
    delete?: StockLogWhereUniqueInput | StockLogWhereUniqueInput[]
    connect?: StockLogWhereUniqueInput | StockLogWhereUniqueInput[]
    update?: StockLogUpdateWithWhereUniqueWithoutProductoInput | StockLogUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: StockLogUpdateManyWithWhereWithoutProductoInput | StockLogUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: StockLogScalarWhereInput | StockLogScalarWhereInput[]
  }

  export type AlertaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<AlertaCreateWithoutProductoInput, AlertaUncheckedCreateWithoutProductoInput> | AlertaCreateWithoutProductoInput[] | AlertaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutProductoInput | AlertaCreateOrConnectWithoutProductoInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutProductoInput | AlertaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: AlertaCreateManyProductoInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutProductoInput | AlertaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutProductoInput | AlertaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type StockLogUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<StockLogCreateWithoutProductoInput, StockLogUncheckedCreateWithoutProductoInput> | StockLogCreateWithoutProductoInput[] | StockLogUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockLogCreateOrConnectWithoutProductoInput | StockLogCreateOrConnectWithoutProductoInput[]
    upsert?: StockLogUpsertWithWhereUniqueWithoutProductoInput | StockLogUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: StockLogCreateManyProductoInputEnvelope
    set?: StockLogWhereUniqueInput | StockLogWhereUniqueInput[]
    disconnect?: StockLogWhereUniqueInput | StockLogWhereUniqueInput[]
    delete?: StockLogWhereUniqueInput | StockLogWhereUniqueInput[]
    connect?: StockLogWhereUniqueInput | StockLogWhereUniqueInput[]
    update?: StockLogUpdateWithWhereUniqueWithoutProductoInput | StockLogUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: StockLogUpdateManyWithWhereWithoutProductoInput | StockLogUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: StockLogScalarWhereInput | StockLogScalarWhereInput[]
  }

  export type AlertaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<AlertaCreateWithoutProductoInput, AlertaUncheckedCreateWithoutProductoInput> | AlertaCreateWithoutProductoInput[] | AlertaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutProductoInput | AlertaCreateOrConnectWithoutProductoInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutProductoInput | AlertaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: AlertaCreateManyProductoInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutProductoInput | AlertaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutProductoInput | AlertaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutStockLogsInput = {
    create?: XOR<ProductCreateWithoutStockLogsInput, ProductUncheckedCreateWithoutStockLogsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockLogsInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumLogTipoFieldUpdateOperationsInput = {
    set?: $Enums.LogTipo
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutStockLogsNestedInput = {
    create?: XOR<ProductCreateWithoutStockLogsInput, ProductUncheckedCreateWithoutStockLogsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockLogsInput
    upsert?: ProductUpsertWithoutStockLogsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockLogsInput, ProductUpdateWithoutStockLogsInput>, ProductUncheckedUpdateWithoutStockLogsInput>
  }

  export type ProductCreateNestedOneWithoutAlertasInput = {
    create?: XOR<ProductCreateWithoutAlertasInput, ProductUncheckedCreateWithoutAlertasInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAlertasInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutAlertasNestedInput = {
    create?: XOR<ProductCreateWithoutAlertasInput, ProductUncheckedCreateWithoutAlertasInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAlertasInput
    upsert?: ProductUpsertWithoutAlertasInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAlertasInput, ProductUpdateWithoutAlertasInput>, ProductUncheckedUpdateWithoutAlertasInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumProductEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductEstado | EnumProductEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.ProductEstado[] | ListEnumProductEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductEstado[] | ListEnumProductEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumProductEstadoFilter<$PrismaModel> | $Enums.ProductEstado
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumProductEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductEstado | EnumProductEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.ProductEstado[] | ListEnumProductEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductEstado[] | ListEnumProductEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumProductEstadoWithAggregatesFilter<$PrismaModel> | $Enums.ProductEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductEstadoFilter<$PrismaModel>
    _max?: NestedEnumProductEstadoFilter<$PrismaModel>
  }

  export type NestedEnumLogTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.LogTipo | EnumLogTipoFieldRefInput<$PrismaModel>
    in?: $Enums.LogTipo[] | ListEnumLogTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogTipo[] | ListEnumLogTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTipoFilter<$PrismaModel> | $Enums.LogTipo
  }

  export type NestedEnumLogTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogTipo | EnumLogTipoFieldRefInput<$PrismaModel>
    in?: $Enums.LogTipo[] | ListEnumLogTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogTipo[] | ListEnumLogTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTipoWithAggregatesFilter<$PrismaModel> | $Enums.LogTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTipoFilter<$PrismaModel>
    _max?: NestedEnumLogTipoFilter<$PrismaModel>
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

  export type StockLogCreateWithoutProductoInput = {
    cantidad: number
    tipo: $Enums.LogTipo
    fecha?: Date | string
    usuarioId?: number | null
  }

  export type StockLogUncheckedCreateWithoutProductoInput = {
    id?: number
    cantidad: number
    tipo: $Enums.LogTipo
    fecha?: Date | string
    usuarioId?: number | null
  }

  export type StockLogCreateOrConnectWithoutProductoInput = {
    where: StockLogWhereUniqueInput
    create: XOR<StockLogCreateWithoutProductoInput, StockLogUncheckedCreateWithoutProductoInput>
  }

  export type StockLogCreateManyProductoInputEnvelope = {
    data: StockLogCreateManyProductoInput | StockLogCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type AlertaCreateWithoutProductoInput = {
    mensaje: string
    fechaGeneracion?: Date | string
    atendida?: boolean
    fechaAtendida?: Date | string | null
  }

  export type AlertaUncheckedCreateWithoutProductoInput = {
    id?: number
    mensaje: string
    fechaGeneracion?: Date | string
    atendida?: boolean
    fechaAtendida?: Date | string | null
  }

  export type AlertaCreateOrConnectWithoutProductoInput = {
    where: AlertaWhereUniqueInput
    create: XOR<AlertaCreateWithoutProductoInput, AlertaUncheckedCreateWithoutProductoInput>
  }

  export type AlertaCreateManyProductoInputEnvelope = {
    data: AlertaCreateManyProductoInput | AlertaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type StockLogUpsertWithWhereUniqueWithoutProductoInput = {
    where: StockLogWhereUniqueInput
    update: XOR<StockLogUpdateWithoutProductoInput, StockLogUncheckedUpdateWithoutProductoInput>
    create: XOR<StockLogCreateWithoutProductoInput, StockLogUncheckedCreateWithoutProductoInput>
  }

  export type StockLogUpdateWithWhereUniqueWithoutProductoInput = {
    where: StockLogWhereUniqueInput
    data: XOR<StockLogUpdateWithoutProductoInput, StockLogUncheckedUpdateWithoutProductoInput>
  }

  export type StockLogUpdateManyWithWhereWithoutProductoInput = {
    where: StockLogScalarWhereInput
    data: XOR<StockLogUpdateManyMutationInput, StockLogUncheckedUpdateManyWithoutProductoInput>
  }

  export type StockLogScalarWhereInput = {
    AND?: StockLogScalarWhereInput | StockLogScalarWhereInput[]
    OR?: StockLogScalarWhereInput[]
    NOT?: StockLogScalarWhereInput | StockLogScalarWhereInput[]
    id?: IntFilter<"StockLog"> | number
    productoId?: IntFilter<"StockLog"> | number
    cantidad?: IntFilter<"StockLog"> | number
    tipo?: EnumLogTipoFilter<"StockLog"> | $Enums.LogTipo
    fecha?: DateTimeFilter<"StockLog"> | Date | string
    usuarioId?: IntNullableFilter<"StockLog"> | number | null
  }

  export type AlertaUpsertWithWhereUniqueWithoutProductoInput = {
    where: AlertaWhereUniqueInput
    update: XOR<AlertaUpdateWithoutProductoInput, AlertaUncheckedUpdateWithoutProductoInput>
    create: XOR<AlertaCreateWithoutProductoInput, AlertaUncheckedCreateWithoutProductoInput>
  }

  export type AlertaUpdateWithWhereUniqueWithoutProductoInput = {
    where: AlertaWhereUniqueInput
    data: XOR<AlertaUpdateWithoutProductoInput, AlertaUncheckedUpdateWithoutProductoInput>
  }

  export type AlertaUpdateManyWithWhereWithoutProductoInput = {
    where: AlertaScalarWhereInput
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyWithoutProductoInput>
  }

  export type AlertaScalarWhereInput = {
    AND?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
    OR?: AlertaScalarWhereInput[]
    NOT?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
    id?: IntFilter<"Alerta"> | number
    mensaje?: StringFilter<"Alerta"> | string
    productoId?: IntFilter<"Alerta"> | number
    fechaGeneracion?: DateTimeFilter<"Alerta"> | Date | string
    atendida?: BoolFilter<"Alerta"> | boolean
    fechaAtendida?: DateTimeNullableFilter<"Alerta"> | Date | string | null
  }

  export type ProductCreateWithoutStockLogsInput = {
    nombre: string
    descripcion: string
    precio: number
    stock: number
    stockMinimo?: number
    imagenUrl: string
    categoria: string
    subcategoria?: string | null
    marca?: string | null
    descuento?: number | null
    estado?: $Enums.ProductEstado
    createdAt?: Date | string
    updatedAt?: Date | string
    Alertas?: AlertaCreateNestedManyWithoutProductoInput
  }

  export type ProductUncheckedCreateWithoutStockLogsInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    stockMinimo?: number
    imagenUrl: string
    categoria: string
    subcategoria?: string | null
    marca?: string | null
    descuento?: number | null
    estado?: $Enums.ProductEstado
    createdAt?: Date | string
    updatedAt?: Date | string
    Alertas?: AlertaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductCreateOrConnectWithoutStockLogsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockLogsInput, ProductUncheckedCreateWithoutStockLogsInput>
  }

  export type ProductUpsertWithoutStockLogsInput = {
    update: XOR<ProductUpdateWithoutStockLogsInput, ProductUncheckedUpdateWithoutStockLogsInput>
    create: XOR<ProductCreateWithoutStockLogsInput, ProductUncheckedCreateWithoutStockLogsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockLogsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockLogsInput, ProductUncheckedUpdateWithoutStockLogsInput>
  }

  export type ProductUpdateWithoutStockLogsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumProductEstadoFieldUpdateOperationsInput | $Enums.ProductEstado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Alertas?: AlertaUpdateManyWithoutProductoNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumProductEstadoFieldUpdateOperationsInput | $Enums.ProductEstado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Alertas?: AlertaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductCreateWithoutAlertasInput = {
    nombre: string
    descripcion: string
    precio: number
    stock: number
    stockMinimo?: number
    imagenUrl: string
    categoria: string
    subcategoria?: string | null
    marca?: string | null
    descuento?: number | null
    estado?: $Enums.ProductEstado
    createdAt?: Date | string
    updatedAt?: Date | string
    StockLogs?: StockLogCreateNestedManyWithoutProductoInput
  }

  export type ProductUncheckedCreateWithoutAlertasInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    stockMinimo?: number
    imagenUrl: string
    categoria: string
    subcategoria?: string | null
    marca?: string | null
    descuento?: number | null
    estado?: $Enums.ProductEstado
    createdAt?: Date | string
    updatedAt?: Date | string
    StockLogs?: StockLogUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductCreateOrConnectWithoutAlertasInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAlertasInput, ProductUncheckedCreateWithoutAlertasInput>
  }

  export type ProductUpsertWithoutAlertasInput = {
    update: XOR<ProductUpdateWithoutAlertasInput, ProductUncheckedUpdateWithoutAlertasInput>
    create: XOR<ProductCreateWithoutAlertasInput, ProductUncheckedCreateWithoutAlertasInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAlertasInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAlertasInput, ProductUncheckedUpdateWithoutAlertasInput>
  }

  export type ProductUpdateWithoutAlertasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumProductEstadoFieldUpdateOperationsInput | $Enums.ProductEstado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StockLogs?: StockLogUpdateManyWithoutProductoNestedInput
  }

  export type ProductUncheckedUpdateWithoutAlertasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumProductEstadoFieldUpdateOperationsInput | $Enums.ProductEstado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StockLogs?: StockLogUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type StockLogCreateManyProductoInput = {
    id?: number
    cantidad: number
    tipo: $Enums.LogTipo
    fecha?: Date | string
    usuarioId?: number | null
  }

  export type AlertaCreateManyProductoInput = {
    id?: number
    mensaje: string
    fechaGeneracion?: Date | string
    atendida?: boolean
    fechaAtendida?: Date | string | null
  }

  export type StockLogUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    tipo?: EnumLogTipoFieldUpdateOperationsInput | $Enums.LogTipo
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockLogUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    tipo?: EnumLogTipoFieldUpdateOperationsInput | $Enums.LogTipo
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockLogUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    tipo?: EnumLogTipoFieldUpdateOperationsInput | $Enums.LogTipo
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlertaUpdateWithoutProductoInput = {
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    atendida?: BoolFieldUpdateOperationsInput | boolean
    fechaAtendida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertaUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    atendida?: BoolFieldUpdateOperationsInput | boolean
    fechaAtendida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertaUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    atendida?: BoolFieldUpdateOperationsInput | boolean
    fechaAtendida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockLogDefaultArgs instead
     */
    export type StockLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlertaDefaultArgs instead
     */
    export type AlertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlertaDefaultArgs<ExtArgs>

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