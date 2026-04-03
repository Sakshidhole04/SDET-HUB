// ──────────────────────────────────────────────
//  PRACTICE EDITOR DATA
//  4 tracks: JavaScript, Selenium, API, Playwright
// ──────────────────────────────────────────────

export const tracks = [
  // ════════════════════════════════════════════
  //  TRACK 1 — JavaScript / Core
  // ════════════════════════════════════════════
  {
    id: 'js',
    label: '🟨 JavaScript',
    color: '#f59e0b',
    lang: 'javascript',
    challenges: [
      {
        id: 1, title: 'Reverse a String', difficulty: 'Easy',
        theory: `## Reverse a String
Strings in JavaScript are immutable. To reverse one:
1. \`split('')\` — convert to array of chars
2. \`reverse()\` — reverse the array in-place
3. \`join('')\` — merge back to string

\`\`\`js
"hello".split('')           // ['h','e','l','l','o']
       .reverse()           // ['o','l','l','e','h']
       .join('')            // "olleh"
\`\`\``,
        starter: `function reverseString(str) {
  // Write your code here

}

console.log(reverseString("hello"));       // "olleh"
console.log(reverseString("automation"));  // "noitamotua"
console.log(reverseString("sdet"));        // "teds"`,
        hint: '💡 Use .split("").reverse().join("")',
        solution: `function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"));       // "olleh"
console.log(reverseString("automation"));  // "noitamotua"
console.log(reverseString("sdet"));        // "teds"`,
      },
      {
        id: 2, title: 'Find Duplicates in Array', difficulty: 'Easy',
        theory: `## Find Duplicates in Array
Use a **Set** to track seen values. If a value was already added to the Set, it's a duplicate.

\`\`\`js
const seen = new Set();
for (const val of arr) {
  if (seen.has(val)) console.log("Duplicate:", val);
  else seen.add(val);
}
\`\`\``,
        starter: `function findDuplicates(arr) {
  // Return array of duplicate values

}

console.log(findDuplicates([1, 2, 3, 2, 4, 3]));  // [2, 3]
console.log(findDuplicates([5, 5, 5, 1, 2]));      // [5]
console.log(findDuplicates([1, 2, 3]));            // []`,
        hint: '💡 Use two Sets: one for "seen", one for "duplicates".',
        solution: `function findDuplicates(arr) {
  const seen = new Set(), dupes = new Set();
  for (const v of arr) seen.has(v) ? dupes.add(v) : seen.add(v);
  return [...dupes];
}
console.log(findDuplicates([1, 2, 3, 2, 4, 3]));  // [2, 3]
console.log(findDuplicates([5, 5, 5, 1, 2]));      // [5]
console.log(findDuplicates([1, 2, 3]));            // []`,
      },
      {
        id: 3, title: 'FizzBuzz', difficulty: 'Easy',
        theory: `## FizzBuzz
Classic programming challenge:
- Divisible by 3 → print **"Fizz"**
- Divisible by 5 → print **"Buzz"**
- Divisible by both → print **"FizzBuzz"**
- Otherwise → print the number

**Tip:** Check 15 (both) first, otherwise the earlier checks will catch it.`,
        starter: `function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Write your if/else logic here

  }
}

fizzBuzz(20);`,
        hint: '💡 Order matters: check % 15 first, then % 3, then % 5.',
        solution: `function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
fizzBuzz(20);`,
      },
      {
        id: 4, title: 'Fibonacci Sequence', difficulty: 'Medium',
        theory: `## Fibonacci Sequence
Each number is the sum of the two before it:
\`0, 1, 1, 2, 3, 5, 8, 13, 21, ...\`

**Iterative approach (efficient):**
\`\`\`js
let a = 0, b = 1;
for (let i = 0; i < n; i++) {
  [a, b] = [b, a + b];
}
\`\`\``,
        starter: `function fibonacci(n) {
  // Return the nth Fibonacci number (0-indexed)
  // fibonacci(0) = 0, fibonacci(6) = 8

}

console.log(fibonacci(0));   // 0
console.log(fibonacci(1));   // 1
console.log(fibonacci(6));   // 8
console.log(fibonacci(10));  // 55`,
        hint: '💡 Use two variables a=0, b=1. Swap them in a loop.',
        solution: `function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}
console.log(fibonacci(0));   // 0
console.log(fibonacci(1));   // 1
console.log(fibonacci(6));   // 8
console.log(fibonacci(10));  // 55`,
      },
      {
        id: 5, title: 'Group By Category', difficulty: 'Medium',
        theory: `## Group Array of Objects by Property
Use \`reduce()\` to group items into buckets:
\`\`\`js
arr.reduce((acc, item) => {
  const key = item.category;
  if (!acc[key]) acc[key] = [];
  acc[key].push(item);
  return acc;
}, {});
\`\`\`
Very useful for organizing test results by module/status!`,
        starter: `function groupBy(arr, key) {
  // Group the array by the given key property

}

const tests = [
  { name: "loginTest",  status: "pass", module: "Auth" },
  { name: "logoutTest", status: "fail", module: "Auth" },
  { name: "searchTest", status: "pass", module: "Search" },
  { name: "filterTest", status: "pass", module: "Search" },
];

console.log(JSON.stringify(groupBy(tests, "module"), null, 2));`,
        hint: '💡 Use arr.reduce() with an empty object {} as starting accumulator.',
        solution: `function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key];
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}
const tests = [
  { name: "loginTest",  status: "pass", module: "Auth" },
  { name: "logoutTest", status: "fail", module: "Auth" },
  { name: "searchTest", status: "pass", module: "Search" },
  { name: "filterTest", status: "pass", module: "Search" },
];
console.log(JSON.stringify(groupBy(tests, "module"), null, 2));`,
      },
    ],
  },

  // ════════════════════════════════════════════
  //  TRACK 2 — Selenium Automation
  // ════════════════════════════════════════════
  {
    id: 'selenium',
    label: '🟩 Selenium',
    color: '#22c55e',
    lang: 'java',
    challenges: [
      {
        id: 1, title: 'Launch Browser & Open URL', difficulty: 'Beginner',
        theory: `## Launch Browser & Open URL

### Setup
\`\`\`java
// Maven dependency
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-java</artifactId>
  <version>4.18.1</version>
</dependency>
\`\`\`

### Launch Chrome
\`\`\`java
WebDriver driver = new ChromeDriver();
driver.manage().window().maximize();
driver.get("https://www.google.com");
System.out.println("Title: " + driver.getTitle());
driver.quit();
\`\`\`

### Key methods
| Method | Purpose |
|--------|---------|
| \`driver.get(url)\` | Open URL |
| \`driver.getTitle()\` | Get page title |
| \`driver.getCurrentUrl()\` | Get current URL |
| \`driver.quit()\` | Close all windows |
| \`driver.close()\` | Close current window |`,
        starter: `// TASK: Write Selenium Java code to:
// 1. Launch Chrome browser
// 2. Open https://www.saucedemo.com
// 3. Print the page title
// 4. Quit the browser

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LaunchBrowser {
  public static void main(String[] args) {
    
    // 1. Create ChromeDriver instance
    
    
    // 2. Open the URL
    
    
    // 3. Print title
    
    
    // 4. Quit browser
    
  }
}`,
        hint: '💡 new ChromeDriver() → driver.get(url) → driver.getTitle() → driver.quit()',
        solution: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LaunchBrowser {
  public static void main(String[] args) {
    
    // 1. Create ChromeDriver instance
    WebDriver driver = new ChromeDriver();
    driver.manage().window().maximize();
    
    // 2. Open the URL
    driver.get("https://www.saucedemo.com");
    
    // 3. Print title
    System.out.println("Title: " + driver.getTitle());
    // Expected: "Swag Labs"
    
    // 4. Quit browser
    driver.quit();
  }
}`,
      },
      {
        id: 2, title: 'Find Elements & Click', difficulty: 'Beginner',
        theory: `## Finding Elements with Locators

### Locator Types
\`\`\`java
// By ID (fastest, preferred)
driver.findElement(By.id("username"));

// By CSS Selector (flexible)
driver.findElement(By.cssSelector(".login-button"));
driver.findElement(By.cssSelector("input[name='password']"));

// By XPath
driver.findElement(By.xpath("//button[@type='submit']"));
driver.findElement(By.xpath("//h3[text()='Login']"));

// By Name
driver.findElement(By.name("username"));
\`\`\`

### Common Actions
\`\`\`java
element.click();                    // click
element.sendKeys("standard_user"); // type text
element.clear();                    // clear field
element.getText();                  // read text
element.isDisplayed();              // check visible
element.isEnabled();                // check enabled
\`\`\``,
        starter: `// TASK: Log in to https://www.saucedemo.com
// Username: standard_user
// Password: secret_sauce
// After login, print the page title

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {
  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("https://www.saucedemo.com");
    
    // Find username field and type
    
    
    // Find password field and type
    
    
    // Click Login button
    
    
    // Print current URL (should contain /inventory)
    System.out.println(driver.getCurrentUrl());
    
    driver.quit();
  }
}`,
        hint: '💡 Use By.id("user-name"), By.id("password"), By.id("login-button")',
        solution: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {
  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("https://www.saucedemo.com");
    
    // Find username field and type
    driver.findElement(By.id("user-name")).sendKeys("standard_user");
    
    // Find password field and type
    driver.findElement(By.id("password")).sendKeys("secret_sauce");
    
    // Click Login button
    driver.findElement(By.id("login-button")).click();
    
    // Print current URL (should contain /inventory)
    System.out.println(driver.getCurrentUrl());
    // Expected: https://www.saucedemo.com/inventory.html
    
    driver.quit();
  }
}`,
      },
      {
        id: 3, title: 'Explicit Wait', difficulty: 'Intermediate',
        theory: `## Waits in Selenium

### Why Waits?
Web pages load asynchronously. Elements may not be ready when your script reaches them.

### ❌ Don't use Thread.sleep()
\`\`\`java
Thread.sleep(3000); // Bad! Wastes time, brittle
\`\`\`

### ✅ Use Explicit Wait
\`\`\`java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

// Wait until element is visible
WebElement el = wait.until(
  ExpectedConditions.visibilityOfElementLocated(By.id("myId"))
);

// Wait until clickable
wait.until(ExpectedConditions.elementToBeClickable(By.id("btn")));

// Wait until text appears
wait.until(ExpectedConditions.textToBePresentInElementLocated(
  By.className("msg"), "Success"
));
\`\`\``,
        starter: `// TASK: Use Explicit Wait to:
// 1. Go to https://www.saucedemo.com
// 2. Wait for the login button to be clickable (max 10 sec)
// 3. Then perform login
// 4. Wait for inventory page header to be visible
// 5. Print header text

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.*;
import java.time.Duration;

public class ExplicitWaitDemo {
  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("https://www.saucedemo.com");
    
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    
    // Wait for login button to be clickable, then login
    
    
    // Wait for inventory header to appear
    
    
    // Print header text
    
    
    driver.quit();
  }
}`,
        hint: '💡 ExpectedConditions.elementToBeClickable(By.id("login-button"))',
        solution: `import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.*;
import java.time.Duration;

public class ExplicitWaitDemo {
  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("https://www.saucedemo.com");
    
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    
    // Wait for login button to be clickable, then login
    driver.findElement(By.id("user-name")).sendKeys("standard_user");
    driver.findElement(By.id("password")).sendKeys("secret_sauce");
    wait.until(ExpectedConditions.elementToBeClickable(By.id("login-button"))).click();
    
    // Wait for inventory header to appear
    WebElement header = wait.until(
      ExpectedConditions.visibilityOfElementLocated(By.className("title"))
    );
    
    // Print header text
    System.out.println("Header: " + header.getText()); // "Products"
    
    driver.quit();
  }
}`,
      },
      {
        id: 4, title: 'Page Object Model (POM)', difficulty: 'Intermediate',
        theory: `## Page Object Model (POM)
POM is the most important design pattern in Selenium automation.

### Why POM?
- **No duplication**: Define locators once, reuse everywhere
- **Easy maintenance**: If UI changes, update one place only
- **Readable tests**: \`loginPage.login("user", "pass")\` is clear

### Structure
\`\`\`java
// Page class — holds locators + actions
public class LoginPage {
  private WebDriver driver;
  
  @FindBy(id = "user-name")
  private WebElement usernameField;
  
  @FindBy(id = "password")
  private WebElement passwordField;
  
  @FindBy(id = "login-button")
  private WebElement loginBtn;
  
  public LoginPage(WebDriver driver) {
    this.driver = driver;
    PageFactory.initElements(driver, this);
  }
  
  public void login(String user, String pass) {
    usernameField.sendKeys(user);
    passwordField.sendKeys(pass);
    loginBtn.click();
  }
}

// Test class — uses the page class
LoginPage page = new LoginPage(driver);
page.login("standard_user", "secret_sauce");
\`\`\``,
        starter: `// TASK: Create a LoginPage POM class
// Then use it to log in to saucedemo.com

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.*;

// ── Page class ──────────────────────────────
class LoginPage {
  private WebDriver driver;
  
  // Define @FindBy locators for:
  // username field (id: user-name)
  // password field (id: password)
  // login button  (id: login-button)
  
  
  public LoginPage(WebDriver driver) {
    this.driver = driver;
    PageFactory.initElements(driver, this);
  }
  
  // Define login(String user, String pass) method
  
}

// ── Test ──────────────────────────────────────
public class POMDemo {
  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("https://www.saucedemo.com");
    
    // Use LoginPage to log in
    
    System.out.println(driver.getCurrentUrl());
    driver.quit();
  }
}`,
        hint: '💡 @FindBy(id="user-name") private WebElement usernameField;',
        solution: `import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.*;

class LoginPage {
  private WebDriver driver;
  
  @FindBy(id = "user-name")
  private WebElement usernameField;
  
  @FindBy(id = "password")
  private WebElement passwordField;
  
  @FindBy(id = "login-button")
  private WebElement loginBtn;
  
  public LoginPage(WebDriver driver) {
    this.driver = driver;
    PageFactory.initElements(driver, this);
  }
  
  public void login(String user, String pass) {
    usernameField.sendKeys(user);
    passwordField.sendKeys(pass);
    loginBtn.click();
  }
}

public class POMDemo {
  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("https://www.saucedemo.com");
    
    LoginPage loginPage = new LoginPage(driver);
    loginPage.login("standard_user", "secret_sauce");
    
    System.out.println(driver.getCurrentUrl());
    // https://www.saucedemo.com/inventory.html
    driver.quit();
  }
}`,
      },
      {
        id: 5, title: 'Handle Alerts & Dropdowns', difficulty: 'Intermediate',
        theory: `## Alerts, Dropdowns & IFrames

### Alerts
\`\`\`java
Alert alert = driver.switchTo().alert();
System.out.println(alert.getText()); // read message
alert.accept();   // click OK
alert.dismiss();  // click Cancel
alert.sendKeys("input text"); // type in prompt
\`\`\`

### Dropdowns (Select tag)
\`\`\`java
Select dropdown = new Select(driver.findElement(By.id("sortBy")));
dropdown.selectByVisibleText("Price (low to high)");
dropdown.selectByValue("lohi");
dropdown.selectByIndex(1);
String selected = dropdown.getFirstSelectedOption().getText();
\`\`\`

### iFrames
\`\`\`java
driver.switchTo().frame("frameName");   // switch in
// interact with elements inside frame
driver.switchTo().defaultContent();     // switch out
\`\`\``,
        starter: `// TASK: On saucedemo.com inventory page:
// 1. Login first
// 2. Find the sort dropdown (class: "product_sort_container")
// 3. Select "Price (low to high)"
// 4. Print the text of the first product name

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class DropdownDemo {
  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("https://www.saucedemo.com");
    
    // Login
    driver.findElement(By.id("user-name")).sendKeys("standard_user");
    driver.findElement(By.id("password")).sendKeys("secret_sauce");
    driver.findElement(By.id("login-button")).click();
    
    // Find sort dropdown and select "Price (low to high)"
    
    
    // Print first product name
    
    
    driver.quit();
  }
}`,
        hint: '💡 new Select(element).selectByVisibleText("Price (low to high)")',
        solution: `import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class DropdownDemo {
  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("https://www.saucedemo.com");
    
    // Login
    driver.findElement(By.id("user-name")).sendKeys("standard_user");
    driver.findElement(By.id("password")).sendKeys("secret_sauce");
    driver.findElement(By.id("login-button")).click();
    
    // Find sort dropdown and select "Price (low to high)"
    Select sort = new Select(
      driver.findElement(By.className("product_sort_container"))
    );
    sort.selectByVisibleText("Price (low to high)");
    
    // Print first product name
    WebElement firstProduct = driver.findElement(
      By.className("inventory_item_name")
    );
    System.out.println("First product: " + firstProduct.getText());
    // Expected: "Sauce Labs Onesie"
    
    driver.quit();
  }
}`,
      },
    ],
  },

  // ════════════════════════════════════════════
  //  TRACK 3 — API Testing
  // ════════════════════════════════════════════
  {
    id: 'api',
    label: '🟦 API Testing',
    color: '#3b82f6',
    lang: 'java',
    challenges: [
      {
        id: 1, title: 'GET Request with REST Assured', difficulty: 'Beginner',
        theory: `## REST Assured — GET Request

### Maven Dependency
\`\`\`xml
<dependency>
  <groupId>io.rest-assured</groupId>
  <artifactId>rest-assured</artifactId>
  <version>5.4.0</version>
</dependency>
\`\`\`

### Basic GET
\`\`\`java
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

given()
  .baseUri("https://jsonplaceholder.typicode.com")
.when()
  .get("/users/1")
.then()
  .statusCode(200)
  .body("name", equalTo("Leanne Graham"))
  .body("email", notNullValue());
\`\`\`

### Given / When / Then pattern
| Part | Purpose |
|------|---------|
| \`given()\` | Setup: headers, params, body |
| \`when()\` | Action: HTTP method + endpoint |
| \`then()\` | Assertions: status, body, headers |`,
        starter: `// TASK: Use REST Assured to call GET /users/1 from
// https://jsonplaceholder.typicode.com
// Assert:
// - Status code is 200
// - "id" equals 1
// - "name" is not null
// - "email" contains "@"

import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class GetUserTest {
  public static void main(String[] args) {
    
    // Write your REST Assured GET test here
    
    
    System.out.println("GET /users/1 — PASSED");
  }
}`,
        hint: '💡 given().baseUri("...").when().get("/users/1").then().statusCode(200).body("name", notNullValue())',
        solution: `import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class GetUserTest {
  public static void main(String[] args) {
    
    given()
      .baseUri("https://jsonplaceholder.typicode.com")
    .when()
      .get("/users/1")
    .then()
      .statusCode(200)
      .body("id", equalTo(1))
      .body("name", notNullValue())
      .body("email", containsString("@"));
    
    System.out.println("GET /users/1 — PASSED");
  }
}`,
      },
      {
        id: 2, title: 'POST Request — Create Resource', difficulty: 'Beginner',
        theory: `## REST Assured — POST Request

### Send JSON body
\`\`\`java
String body = "{ \\"title\\": \\"Buy Milk\\", \\"userId\\": 1, \\"completed\\": false }";

given()
  .baseUri("https://jsonplaceholder.typicode.com")
  .header("Content-Type", "application/json")
  .body(body)
.when()
  .post("/todos")
.then()
  .statusCode(201)
  .body("title", equalTo("Buy Milk"))
  .body("id", notNullValue());
\`\`\`

### Using HashMap for body
\`\`\`java
Map<String, Object> body = new HashMap<>();
body.put("title", "Buy Milk");
body.put("userId", 1);
body.put("completed", false);

given().body(body).contentType("application/json")
  .post("/todos")...
\`\`\``,
        starter: `// TASK: Use REST Assured POST to create a new post at:
// https://jsonplaceholder.typicode.com/posts
// Body: { "title": "SDET Practice", "body": "Learning API testing", "userId": 1 }
// Assert:
// - Status code is 201
// - Response body "title" equals "SDET Practice"

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import java.util.*;

public class PostRequestTest {
  public static void main(String[] args) {
    
    // Build request body
    
    
    // Send POST and assert
    
    
    System.out.println("POST /posts — PASSED");
  }
}`,
        hint: '💡 Use .header("Content-Type","application/json").body(map).post("/posts").then().statusCode(201)',
        solution: `import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import java.util.*;

public class PostRequestTest {
  public static void main(String[] args) {
    
    Map<String, Object> body = new HashMap<>();
    body.put("title", "SDET Practice");
    body.put("body", "Learning API testing");
    body.put("userId", 1);
    
    given()
      .baseUri("https://jsonplaceholder.typicode.com")
      .header("Content-Type", "application/json")
      .body(body)
    .when()
      .post("/posts")
    .then()
      .statusCode(201)
      .body("title", equalTo("SDET Practice"))
      .body("id", notNullValue());
    
    System.out.println("POST /posts — PASSED");
  }
}`,
      },
      {
        id: 3, title: 'Extract Response & Validate', difficulty: 'Intermediate',
        theory: `## Extracting Response Data

### Extract specific fields
\`\`\`java
Response response = given()
  .baseUri("https://jsonplaceholder.typicode.com")
.when()
  .get("/users")
.then()
  .extract().response();

int count    = response.jsonPath().getList("$").size();
String name  = response.jsonPath().getString("[0].name");
String email = response.jsonPath().getString("[0].email");

System.out.println("Total users: " + count);
\`\`\`

### Extract and chain
\`\`\`java
String username = get("/users/1").jsonPath().getString("username");
\`\`\`

### Validate array size
\`\`\`java
.then().body("$", hasSize(10))   // array has 10 items
       .body("id", hasItems(1, 2, 3)) // list contains these ids
\`\`\``,
        starter: `// TASK: Call GET /users from jsonplaceholder
// 1. Extract the response
// 2. Print how many users are returned (should be 10)
// 3. Print name and email of user at index 0
// 4. Assert status is 200 and array has 10 items

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ExtractResponseTest {
  public static void main(String[] args) {
    
    // Send GET and extract response
    
    
    // Print count, name, email
    
    
    System.out.println("Response extraction — PASSED");
  }
}`,
        hint: '💡 response.jsonPath().getList("$").size() gives you the array length.',
        solution: `import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ExtractResponseTest {
  public static void main(String[] args) {
    
    Response response = given()
      .baseUri("https://jsonplaceholder.typicode.com")
    .when()
      .get("/users")
    .then()
      .statusCode(200)
      .body("$", hasSize(10))
      .extract().response();
    
    int count    = response.jsonPath().getList("$").size();
    String name  = response.jsonPath().getString("[0].name");
    String email = response.jsonPath().getString("[0].email");
    
    System.out.println("Total users: " + count);   // 10
    System.out.println("First user: "  + name);    // Leanne Graham
    System.out.println("Email: "       + email);   // Sincere@april.biz
    
    System.out.println("Response extraction — PASSED");
  }
}`,
      },
      {
        id: 4, title: 'PUT & DELETE Requests', difficulty: 'Intermediate',
        theory: `## PUT and DELETE Requests

### PUT — Update a resource
\`\`\`java
Map<String, Object> update = new HashMap<>();
update.put("id", 1);
update.put("title", "Updated Title");
update.put("userId", 1);

given()
  .baseUri("https://jsonplaceholder.typicode.com")
  .header("Content-Type", "application/json")
  .body(update)
.when()
  .put("/posts/1")
.then()
  .statusCode(200)
  .body("title", equalTo("Updated Title"));
\`\`\`

### DELETE — Remove a resource
\`\`\`java
given()
  .baseUri("https://jsonplaceholder.typicode.com")
.when()
  .delete("/posts/1")
.then()
  .statusCode(200);   // some APIs return 204
\`\`\`

### PATCH — Partial update
\`\`\`java
given().body("{\\"title\\":\\"Patched\\"}")
  .patch("/posts/1").then().statusCode(200);
\`\`\``,
        starter: `// TASK 1: PUT /posts/1 to update title to "SDET Updated"
//         Assert status 200, body title equals "SDET Updated"
//
// TASK 2: DELETE /posts/1
//         Assert status 200

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import java.util.*;

public class PutDeleteTest {
  static final String BASE = "https://jsonplaceholder.typicode.com";
  
  public static void main(String[] args) {
    testPut();
    testDelete();
  }
  
  static void testPut() {
    // Write PUT test here
    
    System.out.println("PUT /posts/1 — PASSED");
  }
  
  static void testDelete() {
    // Write DELETE test here
    
    System.out.println("DELETE /posts/1 — PASSED");
  }
}`,
        hint: '💡 .put("/posts/1") for update, .delete("/posts/1") for delete. Both expect 200.',
        solution: `import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import java.util.*;

public class PutDeleteTest {
  static final String BASE = "https://jsonplaceholder.typicode.com";
  
  public static void main(String[] args) {
    testPut();
    testDelete();
  }
  
  static void testPut() {
    Map<String, Object> update = new HashMap<>();
    update.put("id", 1);
    update.put("title", "SDET Updated");
    update.put("userId", 1);
    
    given()
      .baseUri(BASE)
      .header("Content-Type", "application/json")
      .body(update)
    .when()
      .put("/posts/1")
    .then()
      .statusCode(200)
      .body("title", equalTo("SDET Updated"));
    
    System.out.println("PUT /posts/1 — PASSED");
  }
  
  static void testDelete() {
    given()
      .baseUri(BASE)
    .when()
      .delete("/posts/1")
    .then()
      .statusCode(200);
    
    System.out.println("DELETE /posts/1 — PASSED");
  }
}`,
      },
      {
        id: 5, title: 'Auth & Headers', difficulty: 'Intermediate',
        theory: `## Authentication & Headers in REST Assured

### Bearer Token (JWT)
\`\`\`java
given()
  .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9...")
  .get("/profile")
  .then().statusCode(200);
\`\`\`

### Basic Auth
\`\`\`java
given()
  .auth().basic("username", "password")
  .get("/secure-endpoint")
  .then().statusCode(200);
\`\`\`

### Multiple Headers
\`\`\`java
given()
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-Key", "my-api-key-123")
  .get("/endpoint")...
\`\`\`

### Query Parameters
\`\`\`java
given()
  .baseUri("https://jsonplaceholder.typicode.com")
  .queryParam("userId", 1)
.when()
  .get("/posts")
.then()
  .statusCode(200)
  .body("size()", greaterThan(0));
\`\`\``,
        starter: `// TASK: Call GET /posts with query param userId=1
// from https://jsonplaceholder.typicode.com
// Assert:
// - Status code 200
// - All returned posts have userId equal to 1
// - At least 1 post returned (size > 0)
// Also print how many posts userId=1 has

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class QueryParamTest {
  public static void main(String[] args) {
    
    // Send GET with queryParam userId=1 and assert
    
    
    // Extract and print the count
    
    
    System.out.println("Query param test — PASSED");
  }
}`,
        hint: '💡 .queryParam("userId", 1) before .get("/posts")',
        solution: `import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class QueryParamTest {
  public static void main(String[] args) {
    
    Response response = given()
      .baseUri("https://jsonplaceholder.typicode.com")
      .queryParam("userId", 1)
    .when()
      .get("/posts")
    .then()
      .statusCode(200)
      .body("size()", greaterThan(0))
      .body("userId", everyItem(equalTo(1)))
      .extract().response();
    
    int count = response.jsonPath().getList("$").size();
    System.out.println("Posts by userId=1: " + count); // 10
    
    System.out.println("Query param test — PASSED");
  }
}`,
      },
    ],
  },

  // ════════════════════════════════════════════
  //  TRACK 4 — Playwright
  // ════════════════════════════════════════════
  {
    id: 'playwright',
    label: '🟪 Playwright',
    color: '#a855f7',
    lang: 'javascript',
    challenges: [
      {
        id: 1, title: 'Launch Browser & Navigate', difficulty: 'Beginner',
        theory: `## Playwright — Browser Launch & Navigation

### Installation
\`\`\`bash
npm init playwright@latest
\`\`\`

### Basic script
\`\`\`js
const { chromium } = require('playwright');

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext();
const page    = await context.newPage();

await page.goto('https://www.saucedemo.com');
console.log(await page.title());
await browser.close();
\`\`\`

### Browser vs Context vs Page
| Object | Scope |
|--------|-------|
| \`browser\` | The browser process |
| \`context\` | Isolated session (like incognito) |
| \`page\` | A single tab |

### Common page methods
\`\`\`js
await page.goto(url)          // navigate
await page.title()            // get page title
await page.url()              // get current URL
await page.screenshot({...})  // take screenshot
await browser.close()         // close browser
\`\`\``,
        starter: `// TASK: Write Playwright code to:
// 1. Launch Chromium (headless: false so you can see it)
// 2. Navigate to https://playwright.dev
// 3. Print the page title
// 4. Take a screenshot named 'playwright-home.png'
// 5. Close the browser

const { chromium } = require('playwright');

(async () => {
  // 1. Launch browser
  
  
  // 2. Navigate to playwright.dev
  
  
  // 3. Print title
  
  
  // 4. Screenshot
  
  
  // 5. Close
  
  
})();`,
        hint: '💡 chromium.launch() → browser.newContext() → context.newPage() → page.goto()',
        solution: `const { chromium } = require('playwright');

(async () => {
  // 1. Launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page    = await context.newPage();
  
  // 2. Navigate to playwright.dev
  await page.goto('https://playwright.dev');
  
  // 3. Print title
  const title = await page.title();
  console.log('Title:', title);
  
  // 4. Screenshot
  await page.screenshot({ path: 'playwright-home.png', fullPage: true });
  console.log('Screenshot saved!');
  
  // 5. Close
  await browser.close();
})();`,
      },
      {
        id: 2, title: 'Locators & Click Actions', difficulty: 'Beginner',
        theory: `## Playwright Locators

### Recommended locators (in order of preference)
\`\`\`js
// 1. By role (most resilient)
page.getByRole('button', { name: 'Login' })
page.getByRole('textbox', { name: 'Username' })

// 2. By label
page.getByLabel('Password')

// 3. By placeholder
page.getByPlaceholder('Enter username')

// 4. By test ID
page.getByTestId('login-btn')

// 5. By CSS / XPath (fallback)
page.locator('#login-button')
page.locator('//button[@type="submit"]')
\`\`\`

### Actions
\`\`\`js
await locator.click()
await locator.fill('text here')   // clear + type
await locator.type('text')        // type char by char
await locator.clear()
await locator.selectOption('value')
await locator.check()             // checkbox
await locator.isVisible()
await locator.textContent()
\`\`\``,
        starter: `// TASK: Using Playwright, log in to https://www.saucedemo.com
// 1. Fill username: standard_user
// 2. Fill password: secret_sauce
// 3. Click the login button
// 4. Assert URL contains "inventory"
// 5. Print page title

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newContext().then(c => c.newPage());
  
  await page.goto('https://www.saucedemo.com');
  
  // Fill username
  
  
  // Fill password
  
  
  // Click login
  
  
  // Assert URL and print title
  
  
  await browser.close();
})();`,
        hint: '💡 page.locator("#user-name").fill("standard_user")',
        solution: `const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page    = await context.newPage();
  
  await page.goto('https://www.saucedemo.com');
  
  // Fill username
  await page.locator('#user-name').fill('standard_user');
  
  // Fill password
  await page.locator('#password').fill('secret_sauce');
  
  // Click login
  await page.locator('#login-button').click();
  
  // Assert URL and print title
  const url   = page.url();
  const title = await page.title();
  console.log('URL:', url);     // .../inventory.html
  console.log('Title:', title); // Swag Labs
  
  if (!url.includes('inventory')) throw new Error('Login failed!');
  console.log('Login test — PASSED ✅');
  
  await browser.close();
})();`,
      },
      {
        id: 3, title: 'Auto-waiting & Assertions', difficulty: 'Intermediate',
        theory: `## Playwright Auto-waiting & Assertions

### Auto-wait (built-in)
Playwright automatically waits for elements before acting — no explicit waits needed for most cases.
\`\`\`js
// Playwright waits for the element to be visible, enabled, stable
await page.locator('#submit').click();         // auto-waits
await page.locator('.success-msg').textContent(); // auto-waits
\`\`\`

### Playwright Test assertions (expect)
\`\`\`js
const { expect } = require('@playwright/test');

await expect(page).toHaveTitle('Swag Labs');
await expect(page).toHaveURL(/inventory/);
await expect(page.locator('.title')).toHaveText('Products');
await expect(page.locator('.cart_badge')).toBeVisible();
await expect(page.locator('#login-button')).toBeEnabled();
await expect(page.locator('.inventory_list')).toHaveCount(6);
\`\`\`

### waitForSelector (manual wait)
\`\`\`js
await page.waitForSelector('.inventory_item', { timeout: 5000 });
await page.waitForURL('**/inventory.html');
await page.waitForLoadState('networkidle');
\`\`\``,
        starter: `// TASK: After logging in to saucedemo.com,
// 1. Wait for the products list to appear
// 2. Count how many products are on the page
// 3. Assert count equals 6
// 4. Print each product name

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page    = await context.newPage();
  
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  
  // Wait for products and count them
  
  
  // Print each product name
  
  
  await browser.close();
})();`,
        hint: '💡 page.locator(".inventory_item_name").allTextContents() returns array of all names',
        solution: `const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page    = await context.newPage();
  
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  
  // Wait for products and count them
  await page.waitForSelector('.inventory_item');
  const products = page.locator('.inventory_item_name');
  const count    = await products.count();
  console.log('Product count:', count); // 6
  
  if (count !== 6) throw new Error(\`Expected 6 products, got \${count}\`);
  
  // Print each product name
  const names = await products.allTextContents();
  names.forEach((name, i) => console.log(\`\${i + 1}. \${name}\`));
  
  console.log('Product count assertion — PASSED ✅');
  await browser.close();
})();`,
      },
      {
        id: 4, title: 'Network Interception (API Mock)', difficulty: 'Advanced',
        theory: `## Playwright Network Interception

One of Playwright's most powerful features — intercept and mock API responses.

### Intercept a request
\`\`\`js
await page.route('**/api/users', route => {
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify([{ id: 1, name: 'Mock User' }]),
  });
});
\`\`\`

### Abort a request
\`\`\`js
await page.route('**/*.png', route => route.abort());
// blocks all PNG image requests
\`\`\`

### Modify a response
\`\`\`js
await page.route('**/api/login', async route => {
  const response = await route.fetch();
  const json = await response.json();
  json.token = 'mocked-token-123';
  route.fulfill({ response, body: JSON.stringify(json) });
});
\`\`\`

### Inspect requests
\`\`\`js
page.on('request', req => console.log('>', req.method(), req.url()));
page.on('response', res => console.log('<', res.status(), res.url()));
\`\`\``,
        starter: `// TASK: Intercept the API call that saucedemo.com 
// would make (simulated). Block all image requests
// for performance, then verify products still load.
//
// Specifically:
// 1. Block all .png and .jpg image requests
// 2. Log every network request URL to console
// 3. Login and verify products page loads

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page    = await context.newPage();
  
  // 1. Block image requests
  
  
  // 2. Log all requests
  
  
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  
  // 3. Verify products loaded despite blocked images
  
  
  await browser.close();
})();`,
        hint: '💡 await page.route("**/*.{png,jpg}", route => route.abort())',
        solution: `const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page    = await context.newPage();
  
  // 1. Block image requests
  await page.route('**/*.{png,jpg,jpeg,gif,svg}', route => {
    console.log('BLOCKED:', route.request().url());
    route.abort();
  });
  
  // 2. Log all requests
  page.on('request', req => {
    if (!req.url().includes('data:')) {
      console.log('REQUEST:', req.method(), req.url().split('/').pop());
    }
  });
  
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  
  // 3. Verify products loaded despite blocked images
  await page.waitForSelector('.inventory_item');
  const count = await page.locator('.inventory_item').count();
  console.log(\`\\nProducts loaded: \${count}\`); // 6
  console.log('Network interception — PASSED ✅');
  
  await browser.close();
})();`,
      },
      {
        id: 5, title: 'Parallel Tests & Test Runner', difficulty: 'Advanced',
        theory: `## Playwright Test Runner

### playwright.config.js
\`\`\`js
module.exports = {
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: 'html',
  use: {
    baseURL: 'https://www.saucedemo.com',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox',  use: { browserName: 'firefox' } },
    { name: 'webkit',   use: { browserName: 'webkit' } },
  ],
};
\`\`\`

### Test file structure
\`\`\`js
const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  
  test('valid login', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory/);
  });
  
  test('invalid login shows error', async ({ page }) => {
    await page.locator('#user-name').fill('wrong');
    await page.locator('#password').fill('wrong');
    await page.locator('#login-button').click();
    await expect(page.locator('.error-message-container')).toBeVisible();
  });
  
});
\`\`\`

### Run commands
\`\`\`bash
npx playwright test              # run all
npx playwright test --headed     # visible browser
npx playwright test login.spec   # specific file
npx playwright test --reporter=html && npx playwright show-report
\`\`\``,
        starter: `// TASK: Write a complete Playwright test file with test.describe
// covering saucedemo.com:
// Test 1: "valid login" — login and assert URL has "inventory"
// Test 2: "invalid login" — wrong creds, assert error message visible
// Test 3: "product count" — login, assert 6 products on page

// Use @playwright/test (test, expect)
// Use beforeEach to navigate to the page

const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.saucedemo.com';

test.describe('SauceDemo Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to base URL before each test
    
  });
  
  test('valid login should go to inventory', async ({ page }) => {
    // Fill creds and click login, then assert URL
    
  });
  
  test('invalid login shows error', async ({ page }) => {
    // Wrong credentials, assert error is visible
    
  });
  
  test('inventory shows 6 products', async ({ page }) => {
    // Login first, then assert product count is 6
    
  });
  
});`,
        hint: '💡 await expect(page).toHaveURL(/inventory/) and await expect(locator).toHaveCount(6)',
        solution: `const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.saucedemo.com';

test.describe('SauceDemo Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });
  
  test('valid login should go to inventory', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory/);
    console.log('valid login — PASSED ✅');
  });
  
  test('invalid login shows error', async ({ page }) => {
    await page.locator('#user-name').fill('wrong_user');
    await page.locator('#password').fill('wrong_pass');
    await page.locator('#login-button').click();
    await expect(page.locator('.error-message-container')).toBeVisible();
    console.log('invalid login error — PASSED ✅');
  });
  
  test('inventory shows 6 products', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    console.log('product count — PASSED ✅');
  });
  
});`,
      },
    ],
  },
];
