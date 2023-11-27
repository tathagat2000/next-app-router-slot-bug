import dynamic from 'next/dynamic'

const ComponentClient = dynamic(() => import('../components/client-comp'), { ssr: false })
function getThings() {
  let neverUndefined;
  let filtered;

  if (Date.now() > 0) {
    neverUndefined = [1,2];
    filtered = neverUndefined.filter(Boolean);
  } else {
    neverUndefined = [3,4];
    filtered = neverUndefined.filter(Boolean);
  }

  return {
    neverUndefined,
    filtered
  };
}

export default function Home() {
  const abc = getThings();
  return (
      <>
        neverUndefined value: `${JSON.stringify(abc.neverUndefined)}`
        <ComponentClient />
      </>
  )
}
