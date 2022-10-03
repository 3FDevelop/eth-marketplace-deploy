import { Button, Message } from "@components/ui/comon";
import { OwnedCourseCard } from "@components/ui/course";
import { MarketHeader } from "@components/ui/marketplace";
import { useOwnedCourses, useWalletInfo } from "@components/hooks/web3";
import { getAllCourses } from "@content/courses/fetcher";
import { useRouter } from "next/router";
import Link from "next/link";
import { useWeb3 } from "@components/providers";

export default function OwnedCourses({courses}) {

    const router = useRouter();
    const {requireInstall} = useWeb3();
    const {account, network} = useWalletInfo();
    const {ownedCourses} = useOwnedCourses(courses, account.data)


    return (
        <>
            <MarketHeader/>
            <section className="grid grid-cols-1">
                { ownedCourses.isEmpty && 
                    <div>
                        <Message type="warning">
                            <span className="block">
                                You dont&apos;t own any courses
                            </span>
                            <Link href="/marketplace">
                                <a className="font-normal hover:underline">
                                    <i>
                                        Purchase course
                                    </i>
                                </a>    
                            </Link>
                        </Message>
                    </div>
                }
                { account.isEmpty && 
                    <div>
                        <Message type="danger">
                            <span className="block">
                                Please connect to MetaMask
                            </span>
                        </Message>
                    </div>
                }
                 { requireInstall && 
                    <div>
                        <Message type="danger">
                            <span className="block">
                                Please install MetaMask
                            </span>
                        </Message>
                    </div>
                }
                {
                    ownedCourses.data?.map(course => (
                            <OwnedCourseCard
                                key={course.id}
                                course={course}
                            >
                            <Button
                                onClick={() => router.push(`/courses/${course.slug}`)}
                                >
                                Watch the course
                            </Button>
                        </OwnedCourseCard>
                    ))
                }
            </section>
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
