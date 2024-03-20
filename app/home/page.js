import { Layout } from "@/components/client-comp";

export default function Home() {
  return (
    <Layout>
      <Layout.Slot name="banner">Hi my name is John</Layout.Slot>
      <Layout.Slot name="main">I am a software developer</Layout.Slot>
    </Layout>
  );
}
