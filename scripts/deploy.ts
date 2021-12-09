import { 
  Contract, 
  ContractFactory 
} from "ethers"
import { ethers } from "hardhat"

const main = async(): Promise<any> => {
  const EmpireToken: ContractFactory = await ethers.getContractFactory("EmpireToken")
  const empireToken: Contract = await EmpireToken.deploy()

  await empireToken.deployed()
  console.log(`EmpireToken deployed to: ${empireToken.address}`)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})
