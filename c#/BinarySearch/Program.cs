using System;
using System.Collections.Generic;

namespace BinarySearch
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[]{1,2,3};
            Console.WriteLine(BinarySearch(arr, 5));
        }

        public static int? BinarySearch(int[] arr, int target)
        {
            int low = 0;
            int hiegh = arr.Length - 1;
            while(low <= hiegh){
                int mid = (low + hiegh) / 2;
                int guess = arr[mid];
                if(guess == target){
                    return mid;
                }

                if(guess > target){
                    hiegh = mid - 1;
                }else {
                    low = mid + 1;
                }
            }
            return null;
        }
    }
}
