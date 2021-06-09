import React, { useEffect } from 'react';

const IndexPage = () => {
  useEffect(() => {
    fetch('./api/test-puppeteer', {
      method: 'GET'
    }).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <main>
      <h1>Index Page</h1>
    </main>
  );
};

export default IndexPage;
