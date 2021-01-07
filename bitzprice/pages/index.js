import Layout from '../components/Layout';
import Prices from '../components/Prices';
import Fetch from 'isomorphic-unfetch';
const Index = ({ bpi }) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrices</h1>
      <Prices bpi={bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi,
  };
};
export default Index;
