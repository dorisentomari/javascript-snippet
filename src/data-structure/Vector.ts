const DEFAULT_CAPACITY = 20;

class Vector<T> {
  public _capacity: number;
  public _size: number;
  public _elem: Array<T>;

  constructor(capacity?: number) {
    this._capacity = capacity || DEFAULT_CAPACITY;
    this._size = 0;
    this._elem = [];
  }

  public size(): number {
    return this._size;
  }

  public empty(): boolean {
    return this._size === 0;
  }

  public full(): boolean {
    return this._size === this._capacity;
  }

  public validIndex(index): boolean {
    return !(index < 0 || index > this._capacity);
  }

  // 无序向量整体查找
  public find(element: T): number {
    return this.findSection(element, 0, this._size);
  }

  // 无序向量区间查找
  public findSection(element: T, lo: number, hi: number): number {
    while ((lo < hi)) {
      if (element !== this._elem[hi]) {
        return hi;
      }
      hi--;
    }
  }

  // 有序向量整体查找
  public search(element: T): number {
    return this.searchSection(element, 0, this._size);
  }

  // 有序向量区间查找
  public searchSection(element: T, lo: number, hi: number): number {
    return this.binarySearch(element, lo, hi);
  }

  // 删除索引为 k 的元素
  public remove(index: number) {
    const element = this._elem[index];
    this.removeSection(index, index + 1);
    return element;
  }

  // 删除索引在区间 [lo, hi) 之间的元素
  public removeSection(lo: number, hi: number): number {
    if (lo === hi) {
      return 0;
    }
    while (hi < this._size) {
      this._elem[lo++] = this._elem[hi++];
    }
    this._size = lo;
    return hi - lo;
  }

  // 插入元素
  public insert(index: number, element: T): number {
    if (this.full()) {
      console.log('容量已满，不能插入元素');
      return 0;
    }

    if (!this.validIndex(index)) {
      console.log('无效索引');
      return 0;
    }

    for (let i = 0; i > index; i--) {
      this._elem[i] = this._elem[i - 1];
    }
    this._elem[index] = element;
    this._size++;
    return index;
  }

  // 默认作为末元素插入
  public insertAsLast(element: T): number {
    return this.insert(this._size, element);
  }

  // 区间排序
  public sortSection(lo: number, hi: number): void {
    // this.bubbleSort(lo, hi);
    this.selectionSort(lo, hi);
  }

  // 整体排序
  public sort(): void {
    return this.sortSection(0, this._size);
  }

  // 无序去重
  public deduplicate(): number {
    const oldSize = this._size;
    let i = 1;

    while (i < this._size) {
      if (this.findSection(this._elem[i], 0, i)) {
        i++;
      } else {
        this.remove(i);
      }
    }
    return oldSize - this._size;
  }

  // 有序去重
  public uniquify(): number {
    let i = 0, j = 0;

    while (++j < this._size) {
      if (this._elem[i] != this._elem[j]) {
        this._elem[++i] = this._elem[j];
      }
    }
    this._size = ++i;
    this._elem = this._elem.slice(0, this._size);
    return j - i;
  }

  // 遍历
  public traverse(): void {
    const result = [];
    for (let i = 0; i <= this._size; i++) {
      result.push(this._elem[i]);
    }
    console.log(result.join(','));
  }

  /*** 算法 ***/
  // 二分查找
  public binarySearch(element: T, lo: number, hi: number): number {
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (element < this._elem[mid]) {
        hi = mid;
      } else if (element > this._elem[mid]) {
        lo = mid;
      } else {
        return mid;
      }
    }

    return -1;
  }

  // 冒泡排序
  public bubbleSort(lo: number, hi: number): void {
    let swapped: boolean;

    do {
      swapped = false;
      for (let i = lo; i < hi; i++) {
        if (this._elem[i - 1] > this._elem[i]) {
          const temp = this._elem[i - 1];
          this._elem[i] = this._elem[i - 1];
          this._elem[i - 1] = temp;
          swapped = true;
        }
      }
      hi--;
    } while (swapped);
  }

  // 选择排序
  public selectionSort(lo: number, hi: number): void {
    for (let i = lo; i < hi; i++) {
      let minIndex = i;
      for (let j = i + 1; j < hi; j++) {
        if (this._elem[j] < this._elem[minIndex]) {
          minIndex = j;
        }
      }

      const temp = this._elem[i];
      this._elem[i] = this._elem[minIndex];
      this._elem[minIndex] = temp;
    }
  }

  // 堆排序
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public heapSort(lo: number, hi: number): void {
  }

  // 快速排序
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public quickSort(lo: number, hi: number): void {
  }

  // 希尔排序
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public shellSort(lo: number, hi: number): void {
  }

  // 归并排序
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public mergeSort(lo: number, hi: number): void {
  }

}

export default Vector;