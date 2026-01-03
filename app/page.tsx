import HomeContent from "./homecontent";

// export async function generateMetadata({ params }) {
export async function generateMetadata({}) {
  return {
    // title: `Blog - ${params.slug}`,
    title: `Home - GlobalSpace`,
    description: `Shop on GlobalSpace`,
  };
}


export default function Home() {
  return (
    <div>
      <HomeContent />
    </div>
  );
}
