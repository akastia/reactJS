import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  
    const modules = [
      {
        Name: "Devops",
        NoLectures: 2,
        NoPracticals: 2
      },
      {
        Name: "Enterprise Web Dev",
        NoLectures: 3,
        NoPracticals: 2
      }
    ];
  return (
    <div>
      <h1>HDip Computer Sciences - Modules Table</h1>


      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{modules[0].Name}</td>
            <td>{modules[0].NoLectures}</td>
            <td>{modules[0].NoPracticals}</td>
          </tr>
        
          <tr>
            
            <td>{modules[1].Name}</td>
            <td>{modules[1].NoLectures}</td>
            <td>{modules[1].NoPracticals}</td>
      
          </tr>
        </tbody>
    </table>
  </div>
  );
};

export default Demo;
