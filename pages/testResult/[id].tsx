import { useRouter } from 'next/router';
import React from 'react';

export default function TestResult() {
  const route = useRouter();
  console.log('route', route);
  return <div>당신은 {route.query.id}</div>;
}
// export async function getStaticPaths() {
//   // const postData = getPostData(params.id);
//   return {
//     paths: [{ params: { id: 1 } }],
//   };
// }
