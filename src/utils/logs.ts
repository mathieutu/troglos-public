// @ts-expect-error Osef
export const dump = <T>(val: T): T => console.log(val) || val
