import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";
import { handler as createOwnedCoursesHook } from "./useOwnedCourses";
import { handler as createOwnedCourseHook } from "./useOwnedCourse";
import { handler as createManagedCourseHook} from "./useManagedCourses";


export const setupHooks = ({web3, provider, contract}) => {
    return {
        useAccount: createAccountHook(web3, provider),
        useNetwork: createNetworkHook(web3),
        useOwnedCourses: createOwnedCoursesHook(web3, contract),
        useOwnedCourse: createOwnedCourseHook(web3, contract),
        useManagedCourses: createManagedCourseHook(web3, contract)
    }
}