import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const MoviesComponent = () => {
  // Define a query function
  const fetchUserData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data;
  };

  // Use the useQuery hook to fetch data
  const { data, isLoading, isError } = useQuery('userData', fetchUserData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <List>
        {data['products'].map((value:any) => (
            <ListItem>
                <ListItemText>
                    <p>Name: {value.title}</p>
                </ListItemText>
            </ListItem>
        ))}
        </List>
    </div>
  );
};

export default MoviesComponent;