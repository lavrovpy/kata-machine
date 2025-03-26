export default function bubble_sort(arr: number[]): void {
  if(arr.length === 0) return;

  for(let i = 0; i < arr.length; ++i){
      for(let j = 0; j < arr.length - i - 1; ++j){
          if(arr[j] > arr[j + 1]){
              const arr_j_val = arr[j];
              const arr_j_plus_one_val = arr[j + 1];

              arr[j] = arr_j_plus_one_val;
              arr[j + 1] = arr_j_val;
            }
        }
    }
}
