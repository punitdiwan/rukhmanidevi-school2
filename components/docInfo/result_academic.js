"use client"; // if using app router and client component

import React, { useEffect, useState } from "react";

const Result_Academic= () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/result_and_academics?fields=*.*.*`);
        const data = await res.json();
        setDocuments(data.data);
      } catch (err) {
        console.error("Failed to fetch documents", err);
      }
    };
    fetchDocs();
  }, []);

  return (
    <div className="col-sm-12">
      <h2><strong>C: RESULT AND ACADEMICS:</strong></h2>

      <div style={{ overflowX: "auto" }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>DOCUMENTS/INFORMATION</th>
              <th>UPLOAD DOCUMENTS</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => {
              const fullUrl = doc.upload_documents?.data?.full_url.replace("http://", "https://");
              return (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.documentsinformation}</td>
                  <td>
                    <a href={fullUrl} target="_blank" rel="noopener noreferrer">
                      {"View"}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result_Academic;
