import ClientDetail from "./ClientDetail";

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <ClientDetail clientId={resolvedParams.id} />;
}
