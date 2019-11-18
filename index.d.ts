/**
 * The type of environment the script is running in.
 * @example
 * ```
 * const envType = require("env-type");
 *
 * envType
 * //=> 'node' (When using NodeJS)
 * ```
*/
declare const envType: "browser" | "worker" | "node" | undefined

export = envType;
