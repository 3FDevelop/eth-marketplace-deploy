import { useOwnedCourses, useWalletInfo } from "@components/hooks/web3";
import { Button, Loader} from "@components/ui/comon";
import { CourseList, CourseCard} from "@components/ui/course";
import { getAllCourses } from "@content/courses/fetcher";
import { OrderModal } from "@components/ui/order"
import { useState } from "react";
import { MarketHeader } from "@components/ui/marketplace";
import { useWeb3 } from "@components/providers";
import { withToast } from "@utils/toast";


export default function Marketplace({courses}) {

	const [selectedCourse, setSelectedCourse] = useState(null);
	const [isNewPurchase, setIsNewPurchase] = useState(true);
	const [busyCourse, setBusyCourse] = useState(null);

	const {web3, contract, requireInstall} = useWeb3();
    const {isConnecting, hasConnectedWallet, account, network} = useWalletInfo();

    const {ownedCourses} = useOwnedCourses(courses, account.data, network.data)

	const purchaseCourse = async (order, course) => {
		const hexCourseId = web3.utils.utf8ToHex(course.id);

		const orderHash = web3.utils.soliditySha3(
			{type: "bytes16", value: hexCourseId},
			{type: "address", value: account.data}
		)
		const value = web3.utils.toWei(String(order.price))

		setBusyCourse(course.id)
		if(isNewPurchase){
			const emailHash = web3.utils.sha3(order.email)
			const proof = web3.utils.soliditySha3(
				{type: "bytes32", value: emailHash},
				{type: "bytes32", value: orderHash}
			)
			
			withToast(_purchaseCourse({hexCourseId, proof, value}, course))
		}else{
			withToast(_repurchaseCourse({courseHash: orderHash, value}, course))
		}
	}	

	const _purchaseCourse = async ({hexCourseId, proof, value}, course) => {
		try{
			const result = await contract.methods.purchaseCourse(
				hexCourseId,
				proof
			).send({from: account.data, value})
			ownedCourses.mutate([
				...ownedCourses.data, {
					...course,
					proof, 
					state: "purchase",
					owner: account.data,
					price: value
				}
			])
			return result	
		}catch(e){
			throw new Error(e.message)
		}finally{
			setBusyCourse(null)
		}
	}
	const _repurchaseCourse = async ({courseHash, value}, course) => {
		try{
			const result = await contract.methods.repurchaseCourse(
				courseHash
			  ).send({from: account.data, value})

			const index = ownedCourses.data.findIndex(c => c.id === course.id)

			if (index >= 0) {
				ownedCourses.data[index].state = "purchased"
				ownedCourses.mutate(ownedCourses.data)
			} else {
				ownedCourses.mutate()
			}

			return result
		}catch(e){
			throw new Error(e.message)
		}finally{
			setBusyCourse(null)
		}
	}

	const cleanupModal = () => {
		setSelectedCourse(null)
		setIsNewPurchase(true)
	}
    
	return (
		<>

            <MarketHeader/>
			<CourseList
				courses={courses}
			>
				{course => {
					const owned = ownedCourses.lookup[course.id]
					return (
					<CourseCard
						key={course.id}
						course={course}
						state={owned?.state}
						disabled={!hasConnectedWallet}
						Footer={() => {
						if (requireInstall) {
							return (
							<Button
								size="sm"
								disabled={true}
								variant="lightPurple">
								Install
							</Button>
							)
						}
						if (isConnecting) {
							return (
							<Button
								size="sm"
								disabled={true}
								variant="lightPurple">
								<Loader size="sm" />
							</Button>
							)
						}
						if (!ownedCourses.hasInitialResponse) {
							return (
							// <div style={{height: "42px"}}></div>
							<Button size="sm" disabled={true}>
								{ hasConnectedWallet ? "Loading State..." : "Connect"}
							</Button>
							)
						}
						const isBusy = busyCourse === course.id
						if (owned) {
							return (
								<>
									<div className="flex">
										<Button
											size="sm"
											onClick={() => alert("You are owner of this course.")}
                        					disabled={false}
											variant="green">
											Yours &#10004;
										</Button>
										{ owned.state === "deactivated" &&
											<div className="ml-1">
												<Button
													size="sm"
													disabled={false}
													onClick={() => {
														setIsNewPurchase(false)
														setSelectedCourse(course)
													}}
													variant="purple">
														{ isBusy ?
															<div className="flex items-center">
																<Loader size="sm"/>
																<div className="ml-2">In progress</div>
															</div> :
															"Fund to Activate"
														}
												</Button>
											</div>
										}
									</div>
								</>
							)
						}
						return (
							<Button
								size="sm"
								onClick={() => setSelectedCourse(course)}
								disabled={!hasConnectedWallet}
								variant="lightPurple">
								{ isBusy ?
									<div className="flex items-center">
										<Loader size="sm"/>
										<div className="ml-2">In progress</div>
									</div> :
									"Purchase"
								}
							</Button>
						)}
						}
					/>
					)}
				}
			</CourseList>
			{	selectedCourse &&
				<OrderModal 
					isNewPurchase={isNewPurchase}
					onSubmit={(formData, course) => {
						purchaseCourse(formData, course)
						cleanupModal()
					}}
					course={selectedCourse}
					onClose={cleanupModal}
				/>
			}
		</>
	)
}

export function getStaticProps(){
	const { data } = getAllCourses();
	return{
		props: {
			courses: data
		}
	}
}
