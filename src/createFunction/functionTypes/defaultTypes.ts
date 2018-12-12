import { TypeDefaults, TypeName } from '../../interfaces/Types'

const defaultType = (type: TypeName): string => {
  return TypeDefaults[type]
}

export default defaultType

