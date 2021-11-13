
/**


  2  4  3     Array olacak [2, 4, 3]
  5  6  4     Array olacak [5, 6, 4]
+----------
  7  0  8     Array olacak [7, 0, 8] return    

2 + 5 -> 7
4 + 6 -> 0 (elde var 1)
3 + 4 + elde -> 8


*/
export function addTwoReversedNumbers(list1: number[], list2: number[]): number[] {

  const resultLength = list1.length - list2.length;

  if (resultLength > 0) {
    for (let i = 0; i < resultLength; i++) {
      list2.push(0);
    }
  }
  if (resultLength < 0) {
    for (let i = 0; i < resultLength; i++) {
      list1.push(0);
    }
  }

  let resultList = [];

  let elde = 0;

  for (let i = 0; i < list1.length; i++) {

    let sum = list1[i] + list2[i] + elde;
    elde = 0;
    if (sum >= 10) {
      const mod = sum % 10;
      const bolum = (sum - mod) / 10;
      elde = bolum;
      resultList.push(mod);
    } else {
      resultList.push(sum);
    }

  }

  if (elde > 0) resultList.push(elde);

  return resultList;
}

/**

Example 1:

Input: x = 123
Output: 321


Example 2:

Input: x = -123
Output: -321


Example 3:

Input: x = 120
Output: 21


Example 4:

Input: x = 0
Output: 0


 */
export function reverseInteger(i: number): number {
  let value = i >= 0 ? 1 : -1;
  let result = '';
  i.toString().split('').reverse().map((e) => result+=e);
  return parseInt(result) * value;
}