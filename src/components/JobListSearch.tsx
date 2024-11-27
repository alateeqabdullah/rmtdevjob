import { useJobItemsContext } from "../lib/hooks";
import JobList from "./JobList";

export default function JobListSearch() {
  const { jobItemsSortedAndSliced, isLoading } = useJobItemsContext();

  return <JobList isLoading={isLoading} jobItems={jobItemsSortedAndSliced} />;
}
