import PlaceList from "../components/PlaceList";
import Link from "next/link";

export default function PlacesPage() {
  return (
    <>
      <PlaceList />
      <Link href="/">Back to Home</Link>
    </>
  );
}
