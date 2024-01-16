import { get } from "lodash"

export const getErrorMessage = (e: any) => {
    return get(e, ["response", "data", "message"], e.message)
}