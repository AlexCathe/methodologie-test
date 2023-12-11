/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testexo1;

import java.time.ZonedDateTime;
import java.util.Scanner;

/**
 *
 * @author remic
 */
public class TestExo1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        ZonedDateTime zdt = ZonedDateTime.now();
        String hello = getCurrentHourTime(zdt);
        
        
        
        System.out.println(hello);
        while(true) {
 
            Scanner userInput = new Scanner(System.in);
            
            if(userInput.hasNext()) {
                
                String input = userInput.nextLine();

                
                if (input.equals("exit")){
                    System.out.println("Au revoir !");
                    break;
                }
               
                String output = getInputReverse(input);
                
                System.out.println(output);
                
            }
        }
    }
    
    public static String getInputReverse(String input) {
        char[] reverse = input.toCharArray() ;
        int j=0;
        for (int i=input.length()-1; i>=0; i--) {
            reverse[j] = input.charAt(i);
            j++;
        }
                      
        String output = String.valueOf(reverse);

        if (output.equals(input)){
            System.out.println("Bravo !");
        }
        
        return output;
    }
    
    public static String getCurrentHourTime(ZonedDateTime zdt) {
        int hour = zdt.getHour();
        String currentHourTime;
        
        if (hour>=6 && hour<=17) {
            currentHourTime = "Bonjour !";
        }
        else {
            currentHourTime = "Bonsoir !";
        }
        
        return currentHourTime;
       
    } 
    
}
