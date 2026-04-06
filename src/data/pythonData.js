export const pythonCourses = {
  basics: {
    title: "Python Basics",
    icon: "🐍",
    color: "#3b82f6",
    subtopics: [
      {
        id: 1,
        title: "Introduction & Setup",
        content: `## Introduction to Python

Python is a **high-level, interpreted, general-purpose** programming language created by **Guido van Rossum** in 1991. It emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines than other languages.

### Why Python?
| Feature | Description |
|---------|-------------|
| Simple Syntax | Reads almost like English |
| Interpreted | Runs line by line, no compilation needed |
| Dynamically Typed | No need to declare variable types |
| Cross-Platform | Runs on Windows, Mac, Linux |
| Huge Ecosystem | 300,000+ packages on PyPI |
| Versatile | Web, Data Science, AI, Automation, Testing |

### Python Applications
- **Test Automation** — Selenium, Pytest, Robot Framework
- **Web Development** — Django, Flask, FastAPI
- **Data Science** — Pandas, NumPy, Matplotlib
- **Machine Learning** — TensorFlow, PyTorch, scikit-learn
- **Scripting & DevOps** — Automation, CI/CD pipelines
- **API Testing** — Requests, HTTPx

### Installation
1. Download from **python.org** → Download Python 3.x
2. Check "Add Python to PATH" during installation
3. Verify:
\`\`\`bash
python --version
# Python 3.12.x

pip --version
# pip 24.x
\`\`\`

### First Python Program
\`\`\`python
# This is a comment
print("Hello, World!")

# Print multiple values
name = "Sakshi"
print("Hello,", name)
print(f"Welcome to Python, {name}!")
\`\`\`
**Output:**
\`\`\`
Hello, World!
Hello, Sakshi
Welcome to Python, Sakshi!
\`\`\`

### Python IDEs & Tools
| Tool | Best For |
|------|----------|
| VS Code | General development |
| PyCharm | Professional Python |
| Jupyter Notebook | Data science |
| IDLE | Beginners |
| Thonny | Beginners |

### Python 2 vs Python 3
| Feature | Python 2 | Python 3 |
|---------|----------|----------|
| print | print "hello" | print("hello") |
| Division | 7/2 = 3 | 7/2 = 3.5 |
| Unicode | ASCII by default | Unicode by default |
| Support | EOL Jan 2020 | Active |

> ✅ Always use Python 3. Python 2 is end-of-life.`,
        exercises: [
          { title: "Install Python and run Hello World", description: "Install Python 3, open terminal and run: python -c \"print('Hello World')\"" },
          { title: "Print your name and age", description: "Create a script that prints your name, age and city using f-strings." }
        ]
      },
      {
        id: 2,
        title: "Variables & Data Types",
        content: `## Variables & Data Types

In Python, variables are **dynamically typed** — you don't declare types. The type is inferred at runtime.

### Variable Rules
- Must start with a letter or underscore (\`_\`)
- Cannot start with a digit
- Case-sensitive (\`name\` ≠ \`Name\`)
- Cannot use reserved keywords

\`\`\`python
# Valid variables
name = "Alice"
_age = 25
total_score = 98.5
isActive = True

# Multiple assignment
x = y = z = 0
a, b, c = 1, 2, 3
print(a, b, c)  # 1 2 3

# Swap variables
x, y = 10, 20
x, y = y, x
print(x, y)  # 20 10
\`\`\`

### Core Data Types
| Type | Example | Description |
|------|---------|-------------|
| int | \`42\`, \`-5\` | Whole numbers |
| float | \`3.14\`, \`-0.5\` | Decimal numbers |
| str | \`"hello"\` | Text |
| bool | \`True\`, \`False\` | Boolean |
| NoneType | \`None\` | Absence of value |

### Checking Types
\`\`\`python
x = 10
print(type(x))      # <class 'int'>
print(type(3.14))   # <class 'float'>
print(type("hi"))   # <class 'str'>
print(type(True))   # <class 'bool'>
print(type(None))   # <class 'NoneType'>

# isinstance() check
print(isinstance(x, int))   # True
print(isinstance(x, float)) # False
\`\`\`

### Type Conversion (Casting)
\`\`\`python
# int to float
x = int(3.9)    # 3 (truncates, doesn't round)

# string to int
n = int("42")   # 42

# int to string
s = str(100)    # "100"

# float to int
f = float("3.14")  # 3.14

# bool conversions
print(bool(0))    # False
print(bool(1))    # True
print(bool(""))   # False
print(bool("hi")) # True
print(bool(None)) # False
\`\`\`

### Collection Types
| Type | Ordered | Mutable | Duplicates | Example |
|------|---------|---------|------------|---------|
| list | ✅ | ✅ | ✅ | \`[1, 2, 3]\` |
| tuple | ✅ | ❌ | ✅ | \`(1, 2, 3)\` |
| set | ❌ | ✅ | ❌ | \`{1, 2, 3}\` |
| dict | ✅ (3.7+) | ✅ | keys: ❌ | \`{"a": 1}\` |

\`\`\`python
# list
fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # apple
fruits.append("mango")

# tuple (immutable)
coords = (10.5, 20.3)
print(coords[0])   # 10.5

# set (unique values)
nums = {1, 2, 2, 3, 3}
print(nums)        # {1, 2, 3}

# dict
person = {"name": "Alice", "age": 25}
print(person["name"])  # Alice
person["city"] = "Mumbai"
\`\`\``,
        exercises: [
          { title: "Create variables of each type", description: "Create int, float, str, bool, list, and dict variables. Print their types using type()." },
          { title: "Type conversion", description: "Ask user for age as input (which returns string), convert to int and calculate year of birth." }
        ]
      },
      {
        id: 3,
        title: "Operators",
        content: `## Operators in Python

### Arithmetic Operators
\`\`\`python
a, b = 10, 3

print(a + b)   # 13  — Addition
print(a - b)   # 7   — Subtraction
print(a * b)   # 30  — Multiplication
print(a / b)   # 3.3333 — Division (always float)
print(a // b)  # 3   — Floor division
print(a % b)   # 1   — Modulus (remainder)
print(a ** b)  # 1000 — Exponent (10^3)
\`\`\`

### Comparison Operators (return bool)
\`\`\`python
x, y = 5, 10

print(x == y)  # False — Equal to
print(x != y)  # True  — Not equal
print(x < y)   # True  — Less than
print(x > y)   # False — Greater than
print(x <= 5)  # True  — Less than or equal
print(x >= 10) # False — Greater than or equal
\`\`\`

### Logical Operators
\`\`\`python
a, b = True, False

print(a and b)   # False — Both must be True
print(a or b)    # True  — At least one True
print(not a)     # False — Inverts

# Practical example
age = 20
has_id = True
if age >= 18 and has_id:
    print("Entry allowed")
\`\`\`

### Assignment Operators
\`\`\`python
x = 10
x += 5   # x = 15
x -= 3   # x = 12
x *= 2   # x = 24
x /= 4   # x = 6.0
x //= 2  # x = 3.0
x **= 3  # x = 27.0
x %= 5   # x = 2.0
\`\`\`

### Identity & Membership Operators
\`\`\`python
# Identity — checks if same object in memory
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a is b)   # True  — same object
print(a is c)   # False — same value, different object
print(a == c)   # True  — same value

# Membership — checks if value exists in sequence
fruits = ["apple", "banana", "mango"]
print("apple" in fruits)     # True
print("grape" not in fruits) # True

text = "Hello World"
print("World" in text)       # True
\`\`\`

### Bitwise Operators
\`\`\`python
a, b = 12, 10  # 1100, 1010 in binary

print(a & b)   # 8  — AND
print(a | b)   # 14 — OR
print(a ^ b)   # 6  — XOR
print(~a)      # -13 — NOT
print(a << 1)  # 24 — Left shift
print(a >> 1)  # 6  — Right shift
\`\`\`

### Operator Precedence (High → Low)
| Level | Operators |
|-------|-----------|
| 1 (highest) | \`**\` |
| 2 | \`~x\`, \`+x\`, \`-x\` (unary) |
| 3 | \`*\`, \`/\`, \`//\`, \`%\` |
| 4 | \`+\`, \`-\` |
| 5 | \`<<\`, \`>>\` |
| 6 | \`&\` |
| 7 | \`^\` |
| 8 | \`|\` |
| 9 | \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\` |
| 10 | \`not\` |
| 11 | \`and\` |
| 12 (lowest) | \`or\` |`,
        exercises: [
          { title: "Calculator", description: "Write a function that takes two numbers and an operator (+,-,*,/) and returns the result." },
          { title: "Odd/Even checker", description: "Use modulus operator to check if a number is odd or even." }
        ]
      },
      {
        id: 4,
        title: "Input & Output",
        content: `## Input & Output in Python

### print() Function
\`\`\`python
# Basic print
print("Hello, World!")

# Multiple values
print("Name:", "Alice", "Age:", 25)
# Name: Alice Age: 25

# Custom separator
print("A", "B", "C", sep="-")
# A-B-C

# Custom end (default is newline)
print("Hello", end=" ")
print("World")
# Hello World

# Print list
nums = [1, 2, 3]
print(*nums)         # 1 2 3
print(*nums, sep=", ")  # 1, 2, 3
\`\`\`

### f-Strings (Recommended — Python 3.6+)
\`\`\`python
name = "Alice"
age = 25
score = 98.567

# Basic f-string
print(f"Name: {name}, Age: {age}")

# Expressions inside f-strings
print(f"Double age: {age * 2}")

# Format numbers
print(f"Score: {score:.2f}")    # 98.57
print(f"Large: {1000000:,}")    # 1,000,000
print(f"Padded: {score:10.2f}") # "     98.57"

# Conditional in f-string
status = "adult" if age >= 18 else "minor"
print(f"{name} is an {status}")
\`\`\`

### format() Method
\`\`\`python
# Positional
print("Hello, {}! You are {} years old.".format("Alice", 25))

# Named
print("{name} scored {score:.1f}%".format(name="Bob", score=92.5))

# Index based
print("{0} + {1} = {2}".format(3, 4, 7))
\`\`\`

### input() Function
\`\`\`python
# input() always returns a STRING
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Convert input to int
age = int(input("Enter your age: "))
print(f"In 5 years you'll be {age + 5}")

# Convert input to float
price = float(input("Enter price: "))
gst = price * 0.18
print(f"GST: ₹{gst:.2f}")

# Multiple inputs on one line
x, y = map(int, input("Enter two numbers: ").split())
print(f"Sum: {x + y}")
\`\`\`

### Reading Multiple Lines
\`\`\`python
# Read N numbers into a list
n = int(input("How many numbers? "))
numbers = [int(input()) for _ in range(n)]
print("Sum:", sum(numbers))
print("Average:", sum(numbers) / len(numbers))
\`\`\`

### String Formatting (Old Style)
\`\`\`python
# % formatting (older style)
print("Hello, %s! You are %d years old." % ("Alice", 25))
print("Pi = %.4f" % 3.14159)
\`\`\``,
        exercises: [
          { title: "User profile", description: "Take name, age, and city as input. Print a formatted profile card using f-strings." },
          { title: "Simple calculator", description: "Take two numbers from input, print sum, difference, product, and quotient formatted to 2 decimal places." }
        ]
      },
      {
        id: 5,
        title: "Strings",
        content: `## Strings in Python

Strings are **immutable** sequences of characters. Python provides rich built-in string manipulation.

### Creating Strings
\`\`\`python
s1 = 'Single quotes'
s2 = "Double quotes"
s3 = """Multi
line
string"""
s4 = r"Raw string: no \\n escape"
s5 = b"Bytes string"
\`\`\`

### String Indexing & Slicing
\`\`\`python
text = "Python"
#       012345  (positive index)
#      -6-5-4-3-2-1  (negative index)

print(text[0])    # P
print(text[-1])   # n
print(text[2:5])  # tho  (start:end, end exclusive)
print(text[:3])   # Pyt  (from beginning)
print(text[3:])   # hon  (to end)
print(text[::-1]) # nohtyP  (reverse)
print(text[::2])  # Pto  (every 2nd char)
\`\`\`

### Common String Methods
\`\`\`python
s = "  Hello, World!  "

# Case methods
print(s.upper())          # "  HELLO, WORLD!  "
print(s.lower())          # "  hello, world!  "
print(s.title())          # "  Hello, World!  "
print(s.capitalize())     # first char upper
print(s.swapcase())       # swap upper/lower

# Strip whitespace
print(s.strip())          # "Hello, World!"
print(s.lstrip())         # "Hello, World!  "
print(s.rstrip())         # "  Hello, World!"

# Search & Replace
print(s.find("World"))    # 8 (index), -1 if not found
print(s.index("World"))   # 8 (raises error if not found)
print(s.count("l"))       # 3
print(s.replace("World", "Python"))  # "  Hello, Python!  "
print(s.startswith("  He"))  # True
print(s.endswith("!  "))     # True
\`\`\`

### Split & Join
\`\`\`python
# Split
csv = "apple,banana,mango,grape"
fruits = csv.split(",")
print(fruits)  # ['apple', 'banana', 'mango', 'grape']

sentence = "Hello World Python"
words = sentence.split()  # splits on whitespace
print(words)   # ['Hello', 'World', 'Python']

# Splitlines
multiline = "line1\\nline2\\nline3"
print(multiline.splitlines())  # ['line1', 'line2', 'line3']

# Join
words = ["Python", "is", "awesome"]
print(" ".join(words))     # Python is awesome
print("-".join(words))     # Python-is-awesome
print("".join(words))      # Pythonisawesome
\`\`\`

### String Checking Methods
\`\`\`python
print("123".isdigit())      # True
print("hello".isalpha())    # True
print("hello123".isalnum()) # True
print("  ".isspace())       # True
print("Hello".isupper())    # False
print("HELLO".isupper())    # True
print("hello".islower())    # True
\`\`\`

### String Formatting Summary
\`\`\`python
name, score = "Alice", 95.678

# f-string (best — Python 3.6+)
print(f"{name}: {score:.1f}%")    # Alice: 95.7%

# format()
print("{}: {:.1f}%".format(name, score))

# Padding & alignment
print(f"{'Left':<10}|{'Center':^10}|{'Right':>10}")
# Left      |  Center  |     Right
\`\`\``,
        exercises: [
          { title: "Palindrome checker", description: "Write a function that checks if a string is a palindrome (ignoring case and spaces)." },
          { title: "Word count", description: "Count occurrences of each word in a sentence using split(). Print sorted by frequency." }
        ]
      }
    ]
  },
  controlflow: {
    title: "Control Flow",
    icon: "🔀",
    color: "#8b5cf6",
    subtopics: [
      {
        id: 1,
        title: "Conditional Statements",
        content: `## Conditional Statements (if/elif/else)

Python uses **indentation** (4 spaces) to define code blocks — no curly braces.

### if / elif / else
\`\`\`python
age = 20

if age < 13:
    print("Child")
elif age < 18:
    print("Teenager")
elif age < 65:
    print("Adult")
else:
    print("Senior")
# Output: Adult
\`\`\`

### Ternary (One-line) if
\`\`\`python
x = 10
result = "positive" if x > 0 else "non-positive"
print(result)  # positive

# Nested ternary (avoid for readability)
grade = "A" if x >= 90 else "B" if x >= 80 else "C"
\`\`\`

### Truthy & Falsy Values
\`\`\`python
# Falsy values in Python
falsy = [False, 0, 0.0, "", [], {}, set(), None]

for val in falsy:
    if not val:
        print(f"{repr(val)} is falsy")

# Everything else is truthy
truthy = [True, 1, -1, "a", [0], {"k": "v"}]
\`\`\`

### Nested Conditions
\`\`\`python
score = 85
attendance = 75

if score >= 60:
    if attendance >= 75:
        print("PASS — eligible for exam")
    else:
        print("PASS — but attendance shortage")
else:
    print("FAIL")
\`\`\`

### Multiple Conditions
\`\`\`python
x = 15

# and / or / not
if x > 10 and x < 20:
    print("Between 10 and 20")

if x < 5 or x > 10:
    print("Outside 5-10 range")

# in operator with conditions
day = "Saturday"
if day in ("Saturday", "Sunday"):
    print("Weekend!")

# Chained comparisons (Pythonic)
if 10 < x < 20:
    print("x is between 10 and 20")
\`\`\`

### match Statement (Python 3.10+)
\`\`\`python
status_code = 404

match status_code:
    case 200:
        print("OK")
    case 301 | 302:
        print("Redirect")
    case 404:
        print("Not Found")
    case 500:
        print("Server Error")
    case _:
        print("Unknown")
\`\`\``,
        exercises: [
          { title: "Grade calculator", description: "Take a score (0-100) and print grade: A(90+), B(80+), C(70+), D(60+), F(below 60)." },
          { title: "Leap year checker", description: "A year is leap if divisible by 4, except centuries unless divisible by 400. Check any year." }
        ]
      },
      {
        id: 2,
        title: "Loops — for & while",
        content: `## Loops in Python

### for Loop
The \`for\` loop iterates over any **iterable** (list, string, range, dict, etc.).

\`\`\`python
# Loop over list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop over string
for char in "Python":
    print(char, end=" ")  # P y t h o n

# range(start, stop, step)
for i in range(5):       # 0 1 2 3 4
    print(i, end=" ")

for i in range(1, 11):   # 1 to 10
    print(i, end=" ")

for i in range(0, 20, 3): # 0 3 6 9 12 15 18
    print(i, end=" ")

for i in range(10, 0, -1): # 10 9 8 7 ... 1
    print(i, end=" ")
\`\`\`

### enumerate() — Get Index + Value
\`\`\`python
fruits = ["apple", "banana", "cherry"]

for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
# 0: apple
# 1: banana
# 2: cherry

# Start index from 1
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")
\`\`\`

### while Loop
\`\`\`python
# Basic while
count = 0
while count < 5:
    print(count, end=" ")  # 0 1 2 3 4
    count += 1

# while with user input
while True:
    answer = input("Continue? (y/n): ")
    if answer.lower() == 'n':
        break
    print("Continuing...")
\`\`\`

### Nested Loops
\`\`\`python
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i*j:3}", end="")
    print()
#   1  2  3
#   2  4  6
#   3  6  9

# Pattern
n = 5
for i in range(1, n+1):
    print("* " * i)
\`\`\`

### Loop with else
\`\`\`python
# else runs when loop completes without break
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            break
    else:
        print(f"{n} is prime")
\`\`\`

### zip() — Loop Multiple Lists
\`\`\`python
names = ["Alice", "Bob", "Charlie"]
scores = [95, 87, 92]

for name, score in zip(names, scores):
    print(f"{name}: {score}")
\`\`\``,
        exercises: [
          { title: "FizzBuzz", description: "Print 1-100. For multiples of 3 print Fizz, multiples of 5 print Buzz, both print FizzBuzz." },
          { title: "Sum of digits", description: "Write a program to find the sum of digits of a number using a while loop." }
        ]
      },
      {
        id: 3,
        title: "Break, Continue & Pass",
        content: `## Loop Control Statements

### break — Exit Loop Immediately
\`\`\`python
# Find first even number
nums = [1, 3, 5, 8, 11, 14]
for n in nums:
    if n % 2 == 0:
        print(f"First even: {n}")
        break

# Search in list
target = "banana"
fruits = ["apple", "mango", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    if fruit == target:
        print(f"Found '{target}' at index {i}")
        break
else:
    print(f"'{target}' not found")
\`\`\`

### continue — Skip Current Iteration
\`\`\`python
# Skip negative numbers
nums = [1, -2, 3, -4, 5, -6]
total = 0
for n in nums:
    if n < 0:
        continue   # skip to next
    total += n
print("Sum of positives:", total)  # 9

# Print only even numbers
for i in range(1, 11):
    if i % 2 != 0:
        continue
    print(i, end=" ")  # 2 4 6 8 10
\`\`\`

### pass — Placeholder (Do Nothing)
\`\`\`python
# pass is used when syntax requires a statement but no action needed
for i in range(5):
    if i == 3:
        pass   # TODO: handle this case later
    else:
        print(i, end=" ")  # 0 1 2 4

# Empty function placeholder
def my_function():
    pass  # implement later

# Empty class
class MyClass:
    pass
\`\`\`

### Practical Examples
\`\`\`python
# Login system with max attempts
MAX_ATTEMPTS = 3
password = "secret123"

for attempt in range(1, MAX_ATTEMPTS + 1):
    guess = input(f"Attempt {attempt}: Enter password: ")
    if guess == password:
        print("Access granted!")
        break
    elif attempt < MAX_ATTEMPTS:
        print(f"Wrong! {MAX_ATTEMPTS - attempt} attempt(s) left.")
else:
    print("Account locked. Too many failed attempts.")

# Skip invalid data, process rest
data = ["10", "abc", "20", None, "30", "xyz"]
total = 0
errors = 0
for item in data:
    if item is None:
        continue
    try:
        total += int(item)
    except (ValueError, TypeError):
        errors += 1
        continue
print(f"Total: {total}, Errors skipped: {errors}")
\`\`\``,
        exercises: [
          { title: "Find prime numbers", description: "Use break and continue to print all prime numbers between 1 and 50." },
          { title: "Skip vowels", description: "Given a string, print only consonants using continue." }
        ]
      },
      {
        id: 4,
        title: "List & Dict Comprehensions",
        content: `## Comprehensions in Python

Comprehensions provide a concise, Pythonic way to create collections from iterables.

### List Comprehension
\`\`\`python
# Syntax: [expression for item in iterable if condition]

# Basic — squares
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# With condition — only even squares
even_sq = [x**2 for x in range(1, 11) if x % 2 == 0]
print(even_sq)  # [4, 16, 36, 64, 100]

# Transform strings
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print(upper)  # ['HELLO', 'WORLD', 'PYTHON']

# Filter by condition
nums = [1, -2, 3, -4, 5, -6]
positives = [n for n in nums if n > 0]
print(positives)  # [1, 3, 5]
\`\`\`

### vs Traditional Loop
\`\`\`python
# Traditional way
result = []
for x in range(10):
    if x % 2 == 0:
        result.append(x ** 2)

# Comprehension (cleaner, faster)
result = [x**2 for x in range(10) if x % 2 == 0]
# [0, 4, 16, 36, 64]
\`\`\`

### Nested List Comprehension
\`\`\`python
# Flatten 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Create 2D matrix
grid = [[i * j for j in range(1, 4)] for i in range(1, 4)]
# [[1,2,3],[2,4,6],[3,6,9]]
\`\`\`

### Dict Comprehension
\`\`\`python
# Basic dict comprehension
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Swap keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}

# Filter dict
prices = {"apple": 1.5, "banana": 0.5, "cherry": 3.0, "mango": 2.0}
expensive = {k: v for k, v in prices.items() if v > 1.0}
print(expensive)  # {'apple': 1.5, 'cherry': 3.0, 'mango': 2.0}
\`\`\`

### Set Comprehension
\`\`\`python
# Unique squares
nums = [1, -1, 2, -2, 3, 3]
unique_sq = {x**2 for x in nums}
print(unique_sq)  # {1, 4, 9}
\`\`\`

### Generator Expression (Memory-Efficient)
\`\`\`python
# Generator — lazy evaluation, uses less memory
gen = (x**2 for x in range(1_000_000))
print(next(gen))   # 0
print(next(gen))   # 1

# Use in sum, max, min directly
total = sum(x**2 for x in range(100))
print(total)  # 328350
\`\`\``,
        exercises: [
          { title: "Extract emails", description: "Given a list of strings, use list comprehension to extract only those that contain '@'." },
          { title: "Word length dict", description: "Create a dict of words to their lengths from a sentence using dict comprehension." }
        ]
      }
    ]
  },
  functions: {
    title: "Functions",
    icon: "⚙️",
    color: "#f59e0b",
    subtopics: [
      {
        id: 1,
        title: "Defining Functions",
        content: `## Functions in Python

A function is a **reusable block of code** that performs a specific task.

### Basic Function
\`\`\`python
# Define
def greet():
    print("Hello, World!")

# Call
greet()  # Hello, World!

# Function with return value
def add(a, b):
    return a + b

result = add(3, 4)
print(result)  # 7

# Multiple return values
def min_max(nums):
    return min(nums), max(nums)

lo, hi = min_max([5, 2, 8, 1, 9])
print(lo, hi)  # 1 9
\`\`\`

### Parameters vs Arguments
\`\`\`python
# Default parameter values
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))            # Hello, Alice!
print(greet("Bob", "Hi"))        # Hi, Bob!
print(greet("Charlie", greeting="Hey")) # Hey, Charlie!

# Keyword arguments (order doesn't matter)
def order(item, quantity, price):
    return f"{quantity}x {item} @ ₹{price} = ₹{quantity * price}"

print(order(price=50, item="Coffee", quantity=3))
\`\`\`

### *args — Variable Positional Arguments
\`\`\`python
def total(*args):
    print(type(args))  # <class 'tuple'>
    return sum(args)

print(total(1, 2, 3))        # 6
print(total(10, 20, 30, 40)) # 100

def first_and_rest(first, *rest):
    print(f"First: {first}")
    print(f"Rest: {rest}")

first_and_rest(1, 2, 3, 4, 5)
# First: 1
# Rest: (2, 3, 4, 5)
\`\`\`

### **kwargs — Variable Keyword Arguments
\`\`\`python
def display_info(**kwargs):
    print(type(kwargs))  # <class 'dict'>
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

display_info(name="Alice", age=25, city="Mumbai")
# name: Alice
# age: 25
# city: Mumbai

# Combined: positional, *args, keyword, **kwargs
def func(a, b, *args, key="default", **kwargs):
    print(a, b, args, key, kwargs)

func(1, 2, 3, 4, key="custom", x=10, y=20)
# 1 2 (3, 4) custom {'x': 10, 'y': 20}
\`\`\`

### Docstrings
\`\`\`python
def calculate_bmi(weight_kg, height_m):
    """
    Calculate Body Mass Index.
    
    Args:
        weight_kg (float): Weight in kilograms
        height_m (float): Height in meters
        
    Returns:
        float: BMI value rounded to 1 decimal
        
    Example:
        >>> calculate_bmi(70, 1.75)
        22.9
    """
    return round(weight_kg / (height_m ** 2), 1)

# Access docstring
print(calculate_bmi.__doc__)
help(calculate_bmi)
\`\`\``,
        exercises: [
          { title: "Fibonacci function", description: "Write a function fib(n) that returns the nth Fibonacci number." },
          { title: "Flexible sum", description: "Write sum_all(*args) that accepts any number of arguments and returns their sum." }
        ]
      },
      {
        id: 2,
        title: "Lambda & Functional Tools",
        content: `## Lambda, map, filter, reduce

### Lambda Functions
Lambda is an **anonymous one-liner function**.

\`\`\`python
# Syntax: lambda parameters: expression

# Regular function
def square(x):
    return x ** 2

# Equivalent lambda
square = lambda x: x ** 2
print(square(5))  # 25

# Multi-argument lambda
add = lambda a, b: a + b
print(add(3, 4))  # 7

# Conditional lambda
classify = lambda x: "positive" if x > 0 else "negative" if x < 0 else "zero"
print(classify(5))   # positive
print(classify(-3))  # negative
\`\`\`

### map() — Apply Function to Each Element
\`\`\`python
# map(function, iterable) → returns map object
nums = [1, 2, 3, 4, 5]

# With lambda
squares = list(map(lambda x: x**2, nums))
print(squares)  # [1, 4, 9, 16, 25]

# With regular function
def double(x): return x * 2
doubled = list(map(double, nums))  # [2, 4, 6, 8, 10]

# Map over strings
words = ["hello", "world"]
upper = list(map(str.upper, words))
print(upper)  # ['HELLO', 'WORLD']

# Map over two lists
a = [1, 2, 3]
b = [4, 5, 6]
sums = list(map(lambda x, y: x + y, a, b))
print(sums)  # [5, 7, 9]
\`\`\`

### filter() — Keep Elements Matching Condition
\`\`\`python
# filter(function, iterable) → returns filter object
nums = [1, -2, 3, -4, 5, 0, -6]

positives = list(filter(lambda x: x > 0, nums))
print(positives)  # [1, 3, 5]

# Filter strings
words = ["apple", "ant", "banana", "avocado", "cherry"]
a_words = list(filter(lambda w: w.startswith("a"), words))
print(a_words)  # ['apple', 'ant', 'avocado']

# Filter None values
data = [1, None, 2, None, 3, 0, False]
clean = list(filter(None, data))  # removes falsy values
print(clean)  # [1, 2, 3]
\`\`\`

### sorted() with key
\`\`\`python
students = [
    {"name": "Charlie", "score": 85},
    {"name": "Alice", "score": 92},
    {"name": "Bob", "score": 78},
]

# Sort by score descending
ranked = sorted(students, key=lambda s: s["score"], reverse=True)
for s in ranked:
    print(f"{s['name']}: {s['score']}")

# Sort strings by length
words = ["banana", "fig", "apple", "kiwi"]
by_len = sorted(words, key=len)
print(by_len)  # ['fig', 'kiwi', 'apple', 'banana']
\`\`\`

### reduce() — Accumulate
\`\`\`python
from functools import reduce

nums = [1, 2, 3, 4, 5]

# Product of all numbers
product = reduce(lambda acc, x: acc * x, nums)
print(product)  # 120

# Find maximum
maximum = reduce(lambda a, b: a if a > b else b, nums)
print(maximum)  # 5
\`\`\``,
        exercises: [
          { title: "Filter and transform", description: "Given a list of numbers, use map and filter to get squares of all even numbers." },
          { title: "Sort by last name", description: "Sort a list of full names ['John Smith', 'Alice Brown', ...] alphabetically by last name using sorted()." }
        ]
      },
      {
        id: 3,
        title: "Scope & Closures",
        content: `## Scope, LEGB Rule & Closures

### LEGB Rule
Python looks up names in this order: **L**ocal → **E**nclosing → **G**lobal → **B**uilt-in

\`\`\`python
x = "global"  # Global scope

def outer():
    x = "enclosing"  # Enclosing scope
    
    def inner():
        x = "local"  # Local scope
        print(x)     # local
    
    inner()
    print(x)         # enclosing

outer()
print(x)             # global
\`\`\`

### global Keyword
\`\`\`python
count = 0

def increment():
    global count    # access global variable
    count += 1

increment()
increment()
print(count)  # 2
\`\`\`

### nonlocal Keyword
\`\`\`python
def counter():
    count = 0
    
    def increment():
        nonlocal count  # access enclosing scope
        count += 1
        return count
    
    return increment

c = counter()
print(c())  # 1
print(c())  # 2
print(c())  # 3
\`\`\`

### Closures
A closure is a function that **remembers** the state of its enclosing scope even after the outer function has finished.

\`\`\`python
def multiplier(factor):
    def multiply(x):
        return x * factor  # 'factor' is captured
    return multiply

double = multiplier(2)
triple = multiplier(3)

print(double(5))  # 10
print(triple(5))  # 15

# Verify closure
print(double.__closure__[0].cell_contents)  # 2
\`\`\`

### Decorators (Built on Closures)
\`\`\`python
import time

# Decorator to measure execution time
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(0.1)
    return "done"

result = slow_function()
# slow_function took 0.1002s
\`\`\``,
        exercises: [
          { title: "Memoization", description: "Use a closure to implement memoization (caching) for Fibonacci function." },
          { title: "Logger decorator", description: "Create a @log decorator that prints function name and arguments before calling it." }
        ]
      },
      {
        id: 4,
        title: "Recursion",
        content: `## Recursion

A function is **recursive** when it calls itself. Every recursive function needs a **base case** to stop.

### Classic Examples
\`\`\`python
# Factorial: n! = n × (n-1)!
def factorial(n):
    if n == 0 or n == 1:   # base case
        return 1
    return n * factorial(n - 1)  # recursive case

print(factorial(5))  # 120
print(factorial(0))  # 1

# Fibonacci
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print([fib(i) for i in range(10)])
# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Sum of list
def list_sum(lst):
    if not lst:           # base case: empty list
        return 0
    return lst[0] + list_sum(lst[1:])

print(list_sum([1, 2, 3, 4, 5]))  # 15
\`\`\`

### Binary Search (Recursive)
\`\`\`python
def binary_search(arr, target, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    if low > high:
        return -1  # not found
    
    mid = (low + high) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search(arr, target, mid + 1, high)
    else:
        return binary_search(arr, target, low, mid - 1)

nums = [1, 3, 5, 7, 9, 11, 15, 20]
print(binary_search(nums, 7))   # 3
print(binary_search(nums, 6))   # -1
\`\`\`

### Memoization (Optimized Recursion)
\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_fast(n):
    if n <= 1:
        return n
    return fib_fast(n - 1) + fib_fast(n - 2)

print(fib_fast(50))   # 12586269025 (instant)

# Manual memoization
memo = {}
def fib_memo(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1) + fib_memo(n-2)
    return memo[n]
\`\`\`

### Recursive Tree Traversal
\`\`\`python
# Flatten nested list
def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

nested = [1, [2, 3], [4, [5, 6]], 7]
print(flatten(nested))  # [1, 2, 3, 4, 5, 6, 7]
\`\`\``,
        exercises: [
          { title: "Power function", description: "Write power(base, exp) recursively without using ** operator." },
          { title: "String reverse", description: "Reverse a string recursively (without slicing or reversed())." }
        ]
      }
    ]
  },
  oop: {
    title: "Object-Oriented Python",
    icon: "🏗️",
    color: "#10b981",
    subtopics: [
      {
        id: 1,
        title: "Classes & Objects",
        content: `## Classes & Objects in Python

OOP organizes code into **objects** that combine data (attributes) and behavior (methods).

### Defining a Class
\`\`\`python
class Dog:
    # Class attribute (shared by all instances)
    species = "Canis familiaris"
    
    # Constructor
    def __init__(self, name, age, breed):
        # Instance attributes (unique per object)
        self.name = name
        self.age = age
        self.breed = breed
    
    # Instance method
    def bark(self):
        return f"{self.name} says: Woof!"
    
    def describe(self):
        return f"{self.name} is {self.age} years old ({self.breed})"
    
    # String representation
    def __str__(self):
        return f"Dog({self.name}, {self.age})"
    
    def __repr__(self):
        return f"Dog(name={self.name!r}, age={self.age!r})"

# Create objects (instantiation)
dog1 = Dog("Buddy", 3, "Golden Retriever")
dog2 = Dog("Max", 5, "German Shepherd")

# Access attributes
print(dog1.name)       # Buddy
print(dog1.species)    # Canis familiaris

# Call methods
print(dog1.bark())     # Buddy says: Woof!
print(dog2.describe()) # Max is 5 years old (German Shepherd)

# str() uses __str__
print(str(dog1))       # Dog(Buddy, 3)
print(repr(dog1))      # Dog(name='Buddy', age=3)
\`\`\`

### Class Methods & Static Methods
\`\`\`python
class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius
    
    # Property — computed attribute
    @property
    def fahrenheit(self):
        return (self.celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        self.celsius = (value - 32) * 5/9
    
    # Class method — works on class, not instance
    @classmethod
    def from_fahrenheit(cls, f):
        return cls((f - 32) * 5/9)
    
    # Static method — utility, no self or cls
    @staticmethod
    def is_valid(celsius):
        return celsius >= -273.15

t1 = Temperature(100)
print(t1.fahrenheit)  # 212.0
t1.fahrenheit = 32
print(t1.celsius)     # 0.0

t2 = Temperature.from_fahrenheit(98.6)
print(round(t2.celsius, 1))  # 37.0

print(Temperature.is_valid(-300))  # False
\`\`\``,
        exercises: [
          { title: "BankAccount class", description: "Create BankAccount with balance, deposit(amount), withdraw(amount), and get_balance() methods." },
          { title: "Rectangle class", description: "Create Rectangle with width and height. Add area(), perimeter(), and is_square() methods." }
        ]
      },
      {
        id: 2,
        title: "Inheritance & Polymorphism",
        content: `## Inheritance in Python

Inheritance lets a class **reuse** and **extend** another class's code.

### Single Inheritance
\`\`\`python
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound
    
    def speak(self):
        return f"{self.name} says {self.sound}"
    
    def __str__(self):
        return self.name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Woof")  # call parent __init__
        self.breed = breed
    
    def fetch(self, item):
        return f"{self.name} fetches the {item}!"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")
    
    def speak(self):  # Override parent method
        return f"{self.name} purrs... {self.sound}"

dog = Dog("Buddy", "Labrador")
cat = Cat("Whiskers")

print(dog.speak())   # Buddy says Woof
print(cat.speak())   # Whiskers purrs... Meow
print(dog.fetch("ball"))  # Buddy fetches the ball!
print(isinstance(dog, Animal))   # True
print(isinstance(dog, Dog))      # True
print(isinstance(dog, Cat))      # False
\`\`\`

### Polymorphism
\`\`\`python
# Same method name, different behavior
class Shape:
    def area(self):
        raise NotImplementedError("Subclass must implement area()")

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        import math
        return round(math.pi * self.radius ** 2, 2)

class Rectangle(Shape):
    def __init__(self, w, h):
        self.width, self.height = w, h
    def area(self):
        return self.width * self.height

class Triangle(Shape):
    def __init__(self, base, height):
        self.base, self.height = base, height
    def area(self):
        return 0.5 * self.base * self.height

shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 8)]
for shape in shapes:
    print(f"{type(shape).__name__}: area = {shape.area()}")
# Circle: area = 78.54
# Rectangle: area = 24
# Triangle: area = 12.0
\`\`\`

### Abstract Classes
\`\`\`python
from abc import ABC, abstractmethod

class Vehicle(ABC):
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year
    
    @abstractmethod
    def fuel_type(self):
        pass
    
    @abstractmethod
    def max_speed(self):
        pass
    
    def info(self):
        return f"{self.year} {self.brand}"

class ElectricCar(Vehicle):
    def fuel_type(self): return "Electric"
    def max_speed(self): return "250 km/h"

class PetrolBike(Vehicle):
    def fuel_type(self): return "Petrol"
    def max_speed(self): return "180 km/h"

# Vehicle()  # TypeError: Can't instantiate abstract class
ec = ElectricCar("Tesla", 2024)
print(ec.info(), ec.fuel_type())  # 2024 Tesla Electric
\`\`\``,
        exercises: [
          { title: "Employee hierarchy", description: "Create Employee base class. Add Manager and Developer subclasses with different salary calculation." },
          { title: "Payment methods", description: "Create abstract Payment class with process() method. Implement CreditCard, UPI, and NetBanking." }
        ]
      }
    ]
  },
  modules: {
    title: "Modules & Libraries",
    icon: "📦",
    color: "#ef4444",
    subtopics: [
      {
        id: 1,
        title: "Modules & Packages",
        content: `## Modules & Packages

### Importing Modules
\`\`\`python
# Import entire module
import math
print(math.pi)          # 3.141592653589793
print(math.sqrt(16))    # 4.0
print(math.ceil(3.2))   # 4
print(math.floor(3.9))  # 3

# Import specific names
from math import pi, sqrt, factorial
print(pi)          # 3.14...
print(sqrt(25))    # 5.0
print(factorial(5)) # 120

# Import with alias
import numpy as np       # common alias
import pandas as pd      # common alias
from datetime import datetime as dt
\`\`\`

### Creating Your Own Module
\`\`\`python
# File: calculator.py
def add(a, b): return a + b
def subtract(a, b): return a - b
def multiply(a, b): return a * b
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

PI = 3.14159

# File: main.py
import calculator
print(calculator.add(3, 4))     # 7
print(calculator.PI)            # 3.14159

from calculator import add, divide
print(add(10, 5))               # 15
\`\`\`

### Useful Standard Library Modules
\`\`\`python
import os
import sys
import json
import datetime
import random
import re
import collections

# os — operating system interface
print(os.getcwd())              # current directory
print(os.listdir("."))          # list files
os.makedirs("new_folder", exist_ok=True)
print(os.path.join("folder", "file.txt"))

# sys — system info
print(sys.version)
print(sys.platform)
sys.exit(0)  # exit program

# random
print(random.randint(1, 100))  # random int
print(random.choice(["a","b","c"]))  # random pick
lst = [1, 2, 3, 4, 5]
random.shuffle(lst)
print(random.sample(lst, 3))   # random 3 items

# json
data = {"name": "Alice", "scores": [95, 87, 92]}
json_str = json.dumps(data, indent=2)
print(json_str)
parsed = json.loads(json_str)
print(parsed["name"])

# datetime
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))
tomorrow = now + datetime.timedelta(days=1)
\`\`\``,
        exercises: [
          { title: "File lister", description: "Use the os module to list all .py files in the current directory with their sizes." },
          { title: "JSON config reader", description: "Create a config.json file and write a function to read and pretty-print its contents." }
        ]
      },
      {
        id: 2,
        title: "File Handling",
        content: `## File Handling in Python

### Reading Files
\`\`\`python
# Open and read entire file
with open("data.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())  # strip() removes \\n

# Read all lines into list
with open("data.txt", "r") as f:
    lines = f.readlines()  # ['line1\\n', 'line2\\n', ...]

# Read first 100 characters
with open("data.txt", "r") as f:
    chunk = f.read(100)
\`\`\`

### Writing Files
\`\`\`python
# Write (overwrites existing)
with open("output.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("Second line\\n")

# Append to file
with open("log.txt", "a") as f:
    f.write("New entry added\\n")

# Write multiple lines
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("output.txt", "w") as f:
    f.writelines(lines)
\`\`\`

### File Modes
| Mode | Description |
|------|-------------|
| \`'r'\` | Read (default) — error if file doesn't exist |
| \`'w'\` | Write — creates or overwrites |
| \`'a'\` | Append — creates or appends |
| \`'x'\` | Create — error if file exists |
| \`'rb'\` | Read binary |
| \`'wb'\` | Write binary |
| \`'r+'\` | Read and write |

### Working with CSV
\`\`\`python
import csv

# Write CSV
students = [
    ["Name", "Score", "Grade"],
    ["Alice", 95, "A"],
    ["Bob", 82, "B"],
    ["Charlie", 78, "C"],
]
with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(students)

# Read CSV
with open("students.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(f"{row['Name']}: {row['Score']} ({row['Grade']})")
\`\`\`

### Exception Handling for Files
\`\`\`python
import os

def safe_read(filename):
    try:
        with open(filename, "r") as f:
            return f.read()
    except FileNotFoundError:
        print(f"Error: '{filename}' not found")
        return None
    except PermissionError:
        print(f"Error: No permission to read '{filename}'")
        return None

# Check if file exists before opening
if os.path.exists("data.txt"):
    with open("data.txt") as f:
        print(f.read())
\`\`\``,
        exercises: [
          { title: "Word frequency counter", description: "Read a text file and count the frequency of each word. Write results to a new file sorted by frequency." },
          { title: "CSV grade reporter", description: "Read a CSV of student names and scores, calculate average, and write a report showing pass/fail." }
        ]
      },
      {
        id: 3,
        title: "Exception Handling",
        content: `## Exception Handling

### try / except / else / finally
\`\`\`python
try:
    x = int(input("Enter number: "))
    result = 100 / x
except ValueError:
    print("Error: Please enter a valid number")
except ZeroDivisionError:
    print("Error: Cannot divide by zero")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    # Runs only if NO exception occurred
    print(f"Result: {result}")
finally:
    # ALWAYS runs (cleanup code here)
    print("Execution complete")
\`\`\`

### Common Built-in Exceptions
| Exception | When Raised |
|-----------|-------------|
| ValueError | Wrong type/value  (int("abc")) |
| TypeError | Wrong type for operation |
| IndexError | List index out of range |
| KeyError | Dict key not found |
| ZeroDivisionError | Division by zero |
| FileNotFoundError | File doesn't exist |
| AttributeError | Attribute doesn't exist |
| ImportError | Module not found |
| NameError | Variable not defined |
| RecursionError | Max recursion depth exceeded |

### Custom Exceptions
\`\`\`python
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(
            f"Cannot withdraw ₹{amount}. Balance is only ₹{balance}"
        )

class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance

account = BankAccount(1000)
try:
    account.withdraw(1500)
except InsufficientFundsError as e:
    print(e)  # Cannot withdraw ₹1500. Balance is only ₹1000
\`\`\`

### Context Managers
\`\`\`python
# with statement ensures cleanup
with open("file.txt", "w") as f:
    f.write("data")
# File automatically closed here

# Custom context manager
from contextlib import contextmanager

@contextmanager
def timer(name):
    import time
    start = time.time()
    yield
    elapsed = time.time() - start
    print(f"{name} took {elapsed:.3f}s")

with timer("my operation"):
    result = sum(range(1_000_000))
\`\`\``,
        exercises: [
          { title: "Safe division", description: "Write safe_divide(a, b) that handles ZeroDivisionError and TypeError with clear error messages." },
          { title: "Custom ValidationError", description: "Create a form validator that raises ValidationError with field name and message for invalid inputs." }
        ]
      }
    ]
  }
};
