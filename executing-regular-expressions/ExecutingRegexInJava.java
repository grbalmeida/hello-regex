import java.util.regex.*;

public class ExecutingRegexInJava {
    public static void main(String[] args) {
        String text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

        Pattern letters = Pattern.compile(("[a-f]"));

        Matcher matcher = letters.matcher((text));

        while(matcher.find()) {
            System.out.printf(
                "Positions: %s, %s\tValue: %s%n",
                matcher.start(),
                matcher.end(),
                matcher.group()
            );
        }

        System.out.println(text.replaceAll("[7-9]", "Achei"));
    }
}