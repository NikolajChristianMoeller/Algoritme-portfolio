# Quicksort (Hoare partition scheme)

Quick sort bruger divide and conquer strategien til at sortere et array.
Man vælger et `pivot` element og opdeler arrayet i to dele, sådan at alle elementer mindre end `pivot` er til venstre og alle elementer større er til højre.
Dette gentages rekursivt og til sidst er arrayet sorteret.

Jeg har brugt `Hoare partition scheme`_(opkaldt efter Tony Hoare som opfandt quicksort)_ til at opdele arrayet i to dele.

[Wikipedia](https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme)

## Pseudokode

```python
    # recursively sorts arr in place
    quicksort(arr, low, high):
        if low < high:

            pivot = partition(arr, low, high) # initial pivot

            quicksort(arr, low, pivot) # sort left side

            quicksort(arr, pivot + 1, high) # sort right side

    # chooses a pivot
    # moves all elements smaller to the left
    # moves all larger to the right
    # returns pivot
    partition(arr, low, high):
        pivot = arr[low] # we choose the first element as our pivot

        while true:

            while arr[low] < pivot: low++

            while arr[high] > pivot: high--

            if low >= high return high # if indices crossed return

            # if we reach this part of the loop we know that
            # arr[low] >= pivot && arr[high] <= pivot
            # so we swap them
            swap(arr[low], arr[high])
```

## Tidskompleksitet

- **Best case**: `O(n log n)`  
  Hvis vi vælger en god pivot, sådan at vi deler arrayet i to lige store dele hver gang, så vil vi have en tidskompleksitet på `O(n log n)`, da vi vil have `log n` rekursive kald fordi vi halverer mængden hver gang og `n` operationer for hvert kald.

- **Worst case**: `O(n^2)`  
  Hvis vi vælger en dårlig pivot, så vi deler arrayet i to dele hvor den ene del er tom, så vil vi have en tidskompleksitet på `O(n^2)`, da vi vil have `n` rekursive kald og `n` operationer for hvert kald. Da vi vælger første element som pivot, vil dette ske hvis arrayet allerede er sorteret.

## Andre ressourcer

https://www.youtube.com/watch?v=pJgKYn0lcno&ab_channel=TuringAwardeeClips

https://www.youtube.com/watch?v=B85z-x66KT4&ab_channel=MarcNathanielValeros