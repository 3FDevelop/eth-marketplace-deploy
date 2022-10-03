import { useManagedCourses, useAdmin} from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import { Button, Message} from "@components/ui/comon";
import { CourseFilter, ManagedCourseCard} from "@components/ui/course";
import { MarketHeader } from "@components/ui/marketplace";
import { normalizeOwnedCourse } from "@utils/normalize";
import { useState } from "react";
import { withToast } from "@utils/toast";

const VerificationInput = ({onVerify}) => {

    const [email, setEmail] = useState("");

    return (
    <div className="flex mr-2 relative rounded-md">
        <input
            onChange={({target: {value}}) => setEmail(value)}
            value={email}
            type="text"
            name="account"
            id="account"
            className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
            placeholder="0x2341ab..." />
        <Button
            onClick={()=> {
                onVerify(email)
               }}
        >
        Verify
        </Button>
    </div>
    )
}

export default function ManageCourses() {

    const {account} = useAdmin({redirectTo: "/marketplace"})
    const {managedCourses} = useManagedCourses(account)
    const {web3, contract} = useWeb3();

    const [searchedCourse, setSearchedCourse] = useState(null);
    const [filters, setFilters] = useState({state: "all"})
    const [proofOwnerShip, setProofedOwnerShip] = useState({});

    //
    const verifyCourse = (email, {hash, proof}) => {
        if(email.length == 0){return} 
        const emailHash = web3.utils.sha3(email)
        const proofToCheck = web3.utils.soliditySha3(
        { type: "bytes32", value: emailHash },
        { type: "bytes32", value: hash }
        )

        proofToCheck === proof ?  
            setProofedOwnerShip({
                [hash]: true
            }) :
            setProofedOwnerShip({
                [hash]: false
            })
    }
    //
    const changeCourseState = async (courseHash, method) => {
        try {
            const result = await contract.methods[method](courseHash).send({from: account.data})
            return result
        } catch(e) {
            console.error(e.message)
        }
    }
    const activateCourse = async courseHash => {
        withToast(changeCourseState(courseHash, "activateCourse"))
    }
    const deactivateCourse = async courseHash => {
        withToast(changeCourseState(courseHash, "deactivateCourse"))
    }
    //
    const onSearchSubmit = async hash => {

        const re = /[0-9A-Fa-f]{6}/g;

        if(hash && hash.length === 66 && re.test(hash)){
            const course = await contract.methods.getCourseByHash(hash).call();
            if(course.owner !== "0x0000000000000000000000000000000000000000"){
                const normalized = normalizeOwnedCourse(web3)({hash}, course)
                setSearchedCourse(normalized)
                return
            }
        }

        setSearchedCourse(null)
    }
    //
    const renderCard = (course, isSearched) => {
        return(
            <ManagedCourseCard
                    key={course.ownedCourseId}
                    course={course}
                    isSearched={isSearched}
                    >
                <VerificationInput
                    onVerify={(email) => verifyCourse(email, {
                        hash: course.hash,
                        proof: course.proof
                    })}
                />
                { proofOwnerShip[course.hash] && 
                    <div className="mt-1">
                        <Message>
                            Verified!
                        </Message>
                    </div>
                }
                { proofOwnerShip[course.hash] === false && 
                    <div className="mt-1">
                        <Message type="danger">
                            Wrong Proof!
                        </Message>
                    </div>
                }
                {   course.state === "purchased" &&
                    <div className="mt-1">
                        <Button
                            onClick={() => activateCourse(course.hash)}
                            variant="green">
                            Activate
                        </Button>
                        <Button 
                            onClick={() => deactivateCourse(course.hash)}
                            variant="red">
                            Deactivate
                        </Button>
                    </div>
                }
            </ManagedCourseCard>
        )
    }
    const filteredCourse = managedCourses.data
        ?.filter((course) => {
            if(filters.state === "all") return true
            return course.state === filters.state
        })
        .map(course => renderCard(course))
    //
    if(!account.isAdmin){
        return null
    }

    return (
        <>
            <MarketHeader />
            <CourseFilter onFilterSelect={(value) => setFilters({state: value})} onSearchSubmit={onSearchSubmit} />
            <section className="grid grid-cols-1">
                { searchedCourse && 
                    <div>
                        <h1 className="text-xl font-bold p-5">
                            Search
                        </h1>
                        {renderCard(searchedCourse, true)}
                    </div>
                }
                <h1 className="text-xl font-bold p-5">
                    All Courses
                </h1>
                {filteredCourse}
                {filteredCourse?.length === 0 && 
                    <Message type="warning">
                        No courses to display
                    </Message>
                }
            </section>
        </>
    )
}