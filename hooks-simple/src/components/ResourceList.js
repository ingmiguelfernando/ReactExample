import React from "react";
import useResources from './useResources'

const ResourceList = ({ resource }) => {
  //   useEffect(() => {
  //     (async (resource) => {
  //         const response = await axios.get(
  //           `https://jsonplaceholder.typicode.com/${resource}`
  //         );
  //         setResources(response.data);
  //       })(resource)
  //   }, [resource]);

  const resources = useResources(resource)

  return (
    <ul>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
