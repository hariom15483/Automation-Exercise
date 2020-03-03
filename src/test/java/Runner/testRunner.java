package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\eclipse-workspace\\maven_hari_1\\Features\\login.feature", //the path of the feature files
		glue={"stepDefinition"}, //the path of the step definition files
		format= {"pretty","html:test-outout"}, //to generate different types of reporting
		monochrome = true //display the console output in a proper readable format
		//strict = true, //it will check if any step is not defined in step definition file
		//dryRun = true //to check the mapping is proper between feature file and step def file
		//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
		) 

public class testRunner {

}
