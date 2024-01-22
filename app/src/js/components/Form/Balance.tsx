import * as React from 'react';
import { useConnectedMetaMask, useMetaMask } from 'metamask-react';
import Web3Client from '../../web3/Web3Client';
import Container from '../reusable/Container';
import Heading from '../reusable/Heading';
import { ChainId } from '../MetamaskConnect';

const Balance = () => {
  const { account, ethereum, chainId } = useConnectedMetaMask();
  const [balance, setBalance] = React.useState<string>('0');
  const [decimals, setDecimals] = React.useState(0);

  React.useEffect(() => {
    const client = new Web3Client(account, ethereum, chainId as ChainId);
    client
      .balanceOf(account)
      .then((accountBalance) => {
        console.log('balance', accountBalance);
        // put comma in `decimals` position
        const balanceStr = accountBalance.toString();
        const balanceArr = balanceStr.split('');
        balanceArr.splice(balanceArr.length - decimals, 0, ',');
        console.log(balanceArr);
        setBalance(balanceArr.join(''));
      })
      .catch((e) => {
        console.log('failed to get balance', e);
      });
  }, [decimals]);

  React.useEffect(() => {
    const client = new Web3Client(account, ethereum, chainId as ChainId);
    client
      .decimals()
      .then((decs) => {
        console.log('decimals', decs);
        setDecimals(Number(decs));
      })
      .catch((e) => {
        console.log('failed to get balance', e);
      });
  }, []);

  return (
    <Container.Container>
      <Heading.H2>Your current balance: {balance}</Heading.H2>
    </Container.Container>
  );
};

export default Balance;
