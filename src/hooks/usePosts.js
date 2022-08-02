import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const getSortedPosts = useMemo(() => {
      const sortedPosts = [...posts].sort((a, b) => {

        if (sort === "id") {
          return a[sort] - b[sort]
        } else if (sort) {
          return a[sort].localeCompare(b[sort])
        }
      })
        return sort ? sortedPosts : posts;
    }, [sort, posts])
    return getSortedPosts;
};

export const usePosts = (posts, sort, filter) => {
    const getSortedPosts = useSortedPosts(posts, sort);
    const filteredSortedPosts = useMemo(() => {
        return getSortedPosts.filter((post) => {
            return post.title.toLowerCase().includes(filter) || post.description.toLowerCase().includes(filter)
        })
    }, [getSortedPosts, filter])
    return filteredSortedPosts;
}