import * as React from 'react';
import { useConnectedMetaMask, useMetaMask } from 'metamask-react';
import Web3Client from '../../web3/Web3Client';
import Container from '../reusable/Container';
import Heading from '../reusable/Heading';

const Balance = () => {
  const { account, ethereum } = useConnectedMetaMask();
  const [balance, setBalance] = React.useState(0);

  React.useEffect(() => {
    const client = new Web3Client(account, ethereum);
    client.balanceOf(account).then((balance) => {
      setBalance(balance);
    });
  });

  return (
    <Container.Container>
      <Heading.H2>Your current balance: {balance}</Heading.H2>
    </Container.Container>
  );
};

export default Balance;
