import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";

export default function HomePage() {
    return (
        <div className="p-5 lg:p-0">
            <MovieVideo/>
            <h1 className="text-3xl font-bold mt-[-170px]">Recently Added</h1> {/* Adjust mt (margin-top) value as needed */}
            <RecentlyAdded/>
        </div>
    );
}
