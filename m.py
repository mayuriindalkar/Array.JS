# a=[1,2,3,8,9,8]
# max=a[0]
# i=-1
# b=[]
# while i<len(a):
#     if a[i]>max:
#         max=a[i]
#         b.append(max)
#     i+=1
# print(b)


# l=[9,7,8,6,7]
# max=0
# a=0
# b=[]
# i=len(l)-1
# while i>=0:
#     if l[i]>max:
#         max=l[i]
#         a=i
#         b.insert(0,a)
#         b.append(a)
#     i-=1
# b.reverse()
# print(b)

# houses=int(input("Number Of House : "))
# rat=int(input("Numbers Of Rat : "))
# units=int(input("Enter a Unit/Rat : "))
# l=[]
# for i in range(houses):
#     l.append(int(input("Enter The Numbers : ")))
# print(l)
# print("Total Rats units are", rat*units)
# def myfun(houses,rat,units,l):
#     if houses==0:
#         return-1
#     sum=0
#     count=0
#     for j in range(len(l)):
#         sum+=l[j]
#         count+=1
#         if sum>=rat*units:
#             print("Total houses units are",sum)
#             return count
#         break
#     if sum>=rat*units:
#         print("Total houses units are",sum)
#         print("not sufficient")
# print(myfun(houses,rat,units,l))
 

# def calculate(r,unit,arr,n):
#     if n==0:
#         return-1
#     totalFoodRequired=r*unit
#     foodTillNow=0
#     house=0
#     for house in range(n):
#         foodTillNow+=arr[house]
#         if foodTillNow >= totalFoodRequired:
#             break
#     if totalFoodRequired > foodTillNow:
#         return 0
#     return house+1
# r = int(input("Enter num : "))
# unit = int(input("enter num : "))
# n = int(input("enter num : "))
# arr = list(map(int,input("enter the unit").split()))
# print(calculate(r,unit,arr,n))

