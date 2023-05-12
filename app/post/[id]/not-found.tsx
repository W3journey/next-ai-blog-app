import Sidebar from "@/app/(shared)/Sidebar";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function NotFound() {
  return (
    <main className="px-10 leading-7">
      <div className="gap-10 mb-5 md:flex">
        <div className="pt-32 text-center basis-3/4">
          <h2 className="text-6xl font-bold text-rose-500">Not Found!</h2>
          <p className="text-2xl font-semibold">
            Could not find requested blog post
          </p>
          <div className="flex items-center justify-center pt-20 mb-5">
            <Link
              href={"/"}
              className="flex items-center justify-center p-2 text-xl font-semibold border-2 rounded-lg shadow-md bg-accent-red hover:bg-wh-500 text-wh-10"
            >
              <div className="flex items-center justify-between gap-1 w-fit">
                <ChevronLeftIcon className="w-6" />
                <span>Back to home</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
