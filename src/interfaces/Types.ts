export type TypeName = 'number' | 'boolean' | 'undefined' | 'null' | 'any' | 'string' | 'RegExp'

export const TypeDefaults: { [type in TypeName]: string } = {
  number: '0',
  boolean: 'true',
  undefined: 'undefined',
  null: 'null',
  any: 'any',
  string: "''",
  RegExp: "new RegExp('hello')",
}

export const isTypeName = (name: string): name is TypeName => {
  return Object.keys(TypeDefaults).includes(name)
}
