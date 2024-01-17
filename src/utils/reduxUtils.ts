import { get } from "lodash"

export const getErrorMessage = (e: any) => {
    return get(e, ["response", "data", "message"], e.message)
}

export const getSignupErrorMessage = (e: any) => {
    return get(e, ["response", "data", "errors", "0" , "message"], e.message)
}