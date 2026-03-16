
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
 * Model Pegawai
 * 
 */
export type Pegawai = $Result.DefaultSelection<Prisma.$PegawaiPayload>
/**
 * Model Jabatan
 * 
 */
export type Jabatan = $Result.DefaultSelection<Prisma.$JabatanPayload>
/**
 * Model UnitKerja
 * 
 */
export type UnitKerja = $Result.DefaultSelection<Prisma.$UnitKerjaPayload>
/**
 * Model LakReport
 * 
 */
export type LakReport = $Result.DefaultSelection<Prisma.$LakReportPayload>
/**
 * Model LakKegiatan
 * 
 */
export type LakKegiatan = $Result.DefaultSelection<Prisma.$LakKegiatanPayload>
/**
 * Model MonitoringLak
 * 
 */
export type MonitoringLak = $Result.DefaultSelection<Prisma.$MonitoringLakPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  KASUBAG: 'KASUBAG',
  PEGAWAI: 'PEGAWAI'
};

export type Role = (typeof Role)[keyof typeof Role]


export const LakStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type LakStatus = (typeof LakStatus)[keyof typeof LakStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type LakStatus = $Enums.LakStatus

export const LakStatus: typeof $Enums.LakStatus

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
   * `prisma.pegawai`: Exposes CRUD operations for the **Pegawai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pegawais
    * const pegawais = await prisma.pegawai.findMany()
    * ```
    */
  get pegawai(): Prisma.PegawaiDelegate<ExtArgs>;

  /**
   * `prisma.jabatan`: Exposes CRUD operations for the **Jabatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jabatans
    * const jabatans = await prisma.jabatan.findMany()
    * ```
    */
  get jabatan(): Prisma.JabatanDelegate<ExtArgs>;

  /**
   * `prisma.unitKerja`: Exposes CRUD operations for the **UnitKerja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitKerjas
    * const unitKerjas = await prisma.unitKerja.findMany()
    * ```
    */
  get unitKerja(): Prisma.UnitKerjaDelegate<ExtArgs>;

  /**
   * `prisma.lakReport`: Exposes CRUD operations for the **LakReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LakReports
    * const lakReports = await prisma.lakReport.findMany()
    * ```
    */
  get lakReport(): Prisma.LakReportDelegate<ExtArgs>;

  /**
   * `prisma.lakKegiatan`: Exposes CRUD operations for the **LakKegiatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LakKegiatans
    * const lakKegiatans = await prisma.lakKegiatan.findMany()
    * ```
    */
  get lakKegiatan(): Prisma.LakKegiatanDelegate<ExtArgs>;

  /**
   * `prisma.monitoringLak`: Exposes CRUD operations for the **MonitoringLak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonitoringLaks
    * const monitoringLaks = await prisma.monitoringLak.findMany()
    * ```
    */
  get monitoringLak(): Prisma.MonitoringLakDelegate<ExtArgs>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;
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
    Pegawai: 'Pegawai',
    Jabatan: 'Jabatan',
    UnitKerja: 'UnitKerja',
    LakReport: 'LakReport',
    LakKegiatan: 'LakKegiatan',
    MonitoringLak: 'MonitoringLak',
    Reminder: 'Reminder',
    Notification: 'Notification'
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
      modelProps: "user" | "pegawai" | "jabatan" | "unitKerja" | "lakReport" | "lakKegiatan" | "monitoringLak" | "reminder" | "notification"
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
      Jabatan: {
        payload: Prisma.$JabatanPayload<ExtArgs>
        fields: Prisma.JabatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JabatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JabatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          findFirst: {
            args: Prisma.JabatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JabatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          findMany: {
            args: Prisma.JabatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>[]
          }
          create: {
            args: Prisma.JabatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          createMany: {
            args: Prisma.JabatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JabatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>[]
          }
          delete: {
            args: Prisma.JabatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          update: {
            args: Prisma.JabatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          deleteMany: {
            args: Prisma.JabatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JabatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JabatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          aggregate: {
            args: Prisma.JabatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJabatan>
          }
          groupBy: {
            args: Prisma.JabatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<JabatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.JabatanCountArgs<ExtArgs>
            result: $Utils.Optional<JabatanCountAggregateOutputType> | number
          }
        }
      }
      UnitKerja: {
        payload: Prisma.$UnitKerjaPayload<ExtArgs>
        fields: Prisma.UnitKerjaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitKerjaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitKerjaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitKerjaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitKerjaPayload>
          }
          findFirst: {
            args: Prisma.UnitKerjaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitKerjaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitKerjaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitKerjaPayload>
          }
          findMany: {
            args: Prisma.UnitKerjaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitKerjaPayload>[]
          }
          create: {
            args: Prisma.UnitKerjaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitKerjaPayload>
          }
          createMany: {
            args: Prisma.UnitKerjaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitKerjaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitKerjaPayload>[]
          }
          delete: {
            args: Prisma.UnitKerjaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitKerjaPayload>
          }
          update: {
            args: Prisma.UnitKerjaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitKerjaPayload>
          }
          deleteMany: {
            args: Prisma.UnitKerjaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitKerjaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnitKerjaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitKerjaPayload>
          }
          aggregate: {
            args: Prisma.UnitKerjaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitKerja>
          }
          groupBy: {
            args: Prisma.UnitKerjaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitKerjaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitKerjaCountArgs<ExtArgs>
            result: $Utils.Optional<UnitKerjaCountAggregateOutputType> | number
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
      LakKegiatan: {
        payload: Prisma.$LakKegiatanPayload<ExtArgs>
        fields: Prisma.LakKegiatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LakKegiatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakKegiatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LakKegiatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakKegiatanPayload>
          }
          findFirst: {
            args: Prisma.LakKegiatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakKegiatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LakKegiatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakKegiatanPayload>
          }
          findMany: {
            args: Prisma.LakKegiatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakKegiatanPayload>[]
          }
          create: {
            args: Prisma.LakKegiatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakKegiatanPayload>
          }
          createMany: {
            args: Prisma.LakKegiatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LakKegiatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakKegiatanPayload>[]
          }
          delete: {
            args: Prisma.LakKegiatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakKegiatanPayload>
          }
          update: {
            args: Prisma.LakKegiatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakKegiatanPayload>
          }
          deleteMany: {
            args: Prisma.LakKegiatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LakKegiatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LakKegiatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LakKegiatanPayload>
          }
          aggregate: {
            args: Prisma.LakKegiatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLakKegiatan>
          }
          groupBy: {
            args: Prisma.LakKegiatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LakKegiatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LakKegiatanCountArgs<ExtArgs>
            result: $Utils.Optional<LakKegiatanCountAggregateOutputType> | number
          }
        }
      }
      MonitoringLak: {
        payload: Prisma.$MonitoringLakPayload<ExtArgs>
        fields: Prisma.MonitoringLakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonitoringLakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringLakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonitoringLakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringLakPayload>
          }
          findFirst: {
            args: Prisma.MonitoringLakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringLakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonitoringLakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringLakPayload>
          }
          findMany: {
            args: Prisma.MonitoringLakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringLakPayload>[]
          }
          create: {
            args: Prisma.MonitoringLakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringLakPayload>
          }
          createMany: {
            args: Prisma.MonitoringLakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonitoringLakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringLakPayload>[]
          }
          delete: {
            args: Prisma.MonitoringLakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringLakPayload>
          }
          update: {
            args: Prisma.MonitoringLakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringLakPayload>
          }
          deleteMany: {
            args: Prisma.MonitoringLakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonitoringLakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonitoringLakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringLakPayload>
          }
          aggregate: {
            args: Prisma.MonitoringLakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitoringLak>
          }
          groupBy: {
            args: Prisma.MonitoringLakGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonitoringLakGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonitoringLakCountArgs<ExtArgs>
            result: $Utils.Optional<MonitoringLakCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
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
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type PegawaiCountOutputType
   */

  export type PegawaiCountOutputType = {
    lakReports: number
    monitoring: number
    reminder: number
  }

  export type PegawaiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lakReports?: boolean | PegawaiCountOutputTypeCountLakReportsArgs
    monitoring?: boolean | PegawaiCountOutputTypeCountMonitoringArgs
    reminder?: boolean | PegawaiCountOutputTypeCountReminderArgs
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
  export type PegawaiCountOutputTypeCountLakReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LakReportWhereInput
  }

  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeCountMonitoringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitoringLakWhereInput
  }

  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeCountReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }


  /**
   * Count Type JabatanCountOutputType
   */

  export type JabatanCountOutputType = {
    pegawai: number
  }

  export type JabatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | JabatanCountOutputTypeCountPegawaiArgs
  }

  // Custom InputTypes
  /**
   * JabatanCountOutputType without action
   */
  export type JabatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JabatanCountOutputType
     */
    select?: JabatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JabatanCountOutputType without action
   */
  export type JabatanCountOutputTypeCountPegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PegawaiWhereInput
  }


  /**
   * Count Type UnitKerjaCountOutputType
   */

  export type UnitKerjaCountOutputType = {
    pegawai: number
  }

  export type UnitKerjaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | UnitKerjaCountOutputTypeCountPegawaiArgs
  }

  // Custom InputTypes
  /**
   * UnitKerjaCountOutputType without action
   */
  export type UnitKerjaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerjaCountOutputType
     */
    select?: UnitKerjaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitKerjaCountOutputType without action
   */
  export type UnitKerjaCountOutputTypeCountPegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PegawaiWhereInput
  }


  /**
   * Count Type LakReportCountOutputType
   */

  export type LakReportCountOutputType = {
    kegiatan: number
  }

  export type LakReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | LakReportCountOutputTypeCountKegiatanArgs
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
  export type LakReportCountOutputTypeCountKegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LakKegiatanWhereInput
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
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    pegawaiId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    pegawaiId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    pegawaiId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    pegawaiId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    pegawaiId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    pegawaiId?: true
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
    name: string
    email: string
    password: string
    role: $Enums.Role
    pegawaiId: string | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    pegawaiId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pegawai?: boolean | User$pegawaiArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    pegawaiId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pegawai?: boolean | User$pegawaiArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    pegawaiId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | User$pegawaiArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | User$pegawaiArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      pegawaiId: string | null
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
    pegawai<T extends User$pegawaiArgs<ExtArgs> = {}>(args?: Subset<T, User$pegawaiArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly pegawaiId: FieldRef<"User", 'String'>
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
   * User.pegawai
   */
  export type User$pegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    where?: PegawaiWhereInput
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
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
   * Model Pegawai
   */

  export type AggregatePegawai = {
    _count: PegawaiCountAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  export type PegawaiMinAggregateOutputType = {
    id: string | null
    nip: string | null
    nama: string | null
    pangkat: string | null
    golongan: string | null
    jabatanId: string | null
    unitId: string | null
    createdAt: Date | null
  }

  export type PegawaiMaxAggregateOutputType = {
    id: string | null
    nip: string | null
    nama: string | null
    pangkat: string | null
    golongan: string | null
    jabatanId: string | null
    unitId: string | null
    createdAt: Date | null
  }

  export type PegawaiCountAggregateOutputType = {
    id: number
    nip: number
    nama: number
    pangkat: number
    golongan: number
    jabatanId: number
    unitId: number
    createdAt: number
    _all: number
  }


  export type PegawaiMinAggregateInputType = {
    id?: true
    nip?: true
    nama?: true
    pangkat?: true
    golongan?: true
    jabatanId?: true
    unitId?: true
    createdAt?: true
  }

  export type PegawaiMaxAggregateInputType = {
    id?: true
    nip?: true
    nama?: true
    pangkat?: true
    golongan?: true
    jabatanId?: true
    unitId?: true
    createdAt?: true
  }

  export type PegawaiCountAggregateInputType = {
    id?: true
    nip?: true
    nama?: true
    pangkat?: true
    golongan?: true
    jabatanId?: true
    unitId?: true
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
    _min?: PegawaiMinAggregateInputType
    _max?: PegawaiMaxAggregateInputType
  }

  export type PegawaiGroupByOutputType = {
    id: string
    nip: string
    nama: string
    pangkat: string | null
    golongan: string | null
    jabatanId: string
    unitId: string
    createdAt: Date
    _count: PegawaiCountAggregateOutputType | null
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
    nip?: boolean
    nama?: boolean
    pangkat?: boolean
    golongan?: boolean
    jabatanId?: boolean
    unitId?: boolean
    createdAt?: boolean
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
    unit?: boolean | UnitKerjaDefaultArgs<ExtArgs>
    user?: boolean | Pegawai$userArgs<ExtArgs>
    lakReports?: boolean | Pegawai$lakReportsArgs<ExtArgs>
    monitoring?: boolean | Pegawai$monitoringArgs<ExtArgs>
    reminder?: boolean | Pegawai$reminderArgs<ExtArgs>
    _count?: boolean | PegawaiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pegawai"]>

  export type PegawaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nip?: boolean
    nama?: boolean
    pangkat?: boolean
    golongan?: boolean
    jabatanId?: boolean
    unitId?: boolean
    createdAt?: boolean
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
    unit?: boolean | UnitKerjaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pegawai"]>

  export type PegawaiSelectScalar = {
    id?: boolean
    nip?: boolean
    nama?: boolean
    pangkat?: boolean
    golongan?: boolean
    jabatanId?: boolean
    unitId?: boolean
    createdAt?: boolean
  }

  export type PegawaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
    unit?: boolean | UnitKerjaDefaultArgs<ExtArgs>
    user?: boolean | Pegawai$userArgs<ExtArgs>
    lakReports?: boolean | Pegawai$lakReportsArgs<ExtArgs>
    monitoring?: boolean | Pegawai$monitoringArgs<ExtArgs>
    reminder?: boolean | Pegawai$reminderArgs<ExtArgs>
    _count?: boolean | PegawaiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PegawaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
    unit?: boolean | UnitKerjaDefaultArgs<ExtArgs>
  }

  export type $PegawaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pegawai"
    objects: {
      jabatan: Prisma.$JabatanPayload<ExtArgs>
      unit: Prisma.$UnitKerjaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      lakReports: Prisma.$LakReportPayload<ExtArgs>[]
      monitoring: Prisma.$MonitoringLakPayload<ExtArgs>[]
      reminder: Prisma.$ReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nip: string
      nama: string
      pangkat: string | null
      golongan: string | null
      jabatanId: string
      unitId: string
      createdAt: Date
    }, ExtArgs["result"]["pegawai"]>
    composites: {}
  }

  type PegawaiGetPayload<S extends boolean | null | undefined | PegawaiDefaultArgs> = $Result.GetResult<Prisma.$PegawaiPayload, S>

  type PegawaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PegawaiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PegawaiCountAggregateInputType | true
    }

  export interface PegawaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends PegawaiFindUniqueArgs>(args: SelectSubset<T, PegawaiFindUniqueArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends PegawaiFindUniqueOrThrowArgs>(args: SelectSubset<T, PegawaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends PegawaiFindFirstArgs>(args?: SelectSubset<T, PegawaiFindFirstArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends PegawaiFindFirstOrThrowArgs>(args?: SelectSubset<T, PegawaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends PegawaiFindManyArgs>(args?: SelectSubset<T, PegawaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findMany">>

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
    create<T extends PegawaiCreateArgs>(args: SelectSubset<T, PegawaiCreateArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends PegawaiCreateManyAndReturnArgs>(args?: SelectSubset<T, PegawaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends PegawaiDeleteArgs>(args: SelectSubset<T, PegawaiDeleteArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends PegawaiUpdateArgs>(args: SelectSubset<T, PegawaiUpdateArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends PegawaiUpsertArgs>(args: SelectSubset<T, PegawaiUpsertArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__PegawaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jabatan<T extends JabatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JabatanDefaultArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    unit<T extends UnitKerjaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitKerjaDefaultArgs<ExtArgs>>): Prisma__UnitKerjaClient<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends Pegawai$userArgs<ExtArgs> = {}>(args?: Subset<T, Pegawai$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    lakReports<T extends Pegawai$lakReportsArgs<ExtArgs> = {}>(args?: Subset<T, Pegawai$lakReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findMany"> | Null>
    monitoring<T extends Pegawai$monitoringArgs<ExtArgs> = {}>(args?: Subset<T, Pegawai$monitoringArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "findMany"> | Null>
    reminder<T extends Pegawai$reminderArgs<ExtArgs> = {}>(args?: Subset<T, Pegawai$reminderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"Pegawai", 'String'>
    readonly nip: FieldRef<"Pegawai", 'String'>
    readonly nama: FieldRef<"Pegawai", 'String'>
    readonly pangkat: FieldRef<"Pegawai", 'String'>
    readonly golongan: FieldRef<"Pegawai", 'String'>
    readonly jabatanId: FieldRef<"Pegawai", 'String'>
    readonly unitId: FieldRef<"Pegawai", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Pegawai.lakReports
   */
  export type Pegawai$lakReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakReport
     */
    select?: LakReportSelect<ExtArgs> | null
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
   * Pegawai.monitoring
   */
  export type Pegawai$monitoringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
    where?: MonitoringLakWhereInput
    orderBy?: MonitoringLakOrderByWithRelationInput | MonitoringLakOrderByWithRelationInput[]
    cursor?: MonitoringLakWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonitoringLakScalarFieldEnum | MonitoringLakScalarFieldEnum[]
  }

  /**
   * Pegawai.reminder
   */
  export type Pegawai$reminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
  }


  /**
   * Model Jabatan
   */

  export type AggregateJabatan = {
    _count: JabatanCountAggregateOutputType | null
    _min: JabatanMinAggregateOutputType | null
    _max: JabatanMaxAggregateOutputType | null
  }

  export type JabatanMinAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type JabatanMaxAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type JabatanCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type JabatanMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type JabatanMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type JabatanCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type JabatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jabatan to aggregate.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jabatans
    **/
    _count?: true | JabatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JabatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JabatanMaxAggregateInputType
  }

  export type GetJabatanAggregateType<T extends JabatanAggregateArgs> = {
        [P in keyof T & keyof AggregateJabatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJabatan[P]>
      : GetScalarType<T[P], AggregateJabatan[P]>
  }




  export type JabatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JabatanWhereInput
    orderBy?: JabatanOrderByWithAggregationInput | JabatanOrderByWithAggregationInput[]
    by: JabatanScalarFieldEnum[] | JabatanScalarFieldEnum
    having?: JabatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JabatanCountAggregateInputType | true
    _min?: JabatanMinAggregateInputType
    _max?: JabatanMaxAggregateInputType
  }

  export type JabatanGroupByOutputType = {
    id: string
    nama: string
    _count: JabatanCountAggregateOutputType | null
    _min: JabatanMinAggregateOutputType | null
    _max: JabatanMaxAggregateOutputType | null
  }

  type GetJabatanGroupByPayload<T extends JabatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JabatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JabatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JabatanGroupByOutputType[P]>
            : GetScalarType<T[P], JabatanGroupByOutputType[P]>
        }
      >
    >


  export type JabatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    pegawai?: boolean | Jabatan$pegawaiArgs<ExtArgs>
    _count?: boolean | JabatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jabatan"]>

  export type JabatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["jabatan"]>

  export type JabatanSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type JabatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | Jabatan$pegawaiArgs<ExtArgs>
    _count?: boolean | JabatanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JabatanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JabatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jabatan"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
    }, ExtArgs["result"]["jabatan"]>
    composites: {}
  }

  type JabatanGetPayload<S extends boolean | null | undefined | JabatanDefaultArgs> = $Result.GetResult<Prisma.$JabatanPayload, S>

  type JabatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JabatanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JabatanCountAggregateInputType | true
    }

  export interface JabatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jabatan'], meta: { name: 'Jabatan' } }
    /**
     * Find zero or one Jabatan that matches the filter.
     * @param {JabatanFindUniqueArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JabatanFindUniqueArgs>(args: SelectSubset<T, JabatanFindUniqueArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Jabatan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JabatanFindUniqueOrThrowArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JabatanFindUniqueOrThrowArgs>(args: SelectSubset<T, JabatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Jabatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindFirstArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JabatanFindFirstArgs>(args?: SelectSubset<T, JabatanFindFirstArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Jabatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindFirstOrThrowArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JabatanFindFirstOrThrowArgs>(args?: SelectSubset<T, JabatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jabatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jabatans
     * const jabatans = await prisma.jabatan.findMany()
     * 
     * // Get first 10 Jabatans
     * const jabatans = await prisma.jabatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jabatanWithIdOnly = await prisma.jabatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JabatanFindManyArgs>(args?: SelectSubset<T, JabatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Jabatan.
     * @param {JabatanCreateArgs} args - Arguments to create a Jabatan.
     * @example
     * // Create one Jabatan
     * const Jabatan = await prisma.jabatan.create({
     *   data: {
     *     // ... data to create a Jabatan
     *   }
     * })
     * 
     */
    create<T extends JabatanCreateArgs>(args: SelectSubset<T, JabatanCreateArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jabatans.
     * @param {JabatanCreateManyArgs} args - Arguments to create many Jabatans.
     * @example
     * // Create many Jabatans
     * const jabatan = await prisma.jabatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JabatanCreateManyArgs>(args?: SelectSubset<T, JabatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jabatans and returns the data saved in the database.
     * @param {JabatanCreateManyAndReturnArgs} args - Arguments to create many Jabatans.
     * @example
     * // Create many Jabatans
     * const jabatan = await prisma.jabatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jabatans and only return the `id`
     * const jabatanWithIdOnly = await prisma.jabatan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JabatanCreateManyAndReturnArgs>(args?: SelectSubset<T, JabatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Jabatan.
     * @param {JabatanDeleteArgs} args - Arguments to delete one Jabatan.
     * @example
     * // Delete one Jabatan
     * const Jabatan = await prisma.jabatan.delete({
     *   where: {
     *     // ... filter to delete one Jabatan
     *   }
     * })
     * 
     */
    delete<T extends JabatanDeleteArgs>(args: SelectSubset<T, JabatanDeleteArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Jabatan.
     * @param {JabatanUpdateArgs} args - Arguments to update one Jabatan.
     * @example
     * // Update one Jabatan
     * const jabatan = await prisma.jabatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JabatanUpdateArgs>(args: SelectSubset<T, JabatanUpdateArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jabatans.
     * @param {JabatanDeleteManyArgs} args - Arguments to filter Jabatans to delete.
     * @example
     * // Delete a few Jabatans
     * const { count } = await prisma.jabatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JabatanDeleteManyArgs>(args?: SelectSubset<T, JabatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jabatans
     * const jabatan = await prisma.jabatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JabatanUpdateManyArgs>(args: SelectSubset<T, JabatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jabatan.
     * @param {JabatanUpsertArgs} args - Arguments to update or create a Jabatan.
     * @example
     * // Update or create a Jabatan
     * const jabatan = await prisma.jabatan.upsert({
     *   create: {
     *     // ... data to create a Jabatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jabatan we want to update
     *   }
     * })
     */
    upsert<T extends JabatanUpsertArgs>(args: SelectSubset<T, JabatanUpsertArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Jabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanCountArgs} args - Arguments to filter Jabatans to count.
     * @example
     * // Count the number of Jabatans
     * const count = await prisma.jabatan.count({
     *   where: {
     *     // ... the filter for the Jabatans we want to count
     *   }
     * })
    **/
    count<T extends JabatanCountArgs>(
      args?: Subset<T, JabatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JabatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JabatanAggregateArgs>(args: Subset<T, JabatanAggregateArgs>): Prisma.PrismaPromise<GetJabatanAggregateType<T>>

    /**
     * Group by Jabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanGroupByArgs} args - Group by arguments.
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
      T extends JabatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JabatanGroupByArgs['orderBy'] }
        : { orderBy?: JabatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JabatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJabatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jabatan model
   */
  readonly fields: JabatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jabatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JabatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends Jabatan$pegawaiArgs<ExtArgs> = {}>(args?: Subset<T, Jabatan$pegawaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Jabatan model
   */ 
  interface JabatanFieldRefs {
    readonly id: FieldRef<"Jabatan", 'String'>
    readonly nama: FieldRef<"Jabatan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jabatan findUnique
   */
  export type JabatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan findUniqueOrThrow
   */
  export type JabatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan findFirst
   */
  export type JabatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jabatans.
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jabatans.
     */
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * Jabatan findFirstOrThrow
   */
  export type JabatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jabatans.
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jabatans.
     */
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * Jabatan findMany
   */
  export type JabatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatans to fetch.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jabatans.
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * Jabatan create
   */
  export type JabatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * The data needed to create a Jabatan.
     */
    data: XOR<JabatanCreateInput, JabatanUncheckedCreateInput>
  }

  /**
   * Jabatan createMany
   */
  export type JabatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jabatans.
     */
    data: JabatanCreateManyInput | JabatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jabatan createManyAndReturn
   */
  export type JabatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Jabatans.
     */
    data: JabatanCreateManyInput | JabatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jabatan update
   */
  export type JabatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * The data needed to update a Jabatan.
     */
    data: XOR<JabatanUpdateInput, JabatanUncheckedUpdateInput>
    /**
     * Choose, which Jabatan to update.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan updateMany
   */
  export type JabatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jabatans.
     */
    data: XOR<JabatanUpdateManyMutationInput, JabatanUncheckedUpdateManyInput>
    /**
     * Filter which Jabatans to update
     */
    where?: JabatanWhereInput
  }

  /**
   * Jabatan upsert
   */
  export type JabatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * The filter to search for the Jabatan to update in case it exists.
     */
    where: JabatanWhereUniqueInput
    /**
     * In case the Jabatan found by the `where` argument doesn't exist, create a new Jabatan with this data.
     */
    create: XOR<JabatanCreateInput, JabatanUncheckedCreateInput>
    /**
     * In case the Jabatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JabatanUpdateInput, JabatanUncheckedUpdateInput>
  }

  /**
   * Jabatan delete
   */
  export type JabatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter which Jabatan to delete.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan deleteMany
   */
  export type JabatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jabatans to delete
     */
    where?: JabatanWhereInput
  }

  /**
   * Jabatan.pegawai
   */
  export type Jabatan$pegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
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
   * Jabatan without action
   */
  export type JabatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
  }


  /**
   * Model UnitKerja
   */

  export type AggregateUnitKerja = {
    _count: UnitKerjaCountAggregateOutputType | null
    _min: UnitKerjaMinAggregateOutputType | null
    _max: UnitKerjaMaxAggregateOutputType | null
  }

  export type UnitKerjaMinAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type UnitKerjaMaxAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type UnitKerjaCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type UnitKerjaMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type UnitKerjaMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type UnitKerjaCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type UnitKerjaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitKerja to aggregate.
     */
    where?: UnitKerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitKerjas to fetch.
     */
    orderBy?: UnitKerjaOrderByWithRelationInput | UnitKerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitKerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitKerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitKerjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitKerjas
    **/
    _count?: true | UnitKerjaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitKerjaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitKerjaMaxAggregateInputType
  }

  export type GetUnitKerjaAggregateType<T extends UnitKerjaAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitKerja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitKerja[P]>
      : GetScalarType<T[P], AggregateUnitKerja[P]>
  }




  export type UnitKerjaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitKerjaWhereInput
    orderBy?: UnitKerjaOrderByWithAggregationInput | UnitKerjaOrderByWithAggregationInput[]
    by: UnitKerjaScalarFieldEnum[] | UnitKerjaScalarFieldEnum
    having?: UnitKerjaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitKerjaCountAggregateInputType | true
    _min?: UnitKerjaMinAggregateInputType
    _max?: UnitKerjaMaxAggregateInputType
  }

  export type UnitKerjaGroupByOutputType = {
    id: string
    nama: string
    _count: UnitKerjaCountAggregateOutputType | null
    _min: UnitKerjaMinAggregateOutputType | null
    _max: UnitKerjaMaxAggregateOutputType | null
  }

  type GetUnitKerjaGroupByPayload<T extends UnitKerjaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitKerjaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitKerjaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitKerjaGroupByOutputType[P]>
            : GetScalarType<T[P], UnitKerjaGroupByOutputType[P]>
        }
      >
    >


  export type UnitKerjaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    pegawai?: boolean | UnitKerja$pegawaiArgs<ExtArgs>
    _count?: boolean | UnitKerjaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitKerja"]>

  export type UnitKerjaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["unitKerja"]>

  export type UnitKerjaSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type UnitKerjaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | UnitKerja$pegawaiArgs<ExtArgs>
    _count?: boolean | UnitKerjaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitKerjaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UnitKerjaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitKerja"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
    }, ExtArgs["result"]["unitKerja"]>
    composites: {}
  }

  type UnitKerjaGetPayload<S extends boolean | null | undefined | UnitKerjaDefaultArgs> = $Result.GetResult<Prisma.$UnitKerjaPayload, S>

  type UnitKerjaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UnitKerjaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UnitKerjaCountAggregateInputType | true
    }

  export interface UnitKerjaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitKerja'], meta: { name: 'UnitKerja' } }
    /**
     * Find zero or one UnitKerja that matches the filter.
     * @param {UnitKerjaFindUniqueArgs} args - Arguments to find a UnitKerja
     * @example
     * // Get one UnitKerja
     * const unitKerja = await prisma.unitKerja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitKerjaFindUniqueArgs>(args: SelectSubset<T, UnitKerjaFindUniqueArgs<ExtArgs>>): Prisma__UnitKerjaClient<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UnitKerja that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UnitKerjaFindUniqueOrThrowArgs} args - Arguments to find a UnitKerja
     * @example
     * // Get one UnitKerja
     * const unitKerja = await prisma.unitKerja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitKerjaFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitKerjaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitKerjaClient<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UnitKerja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitKerjaFindFirstArgs} args - Arguments to find a UnitKerja
     * @example
     * // Get one UnitKerja
     * const unitKerja = await prisma.unitKerja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitKerjaFindFirstArgs>(args?: SelectSubset<T, UnitKerjaFindFirstArgs<ExtArgs>>): Prisma__UnitKerjaClient<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UnitKerja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitKerjaFindFirstOrThrowArgs} args - Arguments to find a UnitKerja
     * @example
     * // Get one UnitKerja
     * const unitKerja = await prisma.unitKerja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitKerjaFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitKerjaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitKerjaClient<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UnitKerjas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitKerjaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitKerjas
     * const unitKerjas = await prisma.unitKerja.findMany()
     * 
     * // Get first 10 UnitKerjas
     * const unitKerjas = await prisma.unitKerja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitKerjaWithIdOnly = await prisma.unitKerja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitKerjaFindManyArgs>(args?: SelectSubset<T, UnitKerjaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UnitKerja.
     * @param {UnitKerjaCreateArgs} args - Arguments to create a UnitKerja.
     * @example
     * // Create one UnitKerja
     * const UnitKerja = await prisma.unitKerja.create({
     *   data: {
     *     // ... data to create a UnitKerja
     *   }
     * })
     * 
     */
    create<T extends UnitKerjaCreateArgs>(args: SelectSubset<T, UnitKerjaCreateArgs<ExtArgs>>): Prisma__UnitKerjaClient<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UnitKerjas.
     * @param {UnitKerjaCreateManyArgs} args - Arguments to create many UnitKerjas.
     * @example
     * // Create many UnitKerjas
     * const unitKerja = await prisma.unitKerja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitKerjaCreateManyArgs>(args?: SelectSubset<T, UnitKerjaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnitKerjas and returns the data saved in the database.
     * @param {UnitKerjaCreateManyAndReturnArgs} args - Arguments to create many UnitKerjas.
     * @example
     * // Create many UnitKerjas
     * const unitKerja = await prisma.unitKerja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnitKerjas and only return the `id`
     * const unitKerjaWithIdOnly = await prisma.unitKerja.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitKerjaCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitKerjaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UnitKerja.
     * @param {UnitKerjaDeleteArgs} args - Arguments to delete one UnitKerja.
     * @example
     * // Delete one UnitKerja
     * const UnitKerja = await prisma.unitKerja.delete({
     *   where: {
     *     // ... filter to delete one UnitKerja
     *   }
     * })
     * 
     */
    delete<T extends UnitKerjaDeleteArgs>(args: SelectSubset<T, UnitKerjaDeleteArgs<ExtArgs>>): Prisma__UnitKerjaClient<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UnitKerja.
     * @param {UnitKerjaUpdateArgs} args - Arguments to update one UnitKerja.
     * @example
     * // Update one UnitKerja
     * const unitKerja = await prisma.unitKerja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitKerjaUpdateArgs>(args: SelectSubset<T, UnitKerjaUpdateArgs<ExtArgs>>): Prisma__UnitKerjaClient<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UnitKerjas.
     * @param {UnitKerjaDeleteManyArgs} args - Arguments to filter UnitKerjas to delete.
     * @example
     * // Delete a few UnitKerjas
     * const { count } = await prisma.unitKerja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitKerjaDeleteManyArgs>(args?: SelectSubset<T, UnitKerjaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitKerjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitKerjaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitKerjas
     * const unitKerja = await prisma.unitKerja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitKerjaUpdateManyArgs>(args: SelectSubset<T, UnitKerjaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnitKerja.
     * @param {UnitKerjaUpsertArgs} args - Arguments to update or create a UnitKerja.
     * @example
     * // Update or create a UnitKerja
     * const unitKerja = await prisma.unitKerja.upsert({
     *   create: {
     *     // ... data to create a UnitKerja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitKerja we want to update
     *   }
     * })
     */
    upsert<T extends UnitKerjaUpsertArgs>(args: SelectSubset<T, UnitKerjaUpsertArgs<ExtArgs>>): Prisma__UnitKerjaClient<$Result.GetResult<Prisma.$UnitKerjaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UnitKerjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitKerjaCountArgs} args - Arguments to filter UnitKerjas to count.
     * @example
     * // Count the number of UnitKerjas
     * const count = await prisma.unitKerja.count({
     *   where: {
     *     // ... the filter for the UnitKerjas we want to count
     *   }
     * })
    **/
    count<T extends UnitKerjaCountArgs>(
      args?: Subset<T, UnitKerjaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitKerjaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitKerja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitKerjaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitKerjaAggregateArgs>(args: Subset<T, UnitKerjaAggregateArgs>): Prisma.PrismaPromise<GetUnitKerjaAggregateType<T>>

    /**
     * Group by UnitKerja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitKerjaGroupByArgs} args - Group by arguments.
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
      T extends UnitKerjaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitKerjaGroupByArgs['orderBy'] }
        : { orderBy?: UnitKerjaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitKerjaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitKerjaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitKerja model
   */
  readonly fields: UnitKerjaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitKerja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitKerjaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends UnitKerja$pegawaiArgs<ExtArgs> = {}>(args?: Subset<T, UnitKerja$pegawaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the UnitKerja model
   */ 
  interface UnitKerjaFieldRefs {
    readonly id: FieldRef<"UnitKerja", 'String'>
    readonly nama: FieldRef<"UnitKerja", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UnitKerja findUnique
   */
  export type UnitKerjaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitKerjaInclude<ExtArgs> | null
    /**
     * Filter, which UnitKerja to fetch.
     */
    where: UnitKerjaWhereUniqueInput
  }

  /**
   * UnitKerja findUniqueOrThrow
   */
  export type UnitKerjaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitKerjaInclude<ExtArgs> | null
    /**
     * Filter, which UnitKerja to fetch.
     */
    where: UnitKerjaWhereUniqueInput
  }

  /**
   * UnitKerja findFirst
   */
  export type UnitKerjaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitKerjaInclude<ExtArgs> | null
    /**
     * Filter, which UnitKerja to fetch.
     */
    where?: UnitKerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitKerjas to fetch.
     */
    orderBy?: UnitKerjaOrderByWithRelationInput | UnitKerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitKerjas.
     */
    cursor?: UnitKerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitKerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitKerjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitKerjas.
     */
    distinct?: UnitKerjaScalarFieldEnum | UnitKerjaScalarFieldEnum[]
  }

  /**
   * UnitKerja findFirstOrThrow
   */
  export type UnitKerjaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitKerjaInclude<ExtArgs> | null
    /**
     * Filter, which UnitKerja to fetch.
     */
    where?: UnitKerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitKerjas to fetch.
     */
    orderBy?: UnitKerjaOrderByWithRelationInput | UnitKerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitKerjas.
     */
    cursor?: UnitKerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitKerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitKerjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitKerjas.
     */
    distinct?: UnitKerjaScalarFieldEnum | UnitKerjaScalarFieldEnum[]
  }

  /**
   * UnitKerja findMany
   */
  export type UnitKerjaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitKerjaInclude<ExtArgs> | null
    /**
     * Filter, which UnitKerjas to fetch.
     */
    where?: UnitKerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitKerjas to fetch.
     */
    orderBy?: UnitKerjaOrderByWithRelationInput | UnitKerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitKerjas.
     */
    cursor?: UnitKerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitKerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitKerjas.
     */
    skip?: number
    distinct?: UnitKerjaScalarFieldEnum | UnitKerjaScalarFieldEnum[]
  }

  /**
   * UnitKerja create
   */
  export type UnitKerjaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitKerjaInclude<ExtArgs> | null
    /**
     * The data needed to create a UnitKerja.
     */
    data: XOR<UnitKerjaCreateInput, UnitKerjaUncheckedCreateInput>
  }

  /**
   * UnitKerja createMany
   */
  export type UnitKerjaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitKerjas.
     */
    data: UnitKerjaCreateManyInput | UnitKerjaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnitKerja createManyAndReturn
   */
  export type UnitKerjaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UnitKerjas.
     */
    data: UnitKerjaCreateManyInput | UnitKerjaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnitKerja update
   */
  export type UnitKerjaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitKerjaInclude<ExtArgs> | null
    /**
     * The data needed to update a UnitKerja.
     */
    data: XOR<UnitKerjaUpdateInput, UnitKerjaUncheckedUpdateInput>
    /**
     * Choose, which UnitKerja to update.
     */
    where: UnitKerjaWhereUniqueInput
  }

  /**
   * UnitKerja updateMany
   */
  export type UnitKerjaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitKerjas.
     */
    data: XOR<UnitKerjaUpdateManyMutationInput, UnitKerjaUncheckedUpdateManyInput>
    /**
     * Filter which UnitKerjas to update
     */
    where?: UnitKerjaWhereInput
  }

  /**
   * UnitKerja upsert
   */
  export type UnitKerjaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitKerjaInclude<ExtArgs> | null
    /**
     * The filter to search for the UnitKerja to update in case it exists.
     */
    where: UnitKerjaWhereUniqueInput
    /**
     * In case the UnitKerja found by the `where` argument doesn't exist, create a new UnitKerja with this data.
     */
    create: XOR<UnitKerjaCreateInput, UnitKerjaUncheckedCreateInput>
    /**
     * In case the UnitKerja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitKerjaUpdateInput, UnitKerjaUncheckedUpdateInput>
  }

  /**
   * UnitKerja delete
   */
  export type UnitKerjaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitKerjaInclude<ExtArgs> | null
    /**
     * Filter which UnitKerja to delete.
     */
    where: UnitKerjaWhereUniqueInput
  }

  /**
   * UnitKerja deleteMany
   */
  export type UnitKerjaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitKerjas to delete
     */
    where?: UnitKerjaWhereInput
  }

  /**
   * UnitKerja.pegawai
   */
  export type UnitKerja$pegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
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
   * UnitKerja without action
   */
  export type UnitKerjaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitKerja
     */
    select?: UnitKerjaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitKerjaInclude<ExtArgs> | null
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
    bulan: number | null
    tahun: number | null
    jumlahHariKerja: number | null
    totalMenit: number | null
  }

  export type LakReportSumAggregateOutputType = {
    bulan: number | null
    tahun: number | null
    jumlahHariKerja: number | null
    totalMenit: number | null
  }

  export type LakReportMinAggregateOutputType = {
    id: string | null
    pegawaiId: string | null
    bulan: number | null
    tahun: number | null
    jumlahHariKerja: number | null
    totalMenit: number | null
    status: $Enums.LakStatus | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LakReportMaxAggregateOutputType = {
    id: string | null
    pegawaiId: string | null
    bulan: number | null
    tahun: number | null
    jumlahHariKerja: number | null
    totalMenit: number | null
    status: $Enums.LakStatus | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LakReportCountAggregateOutputType = {
    id: number
    pegawaiId: number
    bulan: number
    tahun: number
    jumlahHariKerja: number
    totalMenit: number
    status: number
    submittedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LakReportAvgAggregateInputType = {
    bulan?: true
    tahun?: true
    jumlahHariKerja?: true
    totalMenit?: true
  }

  export type LakReportSumAggregateInputType = {
    bulan?: true
    tahun?: true
    jumlahHariKerja?: true
    totalMenit?: true
  }

  export type LakReportMinAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    jumlahHariKerja?: true
    totalMenit?: true
    status?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LakReportMaxAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    jumlahHariKerja?: true
    totalMenit?: true
    status?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LakReportCountAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    jumlahHariKerja?: true
    totalMenit?: true
    status?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    pegawaiId: string
    bulan: number
    tahun: number
    jumlahHariKerja: number
    totalMenit: number
    status: $Enums.LakStatus
    submittedAt: Date | null
    createdAt: Date
    updatedAt: Date
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
    jumlahHariKerja?: boolean
    totalMenit?: boolean
    status?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
    kegiatan?: boolean | LakReport$kegiatanArgs<ExtArgs>
    _count?: boolean | LakReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lakReport"]>

  export type LakReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    jumlahHariKerja?: boolean
    totalMenit?: boolean
    status?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lakReport"]>

  export type LakReportSelectScalar = {
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    jumlahHariKerja?: boolean
    totalMenit?: boolean
    status?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LakReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
    kegiatan?: boolean | LakReport$kegiatanArgs<ExtArgs>
    _count?: boolean | LakReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LakReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }

  export type $LakReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LakReport"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs>
      kegiatan: Prisma.$LakKegiatanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pegawaiId: string
      bulan: number
      tahun: number
      jumlahHariKerja: number
      totalMenit: number
      status: $Enums.LakStatus
      submittedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lakReport"]>
    composites: {}
  }

  type LakReportGetPayload<S extends boolean | null | undefined | LakReportDefaultArgs> = $Result.GetResult<Prisma.$LakReportPayload, S>

  type LakReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LakReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LakReportCountAggregateInputType | true
    }

  export interface LakReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends LakReportFindUniqueArgs>(args: SelectSubset<T, LakReportFindUniqueArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends LakReportFindUniqueOrThrowArgs>(args: SelectSubset<T, LakReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends LakReportFindFirstArgs>(args?: SelectSubset<T, LakReportFindFirstArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends LakReportFindFirstOrThrowArgs>(args?: SelectSubset<T, LakReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends LakReportFindManyArgs>(args?: SelectSubset<T, LakReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findMany">>

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
    create<T extends LakReportCreateArgs>(args: SelectSubset<T, LakReportCreateArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends LakReportCreateManyAndReturnArgs>(args?: SelectSubset<T, LakReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends LakReportDeleteArgs>(args: SelectSubset<T, LakReportDeleteArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends LakReportUpdateArgs>(args: SelectSubset<T, LakReportUpdateArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends LakReportUpsertArgs>(args: SelectSubset<T, LakReportUpsertArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__LakReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends PegawaiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PegawaiDefaultArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    kegiatan<T extends LakReport$kegiatanArgs<ExtArgs> = {}>(args?: Subset<T, LakReport$kegiatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"LakReport", 'String'>
    readonly pegawaiId: FieldRef<"LakReport", 'String'>
    readonly bulan: FieldRef<"LakReport", 'Int'>
    readonly tahun: FieldRef<"LakReport", 'Int'>
    readonly jumlahHariKerja: FieldRef<"LakReport", 'Int'>
    readonly totalMenit: FieldRef<"LakReport", 'Int'>
    readonly status: FieldRef<"LakReport", 'LakStatus'>
    readonly submittedAt: FieldRef<"LakReport", 'DateTime'>
    readonly createdAt: FieldRef<"LakReport", 'DateTime'>
    readonly updatedAt: FieldRef<"LakReport", 'DateTime'>
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
  }

  /**
   * LakReport.kegiatan
   */
  export type LakReport$kegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
    where?: LakKegiatanWhereInput
    orderBy?: LakKegiatanOrderByWithRelationInput | LakKegiatanOrderByWithRelationInput[]
    cursor?: LakKegiatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LakKegiatanScalarFieldEnum | LakKegiatanScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: LakReportInclude<ExtArgs> | null
  }


  /**
   * Model LakKegiatan
   */

  export type AggregateLakKegiatan = {
    _count: LakKegiatanCountAggregateOutputType | null
    _avg: LakKegiatanAvgAggregateOutputType | null
    _sum: LakKegiatanSumAggregateOutputType | null
    _min: LakKegiatanMinAggregateOutputType | null
    _max: LakKegiatanMaxAggregateOutputType | null
  }

  export type LakKegiatanAvgAggregateOutputType = {
    jumlahMenit: number | null
  }

  export type LakKegiatanSumAggregateOutputType = {
    jumlahMenit: number | null
  }

  export type LakKegiatanMinAggregateOutputType = {
    id: string | null
    lakReportId: string | null
    tanggal: Date | null
    jamMulai: Date | null
    jamSelesai: Date | null
    uraianKegiatan: string | null
    volume: string | null
    jumlahMenit: number | null
    keterangan: string | null
    parafAtasan: string | null
    createdAt: Date | null
  }

  export type LakKegiatanMaxAggregateOutputType = {
    id: string | null
    lakReportId: string | null
    tanggal: Date | null
    jamMulai: Date | null
    jamSelesai: Date | null
    uraianKegiatan: string | null
    volume: string | null
    jumlahMenit: number | null
    keterangan: string | null
    parafAtasan: string | null
    createdAt: Date | null
  }

  export type LakKegiatanCountAggregateOutputType = {
    id: number
    lakReportId: number
    tanggal: number
    jamMulai: number
    jamSelesai: number
    uraianKegiatan: number
    volume: number
    jumlahMenit: number
    keterangan: number
    parafAtasan: number
    createdAt: number
    _all: number
  }


  export type LakKegiatanAvgAggregateInputType = {
    jumlahMenit?: true
  }

  export type LakKegiatanSumAggregateInputType = {
    jumlahMenit?: true
  }

  export type LakKegiatanMinAggregateInputType = {
    id?: true
    lakReportId?: true
    tanggal?: true
    jamMulai?: true
    jamSelesai?: true
    uraianKegiatan?: true
    volume?: true
    jumlahMenit?: true
    keterangan?: true
    parafAtasan?: true
    createdAt?: true
  }

  export type LakKegiatanMaxAggregateInputType = {
    id?: true
    lakReportId?: true
    tanggal?: true
    jamMulai?: true
    jamSelesai?: true
    uraianKegiatan?: true
    volume?: true
    jumlahMenit?: true
    keterangan?: true
    parafAtasan?: true
    createdAt?: true
  }

  export type LakKegiatanCountAggregateInputType = {
    id?: true
    lakReportId?: true
    tanggal?: true
    jamMulai?: true
    jamSelesai?: true
    uraianKegiatan?: true
    volume?: true
    jumlahMenit?: true
    keterangan?: true
    parafAtasan?: true
    createdAt?: true
    _all?: true
  }

  export type LakKegiatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LakKegiatan to aggregate.
     */
    where?: LakKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakKegiatans to fetch.
     */
    orderBy?: LakKegiatanOrderByWithRelationInput | LakKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LakKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakKegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LakKegiatans
    **/
    _count?: true | LakKegiatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LakKegiatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LakKegiatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LakKegiatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LakKegiatanMaxAggregateInputType
  }

  export type GetLakKegiatanAggregateType<T extends LakKegiatanAggregateArgs> = {
        [P in keyof T & keyof AggregateLakKegiatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLakKegiatan[P]>
      : GetScalarType<T[P], AggregateLakKegiatan[P]>
  }




  export type LakKegiatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LakKegiatanWhereInput
    orderBy?: LakKegiatanOrderByWithAggregationInput | LakKegiatanOrderByWithAggregationInput[]
    by: LakKegiatanScalarFieldEnum[] | LakKegiatanScalarFieldEnum
    having?: LakKegiatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LakKegiatanCountAggregateInputType | true
    _avg?: LakKegiatanAvgAggregateInputType
    _sum?: LakKegiatanSumAggregateInputType
    _min?: LakKegiatanMinAggregateInputType
    _max?: LakKegiatanMaxAggregateInputType
  }

  export type LakKegiatanGroupByOutputType = {
    id: string
    lakReportId: string
    tanggal: Date
    jamMulai: Date
    jamSelesai: Date
    uraianKegiatan: string
    volume: string
    jumlahMenit: number
    keterangan: string | null
    parafAtasan: string | null
    createdAt: Date
    _count: LakKegiatanCountAggregateOutputType | null
    _avg: LakKegiatanAvgAggregateOutputType | null
    _sum: LakKegiatanSumAggregateOutputType | null
    _min: LakKegiatanMinAggregateOutputType | null
    _max: LakKegiatanMaxAggregateOutputType | null
  }

  type GetLakKegiatanGroupByPayload<T extends LakKegiatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LakKegiatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LakKegiatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LakKegiatanGroupByOutputType[P]>
            : GetScalarType<T[P], LakKegiatanGroupByOutputType[P]>
        }
      >
    >


  export type LakKegiatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lakReportId?: boolean
    tanggal?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    uraianKegiatan?: boolean
    volume?: boolean
    jumlahMenit?: boolean
    keterangan?: boolean
    parafAtasan?: boolean
    createdAt?: boolean
    lakReport?: boolean | LakReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lakKegiatan"]>

  export type LakKegiatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lakReportId?: boolean
    tanggal?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    uraianKegiatan?: boolean
    volume?: boolean
    jumlahMenit?: boolean
    keterangan?: boolean
    parafAtasan?: boolean
    createdAt?: boolean
    lakReport?: boolean | LakReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lakKegiatan"]>

  export type LakKegiatanSelectScalar = {
    id?: boolean
    lakReportId?: boolean
    tanggal?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    uraianKegiatan?: boolean
    volume?: boolean
    jumlahMenit?: boolean
    keterangan?: boolean
    parafAtasan?: boolean
    createdAt?: boolean
  }

  export type LakKegiatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lakReport?: boolean | LakReportDefaultArgs<ExtArgs>
  }
  export type LakKegiatanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lakReport?: boolean | LakReportDefaultArgs<ExtArgs>
  }

  export type $LakKegiatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LakKegiatan"
    objects: {
      lakReport: Prisma.$LakReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lakReportId: string
      tanggal: Date
      jamMulai: Date
      jamSelesai: Date
      uraianKegiatan: string
      volume: string
      jumlahMenit: number
      keterangan: string | null
      parafAtasan: string | null
      createdAt: Date
    }, ExtArgs["result"]["lakKegiatan"]>
    composites: {}
  }

  type LakKegiatanGetPayload<S extends boolean | null | undefined | LakKegiatanDefaultArgs> = $Result.GetResult<Prisma.$LakKegiatanPayload, S>

  type LakKegiatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LakKegiatanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LakKegiatanCountAggregateInputType | true
    }

  export interface LakKegiatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LakKegiatan'], meta: { name: 'LakKegiatan' } }
    /**
     * Find zero or one LakKegiatan that matches the filter.
     * @param {LakKegiatanFindUniqueArgs} args - Arguments to find a LakKegiatan
     * @example
     * // Get one LakKegiatan
     * const lakKegiatan = await prisma.lakKegiatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LakKegiatanFindUniqueArgs>(args: SelectSubset<T, LakKegiatanFindUniqueArgs<ExtArgs>>): Prisma__LakKegiatanClient<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LakKegiatan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LakKegiatanFindUniqueOrThrowArgs} args - Arguments to find a LakKegiatan
     * @example
     * // Get one LakKegiatan
     * const lakKegiatan = await prisma.lakKegiatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LakKegiatanFindUniqueOrThrowArgs>(args: SelectSubset<T, LakKegiatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LakKegiatanClient<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LakKegiatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakKegiatanFindFirstArgs} args - Arguments to find a LakKegiatan
     * @example
     * // Get one LakKegiatan
     * const lakKegiatan = await prisma.lakKegiatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LakKegiatanFindFirstArgs>(args?: SelectSubset<T, LakKegiatanFindFirstArgs<ExtArgs>>): Prisma__LakKegiatanClient<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LakKegiatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakKegiatanFindFirstOrThrowArgs} args - Arguments to find a LakKegiatan
     * @example
     * // Get one LakKegiatan
     * const lakKegiatan = await prisma.lakKegiatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LakKegiatanFindFirstOrThrowArgs>(args?: SelectSubset<T, LakKegiatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LakKegiatanClient<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LakKegiatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakKegiatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LakKegiatans
     * const lakKegiatans = await prisma.lakKegiatan.findMany()
     * 
     * // Get first 10 LakKegiatans
     * const lakKegiatans = await prisma.lakKegiatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lakKegiatanWithIdOnly = await prisma.lakKegiatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LakKegiatanFindManyArgs>(args?: SelectSubset<T, LakKegiatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LakKegiatan.
     * @param {LakKegiatanCreateArgs} args - Arguments to create a LakKegiatan.
     * @example
     * // Create one LakKegiatan
     * const LakKegiatan = await prisma.lakKegiatan.create({
     *   data: {
     *     // ... data to create a LakKegiatan
     *   }
     * })
     * 
     */
    create<T extends LakKegiatanCreateArgs>(args: SelectSubset<T, LakKegiatanCreateArgs<ExtArgs>>): Prisma__LakKegiatanClient<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LakKegiatans.
     * @param {LakKegiatanCreateManyArgs} args - Arguments to create many LakKegiatans.
     * @example
     * // Create many LakKegiatans
     * const lakKegiatan = await prisma.lakKegiatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LakKegiatanCreateManyArgs>(args?: SelectSubset<T, LakKegiatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LakKegiatans and returns the data saved in the database.
     * @param {LakKegiatanCreateManyAndReturnArgs} args - Arguments to create many LakKegiatans.
     * @example
     * // Create many LakKegiatans
     * const lakKegiatan = await prisma.lakKegiatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LakKegiatans and only return the `id`
     * const lakKegiatanWithIdOnly = await prisma.lakKegiatan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LakKegiatanCreateManyAndReturnArgs>(args?: SelectSubset<T, LakKegiatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LakKegiatan.
     * @param {LakKegiatanDeleteArgs} args - Arguments to delete one LakKegiatan.
     * @example
     * // Delete one LakKegiatan
     * const LakKegiatan = await prisma.lakKegiatan.delete({
     *   where: {
     *     // ... filter to delete one LakKegiatan
     *   }
     * })
     * 
     */
    delete<T extends LakKegiatanDeleteArgs>(args: SelectSubset<T, LakKegiatanDeleteArgs<ExtArgs>>): Prisma__LakKegiatanClient<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LakKegiatan.
     * @param {LakKegiatanUpdateArgs} args - Arguments to update one LakKegiatan.
     * @example
     * // Update one LakKegiatan
     * const lakKegiatan = await prisma.lakKegiatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LakKegiatanUpdateArgs>(args: SelectSubset<T, LakKegiatanUpdateArgs<ExtArgs>>): Prisma__LakKegiatanClient<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LakKegiatans.
     * @param {LakKegiatanDeleteManyArgs} args - Arguments to filter LakKegiatans to delete.
     * @example
     * // Delete a few LakKegiatans
     * const { count } = await prisma.lakKegiatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LakKegiatanDeleteManyArgs>(args?: SelectSubset<T, LakKegiatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LakKegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakKegiatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LakKegiatans
     * const lakKegiatan = await prisma.lakKegiatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LakKegiatanUpdateManyArgs>(args: SelectSubset<T, LakKegiatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LakKegiatan.
     * @param {LakKegiatanUpsertArgs} args - Arguments to update or create a LakKegiatan.
     * @example
     * // Update or create a LakKegiatan
     * const lakKegiatan = await prisma.lakKegiatan.upsert({
     *   create: {
     *     // ... data to create a LakKegiatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LakKegiatan we want to update
     *   }
     * })
     */
    upsert<T extends LakKegiatanUpsertArgs>(args: SelectSubset<T, LakKegiatanUpsertArgs<ExtArgs>>): Prisma__LakKegiatanClient<$Result.GetResult<Prisma.$LakKegiatanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LakKegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakKegiatanCountArgs} args - Arguments to filter LakKegiatans to count.
     * @example
     * // Count the number of LakKegiatans
     * const count = await prisma.lakKegiatan.count({
     *   where: {
     *     // ... the filter for the LakKegiatans we want to count
     *   }
     * })
    **/
    count<T extends LakKegiatanCountArgs>(
      args?: Subset<T, LakKegiatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LakKegiatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LakKegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakKegiatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LakKegiatanAggregateArgs>(args: Subset<T, LakKegiatanAggregateArgs>): Prisma.PrismaPromise<GetLakKegiatanAggregateType<T>>

    /**
     * Group by LakKegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LakKegiatanGroupByArgs} args - Group by arguments.
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
      T extends LakKegiatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LakKegiatanGroupByArgs['orderBy'] }
        : { orderBy?: LakKegiatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LakKegiatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLakKegiatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LakKegiatan model
   */
  readonly fields: LakKegiatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LakKegiatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LakKegiatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lakReport<T extends LakReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LakReportDefaultArgs<ExtArgs>>): Prisma__LakReportClient<$Result.GetResult<Prisma.$LakReportPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the LakKegiatan model
   */ 
  interface LakKegiatanFieldRefs {
    readonly id: FieldRef<"LakKegiatan", 'String'>
    readonly lakReportId: FieldRef<"LakKegiatan", 'String'>
    readonly tanggal: FieldRef<"LakKegiatan", 'DateTime'>
    readonly jamMulai: FieldRef<"LakKegiatan", 'DateTime'>
    readonly jamSelesai: FieldRef<"LakKegiatan", 'DateTime'>
    readonly uraianKegiatan: FieldRef<"LakKegiatan", 'String'>
    readonly volume: FieldRef<"LakKegiatan", 'String'>
    readonly jumlahMenit: FieldRef<"LakKegiatan", 'Int'>
    readonly keterangan: FieldRef<"LakKegiatan", 'String'>
    readonly parafAtasan: FieldRef<"LakKegiatan", 'String'>
    readonly createdAt: FieldRef<"LakKegiatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LakKegiatan findUnique
   */
  export type LakKegiatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which LakKegiatan to fetch.
     */
    where: LakKegiatanWhereUniqueInput
  }

  /**
   * LakKegiatan findUniqueOrThrow
   */
  export type LakKegiatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which LakKegiatan to fetch.
     */
    where: LakKegiatanWhereUniqueInput
  }

  /**
   * LakKegiatan findFirst
   */
  export type LakKegiatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which LakKegiatan to fetch.
     */
    where?: LakKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakKegiatans to fetch.
     */
    orderBy?: LakKegiatanOrderByWithRelationInput | LakKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LakKegiatans.
     */
    cursor?: LakKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakKegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LakKegiatans.
     */
    distinct?: LakKegiatanScalarFieldEnum | LakKegiatanScalarFieldEnum[]
  }

  /**
   * LakKegiatan findFirstOrThrow
   */
  export type LakKegiatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which LakKegiatan to fetch.
     */
    where?: LakKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakKegiatans to fetch.
     */
    orderBy?: LakKegiatanOrderByWithRelationInput | LakKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LakKegiatans.
     */
    cursor?: LakKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakKegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LakKegiatans.
     */
    distinct?: LakKegiatanScalarFieldEnum | LakKegiatanScalarFieldEnum[]
  }

  /**
   * LakKegiatan findMany
   */
  export type LakKegiatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which LakKegiatans to fetch.
     */
    where?: LakKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LakKegiatans to fetch.
     */
    orderBy?: LakKegiatanOrderByWithRelationInput | LakKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LakKegiatans.
     */
    cursor?: LakKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LakKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LakKegiatans.
     */
    skip?: number
    distinct?: LakKegiatanScalarFieldEnum | LakKegiatanScalarFieldEnum[]
  }

  /**
   * LakKegiatan create
   */
  export type LakKegiatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
    /**
     * The data needed to create a LakKegiatan.
     */
    data: XOR<LakKegiatanCreateInput, LakKegiatanUncheckedCreateInput>
  }

  /**
   * LakKegiatan createMany
   */
  export type LakKegiatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LakKegiatans.
     */
    data: LakKegiatanCreateManyInput | LakKegiatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LakKegiatan createManyAndReturn
   */
  export type LakKegiatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LakKegiatans.
     */
    data: LakKegiatanCreateManyInput | LakKegiatanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LakKegiatan update
   */
  export type LakKegiatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
    /**
     * The data needed to update a LakKegiatan.
     */
    data: XOR<LakKegiatanUpdateInput, LakKegiatanUncheckedUpdateInput>
    /**
     * Choose, which LakKegiatan to update.
     */
    where: LakKegiatanWhereUniqueInput
  }

  /**
   * LakKegiatan updateMany
   */
  export type LakKegiatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LakKegiatans.
     */
    data: XOR<LakKegiatanUpdateManyMutationInput, LakKegiatanUncheckedUpdateManyInput>
    /**
     * Filter which LakKegiatans to update
     */
    where?: LakKegiatanWhereInput
  }

  /**
   * LakKegiatan upsert
   */
  export type LakKegiatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
    /**
     * The filter to search for the LakKegiatan to update in case it exists.
     */
    where: LakKegiatanWhereUniqueInput
    /**
     * In case the LakKegiatan found by the `where` argument doesn't exist, create a new LakKegiatan with this data.
     */
    create: XOR<LakKegiatanCreateInput, LakKegiatanUncheckedCreateInput>
    /**
     * In case the LakKegiatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LakKegiatanUpdateInput, LakKegiatanUncheckedUpdateInput>
  }

  /**
   * LakKegiatan delete
   */
  export type LakKegiatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
    /**
     * Filter which LakKegiatan to delete.
     */
    where: LakKegiatanWhereUniqueInput
  }

  /**
   * LakKegiatan deleteMany
   */
  export type LakKegiatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LakKegiatans to delete
     */
    where?: LakKegiatanWhereInput
  }

  /**
   * LakKegiatan without action
   */
  export type LakKegiatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LakKegiatan
     */
    select?: LakKegiatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LakKegiatanInclude<ExtArgs> | null
  }


  /**
   * Model MonitoringLak
   */

  export type AggregateMonitoringLak = {
    _count: MonitoringLakCountAggregateOutputType | null
    _avg: MonitoringLakAvgAggregateOutputType | null
    _sum: MonitoringLakSumAggregateOutputType | null
    _min: MonitoringLakMinAggregateOutputType | null
    _max: MonitoringLakMaxAggregateOutputType | null
  }

  export type MonitoringLakAvgAggregateOutputType = {
    bulan: number | null
    tahun: number | null
  }

  export type MonitoringLakSumAggregateOutputType = {
    bulan: number | null
    tahun: number | null
  }

  export type MonitoringLakMinAggregateOutputType = {
    id: string | null
    pegawaiId: string | null
    bulan: number | null
    tahun: number | null
    status: $Enums.LakStatus | null
    createdAt: Date | null
  }

  export type MonitoringLakMaxAggregateOutputType = {
    id: string | null
    pegawaiId: string | null
    bulan: number | null
    tahun: number | null
    status: $Enums.LakStatus | null
    createdAt: Date | null
  }

  export type MonitoringLakCountAggregateOutputType = {
    id: number
    pegawaiId: number
    bulan: number
    tahun: number
    status: number
    createdAt: number
    _all: number
  }


  export type MonitoringLakAvgAggregateInputType = {
    bulan?: true
    tahun?: true
  }

  export type MonitoringLakSumAggregateInputType = {
    bulan?: true
    tahun?: true
  }

  export type MonitoringLakMinAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    status?: true
    createdAt?: true
  }

  export type MonitoringLakMaxAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    status?: true
    createdAt?: true
  }

  export type MonitoringLakCountAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MonitoringLakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringLak to aggregate.
     */
    where?: MonitoringLakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringLaks to fetch.
     */
    orderBy?: MonitoringLakOrderByWithRelationInput | MonitoringLakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonitoringLakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringLaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringLaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonitoringLaks
    **/
    _count?: true | MonitoringLakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonitoringLakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonitoringLakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonitoringLakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonitoringLakMaxAggregateInputType
  }

  export type GetMonitoringLakAggregateType<T extends MonitoringLakAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitoringLak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitoringLak[P]>
      : GetScalarType<T[P], AggregateMonitoringLak[P]>
  }




  export type MonitoringLakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitoringLakWhereInput
    orderBy?: MonitoringLakOrderByWithAggregationInput | MonitoringLakOrderByWithAggregationInput[]
    by: MonitoringLakScalarFieldEnum[] | MonitoringLakScalarFieldEnum
    having?: MonitoringLakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonitoringLakCountAggregateInputType | true
    _avg?: MonitoringLakAvgAggregateInputType
    _sum?: MonitoringLakSumAggregateInputType
    _min?: MonitoringLakMinAggregateInputType
    _max?: MonitoringLakMaxAggregateInputType
  }

  export type MonitoringLakGroupByOutputType = {
    id: string
    pegawaiId: string
    bulan: number
    tahun: number
    status: $Enums.LakStatus
    createdAt: Date
    _count: MonitoringLakCountAggregateOutputType | null
    _avg: MonitoringLakAvgAggregateOutputType | null
    _sum: MonitoringLakSumAggregateOutputType | null
    _min: MonitoringLakMinAggregateOutputType | null
    _max: MonitoringLakMaxAggregateOutputType | null
  }

  type GetMonitoringLakGroupByPayload<T extends MonitoringLakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonitoringLakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonitoringLakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonitoringLakGroupByOutputType[P]>
            : GetScalarType<T[P], MonitoringLakGroupByOutputType[P]>
        }
      >
    >


  export type MonitoringLakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    status?: boolean
    createdAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitoringLak"]>

  export type MonitoringLakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    status?: boolean
    createdAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitoringLak"]>

  export type MonitoringLakSelectScalar = {
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MonitoringLakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }
  export type MonitoringLakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }

  export type $MonitoringLakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonitoringLak"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pegawaiId: string
      bulan: number
      tahun: number
      status: $Enums.LakStatus
      createdAt: Date
    }, ExtArgs["result"]["monitoringLak"]>
    composites: {}
  }

  type MonitoringLakGetPayload<S extends boolean | null | undefined | MonitoringLakDefaultArgs> = $Result.GetResult<Prisma.$MonitoringLakPayload, S>

  type MonitoringLakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonitoringLakFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonitoringLakCountAggregateInputType | true
    }

  export interface MonitoringLakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonitoringLak'], meta: { name: 'MonitoringLak' } }
    /**
     * Find zero or one MonitoringLak that matches the filter.
     * @param {MonitoringLakFindUniqueArgs} args - Arguments to find a MonitoringLak
     * @example
     * // Get one MonitoringLak
     * const monitoringLak = await prisma.monitoringLak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonitoringLakFindUniqueArgs>(args: SelectSubset<T, MonitoringLakFindUniqueArgs<ExtArgs>>): Prisma__MonitoringLakClient<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MonitoringLak that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MonitoringLakFindUniqueOrThrowArgs} args - Arguments to find a MonitoringLak
     * @example
     * // Get one MonitoringLak
     * const monitoringLak = await prisma.monitoringLak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonitoringLakFindUniqueOrThrowArgs>(args: SelectSubset<T, MonitoringLakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonitoringLakClient<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MonitoringLak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringLakFindFirstArgs} args - Arguments to find a MonitoringLak
     * @example
     * // Get one MonitoringLak
     * const monitoringLak = await prisma.monitoringLak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonitoringLakFindFirstArgs>(args?: SelectSubset<T, MonitoringLakFindFirstArgs<ExtArgs>>): Prisma__MonitoringLakClient<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MonitoringLak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringLakFindFirstOrThrowArgs} args - Arguments to find a MonitoringLak
     * @example
     * // Get one MonitoringLak
     * const monitoringLak = await prisma.monitoringLak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonitoringLakFindFirstOrThrowArgs>(args?: SelectSubset<T, MonitoringLakFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonitoringLakClient<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MonitoringLaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringLakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonitoringLaks
     * const monitoringLaks = await prisma.monitoringLak.findMany()
     * 
     * // Get first 10 MonitoringLaks
     * const monitoringLaks = await prisma.monitoringLak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitoringLakWithIdOnly = await prisma.monitoringLak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonitoringLakFindManyArgs>(args?: SelectSubset<T, MonitoringLakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MonitoringLak.
     * @param {MonitoringLakCreateArgs} args - Arguments to create a MonitoringLak.
     * @example
     * // Create one MonitoringLak
     * const MonitoringLak = await prisma.monitoringLak.create({
     *   data: {
     *     // ... data to create a MonitoringLak
     *   }
     * })
     * 
     */
    create<T extends MonitoringLakCreateArgs>(args: SelectSubset<T, MonitoringLakCreateArgs<ExtArgs>>): Prisma__MonitoringLakClient<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MonitoringLaks.
     * @param {MonitoringLakCreateManyArgs} args - Arguments to create many MonitoringLaks.
     * @example
     * // Create many MonitoringLaks
     * const monitoringLak = await prisma.monitoringLak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonitoringLakCreateManyArgs>(args?: SelectSubset<T, MonitoringLakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonitoringLaks and returns the data saved in the database.
     * @param {MonitoringLakCreateManyAndReturnArgs} args - Arguments to create many MonitoringLaks.
     * @example
     * // Create many MonitoringLaks
     * const monitoringLak = await prisma.monitoringLak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonitoringLaks and only return the `id`
     * const monitoringLakWithIdOnly = await prisma.monitoringLak.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonitoringLakCreateManyAndReturnArgs>(args?: SelectSubset<T, MonitoringLakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MonitoringLak.
     * @param {MonitoringLakDeleteArgs} args - Arguments to delete one MonitoringLak.
     * @example
     * // Delete one MonitoringLak
     * const MonitoringLak = await prisma.monitoringLak.delete({
     *   where: {
     *     // ... filter to delete one MonitoringLak
     *   }
     * })
     * 
     */
    delete<T extends MonitoringLakDeleteArgs>(args: SelectSubset<T, MonitoringLakDeleteArgs<ExtArgs>>): Prisma__MonitoringLakClient<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MonitoringLak.
     * @param {MonitoringLakUpdateArgs} args - Arguments to update one MonitoringLak.
     * @example
     * // Update one MonitoringLak
     * const monitoringLak = await prisma.monitoringLak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonitoringLakUpdateArgs>(args: SelectSubset<T, MonitoringLakUpdateArgs<ExtArgs>>): Prisma__MonitoringLakClient<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MonitoringLaks.
     * @param {MonitoringLakDeleteManyArgs} args - Arguments to filter MonitoringLaks to delete.
     * @example
     * // Delete a few MonitoringLaks
     * const { count } = await prisma.monitoringLak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonitoringLakDeleteManyArgs>(args?: SelectSubset<T, MonitoringLakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonitoringLaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringLakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonitoringLaks
     * const monitoringLak = await prisma.monitoringLak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonitoringLakUpdateManyArgs>(args: SelectSubset<T, MonitoringLakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonitoringLak.
     * @param {MonitoringLakUpsertArgs} args - Arguments to update or create a MonitoringLak.
     * @example
     * // Update or create a MonitoringLak
     * const monitoringLak = await prisma.monitoringLak.upsert({
     *   create: {
     *     // ... data to create a MonitoringLak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonitoringLak we want to update
     *   }
     * })
     */
    upsert<T extends MonitoringLakUpsertArgs>(args: SelectSubset<T, MonitoringLakUpsertArgs<ExtArgs>>): Prisma__MonitoringLakClient<$Result.GetResult<Prisma.$MonitoringLakPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MonitoringLaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringLakCountArgs} args - Arguments to filter MonitoringLaks to count.
     * @example
     * // Count the number of MonitoringLaks
     * const count = await prisma.monitoringLak.count({
     *   where: {
     *     // ... the filter for the MonitoringLaks we want to count
     *   }
     * })
    **/
    count<T extends MonitoringLakCountArgs>(
      args?: Subset<T, MonitoringLakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonitoringLakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonitoringLak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringLakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonitoringLakAggregateArgs>(args: Subset<T, MonitoringLakAggregateArgs>): Prisma.PrismaPromise<GetMonitoringLakAggregateType<T>>

    /**
     * Group by MonitoringLak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringLakGroupByArgs} args - Group by arguments.
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
      T extends MonitoringLakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonitoringLakGroupByArgs['orderBy'] }
        : { orderBy?: MonitoringLakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonitoringLakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoringLakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonitoringLak model
   */
  readonly fields: MonitoringLakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonitoringLak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonitoringLakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends PegawaiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PegawaiDefaultArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MonitoringLak model
   */ 
  interface MonitoringLakFieldRefs {
    readonly id: FieldRef<"MonitoringLak", 'String'>
    readonly pegawaiId: FieldRef<"MonitoringLak", 'String'>
    readonly bulan: FieldRef<"MonitoringLak", 'Int'>
    readonly tahun: FieldRef<"MonitoringLak", 'Int'>
    readonly status: FieldRef<"MonitoringLak", 'LakStatus'>
    readonly createdAt: FieldRef<"MonitoringLak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonitoringLak findUnique
   */
  export type MonitoringLakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringLak to fetch.
     */
    where: MonitoringLakWhereUniqueInput
  }

  /**
   * MonitoringLak findUniqueOrThrow
   */
  export type MonitoringLakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringLak to fetch.
     */
    where: MonitoringLakWhereUniqueInput
  }

  /**
   * MonitoringLak findFirst
   */
  export type MonitoringLakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringLak to fetch.
     */
    where?: MonitoringLakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringLaks to fetch.
     */
    orderBy?: MonitoringLakOrderByWithRelationInput | MonitoringLakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonitoringLaks.
     */
    cursor?: MonitoringLakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringLaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringLaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringLaks.
     */
    distinct?: MonitoringLakScalarFieldEnum | MonitoringLakScalarFieldEnum[]
  }

  /**
   * MonitoringLak findFirstOrThrow
   */
  export type MonitoringLakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringLak to fetch.
     */
    where?: MonitoringLakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringLaks to fetch.
     */
    orderBy?: MonitoringLakOrderByWithRelationInput | MonitoringLakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonitoringLaks.
     */
    cursor?: MonitoringLakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringLaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringLaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringLaks.
     */
    distinct?: MonitoringLakScalarFieldEnum | MonitoringLakScalarFieldEnum[]
  }

  /**
   * MonitoringLak findMany
   */
  export type MonitoringLakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringLaks to fetch.
     */
    where?: MonitoringLakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringLaks to fetch.
     */
    orderBy?: MonitoringLakOrderByWithRelationInput | MonitoringLakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonitoringLaks.
     */
    cursor?: MonitoringLakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringLaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringLaks.
     */
    skip?: number
    distinct?: MonitoringLakScalarFieldEnum | MonitoringLakScalarFieldEnum[]
  }

  /**
   * MonitoringLak create
   */
  export type MonitoringLakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
    /**
     * The data needed to create a MonitoringLak.
     */
    data: XOR<MonitoringLakCreateInput, MonitoringLakUncheckedCreateInput>
  }

  /**
   * MonitoringLak createMany
   */
  export type MonitoringLakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonitoringLaks.
     */
    data: MonitoringLakCreateManyInput | MonitoringLakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonitoringLak createManyAndReturn
   */
  export type MonitoringLakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MonitoringLaks.
     */
    data: MonitoringLakCreateManyInput | MonitoringLakCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonitoringLak update
   */
  export type MonitoringLakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
    /**
     * The data needed to update a MonitoringLak.
     */
    data: XOR<MonitoringLakUpdateInput, MonitoringLakUncheckedUpdateInput>
    /**
     * Choose, which MonitoringLak to update.
     */
    where: MonitoringLakWhereUniqueInput
  }

  /**
   * MonitoringLak updateMany
   */
  export type MonitoringLakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonitoringLaks.
     */
    data: XOR<MonitoringLakUpdateManyMutationInput, MonitoringLakUncheckedUpdateManyInput>
    /**
     * Filter which MonitoringLaks to update
     */
    where?: MonitoringLakWhereInput
  }

  /**
   * MonitoringLak upsert
   */
  export type MonitoringLakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
    /**
     * The filter to search for the MonitoringLak to update in case it exists.
     */
    where: MonitoringLakWhereUniqueInput
    /**
     * In case the MonitoringLak found by the `where` argument doesn't exist, create a new MonitoringLak with this data.
     */
    create: XOR<MonitoringLakCreateInput, MonitoringLakUncheckedCreateInput>
    /**
     * In case the MonitoringLak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonitoringLakUpdateInput, MonitoringLakUncheckedUpdateInput>
  }

  /**
   * MonitoringLak delete
   */
  export type MonitoringLakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
    /**
     * Filter which MonitoringLak to delete.
     */
    where: MonitoringLakWhereUniqueInput
  }

  /**
   * MonitoringLak deleteMany
   */
  export type MonitoringLakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringLaks to delete
     */
    where?: MonitoringLakWhereInput
  }

  /**
   * MonitoringLak without action
   */
  export type MonitoringLakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringLak
     */
    select?: MonitoringLakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringLakInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderAvgAggregateOutputType = {
    bulan: number | null
    tahun: number | null
  }

  export type ReminderSumAggregateOutputType = {
    bulan: number | null
    tahun: number | null
  }

  export type ReminderMinAggregateOutputType = {
    id: string | null
    pegawaiId: string | null
    bulan: number | null
    tahun: number | null
    status: string | null
    createdAt: Date | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: string | null
    pegawaiId: string | null
    bulan: number | null
    tahun: number | null
    status: string | null
    createdAt: Date | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    pegawaiId: number
    bulan: number
    tahun: number
    status: number
    createdAt: number
    _all: number
  }


  export type ReminderAvgAggregateInputType = {
    bulan?: true
    tahun?: true
  }

  export type ReminderSumAggregateInputType = {
    bulan?: true
    tahun?: true
  }

  export type ReminderMinAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    status?: true
    createdAt?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    status?: true
    createdAt?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    pegawaiId?: true
    bulan?: true
    tahun?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReminderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReminderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _avg?: ReminderAvgAggregateInputType
    _sum?: ReminderSumAggregateInputType
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: string
    pegawaiId: string
    bulan: number
    tahun: number
    status: string
    createdAt: Date
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    status?: boolean
    createdAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    status?: boolean
    createdAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    pegawaiId?: boolean
    bulan?: boolean
    tahun?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pegawaiId: string
      bulan: number
      tahun: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
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
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends PegawaiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PegawaiDefaultArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Reminder model
   */ 
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'String'>
    readonly pegawaiId: FieldRef<"Reminder", 'String'>
    readonly bulan: FieldRef<"Reminder", 'Int'>
    readonly tahun: FieldRef<"Reminder", 'Int'>
    readonly status: FieldRef<"Reminder", 'String'>
    readonly createdAt: FieldRef<"Reminder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    link: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    link: string | null
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      link: string | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    pegawaiId: 'pegawaiId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PegawaiScalarFieldEnum: {
    id: 'id',
    nip: 'nip',
    nama: 'nama',
    pangkat: 'pangkat',
    golongan: 'golongan',
    jabatanId: 'jabatanId',
    unitId: 'unitId',
    createdAt: 'createdAt'
  };

  export type PegawaiScalarFieldEnum = (typeof PegawaiScalarFieldEnum)[keyof typeof PegawaiScalarFieldEnum]


  export const JabatanScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type JabatanScalarFieldEnum = (typeof JabatanScalarFieldEnum)[keyof typeof JabatanScalarFieldEnum]


  export const UnitKerjaScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type UnitKerjaScalarFieldEnum = (typeof UnitKerjaScalarFieldEnum)[keyof typeof UnitKerjaScalarFieldEnum]


  export const LakReportScalarFieldEnum: {
    id: 'id',
    pegawaiId: 'pegawaiId',
    bulan: 'bulan',
    tahun: 'tahun',
    jumlahHariKerja: 'jumlahHariKerja',
    totalMenit: 'totalMenit',
    status: 'status',
    submittedAt: 'submittedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LakReportScalarFieldEnum = (typeof LakReportScalarFieldEnum)[keyof typeof LakReportScalarFieldEnum]


  export const LakKegiatanScalarFieldEnum: {
    id: 'id',
    lakReportId: 'lakReportId',
    tanggal: 'tanggal',
    jamMulai: 'jamMulai',
    jamSelesai: 'jamSelesai',
    uraianKegiatan: 'uraianKegiatan',
    volume: 'volume',
    jumlahMenit: 'jumlahMenit',
    keterangan: 'keterangan',
    parafAtasan: 'parafAtasan',
    createdAt: 'createdAt'
  };

  export type LakKegiatanScalarFieldEnum = (typeof LakKegiatanScalarFieldEnum)[keyof typeof LakKegiatanScalarFieldEnum]


  export const MonitoringLakScalarFieldEnum: {
    id: 'id',
    pegawaiId: 'pegawaiId',
    bulan: 'bulan',
    tahun: 'tahun',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MonitoringLakScalarFieldEnum = (typeof MonitoringLakScalarFieldEnum)[keyof typeof MonitoringLakScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    pegawaiId: 'pegawaiId',
    bulan: 'bulan',
    tahun: 'tahun',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    link: 'link',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LakStatus'
   */
  export type EnumLakStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LakStatus'>
    


  /**
   * Reference to a field of type 'LakStatus[]'
   */
  export type ListEnumLakStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LakStatus[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    pegawaiId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pegawai?: XOR<PegawaiNullableRelationFilter, PegawaiWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    pegawaiId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pegawai?: PegawaiOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    pegawaiId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pegawai?: XOR<PegawaiNullableRelationFilter, PegawaiWhereInput> | null
    notifications?: NotificationListRelationFilter
  }, "id" | "email" | "pegawaiId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    pegawaiId?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    pegawaiId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PegawaiWhereInput = {
    AND?: PegawaiWhereInput | PegawaiWhereInput[]
    OR?: PegawaiWhereInput[]
    NOT?: PegawaiWhereInput | PegawaiWhereInput[]
    id?: StringFilter<"Pegawai"> | string
    nip?: StringFilter<"Pegawai"> | string
    nama?: StringFilter<"Pegawai"> | string
    pangkat?: StringNullableFilter<"Pegawai"> | string | null
    golongan?: StringNullableFilter<"Pegawai"> | string | null
    jabatanId?: StringFilter<"Pegawai"> | string
    unitId?: StringFilter<"Pegawai"> | string
    createdAt?: DateTimeFilter<"Pegawai"> | Date | string
    jabatan?: XOR<JabatanRelationFilter, JabatanWhereInput>
    unit?: XOR<UnitKerjaRelationFilter, UnitKerjaWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    lakReports?: LakReportListRelationFilter
    monitoring?: MonitoringLakListRelationFilter
    reminder?: ReminderListRelationFilter
  }

  export type PegawaiOrderByWithRelationInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    pangkat?: SortOrderInput | SortOrder
    golongan?: SortOrderInput | SortOrder
    jabatanId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    jabatan?: JabatanOrderByWithRelationInput
    unit?: UnitKerjaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    lakReports?: LakReportOrderByRelationAggregateInput
    monitoring?: MonitoringLakOrderByRelationAggregateInput
    reminder?: ReminderOrderByRelationAggregateInput
  }

  export type PegawaiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nip?: string
    AND?: PegawaiWhereInput | PegawaiWhereInput[]
    OR?: PegawaiWhereInput[]
    NOT?: PegawaiWhereInput | PegawaiWhereInput[]
    nama?: StringFilter<"Pegawai"> | string
    pangkat?: StringNullableFilter<"Pegawai"> | string | null
    golongan?: StringNullableFilter<"Pegawai"> | string | null
    jabatanId?: StringFilter<"Pegawai"> | string
    unitId?: StringFilter<"Pegawai"> | string
    createdAt?: DateTimeFilter<"Pegawai"> | Date | string
    jabatan?: XOR<JabatanRelationFilter, JabatanWhereInput>
    unit?: XOR<UnitKerjaRelationFilter, UnitKerjaWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    lakReports?: LakReportListRelationFilter
    monitoring?: MonitoringLakListRelationFilter
    reminder?: ReminderListRelationFilter
  }, "id" | "nip">

  export type PegawaiOrderByWithAggregationInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    pangkat?: SortOrderInput | SortOrder
    golongan?: SortOrderInput | SortOrder
    jabatanId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    _count?: PegawaiCountOrderByAggregateInput
    _max?: PegawaiMaxOrderByAggregateInput
    _min?: PegawaiMinOrderByAggregateInput
  }

  export type PegawaiScalarWhereWithAggregatesInput = {
    AND?: PegawaiScalarWhereWithAggregatesInput | PegawaiScalarWhereWithAggregatesInput[]
    OR?: PegawaiScalarWhereWithAggregatesInput[]
    NOT?: PegawaiScalarWhereWithAggregatesInput | PegawaiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pegawai"> | string
    nip?: StringWithAggregatesFilter<"Pegawai"> | string
    nama?: StringWithAggregatesFilter<"Pegawai"> | string
    pangkat?: StringNullableWithAggregatesFilter<"Pegawai"> | string | null
    golongan?: StringNullableWithAggregatesFilter<"Pegawai"> | string | null
    jabatanId?: StringWithAggregatesFilter<"Pegawai"> | string
    unitId?: StringWithAggregatesFilter<"Pegawai"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pegawai"> | Date | string
  }

  export type JabatanWhereInput = {
    AND?: JabatanWhereInput | JabatanWhereInput[]
    OR?: JabatanWhereInput[]
    NOT?: JabatanWhereInput | JabatanWhereInput[]
    id?: StringFilter<"Jabatan"> | string
    nama?: StringFilter<"Jabatan"> | string
    pegawai?: PegawaiListRelationFilter
  }

  export type JabatanOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    pegawai?: PegawaiOrderByRelationAggregateInput
  }

  export type JabatanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JabatanWhereInput | JabatanWhereInput[]
    OR?: JabatanWhereInput[]
    NOT?: JabatanWhereInput | JabatanWhereInput[]
    nama?: StringFilter<"Jabatan"> | string
    pegawai?: PegawaiListRelationFilter
  }, "id">

  export type JabatanOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: JabatanCountOrderByAggregateInput
    _max?: JabatanMaxOrderByAggregateInput
    _min?: JabatanMinOrderByAggregateInput
  }

  export type JabatanScalarWhereWithAggregatesInput = {
    AND?: JabatanScalarWhereWithAggregatesInput | JabatanScalarWhereWithAggregatesInput[]
    OR?: JabatanScalarWhereWithAggregatesInput[]
    NOT?: JabatanScalarWhereWithAggregatesInput | JabatanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jabatan"> | string
    nama?: StringWithAggregatesFilter<"Jabatan"> | string
  }

  export type UnitKerjaWhereInput = {
    AND?: UnitKerjaWhereInput | UnitKerjaWhereInput[]
    OR?: UnitKerjaWhereInput[]
    NOT?: UnitKerjaWhereInput | UnitKerjaWhereInput[]
    id?: StringFilter<"UnitKerja"> | string
    nama?: StringFilter<"UnitKerja"> | string
    pegawai?: PegawaiListRelationFilter
  }

  export type UnitKerjaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    pegawai?: PegawaiOrderByRelationAggregateInput
  }

  export type UnitKerjaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitKerjaWhereInput | UnitKerjaWhereInput[]
    OR?: UnitKerjaWhereInput[]
    NOT?: UnitKerjaWhereInput | UnitKerjaWhereInput[]
    nama?: StringFilter<"UnitKerja"> | string
    pegawai?: PegawaiListRelationFilter
  }, "id">

  export type UnitKerjaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: UnitKerjaCountOrderByAggregateInput
    _max?: UnitKerjaMaxOrderByAggregateInput
    _min?: UnitKerjaMinOrderByAggregateInput
  }

  export type UnitKerjaScalarWhereWithAggregatesInput = {
    AND?: UnitKerjaScalarWhereWithAggregatesInput | UnitKerjaScalarWhereWithAggregatesInput[]
    OR?: UnitKerjaScalarWhereWithAggregatesInput[]
    NOT?: UnitKerjaScalarWhereWithAggregatesInput | UnitKerjaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnitKerja"> | string
    nama?: StringWithAggregatesFilter<"UnitKerja"> | string
  }

  export type LakReportWhereInput = {
    AND?: LakReportWhereInput | LakReportWhereInput[]
    OR?: LakReportWhereInput[]
    NOT?: LakReportWhereInput | LakReportWhereInput[]
    id?: StringFilter<"LakReport"> | string
    pegawaiId?: StringFilter<"LakReport"> | string
    bulan?: IntFilter<"LakReport"> | number
    tahun?: IntFilter<"LakReport"> | number
    jumlahHariKerja?: IntFilter<"LakReport"> | number
    totalMenit?: IntFilter<"LakReport"> | number
    status?: EnumLakStatusFilter<"LakReport"> | $Enums.LakStatus
    submittedAt?: DateTimeNullableFilter<"LakReport"> | Date | string | null
    createdAt?: DateTimeFilter<"LakReport"> | Date | string
    updatedAt?: DateTimeFilter<"LakReport"> | Date | string
    pegawai?: XOR<PegawaiRelationFilter, PegawaiWhereInput>
    kegiatan?: LakKegiatanListRelationFilter
  }

  export type LakReportOrderByWithRelationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jumlahHariKerja?: SortOrder
    totalMenit?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pegawai?: PegawaiOrderByWithRelationInput
    kegiatan?: LakKegiatanOrderByRelationAggregateInput
  }

  export type LakReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pegawaiId_bulan_tahun?: LakReportPegawaiIdBulanTahunCompoundUniqueInput
    AND?: LakReportWhereInput | LakReportWhereInput[]
    OR?: LakReportWhereInput[]
    NOT?: LakReportWhereInput | LakReportWhereInput[]
    pegawaiId?: StringFilter<"LakReport"> | string
    bulan?: IntFilter<"LakReport"> | number
    tahun?: IntFilter<"LakReport"> | number
    jumlahHariKerja?: IntFilter<"LakReport"> | number
    totalMenit?: IntFilter<"LakReport"> | number
    status?: EnumLakStatusFilter<"LakReport"> | $Enums.LakStatus
    submittedAt?: DateTimeNullableFilter<"LakReport"> | Date | string | null
    createdAt?: DateTimeFilter<"LakReport"> | Date | string
    updatedAt?: DateTimeFilter<"LakReport"> | Date | string
    pegawai?: XOR<PegawaiRelationFilter, PegawaiWhereInput>
    kegiatan?: LakKegiatanListRelationFilter
  }, "id" | "pegawaiId_bulan_tahun">

  export type LakReportOrderByWithAggregationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jumlahHariKerja?: SortOrder
    totalMenit?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"LakReport"> | string
    pegawaiId?: StringWithAggregatesFilter<"LakReport"> | string
    bulan?: IntWithAggregatesFilter<"LakReport"> | number
    tahun?: IntWithAggregatesFilter<"LakReport"> | number
    jumlahHariKerja?: IntWithAggregatesFilter<"LakReport"> | number
    totalMenit?: IntWithAggregatesFilter<"LakReport"> | number
    status?: EnumLakStatusWithAggregatesFilter<"LakReport"> | $Enums.LakStatus
    submittedAt?: DateTimeNullableWithAggregatesFilter<"LakReport"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LakReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LakReport"> | Date | string
  }

  export type LakKegiatanWhereInput = {
    AND?: LakKegiatanWhereInput | LakKegiatanWhereInput[]
    OR?: LakKegiatanWhereInput[]
    NOT?: LakKegiatanWhereInput | LakKegiatanWhereInput[]
    id?: StringFilter<"LakKegiatan"> | string
    lakReportId?: StringFilter<"LakKegiatan"> | string
    tanggal?: DateTimeFilter<"LakKegiatan"> | Date | string
    jamMulai?: DateTimeFilter<"LakKegiatan"> | Date | string
    jamSelesai?: DateTimeFilter<"LakKegiatan"> | Date | string
    uraianKegiatan?: StringFilter<"LakKegiatan"> | string
    volume?: StringFilter<"LakKegiatan"> | string
    jumlahMenit?: IntFilter<"LakKegiatan"> | number
    keterangan?: StringNullableFilter<"LakKegiatan"> | string | null
    parafAtasan?: StringNullableFilter<"LakKegiatan"> | string | null
    createdAt?: DateTimeFilter<"LakKegiatan"> | Date | string
    lakReport?: XOR<LakReportRelationFilter, LakReportWhereInput>
  }

  export type LakKegiatanOrderByWithRelationInput = {
    id?: SortOrder
    lakReportId?: SortOrder
    tanggal?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    uraianKegiatan?: SortOrder
    volume?: SortOrder
    jumlahMenit?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    parafAtasan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lakReport?: LakReportOrderByWithRelationInput
  }

  export type LakKegiatanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LakKegiatanWhereInput | LakKegiatanWhereInput[]
    OR?: LakKegiatanWhereInput[]
    NOT?: LakKegiatanWhereInput | LakKegiatanWhereInput[]
    lakReportId?: StringFilter<"LakKegiatan"> | string
    tanggal?: DateTimeFilter<"LakKegiatan"> | Date | string
    jamMulai?: DateTimeFilter<"LakKegiatan"> | Date | string
    jamSelesai?: DateTimeFilter<"LakKegiatan"> | Date | string
    uraianKegiatan?: StringFilter<"LakKegiatan"> | string
    volume?: StringFilter<"LakKegiatan"> | string
    jumlahMenit?: IntFilter<"LakKegiatan"> | number
    keterangan?: StringNullableFilter<"LakKegiatan"> | string | null
    parafAtasan?: StringNullableFilter<"LakKegiatan"> | string | null
    createdAt?: DateTimeFilter<"LakKegiatan"> | Date | string
    lakReport?: XOR<LakReportRelationFilter, LakReportWhereInput>
  }, "id">

  export type LakKegiatanOrderByWithAggregationInput = {
    id?: SortOrder
    lakReportId?: SortOrder
    tanggal?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    uraianKegiatan?: SortOrder
    volume?: SortOrder
    jumlahMenit?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    parafAtasan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LakKegiatanCountOrderByAggregateInput
    _avg?: LakKegiatanAvgOrderByAggregateInput
    _max?: LakKegiatanMaxOrderByAggregateInput
    _min?: LakKegiatanMinOrderByAggregateInput
    _sum?: LakKegiatanSumOrderByAggregateInput
  }

  export type LakKegiatanScalarWhereWithAggregatesInput = {
    AND?: LakKegiatanScalarWhereWithAggregatesInput | LakKegiatanScalarWhereWithAggregatesInput[]
    OR?: LakKegiatanScalarWhereWithAggregatesInput[]
    NOT?: LakKegiatanScalarWhereWithAggregatesInput | LakKegiatanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LakKegiatan"> | string
    lakReportId?: StringWithAggregatesFilter<"LakKegiatan"> | string
    tanggal?: DateTimeWithAggregatesFilter<"LakKegiatan"> | Date | string
    jamMulai?: DateTimeWithAggregatesFilter<"LakKegiatan"> | Date | string
    jamSelesai?: DateTimeWithAggregatesFilter<"LakKegiatan"> | Date | string
    uraianKegiatan?: StringWithAggregatesFilter<"LakKegiatan"> | string
    volume?: StringWithAggregatesFilter<"LakKegiatan"> | string
    jumlahMenit?: IntWithAggregatesFilter<"LakKegiatan"> | number
    keterangan?: StringNullableWithAggregatesFilter<"LakKegiatan"> | string | null
    parafAtasan?: StringNullableWithAggregatesFilter<"LakKegiatan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LakKegiatan"> | Date | string
  }

  export type MonitoringLakWhereInput = {
    AND?: MonitoringLakWhereInput | MonitoringLakWhereInput[]
    OR?: MonitoringLakWhereInput[]
    NOT?: MonitoringLakWhereInput | MonitoringLakWhereInput[]
    id?: StringFilter<"MonitoringLak"> | string
    pegawaiId?: StringFilter<"MonitoringLak"> | string
    bulan?: IntFilter<"MonitoringLak"> | number
    tahun?: IntFilter<"MonitoringLak"> | number
    status?: EnumLakStatusFilter<"MonitoringLak"> | $Enums.LakStatus
    createdAt?: DateTimeFilter<"MonitoringLak"> | Date | string
    pegawai?: XOR<PegawaiRelationFilter, PegawaiWhereInput>
  }

  export type MonitoringLakOrderByWithRelationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    pegawai?: PegawaiOrderByWithRelationInput
  }

  export type MonitoringLakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pegawaiId_bulan_tahun?: MonitoringLakPegawaiIdBulanTahunCompoundUniqueInput
    AND?: MonitoringLakWhereInput | MonitoringLakWhereInput[]
    OR?: MonitoringLakWhereInput[]
    NOT?: MonitoringLakWhereInput | MonitoringLakWhereInput[]
    pegawaiId?: StringFilter<"MonitoringLak"> | string
    bulan?: IntFilter<"MonitoringLak"> | number
    tahun?: IntFilter<"MonitoringLak"> | number
    status?: EnumLakStatusFilter<"MonitoringLak"> | $Enums.LakStatus
    createdAt?: DateTimeFilter<"MonitoringLak"> | Date | string
    pegawai?: XOR<PegawaiRelationFilter, PegawaiWhereInput>
  }, "id" | "pegawaiId_bulan_tahun">

  export type MonitoringLakOrderByWithAggregationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MonitoringLakCountOrderByAggregateInput
    _avg?: MonitoringLakAvgOrderByAggregateInput
    _max?: MonitoringLakMaxOrderByAggregateInput
    _min?: MonitoringLakMinOrderByAggregateInput
    _sum?: MonitoringLakSumOrderByAggregateInput
  }

  export type MonitoringLakScalarWhereWithAggregatesInput = {
    AND?: MonitoringLakScalarWhereWithAggregatesInput | MonitoringLakScalarWhereWithAggregatesInput[]
    OR?: MonitoringLakScalarWhereWithAggregatesInput[]
    NOT?: MonitoringLakScalarWhereWithAggregatesInput | MonitoringLakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonitoringLak"> | string
    pegawaiId?: StringWithAggregatesFilter<"MonitoringLak"> | string
    bulan?: IntWithAggregatesFilter<"MonitoringLak"> | number
    tahun?: IntWithAggregatesFilter<"MonitoringLak"> | number
    status?: EnumLakStatusWithAggregatesFilter<"MonitoringLak"> | $Enums.LakStatus
    createdAt?: DateTimeWithAggregatesFilter<"MonitoringLak"> | Date | string
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: StringFilter<"Reminder"> | string
    pegawaiId?: StringFilter<"Reminder"> | string
    bulan?: IntFilter<"Reminder"> | number
    tahun?: IntFilter<"Reminder"> | number
    status?: StringFilter<"Reminder"> | string
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    pegawai?: XOR<PegawaiRelationFilter, PegawaiWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    pegawai?: PegawaiOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    pegawaiId?: StringFilter<"Reminder"> | string
    bulan?: IntFilter<"Reminder"> | number
    tahun?: IntFilter<"Reminder"> | number
    status?: StringFilter<"Reminder"> | string
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    pegawai?: XOR<PegawaiRelationFilter, PegawaiWhereInput>
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _avg?: ReminderAvgOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
    _sum?: ReminderSumOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reminder"> | string
    pegawaiId?: StringWithAggregatesFilter<"Reminder"> | string
    bulan?: IntWithAggregatesFilter<"Reminder"> | number
    tahun?: IntWithAggregatesFilter<"Reminder"> | number
    status?: StringWithAggregatesFilter<"Reminder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai?: PegawaiCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    pegawaiId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pegawaiId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    pegawaiId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pegawaiId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PegawaiCreateInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    createdAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutPegawaiInput
    unit: UnitKerjaCreateNestedOneWithoutPegawaiInput
    user?: UserCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportCreateNestedManyWithoutPegawaiInput
    monitoring?: MonitoringLakCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    jabatanId: string
    unitId: string
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportUncheckedCreateNestedManyWithoutPegawaiInput
    monitoring?: MonitoringLakUncheckedCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutPegawaiNestedInput
    unit?: UnitKerjaUpdateOneRequiredWithoutPegawaiNestedInput
    user?: UserUpdateOneWithoutPegawaiNestedInput
    lakReports?: LakReportUpdateManyWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    jabatanId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPegawaiNestedInput
    lakReports?: LakReportUncheckedUpdateManyWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUncheckedUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiCreateManyInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    jabatanId: string
    unitId: string
    createdAt?: Date | string
  }

  export type PegawaiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PegawaiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    jabatanId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JabatanCreateInput = {
    id?: string
    nama: string
    pegawai?: PegawaiCreateNestedManyWithoutJabatanInput
  }

  export type JabatanUncheckedCreateInput = {
    id?: string
    nama: string
    pegawai?: PegawaiUncheckedCreateNestedManyWithoutJabatanInput
  }

  export type JabatanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pegawai?: PegawaiUpdateManyWithoutJabatanNestedInput
  }

  export type JabatanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pegawai?: PegawaiUncheckedUpdateManyWithoutJabatanNestedInput
  }

  export type JabatanCreateManyInput = {
    id?: string
    nama: string
  }

  export type JabatanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type JabatanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type UnitKerjaCreateInput = {
    id?: string
    nama: string
    pegawai?: PegawaiCreateNestedManyWithoutUnitInput
  }

  export type UnitKerjaUncheckedCreateInput = {
    id?: string
    nama: string
    pegawai?: PegawaiUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitKerjaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pegawai?: PegawaiUpdateManyWithoutUnitNestedInput
  }

  export type UnitKerjaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pegawai?: PegawaiUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitKerjaCreateManyInput = {
    id?: string
    nama: string
  }

  export type UnitKerjaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type UnitKerjaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type LakReportCreateInput = {
    id?: string
    bulan: number
    tahun: number
    jumlahHariKerja: number
    totalMenit?: number
    status?: $Enums.LakStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai: PegawaiCreateNestedOneWithoutLakReportsInput
    kegiatan?: LakKegiatanCreateNestedManyWithoutLakReportInput
  }

  export type LakReportUncheckedCreateInput = {
    id?: string
    pegawaiId: string
    bulan: number
    tahun: number
    jumlahHariKerja: number
    totalMenit?: number
    status?: $Enums.LakStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan?: LakKegiatanUncheckedCreateNestedManyWithoutLakReportInput
  }

  export type LakReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jumlahHariKerja?: IntFieldUpdateOperationsInput | number
    totalMenit?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateOneRequiredWithoutLakReportsNestedInput
    kegiatan?: LakKegiatanUpdateManyWithoutLakReportNestedInput
  }

  export type LakReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pegawaiId?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jumlahHariKerja?: IntFieldUpdateOperationsInput | number
    totalMenit?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: LakKegiatanUncheckedUpdateManyWithoutLakReportNestedInput
  }

  export type LakReportCreateManyInput = {
    id?: string
    pegawaiId: string
    bulan: number
    tahun: number
    jumlahHariKerja: number
    totalMenit?: number
    status?: $Enums.LakStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LakReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jumlahHariKerja?: IntFieldUpdateOperationsInput | number
    totalMenit?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pegawaiId?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jumlahHariKerja?: IntFieldUpdateOperationsInput | number
    totalMenit?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakKegiatanCreateInput = {
    id?: string
    tanggal: Date | string
    jamMulai: Date | string
    jamSelesai: Date | string
    uraianKegiatan: string
    volume: string
    jumlahMenit: number
    keterangan?: string | null
    parafAtasan?: string | null
    createdAt?: Date | string
    lakReport: LakReportCreateNestedOneWithoutKegiatanInput
  }

  export type LakKegiatanUncheckedCreateInput = {
    id?: string
    lakReportId: string
    tanggal: Date | string
    jamMulai: Date | string
    jamSelesai: Date | string
    uraianKegiatan: string
    volume: string
    jumlahMenit: number
    keterangan?: string | null
    parafAtasan?: string | null
    createdAt?: Date | string
  }

  export type LakKegiatanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    jumlahMenit?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    parafAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lakReport?: LakReportUpdateOneRequiredWithoutKegiatanNestedInput
  }

  export type LakKegiatanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lakReportId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    jumlahMenit?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    parafAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakKegiatanCreateManyInput = {
    id?: string
    lakReportId: string
    tanggal: Date | string
    jamMulai: Date | string
    jamSelesai: Date | string
    uraianKegiatan: string
    volume: string
    jumlahMenit: number
    keterangan?: string | null
    parafAtasan?: string | null
    createdAt?: Date | string
  }

  export type LakKegiatanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    jumlahMenit?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    parafAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakKegiatanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lakReportId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    jumlahMenit?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    parafAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringLakCreateInput = {
    id?: string
    bulan: number
    tahun: number
    status: $Enums.LakStatus
    createdAt?: Date | string
    pegawai: PegawaiCreateNestedOneWithoutMonitoringInput
  }

  export type MonitoringLakUncheckedCreateInput = {
    id?: string
    pegawaiId: string
    bulan: number
    tahun: number
    status: $Enums.LakStatus
    createdAt?: Date | string
  }

  export type MonitoringLakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateOneRequiredWithoutMonitoringNestedInput
  }

  export type MonitoringLakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pegawaiId?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringLakCreateManyInput = {
    id?: string
    pegawaiId: string
    bulan: number
    tahun: number
    status: $Enums.LakStatus
    createdAt?: Date | string
  }

  export type MonitoringLakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringLakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pegawaiId?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateInput = {
    id?: string
    bulan: number
    tahun: number
    status: string
    createdAt?: Date | string
    pegawai: PegawaiCreateNestedOneWithoutReminderInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: string
    pegawaiId: string
    bulan: number
    tahun: number
    status: string
    createdAt?: Date | string
  }

  export type ReminderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateOneRequiredWithoutReminderNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pegawaiId?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateManyInput = {
    id?: string
    pegawaiId: string
    bulan: number
    tahun: number
    status: string
    createdAt?: Date | string
  }

  export type ReminderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pegawaiId?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type PegawaiNullableRelationFilter = {
    is?: PegawaiWhereInput | null
    isNot?: PegawaiWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    pegawaiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    pegawaiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    pegawaiId?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type JabatanRelationFilter = {
    is?: JabatanWhereInput
    isNot?: JabatanWhereInput
  }

  export type UnitKerjaRelationFilter = {
    is?: UnitKerjaWhereInput
    isNot?: UnitKerjaWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LakReportListRelationFilter = {
    every?: LakReportWhereInput
    some?: LakReportWhereInput
    none?: LakReportWhereInput
  }

  export type MonitoringLakListRelationFilter = {
    every?: MonitoringLakWhereInput
    some?: MonitoringLakWhereInput
    none?: MonitoringLakWhereInput
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type LakReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonitoringLakOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PegawaiCountOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    pangkat?: SortOrder
    golongan?: SortOrder
    jabatanId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
  }

  export type PegawaiMaxOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    pangkat?: SortOrder
    golongan?: SortOrder
    jabatanId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
  }

  export type PegawaiMinOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    pangkat?: SortOrder
    golongan?: SortOrder
    jabatanId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
  }

  export type PegawaiListRelationFilter = {
    every?: PegawaiWhereInput
    some?: PegawaiWhereInput
    none?: PegawaiWhereInput
  }

  export type PegawaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JabatanCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type JabatanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type JabatanMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type UnitKerjaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type UnitKerjaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type UnitKerjaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
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

  export type EnumLakStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LakStatus | EnumLakStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LakStatus[] | ListEnumLakStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LakStatus[] | ListEnumLakStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLakStatusFilter<$PrismaModel> | $Enums.LakStatus
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

  export type PegawaiRelationFilter = {
    is?: PegawaiWhereInput
    isNot?: PegawaiWhereInput
  }

  export type LakKegiatanListRelationFilter = {
    every?: LakKegiatanWhereInput
    some?: LakKegiatanWhereInput
    none?: LakKegiatanWhereInput
  }

  export type LakKegiatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LakReportPegawaiIdBulanTahunCompoundUniqueInput = {
    pegawaiId: string
    bulan: number
    tahun: number
  }

  export type LakReportCountOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jumlahHariKerja?: SortOrder
    totalMenit?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LakReportAvgOrderByAggregateInput = {
    bulan?: SortOrder
    tahun?: SortOrder
    jumlahHariKerja?: SortOrder
    totalMenit?: SortOrder
  }

  export type LakReportMaxOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jumlahHariKerja?: SortOrder
    totalMenit?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LakReportMinOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jumlahHariKerja?: SortOrder
    totalMenit?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LakReportSumOrderByAggregateInput = {
    bulan?: SortOrder
    tahun?: SortOrder
    jumlahHariKerja?: SortOrder
    totalMenit?: SortOrder
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

  export type EnumLakStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LakStatus | EnumLakStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LakStatus[] | ListEnumLakStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LakStatus[] | ListEnumLakStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLakStatusWithAggregatesFilter<$PrismaModel> | $Enums.LakStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLakStatusFilter<$PrismaModel>
    _max?: NestedEnumLakStatusFilter<$PrismaModel>
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

  export type LakReportRelationFilter = {
    is?: LakReportWhereInput
    isNot?: LakReportWhereInput
  }

  export type LakKegiatanCountOrderByAggregateInput = {
    id?: SortOrder
    lakReportId?: SortOrder
    tanggal?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    uraianKegiatan?: SortOrder
    volume?: SortOrder
    jumlahMenit?: SortOrder
    keterangan?: SortOrder
    parafAtasan?: SortOrder
    createdAt?: SortOrder
  }

  export type LakKegiatanAvgOrderByAggregateInput = {
    jumlahMenit?: SortOrder
  }

  export type LakKegiatanMaxOrderByAggregateInput = {
    id?: SortOrder
    lakReportId?: SortOrder
    tanggal?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    uraianKegiatan?: SortOrder
    volume?: SortOrder
    jumlahMenit?: SortOrder
    keterangan?: SortOrder
    parafAtasan?: SortOrder
    createdAt?: SortOrder
  }

  export type LakKegiatanMinOrderByAggregateInput = {
    id?: SortOrder
    lakReportId?: SortOrder
    tanggal?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    uraianKegiatan?: SortOrder
    volume?: SortOrder
    jumlahMenit?: SortOrder
    keterangan?: SortOrder
    parafAtasan?: SortOrder
    createdAt?: SortOrder
  }

  export type LakKegiatanSumOrderByAggregateInput = {
    jumlahMenit?: SortOrder
  }

  export type MonitoringLakPegawaiIdBulanTahunCompoundUniqueInput = {
    pegawaiId: string
    bulan: number
    tahun: number
  }

  export type MonitoringLakCountOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MonitoringLakAvgOrderByAggregateInput = {
    bulan?: SortOrder
    tahun?: SortOrder
  }

  export type MonitoringLakMaxOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MonitoringLakMinOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MonitoringLakSumOrderByAggregateInput = {
    bulan?: SortOrder
    tahun?: SortOrder
  }

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderAvgOrderByAggregateInput = {
    bulan?: SortOrder
    tahun?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderSumOrderByAggregateInput = {
    bulan?: SortOrder
    tahun?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PegawaiCreateNestedOneWithoutUserInput = {
    create?: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutUserInput
    connect?: PegawaiWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PegawaiUpdateOneWithoutUserNestedInput = {
    create?: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutUserInput
    upsert?: PegawaiUpsertWithoutUserInput
    disconnect?: PegawaiWhereInput | boolean
    delete?: PegawaiWhereInput | boolean
    connect?: PegawaiWhereUniqueInput
    update?: XOR<XOR<PegawaiUpdateToOneWithWhereWithoutUserInput, PegawaiUpdateWithoutUserInput>, PegawaiUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type JabatanCreateNestedOneWithoutPegawaiInput = {
    create?: XOR<JabatanCreateWithoutPegawaiInput, JabatanUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: JabatanCreateOrConnectWithoutPegawaiInput
    connect?: JabatanWhereUniqueInput
  }

  export type UnitKerjaCreateNestedOneWithoutPegawaiInput = {
    create?: XOR<UnitKerjaCreateWithoutPegawaiInput, UnitKerjaUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: UnitKerjaCreateOrConnectWithoutPegawaiInput
    connect?: UnitKerjaWhereUniqueInput
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

  export type MonitoringLakCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<MonitoringLakCreateWithoutPegawaiInput, MonitoringLakUncheckedCreateWithoutPegawaiInput> | MonitoringLakCreateWithoutPegawaiInput[] | MonitoringLakUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: MonitoringLakCreateOrConnectWithoutPegawaiInput | MonitoringLakCreateOrConnectWithoutPegawaiInput[]
    createMany?: MonitoringLakCreateManyPegawaiInputEnvelope
    connect?: MonitoringLakWhereUniqueInput | MonitoringLakWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<ReminderCreateWithoutPegawaiInput, ReminderUncheckedCreateWithoutPegawaiInput> | ReminderCreateWithoutPegawaiInput[] | ReminderUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutPegawaiInput | ReminderCreateOrConnectWithoutPegawaiInput[]
    createMany?: ReminderCreateManyPegawaiInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
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

  export type MonitoringLakUncheckedCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<MonitoringLakCreateWithoutPegawaiInput, MonitoringLakUncheckedCreateWithoutPegawaiInput> | MonitoringLakCreateWithoutPegawaiInput[] | MonitoringLakUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: MonitoringLakCreateOrConnectWithoutPegawaiInput | MonitoringLakCreateOrConnectWithoutPegawaiInput[]
    createMany?: MonitoringLakCreateManyPegawaiInputEnvelope
    connect?: MonitoringLakWhereUniqueInput | MonitoringLakWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<ReminderCreateWithoutPegawaiInput, ReminderUncheckedCreateWithoutPegawaiInput> | ReminderCreateWithoutPegawaiInput[] | ReminderUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutPegawaiInput | ReminderCreateOrConnectWithoutPegawaiInput[]
    createMany?: ReminderCreateManyPegawaiInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type JabatanUpdateOneRequiredWithoutPegawaiNestedInput = {
    create?: XOR<JabatanCreateWithoutPegawaiInput, JabatanUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: JabatanCreateOrConnectWithoutPegawaiInput
    upsert?: JabatanUpsertWithoutPegawaiInput
    connect?: JabatanWhereUniqueInput
    update?: XOR<XOR<JabatanUpdateToOneWithWhereWithoutPegawaiInput, JabatanUpdateWithoutPegawaiInput>, JabatanUncheckedUpdateWithoutPegawaiInput>
  }

  export type UnitKerjaUpdateOneRequiredWithoutPegawaiNestedInput = {
    create?: XOR<UnitKerjaCreateWithoutPegawaiInput, UnitKerjaUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: UnitKerjaCreateOrConnectWithoutPegawaiInput
    upsert?: UnitKerjaUpsertWithoutPegawaiInput
    connect?: UnitKerjaWhereUniqueInput
    update?: XOR<XOR<UnitKerjaUpdateToOneWithWhereWithoutPegawaiInput, UnitKerjaUpdateWithoutPegawaiInput>, UnitKerjaUncheckedUpdateWithoutPegawaiInput>
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

  export type MonitoringLakUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<MonitoringLakCreateWithoutPegawaiInput, MonitoringLakUncheckedCreateWithoutPegawaiInput> | MonitoringLakCreateWithoutPegawaiInput[] | MonitoringLakUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: MonitoringLakCreateOrConnectWithoutPegawaiInput | MonitoringLakCreateOrConnectWithoutPegawaiInput[]
    upsert?: MonitoringLakUpsertWithWhereUniqueWithoutPegawaiInput | MonitoringLakUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: MonitoringLakCreateManyPegawaiInputEnvelope
    set?: MonitoringLakWhereUniqueInput | MonitoringLakWhereUniqueInput[]
    disconnect?: MonitoringLakWhereUniqueInput | MonitoringLakWhereUniqueInput[]
    delete?: MonitoringLakWhereUniqueInput | MonitoringLakWhereUniqueInput[]
    connect?: MonitoringLakWhereUniqueInput | MonitoringLakWhereUniqueInput[]
    update?: MonitoringLakUpdateWithWhereUniqueWithoutPegawaiInput | MonitoringLakUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: MonitoringLakUpdateManyWithWhereWithoutPegawaiInput | MonitoringLakUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: MonitoringLakScalarWhereInput | MonitoringLakScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<ReminderCreateWithoutPegawaiInput, ReminderUncheckedCreateWithoutPegawaiInput> | ReminderCreateWithoutPegawaiInput[] | ReminderUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutPegawaiInput | ReminderCreateOrConnectWithoutPegawaiInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutPegawaiInput | ReminderUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: ReminderCreateManyPegawaiInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutPegawaiInput | ReminderUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutPegawaiInput | ReminderUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
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

  export type MonitoringLakUncheckedUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<MonitoringLakCreateWithoutPegawaiInput, MonitoringLakUncheckedCreateWithoutPegawaiInput> | MonitoringLakCreateWithoutPegawaiInput[] | MonitoringLakUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: MonitoringLakCreateOrConnectWithoutPegawaiInput | MonitoringLakCreateOrConnectWithoutPegawaiInput[]
    upsert?: MonitoringLakUpsertWithWhereUniqueWithoutPegawaiInput | MonitoringLakUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: MonitoringLakCreateManyPegawaiInputEnvelope
    set?: MonitoringLakWhereUniqueInput | MonitoringLakWhereUniqueInput[]
    disconnect?: MonitoringLakWhereUniqueInput | MonitoringLakWhereUniqueInput[]
    delete?: MonitoringLakWhereUniqueInput | MonitoringLakWhereUniqueInput[]
    connect?: MonitoringLakWhereUniqueInput | MonitoringLakWhereUniqueInput[]
    update?: MonitoringLakUpdateWithWhereUniqueWithoutPegawaiInput | MonitoringLakUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: MonitoringLakUpdateManyWithWhereWithoutPegawaiInput | MonitoringLakUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: MonitoringLakScalarWhereInput | MonitoringLakScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<ReminderCreateWithoutPegawaiInput, ReminderUncheckedCreateWithoutPegawaiInput> | ReminderCreateWithoutPegawaiInput[] | ReminderUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutPegawaiInput | ReminderCreateOrConnectWithoutPegawaiInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutPegawaiInput | ReminderUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: ReminderCreateManyPegawaiInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutPegawaiInput | ReminderUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutPegawaiInput | ReminderUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type PegawaiCreateNestedManyWithoutJabatanInput = {
    create?: XOR<PegawaiCreateWithoutJabatanInput, PegawaiUncheckedCreateWithoutJabatanInput> | PegawaiCreateWithoutJabatanInput[] | PegawaiUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutJabatanInput | PegawaiCreateOrConnectWithoutJabatanInput[]
    createMany?: PegawaiCreateManyJabatanInputEnvelope
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
  }

  export type PegawaiUncheckedCreateNestedManyWithoutJabatanInput = {
    create?: XOR<PegawaiCreateWithoutJabatanInput, PegawaiUncheckedCreateWithoutJabatanInput> | PegawaiCreateWithoutJabatanInput[] | PegawaiUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutJabatanInput | PegawaiCreateOrConnectWithoutJabatanInput[]
    createMany?: PegawaiCreateManyJabatanInputEnvelope
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
  }

  export type PegawaiUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<PegawaiCreateWithoutJabatanInput, PegawaiUncheckedCreateWithoutJabatanInput> | PegawaiCreateWithoutJabatanInput[] | PegawaiUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutJabatanInput | PegawaiCreateOrConnectWithoutJabatanInput[]
    upsert?: PegawaiUpsertWithWhereUniqueWithoutJabatanInput | PegawaiUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: PegawaiCreateManyJabatanInputEnvelope
    set?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    disconnect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    delete?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    update?: PegawaiUpdateWithWhereUniqueWithoutJabatanInput | PegawaiUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: PegawaiUpdateManyWithWhereWithoutJabatanInput | PegawaiUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
  }

  export type PegawaiUncheckedUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<PegawaiCreateWithoutJabatanInput, PegawaiUncheckedCreateWithoutJabatanInput> | PegawaiCreateWithoutJabatanInput[] | PegawaiUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutJabatanInput | PegawaiCreateOrConnectWithoutJabatanInput[]
    upsert?: PegawaiUpsertWithWhereUniqueWithoutJabatanInput | PegawaiUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: PegawaiCreateManyJabatanInputEnvelope
    set?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    disconnect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    delete?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    update?: PegawaiUpdateWithWhereUniqueWithoutJabatanInput | PegawaiUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: PegawaiUpdateManyWithWhereWithoutJabatanInput | PegawaiUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
  }

  export type PegawaiCreateNestedManyWithoutUnitInput = {
    create?: XOR<PegawaiCreateWithoutUnitInput, PegawaiUncheckedCreateWithoutUnitInput> | PegawaiCreateWithoutUnitInput[] | PegawaiUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutUnitInput | PegawaiCreateOrConnectWithoutUnitInput[]
    createMany?: PegawaiCreateManyUnitInputEnvelope
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
  }

  export type PegawaiUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<PegawaiCreateWithoutUnitInput, PegawaiUncheckedCreateWithoutUnitInput> | PegawaiCreateWithoutUnitInput[] | PegawaiUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutUnitInput | PegawaiCreateOrConnectWithoutUnitInput[]
    createMany?: PegawaiCreateManyUnitInputEnvelope
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
  }

  export type PegawaiUpdateManyWithoutUnitNestedInput = {
    create?: XOR<PegawaiCreateWithoutUnitInput, PegawaiUncheckedCreateWithoutUnitInput> | PegawaiCreateWithoutUnitInput[] | PegawaiUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutUnitInput | PegawaiCreateOrConnectWithoutUnitInput[]
    upsert?: PegawaiUpsertWithWhereUniqueWithoutUnitInput | PegawaiUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: PegawaiCreateManyUnitInputEnvelope
    set?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    disconnect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    delete?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    update?: PegawaiUpdateWithWhereUniqueWithoutUnitInput | PegawaiUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: PegawaiUpdateManyWithWhereWithoutUnitInput | PegawaiUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
  }

  export type PegawaiUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<PegawaiCreateWithoutUnitInput, PegawaiUncheckedCreateWithoutUnitInput> | PegawaiCreateWithoutUnitInput[] | PegawaiUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutUnitInput | PegawaiCreateOrConnectWithoutUnitInput[]
    upsert?: PegawaiUpsertWithWhereUniqueWithoutUnitInput | PegawaiUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: PegawaiCreateManyUnitInputEnvelope
    set?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    disconnect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    delete?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    update?: PegawaiUpdateWithWhereUniqueWithoutUnitInput | PegawaiUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: PegawaiUpdateManyWithWhereWithoutUnitInput | PegawaiUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
  }

  export type PegawaiCreateNestedOneWithoutLakReportsInput = {
    create?: XOR<PegawaiCreateWithoutLakReportsInput, PegawaiUncheckedCreateWithoutLakReportsInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutLakReportsInput
    connect?: PegawaiWhereUniqueInput
  }

  export type LakKegiatanCreateNestedManyWithoutLakReportInput = {
    create?: XOR<LakKegiatanCreateWithoutLakReportInput, LakKegiatanUncheckedCreateWithoutLakReportInput> | LakKegiatanCreateWithoutLakReportInput[] | LakKegiatanUncheckedCreateWithoutLakReportInput[]
    connectOrCreate?: LakKegiatanCreateOrConnectWithoutLakReportInput | LakKegiatanCreateOrConnectWithoutLakReportInput[]
    createMany?: LakKegiatanCreateManyLakReportInputEnvelope
    connect?: LakKegiatanWhereUniqueInput | LakKegiatanWhereUniqueInput[]
  }

  export type LakKegiatanUncheckedCreateNestedManyWithoutLakReportInput = {
    create?: XOR<LakKegiatanCreateWithoutLakReportInput, LakKegiatanUncheckedCreateWithoutLakReportInput> | LakKegiatanCreateWithoutLakReportInput[] | LakKegiatanUncheckedCreateWithoutLakReportInput[]
    connectOrCreate?: LakKegiatanCreateOrConnectWithoutLakReportInput | LakKegiatanCreateOrConnectWithoutLakReportInput[]
    createMany?: LakKegiatanCreateManyLakReportInputEnvelope
    connect?: LakKegiatanWhereUniqueInput | LakKegiatanWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLakStatusFieldUpdateOperationsInput = {
    set?: $Enums.LakStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PegawaiUpdateOneRequiredWithoutLakReportsNestedInput = {
    create?: XOR<PegawaiCreateWithoutLakReportsInput, PegawaiUncheckedCreateWithoutLakReportsInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutLakReportsInput
    upsert?: PegawaiUpsertWithoutLakReportsInput
    connect?: PegawaiWhereUniqueInput
    update?: XOR<XOR<PegawaiUpdateToOneWithWhereWithoutLakReportsInput, PegawaiUpdateWithoutLakReportsInput>, PegawaiUncheckedUpdateWithoutLakReportsInput>
  }

  export type LakKegiatanUpdateManyWithoutLakReportNestedInput = {
    create?: XOR<LakKegiatanCreateWithoutLakReportInput, LakKegiatanUncheckedCreateWithoutLakReportInput> | LakKegiatanCreateWithoutLakReportInput[] | LakKegiatanUncheckedCreateWithoutLakReportInput[]
    connectOrCreate?: LakKegiatanCreateOrConnectWithoutLakReportInput | LakKegiatanCreateOrConnectWithoutLakReportInput[]
    upsert?: LakKegiatanUpsertWithWhereUniqueWithoutLakReportInput | LakKegiatanUpsertWithWhereUniqueWithoutLakReportInput[]
    createMany?: LakKegiatanCreateManyLakReportInputEnvelope
    set?: LakKegiatanWhereUniqueInput | LakKegiatanWhereUniqueInput[]
    disconnect?: LakKegiatanWhereUniqueInput | LakKegiatanWhereUniqueInput[]
    delete?: LakKegiatanWhereUniqueInput | LakKegiatanWhereUniqueInput[]
    connect?: LakKegiatanWhereUniqueInput | LakKegiatanWhereUniqueInput[]
    update?: LakKegiatanUpdateWithWhereUniqueWithoutLakReportInput | LakKegiatanUpdateWithWhereUniqueWithoutLakReportInput[]
    updateMany?: LakKegiatanUpdateManyWithWhereWithoutLakReportInput | LakKegiatanUpdateManyWithWhereWithoutLakReportInput[]
    deleteMany?: LakKegiatanScalarWhereInput | LakKegiatanScalarWhereInput[]
  }

  export type LakKegiatanUncheckedUpdateManyWithoutLakReportNestedInput = {
    create?: XOR<LakKegiatanCreateWithoutLakReportInput, LakKegiatanUncheckedCreateWithoutLakReportInput> | LakKegiatanCreateWithoutLakReportInput[] | LakKegiatanUncheckedCreateWithoutLakReportInput[]
    connectOrCreate?: LakKegiatanCreateOrConnectWithoutLakReportInput | LakKegiatanCreateOrConnectWithoutLakReportInput[]
    upsert?: LakKegiatanUpsertWithWhereUniqueWithoutLakReportInput | LakKegiatanUpsertWithWhereUniqueWithoutLakReportInput[]
    createMany?: LakKegiatanCreateManyLakReportInputEnvelope
    set?: LakKegiatanWhereUniqueInput | LakKegiatanWhereUniqueInput[]
    disconnect?: LakKegiatanWhereUniqueInput | LakKegiatanWhereUniqueInput[]
    delete?: LakKegiatanWhereUniqueInput | LakKegiatanWhereUniqueInput[]
    connect?: LakKegiatanWhereUniqueInput | LakKegiatanWhereUniqueInput[]
    update?: LakKegiatanUpdateWithWhereUniqueWithoutLakReportInput | LakKegiatanUpdateWithWhereUniqueWithoutLakReportInput[]
    updateMany?: LakKegiatanUpdateManyWithWhereWithoutLakReportInput | LakKegiatanUpdateManyWithWhereWithoutLakReportInput[]
    deleteMany?: LakKegiatanScalarWhereInput | LakKegiatanScalarWhereInput[]
  }

  export type LakReportCreateNestedOneWithoutKegiatanInput = {
    create?: XOR<LakReportCreateWithoutKegiatanInput, LakReportUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: LakReportCreateOrConnectWithoutKegiatanInput
    connect?: LakReportWhereUniqueInput
  }

  export type LakReportUpdateOneRequiredWithoutKegiatanNestedInput = {
    create?: XOR<LakReportCreateWithoutKegiatanInput, LakReportUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: LakReportCreateOrConnectWithoutKegiatanInput
    upsert?: LakReportUpsertWithoutKegiatanInput
    connect?: LakReportWhereUniqueInput
    update?: XOR<XOR<LakReportUpdateToOneWithWhereWithoutKegiatanInput, LakReportUpdateWithoutKegiatanInput>, LakReportUncheckedUpdateWithoutKegiatanInput>
  }

  export type PegawaiCreateNestedOneWithoutMonitoringInput = {
    create?: XOR<PegawaiCreateWithoutMonitoringInput, PegawaiUncheckedCreateWithoutMonitoringInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutMonitoringInput
    connect?: PegawaiWhereUniqueInput
  }

  export type PegawaiUpdateOneRequiredWithoutMonitoringNestedInput = {
    create?: XOR<PegawaiCreateWithoutMonitoringInput, PegawaiUncheckedCreateWithoutMonitoringInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutMonitoringInput
    upsert?: PegawaiUpsertWithoutMonitoringInput
    connect?: PegawaiWhereUniqueInput
    update?: XOR<XOR<PegawaiUpdateToOneWithWhereWithoutMonitoringInput, PegawaiUpdateWithoutMonitoringInput>, PegawaiUncheckedUpdateWithoutMonitoringInput>
  }

  export type PegawaiCreateNestedOneWithoutReminderInput = {
    create?: XOR<PegawaiCreateWithoutReminderInput, PegawaiUncheckedCreateWithoutReminderInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutReminderInput
    connect?: PegawaiWhereUniqueInput
  }

  export type PegawaiUpdateOneRequiredWithoutReminderNestedInput = {
    create?: XOR<PegawaiCreateWithoutReminderInput, PegawaiUncheckedCreateWithoutReminderInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutReminderInput
    upsert?: PegawaiUpsertWithoutReminderInput
    connect?: PegawaiWhereUniqueInput
    update?: XOR<XOR<PegawaiUpdateToOneWithWhereWithoutReminderInput, PegawaiUpdateWithoutReminderInput>, PegawaiUncheckedUpdateWithoutReminderInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumLakStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LakStatus | EnumLakStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LakStatus[] | ListEnumLakStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LakStatus[] | ListEnumLakStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLakStatusFilter<$PrismaModel> | $Enums.LakStatus
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

  export type NestedEnumLakStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LakStatus | EnumLakStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LakStatus[] | ListEnumLakStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LakStatus[] | ListEnumLakStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLakStatusWithAggregatesFilter<$PrismaModel> | $Enums.LakStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLakStatusFilter<$PrismaModel>
    _max?: NestedEnumLakStatusFilter<$PrismaModel>
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

  export type PegawaiCreateWithoutUserInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    createdAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutPegawaiInput
    unit: UnitKerjaCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportCreateNestedManyWithoutPegawaiInput
    monitoring?: MonitoringLakCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutUserInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    jabatanId: string
    unitId: string
    createdAt?: Date | string
    lakReports?: LakReportUncheckedCreateNestedManyWithoutPegawaiInput
    monitoring?: MonitoringLakUncheckedCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutUserInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
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
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutPegawaiNestedInput
    unit?: UnitKerjaUpdateOneRequiredWithoutPegawaiNestedInput
    lakReports?: LakReportUpdateManyWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    jabatanId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lakReports?: LakReportUncheckedUpdateManyWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUncheckedUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type JabatanCreateWithoutPegawaiInput = {
    id?: string
    nama: string
  }

  export type JabatanUncheckedCreateWithoutPegawaiInput = {
    id?: string
    nama: string
  }

  export type JabatanCreateOrConnectWithoutPegawaiInput = {
    where: JabatanWhereUniqueInput
    create: XOR<JabatanCreateWithoutPegawaiInput, JabatanUncheckedCreateWithoutPegawaiInput>
  }

  export type UnitKerjaCreateWithoutPegawaiInput = {
    id?: string
    nama: string
  }

  export type UnitKerjaUncheckedCreateWithoutPegawaiInput = {
    id?: string
    nama: string
  }

  export type UnitKerjaCreateOrConnectWithoutPegawaiInput = {
    where: UnitKerjaWhereUniqueInput
    create: XOR<UnitKerjaCreateWithoutPegawaiInput, UnitKerjaUncheckedCreateWithoutPegawaiInput>
  }

  export type UserCreateWithoutPegawaiInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPegawaiInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPegawaiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
  }

  export type LakReportCreateWithoutPegawaiInput = {
    id?: string
    bulan: number
    tahun: number
    jumlahHariKerja: number
    totalMenit?: number
    status?: $Enums.LakStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan?: LakKegiatanCreateNestedManyWithoutLakReportInput
  }

  export type LakReportUncheckedCreateWithoutPegawaiInput = {
    id?: string
    bulan: number
    tahun: number
    jumlahHariKerja: number
    totalMenit?: number
    status?: $Enums.LakStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan?: LakKegiatanUncheckedCreateNestedManyWithoutLakReportInput
  }

  export type LakReportCreateOrConnectWithoutPegawaiInput = {
    where: LakReportWhereUniqueInput
    create: XOR<LakReportCreateWithoutPegawaiInput, LakReportUncheckedCreateWithoutPegawaiInput>
  }

  export type LakReportCreateManyPegawaiInputEnvelope = {
    data: LakReportCreateManyPegawaiInput | LakReportCreateManyPegawaiInput[]
    skipDuplicates?: boolean
  }

  export type MonitoringLakCreateWithoutPegawaiInput = {
    id?: string
    bulan: number
    tahun: number
    status: $Enums.LakStatus
    createdAt?: Date | string
  }

  export type MonitoringLakUncheckedCreateWithoutPegawaiInput = {
    id?: string
    bulan: number
    tahun: number
    status: $Enums.LakStatus
    createdAt?: Date | string
  }

  export type MonitoringLakCreateOrConnectWithoutPegawaiInput = {
    where: MonitoringLakWhereUniqueInput
    create: XOR<MonitoringLakCreateWithoutPegawaiInput, MonitoringLakUncheckedCreateWithoutPegawaiInput>
  }

  export type MonitoringLakCreateManyPegawaiInputEnvelope = {
    data: MonitoringLakCreateManyPegawaiInput | MonitoringLakCreateManyPegawaiInput[]
    skipDuplicates?: boolean
  }

  export type ReminderCreateWithoutPegawaiInput = {
    id?: string
    bulan: number
    tahun: number
    status: string
    createdAt?: Date | string
  }

  export type ReminderUncheckedCreateWithoutPegawaiInput = {
    id?: string
    bulan: number
    tahun: number
    status: string
    createdAt?: Date | string
  }

  export type ReminderCreateOrConnectWithoutPegawaiInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutPegawaiInput, ReminderUncheckedCreateWithoutPegawaiInput>
  }

  export type ReminderCreateManyPegawaiInputEnvelope = {
    data: ReminderCreateManyPegawaiInput | ReminderCreateManyPegawaiInput[]
    skipDuplicates?: boolean
  }

  export type JabatanUpsertWithoutPegawaiInput = {
    update: XOR<JabatanUpdateWithoutPegawaiInput, JabatanUncheckedUpdateWithoutPegawaiInput>
    create: XOR<JabatanCreateWithoutPegawaiInput, JabatanUncheckedCreateWithoutPegawaiInput>
    where?: JabatanWhereInput
  }

  export type JabatanUpdateToOneWithWhereWithoutPegawaiInput = {
    where?: JabatanWhereInput
    data: XOR<JabatanUpdateWithoutPegawaiInput, JabatanUncheckedUpdateWithoutPegawaiInput>
  }

  export type JabatanUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type JabatanUncheckedUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type UnitKerjaUpsertWithoutPegawaiInput = {
    update: XOR<UnitKerjaUpdateWithoutPegawaiInput, UnitKerjaUncheckedUpdateWithoutPegawaiInput>
    create: XOR<UnitKerjaCreateWithoutPegawaiInput, UnitKerjaUncheckedCreateWithoutPegawaiInput>
    where?: UnitKerjaWhereInput
  }

  export type UnitKerjaUpdateToOneWithWhereWithoutPegawaiInput = {
    where?: UnitKerjaWhereInput
    data: XOR<UnitKerjaUpdateWithoutPegawaiInput, UnitKerjaUncheckedUpdateWithoutPegawaiInput>
  }

  export type UnitKerjaUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type UnitKerjaUncheckedUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
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
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
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
    id?: StringFilter<"LakReport"> | string
    pegawaiId?: StringFilter<"LakReport"> | string
    bulan?: IntFilter<"LakReport"> | number
    tahun?: IntFilter<"LakReport"> | number
    jumlahHariKerja?: IntFilter<"LakReport"> | number
    totalMenit?: IntFilter<"LakReport"> | number
    status?: EnumLakStatusFilter<"LakReport"> | $Enums.LakStatus
    submittedAt?: DateTimeNullableFilter<"LakReport"> | Date | string | null
    createdAt?: DateTimeFilter<"LakReport"> | Date | string
    updatedAt?: DateTimeFilter<"LakReport"> | Date | string
  }

  export type MonitoringLakUpsertWithWhereUniqueWithoutPegawaiInput = {
    where: MonitoringLakWhereUniqueInput
    update: XOR<MonitoringLakUpdateWithoutPegawaiInput, MonitoringLakUncheckedUpdateWithoutPegawaiInput>
    create: XOR<MonitoringLakCreateWithoutPegawaiInput, MonitoringLakUncheckedCreateWithoutPegawaiInput>
  }

  export type MonitoringLakUpdateWithWhereUniqueWithoutPegawaiInput = {
    where: MonitoringLakWhereUniqueInput
    data: XOR<MonitoringLakUpdateWithoutPegawaiInput, MonitoringLakUncheckedUpdateWithoutPegawaiInput>
  }

  export type MonitoringLakUpdateManyWithWhereWithoutPegawaiInput = {
    where: MonitoringLakScalarWhereInput
    data: XOR<MonitoringLakUpdateManyMutationInput, MonitoringLakUncheckedUpdateManyWithoutPegawaiInput>
  }

  export type MonitoringLakScalarWhereInput = {
    AND?: MonitoringLakScalarWhereInput | MonitoringLakScalarWhereInput[]
    OR?: MonitoringLakScalarWhereInput[]
    NOT?: MonitoringLakScalarWhereInput | MonitoringLakScalarWhereInput[]
    id?: StringFilter<"MonitoringLak"> | string
    pegawaiId?: StringFilter<"MonitoringLak"> | string
    bulan?: IntFilter<"MonitoringLak"> | number
    tahun?: IntFilter<"MonitoringLak"> | number
    status?: EnumLakStatusFilter<"MonitoringLak"> | $Enums.LakStatus
    createdAt?: DateTimeFilter<"MonitoringLak"> | Date | string
  }

  export type ReminderUpsertWithWhereUniqueWithoutPegawaiInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutPegawaiInput, ReminderUncheckedUpdateWithoutPegawaiInput>
    create: XOR<ReminderCreateWithoutPegawaiInput, ReminderUncheckedCreateWithoutPegawaiInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutPegawaiInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutPegawaiInput, ReminderUncheckedUpdateWithoutPegawaiInput>
  }

  export type ReminderUpdateManyWithWhereWithoutPegawaiInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutPegawaiInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: StringFilter<"Reminder"> | string
    pegawaiId?: StringFilter<"Reminder"> | string
    bulan?: IntFilter<"Reminder"> | number
    tahun?: IntFilter<"Reminder"> | number
    status?: StringFilter<"Reminder"> | string
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
  }

  export type PegawaiCreateWithoutJabatanInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    createdAt?: Date | string
    unit: UnitKerjaCreateNestedOneWithoutPegawaiInput
    user?: UserCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportCreateNestedManyWithoutPegawaiInput
    monitoring?: MonitoringLakCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutJabatanInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    unitId: string
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportUncheckedCreateNestedManyWithoutPegawaiInput
    monitoring?: MonitoringLakUncheckedCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutJabatanInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutJabatanInput, PegawaiUncheckedCreateWithoutJabatanInput>
  }

  export type PegawaiCreateManyJabatanInputEnvelope = {
    data: PegawaiCreateManyJabatanInput | PegawaiCreateManyJabatanInput[]
    skipDuplicates?: boolean
  }

  export type PegawaiUpsertWithWhereUniqueWithoutJabatanInput = {
    where: PegawaiWhereUniqueInput
    update: XOR<PegawaiUpdateWithoutJabatanInput, PegawaiUncheckedUpdateWithoutJabatanInput>
    create: XOR<PegawaiCreateWithoutJabatanInput, PegawaiUncheckedCreateWithoutJabatanInput>
  }

  export type PegawaiUpdateWithWhereUniqueWithoutJabatanInput = {
    where: PegawaiWhereUniqueInput
    data: XOR<PegawaiUpdateWithoutJabatanInput, PegawaiUncheckedUpdateWithoutJabatanInput>
  }

  export type PegawaiUpdateManyWithWhereWithoutJabatanInput = {
    where: PegawaiScalarWhereInput
    data: XOR<PegawaiUpdateManyMutationInput, PegawaiUncheckedUpdateManyWithoutJabatanInput>
  }

  export type PegawaiScalarWhereInput = {
    AND?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
    OR?: PegawaiScalarWhereInput[]
    NOT?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
    id?: StringFilter<"Pegawai"> | string
    nip?: StringFilter<"Pegawai"> | string
    nama?: StringFilter<"Pegawai"> | string
    pangkat?: StringNullableFilter<"Pegawai"> | string | null
    golongan?: StringNullableFilter<"Pegawai"> | string | null
    jabatanId?: StringFilter<"Pegawai"> | string
    unitId?: StringFilter<"Pegawai"> | string
    createdAt?: DateTimeFilter<"Pegawai"> | Date | string
  }

  export type PegawaiCreateWithoutUnitInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    createdAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutPegawaiInput
    user?: UserCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportCreateNestedManyWithoutPegawaiInput
    monitoring?: MonitoringLakCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutUnitInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    jabatanId: string
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportUncheckedCreateNestedManyWithoutPegawaiInput
    monitoring?: MonitoringLakUncheckedCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutUnitInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutUnitInput, PegawaiUncheckedCreateWithoutUnitInput>
  }

  export type PegawaiCreateManyUnitInputEnvelope = {
    data: PegawaiCreateManyUnitInput | PegawaiCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type PegawaiUpsertWithWhereUniqueWithoutUnitInput = {
    where: PegawaiWhereUniqueInput
    update: XOR<PegawaiUpdateWithoutUnitInput, PegawaiUncheckedUpdateWithoutUnitInput>
    create: XOR<PegawaiCreateWithoutUnitInput, PegawaiUncheckedCreateWithoutUnitInput>
  }

  export type PegawaiUpdateWithWhereUniqueWithoutUnitInput = {
    where: PegawaiWhereUniqueInput
    data: XOR<PegawaiUpdateWithoutUnitInput, PegawaiUncheckedUpdateWithoutUnitInput>
  }

  export type PegawaiUpdateManyWithWhereWithoutUnitInput = {
    where: PegawaiScalarWhereInput
    data: XOR<PegawaiUpdateManyMutationInput, PegawaiUncheckedUpdateManyWithoutUnitInput>
  }

  export type PegawaiCreateWithoutLakReportsInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    createdAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutPegawaiInput
    unit: UnitKerjaCreateNestedOneWithoutPegawaiInput
    user?: UserCreateNestedOneWithoutPegawaiInput
    monitoring?: MonitoringLakCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutLakReportsInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    jabatanId: string
    unitId: string
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPegawaiInput
    monitoring?: MonitoringLakUncheckedCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutLakReportsInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutLakReportsInput, PegawaiUncheckedCreateWithoutLakReportsInput>
  }

  export type LakKegiatanCreateWithoutLakReportInput = {
    id?: string
    tanggal: Date | string
    jamMulai: Date | string
    jamSelesai: Date | string
    uraianKegiatan: string
    volume: string
    jumlahMenit: number
    keterangan?: string | null
    parafAtasan?: string | null
    createdAt?: Date | string
  }

  export type LakKegiatanUncheckedCreateWithoutLakReportInput = {
    id?: string
    tanggal: Date | string
    jamMulai: Date | string
    jamSelesai: Date | string
    uraianKegiatan: string
    volume: string
    jumlahMenit: number
    keterangan?: string | null
    parafAtasan?: string | null
    createdAt?: Date | string
  }

  export type LakKegiatanCreateOrConnectWithoutLakReportInput = {
    where: LakKegiatanWhereUniqueInput
    create: XOR<LakKegiatanCreateWithoutLakReportInput, LakKegiatanUncheckedCreateWithoutLakReportInput>
  }

  export type LakKegiatanCreateManyLakReportInputEnvelope = {
    data: LakKegiatanCreateManyLakReportInput | LakKegiatanCreateManyLakReportInput[]
    skipDuplicates?: boolean
  }

  export type PegawaiUpsertWithoutLakReportsInput = {
    update: XOR<PegawaiUpdateWithoutLakReportsInput, PegawaiUncheckedUpdateWithoutLakReportsInput>
    create: XOR<PegawaiCreateWithoutLakReportsInput, PegawaiUncheckedCreateWithoutLakReportsInput>
    where?: PegawaiWhereInput
  }

  export type PegawaiUpdateToOneWithWhereWithoutLakReportsInput = {
    where?: PegawaiWhereInput
    data: XOR<PegawaiUpdateWithoutLakReportsInput, PegawaiUncheckedUpdateWithoutLakReportsInput>
  }

  export type PegawaiUpdateWithoutLakReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutPegawaiNestedInput
    unit?: UnitKerjaUpdateOneRequiredWithoutPegawaiNestedInput
    user?: UserUpdateOneWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutLakReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    jabatanId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUncheckedUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type LakKegiatanUpsertWithWhereUniqueWithoutLakReportInput = {
    where: LakKegiatanWhereUniqueInput
    update: XOR<LakKegiatanUpdateWithoutLakReportInput, LakKegiatanUncheckedUpdateWithoutLakReportInput>
    create: XOR<LakKegiatanCreateWithoutLakReportInput, LakKegiatanUncheckedCreateWithoutLakReportInput>
  }

  export type LakKegiatanUpdateWithWhereUniqueWithoutLakReportInput = {
    where: LakKegiatanWhereUniqueInput
    data: XOR<LakKegiatanUpdateWithoutLakReportInput, LakKegiatanUncheckedUpdateWithoutLakReportInput>
  }

  export type LakKegiatanUpdateManyWithWhereWithoutLakReportInput = {
    where: LakKegiatanScalarWhereInput
    data: XOR<LakKegiatanUpdateManyMutationInput, LakKegiatanUncheckedUpdateManyWithoutLakReportInput>
  }

  export type LakKegiatanScalarWhereInput = {
    AND?: LakKegiatanScalarWhereInput | LakKegiatanScalarWhereInput[]
    OR?: LakKegiatanScalarWhereInput[]
    NOT?: LakKegiatanScalarWhereInput | LakKegiatanScalarWhereInput[]
    id?: StringFilter<"LakKegiatan"> | string
    lakReportId?: StringFilter<"LakKegiatan"> | string
    tanggal?: DateTimeFilter<"LakKegiatan"> | Date | string
    jamMulai?: DateTimeFilter<"LakKegiatan"> | Date | string
    jamSelesai?: DateTimeFilter<"LakKegiatan"> | Date | string
    uraianKegiatan?: StringFilter<"LakKegiatan"> | string
    volume?: StringFilter<"LakKegiatan"> | string
    jumlahMenit?: IntFilter<"LakKegiatan"> | number
    keterangan?: StringNullableFilter<"LakKegiatan"> | string | null
    parafAtasan?: StringNullableFilter<"LakKegiatan"> | string | null
    createdAt?: DateTimeFilter<"LakKegiatan"> | Date | string
  }

  export type LakReportCreateWithoutKegiatanInput = {
    id?: string
    bulan: number
    tahun: number
    jumlahHariKerja: number
    totalMenit?: number
    status?: $Enums.LakStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai: PegawaiCreateNestedOneWithoutLakReportsInput
  }

  export type LakReportUncheckedCreateWithoutKegiatanInput = {
    id?: string
    pegawaiId: string
    bulan: number
    tahun: number
    jumlahHariKerja: number
    totalMenit?: number
    status?: $Enums.LakStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LakReportCreateOrConnectWithoutKegiatanInput = {
    where: LakReportWhereUniqueInput
    create: XOR<LakReportCreateWithoutKegiatanInput, LakReportUncheckedCreateWithoutKegiatanInput>
  }

  export type LakReportUpsertWithoutKegiatanInput = {
    update: XOR<LakReportUpdateWithoutKegiatanInput, LakReportUncheckedUpdateWithoutKegiatanInput>
    create: XOR<LakReportCreateWithoutKegiatanInput, LakReportUncheckedCreateWithoutKegiatanInput>
    where?: LakReportWhereInput
  }

  export type LakReportUpdateToOneWithWhereWithoutKegiatanInput = {
    where?: LakReportWhereInput
    data: XOR<LakReportUpdateWithoutKegiatanInput, LakReportUncheckedUpdateWithoutKegiatanInput>
  }

  export type LakReportUpdateWithoutKegiatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jumlahHariKerja?: IntFieldUpdateOperationsInput | number
    totalMenit?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateOneRequiredWithoutLakReportsNestedInput
  }

  export type LakReportUncheckedUpdateWithoutKegiatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    pegawaiId?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jumlahHariKerja?: IntFieldUpdateOperationsInput | number
    totalMenit?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PegawaiCreateWithoutMonitoringInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    createdAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutPegawaiInput
    unit: UnitKerjaCreateNestedOneWithoutPegawaiInput
    user?: UserCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutMonitoringInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    jabatanId: string
    unitId: string
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportUncheckedCreateNestedManyWithoutPegawaiInput
    reminder?: ReminderUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutMonitoringInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutMonitoringInput, PegawaiUncheckedCreateWithoutMonitoringInput>
  }

  export type PegawaiUpsertWithoutMonitoringInput = {
    update: XOR<PegawaiUpdateWithoutMonitoringInput, PegawaiUncheckedUpdateWithoutMonitoringInput>
    create: XOR<PegawaiCreateWithoutMonitoringInput, PegawaiUncheckedCreateWithoutMonitoringInput>
    where?: PegawaiWhereInput
  }

  export type PegawaiUpdateToOneWithWhereWithoutMonitoringInput = {
    where?: PegawaiWhereInput
    data: XOR<PegawaiUpdateWithoutMonitoringInput, PegawaiUncheckedUpdateWithoutMonitoringInput>
  }

  export type PegawaiUpdateWithoutMonitoringInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutPegawaiNestedInput
    unit?: UnitKerjaUpdateOneRequiredWithoutPegawaiNestedInput
    user?: UserUpdateOneWithoutPegawaiNestedInput
    lakReports?: LakReportUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutMonitoringInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    jabatanId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPegawaiNestedInput
    lakReports?: LakReportUncheckedUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiCreateWithoutReminderInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    createdAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutPegawaiInput
    unit: UnitKerjaCreateNestedOneWithoutPegawaiInput
    user?: UserCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportCreateNestedManyWithoutPegawaiInput
    monitoring?: MonitoringLakCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutReminderInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    jabatanId: string
    unitId: string
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPegawaiInput
    lakReports?: LakReportUncheckedCreateNestedManyWithoutPegawaiInput
    monitoring?: MonitoringLakUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutReminderInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutReminderInput, PegawaiUncheckedCreateWithoutReminderInput>
  }

  export type PegawaiUpsertWithoutReminderInput = {
    update: XOR<PegawaiUpdateWithoutReminderInput, PegawaiUncheckedUpdateWithoutReminderInput>
    create: XOR<PegawaiCreateWithoutReminderInput, PegawaiUncheckedCreateWithoutReminderInput>
    where?: PegawaiWhereInput
  }

  export type PegawaiUpdateToOneWithWhereWithoutReminderInput = {
    where?: PegawaiWhereInput
    data: XOR<PegawaiUpdateWithoutReminderInput, PegawaiUncheckedUpdateWithoutReminderInput>
  }

  export type PegawaiUpdateWithoutReminderInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutPegawaiNestedInput
    unit?: UnitKerjaUpdateOneRequiredWithoutPegawaiNestedInput
    user?: UserUpdateOneWithoutPegawaiNestedInput
    lakReports?: LakReportUpdateManyWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutReminderInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    jabatanId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPegawaiNestedInput
    lakReports?: LakReportUncheckedUpdateManyWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai?: PegawaiCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    pegawaiId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pegawaiId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakReportCreateManyPegawaiInput = {
    id?: string
    bulan: number
    tahun: number
    jumlahHariKerja: number
    totalMenit?: number
    status?: $Enums.LakStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitoringLakCreateManyPegawaiInput = {
    id?: string
    bulan: number
    tahun: number
    status: $Enums.LakStatus
    createdAt?: Date | string
  }

  export type ReminderCreateManyPegawaiInput = {
    id?: string
    bulan: number
    tahun: number
    status: string
    createdAt?: Date | string
  }

  export type LakReportUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jumlahHariKerja?: IntFieldUpdateOperationsInput | number
    totalMenit?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: LakKegiatanUpdateManyWithoutLakReportNestedInput
  }

  export type LakReportUncheckedUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jumlahHariKerja?: IntFieldUpdateOperationsInput | number
    totalMenit?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: LakKegiatanUncheckedUpdateManyWithoutLakReportNestedInput
  }

  export type LakReportUncheckedUpdateManyWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jumlahHariKerja?: IntFieldUpdateOperationsInput | number
    totalMenit?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringLakUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringLakUncheckedUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringLakUncheckedUpdateManyWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: EnumLakStatusFieldUpdateOperationsInput | $Enums.LakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PegawaiCreateManyJabatanInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    unitId: string
    createdAt?: Date | string
  }

  export type PegawaiUpdateWithoutJabatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitKerjaUpdateOneRequiredWithoutPegawaiNestedInput
    user?: UserUpdateOneWithoutPegawaiNestedInput
    lakReports?: LakReportUpdateManyWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutJabatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPegawaiNestedInput
    lakReports?: LakReportUncheckedUpdateManyWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUncheckedUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateManyWithoutJabatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PegawaiCreateManyUnitInput = {
    id?: string
    nip: string
    nama: string
    pangkat?: string | null
    golongan?: string | null
    jabatanId: string
    createdAt?: Date | string
  }

  export type PegawaiUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutPegawaiNestedInput
    user?: UserUpdateOneWithoutPegawaiNestedInput
    lakReports?: LakReportUpdateManyWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    jabatanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPegawaiNestedInput
    lakReports?: LakReportUncheckedUpdateManyWithoutPegawaiNestedInput
    monitoring?: MonitoringLakUncheckedUpdateManyWithoutPegawaiNestedInput
    reminder?: ReminderUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    pangkat?: NullableStringFieldUpdateOperationsInput | string | null
    golongan?: NullableStringFieldUpdateOperationsInput | string | null
    jabatanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakKegiatanCreateManyLakReportInput = {
    id?: string
    tanggal: Date | string
    jamMulai: Date | string
    jamSelesai: Date | string
    uraianKegiatan: string
    volume: string
    jumlahMenit: number
    keterangan?: string | null
    parafAtasan?: string | null
    createdAt?: Date | string
  }

  export type LakKegiatanUpdateWithoutLakReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    jumlahMenit?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    parafAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakKegiatanUncheckedUpdateWithoutLakReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    jumlahMenit?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    parafAtasan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LakKegiatanUncheckedUpdateManyWithoutLakReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    uraianKegiatan?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    jumlahMenit?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    parafAtasan?: NullableStringFieldUpdateOperationsInput | string | null
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
     * @deprecated Use PegawaiCountOutputTypeDefaultArgs instead
     */
    export type PegawaiCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PegawaiCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JabatanCountOutputTypeDefaultArgs instead
     */
    export type JabatanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JabatanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnitKerjaCountOutputTypeDefaultArgs instead
     */
    export type UnitKerjaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnitKerjaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LakReportCountOutputTypeDefaultArgs instead
     */
    export type LakReportCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LakReportCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PegawaiDefaultArgs instead
     */
    export type PegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PegawaiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JabatanDefaultArgs instead
     */
    export type JabatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JabatanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnitKerjaDefaultArgs instead
     */
    export type UnitKerjaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnitKerjaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LakReportDefaultArgs instead
     */
    export type LakReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LakReportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LakKegiatanDefaultArgs instead
     */
    export type LakKegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LakKegiatanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonitoringLakDefaultArgs instead
     */
    export type MonitoringLakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonitoringLakDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReminderDefaultArgs instead
     */
    export type ReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReminderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>

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