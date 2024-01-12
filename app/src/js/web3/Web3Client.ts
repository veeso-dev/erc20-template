import Web3 from 'web3';

import { ABI, CONTRACT_ADDRESS } from './contracts/MyToken';

export default class Web3Client {
  private address: string;
  private web3: Web3;

  constructor(address: string, ethereum: any) {
    this.address = address;
    this.web3 = new Web3(ethereum);
  }

  async transferOwnership(newAddress: string) {
    const contract = this.getContract();
    return contract.methods
      .transferOwnership(newAddress)
      .send({ from: this.address });
  }

  async renounceOwnership() {
    const contract = this.getContract();
    return contract.methods.renounceOwnership().send({ from: this.address });
  }

  async transfer(recipient: string, amount: number) {
    const contract = this.getContract();
    return contract.methods
      .transfer(recipient, amount)
      .send({ from: this.address });
  }

  async balanceOf(address: string): Promise<number> {
    const contract = this.getContract();
    return contract.methods.balanceOf(address).call();
  }

  private getContract() {
    return new this.web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  }
}
