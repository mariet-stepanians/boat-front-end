import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import '../assets/css/BoatsList.css';

const GET_BOATS = gql`
  query GetBoats($page: Int, $count: Int) {
    boats(page: $page, count: $count) {
      data {
        id
        name
        condition
        price
        image
      }
      paginatorInfo {
        currentPage
        lastPage
        total
        perPage
      }
    }
  }
`;

type Boat = {
    id: string;
    name: string;
    condition: string;
    price: number;
    image: string;
  };

const BoatsList = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_BOATS, {
    variables: { page, count: 5 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Boat Catalog</h2>
      <div className="boats-container">
        {data.boats.data.map((boat: Boat) => (
          <Link to={`/boat/${boat.id}`} key={boat.id} className="boat-item">
            <img src={boat.image} alt={boat.name} className="boat-image" />
            <div className="boat-info">
              <h3>{boat.name}</h3>
              <p>Condition: {boat.condition}</p>
              <p>Price: ${boat.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {data.boats.paginatorInfo.lastPage}</span>
        <button onClick={() => setPage((prev) => (prev < data.boats.paginatorInfo.lastPage ? prev + 1 : prev))} disabled={page === data.boats.paginatorInfo.lastPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BoatsList;
