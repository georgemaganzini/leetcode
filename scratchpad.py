import math

def add_patch():
    math.log100 = lambda x: math.log(x, 100)

# Example case.
add_patch()
print(math.log100(10))