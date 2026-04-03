export const topics = {
  selenium: {
    title: "Selenium Automation",
    icon: "🌐",
    color: "#4f46e5",
    subtopics: [
      {
        id: 1,
        title: "Introduction to Selenium",
        content: `## Introduction to Selenium

Selenium is an open-source framework for automating web browsers. It provides a suite of tools for browser automation.

### Selenium Suite
- **Selenium WebDriver** – Direct browser communication API
- **Selenium Grid** – Run tests on multiple machines/browsers in parallel
- **Selenium IDE** – Record & Playback browser extension

### Why Selenium?
- Free & Open Source
- Supports multiple languages: Java, Python, C#, JavaScript
- Works with Chrome, Firefox, Edge, Safari
- Large community & industry standard

### Basic WebDriver Example (Java)
\`\`\`java
WebDriver driver = new ChromeDriver();
driver.get("https://example.com");
System.out.println(driver.getTitle());
driver.quit();
\`\`\`

### Key Points
✅ WebDriver is the core API for browser control  
✅ Always call \`driver.quit()\` to close browser after test  
✅ Selenium 4 uses W3C WebDriver protocol  
✅ ChromeDriver version must match Chrome browser version`,
        exercises: [
          {
            title: "Open a browser and navigate to google.com",
            description: "Write code to open Chrome, navigate to google.com, print the title, and close the browser.",
          },
          {
            title: "Verify page title",
            description: "Navigate to any site and assert the page title equals expected value.",
          },
        ],
      },
      {
        id: 2,
        title: "Setting Up Selenium Environment",
        content: `## Setting Up Selenium Environment

### Prerequisites
- Java JDK 8+
- Maven or Gradle (build tool)
- IDE (IntelliJ IDEA / Eclipse)
- Chrome browser

### Maven Dependencies (pom.xml)
\`\`\`xml
<dependencies>
  <dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.18.0</version>
  </dependency>
  <dependency>
    <groupId>io.github.bonigarcia</groupId>
    <artifactId>webdrivermanager</artifactId>
    <version>5.7.0</version>
  </dependency>
  <dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.9.0</version>
    <scope>test</scope>
  </dependency>
</dependencies>
\`\`\`

### Setup with WebDriverManager
\`\`\`java
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SetupTest {
  public static void main(String[] args) {
    WebDriverManager.chromedriver().setup();
    WebDriver driver = new ChromeDriver();
    driver.get("https://www.google.com");
    System.out.println("Title: " + driver.getTitle());
    driver.quit();
  }
}
\`\`\`

### Key Points
✅ WebDriverManager auto-downloads the correct driver binary  
✅ Selenium 4.6+ includes Selenium Manager (no WebDriverManager needed)  
✅ Use Maven/Gradle to manage all dependencies  
✅ Don't hardcode driver paths — use WebDriverManager`,
        exercises: [
          {
            title: "Create a Maven project with Selenium",
            description: "Set up a new Maven project with Selenium 4 and TestNG dependencies. Run a basic test.",
          },
          {
            title: "Run Chrome in headless mode",
            description: "Configure ChromeOptions to run tests headlessly and verify it works.",
          },
        ],
      },
      {
        id: 3,
        title: "Locators & Locator Strategies",
        content: `## Locators & Locator Strategies

Locators tell Selenium **which element** to interact with on the page.

### 8 Types of Locators
| Locator | Example |
|---------|---------|
| ID | \`By.id("username")\` |
| Name | \`By.name("email")\` |
| Class Name | \`By.className("btn-primary")\` |
| Tag Name | \`By.tagName("input")\` |
| Link Text | \`By.linkText("Click Here")\` |
| Partial Link Text | \`By.partialLinkText("Click")\` |
| CSS Selector | \`By.cssSelector("#login > input")\` |
| XPath | \`By.xpath("//input[@id='user']")\` |

### XPath Examples
\`\`\`java
// Absolute XPath (avoid)
//html/body/div/form/input

// Relative XPath (preferred)
//input[@id='username']
//button[text()='Submit']
//button[contains(text(),'Submit')]
//input[contains(@class,'btn')]

// Axes
//div[@class='form']//input   (descendant)
//label/following-sibling::input
\`\`\`

### CSS Selector Examples
\`\`\`java
By.cssSelector("#username")           // ID
By.cssSelector(".btn.btn-primary")    // Multiple classes
By.cssSelector("input[type='text']")  // Attribute
By.cssSelector("div > p")             // Direct child
By.cssSelector("button[contains(@text,'Submit')]") // text() - not valid in CSS
\`\`\`

### Key Points
✅ Prefer ID > Name > CSS Selector > XPath for performance  
✅ Never use absolute XPath — it breaks with any UI change  
✅ Use contains() in XPath for dynamic/partial attribute values  
✅ CSS Selector cannot traverse up DOM (no parent selection)  
✅ XPath axes: parent, child, following-sibling, preceding-sibling  
✅ Use browser DevTools (F12) to test locators before coding  
✅ Right-click element → Inspect → Ctrl+F to test XPath/CSS in DevTools`,
        exercises: [
          {
            title: "Practice All Locator Types",
            description: "Go to https://www.saucedemo.com. Find the username field using ID, CSS, and XPath. Which is most reliable?",
          },
          {
            title: "Dynamic XPath with contains() and text()",
            description: "Find a button whose text changes dynamically. Write an XPath using contains() to reliably locate it.",
          },
          {
            title: "CSS Selector Advanced Techniques",
            description: "Use CSS nth-child, attribute selectors, and sibling combinators to locate elements without ID or class.",
          },
        ],
      },
      {
        id: 4,
        title: "Browser Interactions & Navigation",
        content: `## Browser Interactions & Navigation

### Browser Navigation Commands
\`\`\`java
driver.get("https://example.com");          // Navigate to URL
driver.navigate().to("https://google.com"); // Navigate (supports history)
driver.navigate().back();                   // Browser back button
driver.navigate().forward();               // Browser forward button
driver.navigate().refresh();               // Refresh page

// Window management
driver.manage().window().maximize();
driver.manage().window().fullscreen();
driver.manage().window().setSize(new Dimension(1280, 720));

// Get info
String url = driver.getCurrentUrl();
String title = driver.getTitle();
String source = driver.getPageSource();
\`\`\`

### Handling Multiple Windows/Tabs
\`\`\`java
String mainWindow = driver.getWindowHandle();
Set<String> allWindows = driver.getWindowHandles();

for (String handle : allWindows) {
  if (!handle.equals(mainWindow)) {
    driver.switchTo().window(handle);
    break;
  }
}
driver.close(); // close current tab
driver.switchTo().window(mainWindow); // back to main
\`\`\`

### Selenium 4 — New Tab/Window
\`\`\`java
driver.switchTo().newWindow(WindowType.TAB);
driver.switchTo().newWindow(WindowType.WINDOW);
\`\`\`

### Taking Screenshots
\`\`\`java
TakesScreenshot ts = (TakesScreenshot) driver;
File src = ts.getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(src, new File("screenshot.png"));
\`\`\`

### Key Points
✅ \`driver.get()\` waits for page to load; \`navigate().to()\` does not wait  
✅ Always store main window handle before opening new tabs  
✅ Selenium 4 CDP (Chrome DevTools Protocol) enables network monitoring`,
        exercises: [
          {
            title: "Navigate and go back/forward",
            description: "Visit 3 different pages and navigate back and forward using navigate commands.",
          },
          {
            title: "Handle new tab popup",
            description: "Click a link that opens in new tab, switch to it, get the title, close it, return to main.",
          },
        ],
      },
      {
        id: 5,
        title: "WebElement Interactions",
        content: `## WebElement Interactions

### Finding Elements
\`\`\`java
WebElement element = driver.findElement(By.id("username"));
List<WebElement> elements = driver.findElements(By.className("item"));
\`\`\`

### Common Actions
\`\`\`java
element.click();                    // Click
element.sendKeys("Hello World");    // Type text
element.clear();                    // Clear input field
element.submit();                   // Submit form
String text = element.getText();    // Get visible text
String attr = element.getAttribute("href"); // Get attribute
String css = element.getCssValue("color");  // Get CSS property
boolean visible = element.isDisplayed();
boolean enabled = element.isEnabled();
boolean selected = element.isSelected();
\`\`\`

### Checkboxes & Radio Buttons
\`\`\`java
WebElement checkbox = driver.findElement(By.id("agree"));
if (!checkbox.isSelected()) {
  checkbox.click();
}
\`\`\`

### Key Points
✅ \`findElement()\` throws NoSuchElementException if not found  
✅ \`findElements()\` returns empty list if not found (safer)  
✅ Always check \`isDisplayed()\` before interacting with elements  
✅ \`getText()\` only returns visible text; use \`getAttribute("textContent")\` for hidden`,
        exercises: [
          {
            title: "Login form interaction",
            description: "Go to saucedemo.com, fill username/password and submit. Verify successful login.",
          },
          {
            title: "Find all links on a page",
            description: "Use findElements with tagName('a') to get all links and print their href attributes.",
          },
        ],
      },
      {
        id: 6,
        title: "Waits – Implicit, Explicit & Fluent",
        content: `## Waits – Implicit, Explicit & Fluent

### Why Waits?
Web pages are dynamic — elements load asynchronously. Without waits, tests fail with **NoSuchElementException** or **StaleElementReferenceException**.

### 1. Implicit Wait
\`\`\`java
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
// Applied globally to all findElement calls
\`\`\`

### 2. Explicit Wait (Recommended)
\`\`\`java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

// Wait for element to be visible
WebElement el = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("btn")));

// Wait for element to be clickable
wait.until(ExpectedConditions.elementToBeClickable(By.id("submit")));

// Wait for text
wait.until(ExpectedConditions.textToBe(By.id("msg"), "Success"));

// Wait for URL
wait.until(ExpectedConditions.urlContains("/dashboard"));
\`\`\`

### 3. Fluent Wait
\`\`\`java
Wait<WebDriver> fluent = new FluentWait<>(driver)
  .withTimeout(Duration.ofSeconds(30))
  .pollingEvery(Duration.ofSeconds(2))
  .ignoring(NoSuchElementException.class);

WebElement el = fluent.until(driver -> driver.findElement(By.id("result")));
\`\`\`

### Key Points
✅ Never use \`Thread.sleep()\` — use waits instead  
✅ Don't mix implicit + explicit waits (can cause double-wait)  
✅ FluentWait is best for polling until a condition is met  
✅ Explicit wait is the standard in professional automation`,
        exercises: [
          {
            title: "Handle dynamic loading",
            description: "Visit a site with lazy-loading content. Use explicit wait to wait for element to appear.",
          },
          {
            title: "Custom Expected Condition",
            description: "Write a custom ExpectedCondition that waits until an element's text matches a regex.",
          },
        ],
      },
      {
        id: 7,
        title: "Handling Dropdowns",
        content: `## Handling Dropdowns

### HTML Select Dropdown
\`\`\`java
WebElement dropdown = driver.findElement(By.id("country"));
Select select = new Select(dropdown);

// Select options
select.selectByVisibleText("India");
select.selectByValue("IN");
select.selectByIndex(2);

// Get selected option
WebElement selected = select.getFirstSelectedOption();
System.out.println(selected.getText());

// Get all options
List<WebElement> options = select.getOptions();
options.forEach(op -> System.out.println(op.getText()));

// Multi-select
if (select.isMultiple()) {
  select.selectByVisibleText("Option A");
  select.selectByVisibleText("Option B");
  select.deselectAll();
}
\`\`\`

### Custom Dropdowns (Non-Select)
\`\`\`java
// Click to open dropdown
driver.findElement(By.id("custom-dropdown")).click();

// Wait for options to appear
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//ul[@class='dropdown-menu']")));

// Click specific option
driver.findElement(By.xpath("//li[text()='India']")).click();
\`\`\`

### Key Points
✅ \`Select\` class only works with HTML \`<select>\` tag  
✅ For Bootstrap/custom dropdowns, use click + findElement  
✅ Always use explicit wait before interacting with dropdown options`,
        exercises: [
          {
            title: "Select dropdown value",
            description: "Find a page with a <select> dropdown. Select a value by text, by value, and by index.",
          },
          {
            title: "Handle Bootstrap dropdown",
            description: "Automate a Bootstrap dropdown (not a <select> tag) by clicking and selecting an option.",
          },
        ],
      },
      {
        id: 8,
        title: "Handling Alerts, Popups & Frames",
        content: `## Handling Alerts, Popups & Frames

### JavaScript Alerts
\`\`\`java
// Simple Alert
Alert alert = driver.switchTo().alert();
System.out.println(alert.getText());
alert.accept();  // Click OK

// Confirm Dialog
alert.accept();  // OK
alert.dismiss(); // Cancel

// Prompt
alert.sendKeys("My input");
alert.accept();
\`\`\`

### iFrames
\`\`\`java
// Switch by index
driver.switchTo().frame(0);

// Switch by name/id
driver.switchTo().frame("frameName");

// Switch by WebElement
WebElement iframe = driver.findElement(By.tagName("iframe"));
driver.switchTo().frame(iframe);

// Work inside frame...
driver.findElement(By.id("submit")).click();

// Switch back to main content
driver.switchTo().defaultContent();

// Nested frames
driver.switchTo().frame("outer");
driver.switchTo().frame("inner");
driver.switchTo().parentFrame(); // go up one level
\`\`\`

### Key Points
✅ Handle alerts immediately — other actions fail if alert is open  
✅ Always switch back to \`defaultContent()\` after working in a frame  
✅ Use \`switchTo().parentFrame()\` for nested iframes`,
        exercises: [
          {
            title: "Accept and Dismiss alerts",
            description: "Create a page with alert, confirm, prompt. Write tests to handle all three types.",
          },
          {
            title: "Interact inside an iframe",
            description: "Find a page with iframes (e.g. w3schools.com). Switch into the iframe and interact with elements.",
          },
        ],
      },
      {
        id: 9,
        title: "Actions Class – Mouse & Keyboard",
        content: `## Actions Class – Mouse & Keyboard

### Mouse Actions
\`\`\`java
Actions actions = new Actions(driver);

// Hover
actions.moveToElement(element).perform();

// Right Click
actions.contextClick(element).perform();

// Double Click
actions.doubleClick(element).perform();

// Drag and Drop
actions.dragAndDrop(source, target).perform();
actions.clickAndHold(source).moveToElement(target).release().perform();

// Click with offset
actions.moveToElement(element, 10, 20).click().perform();
\`\`\`

### Keyboard Actions
\`\`\`java
// Key combinations
actions.keyDown(Keys.CONTROL).sendKeys("a").keyUp(Keys.CONTROL).perform(); // Select All
actions.keyDown(Keys.CONTROL).sendKeys("c").keyUp(Keys.CONTROL).perform(); // Copy
actions.keyDown(Keys.SHIFT).sendKeys(Keys.RIGHT).keyUp(Keys.SHIFT).perform();

// Single key press
actions.sendKeys(Keys.ENTER).perform();
actions.sendKeys(Keys.TAB).perform();
actions.sendKeys(Keys.ESCAPE).perform();
\`\`\`

### Key Points
✅ Always end action chains with \`.perform()\`  
✅ Use \`Actions\` for complex interactions unavailable with simple click  
✅ \`dragAndDropBy(element, xOffset, yOffset)\` for pixel-based drag`,
        exercises: [
          {
            title: "Hover menu automation",
            description: "Automate a navbar with hover sub-menus using moveToElement().",
          },
          {
            title: "Drag and Drop",
            description: "Use https://jqueryui.com/droppable/ to practice drag and drop automation.",
          },
        ],
      },
      {
        id: 10,
        title: "JavaScriptExecutor",
        content: `## JavaScriptExecutor

Use when Selenium WebDriver commands are insufficient or slow.

### Basic Usage
\`\`\`java
JavascriptExecutor js = (JavascriptExecutor) driver;

// Click via JS (use when regular click fails)
js.executeScript("arguments[0].click();", element);

// Scroll
js.executeScript("window.scrollTo(0, document.body.scrollHeight);"); // scroll to bottom
js.executeScript("arguments[0].scrollIntoView(true);", element);     // scroll to element

// Set value
js.executeScript("arguments[0].value='Hello';", inputField);

// Get value
String value = (String) js.executeScript("return arguments[0].value;", inputField);

// Get page title
String title = (String) js.executeScript("return document.title;");

// Highlight element (debugging)
js.executeScript("arguments[0].style.border='3px solid red'", element);
\`\`\`

### Key Points
✅ Use JS click only as last resort — regular click is more reliable  
✅ JS executor bypasses WebDriver wait — be careful with timing  
✅ Great for scrolling into view before interacting with elements`,
        exercises: [
          {
            title: "Scroll to bottom and find element",
            description: "Scroll a long page to bottom using JS and interact with the footer element.",
          },
          {
            title: "JS click on hidden element",
            description: "Use JS executor to click an element that is visually hidden but in DOM.",
          },
        ],
      },
      {
        id: 11,
        title: "Screenshots & Test Reporting",
        content: `## Screenshots & Test Reporting

### Taking Screenshots
\`\`\`java
// Full page screenshot
TakesScreenshot ts = (TakesScreenshot) driver;
File src = ts.getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(src, new File("target/screenshots/test.png"));

// Element screenshot (Selenium 4)
WebElement element = driver.findElement(By.id("logo"));
File elementScreenshot = element.getScreenshotAs(OutputType.FILE);
\`\`\`

### Extent Reports Setup (Maven)
\`\`\`xml
<dependency>
  <groupId>com.aventstack</groupId>
  <artifactId>extentreports</artifactId>
  <version>5.1.1</version>
</dependency>
\`\`\`

\`\`\`java
ExtentReports extent = new ExtentReports();
ExtentSparkReporter spark = new ExtentSparkReporter("target/report.html");
extent.attachReporter(spark);

ExtentTest test = extent.createTest("Login Test");
test.pass("Navigated to login page");
test.fail("Login button not found");

// Attach screenshot on failure
test.addScreenCaptureFromPath("screenshots/fail.png");

extent.flush();
\`\`\`

### Key Points
✅ Always capture screenshot on test failure  
✅ Use Extent Reports or Allure for professional HTML reports  
✅ Store screenshots in target/ folder for CI/CD integration`,
        exercises: [
          {
            title: "Capture failing test screenshot",
            description: "Write a TestNG @AfterMethod that takes screenshot if test fails and attaches to report.",
          },
        ],
      },
      {
        id: 12,
        title: "Page Object Model (POM) Design Pattern",
        content: `## Page Object Model (POM) Design Pattern

### What is POM?
POM separates page structure from test logic. Each page = one class.

### LoginPage.java
\`\`\`java
public class LoginPage {
  WebDriver driver;

  @FindBy(id = "username") WebElement username;
  @FindBy(id = "password") WebElement password;
  @FindBy(id = "loginBtn") WebElement loginBtn;
  @FindBy(id = "error")    WebElement errorMsg;

  public LoginPage(WebDriver driver) {
    this.driver = driver;
    PageFactory.initElements(driver, this);
  }

  public void login(String user, String pass) {
    username.sendKeys(user);
    password.sendKeys(pass);
    loginBtn.click();
  }

  public String getError() {
    return errorMsg.getText();
  }
}
\`\`\`

### LoginTest.java
\`\`\`java
public class LoginTest extends BaseTest {
  @Test
  public void validLoginTest() {
    LoginPage loginPage = new LoginPage(driver);
    loginPage.login("standard_user", "secret_sauce");
    Assert.assertTrue(driver.getCurrentUrl().contains("inventory"));
  }

  @Test
  public void invalidLoginTest() {
    LoginPage loginPage = new LoginPage(driver);
    loginPage.login("wrong", "wrong");
    Assert.assertEquals(loginPage.getError(), "Username and password do not match");
  }
}
\`\`\`

### Key Points
✅ POM makes tests maintainable — change locators in one place only  
✅ Use \`PageFactory.initElements()\` for lazy element initialization  
✅ Page methods should return \`void\` or the next Page Object  
✅ Keep test assertions in test classes, not page classes`,
        exercises: [
          {
            title: "Build POM for saucedemo.com",
            description: "Create LoginPage, InventoryPage, CartPage classes for saucedemo.com with full test coverage.",
          },
          {
            title: "Add BasePage class",
            description: "Create a BasePage with common methods (waitForElement, scrollTo, etc.) that all pages extend.",
          },
        ],
      },
    ],
  },
  api: {
    title: "API Automation",
    icon: "🔌",
    color: "#0891b2",
    subtopics: [
      {
        id: 1,
        title: "Introduction to API Testing",
        content: `## Introduction to API Testing

### What is API Testing?
API Testing validates that Application Programming Interfaces work as expected — checking functionality, reliability, performance, and security.

### REST API Concepts
| Method | Purpose | Body |
|--------|---------|------|
| GET | Retrieve data | No |
| POST | Create resource | Yes |
| PUT | Full update | Yes |
| PATCH | Partial update | Yes |
| DELETE | Remove resource | No |

### HTTP Status Codes
- **200** OK · **201** Created · **204** No Content
- **400** Bad Request · **401** Unauthorized · **403** Forbidden · **404** Not Found
- **500** Server Error · **503** Service Unavailable

### What to Test in APIs?
✅ Status code  
✅ Response body (JSON schema, field values)  
✅ Response time  
✅ Headers  
✅ Authentication  
✅ Error handling`,
        exercises: [
          {
            title: "Explore REST API with Postman",
            description: "Use https://reqres.in to make GET, POST, PUT, DELETE requests manually in Postman.",
          },
        ],
      },
      {
        id: 2,
        title: "REST Assured Basics",
        content: `## REST Assured Basics

### Maven Dependency
\`\`\`xml
<dependency>
  <groupId>io.rest-assured</groupId>
  <artifactId>rest-assured</artifactId>
  <version>5.4.0</version>
  <scope>test</scope>
</dependency>
\`\`\`

### Given/When/Then Pattern
\`\`\`java
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

// GET request
given()
  .baseUri("https://reqres.in/api")
.when()
  .get("/users/2")
.then()
  .statusCode(200)
  .body("data.id", equalTo(2))
  .body("data.first_name", equalTo("Janet"));

// POST request
String body = "{ \\"name\\": \\"John\\", \\"job\\": \\"QA\\" }";
given()
  .header("Content-Type", "application/json")
  .body(body)
.when()
  .post("https://reqres.in/api/users")
.then()
  .statusCode(201)
  .body("name", equalTo("John"));
\`\`\`

### Key Points
✅ given() = request setup, when() = action, then() = assertions  
✅ REST Assured reads JSON responses natively with GPath  
✅ Always set Content-Type header for POST/PUT requests`,
        exercises: [
          {
            title: "GET and assert user data",
            description: "Call GET /users/1 on reqres.in and assert id=1, email contains 'george'.",
          },
          {
            title: "Create user via POST",
            description: "Send POST /users request and assert 201 status and response body contains name.",
          },
        ],
      },
      {
        id: 3,
        title: "Request & Response Handling",
        content: `## Request & Response Handling

### Headers & Query Params
\`\`\`java
// Headers
given()
  .header("Authorization", "Bearer token123")
  .header("Accept", "application/json")
  .get("/protected-endpoint");

// Query parameters
given()
  .queryParam("page", 2)
  .queryParam("per_page", 6)
  .get("/users");

// Path parameters
given()
  .pathParam("id", 5)
  .get("/users/{id}");
\`\`\`

### Extracting Response Values
\`\`\`java
Response response = given().get("/users/2");

// Extract single value
String firstName = response.jsonPath().getString("data.first_name");
int id = response.jsonPath().getInt("data.id");

// Extract full body
String body = response.getBody().asString();

// Extract with ValidatableResponse
String email = given()
  .get("/users/2")
  .then()
  .extract().path("data.email");
\`\`\`

### JSON Body with POJO
\`\`\`java
// POJO class
public class User {
  public String name;
  public String job;
}

User user = new User();
user.name = "Alice";
user.job = "Tester";

given()
  .contentType(ContentType.JSON)
  .body(user)
  .post("/users");
\`\`\``,
        exercises: [
          {
            title: "Extract and assert nested JSON",
            description: "Call GET /users?page=2 on reqres.in. Extract all email addresses and assert they end in @reqres.in.",
          },
          {
            title: "Send request with auth header",
            description: "Call a protected endpoint with Authorization Bearer token header.",
          },
        ],
      },
      {
        id: 4,
        title: "Authentication in APIs",
        content: `## Authentication in APIs

### Basic Auth
\`\`\`java
given()
  .auth().basic("username", "password")
  .get("/secure-endpoint");
\`\`\`

### OAuth2 / Bearer Token
\`\`\`java
given()
  .header("Authorization", "Bearer " + accessToken)
  .get("/api/data");

// Or using auth()
given()
  .auth().oauth2("access_token_here")
  .get("/api/data");
\`\`\`

### Login & Extract Token
\`\`\`java
// Step 1: Login
String token = given()
  .contentType(ContentType.JSON)
  .body("{\\"email\\":\\"eve.holt@reqres.in\\",\\"password\\":\\"cityslicka\\"}")
  .post("https://reqres.in/api/login")
  .then()
  .statusCode(200)
  .extract().path("token");

// Step 2: Use token
given()
  .header("Authorization", "Bearer " + token)
  .get("/api/protected");
\`\`\`

### Key Points
✅ Store tokens in test setup, reuse across tests  
✅ Test both valid and invalid/expired token scenarios  
✅ Never hardcode credentials — use environment variables or config files`,
        exercises: [
          {
            title: "Login and use token",
            description: "Login to reqres.in, extract token, and use it in a subsequent authenticated request.",
          },
        ],
      },
      {
        id: 5,
        title: "API Framework with TestNG",
        content: `## API Framework with TestNG

### Base API Class
\`\`\`java
public class ApiBase {
  protected static RequestSpecification spec;

  @BeforeClass
  public void setup() {
    RestAssured.baseURI = "https://reqres.in/api";
    spec = new RequestSpecBuilder()
      .setContentType(ContentType.JSON)
      .addHeader("Accept", "application/json")
      .build();
  }
}
\`\`\`

### Response Specification
\`\`\`java
ResponseSpecification successSpec = new ResponseSpecBuilder()
  .expectStatusCode(200)
  .expectContentType(ContentType.JSON)
  .expectResponseTime(lessThan(2000L), TimeUnit.MILLISECONDS)
  .build();

given(spec)
  .when().get("/users/1")
  .then().spec(successSpec);
\`\`\`

### Data-Driven API Tests
\`\`\`java
@DataProvider(name = "userIds")
public Object[][] userData() {
  return new Object[][]{{1}, {2}, {3}};
}

@Test(dataProvider = "userIds")
public void getUserTest(int id) {
  given(spec)
    .pathParam("id", id)
    .when().get("/users/{id}")
    .then()
    .statusCode(200)
    .body("data.id", equalTo(id));
}
\`\`\``,
        exercises: [
          {
            title: "Build API test framework",
            description: "Create ApiBase class, UserTest class covering CRUD operations on reqres.in.",
          },
          {
            title: "Data-driven API test",
            description: "Use @DataProvider to test the same API endpoint with multiple user IDs.",
          },
        ],
      },
      {
        id: 6,
        title: "JSON Schema Validation",
        content: `## JSON Schema Validation

### Maven Dependency
\`\`\`xml
<dependency>
  <groupId>io.rest-assured</groupId>
  <artifactId>json-schema-validator</artifactId>
  <version>5.4.0</version>
</dependency>
\`\`\`

### Schema File (src/test/resources/user-schema.json)
\`\`\`json
{
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "id":         { "type": "integer" },
        "email":      { "type": "string", "format": "email" },
        "first_name": { "type": "string" },
        "last_name":  { "type": "string" }
      },
      "required": ["id", "email", "first_name", "last_name"]
    }
  }
}
\`\`\`

### Validating Schema
\`\`\`java
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

given()
  .get("/users/1")
  .then()
  .statusCode(200)
  .body(matchesJsonSchemaInClasspath("user-schema.json"));
\`\`\`

### Key Points
✅ Schema validation catches contract breaking changes early  
✅ Separate schema validation from value assertion tests  
✅ Store schemas in src/test/resources for classpath access`,
        exercises: [
          {
            title: "Create and validate schema",
            description: "Write a JSON schema for the GET /users response from reqres.in and validate it.",
          },
        ],
      },
      {
        id: 7,
        title: "Response Body Assertions",
        content: `## Response Body Assertions

### Hamcrest Matchers
\`\`\`java
.body("name", equalTo("Alice"))
.body("age", greaterThan(18))
.body("score", lessThanOrEqualTo(100))
.body("email", containsString("@example.com"))
.body("roles", hasItem("admin"))
.body("data", hasSize(6))
.body("active", is(true))
.body("errors", nullValue())
.body("id", notNullValue())
\`\`\`

### List Assertions
\`\`\`java
// Assert all items in list
.body("data.id", hasItems(1, 2, 3))
.body("data.first_name", everyItem(notNullValue()))

// Assert list size
.body("data.size()", equalTo(6))
\`\`\`

### Nested JSON
\`\`\`java
// Response: { "user": { "address": { "city": "Mumbai" } } }
.body("user.address.city", equalTo("Mumbai"))

// Response: { "results": [ { "id": 1 }, { "id": 2 } ] }
.body("results[0].id", equalTo(1))
.body("results.id", hasItems(1, 2))
\`\`\``,
        exercises: [
          {
            title: "Assert list response",
            description: "Call GET /users?page=1, assert data list has 6 items and all avatars are not null.",
          },
        ],
      },
      {
        id: 8,
        title: "API Chaining & End-to-End Scenarios",
        content: `## API Chaining & End-to-End Scenarios

### E2E: Create → Get → Update → Delete
\`\`\`java
public class UserLifecycleTest {

  @Test
  public void userCRUD() {
    // CREATE
    String userId = given()
      .contentType(ContentType.JSON)
      .body("{\\"name\\":\\"Alice\\",\\"job\\":\\"QA\\"}")
      .post("https://reqres.in/api/users")
      .then()
      .statusCode(201)
      .extract().path("id");

    System.out.println("Created user: " + userId);

    // GET (using created id — reqres mock)
    given()
      .get("https://reqres.in/api/users/2")
      .then()
      .statusCode(200)
      .body("data.id", equalTo(2));

    // UPDATE
    given()
      .contentType(ContentType.JSON)
      .body("{\\"name\\":\\"Alice Updated\\",\\"job\\":\\"Senior QA\\"}")
      .put("https://reqres.in/api/users/2")
      .then()
      .statusCode(200)
      .body("name", equalTo("Alice Updated"));

    // DELETE
    given()
      .delete("https://reqres.in/api/users/2")
      .then()
      .statusCode(204);
  }
}
\`\`\`

### Key Points
✅ Chain dependent API calls — pass data from one response to next  
✅ Test happy path end-to-end AND individual negative scenarios  
✅ Use TestNG \`@Test(dependsOnMethods)\` or sequence test methods for E2E`,
        exercises: [
          {
            title: "Full CRUD test",
            description: "Write create → read → update → delete test on reqres.in verifying each step.",
          },
        ],
      },
      {
        id: 9,
        title: "Performance & Response Time Testing",
        content: `## Performance & Response Time Testing

### Response Time Assertion
\`\`\`java
import java.util.concurrent.TimeUnit;
import static org.hamcrest.Matchers.lessThan;

given()
  .get("/users/1")
  .then()
  .statusCode(200)
  .time(lessThan(2000L), TimeUnit.MILLISECONDS);
\`\`\`

### Measure Response Time
\`\`\`java
long startTime = System.currentTimeMillis();
Response response = given().get("/users/1");
long duration = System.currentTimeMillis() - startTime;
System.out.println("Response time: " + duration + "ms");

// Also available via REST Assured
long responseTime = response.getTime(); // in milliseconds
\`\`\`

### Load Testing with Gatling (concept)
\`\`\`scala
// BasicSimulation.scala
class BasicSimulation extends Simulation {
  val httpProtocol = http.baseUrl("https://reqres.in")
  val scn = scenario("Get Users")
    .exec(http("Get Users").get("/api/users?page=1"))

  setUp(scn.inject(atOnceUsers(100)).protocols(httpProtocol))
    .assertions(global.responseTime.max.lt(2000))
}
\`\`\`

### Key Points
✅ Assert response time in all critical API tests  
✅ REST Assured \`time()\` is best for unit-level performance checks  
✅ Use Gatling or k6 for full load testing`,
        exercises: [
          {
            title: "Assert all APIs respond under 2s",
            description: "Add response time assertion to all existing API tests. Flag any that exceed 2 seconds.",
          },
        ],
      },
      {
        id: 10,
        title: "API Test Reporting & CI/CD",
        content: `## API Test Reporting & CI/CD

### Allure with REST Assured
\`\`\`xml
<!-- pom.xml -->
<dependency>
  <groupId>io.qameta.allure</groupId>
  <artifactId>allure-rest-assured</artifactId>
  <version>2.25.0</version>
</dependency>
\`\`\`

\`\`\`java
// Add Allure filter to log request/response
RestAssured.filters(new AllureRestAssured());
\`\`\`

### GitHub Actions CI (ci.yml)
\`\`\`yaml
name: API Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-java@v3
        with:
          java-version: 11
      - run: mvn test
      - uses: actions/upload-artifact@v3
        with:
          name: allure-results
          path: target/allure-results
\`\`\`

### Key Points
✅ AllureRestAssured filter automatically captures request/response in report  
✅ Always run tests in CI on push/PR  
✅ Publish Allure report as artifact for visibility`,
        exercises: [
          {
            title: "Setup CI for API tests",
            description: "Create GitHub Actions workflow to run API tests on every push.",
          },
        ],
      },
      {
        id: 11,
        title: "Mocking APIs with WireMock",
        content: `## Mocking APIs with WireMock

### Maven Dependency
\`\`\`xml
<dependency>
  <groupId>com.github.tomakehurst</groupId>
  <artifactId>wiremock-jre8</artifactId>
  <version>2.35.0</version>
  <scope>test</scope>
</dependency>
\`\`\`

### Basic WireMock Setup
\`\`\`java
@Rule
public WireMockRule wireMockRule = new WireMockRule(8089);

@Test
public void mockGetUser() {
  stubFor(get(urlEqualTo("/api/users/1"))
    .willReturn(aResponse()
      .withStatus(200)
      .withHeader("Content-Type", "application/json")
      .withBody("{\\"id\\":1,\\"name\\":\\"Alice\\"}")));

  given()
    .baseUri("http://localhost:8089")
    .get("/api/users/1")
    .then()
    .statusCode(200)
    .body("name", equalTo("Alice"));
}
\`\`\`

### Key Points
✅ Use WireMock when real API is unavailable or slow  
✅ Mock both success and error scenarios  
✅ WireMock can simulate timeouts and network failures`,
        exercises: [
          {
            title: "Mock a 404 error response",
            description: "Use WireMock to stub an endpoint to return 404. Write a test that handles it gracefully.",
          },
        ],
      },
      {
        id: 12,
        title: "GraphQL API Testing",
        content: `## GraphQL API Testing

### GraphQL vs REST
| Feature | REST | GraphQL |
|---------|------|---------|
| Endpoints | Multiple | Single (/graphql) |
| Over-fetching | Common | No |
| Method | GET/POST/PUT/DELETE | POST only |
| Response shape | Fixed | Flexible |

### Testing GraphQL with REST Assured
\`\`\`java
String query = "{ \\"query\\": \\"{ users { id name email } }\\" }";

given()
  .contentType(ContentType.JSON)
  .body(query)
  .post("https://api.example.com/graphql")
  .then()
  .statusCode(200)
  .body("data.users[0].name", notNullValue());
\`\`\`

### With Variables
\`\`\`java
String query = "{\\"query\\":\\"query GetUser($id: ID!) { user(id: $id) { name email } }\\",\\"variables\\":{\\"id\\":\\"1\\"}}";

given()
  .contentType("application/json")
  .body(query)
  .post("/graphql");
\`\`\`

### Key Points
✅ GraphQL always uses POST  
✅ Check for \`errors\` key in response — GraphQL returns 200 even for errors  
✅ Test both data and errors fields in response`,
        exercises: [
          {
            title: "Test GraphQL query",
            description: "Use a public GraphQL API (like countries.trevorblades.com) and write tests for a query.",
          },
        ],
      },
    ],
  },
  playwright: {
    title: "Playwright",
    icon: "🎭",
    color: "#2d9649",
    subtopics: [
      {
        id: 1,
        title: "Introduction to Playwright",
        content: `## Introduction to Playwright

Playwright is a modern browser automation framework by Microsoft. It supports Chromium, Firefox, and WebKit.

### Why Playwright over Selenium?
| Feature | Playwright | Selenium |
|---------|-----------|---------|
| Auto-wait | ✅ Built-in | ❌ Manual |
| Speed | ⚡ Fast | Slower |
| Browsers | Chrome, Firefox, WebKit | Chrome, Firefox, Edge, Safari |
| Language | JS/TS, Python, Java, C# | All |
| Network interception | ✅ Native | Limited |
| Mobile emulation | ✅ Native | Limited |
| Iframe handling | ✅ Simple | Complex |

### Quick Start (JavaScript/TypeScript)
\`\`\`bash
npm init playwright@latest
\`\`\`

### First Test
\`\`\`javascript
import { test, expect } from '@playwright/test';

test('basic navigation', async ({ page }) => {
  await page.goto('https://playwright.dev');
  const title = page.locator('h1');
  await expect(title).toContainText('Playwright');
});
\`\`\`

### Key Points
✅ Playwright auto-waits for elements before actions  
✅ Tests run in isolation — each test gets fresh browser context  
✅ Built-in test runner, assertions, and HTML reporter`,
        exercises: [
          { title: "Run first Playwright test", description: "Install Playwright, run the example test, and view the HTML report." },
        ],
      },
      {
        id: 2,
        title: "Playwright Locators",
        content: `## Playwright Locators

### Recommended Locators (in order)
\`\`\`javascript
// Role-based (most accessible)
page.getByRole('button', { name: 'Submit' })
page.getByRole('link', { name: 'Home' })
page.getByRole('textbox', { name: 'Email' })
page.getByRole('checkbox', { name: 'Agree' })

// Text content
page.getByText('Welcome')
page.getByText(/hello/i)

// Label
page.getByLabel('Username')

// Placeholder
page.getByPlaceholder('Enter email')

// Alt text (images)
page.getByAltText('Company Logo')

// Test ID
page.getByTestId('submit-btn')

// CSS / XPath (fallback)
page.locator('#username')
page.locator('//input[@type="email"]')
\`\`\`

### Filtering Locators
\`\`\`javascript
// Filter by text
page.locator('div').filter({ hasText: 'Product A' })

// Filter by nested element
page.locator('li').filter({ has: page.locator('button') })

// nth item
page.locator('button').nth(2)
page.locator('button').first()
page.locator('button').last()
\`\`\`

### Key Points
✅ Use \`getByRole\` first — matches how users and screen readers see it  
✅ Playwright locators auto-retry until element is ready  
✅ Avoid CSS locators tied to dynamic class names`,
        exercises: [
          { title: "Rewrite selector using getByRole", description: "Take an existing test with CSS selectors and convert to role-based locators." },
        ],
      },
      {
        id: 3,
        title: "Actions & Interactions",
        content: `## Actions & Interactions

### Common Actions
\`\`\`javascript
await page.click('#btn');
await page.fill('#input', 'Hello');
await page.type('#input', 'Hello');   // types char by char
await page.press('Enter');
await page.selectOption('#select', 'value');
await page.check('#checkbox');
await page.uncheck('#checkbox');
await page.hover('#menu');
await page.dblclick('#item');
await page.tap('#btn');               // mobile touch

// Focus & blur
await page.focus('#input');
await page.dispatchEvent('#input', 'change');
\`\`\`

### Keyboard
\`\`\`javascript
await page.keyboard.press('Enter');
await page.keyboard.press('Control+A');
await page.keyboard.type('Hello World');
\`\`\`

### Upload Files
\`\`\`javascript
await page.setInputFiles('#upload', 'test-file.pdf');
// Multiple files
await page.setInputFiles('#upload', ['file1.pdf', 'file2.pdf']);
\`\`\`

### Screenshots
\`\`\`javascript
await page.screenshot({ path: 'screenshot.png', fullPage: true });
await page.locator('#element').screenshot({ path: 'element.png' });
\`\`\``,
        exercises: [
          { title: "Form fill and submit", description: "Fill a multi-field form, select dropdown, check checkbox, and submit." },
          { title: "File upload test", description: "Automate a file upload input field with setInputFiles." },
        ],
      },
      {
        id: 4,
        title: "Assertions",
        content: `## Assertions

### Auto-retrying Web Assertions
\`\`\`javascript
// Visibility
await expect(page.locator('#btn')).toBeVisible();
await expect(page.locator('#spinner')).toBeHidden();

// Text content
await expect(page.locator('h1')).toContainText('Welcome');
await expect(page.locator('#title')).toHaveText('My Page');

// Attribute
await expect(page.locator('input')).toHaveAttribute('type', 'email');
await expect(page.locator('input')).toHaveValue('test@email.com');

// State
await expect(page.locator('#submit')).toBeEnabled();
await expect(page.locator('#submit')).toBeDisabled();
await expect(page.locator('#checkbox')).toBeChecked();

// Count
await expect(page.locator('li')).toHaveCount(5);

// URL
await expect(page).toHaveURL(/dashboard/);
await expect(page).toHaveTitle(/Home/);
\`\`\`

### Soft Assertions
\`\`\`javascript
const softExpect = expect.soft;
await softExpect(page.locator('#name')).toHaveText('Alice');
await softExpect(page.locator('#age')).toHaveText('25');
// Test continues even if some assertions fail
\`\`\`

### Key Points
✅ Playwright assertions auto-retry for up to 5 seconds (configurable)  
✅ Use \`expect.soft\` when you want all assertions to run before failing`,
        exercises: [
          { title: "Assert all form validation errors", description: "Submit empty form and assert all error messages appear using soft assertions." },
        ],
      },
      {
        id: 5,
        title: "Page Object Model in Playwright",
        content: `## Page Object Model in Playwright

### LoginPage.ts
\`\`\`typescript
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByLabel('Username');
    this.password = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('.error-text');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

  async expectErrorMessage(msg: string) {
    await expect(this.errorMessage).toContainText(msg);
  }
}
\`\`\`

### Login Test
\`\`\`typescript
import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('valid login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('user@test.com', 'password');
  await page.waitForURL('/dashboard');
});

test('invalid login shows error', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('wrong@test.com', 'wrongpass');
  await login.expectErrorMessage('Invalid credentials');
});
\`\`\``,
        exercises: [
          { title: "Build POM for saucedemo.com", description: "Create LoginPage, InventoryPage, and CartPage classes for Playwright." },
        ],
      },
      {
        id: 6,
        title: "Network Interception",
        content: `## Network Interception

### Intercept & Modify Requests
\`\`\`javascript
// Block all images
await page.route('**/*.{png,jpg,jpeg}', route => route.abort());

// Mock API response
await page.route('**/api/users', route => {
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify([{ id: 1, name: 'Mocked User' }])
  });
});

// Modify request headers
await page.route('**/api/**', route => {
  const headers = { ...route.request().headers(), 'Authorization': 'Bearer testtoken' };
  route.continue({ headers });
});
\`\`\`

### Wait for Network
\`\`\`javascript
// Wait for specific API call
const [response] = await Promise.all([
  page.waitForResponse('**/api/users'),
  page.click('#load-users')
]);

const data = await response.json();
console.log(data);

// Wait for request to finish
await page.waitForLoadState('networkidle');
\`\`\`

### Key Points
✅ Use route interception to test without real backend  
✅ Mock error responses (500, 401) to test error handling  
✅ \`waitForResponse\` is better than arbitrary waits`,
        exercises: [
          { title: "Mock API and test UI", description: "Intercept a GET API call and return mock data. Assert the UI renders the mocked data." },
          { title: "Block images to speed up tests", description: "Use page.route to block all image requests and measure test speed improvement." },
        ],
      },
      {
        id: 7,
        title: "Hooks, Fixtures & Configuration",
        content: `## Hooks, Fixtures & Configuration

### Hooks
\`\`\`javascript
import { test } from '@playwright/test';

test.describe('Login Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://saucedemo.com');
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status === 'failed') {
      await page.screenshot({ path: \`screenshots/\${testInfo.title}.png\` });
    }
  });

  test('login test', async ({ page }) => {
    // test here
  });
});
\`\`\`

### Custom Fixtures
\`\`\`typescript
// fixtures.ts
import { test as base } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  }
});

// test.spec.ts
import { test } from './fixtures';

test('login works', async ({ loginPage }) => {
  await loginPage.login('user', 'pass');
});
\`\`\`

### playwright.config.ts
\`\`\`typescript
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ]
});
\`\`\``,
        exercises: [
          { title: "Setup beforeEach login", description: "Use beforeEach to log in before each test instead of repeating login code." },
          { title: "Custom logged-in fixture", description: "Create a custom fixture that provides an already-authenticated page." },
        ],
      },
      {
        id: 8,
        title: "Screenshots, Videos & Tracing",
        content: `## Screenshots, Videos & Tracing

### Screenshots
\`\`\`javascript
// Manual screenshot
await page.screenshot({ path: 'screenshot.png' });
await page.screenshot({ path: 'full.png', fullPage: true });

// Auto screenshot on failure in config
use: { screenshot: 'only-on-failure' }
\`\`\`

### Videos
\`\`\`javascript
// In playwright.config.ts
use: { video: 'retain-on-failure' }
// Options: 'off' | 'on' | 'retain-on-failure' | 'on-first-retry'
\`\`\`

### Trace Viewer
\`\`\`javascript
// In config
use: { trace: 'on-first-retry' }

// Or in test
await context.tracing.start({ screenshots: true, snapshots: true });
// ... test steps ...
await context.tracing.stop({ path: 'trace.zip' });

// View trace: npx playwright show-trace trace.zip
\`\`\`

### Key Points
✅ Trace viewer shows every action, network request, and DOM snapshot  
✅ Set \`video: 'retain-on-failure'\` and \`trace: 'on-first-retry'\` in CI  
✅ HTML report at: \`npx playwright show-report\``,
        exercises: [
          { title: "Capture trace for failing test", description: "Write a test expected to fail, capture the trace, and explore it with Playwright Trace Viewer." },
        ],
      },
      {
        id: 9,
        title: "API Testing with Playwright",
        content: `## API Testing with Playwright

### API Request Context
\`\`\`javascript
import { test, expect } from '@playwright/test';

test('GET users', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.data).toHaveLength(6);
  expect(body.data[0]).toHaveProperty('email');
});

test('POST create user', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: { name: 'Alice', job: 'QA' }
  });
  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.name).toBe('Alice');
});
\`\`\`

### Auth State for UI Tests
\`\`\`javascript
// globalSetup.ts — login once and save state
async function globalSetup(config) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('/login');
  await page.fill('#username', 'admin');
  await page.fill('#password', 'password');
  await page.click('#submit');
  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
}

// playwright.config.ts
use: { storageState: 'auth.json' }
\`\`\``,
        exercises: [
          { title: "API test with Playwright", description: "Write full CRUD API test using Playwright's request fixture against reqres.in." },
          { title: "Save login state", description: "Use storageState to login once and reuse auth across all tests." },
        ],
      },
      {
        id: 10,
        title: "Mobile Testing & Emulation",
        content: `## Mobile Testing & Emulation

### Device Emulation
\`\`\`javascript
import { test, devices } from '@playwright/test';

test.use({ ...devices['iPhone 13'] });

test('mobile test', async ({ page }) => {
  await page.goto('https://example.com');
  // Test mobile viewport, touch events etc.
});
\`\`\`

### In playwright.config.ts
\`\`\`typescript
projects: [
  { name: 'chrome', use: { ...devices['Desktop Chrome'] } },
  { name: 'iphone', use: { ...devices['iPhone 13'] } },
  { name: 'pixel',  use: { ...devices['Pixel 5'] } },
]
\`\`\`

### Geolocation & Permissions
\`\`\`javascript
const context = await browser.newContext({
  geolocation: { latitude: 19.076, longitude: 72.877 }, // Mumbai
  permissions: ['geolocation']
});
\`\`\`

### Viewport
\`\`\`javascript
await page.setViewportSize({ width: 375, height: 812 });
\`\`\`

### Key Points
✅ Playwright emulates 60+ real device profiles  
✅ Test responsive layouts without a real device  
✅ Add mobile projects to CI matrix for cross-device coverage`,
        exercises: [
          { title: "Test on iPhone 13 viewport", description: "Run an existing test with iPhone 13 device emulation. Check if hamburger menu appears." },
        ],
      },
      {
        id: 11,
        title: "CI/CD Integration",
        content: `## CI/CD Integration

### GitHub Actions Workflow
\`\`\`yaml
name: Playwright Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      - name: Run tests
        run: npx playwright test
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
\`\`\`

### Key Points
✅ Use \`--with-deps\` to install browser system dependencies in CI  
✅ Always upload HTML report as artifact  
✅ Use \`--shard=1/4\` for parallel test sharding across CI machines`,
        exercises: [
          { title: "Setup GitHub Actions", description: "Create .github/workflows/playwright.yml and push. Verify tests run on GitHub Actions." },
        ],
      },
      {
        id: 12,
        title: "Advanced Playwright Patterns",
        content: `## Advanced Playwright Patterns

### Parallel Tests
\`\`\`typescript
// playwright.config.ts
export default defineConfig({
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
});
\`\`\`

### Data-Driven Tests
\`\`\`javascript
const users = [
  { email: 'user1@test.com', role: 'admin' },
  { email: 'user2@test.com', role: 'viewer' },
];

for (const user of users) {
  test(\`login as \${user.role}\`, async ({ page }) => {
    await page.goto('/login');
    await page.fill('#email', user.email);
    // ...
  });
}
\`\`\`

### Retry Flaky Tests
\`\`\`typescript
// Config level
export default defineConfig({ retries: 2 });

// Test level
test('flaky test', { retries: 3 }, async ({ page }) => {
  // ...
});
\`\`\`

### Visual Comparisons
\`\`\`javascript
await expect(page).toHaveScreenshot('homepage.png');
await expect(page.locator('#chart')).toHaveScreenshot('chart.png', {
  maxDiffPixels: 100
});

// Update baselines: npx playwright test --update-snapshots
\`\`\`

### Key Points
✅ Enable \`fullyParallel\` for max speed — each test gets its own worker  
✅ Visual snapshots catch unintended UI regressions  
✅ Use \`test.describe.configure({ mode: 'serial' })\` for dependent tests`,
        exercises: [
          { title: "Add visual regression test", description: "Use toHaveScreenshot to capture and compare homepage. Change a CSS color and see it fail." },
        ],
      },
    ],
  },
  interview: {
    title: "Interview Preparation",
    icon: "📝",
    color: "#d97706",
    subtopics: [
      {
        id: 1,
        title: "Selenium Interview Questions",
        content: `## Selenium Interview Questions

### 1. What is the difference between findElement and findElements?
- \`findElement\` returns first matching element; throws \`NoSuchElementException\` if not found
- \`findElements\` returns list of all matching elements; returns **empty list** if not found (no exception)

### 2. What is the difference between Implicit, Explicit, and Fluent waits?
- **Implicit**: Global wait applied to all \`findElement\` calls. Simple but can cause issues with explicit wait.
- **Explicit**: Wait for a specific condition on a specific element. Best practice.
- **Fluent**: Like explicit but with configurable polling interval and exception ignoring.

### 3. What is StaleElementReferenceException? How to handle it?
Occurs when element was found but page re-rendered — the DOM reference is no longer valid.
**Solution**: Re-find the element or use \`ExpectedConditions.refreshed()\`.

### 4. How do you handle dynamic XPath?
Use \`contains()\`, \`starts-with()\`, \`text()\`:
\`\`\`java
//input[contains(@id, 'username')]
//button[starts-with(@class, 'submit')]
//button[text()='Login']
\`\`\`

### 5. Difference between driver.close() and driver.quit()?
- \`close()\`: Closes current active window only
- \`quit()\`: Closes all browser windows and ends WebDriver session

### 6. What is Page Object Model?
Design pattern where each web page = one class. Locators and methods are in the page class; assertions are in test class. Improves maintainability.

### 7. How do you run tests in parallel?
- TestNG: Configure \`parallel="tests"\` in testng.xml
- Maven Surefire: \`forkCount=2\`
- Selenium Grid: Hub + nodes
- Cloud: BrowserStack, Sauce Labs

### 8. What is Selenium Grid?
Allows running tests on multiple machines and browsers simultaneously using Hub (manages) and Node (executes) architecture.

### 9. What is the difference between CSS Selector and XPath?
| CSS Selector | XPath |
|---|---|
| Faster in most browsers | Slower but more powerful |
| Cannot traverse up DOM | Can traverse parent/ancestors |
| Syntax: \`#id .class\` | Syntax: \`//tag[@attr='val']\` |
| Cannot use text() | Can use \`text()\` and \`contains()\` |

### 10. What are different types of locators in Selenium? Which is most preferred?
8 locators: ID, Name, ClassName, TagName, LinkText, PartialLinkText, CSS Selector, XPath.
**Priority**: ID > Name > CSS Selector > XPath. ID is fastest and most stable.

### 11. How do you handle iFrames in Selenium?
\`\`\`java
driver.switchTo().frame("frameName");     // by name/id
driver.switchTo().frame(0);               // by index
driver.switchTo().frame(iframeElement);   // by WebElement
driver.switchTo().defaultContent();       // back to main page
\`\`\`

### 12. How do you handle browser alerts?
\`\`\`java
Alert alert = driver.switchTo().alert();
alert.getText();     // get message
alert.accept();      // click OK
alert.dismiss();     // click Cancel
alert.sendKeys("x"); // type in prompt
\`\`\`

### 13. What is Actions class? When do you use it?
Used for complex mouse and keyboard interactions not possible with simple click/sendKeys:
- Hover: \`actions.moveToElement(el).perform()\`
- Right-click: \`actions.contextClick(el).perform()\`
- Drag & drop: \`actions.dragAndDrop(src, tgt).perform()\`
- Key combo: \`actions.keyDown(Keys.CONTROL).sendKeys("a").keyUp(Keys.CONTROL).perform()\`

### 14. What is JavaScriptExecutor? When is it used?
Interface to execute JavaScript in the browser context. Used when:
- Regular click fails (hidden/overlapping elements)
- Scroll to element: \`js.executeScript("arguments[0].scrollIntoView(true);", el)\`
- Set value directly: \`js.executeScript("arguments[0].value='text';", el)\`

### 15. How do you take a screenshot in Selenium?
\`\`\`java
TakesScreenshot ts = (TakesScreenshot) driver;
File src = ts.getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(src, new File("screenshot.png"));
\`\`\`

### 16. What is WebDriverManager and why is it used?
Library that automatically downloads the correct browser driver binary (ChromeDriver, GeckoDriver) matching the installed browser version. Eliminates manual driver management.
\`\`\`java
WebDriverManager.chromedriver().setup();
\`\`\`

### 17. How do you handle dropdowns in Selenium?
\`\`\`java
Select select = new Select(driver.findElement(By.id("dropdown")));
select.selectByVisibleText("India");
select.selectByValue("IN");
select.selectByIndex(2);
\`\`\`
For non-\`<select>\` custom dropdowns: click to open, then click option using locator.

### 18. What is the difference between absolute and relative XPath?
- **Absolute**: Starts from root \`/html/body/div/input\` — fragile, breaks on any UI change
- **Relative**: Starts anywhere \`//input[@id='user']\` — recommended, robust

### 19. How do you verify a checkbox is checked?
\`\`\`java
boolean isChecked = driver.findElement(By.id("agree")).isSelected();
\`\`\`

### 20. What is Page Factory in Selenium?
Optimization of POM using \`@FindBy\` annotations and lazy element initialization:
\`\`\`java
@FindBy(id = "username") WebElement username;
// In constructor:
PageFactory.initElements(driver, this);
\`\`\`
Elements are initialized when first used, not when constructor runs.`,
        exercises: [],
      },
      {
        id: 2,
        title: "API Testing Interview Questions",
        content: `## API Testing Interview Questions

### 1. What is REST? What are REST constraints?
REST = Representational State Transfer. Constraints:
- Stateless (no session on server)
- Client-Server
- Cacheable
- Uniform Interface
- Layered System

### 2. Difference between PUT and PATCH?
- **PUT**: Full replacement of resource (must send complete body)
- **PATCH**: Partial update (send only changed fields)

### 3. What is idempotent in REST?
Safe to call multiple times with same result:
- GET, PUT, DELETE, HEAD = idempotent
- POST = NOT idempotent

### 4. How do you validate API response?
1. Status code
2. Response body (field values, data types)
3. JSON schema validation
4. Response headers (Content-Type, etc.)
5. Response time

### 5. What is the difference between authentication and authorization?
- **Authentication**: Who are you? (Login, JWT)
- **Authorization**: What can you do? (Roles, Permissions)

### 6. How do you handle dynamic data in API tests?
- Use expression/regex matchers: \`notNull()\`, \`matchesPattern()\`
- Extract dynamic values and reuse: \`extract().path("id")\`
- Use JSON schema validation instead of exact values

### 7. What is contract testing?
Testing that API matches agreed contract (schema) between consumer and provider. Tools: Pact, Spring Cloud Contract.

### 8. What is CORS?
Cross-Origin Resource Sharing — HTTP mechanism allowing browsers to make requests to different domains. APIs must include appropriate CORS headers.

### 9. What is the difference between SOAP and REST?
| SOAP | REST |
|------|------|
| Protocol | Architectural style |
| XML only | JSON, XML, text |
| Strict standards (WSDL) | Flexible |
| Stateful or stateless | Stateless |
| WS-Security | HTTPS, OAuth |
| Slower | Faster |

### 10. What HTTP status codes should every tester know?
- **200** OK · **201** Created · **204** No Content · **206** Partial Content
- **301** Moved Permanently · **304** Not Modified
- **400** Bad Request · **401** Unauthorized · **403** Forbidden · **404** Not Found · **409** Conflict · **422** Unprocessable Entity
- **500** Internal Server Error · **502** Bad Gateway · **503** Service Unavailable · **504** Gateway Timeout

### 11. What is REST Assured? How does Given/When/Then work?
Java library for API testing. BDD-style syntax:
- **given()**: Request setup (headers, body, auth, params)
- **when()**: HTTP action (get, post, put, delete)
- **then()**: Assertions (statusCode, body values)

### 12. What is JSON Schema validation?
Validates the **structure and types** of JSON response — not just values. Catches contract-breaking changes.
\`\`\`java
.body(matchesJsonSchemaInClasspath("user-schema.json"))
\`\`\`

### 13. How do you test API security?
- Test without auth token → expect 401
- Test with expired token → expect 401
- Test with insufficient permissions → expect 403
- Test SQL injection in query params
- Test for sensitive data in response (passwords, tokens)

### 14. What is the difference between query param and path param?
- **Path param**: Part of URL path — \`/users/{id}\` → \`/users/5\`
- **Query param**: After \`?\` — \`/users?page=2&size=10\`

### 15. What is API mocking? When do you use it?
Creating a fake API that returns predefined responses. Use when:
- Real API is not ready yet
- Testing error scenarios (500, timeout)
- Avoiding costs of hitting real 3rd party APIs
- Tools: WireMock, MockServer, Postman Mock Server

### 16. How do you chain API calls in a test?
Extract response value from one call and pass to next:
\`\`\`java
String userId = given().post("/users").then().extract().path("id");
given().get("/users/" + userId).then().statusCode(200);
\`\`\`

### 17. What is the difference between integration testing and API testing?
- **API testing**: Tests the API contract — inputs, outputs, status codes
- **Integration testing**: Tests how multiple components work together including APIs, DB, services

### 18. How do you assert response time in REST Assured?
\`\`\`java
given().get("/users").then().time(lessThan(2000L), TimeUnit.MILLISECONDS);
\`\`\`

### 19. What is Bearer Token authentication?
Token-based auth. Client sends \`Authorization: Bearer <token>\` header. Server validates the JWT token without storing session.

### 20. What is the difference between functional and non-functional API testing?
- **Functional**: Does it return correct data? Correct status codes? Business logic correct?
- **Non-functional**: Performance (response time), load (concurrent users), security (auth, injection)`,
        exercises: [],
      },
      {
        id: 3,
        title: "Playwright Interview Questions",
        content: `## Playwright Interview Questions

### 1. How does Playwright differ from Selenium?
| | Playwright | Selenium |
|-|-----------|---------|
| Auto-wait | Built-in | Manual waits |
| Protocol | CDP/Browser-native | W3C WebDriver |
| Test runner | Built-in | External (TestNG, JUnit) |
| Parallel by default | Yes | No |
| Network mock | Native | Limited |

### 2. What is a Fixture in Playwright?
Reusable setup code injected into tests. Playwright provides built-in fixtures like \`page\`, \`browser\`, \`context\`, and allows custom fixtures.

### 3. How do you handle multiple pages/tabs?
\`\`\`javascript
const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.click('a[target="_blank"]')
]);
await newPage.waitForLoadState();
\`\`\`

### 4. What is storageState?
Saves browser cookies and localStorage to a file. Use in \`globalSetup\` to login once and reuse auth across all tests.

### 5. How does Playwright auto-wait work?
Before every action, Playwright waits for:
- Element to exist in DOM
- Element to be visible
- Element to be enabled
- Element to be stable (not animating)

### 6. What is Playwright Trace Viewer?
Records full test execution including screenshots, network requests, and DOM snapshots. View with \`npx playwright show-trace trace.zip\`.

### 7. How do you test APIs in Playwright?
Use \`request\` fixture to make HTTP calls without browser. Useful for test data setup or pure API tests.

### 8. What are soft assertions?
\`expect.soft()\` — test continues even if assertion fails. Collects all failures and reports at end.

### 9. What is the recommended locator strategy in Playwright?
Priority order:
1. \`getByRole()\` — most accessible, matches user perception
2. \`getByLabel()\` — for form inputs
3. \`getByText()\` — visible text
4. \`getByTestId()\` — data-testid attribute
5. \`locator()\` with CSS/XPath — last resort

### 10. What is the difference between page.click() and locator.click()?
- \`page.click(selector)\` — shorthand, deprecated in newer versions
- \`locator.click()\` — preferred, supports chaining, filtering and auto-retry

### 11. How do you intercept network requests in Playwright?
\`\`\`javascript
await page.route('**/api/users', route => {
  route.fulfill({ status: 200, body: JSON.stringify([{id:1}]) });
});
\`\`\`

### 12. What is the difference between Browser, BrowserContext, and Page?
- **Browser**: The browser process (Chrome/Firefox/WebKit)
- **BrowserContext**: Isolated session — like incognito window. Separate cookies/storage per context
- **Page**: Single tab inside a context

### 13. How do you run Playwright tests in headed vs headless mode?
\`\`\`javascript
// playwright.config.ts
use: { headless: false }  // headed
use: { headless: true }   // headless (default in CI)
// CLI:
npx playwright test --headed
\`\`\`

### 14. How do you configure parallel execution in Playwright?
\`\`\`typescript
export default defineConfig({
  fullyParallel: true,          // all tests run in parallel
  workers: process.env.CI ? 2 : 4,  // threads
});
\`\`\`

### 15. What is visual regression testing in Playwright?
\`\`\`javascript
await expect(page).toHaveScreenshot('homepage.png');
\`\`\`
Compares current screenshot with stored baseline. Fails if pixels differ beyond threshold.

### 16. How do you retry a failing test in Playwright?
\`\`\`typescript
// Config level
retries: 2
// Test level
test('flaky test', { retries: 3 }, async ({ page }) => { ... });
\`\`\`

### 17. What is \`waitForLoadState\` and when do you use it?
Waits for a specific network/load condition:
- \`'load'\` — window.onload fired
- \`'domcontentloaded'\` — HTML fully parsed
- \`'networkidle'\` — no network requests for 500ms (useful after SPAs render)

### 18. How do you handle file downloads in Playwright?
\`\`\`javascript
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.click('#download-btn')
]);
await download.saveAs('./files/report.pdf');
\`\`\`

### 19. What is the use of \`test.describe\` and \`test.describe.configure\`?
- \`test.describe\` — group related tests together with shared hooks
- \`test.describe.configure({ mode: 'serial' })\` — run tests in that group sequentially (useful for dependent tests)

### 20. How do you emulate mobile devices in Playwright?
\`\`\`typescript
import { devices } from '@playwright/test';
test.use({ ...devices['iPhone 13'] });
// Or in config:
projects: [{ name: 'mobile', use: { ...devices['Pixel 5'] } }]
\`\`\``,
        exercises: [],
      },
      {
        id: 4,
        title: "General SDET Interview Questions",
        content: `## General SDET Interview Questions

### 1. What is the difference between QA and SDET?
- **QA**: Validates software meets requirements, often manual testing
- **SDET**: Builds automation frameworks, tools, writes code for testing

### 2. What is Test Pyramid?
Bottom → Top (ratio of tests):
- **Unit Tests**: 70% — fast, cheap, developers write
- **Integration Tests**: 20% — test module interactions
- **E2E Tests**: 10% — full user journey, slow, expensive

### 3. Difference between functional and non-functional testing?
- **Functional**: Tests what system does (login, search, payment)
- **Non-functional**: Tests how system performs (performance, security, usability)

### 4. What makes a good test case?
- Clear objective
- Single purpose
- Independent (no dependency on other tests)
- Repeatable
- Has expected result

### 5. What is CI/CD in testing?
- **CI**: Tests run on every commit automatically (catch bugs early)
- **CD**: Passing tests allow automatic deployment to staging/production

### 6. What is flaky test? How do you fix it?
Test that passes sometimes and fails sometimes without code change.
Causes: timing issues, dynamic data, shared state.
Fix: explicit waits, test isolation, retry mechanism, mock dynamic data.

### 7. BDD vs TDD?
- **TDD**: Write test first → write code to pass test → refactor
- **BDD**: Define behavior in plain language (Given/When/Then) → write automation → code

### 8. What is exploratory testing?
Simultaneous test design and execution. Tester explores app without predefined test cases, relying on knowledge and intuition. Cannot be automated.

### 9. What is regression testing vs smoke testing vs sanity testing?
- **Regression**: Re-run all tests after a change to ensure nothing broke
- **Smoke**: Quick basic tests to verify the build is stable enough for further testing
- **Sanity**: Narrow focused tests after a bug fix to verify the specific fix works

### 10. What is the difference between black box, white box, and grey box testing?
- **Black box**: Tester has no knowledge of internal code; tests input/output only
- **White box**: Tester knows internal code; tests code paths, coverage
- **Grey box**: Partial knowledge; combination of both approaches

### 11. What test types should be automated? What should not?
**Automate**: Regression tests, smoke tests, repetitive data-driven tests, API tests  
**Don't automate**: One-time tests, exploratory testing, UI tests that change often, subjective tests (UX)

### 12. What is a test framework? Name some.
A structure for organizing, running, and reporting tests.
- **Java**: TestNG, JUnit, Cucumber
- **JavaScript**: Playwright, Cypress, Jest
- **Python**: pytest, Robot Framework

### 13. What is the difference between verification and validation?
- **Verification**: Are we building the product right? (reviews, walkthroughs — static)
- **Validation**: Are we building the right product? (testing with actual software — dynamic)

### 14. What is defect life cycle?
New → Assigned → Open → Fixed → Retest → Verified → Closed  
If not fixed: Reopen → Assigned → Open → Fixed...

### 15. What is severity vs priority?
- **Severity**: Impact of defect on system (Critical/High/Medium/Low)
- **Priority**: How urgently it should be fixed (business decision)
- Example: Typo on login button = Low severity, High priority (visible to all users)

### 16. What is data-driven testing?
Running the same test with multiple sets of input data. Data stored externally (Excel, CSV, JSON).
\`\`\`java
@DataProvider
public Object[][] loginData() {
  return new Object[][]{{"admin","pass"},{"user","pass"}};
}
\`\`\`

### 17. What is keyword-driven testing?
Test cases written as keywords in a table (Excel/CSV). Framework reads keywords and executes corresponding functions. Allows non-technical testers to write test cases.

### 18. What is the difference between load testing, stress testing, and performance testing?
- **Performance testing**: Overall response time and throughput under expected load
- **Load testing**: Behavior under expected maximum load
- **Stress testing**: Behavior beyond capacity — find breaking point

### 19. What is TestNG? List key annotations.
Java testing framework. Key annotations:
- \`@Test\` — mark test method
- \`@BeforeMethod / @AfterMethod\` — run before/after each test
- \`@BeforeClass / @AfterClass\` — run before/after class
- \`@BeforeSuite / @AfterSuite\` — run before/after entire suite
- \`@DataProvider\` — supply test data
- \`@Parameters\` — pass testng.xml parameters

### 20. How do you prioritize test cases when time is limited?
1. Business-critical flows (login, payment, core features)
2. Tests that cover recent changes
3. Previously failed tests
4. High-risk areas
5. Smoke/sanity tests first, regression later`,
        exercises: [],
      },
      {
        id: 5,
        title: "Java / Core Programming for SDET",
        content: `## Java / Core Programming for SDET

### 1. What are the 4 pillars of OOP?
\`\`\`java
// 1. Encapsulation — hide data using private fields + getters/setters
private String name;
public String getName() { return name; }

// 2. Inheritance — child extends parent
class Dog extends Animal { void bark() {} }

// 3. Polymorphism — one interface, multiple behavior
Animal a = new Dog(); a.eat(); // calls Dog's eat()

// 4. Abstraction — hide implementation
abstract class Shape { abstract double area(); }
\`\`\`

### 2. What is the difference between interface and abstract class?
| Interface | Abstract Class |
|-----------|---------------|
| Only abstract methods (Java 7); can have default (Java 8+) | Can have concrete + abstract methods |
| No constructors | Has constructors |
| Multiple interfaces allowed | Single inheritance only |
| All fields are public static final | Can have any access modifiers |
| Use for "can-do" behavior | Use for "is-a" relationship |

### 3. Collections — ArrayList vs LinkedList vs HashMap
\`\`\`java
// ArrayList — fast random access O(1), slow insert/delete O(n)
List<String> list = new ArrayList<>();

// LinkedList — fast insert/delete O(1), slow random access O(n)
List<String> linked = new LinkedList<>();

// HashMap — key-value pairs, O(1) get/put average
Map<String, Integer> map = new HashMap<>();
map.put("a", 1); map.get("a"); map.containsKey("a");

// HashSet — no duplicates, O(1) lookup
Set<String> set = new HashSet<>();
\`\`\`

### 4. What is the difference between == and .equals()?
- \`==\` compares **reference** (memory address)
- \`.equals()\` compares **value** (content)
\`\`\`java
String a = new String("hello");
String b = new String("hello");
a == b        // false (different objects)
a.equals(b)  // true (same content)
\`\`\`

### 5. Checked vs Unchecked Exceptions
- **Checked**: Must be declared or caught at compile time. E.g. \`IOException\`, \`SQLException\`
- **Unchecked**: Runtime exceptions. E.g. \`NullPointerException\`, \`ArrayIndexOutOfBoundsException\`, \`NoSuchElementException\`
\`\`\`java
try {
  driver.findElement(By.id("x")).click();
} catch (NoSuchElementException e) {
  System.out.println("Element not found");
} finally {
  driver.quit(); // always runs
}
\`\`\`

### 6. What is the static keyword in Java?
- **Static variable**: Shared across all instances of class
- **Static method**: Can be called without creating object
- **Static block**: Executed once when class loads
\`\`\`java
public class Config {
  public static final String BASE_URL = "https://app.com";
  public static WebDriver driver;
  static { System.out.println("Class loaded"); }
}
\`\`\`

### 7. String vs StringBuilder vs StringBuffer
| | String | StringBuilder | StringBuffer |
|-|--------|--------------|-------------|
| Mutable | No (immutable) | Yes | Yes |
| Thread-safe | N/A | No | Yes |
| Performance | Slow (creates new obj) | Fast | Slightly slower |
\`\`\`java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World").reverse(); // fast string building
\`\`\`

### 8. What are commonly used String methods?
\`\`\`java
String s = "Hello World";
s.length()              // 11
s.substring(0, 5)       // "Hello"
s.toLowerCase()         // "hello world"
s.toUpperCase()         // "HELLO WORLD"
s.trim()                // remove leading/trailing spaces
s.contains("World")     // true
s.startsWith("Hello")   // true
s.endsWith("World")     // true
s.replace("World","QA") // "Hello QA"
s.split(" ")            // ["Hello","World"]
s.charAt(0)             // 'H'
s.indexOf("o")          // 4
s.isEmpty()             // false
s.equals("other")       // false (case-sensitive)
s.equalsIgnoreCase("hello world") // true
\`\`\`

### 9. What is method overloading vs method overriding?
- **Overloading**: Same method name, different parameters — compile-time polymorphism
\`\`\`java
void click() {}
void click(int x, int y) {}
\`\`\`
- **Overriding**: Child class redefines parent method — runtime polymorphism
\`\`\`java
class Animal { void sound() { System.out.println("..."); } }
class Dog extends Animal { @Override void sound() { System.out.println("Woof"); } }
\`\`\`

### 10. What is a constructor? Types?
Special method called when object is created. No return type.
- **Default constructor**: No-arg, provided by Java if none defined
- **Parameterized constructor**: Accepts arguments
\`\`\`java
public LoginPage(WebDriver driver) {
  this.driver = driver;
  PageFactory.initElements(driver, this);
}
\`\`\`

### 11. How does forEach and lambda work in Java 8+?
\`\`\`java
List<String> names = Arrays.asList("Alice","Bob","Carol");

// Lambda
names.forEach(name -> System.out.println(name));

// Method reference
names.forEach(System.out::println);

// Stream filter
names.stream()
  .filter(n -> n.startsWith("A"))
  .forEach(System.out::println);
\`\`\`

### 12. Common SDET coding questions
\`\`\`java
// Reverse a string
String rev = new StringBuilder("Hello").reverse().toString(); // "olleH"

// Count occurrences of char
String s = "automation";
long count = s.chars().filter(c -> c == 'a').count(); // 3

// Find duplicates in array
int[] arr = {1,2,3,2,4,3};
Set<Integer> seen = new HashSet<>();
for (int n : arr) if (!seen.add(n)) System.out.println("Duplicate: " + n);

// Check palindrome
String word = "racecar";
boolean isPalin = word.equals(new StringBuilder(word).reverse().toString());

// Fibonacci
int n = 10, a = 0, b = 1;
while (a < n) { System.out.print(a + " "); int c = a+b; a=b; b=c; }
\`\`\`

### 13. What is the this keyword in Java?
Refers to the current class instance. Used to:
- Differentiate instance variable from parameter with same name
- Call another constructor: \`this()\`
- Pass current object as argument

### 14. What is the final keyword?
- **final variable**: Cannot be reassigned (constant)
- **final method**: Cannot be overridden
- **final class**: Cannot be extended
\`\`\`java
public static final String URL = "https://app.com"; // constant
\`\`\`

### 15. ArrayList vs Array?
| ArrayList | Array |
|-----------|-------|
| Dynamic size | Fixed size |
| Slower (boxing) | Faster |
| Only objects | Primitives + objects |
| Has built-in methods | Limited |
\`\`\`java
ArrayList<String> list = new ArrayList<>();
list.add("a"); list.remove("a"); list.size(); list.contains("a");
\`\`\``,
        exercises: [
          { title: "Reverse a string", description: "Write Java method to reverse a string without using StringBuilder.reverse()." },
          { title: "Find duplicates in array", description: "Given an int array, find and print all duplicate values using HashMap." },
          { title: "Check if palindrome", description: "Write a method isPalindrome(String s) that returns true if the string reads the same forwards and backwards." },
          { title: "Count vowels in a string", description: "Write a Java method to count the number of vowels (a,e,i,o,u) in a given string." },
        ],
      },
    ],
  },
};
