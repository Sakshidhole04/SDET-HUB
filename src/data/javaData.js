export const javaCourses = {
  basics: {
    title: "Java Basics",
    icon: "☕",
    color: "#f59e0b",
    subtopics: [
      {
        id: 1,
        title: "Overview & Environment Setup",
        content: `## Java Overview & Environment Setup

### What is Java?
Java is a **high-level, class-based, object-oriented** programming language designed to have as few implementation dependencies as possible. It was developed by **James Gosling at Sun Microsystems** in 1995.

### Key Features of Java
| Feature | Description |
|---------|-------------|
| Simple | Easy to learn, clean syntax based on C++ |
| Object-Oriented | Everything is an object |
| Platform Independent | Write Once, Run Anywhere (WORA) |
| Secure | No explicit pointer, runs in JVM sandbox |
| Robust | Strong memory management, exception handling |
| Multithreaded | Built-in threading support |
| High Performance | JIT compiler optimizations |
| Distributed | Designed for networked environments |

### Java Editions
- **Java SE** (Standard Edition) — Core Java, Desktop apps
- **Java EE** (Enterprise Edition) — Web, distributed applications
- **Java ME** (Micro Edition) — Mobile and embedded devices
- **JavaFX** — Rich internet applications

### JVM, JRE, JDK
\`\`\`
 JDK (Java Development Kit)
 ├── javac (compiler)
 ├── java (launcher)
 ├── jar, javadoc, etc.
 └── JRE (Java Runtime Environment)
      ├── Core Libraries (java.lang, java.util, ...)
      └── JVM (Java Virtual Machine)
           ├── Class Loader
           ├── Bytecode Verifier
           └── Execution Engine (JIT Compiler)
\`\`\`

| Component | Purpose |
|-----------|---------|
| **JVM** | Executes Java bytecode on any operating system |
| **JRE** | JVM + Standard libraries needed to run Java programs |
| **JDK** | JRE + Compiler (javac) + Dev tools — needed to write & compile Java |

### How Java Works
\`\`\`
Source Code (.java)
       ↓  javac (compiler)
Bytecode (.class)
       ↓  java (JVM)
Machine runs on any OS
\`\`\`

### First Java Program
\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

**Compile and Run:**
\`\`\`bash
javac HelloWorld.java    // creates HelloWorld.class
java HelloWorld          // output: Hello, World!
\`\`\`

### Java Syntax Rules
- Java is **case-sensitive** (Hello and hello are different)
- Every application has a \`main\` method — entry point
- File name **must match** the public class name
- Statements end with **semicolon** \`;\`
- Code blocks use **curly braces** \`{ }\`
- Single-line comments: \`// comment\`
- Multi-line comments: \`/* comment */\`
- Documentation comments: \`/** comment */\``,
        exercises: [
          { title: "Hello World", description: "Write a Java program that prints your full name, current year, and 'is learning Java!' on separate lines." },
          { title: "JDK vs JRE", description: "Explain in your own words: If you only need to run a Java program, which do you install — JDK or JRE? Why?" },
        ],
      },
      {
        id: 2,
        title: "Data Types & Variables",
        content: `## Data Types & Variables

### Primitive Data Types
Java has 8 primitive data types:

| Type | Size | Default | Range | Example |
|------|------|---------|-------|---------|
| \`byte\` | 1 byte | 0 | -128 to 127 | \`byte b = 100;\` |
| \`short\` | 2 bytes | 0 | -32,768 to 32,767 | \`short s = 5000;\` |
| \`int\` | 4 bytes | 0 | -2,147,483,648 to 2,147,483,647 | \`int i = 42;\` |
| \`long\` | 8 bytes | 0L | Very large numbers | \`long l = 9876543210L;\` |
| \`float\` | 4 bytes | 0.0f | 6-7 decimal digits | \`float f = 3.14f;\` |
| \`double\` | 8 bytes | 0.0d | 15-16 decimal digits | \`double d = 3.14159;\` |
| \`char\` | 2 bytes | '\\u0000' | Single Unicode character | \`char c = 'A';\` |
| \`boolean\` | 1 bit | false | true or false | \`boolean b = true;\` |

### Variable Declaration & Initialization
\`\`\`java
// Declaration
int age;

// Initialization
age = 25;

// Declaration + Initialization
int salary = 50000;

// Multiple variables of same type
int x = 10, y = 20, z = 30;

// Constants with final keyword
final double PI = 3.14159265358979;
final int MAX_SIZE = 100;
\`\`\`

### Types of Variables
\`\`\`java
public class VariableTypes {
    // 1. Class/Static variable — shared across all instances
    static String company = "Medhasphere";

    // 2. Instance variable — belongs to each object
    String name;
    int age;

    public void showInfo() {
        // 3. Local variable — exists only inside method
        String greeting = "Hello";
        System.out.println(greeting + " " + name);
    }
}
\`\`\`

### Type Casting
\`\`\`java
// Widening (Implicit) — no data loss, automatic
byte   -> short -> int -> long -> float -> double

int i = 100;
double d = i;    // automatic widening
long l = i;      // automatic widening

// Narrowing (Explicit) — possible data loss, needs cast operator
double pi = 3.99;
int x = (int) pi;       // x = 3 (decimal truncated, NOT rounded)

long bigNum = 1234567890123L;
int smallNum = (int) bigNum;  // data loss!

// char <-> int
char ch = 'A';
int ascii = ch;         // ascii = 65
char back = (char) 66;  // back = 'B'
\`\`\`

### var Keyword (Java 10+)
\`\`\`java
var name   = "Alice";      // inferred as String
var age    = 25;            // inferred as int
var price  = 9.99;          // inferred as double
var active = true;          // inferred as boolean

// var is ONLY for local variables
// Cannot be used for fields, parameters, or return types
// var x;  -- ERROR! Must initialize
\`\`\`

### Wrapper Classes
Every primitive has a corresponding object wrapper:
\`\`\`java
int      -> Integer
double   -> Double
boolean  -> Boolean
char     -> Character
byte     -> Byte
short    -> Short
long     -> Long
float    -> Float

// Autoboxing (primitive to wrapper — automatic)
Integer obj = 42;        // int -> Integer

// Unboxing (wrapper to primitive — automatic)
int val = obj;           // Integer -> int

// Useful methods
Integer.parseInt("123")       // String to int
Double.parseDouble("3.14")    // String to double
Integer.MAX_VALUE             // 2147483647
Integer.MIN_VALUE             // -2147483648
Integer.toBinaryString(10)    // "1010"
\`\`\``,
        exercises: [
          { title: "Data Types Explorer", description: "Declare variables of each primitive type. Print their values and use Integer.MAX_VALUE, Integer.MIN_VALUE to see the limits." },
          { title: "Type Casting", description: "Declare a double d = 9.99. Cast to int. Declare char c = 'Z'. Get its ASCII value. Print both casts with explanation." },
        ],
      },
      {
        id: 3,
        title: "Operators",
        content: `## Operators in Java

### Arithmetic Operators
\`\`\`java
int a = 17, b = 5;

a + b    // 22  (addition)
a - b    // 12  (subtraction)
a * b    // 85  (multiplication)
a / b    // 3   (integer division — quotient only)
a % b    // 2   (modulo — remainder)
a++      // 17 then becomes 18 (post-increment)
++a      // increments first, then uses value
a--      // post-decrement
--a      // pre-decrement
\`\`\`

### Relational (Comparison) Operators
\`\`\`java
int x = 10, y = 20;

x == y    // false (equal to)
x != y    // true  (not equal to)
x >  y    // false (greater than)
x <  y    // true  (less than)
x >= y    // false (greater than or equal)
x <= y    // true  (less than or equal)
\`\`\`

### Logical Operators
\`\`\`java
boolean p = true, q = false;

p && q    // false — AND: both must be true
p || q    // true  — OR: at least one must be true
!p        // false — NOT: negation

// Short-circuit evaluation
// && stops if first is false
// || stops if first is true
int n = 0;
if (n != 0 && (10/n > 1)) { }  // safe — 10/n never evaluated
\`\`\`

### Assignment Operators
\`\`\`java
int x = 10;
x += 5;    // x = x + 5  = 15
x -= 3;    // x = x - 3  = 12
x *= 2;    // x = x * 2  = 24
x /= 4;    // x = x / 4  = 6
x %= 4;    // x = x % 4  = 2
\`\`\`

### Ternary Operator
\`\`\`java
// Syntax: condition ? valueIfTrue : valueIfFalse
int a = 10, b = 20;
int max = (a > b) ? a : b;           // max = 20
String result = (a > 0) ? "positive" : "non-positive";

// Nested ternary (keep readable)
int score = 75;
String grade = (score >= 90) ? "A" :
               (score >= 75) ? "B" :
               (score >= 60) ? "C" : "F";
// grade = "B"
\`\`\`

### Bitwise Operators
\`\`\`java
int a = 12;   // binary: 1100
int b = 10;   // binary: 1010

a & b     // 8  — AND:  1000
a | b     // 14 — OR:   1110
a ^ b     // 6  — XOR:  0110
~a        // -13 — NOT (flip all bits)
a << 1    // 24 — Left shift  (multiply by 2)
a >> 1    // 6  — Right shift (divide by 2)
a >>> 1   // 6  — Unsigned right shift
\`\`\`

### Operator Precedence (High to Low)
\`\`\`
1. ()  Parentheses
2. ++  --  (post)  ~  !  (unary)
3. *  /  %
4. +  -
5. <<  >>  >>>
6. <  >  <=  >=  instanceof
7. ==  !=
8. &
9. ^
10. |
11. &&
12. ||
13. ?:  (ternary)
14. =  +=  -=  *=  /=  %= (assignment)
\`\`\`
\`\`\`java
int result = 10 + 2 * 5;    // 20 (multiplication first)
int result2 = (10 + 2) * 5; // 60 (parentheses first)
\`\`\``,
        exercises: [
          { title: "Calculator", description: "Write a program with two variables a=25, b=7. Print the result of all arithmetic operators (+, -, *, /, %) on them." },
          { title: "Even or Odd & Grade", description: "Use modulo to check if a number is even or odd. Use ternary to assign grade based on marks." },
        ],
      },
      {
        id: 4,
        title: "Control Statements",
        content: `## Control Flow Statements

### if-else-if Ladder
\`\`\`java
int marks = 72;

if (marks >= 90) {
    System.out.println("Grade: A (Excellent)");
} else if (marks >= 75) {
    System.out.println("Grade: B (Good)");
} else if (marks >= 60) {
    System.out.println("Grade: C (Average)");
} else if (marks >= 40) {
    System.out.println("Grade: D (Pass)");
} else {
    System.out.println("Grade: F (Fail)");
}
// output: Grade: C (Average)
\`\`\`

### switch Statement
\`\`\`java
// Classic switch
int day = 4;
switch (day) {
    case 1: System.out.println("Monday");    break;
    case 2: System.out.println("Tuesday");   break;
    case 3: System.out.println("Wednesday"); break;
    case 4: System.out.println("Thursday");  break;
    case 5: System.out.println("Friday");    break;
    case 6: System.out.println("Saturday");  break;
    case 7: System.out.println("Sunday");    break;
    default: System.out.println("Invalid");
}

// Switch with String (Java 7+)
String season = "Summer";
switch (season) {
    case "Spring": System.out.println("Flowers bloom!"); break;
    case "Summer": System.out.println("Sun is hot!");    break;
    case "Autumn": System.out.println("Leaves fall!");   break;
    case "Winter": System.out.println("Snow falls!");    break;
}

// Switch Expression (Java 14+) — more concise
String result = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3, 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Unknown";
};
\`\`\`

### for Loop
\`\`\`java
// Basic for loop
for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}

// Decrement
for (int i = 10; i >= 1; i--) {
    System.out.print(i + " ");  // 10 9 8 7 6 5 4 3 2 1
}

// Nested for loop — multiplication table
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.print(i * j + "\t");
    }
    System.out.println();
}
\`\`\`

### while & do-while Loop
\`\`\`java
// while — checks condition BEFORE execution
int i = 1;
while (i <= 5) {
    System.out.println(i++);
}

// do-while — executes FIRST, then checks condition
int j = 10;
do {
    System.out.println("j = " + j);
    j++;
} while (j < 5);  // Prints once even though condition is false!
\`\`\`

### break, continue, return
\`\`\`java
// break — exits loop immediately
for (int i = 1; i <= 10; i++) {
    if (i == 6) break;
    System.out.print(i + " ");  // 1 2 3 4 5
}

// continue — skips current iteration
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;  // skip even numbers
    System.out.print(i + " "); // 1 3 5 7 9
}

// Labeled break — for nested loops
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) break outer;  // exits both loops
        System.out.println(i + "," + j);
    }
}
\`\`\``,
        exercises: [
          { title: "Fibonacci Series", description: "Print the first 15 Fibonacci numbers using a for loop (0, 1, 1, 2, 3, 5, 8...)." },
          { title: "Pattern Printing", description: "Print a right-angled triangle of stars using nested loops:\n*\n**\n***\n****\n*****" },
        ],
      },
      {
        id: 5,
        title: "Arrays",
        content: `## Arrays in Java

An array is a **fixed-size** collection of elements of the **same type**, stored in **contiguous memory**.

### Declaring & Initializing Arrays
\`\`\`java
// Declaration
int[] numbers;
String[] names;

// Allocation with new
int[] numbers = new int[5];       // [0, 0, 0, 0, 0] (default 0)
String[] names = new String[3];   // [null, null, null]
boolean[] flags = new boolean[4]; // [false, false, false, false]

// Declaration + Initialization
int[] primes = {2, 3, 5, 7, 11, 13};
String[] days = {"Mon", "Tue", "Wed", "Thu", "Fri"};
double[] prices = new double[]{9.99, 19.99, 4.50};
\`\`\`

### Accessing & Modifying Elements
\`\`\`java
int[] arr = {10, 20, 30, 40, 50};

// Access — index starts at 0
System.out.println(arr[0]);   // 10 (first element)
System.out.println(arr[4]);   // 50 (last element)
System.out.println(arr.length); // 5

// Modify
arr[2] = 99;
System.out.println(arr[2]);   // 99

// arr[5] — throws ArrayIndexOutOfBoundsException!
\`\`\`

### Iterating Arrays
\`\`\`java
int[] nums = {10, 20, 30, 40, 50};

// Traditional for loop
for (int i = 0; i < nums.length; i++) {
    System.out.println("Index " + i + ": " + nums[i]);
}

// Enhanced for-each loop (read-only)
for (int n : nums) {
    System.out.println(n);
}
\`\`\`

### Arrays Utility Class
\`\`\`java
import java.util.Arrays;

int[] arr = {5, 2, 8, 1, 9, 3};

// Sort ascending
Arrays.sort(arr);
System.out.println(Arrays.toString(arr)); // [1, 2, 3, 5, 8, 9]

// Binary search (array must be sorted first)
int idx = Arrays.binarySearch(arr, 5);   // returns index: 3

// Fill array with a value
Arrays.fill(arr, 0);   // [0, 0, 0, 0, 0, 0]

// Copy
int[] copy = Arrays.copyOf(arr, 3);             // first 3 elements
int[] range = Arrays.copyOfRange(arr, 1, 4);    // index 1 to 3

// Compare
Arrays.equals(new int[]{1,2,3}, new int[]{1,2,3});  // true
\`\`\`

### 2D Arrays (Matrix)
\`\`\`java
// Declaration
int[][] matrix = new int[3][3];

// Initialize
int[][] grid = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Access element at row 1, col 2
System.out.println(grid[1][2]);   // 6

// Iterate 2D array
for (int i = 0; i < grid.length; i++) {
    for (int j = 0; j < grid[i].length; j++) {
        System.out.printf("%3d", grid[i][j]);
    }
    System.out.println();
}

// Jagged array — rows with different lengths
int[][] jagged = new int[3][];
jagged[0] = new int[1];
jagged[1] = new int[2];
jagged[2] = new int[3];
\`\`\``,
        exercises: [
          { title: "Array Statistics", description: "Write a program to find the sum, average, minimum, and maximum of an array {45, 12, 78, 34, 56, 89, 23}." },
          { title: "Reverse an Array", description: "Reverse the array {1,2,3,4,5} in-place (without creating a new array). Print before and after." },
        ],
      },
      {
        id: 6,
        title: "Strings",
        content: `## Strings in Java

A \`String\` is an **immutable** sequence of characters. Every string literal in Java is an object of the \`String\` class.

### Creating Strings
\`\`\`java
// String literal — stored in String Pool
String s1 = "Hello";
String s2 = "Hello";   // same object as s1 from pool!

// new keyword — creates new heap object
String s3 = new String("Hello");
String s4 = new String("Hello");  // different object from s3

// == vs .equals()
s1 == s2        // true  (same pool reference)
s1 == s3        // false (different objects)
s1.equals(s3)   // true  (same content)
s1.equalsIgnoreCase("HELLO")  // true
\`\`\`

### Important String Methods
\`\`\`java
String s = "  Hello, World!  ";

// Length & case
s.length()                 // 18 (includes spaces)
s.trim().length()          // 14 (after trimming spaces)
s.toUpperCase()            // "  HELLO, WORLD!  "
s.toLowerCase()            // "  hello, world!  "

// Searching
s.indexOf('o')             // 6 (first occurrence)
s.lastIndexOf('o')         // 9
s.contains("World")        // true
s.startsWith("  He")      // true
s.endsWith("!  ")         // true

// Extracting
s.trim()                   // "Hello, World!"
s.trim().substring(7)      // "World!"
s.trim().substring(0, 5)   // "Hello"
s.charAt(7)                // 'W'
s.trim().replace("World", "Java")  // "Hello, Java!"
s.replaceAll("\\s+", "")  // removes all whitespace

// Splitting
String csv = "Alice,Bob,Carol,Dave";
String[] parts = csv.split(",");
// parts = ["Alice", "Bob", "Carol", "Dave"]
parts.length               // 4

// Joining
String joined = String.join(" | ", "A", "B", "C");
// "A | B | C"

// Converting
String.valueOf(42)          // "42"
String.valueOf(3.14)        // "3.14"
String.valueOf(true)        // "true"
Integer.parseInt("123")     // 123
Double.parseDouble("3.14")  // 3.14
\`\`\`

### String Formatting
\`\`\`java
// String.format
String msg = String.format("Name: %s, Age: %d, GPA: %.2f", "Alice", 21, 3.85);
// "Name: Alice, Age: 21, GPA: 3.85"

// Format specifiers
// %s  = String
// %d  = integer
// %f  = float/double (%.2f = 2 decimal places)
// %c  = character
// %b  = boolean
// %n  = newline
// %10s = right-aligned width 10
// %-10s = left-aligned width 10

// Formatted method (Java 15+)
String result = "Pi is approximately %.4f".formatted(Math.PI);
\`\`\`

### StringBuilder & StringBuffer
\`\`\`java
// String is immutable — concatenating in a loop is SLOW
String s = "";
for (int i = 0; i < 1000; i++) {
    s += i;  // Creates 1000 new String objects! BAD
}

// StringBuilder — mutable, fast, NOT thread-safe
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
sb.insert(5, ",");        // "Hello, World"
sb.replace(7, 12, "Java");// "Hello, Java"
sb.delete(5, 6);          // "Hello Java"
sb.reverse();             // "avaJ olleH"
sb.toString();            // convert back to String

// StringBuffer — like StringBuilder but thread-safe (slower)
StringBuffer strbuf = new StringBuffer("thread-safe");
\`\`\``,
        exercises: [
          { title: "String Methods Practice", description: "Given the string '  Java Programming is Fun!  ', print: trimmed length, uppercase, index of 'P', substring from index 6 to 17, after replacing 'Fun' with 'Powerful'." },
          { title: "Palindrome Checker", description: "Check if a given string is a palindrome (reads same forwards and backwards), ignoring case and spaces. Test with 'racecar', 'A man a plan', 'hello'." },
        ],
      },
    ],
  },
  oop: {
    title: "Object-Oriented Programming",
    icon: "🏗️",
    color: "#8b5cf6",
    subtopics: [
      {
        id: 1,
        title: "Classes & Objects",
        content: `## Classes & Objects

### What is a Class?
A **class** is a user-defined blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type.

### What is an Object?
An **object** is an instance of a class. It has **state** (fields), **behavior** (methods), and **identity** (unique reference).

### Defining a Class
\`\`\`java
public class Student {
    // Instance variables (state)
    private String name;
    private int age;
    private double gpa;
    private static int count = 0;  // class variable — shared

    // Constructor
    public Student(String name, int age, double gpa) {
        this.name = name;    // 'this' distinguishes field from param
        this.age = age;
        this.gpa = gpa;
        count++;             // increment when new student created
    }

    // Instance methods (behavior)
    public void study() {
        System.out.println(name + " is studying...");
    }

    public boolean isHonors() {
        return gpa >= 3.5;
    }

    // Getters
    public String getName() { return name; }
    public int getAge()     { return age; }
    public double getGpa()  { return gpa; }

    // Setters
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) this.gpa = gpa;
    }

    // Static method — class level
    public static int getCount() { return count; }

    // toString override
    @Override
    public String toString() {
        return String.format("Student{name='%s', age=%d, gpa=%.2f}", name, age, gpa);
    }
}
\`\`\`

### Creating & Using Objects
\`\`\`java
public class Main {
    public static void main(String[] args) {
        // Create objects using new keyword
        Student s1 = new Student("Alice", 20, 3.8);
        Student s2 = new Student("Bob",   22, 2.9);
        Student s3 = new Student("Carol", 21, 3.6);

        // Call methods
        s1.study();                        // Alice is studying...
        System.out.println(s1.isHonors()); // true
        System.out.println(s2.isHonors()); // false

        // Access via getters
        System.out.println(s1.getName());  // Alice
        System.out.println(s1.getGpa());   // 3.8

        // Static method via class name
        System.out.println(Student.getCount()); // 3

        // toString called automatically in print
        System.out.println(s1);  // Student{name='Alice', age=20, gpa=3.80}
    }
}
\`\`\`

### Constructors in Detail
\`\`\`java
public class Rectangle {
    double width, height;

    // No-arg constructor
    public Rectangle() {
        this(1.0, 1.0);    // calls the double constructor
    }

    // Single-arg constructor
    public Rectangle(double side) {
        this(side, side);  // square
    }

    // Full constructor
    public Rectangle(double width, double height) {
        this.width  = width;
        this.height = height;
    }

    public double area()      { return width * height; }
    public double perimeter() { return 2 * (width + height); }
}

Rectangle r1 = new Rectangle();        // 1x1
Rectangle r2 = new Rectangle(5.0);     // 5x5 square
Rectangle r3 = new Rectangle(4.0, 6.0);// 4x6
System.out.println(r3.area());          // 24.0
\`\`\``,
        exercises: [
          { title: "Bank Account", description: "Create a BankAccount class with accountNumber, owner, balance. Methods: deposit(amount), withdraw(amount) with balance check, getBalance(), and a formatted toString()." },
          { title: "Student Report", description: "Create 3 Student objects with different names/GPAs. Print each student's details and determine if they qualify for Dean's List (GPA >= 3.7)." },
        ],
      },
      {
        id: 2,
        title: "Inheritance",
        content: `## Inheritance

Inheritance is a mechanism where a new class (child/subclass) acquires the properties and behaviors of an existing class (parent/superclass). It promotes **code reusability**.

### extends Keyword
\`\`\`java
// Parent class (Superclass)
public class Animal {
    protected String name;
    protected int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age  = age;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }

    public String getInfo() {
        return "Animal[name=" + name + ", age=" + age + "]";
    }
}

// Child class (Subclass)
public class Dog extends Animal {
    private String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);       // MUST be first statement
        this.breed = breed;
    }

    public void bark() {
        System.out.println(name + " says: Woof!");
    }

    public void fetch(String item) {
        System.out.println(name + " fetches the " + item + "!");
    }

    @Override
    public String getInfo() {
        return super.getInfo() + ", Breed=" + breed;
    }
}

// Further subclass
public class GoldenRetriever extends Dog {
    public GoldenRetriever(String name, int age) {
        super(name, age, "Golden Retriever");
    }

    @Override
    public void bark() {
        System.out.println(name + " says: Woof woof! (friendly)");
    }
}
\`\`\`

### super Keyword
\`\`\`java
// super() — call parent constructor
public Dog(String name, int age, String breed) {
    super(name, age);   // calls Animal(name, age)
}

// super.method() — call parent method
@Override
public String getInfo() {
    return super.getInfo() + ", Breed=" + breed;
    //     ^-- calls Animal's getInfo()
}

// super.field — access parent field
System.out.println(super.name);
\`\`\`

### Method Overriding
\`\`\`java
// Rules for overriding:
// 1. Same method name, parameters, return type
// 2. Cannot reduce visibility (public -> private is INVALID)
// 3. Cannot override final or static methods
// 4. @Override annotation is recommended

class Shape {
    public double area() { return 0.0; }
}

class Circle extends Shape {
    double radius;
    Circle(double r) { this.radius = r; }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w=w; this.h=h; }

    @Override
    public double area() { return w * h; }
}
\`\`\`

### instanceof & Casting
\`\`\`java
Dog d = new Dog("Rex", 3, "Labrador");

d instanceof Dog     // true
d instanceof Animal  // true (Dog IS-A Animal)
d instanceof Object  // true (everything IS-A Object)

// Upcasting — automatic (subclass to superclass)
Animal a = new Dog("Max", 2, "Poodle");  // OK

// Downcasting — manual (superclass to subclass)
if (a instanceof Dog) {
    Dog dogRef = (Dog) a;
    dogRef.bark();   // safe because we checked
}

// Java 16+ pattern matching
if (a instanceof Dog dog) {
    dog.bark();   // no manual cast needed!
}
\`\`\``,
        exercises: [
          { title: "Vehicle Hierarchy", description: "Create: Vehicle(brand, speed) → Car(doors) → ElectricCar(batteryRange). Override a describe() method in each. Create one of each and call describe()." },
          { title: "Polymorphic Array", description: "Create an array of Shape references containing a mix of Circle, Rectangle, Triangle objects. Loop through and print each shape's area." },
        ],
      },
      {
        id: 3,
        title: "Polymorphism & Abstraction",
        content: `## Polymorphism & Abstraction

### Polymorphism
"Poly" = many, "morph" = forms. One interface, multiple implementations.

**Two types:**
1. **Compile-time (Static)** — Method Overloading
2. **Runtime (Dynamic)** — Method Overriding

### Method Overloading (Compile-time)
\`\`\`java
public class Calculator {
    // Same name, different parameters
    public int add(int a, int b)              { return a + b; }
    public double add(double a, double b)     { return a + b; }
    public int add(int a, int b, int c)       { return a + b + c; }
    public String add(String a, String b)     { return a + b; }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 3));          // 8
        System.out.println(calc.add(2.5, 3.7));      // 6.2
        System.out.println(calc.add(1, 2, 3));       // 6
        System.out.println(calc.add("Hi", " there")); // Hi there
    }
}
\`\`\`

### Runtime Polymorphism (Dynamic Method Dispatch)
\`\`\`java
// Parent reference can hold child object
Animal animal;
animal = new Dog("Rex", 3, "Lab");   // upcasting
animal.eat();        // Dog's behavior if overridden
// animal.bark();   // COMPILE ERROR — Animal doesn't have bark()

// Real power: polymorphic method calls
Shape[] shapes = {
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
};

for (Shape s : shapes) {
    System.out.printf("Area: %.2f%n", s.area());
    // Correct version called at runtime!
}
\`\`\`

### Abstract Classes
\`\`\`java
// Cannot be instantiated — must be subclassed
public abstract class Vehicle {
    protected String brand;
    protected int year;

    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year  = year;
    }

    // Abstract method — MUST be overridden in concrete subclass
    public abstract void startEngine();
    public abstract double fuelEfficiency();

    // Concrete method — inherited as-is
    public void displayInfo() {
        System.out.println(brand + " (" + year + ")");
    }
}

public class Car extends Vehicle {
    private double engineCC;

    public Car(String brand, int year, double cc) {
        super(brand, year);
        this.engineCC = cc;
    }

    @Override
    public void startEngine() {
        System.out.println(brand + ": Vroom! (petrol engine)");
    }

    @Override
    public double fuelEfficiency() { return 15.5; }
}

public class ElectricCar extends Vehicle {
    private int batteryKWh;

    public ElectricCar(String brand, int year, int kwh) {
        super(brand, year);
        this.batteryKWh = kwh;
    }

    @Override
    public void startEngine() {
        System.out.println(brand + ": Whirr... (electric motor)");
    }

    @Override
    public double fuelEfficiency() { return 0; }  // no fuel!
}

// Vehicle v = new Vehicle(...);  // COMPILE ERROR — abstract!
Vehicle v1 = new Car("Toyota", 2023, 1500);
Vehicle v2 = new ElectricCar("Tesla", 2024, 75);
v1.startEngine();  // Toyota: Vroom!
v2.startEngine();  // Tesla: Whirr...
\`\`\`

### Interfaces
An interface defines a **contract** — what a class can do, without saying how.

\`\`\`java
public interface Drawable {
    // All fields are public static final (constants)
    int VERSION = 1;  // implicitly public static final

    // All methods are public abstract (unless default/static)
    void draw();
    void resize(double factor);

    // Default method (Java 8+) — has implementation
    default void describe() {
        System.out.println("I am a drawable object");
    }

    // Static method (Java 8+)
    static void printVersion() {
        System.out.println("Drawable version: " + VERSION);
    }
}

public interface Colorable {
    void setColor(String color);
    String getColor();
}

// A class CAN implement multiple interfaces
public class Circle implements Drawable, Colorable {
    double radius;
    String color;

    Circle(double r) { this.radius = r; }

    @Override public void draw()   { System.out.println("Drawing circle r=" + radius); }
    @Override public void resize(double f) { radius *= f; }
    @Override public void setColor(String c) { this.color = c; }
    @Override public String getColor() { return color; }
}
\`\`\`

### Abstract Class vs Interface
| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Instantiate | No | No |
| Constructor | Yes | No |
| Fields | Any (static, instance) | public static final only |
| Methods | Abstract + concrete | Abstract + default + static |
| Multiple inheritance | No (extends 1 only) | Yes (implements many) |
| Access modifiers | Any | public only |
| Use when | Shared base + partial implementation | Defining capability/contract |`,
        exercises: [
          { title: "Shape Hierarchy", description: "Create abstract class Shape with abstract area() and perimeter(). Implement Circle, Rectangle, Triangle. Print all shapes' areas sorted highest to lowest." },
          { title: "Interface Implementation", description: "Create interface Playable with play(), pause(), stop(). Implement MusicPlayer and VideoPlayer. Call all methods on both." },
        ],
      },
      {
        id: 4,
        title: "Encapsulation & Access",
        content: `## Encapsulation & Access Control

### Access Modifiers
\`\`\`
                   Same     Same     Sub-     Other
Modifier           Class    Package  class    Package
─────────────────────────────────────────────────────
private            ✅        ❌        ❌        ❌
(default/package)  ✅        ✅        ❌        ❌
protected          ✅        ✅        ✅        ❌
public             ✅        ✅        ✅        ✅
\`\`\`

### Encapsulation Principles
\`\`\`java
public class Employee {
    // Private fields — cannot be directly accessed
    private int id;
    private String name;
    private double salary;
    private String department;

    // Constructor
    public Employee(int id, String name, double salary, String dept) {
        this.id         = id;
        this.name       = name;
        setSalary(salary);   // use setter for validation
        this.department = dept;
    }

    // Getters — read access
    public int    getId()         { return id; }
    public String getName()       { return name; }
    public double getSalary()     { return salary; }
    public String getDepartment() { return department; }

    // Setters — controlled write access with validation
    public void setName(String name) {
        if (name != null && !name.trim().isEmpty())
            this.name = name.trim();
    }

    public void setSalary(double salary) {
        if (salary < 0)
            throw new IllegalArgumentException("Salary cannot be negative: " + salary);
        this.salary = salary;
    }

    public void setDepartment(String dept) {
        this.department = dept;
    }

    // Business method
    public void applyRaise(double percent) {
        if (percent > 0 && percent <= 50) {
            salary += salary * (percent / 100);
        }
    }

    @Override
    public String toString() {
        return String.format("Employee{id=%d, name='%s', salary=%.2f, dept='%s'}",
                             id, name, salary, department);
    }
}
\`\`\`

### static Members
\`\`\`java
public class Counter {
    private static int instanceCount = 0;   // shared across all objects
    private int id;
    private static final String PREFIX = "OBJ";  // constant

    public Counter() {
        instanceCount++;
        this.id = instanceCount;
    }

    // Instance method — needs object
    public int getId() { return id; }

    // Static method — NO object needed, call via class name
    public static int getInstanceCount() { return instanceCount; }

    // Static block — runs once when class is loaded
    static {
        System.out.println("Counter class loaded!");
    }
}

// Usage
Counter c1 = new Counter();  // id=1
Counter c2 = new Counter();  // id=2
Counter c3 = new Counter();  // id=3

Counter.getInstanceCount()   // 3  (static method)
c1.getId()                   // 1  (instance method)
\`\`\`

### final Keyword
\`\`\`java
// final variable — constant, cannot be reassigned
final int MAX_SIZE = 100;
// MAX_SIZE = 200;  -- COMPILE ERROR

// final method — cannot be overridden
public final void criticalMethod() { ... }

// final class — cannot be subclassed
public final class ImmutablePoint {
    private final int x, y;
    public ImmutablePoint(int x, int y) { this.x = x; this.y = y; }
    public int getX() { return x; }
    public int getY() { return y; }
    // No setters — truly immutable
}
// class SubPoint extends ImmutablePoint { }  -- COMPILE ERROR

// Java's String is final for security and pool reuse
\`\`\``,
        exercises: [
          { title: "Immutable Person", description: "Create a fully immutable Person class (final class, final fields, getters only, no setters). Verify in main that the state cannot be changed after construction." },
          { title: "Student Registry", description: "Use a static counter in Student class to auto-assign student IDs (STU001, STU002...). Create 5 students and print their auto-generated IDs." },
        ],
      },
      {
        id: 5,
        title: "Interfaces & Design Patterns",
        content: `## Interfaces & Design Patterns

### Functional Interfaces (Java 8+)
An interface with exactly **one abstract method** — usable as a lambda target.
\`\`\`java
@FunctionalInterface
interface MathOperation {
    int operate(int a, int b);
    // Only one abstract method allowed
    default String describe() { return "Math Operation"; }
}

// Lambda expressions
MathOperation add  = (a, b) -> a + b;
MathOperation mult = (a, b) -> a * b;
MathOperation max  = (a, b) -> a > b ? a : b;

System.out.println(add.operate(5, 3));   // 8
System.out.println(mult.operate(5, 3));  // 15

// Built-in functional interfaces (java.util.function)
Predicate<String>   isEmpty  = s -> s.isEmpty();
Function<String,Integer> len = s -> s.length();
Consumer<String>    printer  = s -> System.out.println(s);
Supplier<Double>    random   = () -> Math.random();

isEmpty.test("")           // true
len.apply("Hello")         // 5
printer.accept("Hi!")      // prints Hi!
random.get()               // random double
\`\`\`

### Singleton Pattern
Only ONE instance of the class ever exists:
\`\`\`java
public class AppConfig {
    private static AppConfig instance;   // single instance
    private String dbUrl;
    private int maxConnections;

    private AppConfig() {   // private constructor!
        dbUrl          = "jdbc:mysql://localhost/appdb";
        maxConnections = 10;
    }

    public static AppConfig getInstance() {
        if (instance == null) {
            instance = new AppConfig();
        }
        return instance;
    }

    public String getDbUrl() { return dbUrl; }

    // Thread-safe Singleton with double-checked locking
    private static volatile AppConfig safeInstance;
    public static AppConfig getSafeInstance() {
        if (safeInstance == null) {
            synchronized (AppConfig.class) {
                if (safeInstance == null)
                    safeInstance = new AppConfig();
            }
        }
        return safeInstance;
    }
}
\`\`\`

### Builder Pattern
Build complex objects step-by-step:
\`\`\`java
public class Pizza {
    private final String size;
    private final String crust;
    private final boolean cheese, pepperoni, mushrooms, olives;

    private Pizza(Builder b) {
        this.size      = b.size;
        this.crust     = b.crust;
        this.cheese    = b.cheese;
        this.pepperoni = b.pepperoni;
        this.mushrooms = b.mushrooms;
        this.olives    = b.olives;
    }

    public static class Builder {
        private String size  = "Medium";
        private String crust = "Thin";
        private boolean cheese, pepperoni, mushrooms, olives;

        public Builder size(String s)     { this.size = s;      return this; }
        public Builder crust(String c)    { this.crust = c;     return this; }
        public Builder cheese()           { this.cheese = true; return this; }
        public Builder pepperoni()        { this.pepperoni = true; return this; }
        public Builder mushrooms()        { this.mushrooms = true; return this; }
        public Pizza build()              { return new Pizza(this); }
    }

    @Override
    public String toString() {
        return size + " pizza, " + crust + " crust" +
               (cheese ? ", cheese" : "") +
               (pepperoni ? ", pepperoni" : "") +
               (mushrooms ? ", mushrooms" : "");
    }
}

Pizza p = new Pizza.Builder()
    .size("Large").crust("Thick").cheese().pepperoni().build();
\`\`\`

### Factory Pattern
\`\`\`java
interface Notification { void send(String msg); }
class EmailNotification  implements Notification { public void send(String m) { System.out.println("Email: " + m); } }
class SMSNotification    implements Notification { public void send(String m) { System.out.println("SMS: " + m); } }
class PushNotification   implements Notification { public void send(String m) { System.out.println("Push: " + m); } }

class NotificationFactory {
    public static Notification create(String type) {
        return switch (type.toUpperCase()) {
            case "EMAIL" -> new EmailNotification();
            case "SMS"   -> new SMSNotification();
            case "PUSH"  -> new PushNotification();
            default -> throw new IllegalArgumentException("Unknown type: " + type);
        };
    }
}

Notification n = NotificationFactory.create("EMAIL");
n.send("Your order has been placed!");
\`\`\``,
        exercises: [
          { title: "Builder for Computer", description: "Build a Computer class using Builder Pattern with fields: cpu, ram, storage, gpu (optional), wifi (optional). Create 3 different configurations." },
          { title: "Factory for Animals", description: "Create a Factory that returns Dog, Cat, or Bird objects based on a String input. Each animal has a makeSound() method." },
        ],
      },
    ],
  },
  collections: {
    title: "Collections Framework",
    icon: "📦",
    color: "#0ea5e9",
    subtopics: [
      {
        id: 1,
        title: "Collection Hierarchy",
        content: `## Java Collections Framework

The **Java Collections Framework (JCF)** provides a unified architecture for storing and manipulating groups of objects.

### Collection Hierarchy
\`\`\`
java.lang.Iterable
 └── Collection
      ├── List (ordered, duplicates allowed)
      │    ├── ArrayList
      │    ├── LinkedList
      │    ├── Vector
      │    └── Stack
      ├── Set (no duplicates)
      │    ├── HashSet
      │    ├── LinkedHashSet (insertion-order)
      │    └── TreeSet (sorted)
      └── Queue
           ├── LinkedList
           ├── PriorityQueue
           └── ArrayDeque

Map (key-value pairs — separate hierarchy)
 ├── HashMap
 ├── LinkedHashMap (insertion-order)
 ├── TreeMap (sorted by key)
 └── Hashtable
\`\`\`

### Choosing the Right Collection
| When you need... | Use |
|-----------------|-----|
| Ordered list, fast access by index | ArrayList |
| Frequent insert/delete in middle | LinkedList |
| No duplicates | HashSet |
| No duplicates, insertion order | LinkedHashSet |
| No duplicates, sorted | TreeSet |
| Key-value pairs, fast lookup | HashMap |
| Key-value, insertion order | LinkedHashMap |
| Key-value, sorted by key | TreeMap |
| Queue (FIFO) | LinkedList or ArrayDeque |
| Priority queue | PriorityQueue |

### Common Collection Methods
\`\`\`java
// All Collection types share these
collection.add(element)
collection.remove(element)
collection.contains(element)
collection.size()
collection.isEmpty()
collection.clear()
collection.iterator()
collection.forEach(action)

// Collection to Array
Object[] arr   = collection.toArray();
String[] strArr = collection.toArray(new String[0]);

// Array to Collection
List<String> list = Arrays.asList("a", "b", "c");   // fixed size
List<String> list = new ArrayList<>(Arrays.asList("a","b","c")); // mutable
List<String> list = List.of("a", "b", "c");         // immutable (Java 9+)
\`\`\``,
        exercises: [
          { title: "Collection Comparison", description: "Create the same words list using ArrayList, HashSet, and TreeSet. Add duplicates. Print each and observe the differences in order and duplicate handling." },
        ],
      },
      {
        id: 2,
        title: "List — ArrayList & LinkedList",
        content: `## ArrayList & LinkedList

### ArrayList
Backed by a dynamic array. Best for **random access** and **iteration**.

\`\`\`java
import java.util.*;

ArrayList<String> list = new ArrayList<>();  // initial capacity 10

// Adding elements
list.add("Alice");              // append to end
list.add("Bob");
list.add("Carol");
list.add(1, "Dave");            // insert at index 1
list.addAll(List.of("Eve","Frank")); // add all

// Accessing
list.get(0);                    // "Alice"
list.size();                    // 6
list.indexOf("Bob");            // 2
list.lastIndexOf("Bob");        // 2
list.contains("Carol");         // true

// Modifying
list.set(0, "Alicia");          // replace at index 0
list.remove("Bob");             // remove by value (first occurrence)
list.remove(2);                 // remove by index
list.removeIf(s -> s.length() > 4); // remove matching elements

// Sub-list (view — changes affect original)
List<String> sub = list.subList(1, 3);

// Searching & Sorting
Collections.sort(list);         // alphabetical
Collections.sort(list, (a,b) -> b.compareTo(a)); // reverse
Collections.shuffle(list);      // random order
Collections.reverse(list);
String min = Collections.min(list);
String max = Collections.max(list);
int freq = Collections.frequency(list, "Alice");

// Iteration
for (String s : list) System.out.println(s);
list.forEach(System.out::println);  // lambda
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    if (s.startsWith("A")) it.remove();  // safe removal during iteration
}
\`\`\`

### LinkedList
Doubly-linked list. Best for **frequent insertions/deletions**. Also implements Deque.
\`\`\`java
LinkedList<Integer> ll = new LinkedList<>();
ll.add(10); ll.add(20); ll.add(30);

// Deque operations
ll.addFirst(5);    // [5, 10, 20, 30]
ll.addLast(40);    // [5, 10, 20, 30, 40]

ll.getFirst();     // 5
ll.getLast();      // 40
ll.peekFirst();    // 5 (no remove)
ll.peekLast();     // 40 (no remove)

ll.removeFirst();  // removes & returns 5
ll.removeLast();   // removes & returns 40

// Queue (FIFO)
ll.offer(100);     // add to tail
ll.poll();         // remove from head
ll.peek();         // look at head

// Stack (LIFO)
ll.push(200);      // add to front
ll.pop();          // remove from front
\`\`\`

### Performance Comparison
\`\`\`
Operation          ArrayList   LinkedList
─────────────────────────────────────────
get(index)         O(1) ✅     O(n) ❌
add at end         O(1)*       O(1) ✅
add at index       O(n) ❌     O(n) (but fast if ref held)
remove at index    O(n) ❌     O(n) (traversal needed)
contains           O(n)        O(n)
Memory             Less        More (node overhead)
\`\`\``,
        exercises: [
          { title: "Task Manager", description: "Use a LinkedList as a task queue. Add 5 tasks, process (poll) them one-by-one, and print 'Processing: [task]'. Then add urgent tasks to the front using addFirst." },
          { title: "Sorting Students", description: "Create an ArrayList of student names. Sort forward, sort backward (Comparator), then sort by length using a lambda Comparator." },
        ],
      },
      {
        id: 3,
        title: "Set — HashSet, LinkedHashSet, TreeSet",
        content: `## Set Collections

A **Set** is a collection that contains **no duplicate elements**. It models the mathematical set abstraction.

### HashSet
No order guaranteed. O(1) average for add, remove, contains.
\`\`\`java
import java.util.*;

HashSet<String> set = new HashSet<>();

// Add elements
set.add("banana");
set.add("apple");
set.add("cherry");
set.add("apple");    // IGNORED — duplicate
set.add(null);       // allows ONE null

System.out.println(set.size());            // 4
System.out.println(set.contains("apple")); // true

// Remove
set.remove("banana");

// Iterate (no guaranteed order)
set.forEach(System.out::println);  // apple, cherry, null (any order)

// Set Operations
Set<Integer> a = new HashSet<>(Arrays.asList(1,2,3,4,5));
Set<Integer> b = new HashSet<>(Arrays.asList(3,4,5,6,7));

// Union
Set<Integer> union = new HashSet<>(a);
union.addAll(b);         // {1,2,3,4,5,6,7}

// Intersection
Set<Integer> inter = new HashSet<>(a);
inter.retainAll(b);      // {3,4,5}

// Difference (a - b)
Set<Integer> diff = new HashSet<>(a);
diff.removeAll(b);        // {1,2}

// Check subset
a.containsAll(inter);    // true
\`\`\`

### LinkedHashSet
**Maintains insertion order**. Slightly slower than HashSet.
\`\`\`java
LinkedHashSet<String> lhs = new LinkedHashSet<>();
lhs.add("banana");
lhs.add("apple");
lhs.add("cherry");
lhs.add("apple");   // ignored

// Iterates in insertion order: banana, apple, cherry
lhs.forEach(System.out::println);
\`\`\`

### TreeSet
Elements stored in **natural sorted order** (or custom Comparator).
\`\`\`java
TreeSet<Integer> ts = new TreeSet<>();
ts.add(40); ts.add(10); ts.add(30); ts.add(20); ts.add(50);

System.out.println(ts);           // [10, 20, 30, 40, 50] sorted!
ts.first();                        // 10
ts.last();                         // 50
ts.higher(30);                     // 40 (next greater)
ts.lower(30);                      // 20 (next smaller)
ts.headSet(30);                    // [10, 20] (< 30)
ts.tailSet(30);                    // [30, 40, 50] (>= 30)
ts.subSet(20, 40);                 // [20, 30] (>= 20 and < 40)

// Custom Comparator — reverse order
TreeSet<String> revSet = new TreeSet<>(Comparator.reverseOrder());
revSet.add("banana"); revSet.add("apple"); revSet.add("cherry");
System.out.println(revSet);   // [cherry, banana, apple]
\`\`\``,
        exercises: [
          { title: "Unique Words", description: "Given a sentence with repeated words, use a LinkedHashSet to collect unique words (maintaining order) and print them." },
          { title: "Student Ranking", description: "Use a TreeSet with custom Comparator to store Student objects sorted by GPA descending. Print top 3 students." },
        ],
      },
      {
        id: 4,
        title: "Map — HashMap, TreeMap",
        content: `## Map Collections

A **Map** stores **key-value pairs**. Keys are unique; values can repeat.

### HashMap
Most common. O(1) average put/get/remove. No order.
\`\`\`java
import java.util.*;

HashMap<String, Integer> scores = new HashMap<>();

// Adding
scores.put("Alice", 95);
scores.put("Bob",   80);
scores.put("Carol", 92);
scores.put("Alice", 98);   // UPDATES Alice (key already exists)

// Reading
scores.get("Alice");              // 98
scores.get("Dave");               // null (not found)
scores.getOrDefault("Dave", 0);   // 0 (safer)
scores.containsKey("Bob");        // true
scores.containsValue(80);         // true
scores.size();                    // 3
scores.isEmpty();                 // false

// Updating
scores.put("Bob", scores.get("Bob") + 5);    // increment by 5
scores.merge("Carol", 3, Integer::sum);      // 92 + 3 = 95
scores.compute("Alice", (k, v) -> v + 2);   // 98 + 2 = 100
scores.putIfAbsent("Dave", 75);             // only if key absent
scores.replace("Bob", 85);                  // only if key exists

// Removing
scores.remove("Alice");
scores.remove("Bob", 80);   // only if value matches

// Iterating
for (Map.Entry<String, Integer> e : scores.entrySet()) {
    System.out.println(e.getKey() + " -> " + e.getValue());
}
scores.forEach((k, v) -> System.out.println(k + "=" + v));
scores.keySet().forEach(System.out::println);
scores.values().stream().mapToInt(Integer::intValue).sum();
\`\`\`

### LinkedHashMap & TreeMap
\`\`\`java
// LinkedHashMap — preserves insertion order
LinkedHashMap<String, Integer> lhm = new LinkedHashMap<>();
lhm.put("first", 1); lhm.put("third", 3); lhm.put("second", 2);
lhm.forEach((k,v) -> System.out.println(k + "=" + v));
// first=1, third=3, second=2

// LRU Cache using LinkedHashMap
LinkedHashMap<Integer, String> lruCache = new LinkedHashMap<>(16, 0.75f, true) {
    protected boolean removeEldestEntry(Map.Entry<Integer,String> eldest) {
        return size() > 3;   // max 3 entries
    }
};

// TreeMap — sorted by key
TreeMap<String, Integer> tm = new TreeMap<>();
tm.put("banana", 2); tm.put("apple", 5); tm.put("cherry", 1);
System.out.println(tm);         // {apple=5, banana=2, cherry=1}
tm.firstKey();                  // "apple"
tm.lastKey();                   // "cherry"
tm.headMap("b");                // {apple=5}
tm.tailMap("b");                // {banana=2, cherry=1}
tm.floorKey("b");               // "banana" (highest key <= "b")
tm.ceilingKey("b");             // "banana" (lowest key >= "b")
\`\`\`

### Practical: Word Frequency Counter
\`\`\`java
String text = "the quick brown fox jumps over the lazy dog the fox";
Map<String, Integer> freq = new HashMap<>();

for (String word : text.split(" ")) {
    freq.merge(word, 1, Integer::sum);
}

// Sort by frequency (value) descending
freq.entrySet().stream()
    .sorted(Map.Entry.<String,Integer>comparingByValue().reversed())
    .forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));
// the: 3, fox: 2, ...
\`\`\``,
        exercises: [
          { title: "Phone Directory", description: "Build a phone directory using HashMap<String,String> (name→phone). Support: add contact, lookup by name, delete contact, print all sorted by name." },
          { title: "Word Frequency", description: "Count word frequency in: 'to be or not to be that is the question to be asked'. Print only words that appear more than once." },
        ],
      },
      {
        id: 5,
        title: "Streams & Lambda Expressions",
        content: `## Streams & Lambda Expressions (Java 8+)

### Lambda Expressions
A lambda is a **short block of code** that takes parameters and returns a value — an anonymous function.
\`\`\`java
// Syntax: (parameters) -> expression
//         (parameters) -> { statements; }

// Old way
Runnable r = new Runnable() {
    public void run() { System.out.println("Old way"); }
};

// Lambda
Runnable r = () -> System.out.println("Lambda way");

// With params
Comparator<String> byLength = (a, b) -> a.length() - b.length();

// Block lambda
Comparator<String> complex = (a, b) -> {
    int diff = a.length() - b.length();
    return diff != 0 ? diff : a.compareTo(b);
};
\`\`\`

### Method References
\`\`\`java
List<String> names = List.of("Alice", "Bob", "Carol");

// Type::staticMethod
names.stream().map(String::valueOf);      // String::valueOf(s)

// object::instanceMethod
names.forEach(System.out::println);       // System.out.println(name)

// Type::instanceMethod
names.stream().map(String::toUpperCase);  // s.toUpperCase()

// Type::new  (constructor reference)
names.stream().map(StringBuilder::new);  // new StringBuilder(s)
\`\`\`

### Stream API
Streams are lazy, pipeline-based operations on sequences of elements.
\`\`\`java
List<Integer> nums = List.of(1,2,3,4,5,6,7,8,9,10);

// filter → map → collect
List<Integer> evenSquares = nums.stream()
    .filter(n -> n % 2 == 0)        // [2,4,6,8,10]
    .map(n -> n * n)                 // [4,16,36,64,100]
    .collect(Collectors.toList());

// Aggregate operations
int sum   = nums.stream().mapToInt(Integer::intValue).sum();       // 55
double avg= nums.stream().mapToInt(Integer::intValue).average().getAsDouble(); // 5.5
int max   = nums.stream().mapToInt(Integer::intValue).max().getAsInt(); // 10

// Terminal operations
long count      = nums.stream().filter(n -> n > 5).count();        // 5
boolean anyOver9= nums.stream().anyMatch(n -> n > 9);              // true
boolean allPos  = nums.stream().allMatch(n -> n > 0);              // true
Optional<Integer> first = nums.stream().filter(n->n>5).findFirst();// Optional[6]

// sorted, distinct, limit, skip
nums.stream().sorted().distinct().skip(2).limit(5).collect(Collectors.toList());

// reduce
int product = nums.stream().reduce(1, (a,b) -> a*b);  // 3628800

// Collectors
String joined = names.stream().collect(Collectors.joining(", "));
Map<Boolean,List<Integer>> partitioned = nums.stream()
    .collect(Collectors.partitioningBy(n -> n%2==0));
Map<Integer,List<String>> grouped = names.stream()
    .collect(Collectors.groupingBy(String::length));

// Parallel stream — uses multiple CPU cores
long parCount = nums.parallelStream().filter(n-> n%2==0).count();
\`\`\``,
        exercises: [
          { title: "Employee Data Analysis", description: "Given List<Employee> with name and salary: Use streams to (1) filter employees earning >50000, (2) get average salary, (3) find highest paid, (4) group by department." },
          { title: "String Processing", description: "Given a list of sentences, use streams to find all unique words with length > 4, sorted alphabetically, joined with commas." },
        ],
      },
    ],
  },
  exceptions: {
    title: "Exception Handling",
    icon: "🛡️",
    color: "#10b981",
    subtopics: [
      {
        id: 1,
        title: "Exception Hierarchy",
        content: `## Exception Handling

### What is an Exception?
An exception is an **unexpected event** that occurs during program execution, disrupting the normal flow of instructions. Java's exception handling mechanism uses try-catch-finally blocks.

### Exception Hierarchy
\`\`\`
java.lang.Object
 └── java.lang.Throwable
      ├── java.lang.Error  (serious — usually not caught)
      │    ├── OutOfMemoryError
      │    ├── StackOverflowError
      │    └── VirtualMachineError
      └── java.lang.Exception
           ├── Checked Exceptions (MUST handle at compile time)
           │    ├── IOException
           │    │    ├── FileNotFoundException
           │    │    └── EOFException
           │    ├── SQLException
           │    ├── ClassNotFoundException
           │    └── ParseException
           └── RuntimeException (Unchecked — optional to handle)
                ├── NullPointerException
                ├── ArrayIndexOutOfBoundsException
                ├── ClassCastException
                ├── NumberFormatException
                ├── ArithmeticException
                ├── IllegalArgumentException
                └── IllegalStateException
\`\`\`

### Checked vs Unchecked
\`\`\`java
// CHECKED — compiler forces you to handle or declare
// Must use try-catch OR declare with throws
void readFile(String path) throws IOException {      // OR
    Files.readString(Path.of(path));
}

void readFile(String path) {
    try {
        Files.readString(Path.of(path));
    } catch (IOException e) {
        e.printStackTrace();
    }
}

// UNCHECKED — compiler does NOT force handling
// These are programming errors — fix the code, don't catch blindly
int[] arr = new int[5];
arr[10] = 1;   // ArrayIndexOutOfBoundsException at RUNTIME

String s = null;
s.length();    // NullPointerException at RUNTIME

int x = Integer.parseInt("abc"); // NumberFormatException
\`\`\`

### Common Exception Messages
\`\`\`java
try {
    String s = null;
    s.length();
} catch (NullPointerException e) {
    System.out.println("NPE: " + e.getMessage());
    // Java 14+: NullPointerException: Cannot invoke "String.length()" because "s" is null
}

try {
    int[] arr = new int[3];
    arr[5] = 1;
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array: " + e.getMessage()); // Index 5 out of bounds for length 3
}

try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Math: " + e.getMessage()); // / by zero
}
\`\`\``,
        exercises: [
          { title: "Exception Types", description: "Write code that deliberately triggers: NullPointerException, ArrayIndexOutOfBoundsException, ClassCastException, and NumberFormatException. Catch each with an appropriate message." },
        ],
      },
      {
        id: 2,
        title: "try-catch-finally",
        content: `## try-catch-finally Blocks

### Basic Syntax
\`\`\`java
try {
    // Code that might throw an exception
    int result = 10 / 0;
    System.out.println("This won't execute");
} catch (ArithmeticException e) {
    // Handles ArithmeticException
    System.out.println("Caught: " + e.getMessage());  // / by zero
} finally {
    // ALWAYS executes — even if exception not caught
    // Use for cleanup: close files, connections, etc.
    System.out.println("Finally block runs!");
}
\`\`\`

### Multiple catch Blocks
\`\`\`java
public static void riskyMethod(int choice) {
    int[] arr = {1, 2, 3};
    String s = null;

    try {
        switch (choice) {
            case 1 -> System.out.println(arr[10]); // ArrayIndexOutOfBounds
            case 2 -> System.out.println(s.length()); // NullPointer
            case 3 -> System.out.println(10 / 0);  // Arithmetic
        }
    } catch (ArrayIndexOutOfBoundsException e) {
        System.out.println("Array index error: " + e.getMessage());
    } catch (NullPointerException e) {
        System.out.println("Null pointer error!");
    } catch (ArithmeticException e) {
        System.out.println("Math error: " + e.getMessage());
    } catch (Exception e) {
        // Catch-all — should be LAST
        System.out.println("Unexpected: " + e.getMessage());
    } finally {
        System.out.println("Done.");
    }
}
\`\`\`

### Multi-catch (Java 7+)
\`\`\`java
try {
    // ...
} catch (IOException | SQLException e) {
    // Handle both the same way
    System.err.println("Data error: " + e.getMessage());
    logger.error("Error occurred", e);
}
\`\`\`

### try-with-resources (Java 7+)
Auto-closes any \`AutoCloseable\` resource:
\`\`\`java
// OLD — verbose, error-prone
BufferedReader br = null;
try {
    br = new BufferedReader(new FileReader("file.txt"));
    System.out.println(br.readLine());
} catch (IOException e) {
    e.printStackTrace();
} finally {
    try { if (br != null) br.close(); }
    catch (IOException e) { e.printStackTrace(); }
}

// NEW — clean, safe
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    System.out.println(br.readLine());
} catch (IOException e) {
    System.out.println("File error: " + e.getMessage());
}   // br.close() called automatically!

// Multiple resources
try (var conn = DriverManager.getConnection(url, user, pass);
     var stmt = conn.prepareStatement("SELECT * FROM users");
     var rs   = stmt.executeQuery()) {
    while (rs.next()) System.out.println(rs.getString("name"));
} catch (SQLException e) {
    e.printStackTrace();
}
\`\`\`

### Exception Methods
\`\`\`java
try {
    int[] a = new int[2];
    a[5] = 1;
} catch (ArrayIndexOutOfBoundsException e) {
    e.getMessage()     // "Index 5 out of bounds for length 2"
    e.getClass()       // class java.lang.ArrayIndexOutOfBoundsException
    e.getClass().getName()  // "java.lang.ArrayIndexOutOfBoundsException"
    e.getClass().getSimpleName() // "ArrayIndexOutOfBoundsException"
    e.printStackTrace()    // prints full stack trace
    e.toString()          // class name + message
}
\`\`\``,
        exercises: [
          { title: "Safe Division", description: "Write a method safeDivide(int a, int b) that handles division by zero, returning 0 instead of throwing. Also handle the case where inputs are String representations of numbers." },
          { title: "File Reader", description: "Try to read a file that doesn't exist. Catch FileNotFoundException separately from IOException. Use try-with-resources. Print a friendly message for each case." },
        ],
      },
      {
        id: 3,
        title: "Custom Exceptions",
        content: `## Custom Exceptions & throw/throws

### throw Keyword
Manually throw an exception:
\`\`\`java
public class AgeValidator {
    public static void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative: " + age);
        }
        if (age > 150) {
            throw new IllegalArgumentException("Age too large: " + age);
        }
        System.out.println("Valid age: " + age);
    }
}

// Usage
try {
    AgeValidator.validateAge(-5);
} catch (IllegalArgumentException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

### throws Declaration
Declares that a method CAN throw a checked exception:
\`\`\`java
// Caller MUST handle or re-declare
public String readConfig(String filePath) throws IOException {
    return Files.readString(Path.of(filePath));
}

// Handling at the call site
try {
    String config = readConfig("app.properties");
} catch (IOException e) {
    System.out.println("Config not found, using defaults.");
}
\`\`\`

### Creating Custom Exceptions
\`\`\`java
// Custom Checked Exception
public class InsufficientFundsException extends Exception {
    private final double amount;     // extra info
    private final double balance;

    public InsufficientFundsException(double amount, double balance) {
        super(String.format(
            "Insufficient funds. Needed: %.2f, Available: %.2f, Shortfall: %.2f",
            amount, balance, amount - balance));
        this.amount  = amount;
        this.balance = balance;
    }

    public double getAmount()    { return amount; }
    public double getBalance()   { return balance; }
    public double getShortfall() { return amount - balance; }
}

// Custom Unchecked Exception
public class InvalidProductException extends RuntimeException {
    private final String productId;

    public InvalidProductException(String productId) {
        super("Product not found: " + productId);
        this.productId = productId;
    }

    // Constructor with cause chaining
    public InvalidProductException(String productId, Throwable cause) {
        super("Product error: " + productId, cause);
        this.productId = productId;
    }

    public String getProductId() { return productId; }
}
\`\`\`

### Using Custom Exceptions
\`\`\`java
public class BankAccount {
    private double balance;

    public BankAccount(double balance) { this.balance = balance; }

    public void deposit(double amount) {
        if (amount <= 0)
            throw new IllegalArgumentException("Deposit must be positive");
        balance += amount;
    }

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount <= 0)
            throw new IllegalArgumentException("Withdrawal must be positive");
        if (amount > balance)
            throw new InsufficientFundsException(amount, balance);
        balance -= amount;
    }
    public double getBalance() { return balance; }
}

// Usage
BankAccount acc = new BankAccount(1000);
try {
    acc.withdraw(1500);
} catch (InsufficientFundsException e) {
    System.out.println(e.getMessage());
    System.out.println("Shortfall: " + e.getShortfall());
}
\`\`\`

### Exception Chaining
\`\`\`java
try {
    // low-level exception
    int[] arr = {};
    int x = arr[0];
} catch (ArrayIndexOutOfBoundsException lowLevel) {
    // wrap in higher-level exception
    throw new RuntimeException("Failed to read data", lowLevel);
}

// Catch the wrapped exception
catch (RuntimeException e) {
    System.out.println(e.getMessage());        // Failed to read data
    System.out.println(e.getCause());          // original cause
}
\`\`\``,
        exercises: [
          { title: "Custom Exception Hierarchy", description: "Create: AppException (base) → DatabaseException → RecordNotFoundException. Throw RecordNotFoundException when searching for a non-existent record. Catch at different levels." },
          { title: "Validated Stack", description: "Create a Stack<T> that throws StackUnderflowException on pop() from empty stack and StackOverflowException when exceeding max capacity." },
        ],
      },
      {
        id: 4,
        title: "Multithreading Basics",
        content: `## Multithreading

### Thread Basics
\`\`\`java
// Method 1: Extend Thread class
class DownloadTask extends Thread {
    private String url;
    private String filename;

    DownloadTask(String url, String filename) {
        super("Downloader-" + filename);   // thread name
        this.url = url;
        this.filename = filename;
    }

    @Override
    public void run() {
        System.out.println(getName() + " starting download from " + url);
        try {
            Thread.sleep(2000);  // simulate download
            System.out.println(getName() + " downloaded: " + filename);
        } catch (InterruptedException e) {
            System.out.println(getName() + " interrupted!");
            Thread.currentThread().interrupt();  // restore interrupt flag
        }
    }
}

// Method 2: Implement Runnable (preferred — separates task from thread)
class PrintTask implements Runnable {
    private final String message;
    private final int count;

    PrintTask(String msg, int count) { this.message = msg; this.count = count; }

    @Override
    public void run() {
        for (int i = 1; i <= count; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + message + " " + i);
            try { Thread.sleep(100); } catch (InterruptedException e) { break; }
        }
    }
}

// Method 3: Lambda (simplest for short tasks)
Thread t = new Thread(() -> {
    System.out.println("Lambda thread running: " + Thread.currentThread().getName());
});
\`\`\`

### Thread Lifecycle
\`\`\`
NEW ──start()──> RUNNABLE ──scheduler──> RUNNING
                     ↑                      |
                     |          sleep/wait/block
                     |                      ↓
                    notify/         WAITING/TIMED_WAITING
                   interrupt                |
                                      notify/interrupt
                                           |
                                      RUNNABLE ──> TERMINATED
\`\`\`

### Thread Methods
\`\`\`java
Thread t = new Thread(() -> { /* work */ }, "WorkerThread");

t.start();           // start thread
t.join();            // wait for t to die
t.join(3000);        // wait max 3 seconds
t.interrupt();       // signal interrupt
t.isAlive();        // true if started and not yet dead
t.getName();        // "WorkerThread"
t.getId();
t.getPriority();    // 1-10 (default 5)
t.setPriority(Thread.MAX_PRIORITY); // 10

Thread.sleep(1000); // sleep current thread 1 sec
Thread.currentThread().getName();   // current thread's name
Thread.activeCount();               // active thread count
\`\`\`

### Synchronization
\`\`\`java
class SharedCounter {
    private int count = 0;

    // synchronized method — only one thread at a time
    public synchronized void increment() { count++; }
    public synchronized void decrement() { count--; }
    public synchronized int  getCount()  { return count; }

    // synchronized block — more fine-grained
    private final Object lock = new Object();
    public void add(int amount) {
        synchronized (lock) {
            count += amount;
        }
    }
}

// Without sync:  count might NOT be 20000
// With sync:     count is ALWAYS 20000
SharedCounter c = new SharedCounter();
Thread t1 = new Thread(() -> { for(int i=0;i<10000;i++) c.increment(); });
Thread t2 = new Thread(() -> { for(int i=0;i<10000;i++) c.increment(); });
t1.start(); t2.start();
t1.join();  t2.join();
System.out.println(c.getCount());  // 20000
\`\`\``,
        exercises: [
          { title: "Parallel Tasks", description: "Create 3 threads that each print their name and count from 1-5 with a 200ms sleep between each. Observe interleaving. Then use join() to wait for all to finish." },
          { title: "Thread-Safe Counter", description: "Create a counter incremented by 5 threads (each incrementing 1000 times) without synchronization. Observe wrong results. Then add synchronized and verify 5000." },
        ],
      },
      {
        id: 5,
        title: "File I/O & Serialization",
        content: `## File I/O & Serialization

### java.nio.file (Modern — Java 7+)
\`\`\`java
import java.nio.file.*;
import java.io.*;

Path path = Path.of("data", "students.txt");

// Read
String content = Files.readString(path);              // whole file as string
List<String> lines = Files.readAllLines(path);         // list of lines
byte[] bytes = Files.readAllBytes(path);

// Lazy line reading (memory efficient for large files)
try (Stream<String> stream = Files.lines(path)) {
    stream.filter(l -> l.contains("ERROR"))
          .forEach(System.out::println);
}

// Write
Files.writeString(path, "Hello, World!");
Files.write(path, List.of("Line 1", "Line 2", "Line 3"));

// Write with options
Files.writeString(path, "appended text",
    StandardOpenOption.CREATE,
    StandardOpenOption.APPEND);

// File operations
Files.exists(path);
Files.createFile(path);
Files.createDirectories(Path.of("a/b/c"));  // creates entire path
Files.delete(path);
Files.deleteIfExists(path);
Files.copy(path, Path.of("backup.txt"));
Files.move(path, Path.of("archive/students.txt"));
Files.size(path);              // bytes
Files.isDirectory(path);
Files.isRegularFile(path);
Files.getLastModifiedTime(path);

// List directory
try (Stream<Path> files = Files.list(Path.of("."))) {
    files.filter(Files::isRegularFile)
         .forEach(System.out::println);
}

// Walk directory tree
Files.walk(Path.of("."))
     .filter(p -> p.toString().endsWith(".java"))
     .forEach(System.out::println);
\`\`\`

### Serialization
Convert an object to bytes (for saving to disk or sending over network):
\`\`\`java
import java.io.*;

// Must implement Serializable to be serialized
public class Person implements Serializable {
    private static final long serialVersionUID = 1L;  // version control

    private String name;
    private int age;
    private transient String password;  // NOT serialized

    public Person(String name, int age, String password) {
        this.name = name; this.age = age; this.password = password;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age +
               ", password=" + password + "}";  // null after deserialization
    }
}

// Serialize (write to file)
Person p = new Person("Alice", 25, "secret123");
try (ObjectOutputStream oos = new ObjectOutputStream(
        new FileOutputStream("person.ser"))) {
    oos.writeObject(p);
    System.out.println("Serialized: " + p);
}

// Deserialize (read from file)
try (ObjectInputStream ois = new ObjectInputStream(
        new FileInputStream("person.ser"))) {
    Person loaded = (Person) ois.readObject();
    System.out.println("Deserialized: " + loaded);
    // Person{name='Alice', age=25, password=null}  <- transient is null!
}
\`\`\``,
        exercises: [
          { title: "Student Records File", description: "Write a program to save a list of student names and grades to a text file, then read it back and print only students with grade 'A'." },
          { title: "Object Persistence", description: "Create a simple Product class (Serializable) with id, name, price. Save a list of 5 products to a file. Load them back and print the most expensive." },
        ],
      },
    ],
  },
  advanced: {
    title: "Advanced Java",
    icon: "⚡",
    color: "#ef4444",
    subtopics: [
      {
        id: 1,
        title: "Generics",
        content: `## Generics in Java

Generics enable types (classes and interfaces) to be **parameters** when defining classes, interfaces, and methods. Benefits: **type safety** at compile time, **no casting** needed, **reusability**.

### Without vs With Generics
\`\`\`java
// WITHOUT — raw type, unsafe
List list = new ArrayList();
list.add("Hello");
list.add(42);           // no compile error!
String s = (String) list.get(1);  // ClassCastException at runtime!

// WITH — type-safe
List<String> typedList = new ArrayList<>();
typedList.add("Hello");
// typedList.add(42);  // COMPILE ERROR — caught early!
String s = typedList.get(0);      // no cast needed
\`\`\`

### Generic Classes
\`\`\`java
// Generic class with type parameter T
public class Pair<T, U> {
    private final T first;
    private final U second;

    public Pair(T first, U second) {
        this.first  = first;
        this.second = second;
    }

    public T getFirst()  { return first; }
    public U getSecond() { return second; }

    public Pair<U, T> swap() { return new Pair<>(second, first); }

    @Override
    public String toString() {
        return "(" + first + ", " + second + ")";
    }
}

Pair<String, Integer> p1 = new Pair<>("Alice", 95);
Pair<Integer, String> p2 = p1.swap();
System.out.println(p1);   // (Alice, 95)
System.out.println(p2);   // (95, Alice)

// Generic Stack
public class Stack<T> {
    private List<T> elements = new ArrayList<>();

    public void push(T item) { elements.add(item); }

    public T pop() {
        if (isEmpty()) throw new RuntimeException("Stack is empty");
        return elements.remove(elements.size() - 1);
    }

    public T peek() {
        if (isEmpty()) throw new RuntimeException("Stack is empty");
        return elements.get(elements.size() - 1);
    }

    public boolean isEmpty() { return elements.isEmpty(); }
    public int size()        { return elements.size(); }
}

Stack<Integer> intStack = new Stack<>();
Stack<String>  strStack = new Stack<>();
\`\`\`

### Generic Methods
\`\`\`java
// Type parameter declared before return type
public static <T extends Comparable<T>> T max(T a, T b, T c) {
    T maxVal = a;
    if (b.compareTo(maxVal) > 0) maxVal = b;
    if (c.compareTo(maxVal) > 0) maxVal = c;
    return maxVal;
}

System.out.println(max(3, 7, 5));             // 7
System.out.println(max("apple","mango","kiwi")); // mango
System.out.println(max(3.14, 2.71, 1.41));   // 3.14

// Generic method to print array
public static <T> void printArray(T[] arr) {
    System.out.print("[");
    for (int i = 0; i < arr.length; i++) {
        System.out.print(arr[i]);
        if (i < arr.length - 1) System.out.print(", ");
    }
    System.out.println("]");
}
\`\`\`

### Wildcards
\`\`\`java
// ? — unknown type
public void printList(List<?> list) {
    for (Object o : list) System.out.println(o);
}
printList(List.of(1,2,3));     // works with any List
printList(List.of("a","b"));   // works too

// Upper Bounded: ? extends T  (covariant — read values)
public double sumList(List<? extends Number> list) {
    return list.stream().mapToDouble(Number::doubleValue).sum();
}
sumList(List.of(1, 2, 3));         // ints
sumList(List.of(1.5, 2.5, 3.0));   // doubles

// Lower Bounded: ? super T  (contravariant — write values)
public void addNumbers(List<? super Integer> list) {
    for (int i = 1; i <= 5; i++) list.add(i);
}
List<Number> nums = new ArrayList<>();
addNumbers(nums);   // OK — Number is supertype of Integer
\`\`\``,
        exercises: [
          { title: "Generic Pair", description: "Create a generic Pair<K,V> class. Use it to store (StudentName, GPA), (ProductID, Price), and (City, Population). Print all three pairs." },
          { title: "Generic Min/Max", description: "Write a generic method findMinMax(List<T extends Comparable<T>>) that returns a Pair<T,T> containing the min and max values." },
        ],
      },
      {
        id: 2,
        title: "Java 8+ Modern Features",
        content: `## Modern Java Features (Java 8–21)

### Optional (Java 8) — Null Safety
\`\`\`java
import java.util.Optional;

// Creating Optional
Optional<String> name = Optional.of("Alice");        // non-null value
Optional<String> empty = Optional.empty();           // empty
Optional<String> nullable = Optional.ofNullable(null); // may be null

// Checking and getting
name.isPresent()          // true
name.isEmpty()            // false (Java 11+)
name.get()                // "Alice" (throws if empty!)
name.orElse("Unknown")    // "Alice" (fallback if empty)
empty.orElse("Unknown")   // "Unknown"
name.orElseGet(() -> fetchFromDB())  // lazy evaluation

// Transform
name.map(String::toUpperCase)          // Optional["ALICE"]
name.map(String::length)               // Optional[5]
name.filter(n -> n.length() > 3)      // Optional["Alice"] (passes)
name.flatMap(n -> Optional.of(n + "!")) // Optional["Alice!"]

// Consume
name.ifPresent(n -> System.out.println("Hello " + n));  // prints
empty.ifPresent(n -> System.out.println("Never runs"));

// Java 9+
name.ifPresentOrElse(
    n -> System.out.println("Found: " + n),
    () -> System.out.println("Not found")
);
name.or(() -> Optional.of("Default"))   // returns self or alternative Optional

// Practical use — no null checks!
public Optional<Student> findStudentById(int id) {
    return students.stream().filter(s -> s.getId() == id).findFirst();
}
\`\`\`

### Records (Java 16) — Immutable Data Classes
\`\`\`java
// Old way — lots of boilerplate
class PointOld {
    private final int x, y;
    public PointOld(int x, int y) { this.x=x; this.y=y; }
    public int getX() { return x; }
    public int getY() { return y; }
    @Override public boolean equals(Object o) { ... }
    @Override public int hashCode() { ... }
    @Override public String toString() { ... }
}

// Record — one line! Auto-generates constructor, getters, equals, hashCode, toString
record Point(int x, int y) {}

Point p = new Point(3, 4);
p.x()         // 3 (accessor, not getX())
p.y()         // 4
p.toString()  // Point[x=3, y=4]
p.equals(new Point(3, 4))  // true

// Compact constructor (validation)
record Temperature(double value, String unit) {
    Temperature {   // compact constructor
        if (!unit.equals("C") && !unit.equals("F") && !unit.equals("K"))
            throw new IllegalArgumentException("Invalid unit: " + unit);
        if (unit.equals("K") && value < 0)
            throw new IllegalArgumentException("Kelvin cannot be negative");
    }
    public double toCelsius() {
        return switch (unit) {
            case "C" -> value;
            case "F" -> (value - 32) * 5/9;
            case "K" -> value - 273.15;
            default  -> throw new AssertionError();
        };
    }
}
\`\`\`

### Sealed Classes (Java 17) — Restricted Inheritance
\`\`\`java
// Only listed classes can extend Shape
sealed interface Shape permits Circle, Rectangle, Triangle {}

record Circle(double radius) implements Shape {}
record Rectangle(double width, double height) implements Shape {}
record Triangle(double a, double b, double c) implements Shape {}

// Exhaustive switch — compiler knows all subtypes
double area(Shape s) {
    return switch (s) {
        case Circle c    -> Math.PI * c.radius() * c.radius();
        case Rectangle r -> r.width() * r.height();
        case Triangle t  -> {
            double sp = (t.a() + t.b() + t.c()) / 2;
            yield Math.sqrt(sp * (sp-t.a()) * (sp-t.b()) * (sp-t.c()));
        }
    };
}
\`\`\`

### Text Blocks (Java 15)
\`\`\`java
// Old string literals
String html = "<html>\\n" +
              "    <body>\\n" +
              "        <p>Hello</p>\\n" +
              "    </body>\\n" +
              "</html>";

// Text block
String html = """
        <html>
            <body>
                <p>Hello</p>
            </body>
        </html>
        """;

String json = """
        {
            "name": "Alice",
            "age": 25,
            "role": "SDET"
        }
        """;

String sql = """
        SELECT id, name, salary
        FROM employees
        WHERE department = 'SDET'
          AND salary > 50000
        ORDER BY salary DESC
        LIMIT 10;
        """;
\`\`\`

### Pattern Matching (Java 16+)
\`\`\`java
// instanceof with binding variable
Object obj = "Hello World";

// Old
if (obj instanceof String) {
    String s = (String) obj;   // manual cast
    System.out.println(s.toUpperCase());
}

// New — pattern matches AND casts
if (obj instanceof String s) {
    System.out.println(s.toUpperCase());  // s is already String!
}

// With conditions
if (obj instanceof String s && s.length() > 5) {
    System.out.println("Long string: " + s);
}

// Switch patterns (Java 21)
String describe(Object o) {
    return switch (o) {
        case null            -> "null value";
        case Integer i       -> "Integer: " + i;
        case String s        -> "String of length " + s.length();
        case Double d when d > 0 -> "Positive double: " + d;
        case Double d        -> "Non-positive double: " + d;
        case int[] arr       -> "int array of length " + arr.length;
        default              -> "Other: " + o.getClass().getSimpleName();
    };
}
\`\`\``,
        exercises: [
          { title: "Optional Chain", description: "Create a method that looks up a user by ID (Optional<User>), gets their address (Optional<Address>), and gets the city. Print city or 'Unknown' if any step is empty." },
          { title: "Records as DTOs", description: "Create records: Address(street, city, zip), Person(name, int age, Address). Create 3 persons and filter those from a specific city using streams." },
        ],
      },
      {
        id: 3,
        title: "JDBC — Database Connectivity",
        content: `## JDBC — Java Database Connectivity

### What is JDBC?
JDBC is a standard Java API that allows Java programs to connect to and execute queries against any relational database (MySQL, PostgreSQL, Oracle, SQLite, etc.)

### JDBC Architecture
\`\`\`
Java Application
      ↓
  JDBC API (java.sql.*)
      ↓
JDBC Driver (DB-specific .jar)
      ↓
  Database Server
\`\`\`

### Setting Up Connection
\`\`\`java
import java.sql.*;

// Connection URL format: jdbc:driver://host:port/database
String url  = "jdbc:mysql://localhost:3306/schooldb";
String user = "root";
String pass = "password";

// Get connection
Connection conn = DriverManager.getConnection(url, user, pass);
System.out.println("Connected! Auto-commit: " + conn.getAutoCommit());
conn.close();   // always close!
\`\`\`

### CRUD with PreparedStatement
**ALWAYS use PreparedStatement** — prevents SQL injection!
\`\`\`java
// Create table
try (Connection conn = DriverManager.getConnection(url, user, pass);
     Statement stmt = conn.createStatement()) {

    stmt.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id     INT AUTO_INCREMENT PRIMARY KEY,
            name   VARCHAR(100) NOT NULL,
            age    INT,
            grade  CHAR(2),
            score  DOUBLE
        )""");
    System.out.println("Table created!");
}

// INSERT
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(
         "INSERT INTO students (name, age, grade, score) VALUES (?, ?, ?, ?)",
         Statement.RETURN_GENERATED_KEYS)) {

    ps.setString(1, "Alice");
    ps.setInt(2, 20);
    ps.setString(3, "A");
    ps.setDouble(4, 95.5);
    int rowsAffected = ps.executeUpdate();

    ResultSet keys = ps.getGeneratedKeys();
    if (keys.next()) System.out.println("New ID: " + keys.getInt(1));
}

// SELECT
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(
         "SELECT * FROM students WHERE score >= ? ORDER BY score DESC")) {

    ps.setDouble(1, 80.0);
    ResultSet rs = ps.executeQuery();

    while (rs.next()) {
        System.out.printf("%-5d %-20s %3d %-5s %.1f%n",
            rs.getInt("id"),
            rs.getString("name"),
            rs.getInt("age"),
            rs.getString("grade"),
            rs.getDouble("score"));
    }
}

// UPDATE
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(
         "UPDATE students SET score = ? WHERE name = ?")) {
    ps.setDouble(1, 98.0);
    ps.setString(2, "Alice");
    System.out.println("Updated rows: " + ps.executeUpdate());
}

// DELETE
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(
         "DELETE FROM students WHERE score < ?")) {
    ps.setDouble(1, 50.0);
    System.out.println("Deleted rows: " + ps.executeUpdate());
}
\`\`\`

### SQL Injection — NEVER do this!
\`\`\`java
// INSECURE — SQL Injection vulnerability!
String username = "admin' OR '1'='1";
String query = "SELECT * FROM users WHERE username = '" + username + "'";
// Executes: SELECT * FROM users WHERE username = 'admin' OR '1'='1'
// Returns ALL users!

// SECURE — PreparedStatement parameterizes input
PreparedStatement ps = conn.prepareStatement(
    "SELECT * FROM users WHERE username = ?");
ps.setString(1, username);  // username is treated as DATA, not SQL
\`\`\`

### Transaction Management
\`\`\`java
Connection conn = DriverManager.getConnection(url, user, pass);
conn.setAutoCommit(false);   // start manual transaction
try {
    // Transfer Rs.500 from Alice to Bob
    PreparedStatement debit = conn.prepareStatement(
        "UPDATE accounts SET balance = balance - ? WHERE name = ?");
    debit.setDouble(1, 500); debit.setString(2, "Alice"); debit.executeUpdate();

    PreparedStatement credit = conn.prepareStatement(
        "UPDATE accounts SET balance = balance + ? WHERE name = ?");
    credit.setDouble(1, 500); credit.setString(2, "Bob"); credit.executeUpdate();

    conn.commit();    // both succeed — commit
    System.out.println("Transfer successful!");
} catch (SQLException e) {
    conn.rollback();  // one fails — undo everything
    System.out.println("Transfer failed — rolled back: " + e.getMessage());
} finally {
    conn.setAutoCommit(true);
    conn.close();
}
\`\`\``,
        exercises: [
          { title: "Student CRUD", description: "Create a StudentDAO class with methods: insert(Student), findById(int), findAll(), update(Student), delete(int). Use PreparedStatement for all operations." },
          { title: "Transaction Bank", description: "Implement a BankTransfer that moves money between two accounts atomically. Test rollback by deliberately causing an error mid-transfer." },
        ],
      },
      {
        id: 4,
        title: "Java for SDET — Automation Tips",
        content: `## Java for SDET — Test Automation

### Why Java for SDET?
- Most popular language for Selenium WebDriver
- Strong typing catches bugs at compile time
- Rich ecosystem: TestNG, JUnit, Maven, Gradle
- Native JDBC for database testing
- HTTP clients for API testing (RestAssured, HttpClient)

### Page Object Model (POM) — Design Pattern
\`\`\`java
import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    private final WebDriver driver;

    // Element locators using PageFactory
    @FindBy(id = "username")
    private WebElement usernameField;

    @FindBy(id = "password")
    private WebElement passwordField;

    @FindBy(css = "button[type='submit']")
    private WebElement loginButton;

    @FindBy(css = ".error-message")
    private WebElement errorMessage;

    // Constructor initializes PageFactory
    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    // Page actions
    public void enterUsername(String username) {
        usernameField.clear();
        usernameField.sendKeys(username);
    }

    public void enterPassword(String password) {
        passwordField.clear();
        passwordField.sendKeys(password);
    }

    public HomePage clickLogin() {
        loginButton.click();
        return new HomePage(driver);   // return next page
    }

    // Convenience method
    public HomePage login(String user, String pass) {
        enterUsername(user);
        enterPassword(pass);
        return clickLogin();
    }

    public boolean isErrorDisplayed() {
        return errorMessage.isDisplayed();
    }

    public String getErrorMessage() {
        return errorMessage.getText();
    }
}
\`\`\`

### Data-Driven Testing with Java
\`\`\`java
// Reading test data from CSV
public class CsvReader {
    public static List<String[]> readTestData(String filename) throws IOException {
        List<String[]> data = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            br.readLine();  // skip header
            while ((line = br.readLine()) != null) {
                data.add(line.split(","));
            }
        }
        return data;
    }
}

// TestNG Data Provider
@DataProvider(name = "loginData")
public Object[][] getLoginData() throws IOException {
    List<String[]> rows = CsvReader.readTestData("login_data.csv");
    return rows.stream()
               .map(r -> new Object[]{r[0], r[1], r[2]})
               .toArray(Object[][]::new);
}

@Test(dataProvider = "loginData")
public void testLogin(String username, String password, String expected) {
    LoginPage login = new LoginPage(driver);
    login.login(username, password);
    // assert based on expected column
}
\`\`\`

### REST API Testing with HttpClient (Java 11+)
\`\`\`java
import java.net.http.*;
import java.net.URI;

HttpClient client = HttpClient.newHttpClient();

// GET request
HttpRequest getReq = HttpRequest.newBuilder()
    .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
    .header("Accept", "application/json")
    .GET()
    .build();

HttpResponse<String> getResp = client.send(getReq, HttpResponse.BodyHandlers.ofString());
System.out.println("Status: " + getResp.statusCode()); // 200
System.out.println("Body: " + getResp.body());

// POST request
String requestBody = """
        {"title":"SDET Test","body":"Automation","userId":1}""";

HttpRequest postReq = HttpRequest.newBuilder()
    .uri(URI.create("https://jsonplaceholder.typicode.com/posts"))
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
    .build();

HttpResponse<String> postResp = client.send(postReq, HttpResponse.BodyHandlers.ofString());
System.out.println("Created: " + postResp.statusCode()); // 201
\`\`\`

### Assertions in Test Automation
\`\`\`java
// JUnit 5
import static org.junit.jupiter.api.Assertions.*;

assertEquals(200, response.getStatusCode(), "Status should be 200");
assertNotNull(response.getBody(), "Response body should not be null");
assertTrue(response.getBody().contains("Alice"), "Should contain Alice");
assertAll("user assertions",
    () -> assertEquals("Alice", user.getName()),
    () -> assertEquals(25, user.getAge()),
    () -> assertNotNull(user.getEmail())
);

// TestNG
import static org.testng.Assert.*;
assertEquals(actual, expected, "Error message");
assertTrue(condition, "Condition should be true");
\`\`\``,
        exercises: [
          { title: "API Test Client", description: "Use Java HttpClient to make a GET request to 'https://jsonplaceholder.typicode.com/users'. Parse the response and print each user's name and email." },
          { title: "Test Data Generator", description: "Write a TestDataFactory class with static methods: createValidUser(), createUserWithInvalidEmail(), createUserMissingName(). Return them as Map<String,String>." },
        ],
      },
    ],
  },
};
