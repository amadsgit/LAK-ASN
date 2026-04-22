
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
 * Model Instansi
 * 
 */
export type Instansi = $Result.DefaultSelection<Prisma.$InstansiPayload>
/**
 * Model Pegawai
 * 
 */
export type Pegawai = $Result.DefaultSelection<Prisma.$PegawaiPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model LakReport
 * 
 */
export type LakReport = $Result.DefaultSelection<Prisma.$LakReportPayload>
/**
 * Model LakDetail
 * 
 */
export type LakDetail = $Result.DefaultSelection<Prisma.$LakDetailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PEGAWAI: 'PEGAWAI',
  KASUBAG_TU: 'KASUBAG_TU'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ReportStatus: {
  DRAFT: 'DRAFT',
  DIKIRIM: 'DIKIRIM',
  DISETUJUI: 'DISETUJUI'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]


export const JenisTugas: {
  TJ: 'TJ',
  TT: 'TT'
};

export type JenisTugas = (typeof JenisTugas)[keyof typeof JenisTugas]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

export type JenisTugas = $Enums.JenisTugas

export const JenisTugas: typeof $Enums.JenisTugas

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Instansis
 * const instansis = await prisma.instansi.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Instansis
   * const instansis = await prisma.instansi.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.instansi`: Exposes CRUD operations for the **Instansi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instansis
    * const instansis = await prisma.instansi.findMany()
    * ```
    */
  get instansi(): Prisma.InstansiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pegawai`: Exposes CRUD operations for the **Pegawai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pegawais
    * const pegawais = await prisma.pegawai.findMany()
    * ```
    */
  get pegawai(): Prisma.PegawaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lakReport`: Exposes CRUD operations for the **LakReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LakReports
    * const lakReports = await prisma.lakReport.findMany()
    * ```
    */
  get lakReport(): Prisma.LakReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lakDetail`: Exposes CRUD operations for the **LakDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LakDetails
    * const lakDetails = await prisma.lakDetail.findMany()
    * ```
    */
  get lakDetail(): Prisma.LakDetailDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Instansi: 'Instansi',
    Pegawai: 'Pegawai',
    User: 'User',
    LakReport: 'LakReport',
    LakDetail: 'LakDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "instansi" | "pegawai" | "user" | "lakReport" | "lakDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Instansi: {
        payload: Prisma.$InstansiPayload<ExtArgs>
        fields: Prisma.InstansiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstansiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstansiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          findFirst: {
            args: Prisma.InstansiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstansiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          findMany: {
            args: Prisma.InstansiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>[]
          }
          create: {
            args: Prisma.InstansiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          createMany: {
            args: Prisma.InstansiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstansiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>[]
          }
          delete: {
            args: Prisma.InstansiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          update: {
            args: Prisma.InstansiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          deleteMany: {
            args: Prisma.InstansiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstansiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstansiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>[]
          }
          upsert: {
            args: Prisma.InstansiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          aggregate: {
            args: Prisma.InstansiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstansi>
          }
          groupBy: {
            args: Prisma.InstansiGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstansiGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstansiCountArgs<ExtArgs>
            result: $Utils.Optional<InstansiCountAggregateOutputType> | number
          }
        }
      }
      Pegawai: {
        payload: Prisma.$PegawaiPayload<ExtArgs>
        fields: Prisma.PegawaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PegawaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PegawaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          findFirst: {
            args: Prisma.PegawaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PegawaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          findMany: {
            args: Prisma.PegawaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>[]
          }
          create: {
            args: Prisma.PegawaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          createMany: {
            args: Prisma.PegawaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PegawaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>[]
          }
          delete: {
            args: Prisma.PegawaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          update: {
            args: Prisma.PegawaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          deleteMany: {
            args: Prisma.PegawaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PegawaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PegawaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>[]
          }
          upsert: {
            args: Prisma.PegawaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          aggregate: {
            args: Prisma.PegawaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePegawai>
          }
          groupBy: {
            args: Prisma.PegawaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PegawaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.PegawaiCountArgs<ExtArgs>
            result: $Utils.Optional<PegawaiCountAggregateOutputType> | number
          }
        }
      }
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      LakReport: {
        payload: Prisma.$LakReportPayload<ExtArgs>
        fields: Prisma.LakReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LakReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LakReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload>
          }
          findFirst: {
            args: Prisma.LakReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LakReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload>
          }
          findMany: {
            args: Prisma.LakReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload>[]
          }
          create: {
            args: Prisma.LakReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload>
          }
          createMany: {
            args: Prisma.LakReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LakReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload>[]
          }
          delete: {
            args: Prisma.LakReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload>
          }
          update: {
            args: Prisma.LakReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload>
          }
          deleteMany: {
            args: Prisma.LakReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LakReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LakReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload>[]
          }
          upsert: {
            args: Prisma.LakReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakReportPayload>
          }
          aggregate: {
            args: Prisma.LakReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLakReport>
          }
          groupBy: {
            args: Prisma.LakReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<LakReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.LakReportCountArgs<ExtArgs>
            result: $Utils.Optional<LakReportCountAggregateOutputType> | number
          }
        }
      }
      LakDetail: {
        payload: Prisma.$LakDetailPayload<ExtArgs>
        fields: Prisma.LakDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LakDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LakDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload>
          }
          findFirst: {
            args: Prisma.LakDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LakDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload>
          }
          findMany: {
            args: Prisma.LakDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload>[]
          }
          create: {
            args: Prisma.LakDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload>
          }
          createMany: {
            args: Prisma.LakDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LakDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload>[]
          }
          delete: {
            args: Prisma.LakDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload>
          }
          update: {
            args: Prisma.LakDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload>
          }
          deleteMany: {
            args: Prisma.LakDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LakDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LakDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload>[]
          }
          upsert: {
            args: Prisma.LakDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakDetailPayload>
          }
          aggregate: {
            args: Prisma.LakDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLakDetail>
          }
          groupBy: {
            args: Prisma.LakDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<LakDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.LakDetailCountArgs<ExtArgs>
            result: $Utils.Optional<LakDetailCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    instansi?: InstansiOmit
    pegawai?: PegawaiOmit
    user?: UserOmit
    lakReport?: LakReportOmit
    lakDetail?: LakDetailOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type InstansiCountOutputType
   */

  export type InstansiCountOutputType = {
    pegawai: number
    users: number
  }

  export type InstansiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | InstansiCountOutputTypeCountPegawaiArgs
    users?: boolean | InstansiCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * InstansiCountOutputType without action
   */
  export type InstansiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstansiCountOutputType
     */
    select?: InstansiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstansiCountOutputType without action
   */
  export type InstansiCountOutputTypeCountPegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PegawaiWhereInput
  }

  /**
   * InstansiCountOutputType without action
   */
  export type InstansiCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PegawaiCountOutputType
   */

  export type PegawaiCountOutputType = {
    reports: number
  }

  export type PegawaiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | PegawaiCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PegawaiCountOutputType
     */
    select?: PegawaiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LakReportWhereInput
  }


  /**
   * Count Type LakReportCountOutputType
   */

  export type LakReportCountOutputType = {
    details: number
  }

  export type LakReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | LakReportCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * LakReportCountOutputType without action
   */
  export type LakReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReportCountOutputType
     */
    select?: LakReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LakReportCountOutputType without action
   */
  export type LakReportCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LakDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Instansi
   */

  export type AggregateInstansi = {
    _count: InstansiCountAggregateOutputType | null
    _avg: InstansiAvgAggregateOutputType | null
    _sum: InstansiSumAggregateOutputType | null
    _min: InstansiMinAggregateOutputType | null
    _max: InstansiMaxAggregateOutputType | null
  }

  export type InstansiAvgAggregateOutputType = {
    id: number | null
  }

  export type InstansiSumAggregateOutputType = {
    id: number | null
  }

  export type InstansiMinAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type InstansiMaxAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type InstansiCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type InstansiAvgAggregateInputType = {
    id?: true
  }

  export type InstansiSumAggregateInputType = {
    id?: true
  }

  export type InstansiMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type InstansiMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type InstansiCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type InstansiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instansi to aggregate.
     */
    where?: InstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instansis to fetch.
     */
    orderBy?: InstansiOrderByWithRelationInput | InstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instansis
    **/
    _count?: true | InstansiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstansiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstansiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstansiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstansiMaxAggregateInputType
  }

  export type GetInstansiAggregateType<T extends InstansiAggregateArgs> = {
        [P in keyof T & keyof AggregateInstansi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstansi[P]>
      : GetScalarType<T[P], AggregateInstansi[P]>
  }




  export type InstansiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstansiWhereInput
    orderBy?: InstansiOrderByWithAggregationInput | InstansiOrderByWithAggregationInput[]
    by: InstansiScalarFieldEnum[] | InstansiScalarFieldEnum
    having?: InstansiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstansiCountAggregateInputType | true
    _avg?: InstansiAvgAggregateInputType
    _sum?: InstansiSumAggregateInputType
    _min?: InstansiMinAggregateInputType
    _max?: InstansiMaxAggregateInputType
  }

  export type InstansiGroupByOutputType = {
    id: number
    nama: string
    _count: InstansiCountAggregateOutputType | null
    _avg: InstansiAvgAggregateOutputType | null
    _sum: InstansiSumAggregateOutputType | null
    _min: InstansiMinAggregateOutputType | null
    _max: InstansiMaxAggregateOutputType | null
  }

  type GetInstansiGroupByPayload<T extends InstansiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstansiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstansiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstansiGroupByOutputType[P]>
            : GetScalarType<T[P], InstansiGroupByOutputType[P]>
        }
      >
    >


  export type InstansiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    pegawai?: boolean | Instansi$pegawaiArgs<ExtArgs>
    users?: boolean | Instansi$usersArgs<ExtArgs>
    _count?: boolean | InstansiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instansi"]>

  export type InstansiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["instansi"]>

  export type InstansiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["instansi"]>

  export type InstansiSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type InstansiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["instansi"]>
  export type InstansiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | Instansi$pegawaiArgs<ExtArgs>
    users?: boolean | Instansi$usersArgs<ExtArgs>
    _count?: boolean | InstansiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstansiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstansiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstansiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instansi"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
    }, ExtArgs["result"]["instansi"]>
    composites: {}
  }

  type InstansiGetPayload<S extends boolean | null | undefined | InstansiDefaultArgs> = $Result.GetResult<Prisma.$InstansiPayload, S>

  type InstansiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstansiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstansiCountAggregateInputType | true
    }

  export interface InstansiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instansi'], meta: { name: 'Instansi' } }
    /**
     * Find zero or one Instansi that matches the filter.
     * @param {InstansiFindUniqueArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstansiFindUniqueArgs>(args: SelectSubset<T, InstansiFindUniqueArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instansi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstansiFindUniqueOrThrowArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstansiFindUniqueOrThrowArgs>(args: SelectSubset<T, InstansiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instansi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiFindFirstArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstansiFindFirstArgs>(args?: SelectSubset<T, InstansiFindFirstArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instansi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiFindFirstOrThrowArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstansiFindFirstOrThrowArgs>(args?: SelectSubset<T, InstansiFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instansis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instansis
     * const instansis = await prisma.instansi.findMany()
     * 
     * // Get first 10 Instansis
     * const instansis = await prisma.instansi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instansiWithIdOnly = await prisma.instansi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstansiFindManyArgs>(args?: SelectSubset<T, InstansiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instansi.
     * @param {InstansiCreateArgs} args - Arguments to create a Instansi.
     * @example
     * // Create one Instansi
     * const Instansi = await prisma.instansi.create({
     *   data: {
     *     // ... data to create a Instansi
     *   }
     * })
     * 
     */
    create<T extends InstansiCreateArgs>(args: SelectSubset<T, InstansiCreateArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instansis.
     * @param {InstansiCreateManyArgs} args - Arguments to create many Instansis.
     * @example
     * // Create many Instansis
     * const instansi = await prisma.instansi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstansiCreateManyArgs>(args?: SelectSubset<T, InstansiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instansis and returns the data saved in the database.
     * @param {InstansiCreateManyAndReturnArgs} args - Arguments to create many Instansis.
     * @example
     * // Create many Instansis
     * const instansi = await prisma.instansi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instansis and only return the `id`
     * const instansiWithIdOnly = await prisma.instansi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstansiCreateManyAndReturnArgs>(args?: SelectSubset<T, InstansiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instansi.
     * @param {InstansiDeleteArgs} args - Arguments to delete one Instansi.
     * @example
     * // Delete one Instansi
     * const Instansi = await prisma.instansi.delete({
     *   where: {
     *     // ... filter to delete one Instansi
     *   }
     * })
     * 
     */
    delete<T extends InstansiDeleteArgs>(args: SelectSubset<T, InstansiDeleteArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instansi.
     * @param {InstansiUpdateArgs} args - Arguments to update one Instansi.
     * @example
     * // Update one Instansi
     * const instansi = await prisma.instansi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstansiUpdateArgs>(args: SelectSubset<T, InstansiUpdateArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instansis.
     * @param {InstansiDeleteManyArgs} args - Arguments to filter Instansis to delete.
     * @example
     * // Delete a few Instansis
     * const { count } = await prisma.instansi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstansiDeleteManyArgs>(args?: SelectSubset<T, InstansiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instansis
     * const instansi = await prisma.instansi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstansiUpdateManyArgs>(args: SelectSubset<T, InstansiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instansis and returns the data updated in the database.
     * @param {InstansiUpdateManyAndReturnArgs} args - Arguments to update many Instansis.
     * @example
     * // Update many Instansis
     * const instansi = await prisma.instansi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instansis and only return the `id`
     * const instansiWithIdOnly = await prisma.instansi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstansiUpdateManyAndReturnArgs>(args: SelectSubset<T, InstansiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instansi.
     * @param {InstansiUpsertArgs} args - Arguments to update or create a Instansi.
     * @example
     * // Update or create a Instansi
     * const instansi = await prisma.instansi.upsert({
     *   create: {
     *     // ... data to create a Instansi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instansi we want to update
     *   }
     * })
     */
    upsert<T extends InstansiUpsertArgs>(args: SelectSubset<T, InstansiUpsertArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiCountArgs} args - Arguments to filter Instansis to count.
     * @example
     * // Count the number of Instansis
     * const count = await prisma.instansi.count({
     *   where: {
     *     // ... the filter for the Instansis we want to count
     *   }
     * })
    **/
    count<T extends InstansiCountArgs>(
      args?: Subset<T, InstansiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstansiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstansiAggregateArgs>(args: Subset<T, InstansiAggregateArgs>): Prisma.PrismaPromise<GetInstansiAggregateType<T>>

    /**
     * Group by Instansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiGroupByArgs} args - Group by arguments.
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
      T extends InstansiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstansiGroupByArgs['orderBy'] }
        : { orderBy?: InstansiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstansiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstansiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instansi model
   */
  readonly fields: InstansiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instansi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstansiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends Instansi$pegawaiArgs<ExtArgs> = {}>(args?: Subset<T, Instansi$pegawaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Instansi$usersArgs<ExtArgs> = {}>(args?: Subset<T, Instansi$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Instansi model
   */
  interface InstansiFieldRefs {
    readonly id: FieldRef<"Instansi", 'Int'>
    readonly nama: FieldRef<"Instansi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instansi findUnique
   */
  export type InstansiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter, which Instansi to fetch.
     */
    where: InstansiWhereUniqueInput
  }

  /**
   * Instansi findUniqueOrThrow
   */
  export type InstansiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter, which Instansi to fetch.
     */
    where: InstansiWhereUniqueInput
  }

  /**
   * Instansi findFirst
   */
  export type InstansiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter, which Instansi to fetch.
     */
    where?: InstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instansis to fetch.
     */
    orderBy?: InstansiOrderByWithRelationInput | InstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instansis.
     */
    cursor?: InstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instansis.
     */
    distinct?: InstansiScalarFieldEnum | InstansiScalarFieldEnum[]
  }

  /**
   * Instansi findFirstOrThrow
   */
  export type InstansiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter, which Instansi to fetch.
     */
    where?: InstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instansis to fetch.
     */
    orderBy?: InstansiOrderByWithRelationInput | InstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instansis.
     */
    cursor?: InstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instansis.
     */
    distinct?: InstansiScalarFieldEnum | InstansiScalarFieldEnum[]
  }

  /**
   * Instansi findMany
   */
  export type InstansiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter, which Instansis to fetch.
     */
    where?: InstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instansis to fetch.
     */
    orderBy?: InstansiOrderByWithRelationInput | InstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instansis.
     */
    cursor?: InstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instansis.
     */
    skip?: number
    distinct?: InstansiScalarFieldEnum | InstansiScalarFieldEnum[]
  }

  /**
   * Instansi create
   */
  export type InstansiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * The data needed to create a Instansi.
     */
    data: XOR<InstansiCreateInput, InstansiUncheckedCreateInput>
  }

  /**
   * Instansi createMany
   */
  export type InstansiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instansis.
     */
    data: InstansiCreateManyInput | InstansiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instansi createManyAndReturn
   */
  export type InstansiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * The data used to create many Instansis.
     */
    data: InstansiCreateManyInput | InstansiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instansi update
   */
  export type InstansiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * The data needed to update a Instansi.
     */
    data: XOR<InstansiUpdateInput, InstansiUncheckedUpdateInput>
    /**
     * Choose, which Instansi to update.
     */
    where: InstansiWhereUniqueInput
  }

  /**
   * Instansi updateMany
   */
  export type InstansiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instansis.
     */
    data: XOR<InstansiUpdateManyMutationInput, InstansiUncheckedUpdateManyInput>
    /**
     * Filter which Instansis to update
     */
    where?: InstansiWhereInput
    /**
     * Limit how many Instansis to update.
     */
    limit?: number
  }

  /**
   * Instansi updateManyAndReturn
   */
  export type InstansiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * The data used to update Instansis.
     */
    data: XOR<InstansiUpdateManyMutationInput, InstansiUncheckedUpdateManyInput>
    /**
     * Filter which Instansis to update
     */
    where?: InstansiWhereInput
    /**
     * Limit how many Instansis to update.
     */
    limit?: number
  }

  /**
   * Instansi upsert
   */
  export type InstansiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * The filter to search for the Instansi to update in case it exists.
     */
    where: InstansiWhereUniqueInput
    /**
     * In case the Instansi found by the `where` argument doesn't exist, create a new Instansi with this data.
     */
    create: XOR<InstansiCreateInput, InstansiUncheckedCreateInput>
    /**
     * In case the Instansi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstansiUpdateInput, InstansiUncheckedUpdateInput>
  }

  /**
   * Instansi delete
   */
  export type InstansiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter which Instansi to delete.
     */
    where: InstansiWhereUniqueInput
  }

  /**
   * Instansi deleteMany
   */
  export type InstansiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instansis to delete
     */
    where?: InstansiWhereInput
    /**
     * Limit how many Instansis to delete.
     */
    limit?: number
  }

  /**
   * Instansi.pegawai
   */
  export type Instansi$pegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    where?: PegawaiWhereInput
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    cursor?: PegawaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Instansi.users
   */
  export type Instansi$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * Instansi without action
   */
  export type InstansiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
  }


  /**
   * Model Pegawai
   */

  export type AggregatePegawai = {
    _count: PegawaiCountAggregateOutputType | null
    _avg: PegawaiAvgAggregateOutputType | null
    _sum: PegawaiSumAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  export type PegawaiAvgAggregateOutputType = {
    id: number | null
    instansiId: number | null
  }

  export type PegawaiSumAggregateOutputType = {
    id: number | null
    instansiId: number | null
  }

  export type PegawaiMinAggregateOutputType = {
    id: number | null
    instansiId: number | null
    foto: string | null
    namaPegawai: string | null
    nip: string | null
    tempatLahir: string | null
    tanggalLahir: Date | null
    jenisKelamin: string | null
    jabatan: string | null
    pangkat: string | null
    golongan: string | null
    createdAt: Date | null
  }

  export type PegawaiMaxAggregateOutputType = {
    id: number | null
    instansiId: number | null
    foto: string | null
    namaPegawai: string | null
    nip: string | null
    tempatLahir: string | null
    tanggalLahir: Date | null
    jenisKelamin: string | null
    jabatan: string | null
    pangkat: string | null
    golongan: string | null
    createdAt: Date | null
  }

  export type PegawaiCountAggregateOutputType = {
    id: number
    instansiId: number
    foto: number
    namaPegawai: number
    nip: number
    tempatLahir: number
    tanggalLahir: number
    jenisKelamin: number
    jabatan: number
    pangkat: number
    golongan: number
    createdAt: number
    _all: number
  }


  export type PegawaiAvgAggregateInputType = {
    id?: true
    instansiId?: true
  }

  export type PegawaiSumAggregateInputType = {
    id?: true
    instansiId?: true
  }

  export type PegawaiMinAggregateInputType = {
    id?: true
    instansiId?: true
    foto?: true
    namaPegawai?: true
    nip?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    jabatan?: true
    pangkat?: true
    golongan?: true
    createdAt?: true
  }

  export type PegawaiMaxAggregateInputType = {
    id?: true
    instansiId?: true
    foto?: true
    namaPegawai?: true
    nip?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    jabatan?: true
    pangkat?: true
    golongan?: true
    createdAt?: true
  }

  export type PegawaiCountAggregateInputType = {
    id?: true
    instansiId?: true
    foto?: true
    namaPegawai?: true
    nip?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    jabatan?: true
    pangkat?: true
    golongan?: true
    createdAt?: true
    _all?: true
  }

  export type PegawaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pegawai to aggregate.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pegawais
    **/
    _count?: true | PegawaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PegawaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PegawaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PegawaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PegawaiMaxAggregateInputType
  }

  export type GetPegawaiAggregateType<T extends PegawaiAggregateArgs> = {
        [P in keyof T & keyof AggregatePegawai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePegawai[P]>
      : GetScalarType<T[P], AggregatePegawai[P]>
  }




  export type PegawaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PegawaiWhereInput
    orderBy?: PegawaiOrderByWithAggregationInput | PegawaiOrderByWithAggregationInput[]
    by: PegawaiScalarFieldEnum[] | PegawaiScalarFieldEnum
    having?: PegawaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PegawaiCountAggregateInputType | true
    _avg?: PegawaiAvgAggregateInputType
    _sum?: PegawaiSumAggregateInputType
    _min?: PegawaiMinAggregateInputType
    _max?: PegawaiMaxAggregateInputType
  }

  export type PegawaiGroupByOutputType = {
    id: number
    instansiId: number | null
    foto: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt: Date
    _count: PegawaiCountAggregateOutputType | null
    _avg: PegawaiAvgAggregateOutputType | null
    _sum: PegawaiSumAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  type GetPegawaiGroupByPayload<T extends PegawaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PegawaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PegawaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
            : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
        }
      >
    >


  export type PegawaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instansiId?: boolean
    foto?: boolean
    namaPegawai?: boolean
    nip?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    jabatan?: boolean
    pangkat?: boolean
    golongan?: boolean
    createdAt?: boolean
    instansi?: boolean | Pegawai$instansiArgs<ExtArgs>
    user?: boolean | Pegawai$userArgs<ExtArgs>
    reports?: boolean | Pegawai$reportsArgs<ExtArgs>
    _count?: boolean | PegawaiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pegawai"]>

  export type PegawaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instansiId?: boolean
    foto?: boolean
    namaPegawai?: boolean
    nip?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    jabatan?: boolean
    pangkat?: boolean
    golongan?: boolean
    createdAt?: boolean
    instansi?: boolean | Pegawai$instansiArgs<ExtArgs>
  }, ExtArgs["result"]["pegawai"]>

  export type PegawaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instansiId?: boolean
    foto?: boolean
    namaPegawai?: boolean
    nip?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    jabatan?: boolean
    pangkat?: boolean
    golongan?: boolean
    createdAt?: boolean
    instansi?: boolean | Pegawai$instansiArgs<ExtArgs>
  }, ExtArgs["result"]["pegawai"]>

  export type PegawaiSelectScalar = {
    id?: boolean
    instansiId?: boolean
    foto?: boolean
    namaPegawai?: boolean
    nip?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    jabatan?: boolean
    pangkat?: boolean
    golongan?: boolean
    createdAt?: boolean
  }

  export type PegawaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instansiId" | "foto" | "namaPegawai" | "nip" | "tempatLahir" | "tanggalLahir" | "jenisKelamin" | "jabatan" | "pangkat" | "golongan" | "createdAt", ExtArgs["result"]["pegawai"]>
  export type PegawaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instansi?: boolean | Pegawai$instansiArgs<ExtArgs>
    user?: boolean | Pegawai$userArgs<ExtArgs>
    reports?: boolean | Pegawai$reportsArgs<ExtArgs>
    _count?: boolean | PegawaiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PegawaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instansi?: boolean | Pegawai$instansiArgs<ExtArgs>
  }
  export type PegawaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instansi?: boolean | Pegawai$instansiArgs<ExtArgs>
  }

  export type $PegawaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pegawai"
    objects: {
      instansi: Prisma.$InstansiPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      reports: Prisma.$LakReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instansiId: number | null
      foto: string | null
      namaPegawai: string
      nip: string
      tempatLahir: string
      tanggalLahir: Date
      jenisKelamin: string
      jabatan: string
      pangkat: string
      golongan: string
      createdAt: Date
    }, ExtArgs["result"]["pegawai"]>
    composites: {}
  }

  type PegawaiGetPayload<S extends boolean | null | undefined | PegawaiDefaultArgs> = $Result.GetResult<Prisma.$PegawaiPayload, S>

  type PegawaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PegawaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PegawaiCountAggregateInputType | true
    }

  export interface PegawaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pegawai'], meta: { name: 'Pegawai' } }
    /**
     * Find zero or one Pegawai that matches the filter.
     * @param {PegawaiFindUniqueArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PegawaiFindUniqueArgs>(args: SelectSubset<T, PegawaiFindUniqueArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pegawai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PegawaiFindUniqueOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PegawaiFindUniqueOrThrowArgs>(args: SelectSubset<T, PegawaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pegawai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiFindFirstArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PegawaiFindFirstArgs>(args?: SelectSubset<T, PegawaiFindFirstArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pegawai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiFindFirstOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PegawaiFindFirstOrThrowArgs>(args?: SelectSubset<T, PegawaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pegawais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pegawais
     * const pegawais = await prisma.pegawai.findMany()
     * 
     * // Get first 10 Pegawais
     * const pegawais = await prisma.pegawai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pegawaiWithIdOnly = await prisma.pegawai.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PegawaiFindManyArgs>(args?: SelectSubset<T, PegawaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pegawai.
     * @param {PegawaiCreateArgs} args - Arguments to create a Pegawai.
     * @example
     * // Create one Pegawai
     * const Pegawai = await prisma.pegawai.create({
     *   data: {
     *     // ... data to create a Pegawai
     *   }
     * })
     * 
     */
    create<T extends PegawaiCreateArgs>(args: SelectSubset<T, PegawaiCreateArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pegawais.
     * @param {PegawaiCreateManyArgs} args - Arguments to create many Pegawais.
     * @example
     * // Create many Pegawais
     * const pegawai = await prisma.pegawai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PegawaiCreateManyArgs>(args?: SelectSubset<T, PegawaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pegawais and returns the data saved in the database.
     * @param {PegawaiCreateManyAndReturnArgs} args - Arguments to create many Pegawais.
     * @example
     * // Create many Pegawais
     * const pegawai = await prisma.pegawai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pegawais and only return the `id`
     * const pegawaiWithIdOnly = await prisma.pegawai.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PegawaiCreateManyAndReturnArgs>(args?: SelectSubset<T, PegawaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pegawai.
     * @param {PegawaiDeleteArgs} args - Arguments to delete one Pegawai.
     * @example
     * // Delete one Pegawai
     * const Pegawai = await prisma.pegawai.delete({
     *   where: {
     *     // ... filter to delete one Pegawai
     *   }
     * })
     * 
     */
    delete<T extends PegawaiDeleteArgs>(args: SelectSubset<T, PegawaiDeleteArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pegawai.
     * @param {PegawaiUpdateArgs} args - Arguments to update one Pegawai.
     * @example
     * // Update one Pegawai
     * const pegawai = await prisma.pegawai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PegawaiUpdateArgs>(args: SelectSubset<T, PegawaiUpdateArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pegawais.
     * @param {PegawaiDeleteManyArgs} args - Arguments to filter Pegawais to delete.
     * @example
     * // Delete a few Pegawais
     * const { count } = await prisma.pegawai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PegawaiDeleteManyArgs>(args?: SelectSubset<T, PegawaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pegawais
     * const pegawai = await prisma.pegawai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PegawaiUpdateManyArgs>(args: SelectSubset<T, PegawaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pegawais and returns the data updated in the database.
     * @param {PegawaiUpdateManyAndReturnArgs} args - Arguments to update many Pegawais.
     * @example
     * // Update many Pegawais
     * const pegawai = await prisma.pegawai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pegawais and only return the `id`
     * const pegawaiWithIdOnly = await prisma.pegawai.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PegawaiUpdateManyAndReturnArgs>(args: SelectSubset<T, PegawaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pegawai.
     * @param {PegawaiUpsertArgs} args - Arguments to update or create a Pegawai.
     * @example
     * // Update or create a Pegawai
     * const pegawai = await prisma.pegawai.upsert({
     *   create: {
     *     // ... data to create a Pegawai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pegawai we want to update
     *   }
     * })
     */
    upsert<T extends PegawaiUpsertArgs>(args: SelectSubset<T, PegawaiUpsertArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiCountArgs} args - Arguments to filter Pegawais to count.
     * @example
     * // Count the number of Pegawais
     * const count = await prisma.pegawai.count({
     *   where: {
     *     // ... the filter for the Pegawais we want to count
     *   }
     * })
    **/
    count<T extends PegawaiCountArgs>(
      args?: Subset<T, PegawaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PegawaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PegawaiAggregateArgs>(args: Subset<T, PegawaiAggregateArgs>): Prisma.PrismaPromise<GetPegawaiAggregateType<T>>

    /**
     * Group by Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiGroupByArgs} args - Group by arguments.
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
      T extends PegawaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PegawaiGroupByArgs['orderBy'] }
        : { orderBy?: PegawaiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PegawaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPegawaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pegawai model
   */
  readonly fields: PegawaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pegawai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PegawaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instansi<T extends Pegawai$instansiArgs<ExtArgs> = {}>(args?: Subset<T, Pegawai$instansiArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Pegawai$userArgs<ExtArgs> = {}>(args?: Subset<T, Pegawai$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reports<T extends Pegawai$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Pegawai$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pegawai model
   */
  interface PegawaiFieldRefs {
    readonly id: FieldRef<"Pegawai", 'Int'>
    readonly instansiId: FieldRef<"Pegawai", 'Int'>
    readonly foto: FieldRef<"Pegawai", 'String'>
    readonly namaPegawai: FieldRef<"Pegawai", 'String'>
    readonly nip: FieldRef<"Pegawai", 'String'>
    readonly tempatLahir: FieldRef<"Pegawai", 'String'>
    readonly tanggalLahir: FieldRef<"Pegawai", 'DateTime'>
    readonly jenisKelamin: FieldRef<"Pegawai", 'String'>
    readonly jabatan: FieldRef<"Pegawai", 'String'>
    readonly pangkat: FieldRef<"Pegawai", 'String'>
    readonly golongan: FieldRef<"Pegawai", 'String'>
    readonly createdAt: FieldRef<"Pegawai", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pegawai findUnique
   */
  export type PegawaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai findUniqueOrThrow
   */
  export type PegawaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai findFirst
   */
  export type PegawaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pegawais.
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Pegawai findFirstOrThrow
   */
  export type PegawaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pegawais.
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Pegawai findMany
   */
  export type PegawaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter, which Pegawais to fetch.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pegawais.
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Pegawai create
   */
  export type PegawaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * The data needed to create a Pegawai.
     */
    data: XOR<PegawaiCreateInput, PegawaiUncheckedCreateInput>
  }

  /**
   * Pegawai createMany
   */
  export type PegawaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pegawais.
     */
    data: PegawaiCreateManyInput | PegawaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pegawai createManyAndReturn
   */
  export type PegawaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * The data used to create many Pegawais.
     */
    data: PegawaiCreateManyInput | PegawaiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pegawai update
   */
  export type PegawaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * The data needed to update a Pegawai.
     */
    data: XOR<PegawaiUpdateInput, PegawaiUncheckedUpdateInput>
    /**
     * Choose, which Pegawai to update.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai updateMany
   */
  export type PegawaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pegawais.
     */
    data: XOR<PegawaiUpdateManyMutationInput, PegawaiUncheckedUpdateManyInput>
    /**
     * Filter which Pegawais to update
     */
    where?: PegawaiWhereInput
    /**
     * Limit how many Pegawais to update.
     */
    limit?: number
  }

  /**
   * Pegawai updateManyAndReturn
   */
  export type PegawaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * The data used to update Pegawais.
     */
    data: XOR<PegawaiUpdateManyMutationInput, PegawaiUncheckedUpdateManyInput>
    /**
     * Filter which Pegawais to update
     */
    where?: PegawaiWhereInput
    /**
     * Limit how many Pegawais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pegawai upsert
   */
  export type PegawaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * The filter to search for the Pegawai to update in case it exists.
     */
    where: PegawaiWhereUniqueInput
    /**
     * In case the Pegawai found by the `where` argument doesn't exist, create a new Pegawai with this data.
     */
    create: XOR<PegawaiCreateInput, PegawaiUncheckedCreateInput>
    /**
     * In case the Pegawai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PegawaiUpdateInput, PegawaiUncheckedUpdateInput>
  }

  /**
   * Pegawai delete
   */
  export type PegawaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter which Pegawai to delete.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai deleteMany
   */
  export type PegawaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pegawais to delete
     */
    where?: PegawaiWhereInput
    /**
     * Limit how many Pegawais to delete.
     */
    limit?: number
  }

  /**
   * Pegawai.instansi
   */
  export type Pegawai$instansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    where?: InstansiWhereInput
  }

  /**
   * Pegawai.user
   */
  export type Pegawai$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Pegawai.reports
   */
  export type Pegawai$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
    where?: LakReportWhereInput
    orderBy?: LakReportOrderByWithRelationInput | LakReportOrderByWithRelationInput[]
    cursor?: LakReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LakReportScalarFieldEnum | LakReportScalarFieldEnum[]
  }

  /**
   * Pegawai without action
   */
  export type PegawaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
  }


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
    pegawaiId: number | null
    instansiId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    pegawaiId: number | null
    instansiId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    pegawaiId: number | null
    instansiId: number | null
    nip: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    pegawaiId: number | null
    instansiId: number | null
    nip: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    pegawaiId: number
    instansiId: number
    nip: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    pegawaiId?: true
    instansiId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    pegawaiId?: true
    instansiId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    pegawaiId?: true
    instansiId?: true
    nip?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    pegawaiId?: true
    instansiId?: true
    nip?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    pegawaiId?: true
    instansiId?: true
    nip?: true
    password?: true
    role?: true
    createdAt?: true
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
    pegawaiId: number
    instansiId: number | null
    nip: string
    password: string
    role: $Enums.Role
    createdAt: Date
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
    pegawaiId?: boolean
    instansiId?: boolean
    nip?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
    instansi?: boolean | User$instansiArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    instansiId?: boolean
    nip?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
    instansi?: boolean | User$instansiArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    instansiId?: boolean
    nip?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
    instansi?: boolean | User$instansiArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    pegawaiId?: boolean
    instansiId?: boolean
    nip?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pegawaiId" | "instansiId" | "nip" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
    instansi?: boolean | User$instansiArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
    instansi?: boolean | User$instansiArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
    instansi?: boolean | User$instansiArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs>
      instansi: Prisma.$InstansiPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pegawaiId: number
      instansiId: number | null
      nip: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends PegawaiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PegawaiDefaultArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instansi<T extends User$instansiArgs<ExtArgs> = {}>(args?: Subset<T, User$instansiArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly pegawaiId: FieldRef<"User", 'Int'>
    readonly instansiId: FieldRef<"User", 'Int'>
    readonly nip: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.instansi
   */
  export type User$instansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    where?: InstansiWhereInput
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model LakReport
   */

  export type AggregateLakReport = {
    _count: LakReportCountAggregateOutputType | null
    _avg: LakReportAvgAggregateOutputType | null
    _sum: LakReportSumAggregateOutputType | null
    _min: LakReportMinAggregateOutputType | null
    _max: LakReportMaxAggregateOutputType | null
  }

  export type LakReportAvgAggregateOutputType = {
    id: number | null
    pegawaiId: number | null
    bulan: number | null
    tahun: number | null
    totalJam: number | null
    totalKegiatan: number | null
    totalJamTJ: number | null
    totalJamTT: number | null
  }

  export type LakReportSumAggregateOutputType = {
    id: number | null
    pegawaiId: number | null
    bulan: number | null
    tahun: number | null
    totalJam: number | null
    totalKegiatan: number | null
    totalJamTJ: number | null
    totalJamTT: number | null
  }

  export type LakReportMinAggregateOutputType = {
    id: number | null
    pegawaiId: number | null
    bulan: number | null
    tahun: number | null
    status: $Enums.ReportStatus | null
    totalJam: number | null
    totalKegiatan: number | null
    totalJamTJ: number | null
    totalJamTT: number | null
    createdAt: Date | null
    submittedAt: Date | null
    approvedAt: Date | null
  }

  export type LakReportMaxAggregateOutputType = {
    id: number | null
    pegawaiId: number | null
    bulan: number | null
    tahun: number | null
    status: $Enums.ReportStatus | null
    totalJam: number | null
    totalKegiatan: number | null
    totalJamTJ: number | null
    totalJamTT: number | null
    createdAt: Date | null
    submittedAt: Date | null
    approvedAt: Date | null
  }

  export type LakReportCountAggregateOutputType = {
    id: number
    pegawaiId: number
    bulan: number
    tahun: number
    status: number
    totalJam: number
    totalKegiatan: number
    totalJamTJ: number
    totalJamTT: number
    createdAt: number
    submittedAt: number
    approvedAt: number
    _all: number
  }


  export type LakReportAvgAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    totalJam?: true
    totalKegiatan?: true
    totalJamTJ?: true
    totalJamTT?: true
  }

  export type LakReportSumAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    totalJam?: true
    totalKegiatan?: true
    totalJamTJ?: true
    totalJamTT?: true
  }

  export type LakReportMinAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    status?: true
    totalJam?: true
    totalKegiatan?: true
    totalJamTJ?: true
    totalJamTT?: true
    createdAt?: true
    submittedAt?: true
    approvedAt?: true
  }

  export type LakReportMaxAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    status?: true
    totalJam?: true
    totalKegiatan?: true
    totalJamTJ?: true
    totalJamTT?: true
    createdAt?: true
    submittedAt?: true
    approvedAt?: true
  }

  export type LakReportCountAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    status?: true
    totalJam?: true
    totalKegiatan?: true
    totalJamTJ?: true
    totalJamTT?: true
    createdAt?: true
    submittedAt?: true
    approvedAt?: true
    _all?: true
  }

  export type LakReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LakReport to aggregate.
     */
    where?: LakReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakReports to fetch.
     */
    orderBy?: LakReportOrderByWithRelationInput | LakReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LakReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LakReports
    **/
    _count?: true | LakReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LakReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LakReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LakReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LakReportMaxAggregateInputType
  }

  export type GetLakReportAggregateType<T extends LakReportAggregateArgs> = {
        [P in keyof T & keyof AggregateLakReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLakReport[P]>
      : GetScalarType<T[P], AggregateLakReport[P]>
  }




  export type LakReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LakReportWhereInput
    orderBy?: LakReportOrderByWithAggregationInput | LakReportOrderByWithAggregationInput[]
    by: LakReportScalarFieldEnum[] | LakReportScalarFieldEnum
    having?: LakReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LakReportCountAggregateInputType | true
    _avg?: LakReportAvgAggregateInputType
    _sum?: LakReportSumAggregateInputType
    _min?: LakReportMinAggregateInputType
    _max?: LakReportMaxAggregateInputType
  }

  export type LakReportGroupByOutputType = {
    id: number
    pegawaiId: number
    bulan: number
    tahun: number
    status: $Enums.ReportStatus
    totalJam: number
    totalKegiatan: number
    totalJamTJ: number
    totalJamTT: number
    createdAt: Date
    submittedAt: Date | null
    approvedAt: Date | null
    _count: LakReportCountAggregateOutputType | null
    _avg: LakReportAvgAggregateOutputType | null
    _sum: LakReportSumAggregateOutputType | null
    _min: LakReportMinAggregateOutputType | null
    _max: LakReportMaxAggregateOutputType | null
  }

  type GetLakReportGroupByPayload<T extends LakReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LakReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LakReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LakReportGroupByOutputType[P]>
            : GetScalarType<T[P], LakReportGroupByOutputType[P]>
        }
      >
    >


  export type LakReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    status?: boolean
    totalJam?: boolean
    totalKegiatan?: boolean
    totalJamTJ?: boolean
    totalJamTT?: boolean
    createdAt?: boolean
    submittedAt?: boolean
    approvedAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
    details?: boolean | LakReport$detailsArgs<ExtArgs>
    _count?: boolean | LakReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lakReport"]>

  export type LakReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    status?: boolean
    totalJam?: boolean
    totalKegiatan?: boolean
    totalJamTJ?: boolean
    totalJamTT?: boolean
    createdAt?: boolean
    submittedAt?: boolean
    approvedAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lakReport"]>

  export type LakReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    status?: boolean
    totalJam?: boolean
    totalKegiatan?: boolean
    totalJamTJ?: boolean
    totalJamTT?: boolean
    createdAt?: boolean
    submittedAt?: boolean
    approvedAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lakReport"]>

  export type LakReportSelectScalar = {
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    status?: boolean
    totalJam?: boolean
    totalKegiatan?: boolean
    totalJamTJ?: boolean
    totalJamTT?: boolean
    createdAt?: boolean
    submittedAt?: boolean
    approvedAt?: boolean
  }

  export type LakReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pegawaiId" | "bulan" | "tahun" | "status" | "totalJam" | "totalKegiatan" | "totalJamTJ" | "totalJamTT" | "createdAt" | "submittedAt" | "approvedAt", ExtArgs["result"]["lakReport"]>
  export type LakReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
    details?: boolean | LakReport$detailsArgs<ExtArgs>
    _count?: boolean | LakReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LakReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }
  export type LakReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }

  export type $LakReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LakReport"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs>
      details: Prisma.$LakDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pegawaiId: number
      bulan: number
      tahun: number
      status: $Enums.ReportStatus
      totalJam: number
      totalKegiatan: number
      totalJamTJ: number
      totalJamTT: number
      createdAt: Date
      submittedAt: Date | null
      approvedAt: Date | null
    }, ExtArgs["result"]["lakReport"]>
    composites: {}
  }

  type LakReportGetPayload<S extends boolean | null | undefined | LakReportDefaultArgs> = $Result.GetResult<Prisma.$LakReportPayload, S>

  type LakReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LakReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LakReportCountAggregateInputType | true
    }

  export interface LakReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LakReport'], meta: { name: 'LakReport' } }
    /**
     * Find zero or one LakReport that matches the filter.
     * @param {LakReportFindUniqueArgs} args - Arguments to find a LakReport
     * @example
     * // Get one LakReport
     * const lakReport = await prisma.lakReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LakReportFindUniqueArgs>(args: SelectSubset<T, LakReportFindUniqueArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LakReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LakReportFindUniqueOrThrowArgs} args - Arguments to find a LakReport
     * @example
     * // Get one LakReport
     * const lakReport = await prisma.lakReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LakReportFindUniqueOrThrowArgs>(args: SelectSubset<T, LakReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LakReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakReportFindFirstArgs} args - Arguments to find a LakReport
     * @example
     * // Get one LakReport
     * const lakReport = await prisma.lakReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LakReportFindFirstArgs>(args?: SelectSubset<T, LakReportFindFirstArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LakReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakReportFindFirstOrThrowArgs} args - Arguments to find a LakReport
     * @example
     * // Get one LakReport
     * const lakReport = await prisma.lakReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LakReportFindFirstOrThrowArgs>(args?: SelectSubset<T, LakReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LakReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LakReports
     * const lakReports = await prisma.lakReport.findMany()
     * 
     * // Get first 10 LakReports
     * const lakReports = await prisma.lakReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lakReportWithIdOnly = await prisma.lakReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LakReportFindManyArgs>(args?: SelectSubset<T, LakReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LakReport.
     * @param {LakReportCreateArgs} args - Arguments to create a LakReport.
     * @example
     * // Create one LakReport
     * const LakReport = await prisma.lakReport.create({
     *   data: {
     *     // ... data to create a LakReport
     *   }
     * })
     * 
     */
    create<T extends LakReportCreateArgs>(args: SelectSubset<T, LakReportCreateArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LakReports.
     * @param {LakReportCreateManyArgs} args - Arguments to create many LakReports.
     * @example
     * // Create many LakReports
     * const lakReport = await prisma.lakReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LakReportCreateManyArgs>(args?: SelectSubset<T, LakReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LakReports and returns the data saved in the database.
     * @param {LakReportCreateManyAndReturnArgs} args - Arguments to create many LakReports.
     * @example
     * // Create many LakReports
     * const lakReport = await prisma.lakReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LakReports and only return the `id`
     * const lakReportWithIdOnly = await prisma.lakReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LakReportCreateManyAndReturnArgs>(args?: SelectSubset<T, LakReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LakReport.
     * @param {LakReportDeleteArgs} args - Arguments to delete one LakReport.
     * @example
     * // Delete one LakReport
     * const LakReport = await prisma.lakReport.delete({
     *   where: {
     *     // ... filter to delete one LakReport
     *   }
     * })
     * 
     */
    delete<T extends LakReportDeleteArgs>(args: SelectSubset<T, LakReportDeleteArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LakReport.
     * @param {LakReportUpdateArgs} args - Arguments to update one LakReport.
     * @example
     * // Update one LakReport
     * const lakReport = await prisma.lakReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LakReportUpdateArgs>(args: SelectSubset<T, LakReportUpdateArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LakReports.
     * @param {LakReportDeleteManyArgs} args - Arguments to filter LakReports to delete.
     * @example
     * // Delete a few LakReports
     * const { count } = await prisma.lakReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LakReportDeleteManyArgs>(args?: SelectSubset<T, LakReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LakReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LakReports
     * const lakReport = await prisma.lakReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LakReportUpdateManyArgs>(args: SelectSubset<T, LakReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LakReports and returns the data updated in the database.
     * @param {LakReportUpdateManyAndReturnArgs} args - Arguments to update many LakReports.
     * @example
     * // Update many LakReports
     * const lakReport = await prisma.lakReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LakReports and only return the `id`
     * const lakReportWithIdOnly = await prisma.lakReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LakReportUpdateManyAndReturnArgs>(args: SelectSubset<T, LakReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LakReport.
     * @param {LakReportUpsertArgs} args - Arguments to update or create a LakReport.
     * @example
     * // Update or create a LakReport
     * const lakReport = await prisma.lakReport.upsert({
     *   create: {
     *     // ... data to create a LakReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LakReport we want to update
     *   }
     * })
     */
    upsert<T extends LakReportUpsertArgs>(args: SelectSubset<T, LakReportUpsertArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LakReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakReportCountArgs} args - Arguments to filter LakReports to count.
     * @example
     * // Count the number of LakReports
     * const count = await prisma.lakReport.count({
     *   where: {
     *     // ... the filter for the LakReports we want to count
     *   }
     * })
    **/
    count<T extends LakReportCountArgs>(
      args?: Subset<T, LakReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LakReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LakReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LakReportAggregateArgs>(args: Subset<T, LakReportAggregateArgs>): Prisma.PrismaPromise<GetLakReportAggregateType<T>>

    /**
     * Group by LakReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakReportGroupByArgs} args - Group by arguments.
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
      T extends LakReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LakReportGroupByArgs['orderBy'] }
        : { orderBy?: LakReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LakReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLakReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LakReport model
   */
  readonly fields: LakReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LakReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LakReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends PegawaiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PegawaiDefaultArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    details<T extends LakReport$detailsArgs<ExtArgs> = {}>(args?: Subset<T, LakReport$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LakReport model
   */
  interface LakReportFieldRefs {
    readonly id: FieldRef<"LakReport", 'Int'>
    readonly pegawaiId: FieldRef<"LakReport", 'Int'>
    readonly bulan: FieldRef<"LakReport", 'Int'>
    readonly tahun: FieldRef<"LakReport", 'Int'>
    readonly status: FieldRef<"LakReport", 'ReportStatus'>
    readonly totalJam: FieldRef<"LakReport", 'Float'>
    readonly totalKegiatan: FieldRef<"LakReport", 'Int'>
    readonly totalJamTJ: FieldRef<"LakReport", 'Float'>
    readonly totalJamTT: FieldRef<"LakReport", 'Float'>
    readonly createdAt: FieldRef<"LakReport", 'DateTime'>
    readonly submittedAt: FieldRef<"LakReport", 'DateTime'>
    readonly approvedAt: FieldRef<"LakReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LakReport findUnique
   */
  export type LakReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
    /**
     * Filter, which LakReport to fetch.
     */
    where: LakReportWhereUniqueInput
  }

  /**
   * LakReport findUniqueOrThrow
   */
  export type LakReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
    /**
     * Filter, which LakReport to fetch.
     */
    where: LakReportWhereUniqueInput
  }

  /**
   * LakReport findFirst
   */
  export type LakReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
    /**
     * Filter, which LakReport to fetch.
     */
    where?: LakReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakReports to fetch.
     */
    orderBy?: LakReportOrderByWithRelationInput | LakReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LakReports.
     */
    cursor?: LakReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LakReports.
     */
    distinct?: LakReportScalarFieldEnum | LakReportScalarFieldEnum[]
  }

  /**
   * LakReport findFirstOrThrow
   */
  export type LakReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
    /**
     * Filter, which LakReport to fetch.
     */
    where?: LakReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakReports to fetch.
     */
    orderBy?: LakReportOrderByWithRelationInput | LakReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LakReports.
     */
    cursor?: LakReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LakReports.
     */
    distinct?: LakReportScalarFieldEnum | LakReportScalarFieldEnum[]
  }

  /**
   * LakReport findMany
   */
  export type LakReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
    /**
     * Filter, which LakReports to fetch.
     */
    where?: LakReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakReports to fetch.
     */
    orderBy?: LakReportOrderByWithRelationInput | LakReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LakReports.
     */
    cursor?: LakReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakReports.
     */
    skip?: number
    distinct?: LakReportScalarFieldEnum | LakReportScalarFieldEnum[]
  }

  /**
   * LakReport create
   */
  export type LakReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
    /**
     * The data needed to create a LakReport.
     */
    data: XOR<LakReportCreateInput, LakReportUncheckedCreateInput>
  }

  /**
   * LakReport createMany
   */
  export type LakReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LakReports.
     */
    data: LakReportCreateManyInput | LakReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LakReport createManyAndReturn
   */
  export type LakReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * The data used to create many LakReports.
     */
    data: LakReportCreateManyInput | LakReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LakReport update
   */
  export type LakReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
    /**
     * The data needed to update a LakReport.
     */
    data: XOR<LakReportUpdateInput, LakReportUncheckedUpdateInput>
    /**
     * Choose, which LakReport to update.
     */
    where: LakReportWhereUniqueInput
  }

  /**
   * LakReport updateMany
   */
  export type LakReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LakReports.
     */
    data: XOR<LakReportUpdateManyMutationInput, LakReportUncheckedUpdateManyInput>
    /**
     * Filter which LakReports to update
     */
    where?: LakReportWhereInput
    /**
     * Limit how many LakReports to update.
     */
    limit?: number
  }

  /**
   * LakReport updateManyAndReturn
   */
  export type LakReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * The data used to update LakReports.
     */
    data: XOR<LakReportUpdateManyMutationInput, LakReportUncheckedUpdateManyInput>
    /**
     * Filter which LakReports to update
     */
    where?: LakReportWhereInput
    /**
     * Limit how many LakReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LakReport upsert
   */
  export type LakReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
    /**
     * The filter to search for the LakReport to update in case it exists.
     */
    where: LakReportWhereUniqueInput
    /**
     * In case the LakReport found by the `where` argument doesn't exist, create a new LakReport with this data.
     */
    create: XOR<LakReportCreateInput, LakReportUncheckedCreateInput>
    /**
     * In case the LakReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LakReportUpdateInput, LakReportUncheckedUpdateInput>
  }

  /**
   * LakReport delete
   */
  export type LakReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
    /**
     * Filter which LakReport to delete.
     */
    where: LakReportWhereUniqueInput
  }

  /**
   * LakReport deleteMany
   */
  export type LakReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LakReports to delete
     */
    where?: LakReportWhereInput
    /**
     * Limit how many LakReports to delete.
     */
    limit?: number
  }

  /**
   * LakReport.details
   */
  export type LakReport$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
    where?: LakDetailWhereInput
    orderBy?: LakDetailOrderByWithRelationInput | LakDetailOrderByWithRelationInput[]
    cursor?: LakDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LakDetailScalarFieldEnum | LakDetailScalarFieldEnum[]
  }

  /**
   * LakReport without action
   */
  export type LakReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakReport
     */
    omit?: LakReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
  }


  /**
   * Model LakDetail
   */

  export type AggregateLakDetail = {
    _count: LakDetailCountAggregateOutputType | null
    _avg: LakDetailAvgAggregateOutputType | null
    _sum: LakDetailSumAggregateOutputType | null
    _min: LakDetailMinAggregateOutputType | null
    _max: LakDetailMaxAggregateOutputType | null
  }

  export type LakDetailAvgAggregateOutputType = {
    id: number | null
    reportId: number | null
    volume: number | null
    durasiJam: number | null
  }

  export type LakDetailSumAggregateOutputType = {
    id: number | null
    reportId: number | null
    volume: number | null
    durasiJam: number | null
  }

  export type LakDetailMinAggregateOutputType = {
    id: number | null
    reportId: number | null
    tanggal: Date | null
    jenisTugas: $Enums.JenisTugas | null
    uraianKegiatan: string | null
    volume: number | null
    satuan: string | null
    output: string | null
    jamMulai: string | null
    jamSelesai: string | null
    durasiJam: number | null
    createdAt: Date | null
  }

  export type LakDetailMaxAggregateOutputType = {
    id: number | null
    reportId: number | null
    tanggal: Date | null
    jenisTugas: $Enums.JenisTugas | null
    uraianKegiatan: string | null
    volume: number | null
    satuan: string | null
    output: string | null
    jamMulai: string | null
    jamSelesai: string | null
    durasiJam: number | null
    createdAt: Date | null
  }

  export type LakDetailCountAggregateOutputType = {
    id: number
    reportId: number
    tanggal: number
    jenisTugas: number
    uraianKegiatan: number
    volume: number
    satuan: number
    output: number
    jamMulai: number
    jamSelesai: number
    durasiJam: number
    createdAt: number
    _all: number
  }


  export type LakDetailAvgAggregateInputType = {
    id?: true
    reportId?: true
    volume?: true
    durasiJam?: true
  }

  export type LakDetailSumAggregateInputType = {
    id?: true
    reportId?: true
    volume?: true
    durasiJam?: true
  }

  export type LakDetailMinAggregateInputType = {
    id?: true
    reportId?: true
    tanggal?: true
    jenisTugas?: true
    uraianKegiatan?: true
    volume?: true
    satuan?: true
    output?: true
    jamMulai?: true
    jamSelesai?: true
    durasiJam?: true
    createdAt?: true
  }

  export type LakDetailMaxAggregateInputType = {
    id?: true
    reportId?: true
    tanggal?: true
    jenisTugas?: true
    uraianKegiatan?: true
    volume?: true
    satuan?: true
    output?: true
    jamMulai?: true
    jamSelesai?: true
    durasiJam?: true
    createdAt?: true
  }

  export type LakDetailCountAggregateInputType = {
    id?: true
    reportId?: true
    tanggal?: true
    jenisTugas?: true
    uraianKegiatan?: true
    volume?: true
    satuan?: true
    output?: true
    jamMulai?: true
    jamSelesai?: true
    durasiJam?: true
    createdAt?: true
    _all?: true
  }

  export type LakDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LakDetail to aggregate.
     */
    where?: LakDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakDetails to fetch.
     */
    orderBy?: LakDetailOrderByWithRelationInput | LakDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LakDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LakDetails
    **/
    _count?: true | LakDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LakDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LakDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LakDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LakDetailMaxAggregateInputType
  }

  export type GetLakDetailAggregateType<T extends LakDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateLakDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLakDetail[P]>
      : GetScalarType<T[P], AggregateLakDetail[P]>
  }




  export type LakDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LakDetailWhereInput
    orderBy?: LakDetailOrderByWithAggregationInput | LakDetailOrderByWithAggregationInput[]
    by: LakDetailScalarFieldEnum[] | LakDetailScalarFieldEnum
    having?: LakDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LakDetailCountAggregateInputType | true
    _avg?: LakDetailAvgAggregateInputType
    _sum?: LakDetailSumAggregateInputType
    _min?: LakDetailMinAggregateInputType
    _max?: LakDetailMaxAggregateInputType
  }

  export type LakDetailGroupByOutputType = {
    id: number
    reportId: number
    tanggal: Date
    jenisTugas: $Enums.JenisTugas
    uraianKegiatan: string
    volume: number | null
    satuan: string | null
    output: string | null
    jamMulai: string | null
    jamSelesai: string | null
    durasiJam: number
    createdAt: Date
    _count: LakDetailCountAggregateOutputType | null
    _avg: LakDetailAvgAggregateOutputType | null
    _sum: LakDetailSumAggregateOutputType | null
    _min: LakDetailMinAggregateOutputType | null
    _max: LakDetailMaxAggregateOutputType | null
  }

  type GetLakDetailGroupByPayload<T extends LakDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LakDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LakDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LakDetailGroupByOutputType[P]>
            : GetScalarType<T[P], LakDetailGroupByOutputType[P]>
        }
      >
    >


  export type LakDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    tanggal?: boolean
    jenisTugas?: boolean
    uraianKegiatan?: boolean
    volume?: boolean
    satuan?: boolean
    output?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    durasiJam?: boolean
    createdAt?: boolean
    report?: boolean | LakReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lakDetail"]>

  export type LakDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    tanggal?: boolean
    jenisTugas?: boolean
    uraianKegiatan?: boolean
    volume?: boolean
    satuan?: boolean
    output?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    durasiJam?: boolean
    createdAt?: boolean
    report?: boolean | LakReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lakDetail"]>

  export type LakDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    tanggal?: boolean
    jenisTugas?: boolean
    uraianKegiatan?: boolean
    volume?: boolean
    satuan?: boolean
    output?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    durasiJam?: boolean
    createdAt?: boolean
    report?: boolean | LakReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lakDetail"]>

  export type LakDetailSelectScalar = {
    id?: boolean
    reportId?: boolean
    tanggal?: boolean
    jenisTugas?: boolean
    uraianKegiatan?: boolean
    volume?: boolean
    satuan?: boolean
    output?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    durasiJam?: boolean
    createdAt?: boolean
  }

  export type LakDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "tanggal" | "jenisTugas" | "uraianKegiatan" | "volume" | "satuan" | "output" | "jamMulai" | "jamSelesai" | "durasiJam" | "createdAt", ExtArgs["result"]["lakDetail"]>
  export type LakDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | LakReportDefaultArgs<ExtArgs>
  }
  export type LakDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | LakReportDefaultArgs<ExtArgs>
  }
  export type LakDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | LakReportDefaultArgs<ExtArgs>
  }

  export type $LakDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LakDetail"
    objects: {
      report: Prisma.$LakReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reportId: number
      tanggal: Date
      jenisTugas: $Enums.JenisTugas
      uraianKegiatan: string
      volume: number | null
      satuan: string | null
      output: string | null
      jamMulai: string | null
      jamSelesai: string | null
      durasiJam: number
      createdAt: Date
    }, ExtArgs["result"]["lakDetail"]>
    composites: {}
  }

  type LakDetailGetPayload<S extends boolean | null | undefined | LakDetailDefaultArgs> = $Result.GetResult<Prisma.$LakDetailPayload, S>

  type LakDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LakDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LakDetailCountAggregateInputType | true
    }

  export interface LakDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LakDetail'], meta: { name: 'LakDetail' } }
    /**
     * Find zero or one LakDetail that matches the filter.
     * @param {LakDetailFindUniqueArgs} args - Arguments to find a LakDetail
     * @example
     * // Get one LakDetail
     * const lakDetail = await prisma.lakDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LakDetailFindUniqueArgs>(args: SelectSubset<T, LakDetailFindUniqueArgs<ExtArgs>>): Prisma__LakDetailClient<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LakDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LakDetailFindUniqueOrThrowArgs} args - Arguments to find a LakDetail
     * @example
     * // Get one LakDetail
     * const lakDetail = await prisma.lakDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LakDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, LakDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LakDetailClient<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LakDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakDetailFindFirstArgs} args - Arguments to find a LakDetail
     * @example
     * // Get one LakDetail
     * const lakDetail = await prisma.lakDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LakDetailFindFirstArgs>(args?: SelectSubset<T, LakDetailFindFirstArgs<ExtArgs>>): Prisma__LakDetailClient<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LakDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakDetailFindFirstOrThrowArgs} args - Arguments to find a LakDetail
     * @example
     * // Get one LakDetail
     * const lakDetail = await prisma.lakDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LakDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, LakDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__LakDetailClient<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LakDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LakDetails
     * const lakDetails = await prisma.lakDetail.findMany()
     * 
     * // Get first 10 LakDetails
     * const lakDetails = await prisma.lakDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lakDetailWithIdOnly = await prisma.lakDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LakDetailFindManyArgs>(args?: SelectSubset<T, LakDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LakDetail.
     * @param {LakDetailCreateArgs} args - Arguments to create a LakDetail.
     * @example
     * // Create one LakDetail
     * const LakDetail = await prisma.lakDetail.create({
     *   data: {
     *     // ... data to create a LakDetail
     *   }
     * })
     * 
     */
    create<T extends LakDetailCreateArgs>(args: SelectSubset<T, LakDetailCreateArgs<ExtArgs>>): Prisma__LakDetailClient<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LakDetails.
     * @param {LakDetailCreateManyArgs} args - Arguments to create many LakDetails.
     * @example
     * // Create many LakDetails
     * const lakDetail = await prisma.lakDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LakDetailCreateManyArgs>(args?: SelectSubset<T, LakDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LakDetails and returns the data saved in the database.
     * @param {LakDetailCreateManyAndReturnArgs} args - Arguments to create many LakDetails.
     * @example
     * // Create many LakDetails
     * const lakDetail = await prisma.lakDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LakDetails and only return the `id`
     * const lakDetailWithIdOnly = await prisma.lakDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LakDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, LakDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LakDetail.
     * @param {LakDetailDeleteArgs} args - Arguments to delete one LakDetail.
     * @example
     * // Delete one LakDetail
     * const LakDetail = await prisma.lakDetail.delete({
     *   where: {
     *     // ... filter to delete one LakDetail
     *   }
     * })
     * 
     */
    delete<T extends LakDetailDeleteArgs>(args: SelectSubset<T, LakDetailDeleteArgs<ExtArgs>>): Prisma__LakDetailClient<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LakDetail.
     * @param {LakDetailUpdateArgs} args - Arguments to update one LakDetail.
     * @example
     * // Update one LakDetail
     * const lakDetail = await prisma.lakDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LakDetailUpdateArgs>(args: SelectSubset<T, LakDetailUpdateArgs<ExtArgs>>): Prisma__LakDetailClient<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LakDetails.
     * @param {LakDetailDeleteManyArgs} args - Arguments to filter LakDetails to delete.
     * @example
     * // Delete a few LakDetails
     * const { count } = await prisma.lakDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LakDetailDeleteManyArgs>(args?: SelectSubset<T, LakDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LakDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LakDetails
     * const lakDetail = await prisma.lakDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LakDetailUpdateManyArgs>(args: SelectSubset<T, LakDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LakDetails and returns the data updated in the database.
     * @param {LakDetailUpdateManyAndReturnArgs} args - Arguments to update many LakDetails.
     * @example
     * // Update many LakDetails
     * const lakDetail = await prisma.lakDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LakDetails and only return the `id`
     * const lakDetailWithIdOnly = await prisma.lakDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LakDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, LakDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LakDetail.
     * @param {LakDetailUpsertArgs} args - Arguments to update or create a LakDetail.
     * @example
     * // Update or create a LakDetail
     * const lakDetail = await prisma.lakDetail.upsert({
     *   create: {
     *     // ... data to create a LakDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LakDetail we want to update
     *   }
     * })
     */
    upsert<T extends LakDetailUpsertArgs>(args: SelectSubset<T, LakDetailUpsertArgs<ExtArgs>>): Prisma__LakDetailClient<$Result.GetResult<Prisma.$LakDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LakDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakDetailCountArgs} args - Arguments to filter LakDetails to count.
     * @example
     * // Count the number of LakDetails
     * const count = await prisma.lakDetail.count({
     *   where: {
     *     // ... the filter for the LakDetails we want to count
     *   }
     * })
    **/
    count<T extends LakDetailCountArgs>(
      args?: Subset<T, LakDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LakDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LakDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LakDetailAggregateArgs>(args: Subset<T, LakDetailAggregateArgs>): Prisma.PrismaPromise<GetLakDetailAggregateType<T>>

    /**
     * Group by LakDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakDetailGroupByArgs} args - Group by arguments.
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
      T extends LakDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LakDetailGroupByArgs['orderBy'] }
        : { orderBy?: LakDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LakDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLakDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LakDetail model
   */
  readonly fields: LakDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LakDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LakDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends LakReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LakReportDefaultArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LakDetail model
   */
  interface LakDetailFieldRefs {
    readonly id: FieldRef<"LakDetail", 'Int'>
    readonly reportId: FieldRef<"LakDetail", 'Int'>
    readonly tanggal: FieldRef<"LakDetail", 'DateTime'>
    readonly jenisTugas: FieldRef<"LakDetail", 'JenisTugas'>
    readonly uraianKegiatan: FieldRef<"LakDetail", 'String'>
    readonly volume: FieldRef<"LakDetail", 'Float'>
    readonly satuan: FieldRef<"LakDetail", 'String'>
    readonly output: FieldRef<"LakDetail", 'String'>
    readonly jamMulai: FieldRef<"LakDetail", 'String'>
    readonly jamSelesai: FieldRef<"LakDetail", 'String'>
    readonly durasiJam: FieldRef<"LakDetail", 'Float'>
    readonly createdAt: FieldRef<"LakDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LakDetail findUnique
   */
  export type LakDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
    /**
     * Filter, which LakDetail to fetch.
     */
    where: LakDetailWhereUniqueInput
  }

  /**
   * LakDetail findUniqueOrThrow
   */
  export type LakDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
    /**
     * Filter, which LakDetail to fetch.
     */
    where: LakDetailWhereUniqueInput
  }

  /**
   * LakDetail findFirst
   */
  export type LakDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
    /**
     * Filter, which LakDetail to fetch.
     */
    where?: LakDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakDetails to fetch.
     */
    orderBy?: LakDetailOrderByWithRelationInput | LakDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LakDetails.
     */
    cursor?: LakDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LakDetails.
     */
    distinct?: LakDetailScalarFieldEnum | LakDetailScalarFieldEnum[]
  }

  /**
   * LakDetail findFirstOrThrow
   */
  export type LakDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
    /**
     * Filter, which LakDetail to fetch.
     */
    where?: LakDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakDetails to fetch.
     */
    orderBy?: LakDetailOrderByWithRelationInput | LakDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LakDetails.
     */
    cursor?: LakDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LakDetails.
     */
    distinct?: LakDetailScalarFieldEnum | LakDetailScalarFieldEnum[]
  }

  /**
   * LakDetail findMany
   */
  export type LakDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
    /**
     * Filter, which LakDetails to fetch.
     */
    where?: LakDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakDetails to fetch.
     */
    orderBy?: LakDetailOrderByWithRelationInput | LakDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LakDetails.
     */
    cursor?: LakDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakDetails.
     */
    skip?: number
    distinct?: LakDetailScalarFieldEnum | LakDetailScalarFieldEnum[]
  }

  /**
   * LakDetail create
   */
  export type LakDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a LakDetail.
     */
    data: XOR<LakDetailCreateInput, LakDetailUncheckedCreateInput>
  }

  /**
   * LakDetail createMany
   */
  export type LakDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LakDetails.
     */
    data: LakDetailCreateManyInput | LakDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LakDetail createManyAndReturn
   */
  export type LakDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * The data used to create many LakDetails.
     */
    data: LakDetailCreateManyInput | LakDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LakDetail update
   */
  export type LakDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a LakDetail.
     */
    data: XOR<LakDetailUpdateInput, LakDetailUncheckedUpdateInput>
    /**
     * Choose, which LakDetail to update.
     */
    where: LakDetailWhereUniqueInput
  }

  /**
   * LakDetail updateMany
   */
  export type LakDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LakDetails.
     */
    data: XOR<LakDetailUpdateManyMutationInput, LakDetailUncheckedUpdateManyInput>
    /**
     * Filter which LakDetails to update
     */
    where?: LakDetailWhereInput
    /**
     * Limit how many LakDetails to update.
     */
    limit?: number
  }

  /**
   * LakDetail updateManyAndReturn
   */
  export type LakDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * The data used to update LakDetails.
     */
    data: XOR<LakDetailUpdateManyMutationInput, LakDetailUncheckedUpdateManyInput>
    /**
     * Filter which LakDetails to update
     */
    where?: LakDetailWhereInput
    /**
     * Limit how many LakDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LakDetail upsert
   */
  export type LakDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the LakDetail to update in case it exists.
     */
    where: LakDetailWhereUniqueInput
    /**
     * In case the LakDetail found by the `where` argument doesn't exist, create a new LakDetail with this data.
     */
    create: XOR<LakDetailCreateInput, LakDetailUncheckedCreateInput>
    /**
     * In case the LakDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LakDetailUpdateInput, LakDetailUncheckedUpdateInput>
  }

  /**
   * LakDetail delete
   */
  export type LakDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
    /**
     * Filter which LakDetail to delete.
     */
    where: LakDetailWhereUniqueInput
  }

  /**
   * LakDetail deleteMany
   */
  export type LakDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LakDetails to delete
     */
    where?: LakDetailWhereInput
    /**
     * Limit how many LakDetails to delete.
     */
    limit?: number
  }

  /**
   * LakDetail without action
   */
  export type LakDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakDetail
     */
    select?: LakDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LakDetail
     */
    omit?: LakDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakDetailInclude<ExtArgs> | null
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


  export const InstansiScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type InstansiScalarFieldEnum = (typeof InstansiScalarFieldEnum)[keyof typeof InstansiScalarFieldEnum]


  export const PegawaiScalarFieldEnum: {
    id: 'id',
    instansiId: 'instansiId',
    foto: 'foto',
    namaPegawai: 'namaPegawai',
    nip: 'nip',
    tempatLahir: 'tempatLahir',
    tanggalLahir: 'tanggalLahir',
    jenisKelamin: 'jenisKelamin',
    jabatan: 'jabatan',
    pangkat: 'pangkat',
    golongan: 'golongan',
    createdAt: 'createdAt'
  };

  export type PegawaiScalarFieldEnum = (typeof PegawaiScalarFieldEnum)[keyof typeof PegawaiScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    pegawaiId: 'pegawaiId',
    instansiId: 'instansiId',
    nip: 'nip',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LakReportScalarFieldEnum: {
    id: 'id',
    pegawaiId: 'pegawaiId',
    bulan: 'bulan',
    tahun: 'tahun',
    status: 'status',
    totalJam: 'totalJam',
    totalKegiatan: 'totalKegiatan',
    totalJamTJ: 'totalJamTJ',
    totalJamTT: 'totalJamTT',
    createdAt: 'createdAt',
    submittedAt: 'submittedAt',
    approvedAt: 'approvedAt'
  };

  export type LakReportScalarFieldEnum = (typeof LakReportScalarFieldEnum)[keyof typeof LakReportScalarFieldEnum]


  export const LakDetailScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    tanggal: 'tanggal',
    jenisTugas: 'jenisTugas',
    uraianKegiatan: 'uraianKegiatan',
    volume: 'volume',
    satuan: 'satuan',
    output: 'output',
    jamMulai: 'jamMulai',
    jamSelesai: 'jamSelesai',
    durasiJam: 'durasiJam',
    createdAt: 'createdAt'
  };

  export type LakDetailScalarFieldEnum = (typeof LakDetailScalarFieldEnum)[keyof typeof LakDetailScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'JenisTugas'
   */
  export type EnumJenisTugasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisTugas'>
    


  /**
   * Reference to a field of type 'JenisTugas[]'
   */
  export type ListEnumJenisTugasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisTugas[]'>
    
  /**
   * Deep Input Types
   */


  export type InstansiWhereInput = {
    AND?: InstansiWhereInput | InstansiWhereInput[]
    OR?: InstansiWhereInput[]
    NOT?: InstansiWhereInput | InstansiWhereInput[]
    id?: IntFilter<"Instansi"> | number
    nama?: StringFilter<"Instansi"> | string
    pegawai?: PegawaiListRelationFilter
    users?: UserListRelationFilter
  }

  export type InstansiOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    pegawai?: PegawaiOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type InstansiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstansiWhereInput | InstansiWhereInput[]
    OR?: InstansiWhereInput[]
    NOT?: InstansiWhereInput | InstansiWhereInput[]
    nama?: StringFilter<"Instansi"> | string
    pegawai?: PegawaiListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type InstansiOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: InstansiCountOrderByAggregateInput
    _avg?: InstansiAvgOrderByAggregateInput
    _max?: InstansiMaxOrderByAggregateInput
    _min?: InstansiMinOrderByAggregateInput
    _sum?: InstansiSumOrderByAggregateInput
  }

  export type InstansiScalarWhereWithAggregatesInput = {
    AND?: InstansiScalarWhereWithAggregatesInput | InstansiScalarWhereWithAggregatesInput[]
    OR?: InstansiScalarWhereWithAggregatesInput[]
    NOT?: InstansiScalarWhereWithAggregatesInput | InstansiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instansi"> | number
    nama?: StringWithAggregatesFilter<"Instansi"> | string
  }

  export type PegawaiWhereInput = {
    AND?: PegawaiWhereInput | PegawaiWhereInput[]
    OR?: PegawaiWhereInput[]
    NOT?: PegawaiWhereInput | PegawaiWhereInput[]
    id?: IntFilter<"Pegawai"> | number
    instansiId?: IntNullableFilter<"Pegawai"> | number | null
    foto?: StringNullableFilter<"Pegawai"> | string | null
    namaPegawai?: StringFilter<"Pegawai"> | string
    nip?: StringFilter<"Pegawai"> | string
    tempatLahir?: StringFilter<"Pegawai"> | string
    tanggalLahir?: DateTimeFilter<"Pegawai"> | Date | string
    jenisKelamin?: StringFilter<"Pegawai"> | string
    jabatan?: StringFilter<"Pegawai"> | string
    pangkat?: StringFilter<"Pegawai"> | string
    golongan?: StringFilter<"Pegawai"> | string
    createdAt?: DateTimeFilter<"Pegawai"> | Date | string
    instansi?: XOR<InstansiNullableScalarRelationFilter, InstansiWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reports?: LakReportListRelationFilter
  }

  export type PegawaiOrderByWithRelationInput = {
    id?: SortOrder
    instansiId?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    namaPegawai?: SortOrder
    nip?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    jabatan?: SortOrder
    pangkat?: SortOrder
    golongan?: SortOrder
    createdAt?: SortOrder
    instansi?: InstansiOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    reports?: LakReportOrderByRelationAggregateInput
  }

  export type PegawaiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nip?: string
    AND?: PegawaiWhereInput | PegawaiWhereInput[]
    OR?: PegawaiWhereInput[]
    NOT?: PegawaiWhereInput | PegawaiWhereInput[]
    instansiId?: IntNullableFilter<"Pegawai"> | number | null
    foto?: StringNullableFilter<"Pegawai"> | string | null
    namaPegawai?: StringFilter<"Pegawai"> | string
    tempatLahir?: StringFilter<"Pegawai"> | string
    tanggalLahir?: DateTimeFilter<"Pegawai"> | Date | string
    jenisKelamin?: StringFilter<"Pegawai"> | string
    jabatan?: StringFilter<"Pegawai"> | string
    pangkat?: StringFilter<"Pegawai"> | string
    golongan?: StringFilter<"Pegawai"> | string
    createdAt?: DateTimeFilter<"Pegawai"> | Date | string
    instansi?: XOR<InstansiNullableScalarRelationFilter, InstansiWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reports?: LakReportListRelationFilter
  }, "id" | "nip">

  export type PegawaiOrderByWithAggregationInput = {
    id?: SortOrder
    instansiId?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    namaPegawai?: SortOrder
    nip?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    jabatan?: SortOrder
    pangkat?: SortOrder
    golongan?: SortOrder
    createdAt?: SortOrder
    _count?: PegawaiCountOrderByAggregateInput
    _avg?: PegawaiAvgOrderByAggregateInput
    _max?: PegawaiMaxOrderByAggregateInput
    _min?: PegawaiMinOrderByAggregateInput
    _sum?: PegawaiSumOrderByAggregateInput
  }

  export type PegawaiScalarWhereWithAggregatesInput = {
    AND?: PegawaiScalarWhereWithAggregatesInput | PegawaiScalarWhereWithAggregatesInput[]
    OR?: PegawaiScalarWhereWithAggregatesInput[]
    NOT?: PegawaiScalarWhereWithAggregatesInput | PegawaiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pegawai"> | number
    instansiId?: IntNullableWithAggregatesFilter<"Pegawai"> | number | null
    foto?: StringNullableWithAggregatesFilter<"Pegawai"> | string | null
    namaPegawai?: StringWithAggregatesFilter<"Pegawai"> | string
    nip?: StringWithAggregatesFilter<"Pegawai"> | string
    tempatLahir?: StringWithAggregatesFilter<"Pegawai"> | string
    tanggalLahir?: DateTimeWithAggregatesFilter<"Pegawai"> | Date | string
    jenisKelamin?: StringWithAggregatesFilter<"Pegawai"> | string
    jabatan?: StringWithAggregatesFilter<"Pegawai"> | string
    pangkat?: StringWithAggregatesFilter<"Pegawai"> | string
    golongan?: StringWithAggregatesFilter<"Pegawai"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pegawai"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    pegawaiId?: IntFilter<"User"> | number
    instansiId?: IntNullableFilter<"User"> | number | null
    nip?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    pegawai?: XOR<PegawaiScalarRelationFilter, PegawaiWhereInput>
    instansi?: XOR<InstansiNullableScalarRelationFilter, InstansiWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    instansiId?: SortOrderInput | SortOrder
    nip?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    pegawai?: PegawaiOrderByWithRelationInput
    instansi?: InstansiOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pegawaiId?: number
    nip?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    instansiId?: IntNullableFilter<"User"> | number | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    pegawai?: XOR<PegawaiScalarRelationFilter, PegawaiWhereInput>
    instansi?: XOR<InstansiNullableScalarRelationFilter, InstansiWhereInput> | null
  }, "id" | "pegawaiId" | "nip">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    instansiId?: SortOrderInput | SortOrder
    nip?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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
    pegawaiId?: IntWithAggregatesFilter<"User"> | number
    instansiId?: IntNullableWithAggregatesFilter<"User"> | number | null
    nip?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LakReportWhereInput = {
    AND?: LakReportWhereInput | LakReportWhereInput[]
    OR?: LakReportWhereInput[]
    NOT?: LakReportWhereInput | LakReportWhereInput[]
    id?: IntFilter<"LakReport"> | number
    pegawaiId?: IntFilter<"LakReport"> | number
    bulan?: IntFilter<"LakReport"> | number
    tahun?: IntFilter<"LakReport"> | number
    status?: EnumReportStatusFilter<"LakReport"> | $Enums.ReportStatus
    totalJam?: FloatFilter<"LakReport"> | number
    totalKegiatan?: IntFilter<"LakReport"> | number
    totalJamTJ?: FloatFilter<"LakReport"> | number
    totalJamTT?: FloatFilter<"LakReport"> | number
    createdAt?: DateTimeFilter<"LakReport"> | Date | string
    submittedAt?: DateTimeNullableFilter<"LakReport"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"LakReport"> | Date | string | null
    pegawai?: XOR<PegawaiScalarRelationFilter, PegawaiWhereInput>
    details?: LakDetailListRelationFilter
  }

  export type LakReportOrderByWithRelationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    totalJam?: SortOrder
    totalKegiatan?: SortOrder
    totalJamTJ?: SortOrder
    totalJamTT?: SortOrder
    createdAt?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    pegawai?: PegawaiOrderByWithRelationInput
    details?: LakDetailOrderByRelationAggregateInput
  }

  export type LakReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pegawaiId_bulan_tahun?: LakReportPegawaiIdBulanTahunCompoundUniqueInput
    AND?: LakReportWhereInput | LakReportWhereInput[]
    OR?: LakReportWhereInput[]
    NOT?: LakReportWhereInput | LakReportWhereInput[]
    pegawaiId?: IntFilter<"LakReport"> | number
    bulan?: IntFilter<"LakReport"> | number
    tahun?: IntFilter<"LakReport"> | number
    status?: EnumReportStatusFilter<"LakReport"> | $Enums.ReportStatus
    totalJam?: FloatFilter<"LakReport"> | number
    totalKegiatan?: IntFilter<"LakReport"> | number
    totalJamTJ?: FloatFilter<"LakReport"> | number
    totalJamTT?: FloatFilter<"LakReport"> | number
    createdAt?: DateTimeFilter<"LakReport"> | Date | string
    submittedAt?: DateTimeNullableFilter<"LakReport"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"LakReport"> | Date | string | null
    pegawai?: XOR<PegawaiScalarRelationFilter, PegawaiWhereInput>
    details?: LakDetailListRelationFilter
  }, "id" | "pegawaiId_bulan_tahun">

  export type LakReportOrderByWithAggregationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    totalJam?: SortOrder
    totalKegiatan?: SortOrder
    totalJamTJ?: SortOrder
    totalJamTT?: SortOrder
    createdAt?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    _count?: LakReportCountOrderByAggregateInput
    _avg?: LakReportAvgOrderByAggregateInput
    _max?: LakReportMaxOrderByAggregateInput
    _min?: LakReportMinOrderByAggregateInput
    _sum?: LakReportSumOrderByAggregateInput
  }

  export type LakReportScalarWhereWithAggregatesInput = {
    AND?: LakReportScalarWhereWithAggregatesInput | LakReportScalarWhereWithAggregatesInput[]
    OR?: LakReportScalarWhereWithAggregatesInput[]
    NOT?: LakReportScalarWhereWithAggregatesInput | LakReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LakReport"> | number
    pegawaiId?: IntWithAggregatesFilter<"LakReport"> | number
    bulan?: IntWithAggregatesFilter<"LakReport"> | number
    tahun?: IntWithAggregatesFilter<"LakReport"> | number
    status?: EnumReportStatusWithAggregatesFilter<"LakReport"> | $Enums.ReportStatus
    totalJam?: FloatWithAggregatesFilter<"LakReport"> | number
    totalKegiatan?: IntWithAggregatesFilter<"LakReport"> | number
    totalJamTJ?: FloatWithAggregatesFilter<"LakReport"> | number
    totalJamTT?: FloatWithAggregatesFilter<"LakReport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LakReport"> | Date | string
    submittedAt?: DateTimeNullableWithAggregatesFilter<"LakReport"> | Date | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"LakReport"> | Date | string | null
  }

  export type LakDetailWhereInput = {
    AND?: LakDetailWhereInput | LakDetailWhereInput[]
    OR?: LakDetailWhereInput[]
    NOT?: LakDetailWhereInput | LakDetailWhereInput[]
    id?: IntFilter<"LakDetail"> | number
    reportId?: IntFilter<"LakDetail"> | number
    tanggal?: DateTimeFilter<"LakDetail"> | Date | string
    jenisTugas?: EnumJenisTugasFilter<"LakDetail"> | $Enums.JenisTugas
    uraianKegiatan?: StringFilter<"LakDetail"> | string
    volume?: FloatNullableFilter<"LakDetail"> | number | null
    satuan?: StringNullableFilter<"LakDetail"> | string | null
    output?: StringNullableFilter<"LakDetail"> | string | null
    jamMulai?: StringNullableFilter<"LakDetail"> | string | null
    jamSelesai?: StringNullableFilter<"LakDetail"> | string | null
    durasiJam?: FloatFilter<"LakDetail"> | number
    createdAt?: DateTimeFilter<"LakDetail"> | Date | string
    report?: XOR<LakReportScalarRelationFilter, LakReportWhereInput>
  }

  export type LakDetailOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    tanggal?: SortOrder
    jenisTugas?: SortOrder
    uraianKegiatan?: SortOrder
    volume?: SortOrderInput | SortOrder
    satuan?: SortOrderInput | SortOrder
    output?: SortOrderInput | SortOrder
    jamMulai?: SortOrderInput | SortOrder
    jamSelesai?: SortOrderInput | SortOrder
    durasiJam?: SortOrder
    createdAt?: SortOrder
    report?: LakReportOrderByWithRelationInput
  }

  export type LakDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LakDetailWhereInput | LakDetailWhereInput[]
    OR?: LakDetailWhereInput[]
    NOT?: LakDetailWhereInput | LakDetailWhereInput[]
    reportId?: IntFilter<"LakDetail"> | number
    tanggal?: DateTimeFilter<"LakDetail"> | Date | string
    jenisTugas?: EnumJenisTugasFilter<"LakDetail"> | $Enums.JenisTugas
    uraianKegiatan?: StringFilter<"LakDetail"> | string
    volume?: FloatNullableFilter<"LakDetail"> | number | null
    satuan?: StringNullableFilter<"LakDetail"> | string | null
    output?: StringNullableFilter<"LakDetail"> | string | null
    jamMulai?: StringNullableFilter<"LakDetail"> | string | null
    jamSelesai?: StringNullableFilter<"LakDetail"> | string | null
    durasiJam?: FloatFilter<"LakDetail"> | number
    createdAt?: DateTimeFilter<"LakDetail"> | Date | string
    report?: XOR<LakReportScalarRelationFilter, LakReportWhereInput>
  }, "id">

  export type LakDetailOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    tanggal?: SortOrder
    jenisTugas?: SortOrder
    uraianKegiatan?: SortOrder
    volume?: SortOrderInput | SortOrder
    satuan?: SortOrderInput | SortOrder
    output?: SortOrderInput | SortOrder
    jamMulai?: SortOrderInput | SortOrder
    jamSelesai?: SortOrderInput | SortOrder
    durasiJam?: SortOrder
    createdAt?: SortOrder
    _count?: LakDetailCountOrderByAggregateInput
    _avg?: LakDetailAvgOrderByAggregateInput
    _max?: LakDetailMaxOrderByAggregateInput
    _min?: LakDetailMinOrderByAggregateInput
    _sum?: LakDetailSumOrderByAggregateInput
  }

  export type LakDetailScalarWhereWithAggregatesInput = {
    AND?: LakDetailScalarWhereWithAggregatesInput | LakDetailScalarWhereWithAggregatesInput[]
    OR?: LakDetailScalarWhereWithAggregatesInput[]
    NOT?: LakDetailScalarWhereWithAggregatesInput | LakDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LakDetail"> | number
    reportId?: IntWithAggregatesFilter<"LakDetail"> | number
    tanggal?: DateTimeWithAggregatesFilter<"LakDetail"> | Date | string
    jenisTugas?: EnumJenisTugasWithAggregatesFilter<"LakDetail"> | $Enums.JenisTugas
    uraianKegiatan?: StringWithAggregatesFilter<"LakDetail"> | string
    volume?: FloatNullableWithAggregatesFilter<"LakDetail"> | number | null
    satuan?: StringNullableWithAggregatesFilter<"LakDetail"> | string | null
    output?: StringNullableWithAggregatesFilter<"LakDetail"> | string | null
    jamMulai?: StringNullableWithAggregatesFilter<"LakDetail"> | string | null
    jamSelesai?: StringNullableWithAggregatesFilter<"LakDetail"> | string | null
    durasiJam?: FloatWithAggregatesFilter<"LakDetail"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LakDetail"> | Date | string
  }

  export type InstansiCreateInput = {
    nama: string
    pegawai?: PegawaiCreateNestedManyWithoutInstansiInput
    users?: UserCreateNestedManyWithoutInstansiInput
  }

  export type InstansiUncheckedCreateInput = {
    id?: number
    nama: string
    pegawai?: PegawaiUncheckedCreateNestedManyWithoutInstansiInput
    users?: UserUncheckedCreateNestedManyWithoutInstansiInput
  }

  export type InstansiUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    pegawai?: PegawaiUpdateManyWithoutInstansiNestedInput
    users?: UserUpdateManyWithoutInstansiNestedInput
  }

  export type InstansiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    pegawai?: PegawaiUncheckedUpdateManyWithoutInstansiNestedInput
    users?: UserUncheckedUpdateManyWithoutInstansiNestedInput
  }

  export type InstansiCreateManyInput = {
    id?: number
    nama: string
  }

  export type InstansiUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type InstansiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type PegawaiCreateInput = {
    foto?: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt?: Date | string
    instansi?: InstansiCreateNestedOneWithoutPegawaiInput
    user?: UserCreateNestedOneWithoutPegawaiInput
    reports?: LakReportCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateInput = {
    id?: number
    instansiId?: number | null
    foto?: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPegawaiInput
    reports?: LakReportUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUpdateInput = {
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instansi?: InstansiUpdateOneWithoutPegawaiNestedInput
    user?: UserUpdateOneWithoutPegawaiNestedInput
    reports?: LakReportUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instansiId?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPegawaiNestedInput
    reports?: LakReportUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiCreateManyInput = {
    id?: number
    instansiId?: number | null
    foto?: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt?: Date | string
  }

  export type PegawaiUpdateManyMutationInput = {
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PegawaiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instansiId?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    nip: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    pegawai: PegawaiCreateNestedOneWithoutUserInput
    instansi?: InstansiCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    pegawaiId: number
    instansiId?: number | null
    nip: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateOneRequiredWithoutUserNestedInput
    instansi?: InstansiUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pegawaiId?: IntFieldUpdateOperationsInput | number
    instansiId?: NullableIntFieldUpdateOperationsInput | number | null
    nip?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    pegawaiId: number
    instansiId?: number | null
    nip: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pegawaiId?: IntFieldUpdateOperationsInput | number
    instansiId?: NullableIntFieldUpdateOperationsInput | number | null
    nip?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakReportCreateInput = {
    bulan: number
    tahun: number
    status?: $Enums.ReportStatus
    totalJam?: number
    totalKegiatan?: number
    totalJamTJ?: number
    totalJamTT?: number
    createdAt?: Date | string
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
    pegawai: PegawaiCreateNestedOneWithoutReportsInput
    details?: LakDetailCreateNestedManyWithoutReportInput
  }

  export type LakReportUncheckedCreateInput = {
    id?: number
    pegawaiId: number
    bulan: number
    tahun: number
    status?: $Enums.ReportStatus
    totalJam?: number
    totalKegiatan?: number
    totalJamTJ?: number
    totalJamTT?: number
    createdAt?: Date | string
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
    details?: LakDetailUncheckedCreateNestedManyWithoutReportInput
  }

  export type LakReportUpdateInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    totalJam?: FloatFieldUpdateOperationsInput | number
    totalKegiatan?: IntFieldUpdateOperationsInput | number
    totalJamTJ?: FloatFieldUpdateOperationsInput | number
    totalJamTT?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pegawai?: PegawaiUpdateOneRequiredWithoutReportsNestedInput
    details?: LakDetailUpdateManyWithoutReportNestedInput
  }

  export type LakReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pegawaiId?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    totalJam?: FloatFieldUpdateOperationsInput | number
    totalKegiatan?: IntFieldUpdateOperationsInput | number
    totalJamTJ?: FloatFieldUpdateOperationsInput | number
    totalJamTT?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: LakDetailUncheckedUpdateManyWithoutReportNestedInput
  }

  export type LakReportCreateManyInput = {
    id?: number
    pegawaiId: number
    bulan: number
    tahun: number
    status?: $Enums.ReportStatus
    totalJam?: number
    totalKegiatan?: number
    totalJamTJ?: number
    totalJamTT?: number
    createdAt?: Date | string
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type LakReportUpdateManyMutationInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    totalJam?: FloatFieldUpdateOperationsInput | number
    totalKegiatan?: IntFieldUpdateOperationsInput | number
    totalJamTJ?: FloatFieldUpdateOperationsInput | number
    totalJamTT?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LakReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pegawaiId?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    totalJam?: FloatFieldUpdateOperationsInput | number
    totalKegiatan?: IntFieldUpdateOperationsInput | number
    totalJamTJ?: FloatFieldUpdateOperationsInput | number
    totalJamTT?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LakDetailCreateInput = {
    tanggal: Date | string
    jenisTugas: $Enums.JenisTugas
    uraianKegiatan: string
    volume?: number | null
    satuan?: string | null
    output?: string | null
    jamMulai?: string | null
    jamSelesai?: string | null
    durasiJam: number
    createdAt?: Date | string
    report: LakReportCreateNestedOneWithoutDetailsInput
  }

  export type LakDetailUncheckedCreateInput = {
    id?: number
    reportId: number
    tanggal: Date | string
    jenisTugas: $Enums.JenisTugas
    uraianKegiatan: string
    volume?: number | null
    satuan?: string | null
    output?: string | null
    jamMulai?: string | null
    jamSelesai?: string | null
    durasiJam: number
    createdAt?: Date | string
  }

  export type LakDetailUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisTugas?: EnumJenisTugasFieldUpdateOperationsInput | $Enums.JenisTugas
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    jamMulai?: NullableStringFieldUpdateOperationsInput | string | null
    jamSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    durasiJam?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: LakReportUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type LakDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisTugas?: EnumJenisTugasFieldUpdateOperationsInput | $Enums.JenisTugas
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    jamMulai?: NullableStringFieldUpdateOperationsInput | string | null
    jamSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    durasiJam?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakDetailCreateManyInput = {
    id?: number
    reportId: number
    tanggal: Date | string
    jenisTugas: $Enums.JenisTugas
    uraianKegiatan: string
    volume?: number | null
    satuan?: string | null
    output?: string | null
    jamMulai?: string | null
    jamSelesai?: string | null
    durasiJam: number
    createdAt?: Date | string
  }

  export type LakDetailUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisTugas?: EnumJenisTugasFieldUpdateOperationsInput | $Enums.JenisTugas
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    jamMulai?: NullableStringFieldUpdateOperationsInput | string | null
    jamSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    durasiJam?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisTugas?: EnumJenisTugasFieldUpdateOperationsInput | $Enums.JenisTugas
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    jamMulai?: NullableStringFieldUpdateOperationsInput | string | null
    jamSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    durasiJam?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PegawaiListRelationFilter = {
    every?: PegawaiWhereInput
    some?: PegawaiWhereInput
    none?: PegawaiWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PegawaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstansiCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type InstansiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstansiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type InstansiMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type InstansiSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type InstansiNullableScalarRelationFilter = {
    is?: InstansiWhereInput | null
    isNot?: InstansiWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LakReportListRelationFilter = {
    every?: LakReportWhereInput
    some?: LakReportWhereInput
    none?: LakReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LakReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PegawaiCountOrderByAggregateInput = {
    id?: SortOrder
    instansiId?: SortOrder
    foto?: SortOrder
    namaPegawai?: SortOrder
    nip?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    jabatan?: SortOrder
    pangkat?: SortOrder
    golongan?: SortOrder
    createdAt?: SortOrder
  }

  export type PegawaiAvgOrderByAggregateInput = {
    id?: SortOrder
    instansiId?: SortOrder
  }

  export type PegawaiMaxOrderByAggregateInput = {
    id?: SortOrder
    instansiId?: SortOrder
    foto?: SortOrder
    namaPegawai?: SortOrder
    nip?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    jabatan?: SortOrder
    pangkat?: SortOrder
    golongan?: SortOrder
    createdAt?: SortOrder
  }

  export type PegawaiMinOrderByAggregateInput = {
    id?: SortOrder
    instansiId?: SortOrder
    foto?: SortOrder
    namaPegawai?: SortOrder
    nip?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    jabatan?: SortOrder
    pangkat?: SortOrder
    golongan?: SortOrder
    createdAt?: SortOrder
  }

  export type PegawaiSumOrderByAggregateInput = {
    id?: SortOrder
    instansiId?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PegawaiScalarRelationFilter = {
    is?: PegawaiWhereInput
    isNot?: PegawaiWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    instansiId?: SortOrder
    nip?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    instansiId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    instansiId?: SortOrder
    nip?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    instansiId?: SortOrder
    nip?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    instansiId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
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

  export type LakDetailListRelationFilter = {
    every?: LakDetailWhereInput
    some?: LakDetailWhereInput
    none?: LakDetailWhereInput
  }

  export type LakDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LakReportPegawaiIdBulanTahunCompoundUniqueInput = {
    pegawaiId: number
    bulan: number
    tahun: number
  }

  export type LakReportCountOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    totalJam?: SortOrder
    totalKegiatan?: SortOrder
    totalJamTJ?: SortOrder
    totalJamTT?: SortOrder
    createdAt?: SortOrder
    submittedAt?: SortOrder
    approvedAt?: SortOrder
  }

  export type LakReportAvgOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    totalJam?: SortOrder
    totalKegiatan?: SortOrder
    totalJamTJ?: SortOrder
    totalJamTT?: SortOrder
  }

  export type LakReportMaxOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    totalJam?: SortOrder
    totalKegiatan?: SortOrder
    totalJamTJ?: SortOrder
    totalJamTT?: SortOrder
    createdAt?: SortOrder
    submittedAt?: SortOrder
    approvedAt?: SortOrder
  }

  export type LakReportMinOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    totalJam?: SortOrder
    totalKegiatan?: SortOrder
    totalJamTJ?: SortOrder
    totalJamTT?: SortOrder
    createdAt?: SortOrder
    submittedAt?: SortOrder
    approvedAt?: SortOrder
  }

  export type LakReportSumOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    totalJam?: SortOrder
    totalKegiatan?: SortOrder
    totalJamTJ?: SortOrder
    totalJamTT?: SortOrder
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
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

  export type EnumJenisTugasFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisTugas | EnumJenisTugasFieldRefInput<$PrismaModel>
    in?: $Enums.JenisTugas[] | ListEnumJenisTugasFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisTugas[] | ListEnumJenisTugasFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisTugasFilter<$PrismaModel> | $Enums.JenisTugas
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

  export type LakReportScalarRelationFilter = {
    is?: LakReportWhereInput
    isNot?: LakReportWhereInput
  }

  export type LakDetailCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    tanggal?: SortOrder
    jenisTugas?: SortOrder
    uraianKegiatan?: SortOrder
    volume?: SortOrder
    satuan?: SortOrder
    output?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    durasiJam?: SortOrder
    createdAt?: SortOrder
  }

  export type LakDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    volume?: SortOrder
    durasiJam?: SortOrder
  }

  export type LakDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    tanggal?: SortOrder
    jenisTugas?: SortOrder
    uraianKegiatan?: SortOrder
    volume?: SortOrder
    satuan?: SortOrder
    output?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    durasiJam?: SortOrder
    createdAt?: SortOrder
  }

  export type LakDetailMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    tanggal?: SortOrder
    jenisTugas?: SortOrder
    uraianKegiatan?: SortOrder
    volume?: SortOrder
    satuan?: SortOrder
    output?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    durasiJam?: SortOrder
    createdAt?: SortOrder
  }

  export type LakDetailSumOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    volume?: SortOrder
    durasiJam?: SortOrder
  }

  export type EnumJenisTugasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisTugas | EnumJenisTugasFieldRefInput<$PrismaModel>
    in?: $Enums.JenisTugas[] | ListEnumJenisTugasFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisTugas[] | ListEnumJenisTugasFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisTugasWithAggregatesFilter<$PrismaModel> | $Enums.JenisTugas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisTugasFilter<$PrismaModel>
    _max?: NestedEnumJenisTugasFilter<$PrismaModel>
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

  export type PegawaiCreateNestedManyWithoutInstansiInput = {
    create?: XOR<PegawaiCreateWithoutInstansiInput, PegawaiUncheckedCreateWithoutInstansiInput> | PegawaiCreateWithoutInstansiInput[] | PegawaiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutInstansiInput | PegawaiCreateOrConnectWithoutInstansiInput[]
    createMany?: PegawaiCreateManyInstansiInputEnvelope
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutInstansiInput = {
    create?: XOR<UserCreateWithoutInstansiInput, UserUncheckedCreateWithoutInstansiInput> | UserCreateWithoutInstansiInput[] | UserUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstansiInput | UserCreateOrConnectWithoutInstansiInput[]
    createMany?: UserCreateManyInstansiInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PegawaiUncheckedCreateNestedManyWithoutInstansiInput = {
    create?: XOR<PegawaiCreateWithoutInstansiInput, PegawaiUncheckedCreateWithoutInstansiInput> | PegawaiCreateWithoutInstansiInput[] | PegawaiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutInstansiInput | PegawaiCreateOrConnectWithoutInstansiInput[]
    createMany?: PegawaiCreateManyInstansiInputEnvelope
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutInstansiInput = {
    create?: XOR<UserCreateWithoutInstansiInput, UserUncheckedCreateWithoutInstansiInput> | UserCreateWithoutInstansiInput[] | UserUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstansiInput | UserCreateOrConnectWithoutInstansiInput[]
    createMany?: UserCreateManyInstansiInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PegawaiUpdateManyWithoutInstansiNestedInput = {
    create?: XOR<PegawaiCreateWithoutInstansiInput, PegawaiUncheckedCreateWithoutInstansiInput> | PegawaiCreateWithoutInstansiInput[] | PegawaiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutInstansiInput | PegawaiCreateOrConnectWithoutInstansiInput[]
    upsert?: PegawaiUpsertWithWhereUniqueWithoutInstansiInput | PegawaiUpsertWithWhereUniqueWithoutInstansiInput[]
    createMany?: PegawaiCreateManyInstansiInputEnvelope
    set?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    disconnect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    delete?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    update?: PegawaiUpdateWithWhereUniqueWithoutInstansiInput | PegawaiUpdateWithWhereUniqueWithoutInstansiInput[]
    updateMany?: PegawaiUpdateManyWithWhereWithoutInstansiInput | PegawaiUpdateManyWithWhereWithoutInstansiInput[]
    deleteMany?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
  }

  export type UserUpdateManyWithoutInstansiNestedInput = {
    create?: XOR<UserCreateWithoutInstansiInput, UserUncheckedCreateWithoutInstansiInput> | UserCreateWithoutInstansiInput[] | UserUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstansiInput | UserCreateOrConnectWithoutInstansiInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInstansiInput | UserUpsertWithWhereUniqueWithoutInstansiInput[]
    createMany?: UserCreateManyInstansiInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInstansiInput | UserUpdateWithWhereUniqueWithoutInstansiInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInstansiInput | UserUpdateManyWithWhereWithoutInstansiInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PegawaiUncheckedUpdateManyWithoutInstansiNestedInput = {
    create?: XOR<PegawaiCreateWithoutInstansiInput, PegawaiUncheckedCreateWithoutInstansiInput> | PegawaiCreateWithoutInstansiInput[] | PegawaiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutInstansiInput | PegawaiCreateOrConnectWithoutInstansiInput[]
    upsert?: PegawaiUpsertWithWhereUniqueWithoutInstansiInput | PegawaiUpsertWithWhereUniqueWithoutInstansiInput[]
    createMany?: PegawaiCreateManyInstansiInputEnvelope
    set?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    disconnect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    delete?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    update?: PegawaiUpdateWithWhereUniqueWithoutInstansiInput | PegawaiUpdateWithWhereUniqueWithoutInstansiInput[]
    updateMany?: PegawaiUpdateManyWithWhereWithoutInstansiInput | PegawaiUpdateManyWithWhereWithoutInstansiInput[]
    deleteMany?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutInstansiNestedInput = {
    create?: XOR<UserCreateWithoutInstansiInput, UserUncheckedCreateWithoutInstansiInput> | UserCreateWithoutInstansiInput[] | UserUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstansiInput | UserCreateOrConnectWithoutInstansiInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInstansiInput | UserUpsertWithWhereUniqueWithoutInstansiInput[]
    createMany?: UserCreateManyInstansiInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInstansiInput | UserUpdateWithWhereUniqueWithoutInstansiInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInstansiInput | UserUpdateManyWithWhereWithoutInstansiInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type InstansiCreateNestedOneWithoutPegawaiInput = {
    create?: XOR<InstansiCreateWithoutPegawaiInput, InstansiUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: InstansiCreateOrConnectWithoutPegawaiInput
    connect?: InstansiWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPegawaiInput = {
    create?: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: UserCreateOrConnectWithoutPegawaiInput
    connect?: UserWhereUniqueInput
  }

  export type LakReportCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<LakReportCreateWithoutPegawaiInput, LakReportUncheckedCreateWithoutPegawaiInput> | LakReportCreateWithoutPegawaiInput[] | LakReportUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: LakReportCreateOrConnectWithoutPegawaiInput | LakReportCreateOrConnectWithoutPegawaiInput[]
    createMany?: LakReportCreateManyPegawaiInputEnvelope
    connect?: LakReportWhereUniqueInput | LakReportWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutPegawaiInput = {
    create?: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: UserCreateOrConnectWithoutPegawaiInput
    connect?: UserWhereUniqueInput
  }

  export type LakReportUncheckedCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<LakReportCreateWithoutPegawaiInput, LakReportUncheckedCreateWithoutPegawaiInput> | LakReportCreateWithoutPegawaiInput[] | LakReportUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: LakReportCreateOrConnectWithoutPegawaiInput | LakReportCreateOrConnectWithoutPegawaiInput[]
    createMany?: LakReportCreateManyPegawaiInputEnvelope
    connect?: LakReportWhereUniqueInput | LakReportWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InstansiUpdateOneWithoutPegawaiNestedInput = {
    create?: XOR<InstansiCreateWithoutPegawaiInput, InstansiUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: InstansiCreateOrConnectWithoutPegawaiInput
    upsert?: InstansiUpsertWithoutPegawaiInput
    disconnect?: InstansiWhereInput | boolean
    delete?: InstansiWhereInput | boolean
    connect?: InstansiWhereUniqueInput
    update?: XOR<XOR<InstansiUpdateToOneWithWhereWithoutPegawaiInput, InstansiUpdateWithoutPegawaiInput>, InstansiUncheckedUpdateWithoutPegawaiInput>
  }

  export type UserUpdateOneWithoutPegawaiNestedInput = {
    create?: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: UserCreateOrConnectWithoutPegawaiInput
    upsert?: UserUpsertWithoutPegawaiInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPegawaiInput, UserUpdateWithoutPegawaiInput>, UserUncheckedUpdateWithoutPegawaiInput>
  }

  export type LakReportUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<LakReportCreateWithoutPegawaiInput, LakReportUncheckedCreateWithoutPegawaiInput> | LakReportCreateWithoutPegawaiInput[] | LakReportUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: LakReportCreateOrConnectWithoutPegawaiInput | LakReportCreateOrConnectWithoutPegawaiInput[]
    upsert?: LakReportUpsertWithWhereUniqueWithoutPegawaiInput | LakReportUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: LakReportCreateManyPegawaiInputEnvelope
    set?: LakReportWhereUniqueInput | LakReportWhereUniqueInput[]
    disconnect?: LakReportWhereUniqueInput | LakReportWhereUniqueInput[]
    delete?: LakReportWhereUniqueInput | LakReportWhereUniqueInput[]
    connect?: LakReportWhereUniqueInput | LakReportWhereUniqueInput[]
    update?: LakReportUpdateWithWhereUniqueWithoutPegawaiInput | LakReportUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: LakReportUpdateManyWithWhereWithoutPegawaiInput | LakReportUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: LakReportScalarWhereInput | LakReportScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateOneWithoutPegawaiNestedInput = {
    create?: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: UserCreateOrConnectWithoutPegawaiInput
    upsert?: UserUpsertWithoutPegawaiInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPegawaiInput, UserUpdateWithoutPegawaiInput>, UserUncheckedUpdateWithoutPegawaiInput>
  }

  export type LakReportUncheckedUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<LakReportCreateWithoutPegawaiInput, LakReportUncheckedCreateWithoutPegawaiInput> | LakReportCreateWithoutPegawaiInput[] | LakReportUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: LakReportCreateOrConnectWithoutPegawaiInput | LakReportCreateOrConnectWithoutPegawaiInput[]
    upsert?: LakReportUpsertWithWhereUniqueWithoutPegawaiInput | LakReportUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: LakReportCreateManyPegawaiInputEnvelope
    set?: LakReportWhereUniqueInput | LakReportWhereUniqueInput[]
    disconnect?: LakReportWhereUniqueInput | LakReportWhereUniqueInput[]
    delete?: LakReportWhereUniqueInput | LakReportWhereUniqueInput[]
    connect?: LakReportWhereUniqueInput | LakReportWhereUniqueInput[]
    update?: LakReportUpdateWithWhereUniqueWithoutPegawaiInput | LakReportUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: LakReportUpdateManyWithWhereWithoutPegawaiInput | LakReportUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: LakReportScalarWhereInput | LakReportScalarWhereInput[]
  }

  export type PegawaiCreateNestedOneWithoutUserInput = {
    create?: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutUserInput
    connect?: PegawaiWhereUniqueInput
  }

  export type InstansiCreateNestedOneWithoutUsersInput = {
    create?: XOR<InstansiCreateWithoutUsersInput, InstansiUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InstansiCreateOrConnectWithoutUsersInput
    connect?: InstansiWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PegawaiUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutUserInput
    upsert?: PegawaiUpsertWithoutUserInput
    connect?: PegawaiWhereUniqueInput
    update?: XOR<XOR<PegawaiUpdateToOneWithWhereWithoutUserInput, PegawaiUpdateWithoutUserInput>, PegawaiUncheckedUpdateWithoutUserInput>
  }

  export type InstansiUpdateOneWithoutUsersNestedInput = {
    create?: XOR<InstansiCreateWithoutUsersInput, InstansiUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InstansiCreateOrConnectWithoutUsersInput
    upsert?: InstansiUpsertWithoutUsersInput
    disconnect?: InstansiWhereInput | boolean
    delete?: InstansiWhereInput | boolean
    connect?: InstansiWhereUniqueInput
    update?: XOR<XOR<InstansiUpdateToOneWithWhereWithoutUsersInput, InstansiUpdateWithoutUsersInput>, InstansiUncheckedUpdateWithoutUsersInput>
  }

  export type PegawaiCreateNestedOneWithoutReportsInput = {
    create?: XOR<PegawaiCreateWithoutReportsInput, PegawaiUncheckedCreateWithoutReportsInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutReportsInput
    connect?: PegawaiWhereUniqueInput
  }

  export type LakDetailCreateNestedManyWithoutReportInput = {
    create?: XOR<LakDetailCreateWithoutReportInput, LakDetailUncheckedCreateWithoutReportInput> | LakDetailCreateWithoutReportInput[] | LakDetailUncheckedCreateWithoutReportInput[]
    connectOrCreate?: LakDetailCreateOrConnectWithoutReportInput | LakDetailCreateOrConnectWithoutReportInput[]
    createMany?: LakDetailCreateManyReportInputEnvelope
    connect?: LakDetailWhereUniqueInput | LakDetailWhereUniqueInput[]
  }

  export type LakDetailUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<LakDetailCreateWithoutReportInput, LakDetailUncheckedCreateWithoutReportInput> | LakDetailCreateWithoutReportInput[] | LakDetailUncheckedCreateWithoutReportInput[]
    connectOrCreate?: LakDetailCreateOrConnectWithoutReportInput | LakDetailCreateOrConnectWithoutReportInput[]
    createMany?: LakDetailCreateManyReportInputEnvelope
    connect?: LakDetailWhereUniqueInput | LakDetailWhereUniqueInput[]
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PegawaiUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<PegawaiCreateWithoutReportsInput, PegawaiUncheckedCreateWithoutReportsInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutReportsInput
    upsert?: PegawaiUpsertWithoutReportsInput
    connect?: PegawaiWhereUniqueInput
    update?: XOR<XOR<PegawaiUpdateToOneWithWhereWithoutReportsInput, PegawaiUpdateWithoutReportsInput>, PegawaiUncheckedUpdateWithoutReportsInput>
  }

  export type LakDetailUpdateManyWithoutReportNestedInput = {
    create?: XOR<LakDetailCreateWithoutReportInput, LakDetailUncheckedCreateWithoutReportInput> | LakDetailCreateWithoutReportInput[] | LakDetailUncheckedCreateWithoutReportInput[]
    connectOrCreate?: LakDetailCreateOrConnectWithoutReportInput | LakDetailCreateOrConnectWithoutReportInput[]
    upsert?: LakDetailUpsertWithWhereUniqueWithoutReportInput | LakDetailUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: LakDetailCreateManyReportInputEnvelope
    set?: LakDetailWhereUniqueInput | LakDetailWhereUniqueInput[]
    disconnect?: LakDetailWhereUniqueInput | LakDetailWhereUniqueInput[]
    delete?: LakDetailWhereUniqueInput | LakDetailWhereUniqueInput[]
    connect?: LakDetailWhereUniqueInput | LakDetailWhereUniqueInput[]
    update?: LakDetailUpdateWithWhereUniqueWithoutReportInput | LakDetailUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: LakDetailUpdateManyWithWhereWithoutReportInput | LakDetailUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: LakDetailScalarWhereInput | LakDetailScalarWhereInput[]
  }

  export type LakDetailUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<LakDetailCreateWithoutReportInput, LakDetailUncheckedCreateWithoutReportInput> | LakDetailCreateWithoutReportInput[] | LakDetailUncheckedCreateWithoutReportInput[]
    connectOrCreate?: LakDetailCreateOrConnectWithoutReportInput | LakDetailCreateOrConnectWithoutReportInput[]
    upsert?: LakDetailUpsertWithWhereUniqueWithoutReportInput | LakDetailUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: LakDetailCreateManyReportInputEnvelope
    set?: LakDetailWhereUniqueInput | LakDetailWhereUniqueInput[]
    disconnect?: LakDetailWhereUniqueInput | LakDetailWhereUniqueInput[]
    delete?: LakDetailWhereUniqueInput | LakDetailWhereUniqueInput[]
    connect?: LakDetailWhereUniqueInput | LakDetailWhereUniqueInput[]
    update?: LakDetailUpdateWithWhereUniqueWithoutReportInput | LakDetailUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: LakDetailUpdateManyWithWhereWithoutReportInput | LakDetailUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: LakDetailScalarWhereInput | LakDetailScalarWhereInput[]
  }

  export type LakReportCreateNestedOneWithoutDetailsInput = {
    create?: XOR<LakReportCreateWithoutDetailsInput, LakReportUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: LakReportCreateOrConnectWithoutDetailsInput
    connect?: LakReportWhereUniqueInput
  }

  export type EnumJenisTugasFieldUpdateOperationsInput = {
    set?: $Enums.JenisTugas
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LakReportUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<LakReportCreateWithoutDetailsInput, LakReportUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: LakReportCreateOrConnectWithoutDetailsInput
    upsert?: LakReportUpsertWithoutDetailsInput
    connect?: LakReportWhereUniqueInput
    update?: XOR<XOR<LakReportUpdateToOneWithWhereWithoutDetailsInput, LakReportUpdateWithoutDetailsInput>, LakReportUncheckedUpdateWithoutDetailsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
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

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
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

  export type NestedEnumJenisTugasFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisTugas | EnumJenisTugasFieldRefInput<$PrismaModel>
    in?: $Enums.JenisTugas[] | ListEnumJenisTugasFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisTugas[] | ListEnumJenisTugasFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisTugasFilter<$PrismaModel> | $Enums.JenisTugas
  }

  export type NestedEnumJenisTugasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisTugas | EnumJenisTugasFieldRefInput<$PrismaModel>
    in?: $Enums.JenisTugas[] | ListEnumJenisTugasFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisTugas[] | ListEnumJenisTugasFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisTugasWithAggregatesFilter<$PrismaModel> | $Enums.JenisTugas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisTugasFilter<$PrismaModel>
    _max?: NestedEnumJenisTugasFilter<$PrismaModel>
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

  export type PegawaiCreateWithoutInstansiInput = {
    foto?: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPegawaiInput
    reports?: LakReportCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutInstansiInput = {
    id?: number
    foto?: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPegawaiInput
    reports?: LakReportUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutInstansiInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutInstansiInput, PegawaiUncheckedCreateWithoutInstansiInput>
  }

  export type PegawaiCreateManyInstansiInputEnvelope = {
    data: PegawaiCreateManyInstansiInput | PegawaiCreateManyInstansiInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutInstansiInput = {
    nip: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    pegawai: PegawaiCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstansiInput = {
    id?: number
    pegawaiId: number
    nip: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutInstansiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstansiInput, UserUncheckedCreateWithoutInstansiInput>
  }

  export type UserCreateManyInstansiInputEnvelope = {
    data: UserCreateManyInstansiInput | UserCreateManyInstansiInput[]
    skipDuplicates?: boolean
  }

  export type PegawaiUpsertWithWhereUniqueWithoutInstansiInput = {
    where: PegawaiWhereUniqueInput
    update: XOR<PegawaiUpdateWithoutInstansiInput, PegawaiUncheckedUpdateWithoutInstansiInput>
    create: XOR<PegawaiCreateWithoutInstansiInput, PegawaiUncheckedCreateWithoutInstansiInput>
  }

  export type PegawaiUpdateWithWhereUniqueWithoutInstansiInput = {
    where: PegawaiWhereUniqueInput
    data: XOR<PegawaiUpdateWithoutInstansiInput, PegawaiUncheckedUpdateWithoutInstansiInput>
  }

  export type PegawaiUpdateManyWithWhereWithoutInstansiInput = {
    where: PegawaiScalarWhereInput
    data: XOR<PegawaiUpdateManyMutationInput, PegawaiUncheckedUpdateManyWithoutInstansiInput>
  }

  export type PegawaiScalarWhereInput = {
    AND?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
    OR?: PegawaiScalarWhereInput[]
    NOT?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
    id?: IntFilter<"Pegawai"> | number
    instansiId?: IntNullableFilter<"Pegawai"> | number | null
    foto?: StringNullableFilter<"Pegawai"> | string | null
    namaPegawai?: StringFilter<"Pegawai"> | string
    nip?: StringFilter<"Pegawai"> | string
    tempatLahir?: StringFilter<"Pegawai"> | string
    tanggalLahir?: DateTimeFilter<"Pegawai"> | Date | string
    jenisKelamin?: StringFilter<"Pegawai"> | string
    jabatan?: StringFilter<"Pegawai"> | string
    pangkat?: StringFilter<"Pegawai"> | string
    golongan?: StringFilter<"Pegawai"> | string
    createdAt?: DateTimeFilter<"Pegawai"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutInstansiInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutInstansiInput, UserUncheckedUpdateWithoutInstansiInput>
    create: XOR<UserCreateWithoutInstansiInput, UserUncheckedCreateWithoutInstansiInput>
  }

  export type UserUpdateWithWhereUniqueWithoutInstansiInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutInstansiInput, UserUncheckedUpdateWithoutInstansiInput>
  }

  export type UserUpdateManyWithWhereWithoutInstansiInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutInstansiInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    pegawaiId?: IntFilter<"User"> | number
    instansiId?: IntNullableFilter<"User"> | number | null
    nip?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type InstansiCreateWithoutPegawaiInput = {
    nama: string
    users?: UserCreateNestedManyWithoutInstansiInput
  }

  export type InstansiUncheckedCreateWithoutPegawaiInput = {
    id?: number
    nama: string
    users?: UserUncheckedCreateNestedManyWithoutInstansiInput
  }

  export type InstansiCreateOrConnectWithoutPegawaiInput = {
    where: InstansiWhereUniqueInput
    create: XOR<InstansiCreateWithoutPegawaiInput, InstansiUncheckedCreateWithoutPegawaiInput>
  }

  export type UserCreateWithoutPegawaiInput = {
    nip: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    instansi?: InstansiCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPegawaiInput = {
    id?: number
    instansiId?: number | null
    nip: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPegawaiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
  }

  export type LakReportCreateWithoutPegawaiInput = {
    bulan: number
    tahun: number
    status?: $Enums.ReportStatus
    totalJam?: number
    totalKegiatan?: number
    totalJamTJ?: number
    totalJamTT?: number
    createdAt?: Date | string
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
    details?: LakDetailCreateNestedManyWithoutReportInput
  }

  export type LakReportUncheckedCreateWithoutPegawaiInput = {
    id?: number
    bulan: number
    tahun: number
    status?: $Enums.ReportStatus
    totalJam?: number
    totalKegiatan?: number
    totalJamTJ?: number
    totalJamTT?: number
    createdAt?: Date | string
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
    details?: LakDetailUncheckedCreateNestedManyWithoutReportInput
  }

  export type LakReportCreateOrConnectWithoutPegawaiInput = {
    where: LakReportWhereUniqueInput
    create: XOR<LakReportCreateWithoutPegawaiInput, LakReportUncheckedCreateWithoutPegawaiInput>
  }

  export type LakReportCreateManyPegawaiInputEnvelope = {
    data: LakReportCreateManyPegawaiInput | LakReportCreateManyPegawaiInput[]
    skipDuplicates?: boolean
  }

  export type InstansiUpsertWithoutPegawaiInput = {
    update: XOR<InstansiUpdateWithoutPegawaiInput, InstansiUncheckedUpdateWithoutPegawaiInput>
    create: XOR<InstansiCreateWithoutPegawaiInput, InstansiUncheckedCreateWithoutPegawaiInput>
    where?: InstansiWhereInput
  }

  export type InstansiUpdateToOneWithWhereWithoutPegawaiInput = {
    where?: InstansiWhereInput
    data: XOR<InstansiUpdateWithoutPegawaiInput, InstansiUncheckedUpdateWithoutPegawaiInput>
  }

  export type InstansiUpdateWithoutPegawaiInput = {
    nama?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutInstansiNestedInput
  }

  export type InstansiUncheckedUpdateWithoutPegawaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutInstansiNestedInput
  }

  export type UserUpsertWithoutPegawaiInput = {
    update: XOR<UserUpdateWithoutPegawaiInput, UserUncheckedUpdateWithoutPegawaiInput>
    create: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPegawaiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPegawaiInput, UserUncheckedUpdateWithoutPegawaiInput>
  }

  export type UserUpdateWithoutPegawaiInput = {
    nip?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instansi?: InstansiUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPegawaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    instansiId?: NullableIntFieldUpdateOperationsInput | number | null
    nip?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakReportUpsertWithWhereUniqueWithoutPegawaiInput = {
    where: LakReportWhereUniqueInput
    update: XOR<LakReportUpdateWithoutPegawaiInput, LakReportUncheckedUpdateWithoutPegawaiInput>
    create: XOR<LakReportCreateWithoutPegawaiInput, LakReportUncheckedCreateWithoutPegawaiInput>
  }

  export type LakReportUpdateWithWhereUniqueWithoutPegawaiInput = {
    where: LakReportWhereUniqueInput
    data: XOR<LakReportUpdateWithoutPegawaiInput, LakReportUncheckedUpdateWithoutPegawaiInput>
  }

  export type LakReportUpdateManyWithWhereWithoutPegawaiInput = {
    where: LakReportScalarWhereInput
    data: XOR<LakReportUpdateManyMutationInput, LakReportUncheckedUpdateManyWithoutPegawaiInput>
  }

  export type LakReportScalarWhereInput = {
    AND?: LakReportScalarWhereInput | LakReportScalarWhereInput[]
    OR?: LakReportScalarWhereInput[]
    NOT?: LakReportScalarWhereInput | LakReportScalarWhereInput[]
    id?: IntFilter<"LakReport"> | number
    pegawaiId?: IntFilter<"LakReport"> | number
    bulan?: IntFilter<"LakReport"> | number
    tahun?: IntFilter<"LakReport"> | number
    status?: EnumReportStatusFilter<"LakReport"> | $Enums.ReportStatus
    totalJam?: FloatFilter<"LakReport"> | number
    totalKegiatan?: IntFilter<"LakReport"> | number
    totalJamTJ?: FloatFilter<"LakReport"> | number
    totalJamTT?: FloatFilter<"LakReport"> | number
    createdAt?: DateTimeFilter<"LakReport"> | Date | string
    submittedAt?: DateTimeNullableFilter<"LakReport"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"LakReport"> | Date | string | null
  }

  export type PegawaiCreateWithoutUserInput = {
    foto?: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt?: Date | string
    instansi?: InstansiCreateNestedOneWithoutPegawaiInput
    reports?: LakReportCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutUserInput = {
    id?: number
    instansiId?: number | null
    foto?: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt?: Date | string
    reports?: LakReportUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutUserInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
  }

  export type InstansiCreateWithoutUsersInput = {
    nama: string
    pegawai?: PegawaiCreateNestedManyWithoutInstansiInput
  }

  export type InstansiUncheckedCreateWithoutUsersInput = {
    id?: number
    nama: string
    pegawai?: PegawaiUncheckedCreateNestedManyWithoutInstansiInput
  }

  export type InstansiCreateOrConnectWithoutUsersInput = {
    where: InstansiWhereUniqueInput
    create: XOR<InstansiCreateWithoutUsersInput, InstansiUncheckedCreateWithoutUsersInput>
  }

  export type PegawaiUpsertWithoutUserInput = {
    update: XOR<PegawaiUpdateWithoutUserInput, PegawaiUncheckedUpdateWithoutUserInput>
    create: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
    where?: PegawaiWhereInput
  }

  export type PegawaiUpdateToOneWithWhereWithoutUserInput = {
    where?: PegawaiWhereInput
    data: XOR<PegawaiUpdateWithoutUserInput, PegawaiUncheckedUpdateWithoutUserInput>
  }

  export type PegawaiUpdateWithoutUserInput = {
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instansi?: InstansiUpdateOneWithoutPegawaiNestedInput
    reports?: LakReportUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    instansiId?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: LakReportUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type InstansiUpsertWithoutUsersInput = {
    update: XOR<InstansiUpdateWithoutUsersInput, InstansiUncheckedUpdateWithoutUsersInput>
    create: XOR<InstansiCreateWithoutUsersInput, InstansiUncheckedCreateWithoutUsersInput>
    where?: InstansiWhereInput
  }

  export type InstansiUpdateToOneWithWhereWithoutUsersInput = {
    where?: InstansiWhereInput
    data: XOR<InstansiUpdateWithoutUsersInput, InstansiUncheckedUpdateWithoutUsersInput>
  }

  export type InstansiUpdateWithoutUsersInput = {
    nama?: StringFieldUpdateOperationsInput | string
    pegawai?: PegawaiUpdateManyWithoutInstansiNestedInput
  }

  export type InstansiUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    pegawai?: PegawaiUncheckedUpdateManyWithoutInstansiNestedInput
  }

  export type PegawaiCreateWithoutReportsInput = {
    foto?: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt?: Date | string
    instansi?: InstansiCreateNestedOneWithoutPegawaiInput
    user?: UserCreateNestedOneWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutReportsInput = {
    id?: number
    instansiId?: number | null
    foto?: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutReportsInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutReportsInput, PegawaiUncheckedCreateWithoutReportsInput>
  }

  export type LakDetailCreateWithoutReportInput = {
    tanggal: Date | string
    jenisTugas: $Enums.JenisTugas
    uraianKegiatan: string
    volume?: number | null
    satuan?: string | null
    output?: string | null
    jamMulai?: string | null
    jamSelesai?: string | null
    durasiJam: number
    createdAt?: Date | string
  }

  export type LakDetailUncheckedCreateWithoutReportInput = {
    id?: number
    tanggal: Date | string
    jenisTugas: $Enums.JenisTugas
    uraianKegiatan: string
    volume?: number | null
    satuan?: string | null
    output?: string | null
    jamMulai?: string | null
    jamSelesai?: string | null
    durasiJam: number
    createdAt?: Date | string
  }

  export type LakDetailCreateOrConnectWithoutReportInput = {
    where: LakDetailWhereUniqueInput
    create: XOR<LakDetailCreateWithoutReportInput, LakDetailUncheckedCreateWithoutReportInput>
  }

  export type LakDetailCreateManyReportInputEnvelope = {
    data: LakDetailCreateManyReportInput | LakDetailCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type PegawaiUpsertWithoutReportsInput = {
    update: XOR<PegawaiUpdateWithoutReportsInput, PegawaiUncheckedUpdateWithoutReportsInput>
    create: XOR<PegawaiCreateWithoutReportsInput, PegawaiUncheckedCreateWithoutReportsInput>
    where?: PegawaiWhereInput
  }

  export type PegawaiUpdateToOneWithWhereWithoutReportsInput = {
    where?: PegawaiWhereInput
    data: XOR<PegawaiUpdateWithoutReportsInput, PegawaiUncheckedUpdateWithoutReportsInput>
  }

  export type PegawaiUpdateWithoutReportsInput = {
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instansi?: InstansiUpdateOneWithoutPegawaiNestedInput
    user?: UserUpdateOneWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    instansiId?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPegawaiNestedInput
  }

  export type LakDetailUpsertWithWhereUniqueWithoutReportInput = {
    where: LakDetailWhereUniqueInput
    update: XOR<LakDetailUpdateWithoutReportInput, LakDetailUncheckedUpdateWithoutReportInput>
    create: XOR<LakDetailCreateWithoutReportInput, LakDetailUncheckedCreateWithoutReportInput>
  }

  export type LakDetailUpdateWithWhereUniqueWithoutReportInput = {
    where: LakDetailWhereUniqueInput
    data: XOR<LakDetailUpdateWithoutReportInput, LakDetailUncheckedUpdateWithoutReportInput>
  }

  export type LakDetailUpdateManyWithWhereWithoutReportInput = {
    where: LakDetailScalarWhereInput
    data: XOR<LakDetailUpdateManyMutationInput, LakDetailUncheckedUpdateManyWithoutReportInput>
  }

  export type LakDetailScalarWhereInput = {
    AND?: LakDetailScalarWhereInput | LakDetailScalarWhereInput[]
    OR?: LakDetailScalarWhereInput[]
    NOT?: LakDetailScalarWhereInput | LakDetailScalarWhereInput[]
    id?: IntFilter<"LakDetail"> | number
    reportId?: IntFilter<"LakDetail"> | number
    tanggal?: DateTimeFilter<"LakDetail"> | Date | string
    jenisTugas?: EnumJenisTugasFilter<"LakDetail"> | $Enums.JenisTugas
    uraianKegiatan?: StringFilter<"LakDetail"> | string
    volume?: FloatNullableFilter<"LakDetail"> | number | null
    satuan?: StringNullableFilter<"LakDetail"> | string | null
    output?: StringNullableFilter<"LakDetail"> | string | null
    jamMulai?: StringNullableFilter<"LakDetail"> | string | null
    jamSelesai?: StringNullableFilter<"LakDetail"> | string | null
    durasiJam?: FloatFilter<"LakDetail"> | number
    createdAt?: DateTimeFilter<"LakDetail"> | Date | string
  }

  export type LakReportCreateWithoutDetailsInput = {
    bulan: number
    tahun: number
    status?: $Enums.ReportStatus
    totalJam?: number
    totalKegiatan?: number
    totalJamTJ?: number
    totalJamTT?: number
    createdAt?: Date | string
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
    pegawai: PegawaiCreateNestedOneWithoutReportsInput
  }

  export type LakReportUncheckedCreateWithoutDetailsInput = {
    id?: number
    pegawaiId: number
    bulan: number
    tahun: number
    status?: $Enums.ReportStatus
    totalJam?: number
    totalKegiatan?: number
    totalJamTJ?: number
    totalJamTT?: number
    createdAt?: Date | string
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type LakReportCreateOrConnectWithoutDetailsInput = {
    where: LakReportWhereUniqueInput
    create: XOR<LakReportCreateWithoutDetailsInput, LakReportUncheckedCreateWithoutDetailsInput>
  }

  export type LakReportUpsertWithoutDetailsInput = {
    update: XOR<LakReportUpdateWithoutDetailsInput, LakReportUncheckedUpdateWithoutDetailsInput>
    create: XOR<LakReportCreateWithoutDetailsInput, LakReportUncheckedCreateWithoutDetailsInput>
    where?: LakReportWhereInput
  }

  export type LakReportUpdateToOneWithWhereWithoutDetailsInput = {
    where?: LakReportWhereInput
    data: XOR<LakReportUpdateWithoutDetailsInput, LakReportUncheckedUpdateWithoutDetailsInput>
  }

  export type LakReportUpdateWithoutDetailsInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    totalJam?: FloatFieldUpdateOperationsInput | number
    totalKegiatan?: IntFieldUpdateOperationsInput | number
    totalJamTJ?: FloatFieldUpdateOperationsInput | number
    totalJamTT?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pegawai?: PegawaiUpdateOneRequiredWithoutReportsNestedInput
  }

  export type LakReportUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    pegawaiId?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    totalJam?: FloatFieldUpdateOperationsInput | number
    totalKegiatan?: IntFieldUpdateOperationsInput | number
    totalJamTJ?: FloatFieldUpdateOperationsInput | number
    totalJamTT?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PegawaiCreateManyInstansiInput = {
    id?: number
    foto?: string | null
    namaPegawai: string
    nip: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    jabatan: string
    pangkat: string
    golongan: string
    createdAt?: Date | string
  }

  export type UserCreateManyInstansiInput = {
    id?: number
    pegawaiId: number
    nip: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type PegawaiUpdateWithoutInstansiInput = {
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPegawaiNestedInput
    reports?: LakReportUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutInstansiInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPegawaiNestedInput
    reports?: LakReportUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateManyWithoutInstansiInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    namaPegawai?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutInstansiInput = {
    nip?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstansiInput = {
    id?: IntFieldUpdateOperationsInput | number
    pegawaiId?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutInstansiInput = {
    id?: IntFieldUpdateOperationsInput | number
    pegawaiId?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakReportCreateManyPegawaiInput = {
    id?: number
    bulan: number
    tahun: number
    status?: $Enums.ReportStatus
    totalJam?: number
    totalKegiatan?: number
    totalJamTJ?: number
    totalJamTT?: number
    createdAt?: Date | string
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type LakReportUpdateWithoutPegawaiInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    totalJam?: FloatFieldUpdateOperationsInput | number
    totalKegiatan?: IntFieldUpdateOperationsInput | number
    totalJamTJ?: FloatFieldUpdateOperationsInput | number
    totalJamTT?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: LakDetailUpdateManyWithoutReportNestedInput
  }

  export type LakReportUncheckedUpdateWithoutPegawaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    totalJam?: FloatFieldUpdateOperationsInput | number
    totalKegiatan?: IntFieldUpdateOperationsInput | number
    totalJamTJ?: FloatFieldUpdateOperationsInput | number
    totalJamTT?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: LakDetailUncheckedUpdateManyWithoutReportNestedInput
  }

  export type LakReportUncheckedUpdateManyWithoutPegawaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    totalJam?: FloatFieldUpdateOperationsInput | number
    totalKegiatan?: IntFieldUpdateOperationsInput | number
    totalJamTJ?: FloatFieldUpdateOperationsInput | number
    totalJamTT?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LakDetailCreateManyReportInput = {
    id?: number
    tanggal: Date | string
    jenisTugas: $Enums.JenisTugas
    uraianKegiatan: string
    volume?: number | null
    satuan?: string | null
    output?: string | null
    jamMulai?: string | null
    jamSelesai?: string | null
    durasiJam: number
    createdAt?: Date | string
  }

  export type LakDetailUpdateWithoutReportInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisTugas?: EnumJenisTugasFieldUpdateOperationsInput | $Enums.JenisTugas
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    jamMulai?: NullableStringFieldUpdateOperationsInput | string | null
    jamSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    durasiJam?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakDetailUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisTugas?: EnumJenisTugasFieldUpdateOperationsInput | $Enums.JenisTugas
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    jamMulai?: NullableStringFieldUpdateOperationsInput | string | null
    jamSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    durasiJam?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakDetailUncheckedUpdateManyWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisTugas?: EnumJenisTugasFieldUpdateOperationsInput | $Enums.JenisTugas
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    jamMulai?: NullableStringFieldUpdateOperationsInput | string | null
    jamSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    durasiJam?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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