export type tOrder = "asc" | "desc";

export type queryParams = {
  sortby?: string;
  order?: tOrder;
  page?: string;
  limit?: string;
  collection?: string;
  category?: string;
  search?: string;
};

export type tSortBy = {
  title: string;
  sortType: string;
  order: tOrder;
};
