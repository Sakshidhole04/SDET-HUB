export const javaCourses = {
  core: {
    title: "Java Core",
    icon: "☕",
    color: "#f59e0b",
    subtopics: [
      {
        id: 1,
        title: "Introduction to Java",
        content: `## Introduction to Java

Java is a high-level, object-oriented, platform-independent programming language developed by Sun Microsystems in 1995.

### Why Learn Java?
- Platform independent — **Write Once, Run Anywhere** (WORA)
- Object-Oriented Programming (OOP)
- Strongly typed and compiled
- Huge ecosystem and community
- Used in Android, Web backends, Enterprise, SDET tools

### JDK vs JRE vs JVM
| Component | Full Form | Purpose |
|-----------|-----------|---------|
| JVM | Java Virtual Machine | Runs Java bytecode on any OS |
| JRE | Java Runtime Environment | JVM + libraries to run programs |
| JDK | Java Development Kit | JRE + compiler (javac) to write/compile |

### First Java Program
\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

### Compilation and Run
\`\`\`bash
javac HelloWorld.java
java HelloWorld
\`\`\`

### Java Program Structure
\`\`\`java
package com.medhasphere;

import java.util.Scanner;

public class MyClass {
    public static void main(String[] args) {
        System.out.println("Java is awesome!");
    }
}
\`\`\`

### Key Points
- Java is case-sensitive
- File name must match the public class name
- Every statement ends with a semicolon
- The \`main\` method is the entry point of every Java program`,
        exercises: [
          { title: "Hello World", description: "Write a Java program that prints your name and 'is learning Java!'." },
          { title: "Print Pattern", description: "Print numbers 1 to 5 on separate lines using System.out.println." },
        ],
      },
      {
        id: 2,
        title: "Variables & Data Types",
        content: `## Variables & Data Types

### Primitive Data Types
| Type | Size | Example |
|------|------|---------|
| byte | 1 byte | \`byte b = 100;\` |
| short | 2 bytes | \`short s = 1000;\` |
| int | 4 bytes | \`int i = 42;\` |
| long | 8 bytes | \`long l = 123L;\` |
| float | 4 bytes | \`float f = 3.14f;\` |
| double | 8 bytes | \`double d = 3.14;\` |
| char | 2 bytes | \`char c = 'A';\` |
| boolean | 1 bit | \`boolean b = true;\` |

### Declaring Variables
\`\`\`java
int age = 25;
double salary = 50000.50;
String name = "Sakshi";
boolean isActive = true;
final double PI = 3.14159;  // constant — cannot change
\`\`\`

### Type Casting
\`\`\`java
// Widening — automatic (smaller to larger)
int i = 100;
double d = i;

// Narrowing — manual cast (larger to smaller)
double pi = 3.99;
int x = (int) pi;   // x = 3, decimal is lost
\`\`\`

### String Type
\`\`\`java
String s = "Hello";
s.length()           // 5
s.toUpperCase()      // "HELLO"
s.charAt(1)          // 'e'
s.substring(1, 3)    // "el"
s.contains("ell")    // true
s.replace("l", "r")  // "Herro"
s.trim()             // removes spaces
s.equals("Hello")    // true
s.split(",")         // returns String array
\`\`\`

### var Keyword (Java 10+)
\`\`\`java
var name = "Sakshi";   // inferred as String
var age = 25;          // inferred as int
\`\`\``,
        exercises: [
          { title: "Temperature Converter", description: "Convert Celsius to Fahrenheit. Formula: F = (C x 9/5) + 32" },
          { title: "Swap Variables", description: "Swap two integer variables without using a third variable." },
        ],
      },
      {
        id: 3,
        title: "Operators & Control Flow",
        content: `## Operators & Control Flow

### Arithmetic & Comparison
\`\`\`java
int a = 10, b = 3;
a + b    // 13
a - b    // 7
a * b    // 30
a / b    // 3 (integer division)
a % b    // 1 (remainder / modulo)

a == b   // false
a != b   // true
a > b    // true
a >= b   // true

// Ternary operator
int max = (a > b) ? a : b;
\`\`\`

### if-else
\`\`\`java
int score = 75;

if (score >= 90) {
    System.out.println("A Grade");
} else if (score >= 75) {
    System.out.println("B Grade");
} else if (score >= 60) {
    System.out.println("C Grade");
} else {
    System.out.println("Fail");
}
\`\`\`

### switch (Java 14+ expression)
\`\`\`java
int day = 3;
String name = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    case 4 -> "Thursday";
    case 5 -> "Friday";
    default -> "Weekend";
};
\`\`\`

### Loops
\`\`\`java
// for loop
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}

// while loop
int i = 1;
while (i <= 5) {
    System.out.println(i++);
}

// do-while — always runs at least once
int j = 1;
do {
    System.out.println(j++);
} while (j <= 5);

// for-each
int[] nums = {1, 2, 3, 4, 5};
for (int n : nums) {
    System.out.println(n);
}

// break and continue
for (int k = 1; k <= 10; k++) {
    if (k == 5) continue;   // skip iteration
    if (k == 8) break;      // exit loop
    System.out.println(k);
}
\`\`\``,
        exercises: [
          { title: "Multiplication Table", description: "Print the multiplication table of a given number (1 to 10)." },
          { title: "Prime Number Check", description: "Write a method isPrime(int n) that returns true if n is prime." },
        ],
      },
      {
        id: 4,
        title: "Arrays & Strings",
        content: `## Arrays & Strings

### 1D Arrays
\`\`\`java
int[] arr = {10, 20, 30, 40, 50};
String[] names = {"Alice", "Bob", "Carol"};

arr[0]        // 10 — access by index
arr.length    // 5

// Modify
arr[2] = 99;

// Loop
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
for (int n : arr) System.out.println(n);  // for-each
\`\`\`

### 2D Arrays
\`\`\`java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

matrix[1][2]   // 6

for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
\`\`\`

### Arrays Utility
\`\`\`java
import java.util.Arrays;

int[] nums = {5, 2, 8, 1, 9};
Arrays.sort(nums);                       // [1,2,5,8,9]
System.out.println(Arrays.toString(nums));
Arrays.binarySearch(nums, 5);            // index of 5
Arrays.copyOf(nums, 3);                  // [1,2,5]
\`\`\`

### StringBuilder — Mutable String
\`\`\`java
// String is immutable — each operation creates a new object
String s = "Hello";
s = s + " World";  // new object

// StringBuilder is mutable — efficient for concatenation
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");      // Hello World
sb.insert(5, ",");        // Hello, World
sb.reverse();             // dlroW ,olleH
sb.delete(0, 3);
sb.toString();            // convert back to String

// String.format
String msg = String.format("Name: %s, Age: %d, GPA: %.1f", "Alice", 20, 3.8);
\`\`\``,
        exercises: [
          { title: "Reverse Array", description: "Reverse an integer array in-place without using any library method." },
          { title: "Count Vowels", description: "Count the number of vowels in a given string." },
        ],
      },
      {
        id: 5,
        title: "Methods & Recursion",
        content: `## Methods & Recursion

### Defining & Calling Methods
\`\`\`java
public static int add(int a, int b) {
    return a + b;
}

public static void greet(String name) {
    System.out.println("Hello, " + name);
}

int result = add(5, 3);   // 8
greet("Sakshi");           // Hello, Sakshi
\`\`\`

### Method Overloading
Same name, different parameter list:
\`\`\`java
public static int area(int side) { return side * side; }
public static double area(double r) { return Math.PI * r * r; }
public static int area(int w, int h) { return w * h; }

area(5)       // 25  — square
area(3.0)     // 28.27 — circle
area(4, 6)    // 24  — rectangle
\`\`\`

### Varargs
\`\`\`java
public static int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) total += n;
    return total;
}

sum(1, 2)           // 3
sum(1, 2, 3, 4, 5)  // 15
\`\`\`

### Recursion
A method calling itself with a base case:
\`\`\`java
// Factorial
public static long factorial(int n) {
    if (n == 0 || n == 1) return 1;  // base case
    return n * factorial(n - 1);
}
factorial(5);  // 120

// Fibonacci
public static int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
fib(7);  // 13

// Binary search (recursive)
public static int binarySearch(int[] arr, int target, int lo, int hi) {
    if (lo > hi) return -1;
    int mid = (lo + hi) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target)  return binarySearch(arr, target, mid+1, hi);
    return binarySearch(arr, target, lo, mid-1);
}
\`\`\``,
        exercises: [
          { title: "Power Function", description: "Write a recursive method power(base, exp) that calculates base^exp without using Math.pow." },
          { title: "Palindrome Check", description: "Write a recursive method isPalindrome(String s) that returns true if s reads the same forwards and backwards." },
        ],
      },
    ],
  },
  oop: {
    title: "OOP Concepts",
    icon: "🏗️",
    color: "#8b5cf6",
    subtopics: [
      {
        id: 1,
        title: "Classes & Objects",
        content: `## Classes & Objects

A **class** is a blueprint for creating objects. An **object** is an instance of a class.

### Defining a Class
\`\`\`java
public class Car {
    // Fields
    String brand;
    String color;
    int speed;

    // Constructor
    public Car(String brand, String color) {
        this.brand = brand;
        this.color = color;
        this.speed = 0;
    }

    // Methods
    public void accelerate(int amount) {
        speed += amount;
        System.out.println(brand + " at " + speed + " km/h");
    }

    public void stop() {
        speed = 0;
    }

    public String getInfo() {
        return brand + " (" + color + ") Speed: " + speed;
    }
}
\`\`\`

### Creating & Using Objects
\`\`\`java
Car car1 = new Car("Toyota", "Red");
Car car2 = new Car("BMW", "Black");

car1.accelerate(60);   // Toyota at 60 km/h
car2.accelerate(100);  // BMW at 100 km/h
car1.stop();

System.out.println(car2.getInfo());
\`\`\`

### The \`this\` Keyword
Refers to the current object instance:
\`\`\`java
public Car(String brand, String color) {
    this.brand = brand;   // field = parameter
    this.color = color;
}
\`\`\`

### Constructors
\`\`\`java
public class Person {
    String name;
    int age;

    public Person() { this("Unknown", 0); }            // default
    public Person(String name) { this(name, 0); }      // chained
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
\`\`\``,
        exercises: [
          { title: "Bank Account", description: "Create a BankAccount class with owner, balance. Methods: deposit(amount), withdraw(amount), getBalance()." },
          { title: "Rectangle", description: "Create Rectangle with width, height. Methods: area(), perimeter(), isSquare()." },
        ],
      },
      {
        id: 2,
        title: "Encapsulation",
        content: `## Encapsulation

Encapsulation = hiding internal data, exposing controlled access via getters/setters.

### Access Modifiers
| Modifier | Same Class | Same Package | Subclass | Everywhere |
|----------|-----------|--------------|----------|------------|
| public | Yes | Yes | Yes | Yes |
| protected | Yes | Yes | Yes | No |
| (default) | Yes | Yes | No | No |
| private | Yes | No | No | No |

### Encapsulated Class Example
\`\`\`java
public class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double initialBalance) {
        this.owner = owner;
        this.balance = initialBalance >= 0 ? initialBalance : 0;
    }

    // Getters
    public String getOwner()   { return owner; }
    public double getBalance() { return balance; }

    // Controlled operations
    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }

    @Override
    public String toString() {
        return owner + ": $" + String.format("%.2f", balance);
    }
}
\`\`\`

### Usage
\`\`\`java
BankAccount acc = new BankAccount("Alice", 1000);
acc.deposit(500);
boolean ok = acc.withdraw(200);
System.out.println(acc);       // Alice: $1300.00
// acc.balance = 9999;  -- Compile error! private
\`\`\``,
        exercises: [
          { title: "Employee Class", description: "Create Employee with private: id, name, salary. Add getters and setSalary() that rejects negative values." },
        ],
      },
      {
        id: 3,
        title: "Inheritance",
        content: `## Inheritance

A child class **extends** a parent — inheriting its fields and methods.

\`\`\`java
// Parent
public class Animal {
    protected String name;

    public Animal(String name) { this.name = name; }

    public void eat() {
        System.out.println(name + " is eating");
    }

    public String describe() { return "Animal: " + name; }
}

// Child
public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name);   // call parent constructor
        this.breed = breed;
    }

    public void bark() {
        System.out.println(name + ": Woof!");
    }

    @Override
    public String describe() {
        return super.describe() + ", Breed: " + breed;
    }
}

// Grandchild
public class GoldenRetriever extends Dog {
    public GoldenRetriever(String name) {
        super(name, "Golden Retriever");
    }

    @Override
    public void bark() {
        System.out.println(name + ": Gentle woof!");
    }
}
\`\`\`

### Using Inheritance
\`\`\`java
Dog d = new Dog("Rex", "Labrador");
d.eat();          // from Animal
d.bark();         // from Dog
d.describe();     // overridden

// Polymorphic reference
Animal a = new Dog("Max", "Poodle");
a.describe();     // calls Dog's version
\`\`\`

### instanceof
\`\`\`java
d instanceof Dog     // true
d instanceof Animal  // true
d instanceof Cat     // false
\`\`\``,
        exercises: [
          { title: "Vehicle Hierarchy", description: "Create Vehicle with brand, speed. Car extends Vehicle (add doors). Bike extends Vehicle (add hasSidecar). Override describe() in each." },
        ],
      },
      {
        id: 4,
        title: "Polymorphism & Abstraction",
        content: `## Polymorphism & Abstraction

### Polymorphism — same interface, different behavior
\`\`\`java
public abstract class Shape {
    public abstract double area();
    public abstract double perimeter();

    public void print() {
        System.out.println("Area: " + area() + ", Perimeter: " + perimeter());
    }
}

public class Circle extends Shape {
    double radius;
    Circle(double r) { this.radius = r; }
    public double area()      { return Math.PI * radius * radius; }
    public double perimeter() { return 2 * Math.PI * radius; }
}

public class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    public double area()      { return w * h; }
    public double perimeter() { return 2 * (w + h); }
}
\`\`\`

### Polymorphic Array
\`\`\`java
Shape[] shapes = { new Circle(5), new Rectangle(4, 6) };
for (Shape s : shapes) {
    s.print();   // calls correct version at runtime
}
\`\`\`

### Interfaces
\`\`\`java
public interface Printable {
    void print();                       // abstract
    default void printTwice() {         // default (Java 8+)
        print();
        print();
    }
}

public interface Saveable {
    void save(String filename);
}

// Multiple interfaces allowed
public class Report implements Printable, Saveable {
    public void print()               { System.out.println("Printing report"); }
    public void save(String filename) { System.out.println("Saving to " + filename); }
}
\`\`\`

### Abstract Class vs Interface
| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Object state | Yes (fields) | No (constants only) |
| Constructor | Yes | No |
| Multiple inheritance | No | Yes |
| Best for | "Is-a" with shared state | "Can-do" capabilities |`,
        exercises: [
          { title: "Payment Interface", description: "Create interface Payment with pay(double) and refund(double). Implement CreditCard, UPI, Cash." },
        ],
      },
      {
        id: 5,
        title: "Design Patterns",
        content: `## Design Patterns

### Singleton — one instance only
\`\`\`java
public class Config {
    private static Config instance;
    private String dbUrl = "jdbc:mysql://localhost/db";

    private Config() {}

    public static Config getInstance() {
        if (instance == null) {
            instance = new Config();
        }
        return instance;
    }

    public String getDbUrl() { return dbUrl; }
}

Config c1 = Config.getInstance();
Config c2 = Config.getInstance();
// c1 == c2 is true
\`\`\`

### Builder — step-by-step object construction
\`\`\`java
public class HttpRequest {
    private final String url;
    private final String method;
    private final int timeout;

    private HttpRequest(Builder b) {
        this.url     = b.url;
        this.method  = b.method;
        this.timeout = b.timeout;
    }

    public static class Builder {
        private String url;
        private String method = "GET";
        private int timeout = 30;

        public Builder url(String u)      { this.url = u; return this; }
        public Builder method(String m)   { this.method = m; return this; }
        public Builder timeout(int t)     { this.timeout = t; return this; }
        public HttpRequest build()        { return new HttpRequest(this); }
    }
}

HttpRequest req = new HttpRequest.Builder()
    .url("https://api.example.com")
    .method("POST")
    .timeout(60)
    .build();
\`\`\`

### Factory — create objects without exposing logic
\`\`\`java
interface Browser { void open(String url); }
class Chrome  implements Browser { public void open(String url) { System.out.println("Chrome: " + url); } }
class Firefox implements Browser { public void open(String url) { System.out.println("Firefox: " + url); } }

class BrowserFactory {
    public static Browser create(String type) {
        return switch (type.toLowerCase()) {
            case "chrome"  -> new Chrome();
            case "firefox" -> new Firefox();
            default -> throw new IllegalArgumentException("Unknown browser: " + type);
        };
    }
}

Browser b = BrowserFactory.create("chrome");
b.open("https://medhasphere.netlify.app");
\`\`\`

### Page Object — for SDET test automation
\`\`\`java
public class LoginPage {
    private WebDriver driver;
    private By userField = By.id("username");
    private By passField = By.id("password");
    private By loginBtn  = By.id("loginBtn");

    public LoginPage(WebDriver driver) { this.driver = driver; }

    public HomePage login(String user, String pass) {
        driver.findElement(userField).sendKeys(user);
        driver.findElement(passField).sendKeys(pass);
        driver.findElement(loginBtn).click();
        return new HomePage(driver);
    }
}
\`\`\``,
        exercises: [
          { title: "Singleton Logger", description: "Implement a Logger singleton with log(String msg) that stores messages in a list and printAll() to print them." },
          { title: "Shape Factory", description: "Write ShapeFactory.create(String type) that returns Circle, Rectangle, or Triangle." },
        ],
      },
    ],
  },
  collections: {
    title: "Collections & Generics",
    icon: "📦",
    color: "#0ea5e9",
    subtopics: [
      {
        id: 1,
        title: "ArrayList & LinkedList",
        content: `## ArrayList & LinkedList

### ArrayList — Dynamic Array
Fast random access. Slow insert/delete at middle.
\`\`\`java
import java.util.ArrayList;
import java.util.Collections;

ArrayList<String> list = new ArrayList<>();

list.add("Alice");
list.add("Bob");
list.add("Carol");
list.add(1, "Dave");    // insert at index 1 -> [Alice, Dave, Bob, Carol]

list.get(0);            // "Alice"
list.size();            // 4
list.contains("Bob");   // true
list.indexOf("Carol");  // 2
list.set(0, "Alicia");  // replace index 0

list.remove("Bob");     // by value
list.remove(0);         // by index

Collections.sort(list);
Collections.reverse(list);

// Convert to array
String[] arr = list.toArray(new String[0]);
\`\`\`

### LinkedList
Fast insert/delete. Slower random access.
\`\`\`java
LinkedList<Integer> ll = new LinkedList<>();
ll.add(10);  ll.add(20);
ll.addFirst(5);    // [5, 10, 20]
ll.addLast(30);    // [5, 10, 20, 30]

ll.getFirst();     // 5
ll.getLast();      // 30
ll.removeFirst();  // 5
ll.removeLast();   // 30
\`\`\`

### Use as Stack and Queue
\`\`\`java
// Stack (LIFO)
LinkedList<String> stack = new LinkedList<>();
stack.push("first"); stack.push("second"); stack.push("third");
stack.pop();   // "third"
stack.peek();  // "second" without removing

// Queue (FIFO)
LinkedList<String> queue = new LinkedList<>();
queue.offer("a"); queue.offer("b"); queue.offer("c");
queue.poll();   // "a"
queue.peek();   // "b" without removing
\`\`\``,
        exercises: [
          { title: "Student List Manager", description: "Use ArrayList to add student names, remove by name, and print the list sorted alphabetically." },
        ],
      },
      {
        id: 2,
        title: "HashMap & HashSet",
        content: `## HashMap & HashSet

### HashMap — Key-Value Storage
O(1) average for get, put, remove.
\`\`\`java
import java.util.HashMap;

HashMap<String, Integer> scores = new HashMap<>();

// Add / Update
scores.put("Alice", 95);
scores.put("Bob",   80);
scores.put("Carol", 92);
scores.put("Alice", 98);   // overwrites 95

// Read
scores.get("Alice");              // 98
scores.getOrDefault("Dave", 0);   // 0 (key not found)
scores.containsKey("Bob");        // true
scores.size();                    // 3

// Remove
scores.remove("Bob");

// Iterate
for (var entry : scores.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue());
}

// Keys or values only
scores.keySet().forEach(System.out::println);
scores.values().stream().mapToInt(Integer::intValue).average();
\`\`\`

### HashSet — Unique Elements
\`\`\`java
import java.util.HashSet;

HashSet<String> fruits = new HashSet<>();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple");    // ignored — duplicate

fruits.size();               // 2
fruits.contains("apple");    // true
fruits.remove("banana");

// Set operations on two sets
var a = new HashSet<>(List.of(1,2,3,4));
var b = new HashSet<>(List.of(3,4,5,6));

var union = new HashSet<>(a); union.addAll(b);      // {1,2,3,4,5,6}
var inter = new HashSet<>(a); inter.retainAll(b);   // {3,4}
var diff  = new HashSet<>(a); diff.removeAll(b);    // {1,2}
\`\`\`

### Sorted & Ordered Maps
\`\`\`java
// TreeMap — sorted by key (natural order)
TreeMap<String, Integer> tree = new TreeMap<>();
tree.put("Banana", 2); tree.put("Apple", 1); tree.put("Cherry", 3);
// Apple=1, Banana=2, Cherry=3 (alphabetical)

// LinkedHashMap — insertion order preserved
LinkedHashMap<String, Integer> lhm = new LinkedHashMap<>();
lhm.put("First", 1); lhm.put("Third", 3); lhm.put("Second", 2);
// First=1, Third=3, Second=2
\`\`\``,
        exercises: [
          { title: "Word Frequency Counter", description: "Count how many times each word appears in a sentence using HashMap." },
          { title: "Find Duplicates", description: "Given a list of integers, use HashSet to find all duplicate values." },
        ],
      },
      {
        id: 3,
        title: "Generics",
        content: `## Generics

Generics enable type-safe, reusable code.

### Why Use Generics?
\`\`\`java
// Without generics — unsafe cast
List list = new ArrayList();
list.add("hello");
String s = (String) list.get(0);  // might throw ClassCastException

// With generics — compile-time safety
List<String> safeList = new ArrayList<>();
safeList.add("hello");
// safeList.add(42);   -- compile error!
String s = safeList.get(0);       // no cast needed
\`\`\`

### Generic Class
\`\`\`java
public class Box<T> {
    private T value;

    public Box(T value) { this.value = value; }
    public T get()      { return value; }
    public void set(T v){ this.value = v; }

    @Override
    public String toString() { return "Box[" + value + "]"; }
}

Box<String>  strBox = new Box<>("Hello");
Box<Integer> intBox = new Box<>(42);
\`\`\`

### Generic Method
\`\`\`java
// Works with any Comparable type
public static <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

max(10, 20);           // 20
max("apple", "mango"); // "mango"
max(3.14, 2.71);       // 3.14
\`\`\`

### Bounded Types
\`\`\`java
// Only Number and its subclasses (Integer, Double, Float...)
public static <T extends Number> double sum(List<T> nums) {
    return nums.stream().mapToDouble(Number::doubleValue).sum();
}

sum(List.of(1, 2, 3));         // 6.0
sum(List.of(1.5, 2.5));        // 4.0
// sum(List.of("a","b"));      -- compile error!
\`\`\`

### Wildcards
\`\`\`java
void printAny(List<?> list) { list.forEach(System.out::println); }

// Upper bound — read-only
double sumNums(List<? extends Number> nums) {
    return nums.stream().mapToDouble(Number::doubleValue).sum();
}

// Lower bound — write-safe
void fillInts(List<? super Integer> list) { list.add(1); list.add(2); }
\`\`\``,
        exercises: [
          { title: "Generic Stack", description: "Implement Stack<T> with push(T), pop(), peek(), isEmpty(), and size()." },
        ],
      },
      {
        id: 4,
        title: "Streams & Lambdas",
        content: `## Streams & Lambdas (Java 8+)

### Lambda Basics
\`\`\`java
// Anonymous class (old)
Runnable r = new Runnable() {
    public void run() { System.out.println("Hello"); }
};

// Lambda (new)
Runnable r = () -> System.out.println("Hello");

// With params
Comparator<Integer> asc = (a, b) -> a - b;
Comparator<Integer> desc = (a, b) -> b - a;
\`\`\`

### Method References
\`\`\`java
List<String> names = List.of("Alice", "Bob", "Carol");

names.forEach(System.out::println);           // instance method ref
names.stream().map(String::toUpperCase)...    // instance method ref
names.stream().map(String::new)...            // constructor ref
\`\`\`

### Stream Pipeline
\`\`\`java
List<Integer> nums = List.of(1,2,3,4,5,6,7,8,9,10);

// filter, map, collect
List<Integer> evenSquares = nums.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .collect(Collectors.toList());  // [4, 16, 36, 64, 100]

// reduce
int sum  = nums.stream().reduce(0, Integer::sum);   // 55
int prod = nums.stream().reduce(1, (a,b) -> a*b);   // 3628800

// statistics
IntSummaryStatistics stats = nums.stream()
    .mapToInt(Integer::intValue).summaryStatistics();
stats.getSum(); stats.getAverage(); stats.getMax();

// groupingBy
Map<Boolean, List<Integer>> groups = nums.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0));
\`\`\`

### Optional — null-safe container
\`\`\`java
Optional<String> name = Optional.of("Alice");
name.get()                             // "Alice"
name.isPresent()                       // true
name.map(String::toUpperCase).get()    // "ALICE"
name.orElse("unknown")                // "Alice"

Optional<String> empty = Optional.empty();
empty.orElse("nobody")                // "nobody"
empty.orElseGet(() -> fetchDefault()) // lazy default
empty.orElseThrow()                   // throws NoSuchElementException
\`\`\``,
        exercises: [
          { title: "High-Earner Filter", description: "Given a list of Employee records with name and salary, use streams to return names of employees earning over 50000, sorted alphabetically." },
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
        title: "Exception Handling",
        content: `## Exception Handling

### Exception Hierarchy
\`\`\`
Throwable
 ├── Error (JVM-level, don't catch: OutOfMemoryError, StackOverflowError)
 └── Exception
      ├── Checked  (must declare/handle: IOException, SQLException)
      └── RuntimeException (unchecked: NullPointerException, ArrayIndexOutOfBoundsException)
\`\`\`

### try-catch-finally
\`\`\`java
try {
    int result = 10 / 0;   // throws ArithmeticException
    String s = null;
    s.length();            // throws NullPointerException
} catch (ArithmeticException e) {
    System.out.println("Math error: " + e.getMessage());
} catch (NullPointerException e) {
    System.out.println("Null: " + e.getMessage());
} catch (Exception e) {
    System.out.println("Other: " + e.getMessage());
} finally {
    System.out.println("Cleanup always runs here");
}
\`\`\`

### throw and throws
\`\`\`java
// throw — manually raise an exception
public static void checkAge(int age) {
    if (age < 0 || age > 150)
        throw new IllegalArgumentException("Invalid age: " + age);
}

// throws — declare checked exceptions for callers to handle
public static String readFile(String path) throws IOException {
    return Files.readString(Path.of(path));
}
\`\`\`

### Custom Exception
\`\`\`java
public class InsufficientFundsException extends Exception {
    private final double shortfall;

    public InsufficientFundsException(double shortfall) {
        super("Need Rs." + shortfall + " more");
        this.shortfall = shortfall;
    }

    public double getShortfall() { return shortfall; }
}

public void withdraw(double amount) throws InsufficientFundsException {
    if (amount > balance)
        throw new InsufficientFundsException(amount - balance);
    balance -= amount;
}
\`\`\`

### try-with-resources
Automatically closes resources that implement \`AutoCloseable\`:
\`\`\`java
// Resource closed automatically after the block
try (var br = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = br.readLine()) != null)
        System.out.println(line);
}

// Multiple resources
try (var conn = DriverManager.getConnection(url, user, pass);
     var ps   = conn.prepareStatement("SELECT * FROM users")) {
    var rs = ps.executeQuery();
    while (rs.next()) System.out.println(rs.getString("name"));
}
\`\`\``,
        exercises: [
          { title: "Custom Exception", description: "Create InvalidPasswordException. Throw it when a password is shorter than 8 characters or has no digits. Catch it in main and print the reason." },
        ],
      },
      {
        id: 2,
        title: "Multithreading",
        content: `## Multithreading

### Creating Threads
\`\`\`java
// 1. Extend Thread
class Counter extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++)
            System.out.println(getName() + ": " + i);
    }
}
new Counter().start();

// 2. Implement Runnable (preferred — allows extending another class)
new Thread(() -> {
    System.out.println("Running in: " + Thread.currentThread().getName());
}).start();
\`\`\`

### Thread Lifecycle
\`\`\`
NEW -> start() -> RUNNABLE -> (scheduled) -> RUNNING
   -> sleep/wait -> TIMED_WAITING / WAITING
   -> TERMINATED
\`\`\`

### Synchronization — Preventing Race Conditions
\`\`\`java
class SafeCounter {
    private int count = 0;

    public synchronized void increment() { count++; }
    public int getCount()               { return count; }
}

SafeCounter c = new SafeCounter();
Thread t1 = new Thread(() -> { for(int i=0;i<10000;i++) c.increment(); });
Thread t2 = new Thread(() -> { for(int i=0;i<10000;i++) c.increment(); });
t1.start(); t2.start();
t1.join();  t2.join();
System.out.println(c.getCount());  // always 20000
\`\`\`

### ExecutorService — Thread Pool
\`\`\`java
ExecutorService pool = Executors.newFixedThreadPool(4);

List<Future<Integer>> futures = new ArrayList<>();
for (int i = 0; i < 10; i++) {
    final int task = i;
    futures.add(pool.submit(() -> task * task));  // returns squared
}

for (Future<Integer> f : futures)
    System.out.println(f.get());  // 0, 1, 4, 9, 16...

pool.shutdown();
\`\`\`

### Atomic Classes (no synchronized needed)
\`\`\`java
import java.util.concurrent.atomic.AtomicInteger;

AtomicInteger atomicCount = new AtomicInteger(0);
atomicCount.incrementAndGet();
atomicCount.addAndGet(5);
atomicCount.get();   // thread-safe, no synchronized
\`\`\``,
        exercises: [
          { title: "Parallel Sum", description: "Split an array in half, compute the sum of each half on a separate thread, and add the results." },
        ],
      },
      {
        id: 3,
        title: "File I/O",
        content: `## File I/O (java.io & java.nio)

### Read Files
\`\`\`java
import java.nio.file.*;
import java.io.*;

// All lines as List<String>
List<String> lines = Files.readAllLines(Path.of("data.txt"));

// Whole file as String
String content = Files.readString(Path.of("data.txt"));

// Line by line — memory efficient for large files
try (var br = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = br.readLine()) != null)
        System.out.println(line);
}

// Stream lines (lazy evaluation)
try (Stream<String> stream = Files.lines(Path.of("big.txt"))) {
    stream.filter(l -> l.contains("ERROR")).forEach(System.out::println);
}
\`\`\`

### Write Files
\`\`\`java
// Write string
Files.writeString(Path.of("out.txt"), "Hello!");

// Write lines
Files.write(Path.of("out.txt"), List.of("Line 1", "Line 2", "Line 3"));

// Append
try (var bw = new BufferedWriter(new FileWriter("log.txt", true))) {
    bw.write("New log entry");
    bw.newLine();
}

// Write with options
Files.writeString(Path.of("out.txt"), "Content",
    StandardOpenOption.CREATE, StandardOpenOption.APPEND);
\`\`\`

### File & Directory Operations
\`\`\`java
Path path = Path.of("data", "report.txt");

Files.exists(path);
Files.createFile(path);
Files.createDirectories(path.getParent());
Files.delete(path);
Files.copy(path, Path.of("backup.txt"));
Files.move(path, Path.of("archive/report.txt"));
Files.size(path);     // bytes

// List directory
try (Stream<Path> files = Files.list(Path.of("."))) {
    files.forEach(System.out::println);
}
\`\`\``,
        exercises: [
          { title: "CSV Reader", description: "Read a CSV file with name,age,score columns. Calculate and print the average score." },
        ],
      },
      {
        id: 4,
        title: "JDBC & Database",
        content: `## JDBC — Java Database Connectivity

### Connecting to a Database
\`\`\`java
import java.sql.*;

String url  = "jdbc:mysql://localhost:3306/mydb";
String user = "root";
String pass = "password";

Connection con = DriverManager.getConnection(url, user, pass);
System.out.println("Connected: " + !con.isClosed());
\`\`\`

### CRUD with PreparedStatement
Always use PreparedStatement to prevent SQL injection!
\`\`\`java
// CREATE table
con.createStatement().execute(
    "CREATE TABLE IF NOT EXISTS students " +
    "(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), grade CHAR(1))");

// INSERT
PreparedStatement ins = con.prepareStatement(
    "INSERT INTO students (name, grade) VALUES (?, ?)");
ins.setString(1, "Alice");
ins.setString(2, "A");
ins.executeUpdate();

// SELECT
PreparedStatement sel = con.prepareStatement(
    "SELECT * FROM students WHERE grade = ?");
sel.setString(1, "A");
ResultSet rs = sel.executeQuery();
while (rs.next()) {
    System.out.printf("%-5d %-20s %s%n",
        rs.getInt("id"), rs.getString("name"), rs.getString("grade"));
}

// UPDATE
PreparedStatement upd = con.prepareStatement(
    "UPDATE students SET grade = ? WHERE name = ?");
upd.setString(1, "A+");
upd.setString(2, "Alice");
upd.executeUpdate();

// DELETE
PreparedStatement del = con.prepareStatement(
    "DELETE FROM students WHERE name = ?");
del.setString(1, "Alice");
del.executeUpdate();
\`\`\`

### try-with-resources + Transactions
\`\`\`java
// Auto-close
try (Connection con = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = con.prepareStatement("SELECT * FROM students")) {
    ResultSet rs = ps.executeQuery();
    while (rs.next()) System.out.println(rs.getString("name"));
}

// Transaction — all or nothing
con.setAutoCommit(false);
try {
    debit(con, "Alice", 500);
    credit(con, "Bob", 500);
    con.commit();
} catch (Exception e) {
    con.rollback();  // undo both operations
    throw e;
}
\`\`\``,
        exercises: [
          { title: "Student CRUD App", description: "Write a Java class that creates a students table and provides methods insert(name, grade), findAll(), and deleteByName(name) using JDBC PreparedStatement." },
        ],
      },
      {
        id: 5,
        title: "Modern Java (Java 8–21)",
        content: `## Modern Java Features

### Records (Java 16) — immutable data carriers
\`\`\`java
record Employee(String name, double salary) {}

var e = new Employee("Alice", 75000);
e.name();     // "Alice"
e.salary();   // 75000.0
e.toString(); // Employee[name=Alice, salary=75000.0]
\`\`\`

### Sealed Classes (Java 17)
\`\`\`java
sealed interface Result<T> permits Success, Failure {}
record Success<T>(T value) implements Result<T> {}
record Failure<T>(String error) implements Result<T> {}

Result<Integer> r = new Success<>(42);
if (r instanceof Success<Integer> s) System.out.println(s.value());
\`\`\`

### Pattern Matching (Java 16+)
\`\`\`java
// instanceof with binding
Object obj = "Hello World";
if (obj instanceof String s && s.length() > 5) {
    System.out.println(s.toUpperCase());
}

// Switch patterns (Java 21)
String describe(Object o) {
    return switch (o) {
        case Integer i -> "int: " + i;
        case String s  -> "str: " + s;
        case null      -> "null";
        default        -> "other: " + o;
    };
}
\`\`\`

### Text Blocks (Java 15)
\`\`\`java
String sql = """
        SELECT id, name, salary
        FROM employees
        WHERE salary > 50000
        ORDER BY name;
        """;

String json = """
        {
            "name": "Alice",
            "role": "SDET"
        }
        """;
\`\`\`

### Virtual Threads (Java 21 — Project Loom)
\`\`\`java
// Millions of lightweight threads
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 100_000; i++) {
        executor.submit(() -> doWork());
    }
}
\`\`\`

### CompletableFuture (Java 8)
\`\`\`java
CompletableFuture.supplyAsync(() -> fetchUser(id))
    .thenApply(user  -> enrichWithOrders(user))
    .thenAccept(user -> sendEmail(user))
    .exceptionally(ex -> { log(ex); return null; });
\`\`\``,
        exercises: [
          { title: "Records + Streams", description: "Create record Product(String name, double price, String category). Filter electronics over 500, sort by price, collect names as List." },
          { title: "CompletableFuture", description: "Use CompletableFuture to fetch two URLs in parallel (simulate with Thread.sleep) and combine results." },
        ],
      },
    ],
  },
};
