import {ActiveLink} from "@components/ui/comon"
import React from "react"

export default function Breadcrumb({items, isAdmin}){
    return(
        <nav aria-label="breadcrumb">
            <ol className="flex leading-none text-gray-600 justify-end	 divide-x ">
                {
                    items.map((item, i) => (
                        <React.Fragment key={item.href}>
                             { !item.requireAdmin &&
                                <li  className={`${i == 0 ? 'pr-4' : 'px-4'} hover:text-gray-900`}>
                                <ActiveLink href={item.href}>
                                    <a>{item.value}</a>
                                </ActiveLink>
                                </li>
                            }
                            {   item.requireAdmin && isAdmin && 
                                <li  className={`${i == 0 ? 'pr-4' : 'px-4'} hover:text-gray-900`}>
                                    <ActiveLink href={item.href}>
                                        <a>{item.value}</a>
                                    </ActiveLink>
                                </li>
                            }
                        </React.Fragment>
                    ))
                }
            </ol>
        </nav>
    )
}