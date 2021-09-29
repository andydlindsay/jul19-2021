import { useEffect } from 'react';
import {useParams, useHistory, useLocation} from 'react-router-dom';

const Product = () => {
  const params = useParams();
  console.log(params);

  const history = useHistory();
  console.log(history);

  useEffect(() => {
    setTimeout(() => {
      // history.push(`/space`);
      window.location = 'https://www.google.com'
    }, 3000);
  }, []);

  // useEffect(() => {
  //   axios.get(`/api/products/${params.productId}`)
  //     .then((data) => {
  //       setLocalData(data.data);
  //     });
  // }, [params.productId]);

  return (
    <div>
      <h2>Just one product #{params.productId}!</h2>
    </div>
  );
};

export default Product;
