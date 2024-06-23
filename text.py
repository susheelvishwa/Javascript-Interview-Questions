n, m = input().split()
n = int(n)
m = int(m)
arr = [int(x) for x in input().split()]


def check(arr, h):
    count = 0
    for x in arr:
        if x > h:
            count += x - h
    return count >= m


start = 0
end = 1000000000
ans = 0

while start <= end:
    mid = (start + end) // 2
    if check(arr, mid):
        ans = mid
        start = mid + 1
    else:
        end = mid - 1

print(ans)
