export const fetchProperties = async () => {
    const response = await fetch('http://localhost:3001/properties');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); 
    return data;
  };