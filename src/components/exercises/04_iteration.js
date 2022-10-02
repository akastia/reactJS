import React from "react";

const Demo = props => {
  const list = props.modules.map((subject, index) => {
  return (
    <tr key={index}>
      <td>{subject.name}</td>
      <td>{subject.noLectures}</td>
      <td>{subject.noPracticals}</td> 
    </tr>
     );
    });
  return (
    <>
      <h2>{props.course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  );
};

export default Demo
