import { useEffect } from "react"
import useSWR from "swr"

// Keccak256
const adminAddresses = {
    "0x3a6bb78bd1ebc1f72756683c26d3a3eabd96f59a117525655b476f8e4885f587": true,
    "0xd6a27e982613e5fe88b10af0aaeb92a435389371c4ccd8e5301d42158a0bde9c": true
}

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()

      const account = accounts[0]

      if(!account){
        throw new Error("Cannot retrieve an account. Please refresh the browser")
      }

      return accounts[0]
    }
  )

    useEffect(() => {
        const mutator = accounts => mutate(accounts[0] ?? null)
        provider?.on("accountsChanged", mutator);
        return () => {
          provider?.removeListener("accountsChanged", mutator);
        }

    }, [provider])

    return { 
          data,
          isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
          mutate, 
          ...rest
    }
}