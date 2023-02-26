//PaginationHelper
//https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection ? this.collection.length : 0;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    if (pageIndex < 0 || this.pageCount() <= pageIndex) {
      return -1;
    }
    return Math.min(
      this.itemsPerPage,
      this.itemCount() - pageIndex * this.itemsPerPage
    );
  }
  pageIndex(itemIndex) {
    if (itemIndex < 0 || this.itemCount() <= itemIndex) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

const empty = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8], 8);

console.log(empty.pageItemCount(0));
