import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import '../assets/css/BoatDetail.css';

const GET_BOAT = gql`
query GetBoat($id: ID!) {
  boat(id: $id) {
    id
    name
    condition
    price
    image
    user {
        first_name,
        last_name
    }
  }
}
`;

const BoatDetail = () => {
  let { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_BOAT, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="boat-detail-container">
      <div className="boat-card">
        <img src={data.boat.image} alt={data.boat.name} className="boat-image" />
        <div className="boat-info">
          <h2>{data.boat.name}</h2>
          <p>Seller: {data.boat.user.first_name + " " + data.boat.user.last_name}</p>
          <p>Condition: {data.boat.condition}</p>
          <p>Price: ${data.boat.price}</p>
          <button className="buy-button" onClick={() => alert("Buying not implemented")}>Buy Boat</button>
        </div>
      </div>
    </div>
  );
};

export default BoatDetail;
