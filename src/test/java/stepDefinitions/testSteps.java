package stepDefinitions;

import java.util.concurrent.TimeUnit;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;




public class testSteps {


static WebDriver driver;
	@Given("^User is opens the browser and enter the facebook url$")
	public void user_is_opens_the_browser_and_enter_the_facebook_url() throws Throwable {
		System.setProperty("webdriver.chrome.driver","D:\\softwares\\chromedriver_win32\\chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.manage().window().maximize();
	     driver.get("https://www.facebook.com/");
	      driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	      
	}

	@Given("^User navigates  to the login$")
	public void user_navigates_to_the_login() throws Throwable {
		System.out.println("User naviagates to the login page");
	}

	@When("^User enters valid \"([^\"]*)\" and valid \"([^\"]*)\" click on the login button$")
	public void user_enters_valid_and_valid_click_on_the_login_button(String username, String password) throws Throwable {

		System.out.println("Enters the valid user name and password");
		
		 driver.findElement(By.name("email")).sendKeys(username);
		   
			driver.findElement(By.name("pass")).sendKeys(password);
			
		
			
		
	}

	@Then("^User navigates to facebook home page$")
	public void user_navigates_to_facebook_home_page() throws Throwable {
		System.out.println("users naviagates to the facebook home page");
		Thread.sleep(5000);
		driver.close();
	}

	
	
	
}
