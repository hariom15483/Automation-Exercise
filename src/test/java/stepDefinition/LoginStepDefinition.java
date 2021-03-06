package stepDefinition;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	//WebDriver driver;
	public static final WebDriver driver = new ChromeDriver();
	JavascriptExecutor js = (JavascriptExecutor)driver;
	WebDriverWait wait =  new WebDriverWait(driver, 20);
	String order_ref_id;
	String order_ref_id_from_history;
	
	@Given("^user is already on Login Page$")
	public void user_alredy_on_login_page() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\eclipse-workspace\\newchrome\\chromedriver.exe");
		 //driver = new ChromeDriver();
		driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
		System.out.print(driver.getTitle());
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
	}
	
	@When("^title of login page is Login - My Store$")
	public void title_of_login_page() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Login - My Store", title);			
	}
	
	@Then("^user enters username and password$")
	public void enter_username_and_password() {
		driver.findElement(By.name("email")).sendKeys("hariomchouhan@gmail.com");
	    driver.findElement(By.name("passwd")).sendKeys("hariom");
	}
	@Then("^user clicks on login button$")
	public void click_on_login_button() {
		driver.findElement(By.name("SubmitLogin")).click();	
		try {
			Thread.sleep(5000);
			}catch(Exception e) {System.out.println(e);}
	}
	
	@When ("^title of home page is My account - My Store$")
	public void title_of_home_page() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("My account - My Store", title);		
	}
	@Then ("^print massege user logged in successfully$")
	public void print_message() {
		System.out.println("User logged in successfully");
		
	}

////////////////////////////////////////////////////////////////////////////
	@Given ("^user should be on T-shirt page$")
	public void user_is_on_search_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\eclipse-workspace\\newchrome\\chromedriver.exe");
		driver.get("http://automationpractice.com/index.php?id_category=5&controller=category");
		//driver.findElement(by)selectProductSort
		//driver.findElement(By.id("selectProductSort")).click();	
		
	}
	@Then ("^user should click on Add to cart$")
	public void user_should_click_on_addtocart() {
	js.executeScript("document.querySelector('[title=\"Add to cart\"]').click()");
	
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	js.executeScript("window.scrollBy(0,600)");
	
	}
	@Then ("^user should click on proced to checkout$")
	public void user_should_click_on_proced_to_checkout() {
		js.executeScript("window.scrollBy(0,600)");
		driver.findElement(By.cssSelector("[title=\"Proceed to checkout\"]")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		js.executeScript("window.scrollBy(0,1000)");
		js.executeScript("document.querySelectorAll('[title=\"Proceed to checkout\"]')[1].click();");
		
	}
	@Then ("^user should click on proced to checkout on address tab$")
	public void user_should_click_on_proced_to_checkout_on_address_tab() {
		js.executeScript("window.scrollBy(0,1000)");
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[name=\"processAddress\"]")));
		driver.findElement(By.cssSelector("[name=\"processAddress\"]")).click();
	}
	@Then ("^user should click on proceed to checkout on Shipping tab$")
	public void user_should_click_on_proced_to_checkout_on_Shipping_tab() {
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[name=\"processCarrier\"]")));
		driver.findElement(By.id("cgv")).click();
		js.executeScript("window.scrollBy(0,100)");
		js.executeScript("document.querySelectorAll('[name=\"processCarrier\"]')[0].click();");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@Then ("^user should select pay by bank wire$")
	public void user_should_select_pay_by_bank() {
		js.executeScript("document.querySelectorAll('[title=\"Pay by bank wire\"]')[0].click();");
		//driver.findElement(By.cssSelector("title=\"Pay by bank wire\"")).click(); 
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		js.executeScript("window.scrollBy(0,1000)");
		js.executeScript("document.querySelectorAll('[type=\"submit\"]')[1].click();");
	}
	@Then ("^print message order placed seccessfully$")
	public void print_message_order_placed() {
		System.out.println("order placed seccessfully");
		
	}
	@Given ("^extract order ref id from placed order$")
	public void extract_order_ref_id_from_order() {
		String orderRef  = (String) js.executeScript("return document.querySelectorAll('.box')[0].textContent.replace(/[a-z 0-9]/g, '').split('-D')[1].split('.')[0]");
		order_ref_id = orderRef;
		System.out.println("\n This is the order reference number -> "+orderRef);
	}
	@Then ("^click on back to order button$")
	public void click_on_back_to_order_button() {
		js.executeScript("window.scrollBy(0,1000)");
		js.executeScript("document.querySelector('[title=\"Back to orders\"]').click();");
		//driver.findElement(By.cssSelector("title=\"Back to orders\"")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@Then ("^extract first order item ref id from order history page$")
	public void extract_first_item_order_id_from_order_history() {
		String orderList = (String) js.executeScript("return document.querySelectorAll('.first_item td')[0].textContent.trim()");
		order_ref_id_from_history = orderList;
	     System.out.println("This is the value fetched from ORder history -> "+orderList);
		
	}
	@Then ("^compare both ref id both ref id should be same$")
	public void compare_both_id_should_be_same() {
		Assert.assertEquals(order_ref_id, order_ref_id_from_history);
	}
	
	@Then ("^print message order found in history page$")
	public void print_message_order_found_in_history() {
		System.out.println("message order found in history page");
	}
/////////////////////////////////////////////////////////////////////////////////
	@Then ("^user should be on Personal info page$")
	public void user_should_be_on_personal_info_page() {
		driver.findElement(By.cssSelector("[title=\"Information\"]")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	@Then ("^clear value of first name field$")
	public void clear_value_from_first_name_field() {
		driver.findElement(By.id("firstname")).clear();
	}
	@Then ("^insert a value from random string$")
	public void insert_a_value_from_random_string() {
		String[] names = {"hariom","hari","hari.om"};
		int idx = new Random().nextInt(names.length);
		String randomName = (names[idx]);
		driver.findElement(By.id("firstname")).sendKeys(randomName);
        driver.findElement(By.id("old_passwd")).sendKeys("hariom");
	}
	@Then ("^click on save button$")
	public void click_on_save_button() {
		driver.findElement(By.cssSelector("[name=\"submitIdentity\"]")).click();
	
	}
	@Then ("^print message personal information updated successfully$")
	public void print_message_personal_info_updated() {
		System.out.println("personal information updated successfully");
	}
}
	

	
	
	
	
	
	
	

	


